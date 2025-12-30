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
                    closeMenu: 'Close Menu',
                },
                languages: {
                    en: 'English',
                    pl: 'Polish',
                },
            },
            heroSection: {
                greeting: 'Hello! myName =',
                tagline:
                    "I'm a Web Developer who builds fast, modern, and great looking web apps.",
            },
            skillsSection: {
                heading: 'My Skills && Stack',
            },
            projectsSection: {
                heading: 'Featured Projects && Clients',
                sections: {
                    personalProjects: 'Personal Projects',
                    technicalDemos: 'Technical Demos',
                    commercialProjects: 'Commercial Projects',
                },
                projects: {
                    kalkdoktor: {
                        name: 'Kalkdoktor',
                        description:
                            'Web application designed as a toolkit for medical professionals. The project focuses on implementing a collection of medical calculators and scales, offline-first functionality using PWA features, and persistent favorites to support quick access in clinical use.',
                    },
                    lingvaSidebar: {
                        name: 'Lingva Translate in Sidebar',
                        description:
                            'Browser extension that integrates Lingva Translate directly into the sidebar. The project focuses on leveraging the WebExtensions API, integrating an external translation API, and delivering a fast, unobtrusive user experience for translating text without leaving the current page.',
                    },
                    amnesia: {
                        name: 'Amnesia - History Cleaner',
                        description:
                            'Privacy-focused browser extension for automatic cleanup of browsing history. The project focuses on using browser APIs to manage history data, implementing time-based cleanup logic, and providing a lightweight, configurable solution for users who value privacy.',
                    },
                    portfolio: {
                        name: 'My Portfolio Website',
                        description:
                            'Personal web dev portfolio website built to showcase projects and experience. The project focuses on a clean, minimalist UI, reusable layout components, responsive design, and performance optimization to deliver a clear and professional presentation.',
                    },
                    reactPokedex: {
                        name: 'React Pokédex',
                        description:
                            'Client-side application built as a sandbox for experimenting with modern React libraries. The project focuses on data fetching and state management using the PokéAPI, enabling users to browse Pokémon, view detailed information, and manage a favorites list.',
                    },
                    zenithCalendar: {
                        name: 'Zenith Calendar',
                        description:
                            'Calendar web application for managing events with a clean and modern interface. The project focuses on state management, persistent data storage using browser local storage, and customizable user preferences such as theme selection and week start day.',
                    },
                    zenithDocs: {
                        name: 'Zenith Docs',
                        description:
                            'Document editing web application inspired by Google Docs. The project focuses on real-time collaboration, advanced text editing, and automatic content synchronization using Firebase, enabling multiple users to work on the same document simultaneously.',
                    },
                    mirekHandlarz: {
                        name: 'MirekHandlarz.pl',
                        description:
                            'Front-end of a modern automotive classifieds platform. Focused on building reusable UI components, integrating REST APIs, implementing offer filtering and listing logic, and optimizing application performance for fast load times and smooth interaction with large datasets.',
                    },
                    projektyWnetrz: {
                        name: 'Projekty Wnętrz',
                        description:
                            'Portfolio website for an interior designer. Focused on implementing a minimalist, content-driven UI, creating reusable layout components, and ensuring a fully responsive design to clearly present projects and offer across devices.',
                    },
                    stomatologPiasecki: {
                        name: 'Stomatolog Piasecki',
                        description:
                            'Website for a dental clinic. Focused on usability and accessibility, with an emphasis on intuitive navigation, responsive layout, semantic HTML, and cross-device compatibility to provide a consistent and user-friendly experience.',
                    },
                },
                buttons: {
                    viewProject: 'Live Demo',
                    viewCode: 'Source Code',
                },
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
            footer: {
                buttons: {
                    scrollToTop: 'Scroll to the top',
                },
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
                    closeMenu: 'Zamknij menu',
                },
                languages: {
                    en: 'Angielski',
                    pl: 'Polski',
                },
            },
            heroSection: {
                greeting: 'Cześć! Jestem',
                tagline:
                    'Jestem Web Developerem, który tworzy szybkie, nowoczesne i świetnie wyglądające aplikacje internetowe.',
            },
            skillsSection: {
                heading: 'Technologie i umiejętności',
            },
            projectsSection: {
                heading: 'Wybrane projekty',
                sections: {
                    personalProjects: 'Projekty osobiste',
                    technicalDemos: 'Dema technologiczne',
                    commercialProjects: 'Projekty komercyjne',
                },
                projects: {
                    kalkdoktor: {
                        name: 'Kalkdoktor',
                        description:
                            'Aplikacja webowa będąca zestawem narzędzi dla lekarzy. Projekt obejmuje implementację kalkulatorów i skal medycznych, funkcjonalność offline-first opartą o PWA oraz system ulubionych, który ułatwia szybki dostęp do najczęściej używanych narzędzi w codziennej pracy klinicznej.',
                    },
                    lingvaSidebar: {
                        name: 'Lingva Translate in Sidebar',
                        description:
                            'Rozszerzenie przeglądarki integrujące Lingva Translate bezpośrednio w panelu bocznym. Projekt wykorzystuje WebExtensions API oraz zewnętrzne API tłumaczeń, zapewniając szybkie i wygodne tłumaczenie tekstu bez konieczności opuszczania aktualnie przeglądanej strony.',
                    },
                    amnesia: {
                        name: 'Amnesia - History Cleaner',
                        description:
                            'Rozszerzenie przeglądarki nastawione na ochronę prywatności, umożliwiające automatyczne czyszczenie historii przeglądania. Projekt wykorzystuje API przeglądarki do zarządzania danymi historii, mechanizm czyszczenia oparty o czas oraz prostą konfigurację dla użytkowników ceniących prywatność.',
                    },
                    portfolio: {
                        name: 'Moje Portfolio',
                        description:
                            'Osobista strona portfolio web developera, stworzona do prezentacji projektów i doświadczenia. Projekt opiera się o minimalistyczny interfejs, responsywny dizajn, komponenty wielokrotnego użytku oraz optymalizację wydajności, aby zapewnić przejrzystą i profesjonalną prezentację projektów.',
                    },
                    reactPokedex: {
                        name: 'React Pokédex',
                        description:
                            'Aplikacja stworzona jako przestrzeń do eksperymentowania z nowoczesnym ekosystemem Reacta. Projekt koncentruje się na pobieraniu danych i zarządzaniu stanem z wykorzystaniem PokéAPI, umożliwiając przeglądanie Pokémonów, podgląd szczegółowych informacji oraz zarządzanie listą ulubionych.',
                    },
                    zenithCalendar: {
                        name: 'Zenith Calendar',
                        description:
                            'Webowa aplikacja kalendarza do zarządzania wydarzeniami, utrzymana w czystym i nowoczesnym stylu. Projekt obejmuje zarządzanie stanem aplikacji, trwałe przechowywanie danych w pamięci lokalnej przeglądarki oraz konfigurowalne preferencje użytkownika.',
                    },
                    zenithDocs: {
                        name: 'Zenith Docs',
                        description:
                            'Aplikacja webowa do edycji dokumentów inspirowana Google Docs. Projekt skupia się na współpracy w czasie rzeczywistym, zaawansowanej edycji tekstu oraz automatycznej synchronizacji treści z wykorzystaniem Firebase, umożliwiając jednoczesną pracę wielu użytkowników na tym samym dokumencie.',
                    },
                    mirekHandlarz: {
                        name: 'MirekHandlarz.pl',
                        description:
                            'Front-end nowoczesnej platformy ogłoszeń motoryzacyjnych. Projekt koncentruje się na tworzeniu komponentów UI wielokrotnego użytku, integracji z REST API, implementacji wystawiania i przeglądania ofert oraz optymalizacji wydajności pod kątem szybkiego ładowania i płynnej pracy z dużą ilością danych.',
                    },
                    projektyWnetrz: {
                        name: 'Projekty Wnętrz',
                        description:
                            'Strona portfolio dla projektanta wnętrz. Projekt skupia się na minimalistycznym, zorientowanym na treść interfejsie, komponentach layoutu wielokrotnego użytku oraz pełnej responsywności, zapewniającej czytelną prezentację projektów i oferty na różnych urządzeniach.',
                    },
                    stomatologPiasecki: {
                        name: 'Stomatolog Piasecki',
                        description:
                            'Strona internetowa dla gabinetu stomatologicznego zaprojektowana z myślą o użyteczności i dostępności. Projekt kładzie nacisk na intuicyjną nawigację, responsywny układ, semantyczny HTML oraz spójne działanie na różnych urządzeniach.',
                    },
                },

                buttons: {
                    viewProject: 'Zobacz demo',
                    viewCode: 'Kod źródłowy',
                },
            },
            contactSection: {
                heading: 'Kontakt',
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
            footer: {
                buttons: {
                    scrollToTop: 'Przewiń do góry',
                },
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
