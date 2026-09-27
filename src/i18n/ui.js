// Fixed interface strings. Editable content (bio, projects…) lives in src/content/*.json instead.
export const ui = {
  en: {
    skip: 'Skip to content',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navServices: 'Services',
    navContact: 'Contact',
    resume: 'Resume',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
    switchLang: 'Chuyển sang tiếng Việt',

    greeting: "Hi, I'm",
    contactMe: 'Contact me',
    downloadCv: 'Download CV',
    portraitAlt: (name) => `Portrait of ${name}`,

    aboutLabel: 'About me',
    aboutImageAlt: (name) => `${name} at work`,
    education: 'Education',
    experience: 'Experience',

    skillsLabel: 'Skills',
    skillsTitle: 'Skills show our knowledge.',

    projectsLabel: 'Projects',
    projectsTitle: 'Selected work.',
    viewProject: 'View on GitHub',
    screenshotAlt: (title) => `${title} screenshot`,

    servicesLabel: 'Services',
    servicesTitle: 'What I can do for you.',

    contactLabel: 'Contact',
    contactTitle: 'Let’s build something',
    contactTitleAccent: ' together.',
    sayHello: 'Say hello',

    rights: 'All rights reserved.',
    backToTop: 'Back to top ↑',
  },
  vi: {
    skip: 'Bỏ qua, đến nội dung chính',
    navAbout: 'Giới thiệu',
    navSkills: 'Kỹ năng',
    navProjects: 'Dự án',
    navServices: 'Dịch vụ',
    navContact: 'Liên hệ',
    resume: 'CV',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    toDark: 'Chuyển sang giao diện tối',
    toLight: 'Chuyển sang giao diện sáng',
    switchLang: 'Switch to English',

    greeting: 'Xin chào, tôi là',
    contactMe: 'Liên hệ',
    downloadCv: 'Tải CV',
    portraitAlt: (name) => `Ảnh chân dung ${name}`,

    aboutLabel: 'Về tôi',
    aboutImageAlt: (name) => `Ảnh ${name}`,
    education: 'Học vấn',
    experience: 'Kinh nghiệm',

    skillsLabel: 'Kỹ năng',
    skillsTitle: 'Kỹ năng thể hiện kiến thức.',

    projectsLabel: 'Dự án',
    projectsTitle: 'Dự án tiêu biểu.',
    viewProject: 'Xem trên GitHub',
    screenshotAlt: (title) => `Ảnh chụp màn hình ${title}`,

    servicesLabel: 'Dịch vụ',
    servicesTitle: 'Tôi có thể giúp gì cho bạn.',

    contactLabel: 'Liên hệ',
    contactTitle: 'Hãy cùng nhau',
    contactTitleAccent: ' tạo nên điều gì đó.',
    sayHello: 'Nhắn cho tôi',

    rights: 'Bảo lưu mọi quyền.',
    backToTop: 'Lên đầu trang ↑',
  },
}

export const languages = ['en', 'vi']
