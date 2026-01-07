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
        
        // Auth pages
        'welcome-back': 'С возвращением!',
        'welcome-back-desc': 'Войдите в свой аккаунт для доступа к панели управления и настройкам защиты',
        'create-account': 'Создать аккаунт',
        'create-account-desc': 'Заполните форму для регистрации',
        'login-to-account': 'Вход в аккаунт',
        'login-desc': 'Введите свои данные для входа',
        'email': 'Email',
        'password': 'Пароль',
        'confirm-password': 'Подтвердите пароль',
        'remember-me': 'Запомнить меня',
        'forgot-password': 'Забыли пароль?',
        'have-account': 'Уже есть аккаунт?',
        'no-account': 'Нет аккаунта?',
        'sign-in': 'Войти',
        'sign-up': 'Зарегистрироваться',
        'or': 'или',
        'secure-login': 'Защищённый вход',
        'start-protection': 'Начните защиту сегодня',
        'start-protection-desc': 'Создайте бесплатный аккаунт и получите доступ ко всем возможностям AEGIS',
        'join-users': 'Присоединяйтесь к 50M+ пользователей',
        'min-6-chars': 'Минимум 6 символов',
        'repeat-password': 'Повторите пароль',
        'enter-password': 'Введите пароль',
        'agree-terms': 'Я согласен с',
        'terms-of-use': 'условиями использования',
        'password-strength': 'Надёжность пароля',
        'weak': 'Слабый',
        'medium': 'Средний',
        'good': 'Хороший',
        'excellent': 'Отличный',
        
        // Auth features
        'encryption-256': '256-bit шифрование',
        'encryption-desc': 'Ваши данные надёжно защищены',
        'privacy': 'Приватность',
        'privacy-desc': 'Мы не передаём ваши данные третьим лицам',
        'fast-access': 'Быстрый доступ',
        'fast-access-desc': 'Мгновенный вход в систему',
        'realtime-protection': 'Защита в реальном времени',
        'realtime-protection-desc': '24/7 мониторинг угроз',
        'ai-tech': 'ИИ технологии',
        'ai-tech-desc': 'Умное обнаружение вирусов',
        'free-forever': 'Бесплатно навсегда',
        'free-forever-desc': 'Без скрытых платежей',
        'auto-updates': 'Автообновления',
        'auto-updates-desc': 'Всегда актуальная защита',

        // Messages
        'logout-success': 'Вы вышли из системы',
        'registration-success': 'Регистрация успешна!',
        'login-success': 'Вход выполнен успешно!',
        'profile-saved': 'Профиль успешно сохранён',
        'password-changed': 'Пароль успешно изменён',
        'account-deleted': 'Аккаунт удалён',
        'fill-all-fields': 'Заполните все поля',
        'passwords-not-match': 'Пароли не совпадают',
        'password-min-6': 'Пароль должен быть минимум 6 символов',
        'wrong-password': 'Неверный текущий пароль',
        'invalid-credentials': 'Неверный email или пароль',
        'user-exists': 'Пользователь уже существует',
        
        // Home page
        'hero-badge': 'Новое поколение защиты',
        'hero-title-1': 'Максимальная',
        'hero-title-2': 'Защита',
        'hero-title-3': 'Вашего ПК',
        'hero-subtitle': 'AEGIS использует передовые технологии искусственного интеллекта для обнаружения и блокировки даже самых сложных угроз в режиме реального времени',
        'detection-rate': 'Обнаружение угроз',
        'users': 'Пользователей',
        'protection': 'Защита',
        'download-free': 'Скачать бесплатно',
        'watch-demo': 'Смотреть демо',
        'learn-more': 'Узнать больше',
        'trusted-by': 'Нам доверяют:',
        'why-aegis': 'Почему AEGIS?',
        'why-aegis-desc': 'Передовые технологии для вашей безопасности',
        'ai-protection': 'ИИ Защита',
        'ai-protection-desc': 'Машинное обучение для обнаружения новых угроз',
        'fast-scan': 'Быстрое сканирование',
        'fast-scan-desc': 'Проверка системы за секунды, не минуты',
        'cloud-protection': 'Облачная защита',
        'cloud-protection-desc': 'Постоянные обновления из облака',
        'ready-to-protect': 'Готовы защитить свой компьютер?',
        'join-millions': 'Присоединяйтесь к миллионам пользователей по всему миру',
        'get-started': 'Узнать больше',
        
        // Stats section
        'threats-blocked': 'Угроз заблокировано',
        'countries': 'Стран мира',
        'awards': 'Наград индустрии',
        'support-24-7': 'Поддержка',
        
        // How it works
        'how-it-works': 'Как это работает',
        'three-steps': 'Три простых шага к полной защите',
        'step-download': 'Скачайте',
        'step-download-desc': 'Загрузите установщик AEGIS бесплатно с нашего сайта',
        'step-install': 'Установите',
        'step-install-desc': 'Запустите установщик и следуйте простым инструкциям',
        'step-protected': 'Защищены',
        'step-protected-desc': 'AEGIS автоматически начнет защищать ваш компьютер',
        
        // Testimonials
        'testimonials': 'Отзывы пользователей',
        'testimonials-desc': 'Что говорят о нас наши клиенты',
        'testimonial-1': 'AEGIS спас мой компьютер от вируса-шифровальщика. Теперь рекомендую всем друзьям!',
        'testimonial-2': 'Лучший антивирус, который я использовала. Легкий, быстрый и не тормозит систему. Отличная работа!',
        'testimonial-3': 'Используем AEGIS в нашей компании на 200+ компьютерах. Надежная защита и простое управление.',
        'it-specialist': 'IT-специалист',
        'designer': 'Дизайнер',
        'sysadmin': 'Системный администратор',
        
        // CTA
        'free-badge': 'Бесплатно навсегда',
        'no-ads': 'Без рекламы',
        'no-limits': 'Без ограничений',
        'no-subscription': 'Без подписки',

        // Features page
        'advanced-tech': 'Передовые технологии',
        'features-aegis': 'Возможности AEGIS',
        'features-subtitle': 'Полная защита для вашей цифровой жизни с использованием искусственного интеллекта',
        'feature-realtime': 'Защита в реальном времени',
        'feature-realtime-desc': 'Непрерывный мониторинг вашей системы 24/7. Мгновенное обнаружение и блокировка угроз до того, как они смогут навредить вашему компьютеру.',
        'feature-ai': 'ИИ Защита',
        'feature-ai-desc': 'Продвинутые алгоритмы машинного обучения обнаруживают новые и неизвестные угрозы, которые традиционные антивирусы могут пропустить.',
        'feature-fast': 'Быстрое сканирование',
        'feature-fast-desc': 'Молниеносное сканирование системы за секунды, а не минуты. Минимальное влияние на производительность системы.',
        'file-monitoring': 'Мониторинг файловой системы',
        'ransomware-protection': 'Защита от ransomware',
        'malware-blocking': 'Блокировка вредоносных процессов',
        'neural-analysis': 'Нейросетевой анализ',
        'behavior-analysis': 'Поведенческий анализ',
        'predictive-protection': 'Предиктивная защита',
        'smart-scan': 'Умное сканирование',
        'low-resources': 'Низкое потребление ресурсов',
        'background-optimization': 'Фоновая оптимизация',
        'additional-features': 'Дополнительные возможности',
        'all-for-protection': 'Всё что нужно для полной защиты',
        'cloud-protection-title': 'Облачная защита',
        'cloud-protection-desc': 'Всегда актуальная база угроз через облачную синхронизацию',
        'web-protection': 'Веб-защита',
        'web-protection-desc': 'Безопасный серфинг с защитой от фишинга и вредоносных сайтов',
        'data-protection': 'Защита данных',
        'data-protection-desc': 'Защитите личные данные от хакеров и похитителей',
        'firewall': 'Сетевой экран',
        'firewall-desc': 'Контроль входящего и исходящего трафика',
        'email-protection': 'Защита почты',
        'email-protection-desc': 'Сканирование вложений и ссылок в письмах',
        'usb-protection': 'USB защита',
        'usb-protection-desc': 'Автоматическое сканирование подключаемых устройств',
        'why-aegis-better': 'Почему AEGIS лучше?',
        'comparison-subtitle': 'Сравнение с конкурентами',
        'feature': 'Функция',
        'others': 'Другие',
        'ai-protection-feature': 'ИИ защита',
        'free-forever-feature': 'Бесплатно навсегда',
        'no-ads-feature': 'Без рекламы',
        'low-resources-feature': 'Низкое потребление ресурсов',
        'cloud-updates': 'Облачные обновления',
        'ready-to-try': 'Готовы попробовать?',
        'download-and-see': 'Скачайте AEGIS бесплатно и убедитесь сами',

        // Download page
        'free-download': 'Бесплатная загрузка',
        'download-aegis': 'Скачать AEGIS',
        'download-subtitle': 'Получите лучшую защиту для вашего компьютера прямо сейчас',
        'recommended': 'Рекомендуется',
        'version': 'Версия',
        'size': 'Размер',
        'date': 'Дата',
        'architecture': 'Архитектура',
        'os': 'ОС',
        'download-for-windows': 'Скачать для Windows',
        'verified-safe': 'Проверено и безопасно',
        'coming-soon': 'Скоро',
        'macos-coming': 'Версия для macOS находится в разработке',
        'linux-coming': 'Версия для Linux находится в разработке',
        'notify-release': 'Уведомить о выходе',
        'simple-install': 'Простая установка',
        'three-steps-protection': 'Три шага до полной защиты',
        'download-installer': 'Скачайте установщик',
        'download-installer-desc': 'Нажмите кнопку скачать и сохраните файл на компьютер',
        'run-install': 'Запустите установку',
        'run-install-desc': 'Дважды кликните на файл и следуйте инструкциям мастера',
        'enjoy-protection': 'Наслаждайтесь защитой',
        'enjoy-protection-desc': 'AEGIS автоматически начнет защищать ваш компьютер',
        'system-requirements': 'Системные требования',
        'min-requirements': 'Минимальные требования для работы AEGIS',
        'operating-system': 'Операционная система',
        'os-req': 'Windows 10 или Windows 11 (64-bit)',
        'ram': 'Оперативная память',
        'ram-req': 'Минимум 2 ГБ RAM',
        'disk-space': 'Место на диске',
        'disk-req': '500 МБ свободного места',
        'internet': 'Интернет',
        'internet-req': 'Для обновлений базы данных',
        'really-free': 'Это действительно бесплатно?',
        'really-free-answer': 'Да, AEGIS полностью бесплатен для личного использования без ограничений',
        'how-often-updates': 'Как часто обновления?',
        'updates-answer': 'База данных обновляется автоматически несколько раз в день',
        'is-there-support': 'Есть поддержка?',
        'support-answer': 'Да, наша команда поддержки доступна 24/7',

        // Support page
        'we-are-here': 'Мы всегда рядом',
        'support-center': 'Центр Поддержки',
        'support-subtitle': 'Получите помощь от нашей команды экспертов',
        'knowledge-base': 'База знаний',
        'knowledge-base-desc': 'Найдите ответы на частые вопросы в нашей документации',
        'read-articles': 'Читать статьи',
        'online-chat': 'Онлайн чат',
        'online-chat-desc': 'Свяжитесь с нашей командой поддержки в реальном времени',
        'start-chat': 'Начать чат',
        'email-support': 'Email поддержка',
        'email-support-desc': 'Отправьте нам письмо и получите ответ в течение 24 часов',
        'write': 'Написать',
        'our-community': 'Наше сообщество',
        'community-desc': 'Присоединяйтесь к миллионам пользователей AEGIS',
        'users-count': 'Пользователей',
        'countries-count': 'Стран',
        'rating': 'Рейтинг',
        'threats-blocked-count': 'Угроз заблокировано',
        'user-reviews': 'Отзывы пользователей',
        'what-they-say': 'Что говорят о нас',
        'review-1': 'Отличный антивирус! Легкий, быстрый и надежный. Рекомендую всем!',
        'review-2': 'Используем AEGIS в нашей компании на 200+ компьютерах. Надежная защита и простое управление.',
        'review-3': 'Лучший бесплатный антивирус! Никакой рекламы и навязчивых предложений.',
        'corporate-client': 'Корпоративный клиент',
        'faq': 'Частые вопросы',
        'faq-subtitle': 'Ответы на популярные вопросы',
        'faq-free': 'AEGIS действительно бесплатный?',
        'faq-free-answer': 'Да, AEGIS полностью бесплатен для личного использования. Все основные функции защиты доступны без оплаты.',
        'faq-other-av': 'Можно использовать с другим антивирусом?',
        'faq-other-av-answer': 'Рекомендуем удалить другие антивирусы перед установкой AEGIS для избежания конфликтов.',
        'faq-updates': 'Как часто обновляется база?',
        'faq-updates-answer': 'База данных обновляется автоматически несколько раз в день через облачную систему.',
        'faq-performance': 'Влияет ли на производительность?',
        'faq-performance-answer': 'AEGIS оптимизирован для минимального влияния на систему. Вы не заметите замедления.',
        'faq-mobile': 'Есть версия для телефона?',
        'faq-mobile-answer': 'Мобильная версия находится в разработке. Следите за обновлениями!',
        'faq-support': 'Как получить поддержку?',
        'faq-support-answer': 'Вы можете связаться с нами через онлайн-чат, email или социальные сети.',
        'contact-us': 'Свяжитесь с нами',
        'contact-subtitle': 'Мы всегда рады помочь',
        'email-title': 'Email',
        'email-desc': 'Напишите нам письмо',
        'telegram-title': 'Telegram',
        'telegram-desc': 'Быстрые ответы в чате',
        'working-hours': 'Время работы',
        'support-24-7-desc': 'Поддержка 24/7',
        'around-the-clock': 'Круглосуточно',
        'send-message': 'Отправить сообщение',
        'form-desc': 'Заполните форму и мы ответим в течение 24 часов',
        'name': 'Имя',
        'your-name': 'Ваше имя',
        'topic': 'Тема',
        'select-topic': 'Выберите тему',
        'technical-issue': 'Техническая проблема',
        'account-question': 'Вопрос по аккаунту',
        'feedback': 'Отзыв или предложение',
        'other': 'Другое',
        'message': 'Сообщение',
        'describe-question': 'Опишите ваш вопрос...',
        'send': 'Отправить сообщение',

        // Dashboard / Profile
        'profile': 'Профиль',
        'security': 'Безопасность',
        'settings': 'Настройки',
        'free-plan': 'Free Plan',
        'personal-info': 'Личная информация',
        'manage-data': 'Управляйте своими личными данными',
        'basic-info': 'Основная информация',
        'username': 'Имя пользователя',
        'phone': 'Телефон',
        'registration-date': 'Дата регистрации',
        'email-cant-change': 'Email нельзя изменить',
        'cancel': 'Отменить',
        'save-changes': 'Сохранить изменения',
        'account-stats': 'Статистика аккаунта',
        'days-with-us': 'Дней с нами',
        'protection-status': 'Защита',
        'active': 'Активна',
        'security-settings': 'Настройки безопасности вашего аккаунта',
        'change-password': 'Изменить пароль',
        'current-password': 'Текущий пароль',
        'enter-current-password': 'Введите текущий пароль',
        'new-password': 'Новый пароль',
        'confirm-new-password': 'Подтвердите пароль',
        'danger-zone': 'Опасная зона',
        'delete-account': 'Удалить аккаунт',
        'delete-account-desc': 'После удаления аккаунта все ваши данные будут безвозвратно утеряны.',
        'delete': 'Удалить',
        'appearance': 'Внешний вид',
        'dark-theme': 'Тёмная тема',
        'dark-theme-desc': 'Использовать тёмную тему интерфейса',
        'language': 'Язык',
        'interface-language': 'Язык интерфейса',
        'confirm-delete': 'Вы уверены, что хотите удалить аккаунт? Это действие нельзя отменить.',
        
        // Footer
        'footer-desc': 'Защита нового поколения для вашего цифрового мира',
        'product': 'Продукт',
        'support': 'Поддержка',
        'company': 'Компания',
        'help': 'Помощь',
        'contact': 'Контакты',
        'about': 'О нас',
        'blog': 'Блог',
        'all-rights': 'Все права защищены'
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
        
        // Auth pages
        'welcome-back': 'Welcome Back!',
        'welcome-back-desc': 'Sign in to your account to access the dashboard and protection settings',
        'create-account': 'Create Account',
        'create-account-desc': 'Fill out the form to register',
        'login-to-account': 'Sign In',
        'login-desc': 'Enter your credentials to sign in',
        'email': 'Email',
        'password': 'Password',
        'confirm-password': 'Confirm Password',
        'remember-me': 'Remember me',
        'forgot-password': 'Forgot password?',
        'have-account': 'Already have an account?',
        'no-account': "Don't have an account?",
        'sign-in': 'Sign In',
        'sign-up': 'Sign Up',
        'or': 'or',
        'secure-login': 'Secure Login',
        'start-protection': 'Start Protection Today',
        'start-protection-desc': 'Create a free account and get access to all AEGIS features',
        'join-users': 'Join 50M+ users',
        'min-6-chars': 'Minimum 6 characters',
        'repeat-password': 'Repeat password',
        'enter-password': 'Enter password',
        'agree-terms': 'I agree to the',
        'terms-of-use': 'terms of use',
        'password-strength': 'Password strength',
        'weak': 'Weak',
        'medium': 'Medium',
        'good': 'Good',
        'excellent': 'Excellent',
        
        // Auth features
        'encryption-256': '256-bit Encryption',
        'encryption-desc': 'Your data is securely protected',
        'privacy': 'Privacy',
        'privacy-desc': 'We do not share your data with third parties',
        'fast-access': 'Fast Access',
        'fast-access-desc': 'Instant system login',
        'realtime-protection': 'Real-time Protection',
        'realtime-protection-desc': '24/7 threat monitoring',
        'ai-tech': 'AI Technology',
        'ai-tech-desc': 'Smart virus detection',
        'free-forever': 'Free Forever',
        'free-forever-desc': 'No hidden fees',
        'auto-updates': 'Auto Updates',
        'auto-updates-desc': 'Always up-to-date protection',
        
        // Messages
        'logout-success': 'You have been logged out',
        'registration-success': 'Registration successful!',
        'login-success': 'Login successful!',
        'profile-saved': 'Profile saved successfully',
        'password-changed': 'Password changed successfully',
        'account-deleted': 'Account deleted',
        'fill-all-fields': 'Please fill all fields',
        'passwords-not-match': 'Passwords do not match',
        'password-min-6': 'Password must be at least 6 characters',
        'wrong-password': 'Wrong current password',
        'invalid-credentials': 'Invalid email or password',
        'user-exists': 'User already exists',

        // Home page
        'hero-badge': 'Next Generation Protection',
        'hero-title-1': 'Maximum',
        'hero-title-2': 'Protection',
        'hero-title-3': 'For Your PC',
        'hero-subtitle': 'AEGIS uses advanced artificial intelligence technologies to detect and block even the most complex threats in real-time',
        'detection-rate': 'Threat Detection',
        'users': 'Users',
        'protection': 'Protection',
        'download-free': 'Download Free',
        'watch-demo': 'Watch Demo',
        'learn-more': 'Learn More',
        'trusted-by': 'Trusted by:',
        'why-aegis': 'Why AEGIS?',
        'why-aegis-desc': 'Advanced technologies for your security',
        'ai-protection': 'AI Protection',
        'ai-protection-desc': 'Machine learning for new threat detection',
        'fast-scan': 'Fast Scanning',
        'fast-scan-desc': 'System check in seconds, not minutes',
        'cloud-protection': 'Cloud Protection',
        'cloud-protection-desc': 'Continuous updates from the cloud',
        'ready-to-protect': 'Ready to protect your computer?',
        'join-millions': 'Join millions of users worldwide',
        'get-started': 'Learn More',
        
        // Stats section
        'threats-blocked': 'Threats Blocked',
        'countries': 'Countries',
        'awards': 'Industry Awards',
        'support-24-7': 'Support',
        
        // How it works
        'how-it-works': 'How It Works',
        'three-steps': 'Three simple steps to complete protection',
        'step-download': 'Download',
        'step-download-desc': 'Download the AEGIS installer for free from our website',
        'step-install': 'Install',
        'step-install-desc': 'Run the installer and follow the simple instructions',
        'step-protected': 'Protected',
        'step-protected-desc': 'AEGIS will automatically start protecting your computer',
        
        // Testimonials
        'testimonials': 'User Reviews',
        'testimonials-desc': 'What our customers say about us',
        'testimonial-1': 'AEGIS saved my computer from ransomware. Now I recommend it to all my friends!',
        'testimonial-2': 'Best antivirus I have ever used. Light, fast and does not slow down the system. Great job!',
        'testimonial-3': 'We use AEGIS in our company on 200+ computers. Reliable protection and easy management.',
        'it-specialist': 'IT Specialist',
        'designer': 'Designer',
        'sysadmin': 'System Administrator',
        
        // CTA
        'free-badge': 'Free Forever',
        'no-ads': 'No Ads',
        'no-limits': 'No Limits',
        'no-subscription': 'No Subscription',

        // Features page
        'advanced-tech': 'Advanced Technologies',
        'features-aegis': 'AEGIS Features',
        'features-subtitle': 'Complete protection for your digital life using artificial intelligence',
        'feature-realtime': 'Real-time Protection',
        'feature-realtime-desc': 'Continuous monitoring of your system 24/7. Instant detection and blocking of threats before they can harm your computer.',
        'feature-ai': 'AI Protection',
        'feature-ai-desc': 'Advanced machine learning algorithms detect new and unknown threats that traditional antivirus software might miss.',
        'feature-fast': 'Fast Scanning',
        'feature-fast-desc': 'Lightning-fast system scans that complete in seconds, not minutes. Minimal impact on system performance.',
        'file-monitoring': 'File system monitoring',
        'ransomware-protection': 'Ransomware protection',
        'malware-blocking': 'Malware process blocking',
        'neural-analysis': 'Neural network analysis',
        'behavior-analysis': 'Behavior analysis',
        'predictive-protection': 'Predictive protection',
        'smart-scan': 'Smart scanning',
        'low-resources': 'Low resource usage',
        'background-optimization': 'Background optimization',
        'additional-features': 'Additional Features',
        'all-for-protection': 'Everything you need for complete protection',
        'cloud-protection-title': 'Cloud Protection',
        'cloud-protection-desc': 'Always up-to-date threat database through cloud synchronization',
        'web-protection': 'Web Protection',
        'web-protection-desc': 'Safe browsing with protection against phishing and malicious sites',
        'data-protection': 'Data Protection',
        'data-protection-desc': 'Protect personal data from hackers and thieves',
        'firewall': 'Firewall',
        'firewall-desc': 'Control incoming and outgoing traffic',
        'email-protection': 'Email Protection',
        'email-protection-desc': 'Scan attachments and links in emails',
        'usb-protection': 'USB Protection',
        'usb-protection-desc': 'Automatic scanning of connected devices',
        'why-aegis-better': 'Why AEGIS is Better?',
        'comparison-subtitle': 'Comparison with competitors',
        'feature': 'Feature',
        'others': 'Others',
        'ai-protection-feature': 'AI Protection',
        'free-forever-feature': 'Free Forever',
        'no-ads-feature': 'No Ads',
        'low-resources-feature': 'Low Resource Usage',
        'cloud-updates': 'Cloud Updates',
        'ready-to-try': 'Ready to Try?',
        'download-and-see': 'Download AEGIS for free and see for yourself',

        // Download page
        'free-download': 'Free Download',
        'download-aegis': 'Download AEGIS',
        'download-subtitle': 'Get the best protection for your computer right now',
        'recommended': 'Recommended',
        'version': 'Version',
        'size': 'Size',
        'date': 'Date',
        'architecture': 'Architecture',
        'os': 'OS',
        'download-for-windows': 'Download for Windows',
        'verified-safe': 'Verified and Safe',
        'coming-soon': 'Coming Soon',
        'macos-coming': 'macOS version is in development',
        'linux-coming': 'Linux version is in development',
        'notify-release': 'Notify on Release',
        'simple-install': 'Simple Installation',
        'three-steps-protection': 'Three steps to complete protection',
        'download-installer': 'Download Installer',
        'download-installer-desc': 'Click the download button and save the file to your computer',
        'run-install': 'Run Installation',
        'run-install-desc': 'Double-click the file and follow the wizard instructions',
        'enjoy-protection': 'Enjoy Protection',
        'enjoy-protection-desc': 'AEGIS will automatically start protecting your computer',
        'system-requirements': 'System Requirements',
        'min-requirements': 'Minimum requirements for AEGIS',
        'operating-system': 'Operating System',
        'os-req': 'Windows 10 or Windows 11 (64-bit)',
        'ram': 'RAM',
        'ram-req': 'Minimum 2 GB RAM',
        'disk-space': 'Disk Space',
        'disk-req': '500 MB free space',
        'internet': 'Internet',
        'internet-req': 'For database updates',
        'really-free': 'Is it really free?',
        'really-free-answer': 'Yes, AEGIS is completely free for personal use without limitations',
        'how-often-updates': 'How often are updates?',
        'updates-answer': 'The database is automatically updated several times a day',
        'is-there-support': 'Is there support?',
        'support-answer': 'Yes, our support team is available 24/7',

        // Support page
        'we-are-here': 'We Are Always Here',
        'support-center': 'Support Center',
        'support-subtitle': 'Get help from our team of experts',
        'knowledge-base': 'Knowledge Base',
        'knowledge-base-desc': 'Find answers to common questions in our documentation',
        'read-articles': 'Read Articles',
        'online-chat': 'Online Chat',
        'online-chat-desc': 'Contact our support team in real-time',
        'start-chat': 'Start Chat',
        'email-support': 'Email Support',
        'email-support-desc': 'Send us an email and get a response within 24 hours',
        'write': 'Write',
        'our-community': 'Our Community',
        'community-desc': 'Join millions of AEGIS users',
        'users-count': 'Users',
        'countries-count': 'Countries',
        'rating': 'Rating',
        'threats-blocked-count': 'Threats Blocked',
        'user-reviews': 'User Reviews',
        'what-they-say': 'What they say about us',
        'review-1': 'Great antivirus! Light, fast and reliable. I recommend it to everyone!',
        'review-2': 'We use AEGIS in our company on 200+ computers. Reliable protection and easy management.',
        'review-3': 'Best free antivirus! No ads and no annoying offers.',
        'corporate-client': 'Corporate Client',
        'faq': 'FAQ',
        'faq-subtitle': 'Answers to popular questions',
        'faq-free': 'Is AEGIS really free?',
        'faq-free-answer': 'Yes, AEGIS is completely free for personal use. All basic protection features are available without payment.',
        'faq-other-av': 'Can I use it with another antivirus?',
        'faq-other-av-answer': 'We recommend uninstalling other antivirus software before installing AEGIS to avoid conflicts.',
        'faq-updates': 'How often is the database updated?',
        'faq-updates-answer': 'The database is automatically updated several times a day through our cloud system.',
        'faq-performance': 'Does it affect performance?',
        'faq-performance-answer': 'AEGIS is optimized for minimal system impact. You will not notice any slowdown.',
        'faq-mobile': 'Is there a mobile version?',
        'faq-mobile-answer': 'Mobile version is in development. Stay tuned for updates!',
        'faq-support': 'How to get support?',
        'faq-support-answer': 'You can contact us via online chat, email or social networks.',
        'contact-us': 'Contact Us',
        'contact-subtitle': 'We are always happy to help',
        'email-title': 'Email',
        'email-desc': 'Send us an email',
        'telegram-title': 'Telegram',
        'telegram-desc': 'Quick answers in chat',
        'working-hours': 'Working Hours',
        'support-24-7-desc': '24/7 Support',
        'around-the-clock': 'Around the clock',
        'send-message': 'Send Message',
        'form-desc': 'Fill out the form and we will respond within 24 hours',
        'name': 'Name',
        'your-name': 'Your name',
        'topic': 'Topic',
        'select-topic': 'Select topic',
        'technical-issue': 'Technical Issue',
        'account-question': 'Account Question',
        'feedback': 'Feedback or Suggestion',
        'other': 'Other',
        'message': 'Message',
        'describe-question': 'Describe your question...',
        'send': 'Send Message',

        // Dashboard / Profile
        'profile': 'Profile',
        'security': 'Security',
        'settings': 'Settings',
        'free-plan': 'Free Plan',
        'personal-info': 'Personal Information',
        'manage-data': 'Manage your personal data',
        'basic-info': 'Basic Information',
        'username': 'Username',
        'phone': 'Phone',
        'registration-date': 'Registration Date',
        'email-cant-change': 'Email cannot be changed',
        'cancel': 'Cancel',
        'save-changes': 'Save Changes',
        'account-stats': 'Account Statistics',
        'days-with-us': 'Days with us',
        'protection-status': 'Protection',
        'active': 'Active',
        'security-settings': 'Security settings for your account',
        'change-password': 'Change Password',
        'current-password': 'Current Password',
        'enter-current-password': 'Enter current password',
        'new-password': 'New Password',
        'confirm-new-password': 'Confirm Password',
        'danger-zone': 'Danger Zone',
        'delete-account': 'Delete Account',
        'delete-account-desc': 'After deleting your account, all your data will be permanently lost.',
        'delete': 'Delete',
        'appearance': 'Appearance',
        'dark-theme': 'Dark Theme',
        'dark-theme-desc': 'Use dark theme for the interface',
        'language': 'Language',
        'interface-language': 'Interface Language',
        'confirm-delete': 'Are you sure you want to delete your account? This action cannot be undone.',
        
        // Footer
        'footer-desc': 'Next generation protection for your digital world',
        'product': 'Product',
        'support': 'Support',
        'company': 'Company',
        'help': 'Help',
        'contact': 'Contact',
        'about': 'About',
        'blog': 'Blog',
        'all-rights': 'All rights reserved'
    }
};


// Global state
var currentLanguage = localStorage.getItem('language') || 'ru';
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
    updateAuthUI();
}

function translatePage() {
    var elements = document.querySelectorAll('[data-translate]');
    elements.forEach(function(el) {
        var key = el.getAttribute('data-translate');
        var text = translations[currentLanguage][key];
        if (text) {
            if (el.tagName === 'INPUT' && el.type === 'submit') {
                el.value = text;
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
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
    showNotification(translations[currentLanguage]['invalid-credentials'], 'error');
    return false;
}

function register(email, password, confirmPassword) {
    if (password !== confirmPassword) {
        showNotification(translations[currentLanguage]['passwords-not-match'], 'error');
        return false;
    }
    if (password.length < 6) {
        showNotification(translations[currentLanguage]['password-min-6'], 'error');
        return false;
    }
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(function(u) { return u.email === email; })) {
        showNotification(translations[currentLanguage]['user-exists'], 'error');
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