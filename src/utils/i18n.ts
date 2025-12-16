import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            navbar: {
                buttons: {
                    skills: 'Skills',
                    projects: 'Projects',
                    contact: 'Contact',
                },
                languages: {
                    en: 'English',
                    pl: 'Polish',
                },
            },
            heroSection: {
                greeting: 'Hello!',
                tagline:
                    "I'm a Web Developer who builds fast, modern, and great looking web apps.",
            },
            skillsSection: {
                heading: 'My Skills && Stack',
            },
            projectsSection: {
                heading: 'Featured Projects && Clients',
            },
            contactSection: {
                heading: 'Contact Me || Say Hello',
                contactForm: {
                    nameLabel: 'Name',
                    namePlaceholder: 'Skyler White',
                    emailLabel: 'Email',
                    emailPlaceholder: 'skyler.white@proton.me',
                    messageLabel: 'Message',
                    messagePlaceholder: 'My name is Skyler White, yo!',
                    submitButton: 'Submit',
                },
                toasts: {
                    success: {
                        title: 'Message sent!',
                        description: 'Thanks for reaching out!',
                    },
                    error: {
                        title: 'Error',
                        description: 'Something went wrong. Error description:',
                    },
                },
                location: 'Gdansk, Poland',
            },
        },
    },
    pl: {
        translation: {
            navbar: {
                buttons: {
                    skills: 'Umiejętności',
                    projects: 'Projekty',
                    contact: 'Kontakt',
                },
                languages: {
                    en: 'Angielski',
                    pl: 'Polski',
                },
            },
            heroSection: {
                greeting: 'Cześć!',
                tagline:
                    'Jestem Web Developerem, który tworzy szybkie, nowoczesne i świetnie wyglądające aplikacje internetowe.',
            },
            skillsSection: {
                heading: 'Technologie && Umiejętności',
            },
            projectsSection: {
                heading: 'Wybrane projekty && Klienci',
            },
            contactSection: {
                heading: 'Napisz do mnie || Przywitaj się',
                contactForm: {
                    nameLabel: 'Imię',
                    namePlaceholder: 'Adaś Miauczyński',
                    emailLabel: 'Adres mejlowy',
                    emailPlaceholder: 'adam.miauczyński@proton.me',
                    messageLabel: 'Wiadomość',
                    messagePlaceholder: 'Może powtórzymy angielski?',
                    submitButton: 'Wyślij',
                },
                toasts: {
                    success: {
                        title: 'Wiadomość wysłana!',
                        description: 'Dzięki za kontakt!',
                    },
                    error: {
                        title: 'Błąd',
                        description: 'Coś poszło nie tak. Opis błędu:',
                    },
                },
                location: 'Gdańsk, Polska',
            },
        },
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        load: 'languageOnly',
        nonExplicitSupportedLngs: true,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupQuerystring: 'lng',
            convertDetectedLanguage: (lng) => lng.split('-')[0],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
