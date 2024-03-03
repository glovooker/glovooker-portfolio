const resources = {
    es: {
        header: {
            logo_alt: 'Glovooker Logo',
            home: 'Inicio',
            about: 'Sobre mí',
            projects: 'Proyectos',
            es: 'Español',
            en: 'Inglés',
        },
        home: {
            title: 'Inicio',
            about_me: 'Sobre mí',
            my_projects: 'Mis proyectos',
            title_1: 'Senior Full Stack Developer en IBM',
            title_2: 'Estudiante de Software de Excelencia en UCenfotec',
            title_3: 'Estudiante de Ciencias de Datos en ULEAD',
            title_4: 'Scrum Master & Product Owner',
            title_5: 'Diseñador UI/UX',
            title_6: 'Freelancer',
        },
        stats: {
            stats_1: 'Repositorios',
            stats_2: 'Commits',
            stats_3: 'Tecnologías',
            stats_4: 'Pull Requests',
        },
        about_me: {
            title: `👋🏻 Soy un Ingeniero de Software con complejo de Diseñador`,
            description_1: `En realidad, amo tanto el mundo creativo como el lógico, ya que ambos convergen en la tecnología. Toda buena idea tiene un back-end y un front-end esperando por ser creado, y ambos son igual de emocionantes para mí.`,
            description_2: `Como fan de la tecnología y del conocimiento, si tienes una idea que pueda benificiarse de mis habilidades para hacerse realidad, te invito a revisar mi currículum. ¡Siéntete libre de contactarme tan pronto como lo desees!`,
            view_resume: 'Ver Resume',
        },
        portfolio: {
            title: 'Portafolio',
            description:
                'Estos son algunos de los proyectos en los que he trabajado. ¡Haz click en cualquiera de ellos para ver más detalles!',
        },
        projects: {
            check_it_out: '¡Míralo aquí!',
            engage360: {
                title: 'Engage360',
                description:
                    'Multiplataforma empresarial para la gestión y optimización de procesos y operaciones organizacionales',
                long_description:
                    'Multiplataforma empresarial para la gestión y optimización de procesos y operaciones organizacionales. Participé como Ingeniero Full Stack trabajando con tecnologías como React, TypeScript, Material UI, GraphQL, Dgraph y Apollo, contribuyendo al desarrollo de nuevas funcionalidades para el módulo de CRM y gestión de campañas de correo electrónico masivo, y al mantenimiento de la plataforma.',
            },
            easylist: {
                title: 'EasyList',
                description:
                    'Sistema de adjudicación de licitaciones para escuelas de Costa Rica',
                long_description:
                    'Sistema de adjudicación de licitaciones para suministrar recursos educativos a escuelas públicas de Costa Rica. Participé en el desarrollo de la plataforma como Tech Lead y Full Stack Developer utilizando HTML, CSS, JavaScript, Bootstrap, C#, .NET Core y SQL Server. Además, he contribuido en la toma de decisiones relacionadas con diseño y programación de interfaces para la plataforma. Fue un proyecto universitario aplaudido por los profesores y se lanzó su primera versión en el primer cuatrimestre del 2023.',
            },
            cenfotecoKingdoms: {
                title: 'Cenfoteco Kingdoms',
                description:
                    'Videojuego de rol y de dados medieval para la comunidad de UCenfotec',
                long_description:
                    'Videojuego de rol y de dados medieval para la comunidad de UCenfotec, construido con Java y libGDX, aplicando más de 9 patrones de diseño diferentes. Proyecto universitario aplaudido por el profesor encargado y presentado durante la feria de tecnología Maker Faire 2023. Participé de lleno en la construcción de los visuales del juego, la programación y la implementación de los diversos patrones de diseño utilizados. El juego se lanzó en el primer cuatrimestre del 2023.',
            },
            elViejo: {
                title: 'Azucarera El Viejo',
                description:
                    'Programa de investigación y desarrollo para la optimización de procesos de producción de azúcar en Costa Rica',
                long_description:
                    'Programa de investigación y desarrollo para la optimización de procesos de producción de azúcar en Costa Rica. Participé como Ingeniero Full Stack trabajando con tecnologías como React, TypeScript, Redux, React Native, y Material UI, para el desarrollo de un aplicativo móvil para el control de registros por horas. Así mismo, apoyé en la parte investigativa del proyecto, utilizando Wolfram Mathematica para realizar cálculos y análisis de datos para optimizar procesos de producción.',
            },
            mawi: {
                title: 'Mawi Managers',
                description:
                    'Solución de gestión de tareas y proyectos para constructoras y arquitectos',
                long_description:
                    'Solución de gestión de tareas y proyectos para constructoras y arquitectos. He participado en el desarrollo de la aplicación web como un Freelancer Front End Developer utilizando React y TypeScript. Además, he contribuido en la toma de decisiones relacionadas con diseño y programación de interfaces para la plataforma. El proyecto está en desarrollo y se lanzará su primera versión en el último cuatrimestre del 2022.',
            },
            staries: {
                title: 'Staries',
                description:
                    'Aplicación web para crear y compartir historias interactivas',
                long_description:
                    'Realicé este proyecto durante mi penúltimo año del técnico, inicialmente utilizando PHP para manejar el backend, y luego migrando a Node.js con Firebase. Actué como Product Owner y Developer dentro del equipo, que ha tenido varios miembros a lo largo del tiempo en el que se desarrolló. Actualmente, tres miembros del equipo estamos migrando el frontend a React con Typescript. Este proyecto consiste en una aplicación web que permite a escritores jóvenes y estudiantes compartir poemas, novelas, historias y cuentos cortos para darse a conocer como autores de la actualidad.',
            },
            mobydygSite: {
                title: 'MobyDyg Site',
                description: `Sitio oficial de MobyDyg con internacionalización`,
                long_description:
                    'Este proyecto consiste en el sitio oficial de MobyDyg, una empresa de e-commerce que ofrece soluciones tecnológicas a pequeñas y medianas empresas. Trabajé como Diseñador UI/UX y Desarrollador Full Stack, realizando el prototipado del sitio en Figma, y luego trasladándolo a código utilizando Angular y TypeScript. Para la internacionalización se uso ngx-translate, lo que permite cambiar el idioma sin recargar el sitio.',
            },
            mobydygCore: {
                title: 'MobyDyg Client Core',
                description: `Tienda digital de MobyDyg con tematización para clientes`,
                long_description:
                    'Este proyecto consiste en una tienda en línea que se ajusta de acuerdo a un tema, pensado para proveer servicios B2B por MobyDyg, una empresa de e-commerce que ofrece soluciones tecnológicas a pequeñas y medianas empresas. Trabajé como Desarrollador Full Stack, ajustando el frontend existente a pantallas móviles, resolviendo bugs, y agregando nuevas funcionalidades con Angular, TypeScript, AWS y MySQL.',
            },
            mobydygBackoffice: {
                title: 'MobyDyg Backoffice',
                description: `Backoffice para administrar la tienda digital de MobyDyg`,
                long_description:
                    'Esta solución consiste en un backoffice para administrar las tiendas digitales de MobyDyg, una empresa de e-commerce que ofrece soluciones tecnológicas a pequeñas y medianas empresas. Trabajé como Desarrollador Full Stack, creando nuevas funcionalidades con Angular, TypeScript, AWS y MySQL, y como Diseñador UI/UX, generando prototipos y mejorando interfaces con Figma.',
            },
            tournament: {
                title: 'FCT Tournament App',
                description:
                    'Aplicación de torneos para la Federación Costarricense de Taekwondo',
                long_description:
                    'Esta aplicación fue desarrollada para la Federación Costarricense de Taekwondo, y consiste en una solución web para administrar torneos de taekwondo. Trabajé como Desarrollador Full Stack, generando junto a mi equipo el proyecto desde cero con React, ASP.NET Core, C# y SQL Server. Además, me desempeñé como Diseñador UI/UX, generando prototipos e interfaces con Figma.',
            },
            moka: {
                title: 'Moka: Vet & Hotel',
                description:
                    'Aplicación web para el manejo de una veterinaria y un hotel para mascotas',
                long_description:
                    'Sitio web para el control de citas y reservaciones de una veterinaria y un hotel para mascotas llamada Moka. Dirigí el proyecto y actué como Desarrollador Líder Full Stack, generando junto a mi equipo la solución desde cero con tecnologías vanilla como HTML, CSS y JavaScript, junto con Node.js y MongoDB para el backend. Además, me desempeñé como Diseñador UI/UX, generando los prototipos e interfaces con Figma.',
            },
            tummy: {
                title: 'Tummy',
                description:
                    'Aplicación web para llevar el control del embarazo y el bebé, con consejos de acuerdo a las etapas y a las semanas',
                long_description:
                    'Aplicación web para llevar el control del embarazo y el bebé, con consejos de acuerdo a las etapas y a las semanas. Trabajé como desarrollador en un equipo de 3 personas y el proyecto fue presentado en la feria de ciencias y tecnología de CEDES Don Bosco, Expotec, donde fue premiado como el Mejor Stand de la feria. El proyecto se realizó utilizando tecnologías vanilla como HTML, CSS y JavaScript, junto con PHP para el backend.',
            },
            cleverSolutions: {
                title: 'Clever Solutions',
                description:
                    'Landing page para Clever Solutions, una empresa ficticia para el curso de Proyecto de Software 1 de UCenfotec',
                long_description:
                    'Landing page para Clever Solutions, una empresa ficticia para el curso de Proyecto de Software 1 de UCenfotec. El proyecto se realizó utilizando tecnologías vanilla como HTML, CSS y JavaScript, usando GitHub Pages para hosting.',
            },
            personalBrand: {
                title: 'Marca Personal',
                description: 'Libro de marca para mi marca personal',
                long_description:
                    'Libro de marca para mi marca personal. Diseñado en Figma, incluye toda la información relacionada con mi marca como profesional, desde las tipografías y colores hasta el logo, su significado, y sus usos permitidos. Además, abarca una sección que muestra las areas en las que me he desempeñado a nivel profesional, con sus respectivos logotipos.',
            },
            iki: {
                title: 'iki',
                description:
                    'Concepto de aplicación para ejercicios de respiración y de relajación',
                long_description:
                    'Concepto de aplicación ejercicios de respiración y de relajación. Diseñado en Figma, incluye el diseño y la esencias de marca, paleta de colores, mockups y un prototipo para pantallas móviles. Fue diseñado como concepto para mi proyecto de graduación, y está pendiente para ser programado como una aplicación funcional en el futuro.',
            },
            findingTheMeaning: {
                title: 'Finding the Meaning',
                description:
                    'Libro de marca para Finding the Meaning, un podcast de UCenfotec',
                long_description:
                    'Libro de marca para Finding the Meaning, un podcast de UCenfotec. Diseñado en Figma, incluye toda la información relacionada con el podcast, desde las tipografías y colores hasta el logo, su significado, y sus usos permitidos. He operado en el proyecto como diseñador principal, y colaboro con la creación de contenido y de marca para campañas de expectativa y publicidad en redes sociales.',
            },
        },
    },
    en: {
        header: {
            logo_alt: 'Glovooker Logo',
            home: 'Home',
            about: 'About me',
            projects: 'Projects',
            es: 'Spanish',
            en: 'English',
        },
        home: {
            title: 'Home',
            about_me: 'About me',
            my_projects: 'My projects',
            title_1: 'Senior Full Stack Developer at IBM',
            title_2: 'Elite Software Student at UCenfotec',
            title_3: 'Data Science Student at ULEAD',
            title_4: 'Scrum Master & Product Owner',
            title_5: 'UI/UX Designer',
            title_6: 'Freelancer',
        },
        stats: {
            stats_1: 'Repositories',
            stats_2: 'Commits',
            stats_3: 'Technologies',
            stats_4: 'Pull Requests',
        },
        about_me: {
            title: `👋🏻 I'm a Software Engineer with a Designer complex`,
            description_1: `As a matter of fact, I love both logical and creative worlds that merge together through tech. Every good idea has a back-end and a front-end waiting to be developed, and both of them are as breathtaking as the other to me.`,
            description_2: `As a fan of technology and knowledge, if you have an idea that could use my abilities to come to reality, feel free to check out my CV and reach out to me as soon as you feel like it!`,
            view_resume: 'View Resume',
        },
        portfolio: {
            title: 'Portfolio',
            description:
                'These are some of the projects I have worked on. Check them out!',
        },
        projects: {
            check_it_out: 'Check this out!',
            engage360: {
                title: 'Engage360',
                description:
                    'Enterprise multiplatform solution for management and optimization of organizational processes',
                long_description:
                    'Enterprise multiplatform solution for management and optimization of organizational processes and operations. I participated as a Full Stack Engineer working with technologies like React, TypeScript, Material UI, GraphQL, Dgraph, and Apollo, contributing to the development of new features for the CRM module and massive email campaigns, and to the maintenance of the platform.',
            },
            easylist: {
                title: 'EasyList',
                description:
                    'Web solution to bid for tenders to supply educational resources to public schools in Costa Rica',
                long_description:
                    'Web solution to bid for tenders to supply educational resources to public schools in Costa Rica. I have participated as a Tech Lead and Full Stack Developer, working with HTML, CSS, JavaScript, Bootstrap, C#, .NET Core and SQL Server, contributing to the web application development and to the decision-making process of the team in matters related to the design and development of interfaces for the platform. This was a college level project praised by the teachers with a top grade, its first version was launched in the first period of 2023.',
            },
            cenfotecoKingdoms: {
                title: 'Cenfoteco Kingdoms',
                description:
                    'Medieval role-playing and dice videogame for the UCenfotec community',
                long_description:
                    'Medieval role-playing and dice videogame for the UCenfotec community, built with Java and libGDX, applying more than 9 different design patterns. College level project praised by the teacher in charge and presented during the Maker Faire 2023 technology fair. I participated fully in the construction of the game visuals, programming and implementation of the various design patterns used. The game was launched in the first period of 2023.',
            },
            elViejo: {
                title: 'Azucarera El Viejo',
                description:
                    'Research and development college program for the optimization of sugar production processes in Costa Rica',
                long_description:
                    'Research and development college program for the optimization of sugar production processes in Costa Rica by Universidad Cenfotec. I participated as a Full Stack Engineer working with technologies like React, TypeScript, Redux, React Native, and Material UI, contributing to the development of a mobile application to track hourly records. In addition, I helped in the research part of the project, using Wolfram Mathematica to perform calculations and data analysis to optimize production operations.',
            },
            mawi: {
                title: 'Mawi Managers',
                description:
                    'Solution to manage tasks and projects for construction companies and architects',
                long_description:
                    'Solution to manage tasks and projects for construction companies and architects. I have participated as a Freelancer Front End Developer, working with React and TypeScript, contributing to the web application development and to the decision-making process of the team in matters related to the design and development of interfaces for the platform. The project is currently in development, and it is expected to be released in the last quarter of 2022.',
            },
            staries: {
                title: 'Staries',
                description:
                    'Web application that allows you to create and share your own stories',
                long_description:
                    'I worked on this project during my second year of my high school level software development degree, initially using PHP to handle the backend, and then migrating to Node.js with Firebase. I acted as a Product Owner and Developer within the team, which has had several members throughout the time it was developed. Currently, three members of the team are migrating the frontend to React with Typescript. This project consists of a web application that allows young writers and students to share poems, novels, and short stories to get their names out as authors of the current era.',
            },
            mobydygSite: {
                title: 'MobyDyg Site',
                description: `MobyDyg's official website with internationalization`,
                long_description:
                    'This project consists of the official website of MobyDyg, an e-commerce company that offers technological solutions to small and medium-sized businesses. I worked as an UI/UX Designer and Full Stack Developer, prototyping the site in Figma, and then transferring it to code using Angular and TypeScript. For internationalization, ngx-translate was used, which allows you to change the language without reloading the site.',
            },
            mobydygCore: {
                title: 'MobyDyg Client Core',
                description: `MobyDyg's web store with theming per client`,
                long_description:
                    'This project consists of an online store that adjusts itself according to a theme, designed to provide B2B services by MobyDyg, an e-commerce company that offers technological solutions to small and medium-sized businesses. I worked as a Full Stack Developer, adjusting the existing frontend to mobile screens, fixing bugs, and adding new features with Angular, TypeScript, AWS and MySQL.',
            },
            mobydygBackoffice: {
                title: 'MobyDyg Backoffice',
                description: `MobyDyg's web store backoffice to handle store settings, orders, and more`,
                long_description: `This solution is a backoffice to manage MobyDyg's digital stores, an e-commerce company that offers technological solutions to small and medium-sized businesses. I worked as a Full Stack Developer, creating new features with Angular, TypeScript, AWS and MySQL, and as an UI/UX Designer, generating prototypes and improving interfaces with Figma.`,
            },
            tournament: {
                title: 'FCT Tournament App',
                description:
                    'Tournament application for the Costa Rican Taekwondo Federation',
                long_description:
                    'This application was developed for the Costa Rican Taekwondo Federation, and consists of a web solution to manage taekwondo tournaments. I worked as a Full Stack Developer, generating with my team the project from scratch with React, ASP.NET Core, C# and SQL Server. In addition, I acted as an UI/UX Designer, generating prototypes and interfaces with Figma.',
            },
            moka: {
                title: 'Moka: Vet & Hotel',
                description:
                    'Web application for the management of a veterinary clinic and a hotel for pets',
                long_description:
                    'A web application for the management of a veterinary clinic and a hotel for pets called Moka. I acted as the Team Lead Developer, generating with my team the solution from scratch using vanilla technologies such as HTML, CSS, and JavaScript, alongside Node.js and MongoDB for the backend. I also worked as an UI/UX Designer, generating the prototypes and interfaces with Figma.',
            },
            tummy: {
                title: 'Tummy',
                description:
                    'Web application that allows you to track your pregnancy cycle, with medical advices per week',
                long_description:
                    'A web application that allows you to track your pregnancy cycle, with medical advices per week. I worked as a developer in a 3-person team, and the project was presented at the 2019 Expotec at CEDES Don Bosco, a science and technology fair where it was awarded for the Best Stand in the category of Software Development. The project was developed using vanilla technologies such as HTML, CSS, and JavaScript, alongside PHP for the backend.',
            },
            cleverSolutions: {
                title: 'Clever Solutions',
                description:
                    'Landing page for Clever Solutions, a fictitious company for UCenfotec Software Project',
                long_description:
                    'Landig page for Clever Solutions, a fictitious company for UCenfotec Software Project I. The project was developed using vanilla technologies such as HTML, CSS, and JavaScript, alongside GitHub Pages for hosting.',
            },
            personalBrand: {
                title: 'Personal Brand',
                description: 'Content brand book for my personal brand',
                long_description:
                    'Content brand book for my personal brand. Designed with Figma, it includes all the information related to my brand as a professional, from fonts and colors, down to the logo, its meaning, and its allowed use cases. Also, it portrays a section that shows the areas in which I have developed myself at a professional level, with their own logos.',
            },
            iki: {
                title: 'iki',
                description: 'Breathing app concept that helps you relax and focus',
                long_description:
                    'Breathing app concept that helps you relax and focus. Designed with Figma, it includes the design and essence of the brand, color palette, mockups and a prototype of the app for mobile devices. It was designed as an idea for my graduation project, and is pending to be coded into a functional application.',
            },
            findingTheMeaning: {
                title: 'Finding the Meaning',
                description:
                    'Content brand book for Finding the Meaning, an UCenfotec Podcast',
                long_description:
                    'Content brand book for Finding the Meaning, an UCenfotec Podcast. Designed with Figma, it includes all the information related to the podcast, from fonts and colors, down to the logo, its meaning, and its allowed use cases. My role in this project has been as a main designer, and I help creating brand content for publicity campains in social media.',
            },
        },
    },
    fr: {},
};

export default resources;
