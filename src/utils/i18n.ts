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
                            'Personal front-end portfolio website built to showcase projects and experience. The project focuses on a clean, minimalist UI, reusable layout components, responsive design, and performance optimization to deliver a clear and professional presentation.',
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
                sections: {
                    personalProjects: 'Projekty osobiste',
                    technicalDemos: 'Dema technologiczne',
                    commercialProjects: 'Projekty komercyjne',
                },
                projects: {
                    kalkdoktor: {
                        name: 'Kalkdoktor',
                        description:
                            'Aplikacja webowa zaprojektowana jako zestaw narzędzi dla profesjonalistów medycznych. Projekt koncentruje się na implementacji kolekcji kalkulatorów i skal medycznych, funkcjonalności offline-first z wykorzystaniem możliwości PWA oraz trwałych ulubionych, umożliwiających szybki dostęp w codziennej pracy klinicznej.',
                    },
                    lingvaSidebar: {
                        name: 'Lingva Translate in Sidebar',
                        description:
                            'Rozszerzenie przeglądarki integrujące Lingva Translate bezpośrednio w panelu bocznym. Projekt koncentruje się na wykorzystaniu WebExtensions API, integracji z zewnętrznym API tłumaczeń oraz zapewnieniu szybkiego i nienachalnego doświadczenia użytkownika, pozwalającego tłumaczyć tekst bez opuszczania aktualnej strony.',
                    },
                    amnesia: {
                        name: 'Amnesia - History Cleaner',
                        description:
                            'Rozszerzenie przeglądarki skoncentrowane na prywatności, służące do automatycznego czyszczenia historii przeglądania. Projekt skupia się na wykorzystaniu API przeglądarki do zarządzania danymi historii, implementacji logiki czyszczenia opartej na czasie oraz dostarczeniu lekkiego i konfigurowalnego rozwiązania dla użytkowników ceniących prywatność.',
                    },
                    portfolio: {
                        name: 'Moje Portfolio',
                        description:
                            'Osobista strona portfolio front-endowego, stworzona w celu prezentacji projektów i doświadczenia. Projekt koncentruje się na czystym, minimalistycznym interfejsie, wielokrotnego użytku komponentach layoutu, responsywnym designie oraz optymalizacji wydajności, aby zapewnić przejrzystą i profesjonalną prezentację.',
                    },
                    reactPokedex: {
                        name: 'React Pokédex',
                        description:
                            'Aplikacja kliencka stworzona jako środowisko do eksperymentowania z nowoczesnymi bibliotekami Reacta. Projekt koncentruje się na pobieraniu danych i zarządzaniu stanem z wykorzystaniem PokéAPI, umożliwiając użytkownikom przeglądanie Pokémonów, wyświetlanie szczegółowych informacji oraz zarządzanie listą ulubionych.',
                    },
                    zenithCalendar: {
                        name: 'Zenith Calendar',
                        description:
                            'Aplikacja webowa kalendarza do zarządzania wydarzeniami, z czystym i nowoczesnym interfejsem. Projekt koncentruje się na zarządzaniu stanem, trwałym przechowywaniu danych z wykorzystaniem lokalnej pamięci przeglądarki oraz konfigurowalnych preferencjach użytkownika, takich jak wybór motywu czy pierwszy dzień tygodnia.',
                    },
                    zenithDocs: {
                        name: 'Zenith Docs',
                        description:
                            'Aplikacja webowa do edycji dokumentów inspirowana Google Docs. Projekt koncentruje się na współpracy w czasie rzeczywistym, zaawansowanej edycji tekstu oraz automatycznej synchronizacji treści z wykorzystaniem Firebase, umożliwiając wielu użytkownikom jednoczesną pracę nad tym samym dokumentem.',
                    },
                    mirekHandlarz: {
                        name: 'MirekHandlarz.pl',
                        description:
                            'Front-end nowoczesnej platformy ogłoszeń motoryzacyjnych. Projekt skupia się na budowie komponentów UI wielokrotnego użytku, integracji z REST API, implementacji logiki filtrowania i listowania ofert oraz optymalizacji wydajności aplikacji pod kątem szybkiego ładowania i płynnej pracy z dużymi zbiorami danych.',
                    },
                    projektyWnetrz: {
                        name: 'Projekty Wnętrz',
                        description:
                            'Strona portfolio dla projektanta wnętrz. Projekt koncentruje się na minimalistycznym, zorientowanym na treść interfejsie, tworzeniu komponentów layoutu wielokrotnego użytku oraz zapewnieniu pełnej responsywności w celu czytelnej prezentacji projektów i oferty na różnych urządzeniach.',
                    },
                    stomatologPiasecki: {
                        name: 'Stomatolog Piasecki',
                        description:
                            'Strona internetowa dla gabinetu stomatologicznego. Projekt koncentruje się na użyteczności i dostępności, ze szczególnym naciskiem na intuicyjną nawigację, responsywny układ, semantyczny HTML oraz kompatybilność między urządzeniami, aby zapewnić spójne i przyjazne doświadczenie użytkownika.',
                    },
                },

                buttons: {
                    viewProject: 'Zobacz demo',
                    viewCode: 'Kod źródłowy',
                },
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
