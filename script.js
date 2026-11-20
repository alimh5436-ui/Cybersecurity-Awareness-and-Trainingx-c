let currentLang = localStorage.getItem('cyberLang') || 'ar';

const translations = {
    ar: {
        pageTitle: "نظام التوعية والتدريب في الأمن السيبراني",
        loginTitle: "تسجيل الدخول إلى النظام",
        loginSub: "الرجاء تسجيل الدخول للمتابعة إلى منصة الأمن السيبراني",
        emailLabel: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        errorMsg: "⚠️ عذراً، يجب أن ينتهي البريد الإلكتروني بـ @gmail.com",
        loginBtn: "دخول للمنصة 🚀",
        sidebarTitle: "قائمة التنقل",
        menuHome: "🏠 الرئيسية ولوحة التحكم",
        menuSettings: "🔐 الإعدادات",
        menuGenSettings: "⚙️ الإعدادات العامة",
        menuUsers: "👥 إدارة المستخدمين",
        menuLogout: "🚪 تسجيل الخروج",
        settingsModalTitle: "⚙️ الإعدادات العامة للنظام",
        themeTitle: "الوضع الفاتح",
        themeDesc: "تفعيل المظهر الفاتح للمنصة",
        backupTitle: "النسخ الاحتياطي التلقائي",
        backupDesc: "حفظ جلسة الدخول وتخطي شاشة الدخول تلقائياً",
        saveBtn: "حفظ وإغلاق",
        usersModalTitle: "👥 إدارة المستخدمين والصلاحيات",
        tableUser: "اسم المستخدم",
        tableStatus: "الحالة",
        tableAction: "الإجراء",
        activeStatus: "نشط",
        editBtn: "تعديل",
        closeBtn: "إغلاق",
        uni1: "وزارة التعليم العالي والبحث العلمي",
        uni2: "جامعة الفرات الأوسط التقنية",
        uni3: "كلية البوليتكنك - كربلاء",
        uni4: "قسم هندسة تكنولوجيا المعلومات",
        mainTitle: "نظام التوعية والتدريب في الأمن السيبراني",
        subTitle: "منصة رقمية تفاعلية لبناء الوعي الأمني والدفاع السيبراني",
        supervisionLabel: "👨‍🏫 إشراف:",
        supervisorName: "م.م. حسن صلاح",
        studentsLabel: "👥 إعداد وتنفيذ الطلاب:",
        studentsNames: "علي محمد جبار | علي رحمن حسن | علي مرتضى عمار | غدير علاء حمزه | مؤمل سعدي عزيز",
        introHeading: "المقدمة",
        introText: "يأتي هذا المشروع كخطوة استراتيجية متقدمة في مجال أمن المعلومات وحماية البيانات الرقمية في ظل التطور المتسارع للهجمات السيبرانية واستهداف البنى التحتية والمؤسسات والأفراد. يهدف هذا النظام الأساسي إلى نشر ثقافة الوعي السيبراني الشامل، وتعزيز القدرات الدفاعية ضد التهديدات الإلكترونية المتنوعة مثل هجمات التصيد الاحتيالي، الهندسة الاجتماعية، البرمجيات الخبيثة، وأساليب الاختراق المتقدمة. كما يوفر النظام بيئة تعليمية وتدريبية تفاعلية ومحاكاة حية تُمكّن المستخدمين من اكتشاف الثغرات وتطبيق أفضل الممارسات العالمية في إدارة كلمات المرور وتأمين الحسابات الرقمية بكفاءة عالية، ليكون بمثابة حصن رقمي يسهم في بناء مجتمع واعٍ وقادر على مواجهة التحديات التكنولوجية المعاصرة بأمان تام.",
        modulesHeading: "📚 محاور النظام والوحدات التدريبية",
        mod1Title: "أساسيات الأمن السيبراني",
        mod1Desc: "تعرف على المفاهيم الأساسية، التهديدات والمخاطر الإلكترونية وكيفية تجنبها للحد من الهجمات.",
        mod2Title: "كشف التصيد الاحتيالي",
        mod2Desc: "تمارين عملية لاكتشاف الرسائل المزيفة والروابط المشبوهة قبل الوقوع ضحية للهندسة الاجتماعية.",
        mod3Title: "كلمات المرور والمصادقة",
        mod3Desc: "تعلم كيفية إنشاء كلمات مرور معقدة وتفعيل المصادقة الثنائية (2FA) لحماية حساباتك الحساسة.",
        mod4Title: "البرمجيات الخبيثة وفيروسات الفدية",
        mod4Desc: "فهم آليات عمل الفيروسات المدمرة، ملفات التروجان، وكيفية حماية الأنظمة واستعادة البيانات.",
        mod5Title: "أمن الشبكات وحمايتها",
        mod5Desc: "دراسة جدران الحماية (Firewalls)، تأمين الاتصالات اللاسلكية، وكشف التسلل الرقمي المبكر.",
        mod6Title: "حماية البيانات",
        mod6Desc: "تصنيف المعلومات وحفظها ومشاركتها بصورة آمنة ومنع تسريبها.",
        mod7Title: "النسخ الاحتياطي",
        mod7Desc: "إعداد النسخ الاحتياطية واختبار استعادة البيانات لمواجهة الحالات الطارئة.",
        mod8Title: "أمن الأجهزة",
        mod8Desc: "التحديثات الأمنية ومكافحة البرمجيات الخبيثة وتأمين الأجهزة الشخصية.",
        mod9Title: "الذكاء الاصطناعي والأمن السيبراني",
        mod9Desc: "حماية البيانات عند استخدام أدوات الذكاء الاصطناعي والتعامل مع تقنياته.",
        mod10Title: "الاستجابة للحوادث",
        mod10Desc: "الإبلاغ عن الحوادث الأمنية والتعامل معها بالطرق الصحيحة.",
        mod11Title: "الأمن السيبراني في بيئة العمل",
        mod11Desc: "الالتزام بالسياسات والتعليمات الأمنية المؤسسية بحرفية عالية.",
        mod12Title: "الاختبار النهائي وتقييم الوعي",
        mod12Desc: "اختبر معلوماتك ومهاراتك السيبرانية التي اكتسبتها عبر الوحدات التدريبية السابقة.",
        footerText: "جميع حقوق الطبع والنشر محفوظة © 2027 | نظام التوعية والتدريب في الأمن السيبراني",
        lampOff: "اسحب المصباح لتشغيل الإضاءة",
        lampOn: "الإضاءة مفعّلة — اضغط لإطفائها"
    },
    en: {
        pageTitle: "Cybersecurity Awareness and Training System",
        loginTitle: "Sign In to the System",
        loginSub: "Please sign in to continue to the Cybersecurity Platform",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        errorMsg: "⚠️ Sorry, the email address must end with @gmail.com",
        loginBtn: "Sign In 🚀",
        sidebarTitle: "Navigation Menu",
        menuHome: "🏠 Home & Dashboard",
        menuSettings: "🔐 Settings",
        menuGenSettings: "⚙️ General Settings",
        menuUsers: "👥 User Management",
        menuLogout: "🚪 Logout",
        settingsModalTitle: "⚙️ System General Settings",
        themeTitle: "Light Mode",
        themeDesc: "Enable light appearance for the platform",
        backupTitle: "Auto Backup Session",
        backupDesc: "Save login session and skip login screen automatically",
        saveBtn: "Save & Close",
        usersModalTitle: "👥 Users & Permissions Management",
        tableUser: "Username",
        tableStatus: "Status",
        tableAction: "Action",
        activeStatus: "Active",
        editBtn: "Edit",
        closeBtn: "Close",
        uni1: "Ministry of Higher Education and Scientific Research",
        uni2: "Al-Furat Al-Awsat Technical University",
        uni3: "Polytechnic College - Karbala",
        uni4: "Information Technology Engineering Department",
        mainTitle: "Cybersecurity Awareness and Training System",
        subTitle: "An interactive digital platform for building security awareness and cyber defense",
        supervisionLabel: "👨‍🏫 Supervision:",
        supervisorName: "Lect. Hassan Salah",
        studentsLabel: "👥 Prepared & Implemented by Students:",
        studentsNames: "Ali Mohammed Jabbar | Ali Rahman Hassan | Ali Murtadha Ammar | Ghadeer Alaa Hamza | Muammal Saadi Aziz",
        introHeading: "Introduction",
        introText: "This project comes as an advanced strategic step in the field of information security and digital data protection amid the rapid evolution of cyberattacks targeting infrastructure, institutions, and individuals. This core system aims to spread a comprehensive culture of cybersecurity awareness and strengthen defensive capabilities against diverse electronic threats such as phishing, social engineering, malware, and advanced intrusion techniques. It also provides an interactive learning and training environment with live simulation enabling users to discover vulnerabilities and apply global best practices in password management and securing digital accounts with high efficiency.",
        modulesHeading: "📚 System Modules & Training Units",
        mod1Title: "Cybersecurity Fundamentals",
        mod1Desc: "Learn core concepts, electronic threats and risks, and how to avoid them to reduce attacks.",
        mod2Title: "Phishing Detection",
        mod2Desc: "Practical exercises to spot fake messages and suspicious links before falling victim to social engineering.",
        mod3Title: "Passwords & Authentication",
        mod3Desc: "Learn how to create strong passwords and enable Two-Factor Authentication (2FA) for sensitive accounts.",
        mod4Title: "Malware & Ransomware",
        mod4Desc: "Understand destructive viruses, trojan files, and how to protect systems and recover data.",
        mod5Title: "Network Security",
        mod5Desc: "Study firewalls, securing wireless connections, and early digital intrusion detection.",
        mod6Title: "Data Protection",
        mod6Desc: "Classify, store, and share information safely and prevent data leaks.",
        mod7Title: "Backup & Recovery",
        mod7Desc: "Set up backups and test data recovery to handle emergencies.",
        mod8Title: "Device Security",
        mod8Desc: "Security updates, anti-malware protection, and securing personal devices.",
        mod9Title: "AI & Cybersecurity",
        mod9Desc: "Protect data when using artificial intelligence tools and handling their technologies.",
        mod10Title: "Incident Response",
        mod10Desc: "Report security incidents and handle them properly.",
        mod11Title: "Workplace Cybersecurity",
        mod11Desc: "Commit to organizational security policies and instructions with high professionalism.",
        mod12Title: "Final Exam & Awareness Assessment",
        mod12Desc: "Test your cybersecurity knowledge and skills gained across the previous training units.",
        footerText: "All Rights Reserved © 2027 | Cybersecurity Awareness and Training System",
        lampOff: "Pull lamp to turn on light",
        lampOn: "Light is ON — Click to turn off"
    }
};

function toggleDeskLamp() {
    const lampUnit = document.getElementById('lampUnit');
    const authCard = document.getElementById('lampAuthCard');
    const statusText = document.getElementById('lampStatusText');
    if (!lampUnit) return;

    const isNowOn = lampUnit.classList.toggle('lamp-on');
    if (authCard) {
        authCard.classList.toggle('active-beam', isNowOn);
    }
    if (statusText) {
        const dict = translations[currentLang] || translations.ar;
        statusText.textContent = isNowOn ? dict.lampOn : dict.lampOff;
    }
}

function togglePasswordVisibility() {
    const passInput = document.getElementById('passwordInput');
    if (!passInput) return;
    passInput.type = passInput.type === 'password' ? 'text' : 'password';
}

function showDashboard(emailValue) {
    const authGate = document.getElementById('authGate');
    const mainDashboard = document.getElementById('mainDashboard');
    const userText = document.getElementById('sidebarUserText');
    const usernameCell = document.getElementById('tableUsernameCell');

    const displayName = emailValue ? emailValue.split('@')[0] : 'admin';
    if (userText) {
        userText.textContent = (currentLang === 'en' ? 'User: ' : 'المستخدم: ') + displayName;
    }
    if (usernameCell) {
        usernameCell.textContent = displayName;
    }

    if (mainDashboard) {
        mainDashboard.style.display = 'block';
        mainDashboard.classList.add('fade-in');
    }
    if (authGate) {
        authGate.classList.add('fade-out');
        setTimeout(() => {
            authGate.style.display = 'none';
        }, 500);
    }
}

function handleLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const errorMsg = document.getElementById('loginError');
    const backupToggle = document.getElementById('backupToggleSwitch');

    const emailVal = (emailInput ? emailInput.value : '').trim().toLowerCase();
    if (!emailVal.endsWith('@gmail.com')) {
        if (errorMsg) errorMsg.style.display = 'block';
        return;
    }

    if (errorMsg) errorMsg.style.display = 'none';

    const saveSession = backupToggle ? backupToggle.checked : true;
    if (saveSession) {
        localStorage.setItem('cyberLoggedIn', 'true');
        localStorage.setItem('cyberUserEmail', emailVal);
    }

    showDashboard(emailVal);
}

function handleLogout() {
    localStorage.removeItem('cyberLoggedIn');
    const authGate = document.getElementById('authGate');
    const mainDashboard = document.getElementById('mainDashboard');
    if (mainDashboard) mainDashboard.style.display = 'none';
    if (authGate) {
        authGate.style.display = 'flex';
        authGate.classList.remove('fade-out');
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('cyberSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function toggleDropdown(btn) {
    btn.classList.toggle('active');
    const container = btn.nextElementSibling;
    if (!container) return;
    if (container.style.maxHeight) {
        container.style.maxHeight = null;
    } else {
        container.style.maxHeight = container.scrollHeight + 'px';
    }
}

function openGeneralSettings() {
    const modal = document.getElementById('generalSettingsModal');
    const themeSwitch = document.getElementById('themeToggleSwitch');
    if (themeSwitch) {
        themeSwitch.checked = document.body.classList.contains('light-mode');
    }
    if (modal) modal.style.display = 'flex';
}

function closeGeneralSettings() {
    const modal = document.getElementById('generalSettingsModal');
    if (modal) modal.style.display = 'none';
}

function applyAndSaveSettings() {
    const themeSwitch = document.getElementById('themeToggleSwitch');
    const backupSwitch = document.getElementById('backupToggleSwitch');

    if (themeSwitch) {
        if (themeSwitch.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('cyberThemeMode', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('cyberThemeMode', 'dark');
        }
    }

    if (backupSwitch) {
        localStorage.setItem('cyberBackupEnabled', backupSwitch.checked ? 'true' : 'false');
    }

    closeGeneralSettings();
}

function openUsersManagement() {
    const modal = document.getElementById('usersModal');
    if (modal) modal.style.display = 'flex';
}

function closeUsersManagement() {
    const modal = document.getElementById('usersModal');
    if (modal) modal.style.display = 'none';
}

function editCurrentActiveUser() {
    const cell = document.getElementById('tableUsernameCell');
    const userText = document.getElementById('sidebarUserText');
    if (!cell) return;

    const currentName = cell.textContent.trim();
    const updated = prompt(currentLang === 'en' ? 'Enter new username:' : 'أدخل اسم المستخدم الجديد:', currentName);
    if (updated && updated.trim()) {
        const cleanName = updated.trim();
        cell.textContent = cleanName;
        localStorage.setItem('cyberUserEmail', cleanName + '@gmail.com');
        if (userText) {
            userText.textContent = (currentLang === 'en' ? 'User: ' : 'المستخدم: ') + cleanName;
        }
    }
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cyberLang', currentLang);
    const htmlRoot = document.getElementById('htmlRoot');
    if (htmlRoot) {
        htmlRoot.setAttribute('lang', currentLang);
        htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    const lampUnit = document.getElementById('lampUnit');
    const statusText = document.getElementById('lampStatusText');
    if (lampUnit && statusText) {
        const isOn = lampUnit.classList.contains('lamp-on');
        statusText.textContent = isOn ? translations[currentLang].lampOn : translations[currentLang].lampOff;
    }
}

function toggleLanguage() {
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cyberThemeMode') === 'light') {
        document.body.classList.add('light-mode');
    }
    applyLanguage(currentLang);

    const backupEnabled = localStorage.getItem('cyberBackupEnabled');
    const loggedIn = localStorage.getItem('cyberLoggedIn');
    const savedEmail = localStorage.getItem('cyberUserEmail');

    if (loggedIn === 'true' && backupEnabled !== 'false') {
        showDashboard(savedEmail || 'admin@gmail.com');
    }
});