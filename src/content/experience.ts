import type { ExperienceEntry } from '@/types/content'

// Most recent first; no `end` = current position
export const experience: ExperienceEntry[] = [
  {
    role: { es: 'Fullstack Software Engineer', en: 'Fullstack Software Engineer' },
    company: { es: 'Mission Produce Perú', en: 'Mission Produce Peru' },
    location: { es: 'Trujillo, Perú', en: 'Trujillo, Peru' },
    start: '2024-05',
    bullets: {
      es: [
        'Desarrollé de extremo a extremo el módulo de cartillas dinámicas de evaluación de campo —modelo de datos, servicios de APIs REST e interfaz web construida en Next.js—, permitiendo configurar formularios, fórmulas y reglas de evaluación sin nuevos despliegues de código.',
        'Modelé y optimicé la base de datos en SQL Server, desarrollando consultas y procedimientos almacenados para sincronización masiva, reprocesamiento de fórmulas y reportes de mapas de calor.',
        'Implementé autenticación y autorización con JWT, control de acceso por roles y permisos, y validación de datos en las APIs consumidas por clientes web y móviles.',
        'Construí módulos web de reportería (mapa de calor, mapa de recorrido y hallazgos de supervisor) con renderizado geoespacial sobre Leaflet y filtros en cascada sobre altos volúmenes de datos.',
        'Desarrollé la aplicación móvil offline-first en Flutter que procesa más de 500 operaciones diarias, con sincronización bidireccional contra las APIs REST y almacenamiento local en SQLite.',
        'Establecí una arquitectura modular con Clean Architecture, SOLID e inyección de dependencias, escalable a múltiples unidades de negocio y reutilizable entre web y móvil.'
      ],
      en: [
        'Delivered the dynamic field-evaluation forms module end to end —data model, REST API services and the web interface built in Next.js—, enabling business users to configure forms, formulas and evaluation rules without new code deployments.',
        'Modeled and optimized the SQL Server database, developing queries and stored procedures for bulk synchronization, formula reprocessing and heat map reporting.',
        'Implemented JWT authentication and authorization, role- and permission-based access control, and data validation across APIs consumed by web and mobile clients.',
        'Built web reporting modules (heat map, route map and supervisor findings) with geospatial rendering on Leaflet and cascading filters over high data volumes.',
        'Developed the offline-first Flutter mobile application processing 500+ daily operations, with bidirectional synchronization against REST APIs and local SQLite storage.',
        'Established a modular architecture with Clean Architecture, SOLID and dependency injection, scalable across business units and reusable between web and mobile.'
      ]
    }
  },
  {
    role: { es: 'Fullstack Developer', en: 'Fullstack Developer' },
    company: { es: 'Productos de Software a Medida (Freelance)', en: 'Custom Software Products (Freelance)' },
    location: { es: 'Trujillo, Perú', en: 'Trujillo, Peru' },
    start: '2024-01',
    bullets: {
      es: [
        'Entrego productos de software a medida para empresas participando en todo el ciclo de vida: levantamiento de requisitos con el cliente, diseño de arquitectura, desarrollo, despliegue en producción y capacitación de usuarios.',
        'Construí un sistema de gestión de almacén y pesaje industrial sobre un monorepo Turborepo con backend en NestJS (Clean Architecture), backoffice web en Next.js y base de datos PostgreSQL, usando esquemas Zod compartidos como única fuente de verdad entre backend y frontend.',
        'Desarrollo una plataforma de gestión comercial con módulos de inventario, caja, clientes y ventas, con backend en NestJS, frontend web en Next.js y base de datos PostgreSQL, priorizando trazabilidad de operaciones y reportes de negocio.',
        'Integré una balanza industrial HBM mediante protocolo serial RS-485, exponiendo la lectura de peso estabilizada al sistema web a través de un servicio local con API HTTP.',
        'Gestiono el despliegue en VPS con Docker, definiendo entornos separados, scripts de migración por entorno y respaldos automatizados de la base de datos.'
      ],
      en: [
        'Deliver custom software products for companies across the full lifecycle: requirements gathering with the client, architecture design, development, production deployment and user training.',
        'Built a warehouse and industrial weighing management system on a Turborepo monorepo with a NestJS backend (Clean Architecture), a Next.js web backoffice and a PostgreSQL database, using shared Zod schemas as the single source of truth between backend and frontend.',
        'Developing a commercial management platform covering inventory, cash register, customers and sales, with a NestJS backend, a Next.js web frontend and a PostgreSQL database, prioritizing operation traceability and business reporting.',
        'Integrated an HBM industrial scale over the RS-485 serial protocol, exposing stabilized weight readings to the web system through a local service with an HTTP API.',
        'Manage VPS deployment with Docker, defining separate environments, per-environment migration scripts and automated database backups.'
      ]
    }
  },
  {
    role: { es: 'Mobile Software Engineer', en: 'Mobile Software Engineer' },
    company: { es: 'Grupo Mendieta', en: 'Grupo Mendieta' },
    location: { es: 'Lima, Perú', en: 'Lima, Peru' },
    start: '2023-03',
    end: '2024-03',
    bullets: {
      es: [
        'Lideré la migración de una app financiera de Xamarin a Flutter, reduciendo tiempos de carga en 30%.',
        'Optimicé llamadas paralelas a APIs REST, reduciendo el tiempo de respuesta de 1,800ms a 400ms (-78%).',
        'Implementé autenticación segura con JWT/OAuth, tokens encriptados y refresh automático de sesiones.',
        'Desarrollé generación dinámica de reportes en PDF y notificaciones push/locales para alertas financieras.',
        'Establecí Clean Architecture con separación de capas, DTOs/mappers y gestión de estado con Cubit.'
      ],
      en: [
        'Led the migration of a financial application from Xamarin to Flutter, reducing load times by 30%.',
        'Optimized parallel REST API calls, cutting response time from 1,800ms to 400ms (-78%).',
        'Implemented secure authentication with JWT/OAuth, encrypted tokens and automatic session refresh.',
        'Developed dynamic PDF report generation and push/local notifications for financial alerts.',
        'Established Clean Architecture with layer separation, DTOs/mappers and Cubit state management.'
      ]
    }
  },
  {
    role: { es: 'Mobile Developer', en: 'Mobile Developer' },
    company: { es: 'I.E. Nuestra Señora de Lourdes', en: 'I.E. Nuestra Señora de Lourdes' },
    location: { es: 'Ascope, Perú', en: 'Ascope, Peru' },
    start: '2022-07',
    end: '2022-12',
    bullets: {
      es: [
        'Desarrollé una app educativa con juegos interactivos para mejorar la concentración en niños con TDAH (+30% engagement).',
        'Gestioné la publicación en Play Store y App Store, cumpliendo normativas de privacidad infantil (COPPA).',
        'Realicé pruebas de usabilidad con estudiantes y docentes, iterando la interfaz para mejorar la accesibilidad.'
      ],
      en: [
        'Developed an educational application with interactive games to improve concentration in children with ADHD (+30% engagement).',
        "Managed Play Store and App Store publication, complying with children's privacy regulations (COPPA).",
        'Ran usability testing with students and teachers, iterating the interface to improve accessibility.'
      ]
    }
  }
]
