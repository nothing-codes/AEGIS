// ========================================
// SUPABASE CONFIGURATION
// ========================================
// Замени эти значения на свои из Supabase Dashboard
// Settings → API → Project URL и anon public key

const SUPABASE_URL = 'https://pgijhusogwvtlaoxtqow.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_bjVuVHnhJ9xbvzwE2UMLBw_beWiu8e-';

// Инициализация Supabase клиента
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========================================
// AUTH FUNCTIONS
// ========================================

async function supabaseRegister(email, password, confirmPassword) {
    if (password !== confirmPassword) {
        showNotification(translations[currentLanguage]['passwords-not-match'], 'error');
        return false;
    }
    if (password.length < 6) {
        showNotification(translations[currentLanguage]['password-min-6'], 'error');
        return false;
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: email.split('@')[0]
                }
            }
        });

        if (error) {
            if (error.message.includes('already registered')) {
                showNotification(translations[currentLanguage]['user-exists'], 'error');
            } else {
                showNotification(error.message, 'error');
            }
            return false;
        }

        // Сохраняем профиль в таблицу profiles
        if (data.user) {
            await supabase.from('profiles').upsert({
                id: data.user.id,
                email: email,
                name: email.split('@')[0],
                created_at: new Date().toISOString()
            });

            currentUser = {
                id: data.user.id,
                name: email.split('@')[0],
                email: email
            };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }

        showNotification(translations[currentLanguage]['registration-success'], 'success');
        setTimeout(function() { window.location.href = '/dashboard'; }, 1000);
        return true;

    } catch (err) {
        showNotification('Ошибка подключения к серверу', 'error');
        console.error(err);
        return false;
    }
}

async function supabaseLogin(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            showNotification(translations[currentLanguage]['invalid-credentials'], 'error');
            return false;
        }

        // Получаем профиль пользователя
        const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();

        currentUser = {
            id: data.user.id,
            name: profile?.name || email.split('@')[0],
            email: email
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        showNotification(translations[currentLanguage]['login-success'], 'success');
        setTimeout(function() { window.location.href = '/dashboard'; }, 1000);
        return true;

    } catch (err) {
        showNotification('Ошибка подключения к серверу', 'error');
        console.error(err);
        return false;
    }
}

async function supabaseLogout() {
    try {
        await supabase.auth.signOut();
        currentUser = null;
        localStorage.removeItem('currentUser');
        showNotification(translations[currentLanguage]['logout-success'], 'success');
        setTimeout(function() { window.location.href = '/'; }, 1000);
    } catch (err) {
        console.error(err);
    }
}

async function checkSession() {
    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .single();

            currentUser = {
                id: session.user.id,
                name: profile?.name || session.user.email.split('@')[0],
                email: session.user.email
            };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            currentUser = null;
            localStorage.removeItem('currentUser');
        }
        updateAuthUI();
    } catch (err) {
        console.error(err);
    }
}

async function updateProfile(name, phone) {
    if (!currentUser) return false;
    
    try {
        const { error } = await supabase
            .from('profiles')
            .update({ name: name, phone: phone })
            .eq('id', currentUser.id);

        if (error) {
            showNotification('Ошибка сохранения', 'error');
            return false;
        }

        currentUser.name = name;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showNotification(translations[currentLanguage]['profile-saved'], 'success');
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

async function changePassword(currentPassword, newPassword) {
    try {
        const { error } = await supabase.auth.updateUser({
            password: newPassword
        });

        if (error) {
            showNotification(translations[currentLanguage]['wrong-password'], 'error');
            return false;
        }

        showNotification(translations[currentLanguage]['password-changed'], 'success');
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

async function deleteAccount() {
    if (!currentUser) return false;
    
    try {
        // Удаляем профиль
        await supabase.from('profiles').delete().eq('id', currentUser.id);
        
        // Выходим
        await supabase.auth.signOut();
        currentUser = null;
        localStorage.removeItem('currentUser');
        
        showNotification(translations[currentLanguage]['account-deleted'], 'success');
        setTimeout(function() { window.location.href = '/'; }, 1000);
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

// Переопределяем глобальные функции
window.register = supabaseRegister;
window.login = supabaseLogin;
window.logout = supabaseLogout;

// Проверяем сессию при загрузке
document.addEventListener('DOMContentLoaded', checkSession);
