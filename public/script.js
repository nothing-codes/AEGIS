// ========================================
// AEGIS ANTIVIRUS WEBSITE - MAIN SCRIPT
// ========================================

const translations = {
    ru: {
        // Navigation
        'nav-home': 'Главная',
        'nav-features': 'Возможности',
        'nav-download': 'Скачать',
        'nav-support': 'Поддержка',
        'login': 'Войти',
        'logout': 'Выход',
        'register': 'Регистрация',
        
        // Auth
        'welcome-back': 'С возвращением!',
        'create-account': 'Создать аккаунт',
        'email': 'Email',
        'password': 'Пароль',
        'confirm-password': 'Подтвердите пароль',
        'remember-me': 'Запомнить меня',
        'forgot-password': 'Забыли пароль?',
        'have-account': 'Уже есть аккаунт?',
        'no-account': 'Нет аккаунта?',
        'sign-up': 'Регистрация',
        
        // Messages
        'logout-success': 'Вы вышли из системы',
        'registration-success': 'Регистрация успешна!',
        'login-success': 'Вход выполнен успешно!',
        
        // Home page
        'hero-badge': 'Новое поколение защиты',
        'hero-title-1': 'Максимальная',
        'hero-title-2': 'Защита',
        'hero-title-3': 'Вашего ПК',
        'hero-subtitle': 'AEGIS использует передовые технологии искусственного интеллекта для обнаружения и блокировки угроз в реальном времени',
        'detection-rate': 'Обнаружение угроз',
        'users': 'Пользователей',
        'protection': 'Защита',
        'download-now': 'Скачать бесплатно',
        'watch-demo': 'Узнать больше',
        'trusted-by': 'Нам доверяют:',
        'why-aegis': 'Почему AEGIS?',
        'why-aegis-desc': 'Передовые технологии для вашей безопасности',
        'ai-protection': 'ИИ Защита',
        'ai-protection-desc': 'Машинное обучение для обнаружения новых угроз',
        'fast-scan': 'Быстрое сканирование',
        'fast-scan-desc': 'Проверка системы за секунды',
        'cloud-protection': 'Облачная защита',
        'cloud-protection-desc': 'Постоянные обновления из облака',
        'ready-to-protect': 'Готовы защитить свой компьютер?',
        'join-millions': 'Присоединяйтесь к миллионам пользователей',
        'get-started': 'Начать сейчас',
        
        // Features page
        'features-title': 'Возможности AEGIS',
        'features-subtitle': 'Полная защита для вашей цифровой жизни',
        'feature-realtime': 'Защита в реальном времени',
        'feature-realtime-desc': 'Непрерывный мониторинг вашей системы 24/7. Мгновенное обнаружение и блокировка угроз до того, как они смогут навредить вашему компьютеру.',
        'feature-ai': 'ИИ Защита',
        'feature-ai-desc': 'Продвинутые алгоритмы машинного обучения обнаруживают новые и неизвестные угрозы, которые традиционные антивирусы могут пропустить.',
        'feature-fast': 'Быстрое сканирование',
        'feature-fast-desc': 'Молниеносное сканирование системы за секунды, а не минуты. Минимальное влияние на производительность системы.',
        'feature-cloud': 'Облачная защита',
        'feature-cloud-desc': 'Всегда актуальная база угроз через облачную синхронизацию. Защита от новейших угроз по всему миру.',
        'feature-web': 'Веб-защита',
        'feature-web-desc': 'Безопасный серфинг с защитой от вредоносных сайтов, фишинга и опасных загрузок.',
        'feature-privacy': 'Защита конфиденциальности',
        'feature-privacy-desc': 'Защитите свои личные данные от хакеров и похитителей личных данных. Обезопасьте вашу конфиденциальную информацию.',
        
        // Download page
        'download-title': 'Скачать AEGIS',
        'download-subtitle': 'Скачайте лучшую защиту для вашего ПК',
        'recommended': 'Рекомендуется',
        'version': 'Версия',
        'file-size': 'Размер файла',
        'release-date': 'Дата выпуска',
        'system-req': 'Требования',
        'download-windows': 'Скачать для Windows',
        'system-requirements': 'Системные требования',
        'req-os': 'Windows 10 или Windows 11 (64-bit)',
        'req-ram': 'Минимум 2 ГБ оперативной памяти',
        'req-disk': '500 МБ свободного места на диске',
        'req-internet': 'Интернет-соединение для обновлений',
        'install-guide': 'Руководство по установке',
        'step1-title': 'Скачайте',
        'step1-desc': 'Нажмите кнопку скачать и сохраните файл',
        'step2-title': 'Установите',
        'step2-desc': 'Запустите установщик и следуйте инструкциям',
        'step3-title': 'Защита',
        'step3-desc': 'AEGIS автоматически активирует защиту',
        
        // Support page
        'supporters-title': 'Наши сторонники',
        'supporters-subtitle': 'Спасибо всем, кто поддерживает развитие AEGIS',
        'supporter-msg1': '"Отличный антивирус, рад поддерживать!"',
        'supporter-msg2': '"Используем AEGIS для защиты корпоративной сети"',
        'supporter-msg3': '"Лучший антивирус, который я использовала"',
        'transparency-title': 'Прозрачность использования средств',
        'chart-dev': 'Разработка - 45%',
        'chart-dev-desc': 'Зарплаты разработчиков, инструменты',
        'chart-infra': 'Инфраструктура - 30%',
        'chart-infra-desc': 'Серверы, облачные сервисы, CDN',
        'chart-research': 'Исследования - 15%',
        'chart-research-desc': 'Анализ угроз, разработка алгоритмов',
        'chart-support': 'Поддержка - 10%',
        'chart-support-desc': 'Техническая поддержка пользователей',
        'faq-title': 'Часто задаваемые вопросы',
        'faq-q1': 'Действительно ли AEGIS бесплатный?',
        'faq-a1': 'Да, AEGIS полностью бесплатен для личного использования. Все основные функции защиты доступны без оплаты.',
        'faq-q2': 'Можно ли использовать AEGIS с другим антивирусом?',
        'faq-a2': 'Рекомендуем удалить другие антивирусы перед установкой AEGIS для избежания конфликтов.',
        'faq-q3': 'Как часто обновляется база данных вирусов?',
        'faq-a3': 'База данных обновляется автоматически несколько раз в день через облачную систему.',
        
        // Dashboard / Profile
        'welcome': 'Добро пожаловать',
        'personal-info': 'Личная информация',
        'full-name': 'Полное имя',
        'member-since': 'Участник с',
        'account-type': 'Тип аккаунта',
        'preferences': 'Настройки',
        'email-notifications': 'Email уведомления',
        'email-notifications-desc': 'Получать новости и обновления по email',
        'dark-mode': 'Темная тема',
        'dark-mode-desc': 'Использовать темную тему интерфейса',
        'two-factor': 'Двухфакторная аутентификация',
        'two-factor-desc': 'Добавить дополнительную защиту аккаунта',
        'security': 'Безопасность',
        'change-password': 'Изменить пароль',
        'change-password-desc': 'Обновить пароль аккаунта',
        'active-sessions': 'Активные сессии',
        'active-sessions-desc': 'Управление устройствами',
        'danger-zone': 'Опасная зона',
        'delete-account': 'Удалить аккаунт',
        'delete-account-desc': 'Навсегда удалить аккаунт и все данные',
        
        // Footer
        'all-rights': 'Все права защищены',
        'product': 'Продукт',
        'support': 'Поддержка',
        'company': 'Компания',
        'help': 'Помощь',
        'contact': 'Контакты',
        'docs': 'Документация',
        'about': 'О нас',
        'blog': 'Блог',
        'careers': 'Карьера',
        'footer-desc': 'Защита нового поколения для вашего цифрового мира'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-download': 'Download',
        'nav-support': 'Support',
        'login': 'Login',
        'logout': 'Logout',
        'register': 'Register',
        
        // Auth
        'welcome-back': 'Welcome Back!',
        'create-account': 'Create Account',
        'email': 'Email',
        'password': 'Password',
        'confirm-password': 'Confirm Password',
        'remember-me': 'Remember me',
        'forgot-password': 'Forgot password?',
        'have-account': 'Already have an account?',
        'no-account': "Don't have an account?",
        'sign-up': 'Sign Up',
        
        // Messages
        'logout-success': 'You have been logged out',
        'registration-success': 'Registration successful!',
        'login-success': 'Login successful!',
        
        // Home page
        'hero-badge': 'Next Generation Protection',
        'hero-title-1': 'Maximum',
        'hero-title-2': 'Protection',
        'hero-title-3': 'For Your PC',
        'hero-subtitle': 'AEGIS uses advanced artificial intelligence technologies to detect and block threats in real-time',
        'detection-rate': 'Threat Detection',
        'users': 'Users',
        'protection': 'Protection',
        'download-now': 'Download Free',
        'watch-demo': 'Learn More',
        'trusted-by': 'Trusted by:',
        'why-aegis': 'Why AEGIS?',
        'why-aegis-desc': 'Advanced technologies for your security',
        'ai-protection': 'AI Protection',
        'ai-protection-desc': 'Machine learning for new threat detection',
        'fast-scan': 'Fast Scanning',
        'fast-scan-desc': 'System check in seconds',
        'cloud-protection': 'Cloud Protection',
        'cloud-protection-desc': 'Continuous updates from the cloud',
        'ready-to-protect': 'Ready to protect your computer?',
        'join-millions': 'Join millions of users worldwide',
        'get-started': 'Get Started',
        
        // Features page
        'features-title': 'AEGIS Features',
        'features-subtitle': 'Complete protection for your digital life',
        'feature-realtime': 'Real-time Protection',
        'feature-realtime-desc': 'Continuous monitoring of your system 24/7. Instant detection and blocking of threats before they can harm your computer.',
        'feature-ai': 'AI Protection',
        'feature-ai-desc': 'Advanced machine learning algorithms detect new and unknown threats that traditional antivirus software might miss.',
        'feature-fast': 'Fast Scanning',
        'feature-fast-desc': 'Lightning-fast system scans that complete in seconds, not minutes. Minimal impact on system performance.',
        'feature-cloud': 'Cloud Protection',
        'feature-cloud-desc': 'Always up-to-date threat database through cloud synchronization. Protection against the latest threats worldwide.',
        'feature-web': 'Web Protection',
        'feature-web-desc': 'Safe browsing with protection against malicious websites, phishing attempts, and dangerous downloads.',
        'feature-privacy': 'Privacy Protection',
        'feature-privacy-desc': 'Keep your personal data safe from hackers and identity thieves. Secure your sensitive information.',
        
        // Download page
        'download-title': 'Download AEGIS',
        'download-subtitle': 'Download the best protection for your PC',
        'recommended': 'Recommended',
        'version': 'Version',
        'file-size': 'File Size',
        'release-date': 'Release Date',
        'system-req': 'Requirements',
        'download-windows': 'Download for Windows',
        'system-requirements': 'System Requirements',
        'req-os': 'Windows 10 or Windows 11 (64-bit)',
        'req-ram': '2 GB RAM minimum',
        'req-disk': '500 MB free disk space',
        'req-internet': 'Internet connection for updates',
        'install-guide': 'Installation Guide',
        'step1-title': 'Download',
        'step1-desc': 'Click the download button and save the file',
        'step2-title': 'Install',
        'step2-desc': 'Run the installer and follow the instructions',
        'step3-title': 'Protect',
        'step3-desc': 'AEGIS will automatically activate protection',
        
        // Support page
        'supporters-title': 'Our Supporters',
        'supporters-subtitle': 'Thanks to everyone who supports AEGIS development',
        'supporter-msg1': '"Great antivirus, happy to support!"',
        'supporter-msg2': '"We use AEGIS to protect our corporate network"',
        'supporter-msg3': '"Best antivirus I\'ve ever used"',
        'transparency-title': 'Transparency of Fund Usage',
        'chart-dev': 'Development - 45%',
        'chart-dev-desc': 'Developer salaries, tools',
        'chart-infra': 'Infrastructure - 30%',
        'chart-infra-desc': 'Servers, cloud services, CDN',
        'chart-research': 'Research - 15%',
        'chart-research-desc': 'Threat analysis, algorithm development',
        'chart-support': 'Support - 10%',
        'chart-support-desc': 'User technical support',
        'faq-title': 'Frequently Asked Questions',
        'faq-q1': 'Is AEGIS really free?',
        'faq-a1': 'Yes, AEGIS is completely free for personal use. All basic protection features are available without payment.',
        'faq-q2': 'Can I use AEGIS with another antivirus?',
        'faq-a2': 'We recommend uninstalling other antivirus software before installing AEGIS to avoid conflicts.',
        'faq-q3': 'How often is the virus database updated?',
        'faq-a3': 'The database is automatically updated several times a day through our cloud system.',
        
        // Dashboard / Profile
        'welcome': 'Welcome',
        'personal-info': 'Personal Information',
        'full-name': 'Full Name',
        'member-since': 'Member Since',
        'account-type': 'Account Type',
        'preferences': 'Preferences',
        'email-notifications': 'Email Notifications',
        'email-notifications-desc': 'Receive updates and news via email',
        'dark-mode': 'Dark Mode',
        'dark-mode-desc': 'Use dark theme for the interface',
        'two-factor': 'Two-Factor Authentication',
        'two-factor-desc': 'Add extra security to your account',
        'security': 'Security',
        'change-password': 'Change Password',
        'change-password-desc': 'Update your account password',
        'active-sessions': 'Active Sessions',
        'active-sessions-desc': 'Manage your logged in devices',
        'danger-zone': 'Danger Zone',
        'delete-account': 'Delete Account',
        'delete-account-desc': 'Permanently delete your account and all data',
        
        // Footer
        'all-rights': 'All rights reserved',
        'product': 'Product',
        'support': 'Support',
        'company': 'Company',
        'help': 'Help',
        'contact': 'Contact',
        'docs': 'Documentation',
        'about': 'About',
        'blog': 'Blog',
        'careers': 'Careers',
        'footer-desc': 'Next generation protection for your digital world'
    }
};

// Global state
var currentLanguage = localStorage.getItem('language') || 'en';
var currentTheme = localStorage.getItem('theme') || 'dark';
var currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    setLanguage(currentLanguage);
    initializeThemeToggle();
    initializeLanguageSelect();
    initializeMobileMenu();
    initializeForms();
    updateAuthUI();
    initializeParticles();
    initializeDashboard();
});

function initializeThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (btn) {
        updateThemeIcon();
        btn.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    var btn = document.getElementById('themeToggle');
    if (btn) {
        var icon = btn.querySelector('i');
        if (icon) icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

function initializeLanguageSelect() {
    var sel = document.getElementById('languageSelect');
    if (sel) {
        sel.value = currentLanguage;
        sel.addEventListener('change', function() { setLanguage(this.value); });
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    var sel = document.getElementById('languageSelect');
    if (sel) sel.value = lang;
    document.documentElement.lang = lang;
    translatePage();
}

function translatePage() {
    var elements = document.querySelectorAll('[data-translate]');
    elements.forEach(function(el) {
        var key = el.getAttribute('data-translate');
        var text = translations[currentLanguage][key];
        if (text) {
            if (el.tagName === 'INPUT' && el.type === 'submit') {
                el.value = text;
            } else if (el.tagName === 'INPUT') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });
}

function initializeMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var menu = document.querySelector('.nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

function updateAuthUI() {
    var loginBtn = document.getElementById('loginBtn');
    var registerBtn = document.getElementById('registerBtn');
    if (currentUser) {
        if (loginBtn) {
            loginBtn.textContent = translations[currentLanguage]['logout'];
            loginBtn.href = '#';
            loginBtn.onclick = logout;
        }
        if (registerBtn) {
            registerBtn.innerHTML = '<i class="fas fa-user"></i> ' + currentUser.name;
            registerBtn.href = '/dashboard';
        }
    } else {
        if (loginBtn) {
            loginBtn.textContent = translations[currentLanguage]['login'];
            loginBtn.href = '/login';
            loginBtn.onclick = null;
        }
        if (registerBtn) {
            registerBtn.textContent = translations[currentLanguage]['register'];
            registerBtn.href = '/register';
        }
    }
}

function login(email, password) {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var user = users.find(function(u) { return u.email === email && u.password === password; });
    if (user) {
        currentUser = { id: user.id, name: user.name, email: user.email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('sessionId', 'session_' + Date.now());
        showNotification(translations[currentLanguage]['login-success'], 'success');
        setTimeout(function() { window.location.href = '/dashboard'; }, 1000);
        return true;
    }
    showNotification('Invalid email or password', 'error');
    return false;
}

function register(email, password, confirmPassword) {
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return false;
    }
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters', 'error');
        return false;
    }
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(function(u) { return u.email === email; })) {
        showNotification('User already exists', 'error');
        return false;
    }
    var newUser = {
        id: 'user_' + Date.now(),
        name: email.split('@')[0],
        email: email,
        password: password,
        registeredAt: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = { id: newUser.id, name: newUser.name, email: newUser.email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('sessionId', 'session_' + Date.now());
    showNotification(translations[currentLanguage]['registration-success'], 'success');
    setTimeout(function() { window.location.href = '/dashboard'; }, 1000);
    return true;
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('sessionId');
    showNotification(translations[currentLanguage]['logout-success'], 'success');
    setTimeout(function() { window.location.href = '/'; }, 1000);
}

function initializeForms() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            login(document.getElementById('email').value, document.getElementById('password').value);
        });
    }
    var registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            register(
                document.getElementById('email').value,
                document.getElementById('password').value,
                document.getElementById('confirmPassword').value
            );
        });
    }
}

function initializeParticles() {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#6366f1' },
                shape: { type: 'circle' },
                opacity: { value: 0.5 },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#6366f1', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: 'none', out_mode: 'out' }
            },
            interactivity: {
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } }
            },
            retina_detect: true
        });
    }
}

function initializeDashboard() {
    var path = window.location.pathname;
    if (path === '/dashboard' || path === '/dashboard.html') {
        if (!currentUser) {
            window.location.href = '/login';
            return;
        }
        var nameEl = document.getElementById('userName');
        var emailEl = document.getElementById('userEmail');
        var sinceEl = document.getElementById('userSince');
        if (nameEl) nameEl.textContent = currentUser.name;
        if (emailEl) emailEl.textContent = currentUser.email;
        if (sinceEl) {
            var users = JSON.parse(localStorage.getItem('users') || '[]');
            var user = users.find(function(u) { return u.id === currentUser.id; });
            if (user) sinceEl.textContent = new Date(user.registeredAt).toLocaleDateString();
        }
    }
}

function showNotification(message, type) {
    var existing = document.querySelector('.notification');
    if (existing) existing.remove();
    var notification = document.createElement('div');
    notification.className = 'notification notification-' + (type || 'info');
    var iconClass = type === 'success' ? 'check-circle' : (type === 'error' ? 'exclamation-circle' : 'info-circle');
    notification.innerHTML = '<div class="notification-content"><i class="fas fa-' + iconClass + '"></i><span>' + message + '</span></div><button class="notification-close"><i class="fas fa-times"></i></button>';
    document.body.appendChild(notification);
    setTimeout(function() { notification.classList.add('show'); }, 100);
    setTimeout(function() {
        notification.classList.remove('show');
        setTimeout(function() { notification.remove(); }, 300);
    }, 5000);
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(function() { notification.remove(); }, 300);
    });
}

function downloadFile(platform) {
    showNotification('Starting download for ' + platform + '...', 'success');
}

window.AegisApp = {
    setLanguage: setLanguage,
    toggleTheme: toggleTheme,
    login: login,
    register: register,
    logout: logout,
    showNotification: showNotification,
    downloadFile: downloadFile
};