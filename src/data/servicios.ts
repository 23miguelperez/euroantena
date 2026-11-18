export interface ServiceSection {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
}

export interface BrandLogo {
    name: string;
    src: string;
}

export interface ServiceItem {
    slug: string;
    title: string;
    shortDescription: string;
    icon: string;
    img: string;
    highlights: string[];
    intro?: string;
    sections: ServiceSection[];
    protocolsLogos?: BrandLogo[];
    brandsLogos?: BrandLogo[];
}

export const SERVICES: ServiceItem[] = [
    {
        slug: "domotica",
        title: "Domótica",
        shortDescription: "Automatización inteligente de viviendas para optimizar el confort, el ahorro energético y el control desde tu móvil.",
        icon: "/icons/automatic-gearbox.svg",
        img: "/images/01_Domotica.png",
        highlights: [
            "Escenas personalizadas",
            "Control remoto desde smartphone",
            "Primeras marcas del mercado",
            "Servicio técnico y mantenimiento multimarca"
        ],
        sections: [
            {
                heading: "¿Qué te ofrece la domótica?",
                bullets: [
                    "Optimiza el confort en casa ajustando temperatura y luz natural de forma automática y eficiente.",
                    "Crea escenas personalizadas para ajustar luces, persianas y más, adaptando el ambiente a tus necesidades.",
                    "Controla luces, persianas, clima, apertura de puerta y gestiona el videoportero desde tu móvil."
                ]
            },
            {
                heading: "¿Qué sistemas trabajamos?",
                paragraphs: [
                    "Tenemos personal especializado en los principales sistemas domóticos: KNX, LonWorks, Busing y ZigBee.",
                    "Trabajamos siempre con primeras marcas: JUNG, Zennio, GIRA, Onna, Iddero, ISDE, Comelit y Schneider."
                ]
            },
            {
                heading: "¿Qué te ofrecemos nosotros?",
                paragraphs: [
                    "Un servicio profesional integral desde el proyecto, la instalación y puesta en marcha hasta el servicio postventa.",
                    "Ofrecemos servicio técnico y mantenimientos incluso de instalaciones no realizadas por nosotros, con rigor y máxima profesionalidad."
                ]
            }
        ],
        protocolsLogos: [
            { name: "KNX", src: "/logos/knx.svg" },
            { name: "LonWorks", src: "/logos/lonworks.svg" },
            { name: "Busing", src: "/logos/busing.svg" },
            { name: "ZigBee", src: "/logos/zigbee.svg" }
        ],
        brandsLogos: [
            { name: "JUNG", src: "/logos/jung.svg" },
            { name: "Zennio", src: "/logos/zennio.svg" },
            { name: "GIRA", src: "/logos/gira.svg" },
            { name: "Onna", src: "/logos/onna.svg" },
            { name: "Iddero", src: "/logos/iddero.svg" },
            { name: "ISDE", src: "/logos/isde.svg" },
            { name: "Comelit", src: "/logos/comelit.svg" },
            { name: "Schneider", src: "/logos/schneider.svg" }
        ]
    },
    {
        slug: "inmotica",
        title: "Inmótica",
        shortDescription: "Control eficiente e integración de instalaciones para edificios más confortables, saludables y sostenibles.",
        icon: "/icons/wifi.svg",
        img: "/images/02_Inmotica.png",
        highlights: [
            "Hoteles y alojamientos",
            "Edificios de oficinas",
            "Centros comerciales",
            "Regulación DALI y ahorro energético"
        ],
        intro: "Control eficiente de las instalaciones del edificio, así como la integración de diferentes servicios para hacerlos más confortables y saludables en los siguientes ámbitos:",
        sections: [
            {
                heading: "Hoteles",
                bullets: [
                    "El clima e iluminación se ajustan automáticamente según la ocupación mediante la integración de los sistemas de control de acceso y detección real.",
                    "Control de la iluminación de las zonas comunes con regulación automática y aprovechamiento de la luz natural.",
                    "Herramientas de monitorización y control de las instalaciones del edificio ayudando al mantenimiento y al gestor a tomar decisiones encaminadas a la mejora continua."
                ]
            },
            {
                heading: "Oficinas",
                bullets: [
                    "Control inteligente de la iluminación con sistema DALI de regulación, manteniendo un nivel óptimo para el trabajo con aprovechamiento de la luz natural y vinculado a la presencia en la zona.",
                    "Control de accesos al edificio y sistemas de reserva de salas de reuniones."
                ]
            },
            {
                heading: "Centros Comerciales",
                bullets: [
                    "Gestión de la climatización, la iluminación y la calidad del aire para hacer más agradable y eficiente la visita al centro comercial.",
                    "Gestión técnica de las instalaciones para optimizar los recursos energéticos y mantenimientos preventivos gracias a la información facilitada por el sistema."
                ]
            }
        ]
    },
    {
        slug: "seguridad",
        title: "Seguridad",
        shortDescription: "Instalaciones anti-intrusión y detección perimetral adaptada al entorno para una protección activa sin falsas alarmas.",
        icon: "/icons/home-lock.svg",
        img: "/images/03_Seguridad.png",
        highlights: [
            "Detección perimetral anticipada",
            "Protección continua 24/7",
            "Adaptación a clima y fauna",
            "Reducción de falsas alarmas"
        ],
        intro: "Abordamos las instalaciones anti-intrusión desde dos perspectivas complementarias:",
        sections: [
            {
                bullets: [
                    "Detección anticipada: barreras perimetrales que alertan cuando el usuario está en la vivienda.",
                    "Protección de bienes: vigilancia continua durante su ausencia."
                ]
            },
            {
                heading: "Detección perimetral adaptada al entorno",
                paragraphs: [
                    "Diseñamos la detección perimetral para anticiparnos a la intrusión y ajustarla a las condiciones reales del espacio:"
                ],
                bullets: [
                    "Clima",
                    "Vegetación",
                    "Fauna",
                    "Usos cotidianos"
                ]
            },
            {
                heading: "Menos falsas alarmas, protección siempre activa",
                paragraphs: [
                    "Seleccionamos tecnologías y criterios de instalación que reducen las falsas alarmas y mantienen la protección incluso en entornos cambiantes, para asegurar una alerta temprana donde realmente importa."
                ]
            }
        ]
    },
    {
        slug: "cableado-estructurado",
        title: "Cableado estructurado",
        shortDescription: "Diseño, ejecución y certificación de redes de cobre, fibra óptica y WiFi empresarial para comunicaciones fiables.",
        icon: "/icons/load-balancer.svg",
        img: "/images/04_Cableado.png",
        highlights: [
            "Cobre Categoría 6 y 6A",
            "Fibra óptica monomodo y multimodo",
            "Redes WiFi con portal cautivo",
            "Certificación oficial en cobre y fibra"
        ],
        intro: "En Euroantena trabajamos para mejorar las infraestructuras y lograr comunicaciones fluidas y fiables. Para ello, el cableado que las sustenta debe estar perfectamente diseñado, ejecutado y certificado.",
        sections: [
            {
                heading: "¿En qué nos centramos?",
                bullets: [
                    "Cableado estructurado: sistemas de categoría 6 y 6A.",
                    "Fibra óptica: instalación de redes y tendidos multimodo y monomodo.",
                    "WiFi: instalación de redes con controladora y portal cautivo.",
                    "Ingeniería y consultoría: diseño de sistemas de cableado.",
                    "Certificación: redes de cableado tanto en cobre como en fibra."
                ]
            }
        ]
    },
    {
        slug: "ingenieria-telecomunicaciones",
        title: "Ingeniería de telecomunicaciones",
        shortDescription: "Más de 1.000 proyectos realizados desde 1995 en Infraestructuras Comunes de Telecomunicación (ICT).",
        icon: "/icons/building-broadcast-tower.svg",
        img: "/images/05_Ingeniería.png",
        highlights: [
            "Departamento activo desde 1995",
            "Más de 1.000 proyectos realizados",
            "Pioneros en normativa ICT",
            "Colaboración con el COITT"
        ],
        sections: [
            {
                heading: "Experiencia pionera desde 1995",
                paragraphs: [
                    "Nuestro departamento de ingeniería desarrolla su labor desde 1995. Cuando se implantó la normativa de Infraestructuras Comunes de Telecomunicación (ICT) en edificios de nueva construcción, ya contábamos con una amplia experiencia.",
                    "Esto nos permitió ser pioneros en este tipo de proyectos y colaborar con el Colegio Oficial de Ingenieros Técnicos de Telecomunicación en la formación de nuevos compañeros, compartiendo nuestro conocimiento."
                ]
            },
            {
                heading: "Resultados que nos avalan",
                paragraphs: [
                    "Fruto de nuestra dedicación y esfuerzo, hemos realizado con éxito más de 1.000 proyectos hasta la fecha."
                ]
            },
            {
                heading: "Colaboración con el cliente",
                paragraphs: ["Trabajamos estrechamente con cada cliente para ofrecerle la mejor solución a sus necesidades, aportando valor y experiencia."
]
}
]
},
{
slug: "videovigilancia",
title: "Videovigilancia",
shortDescription: "Sistemas de videovigilancia con Inteligencia Artificial que convierten tus cámaras en sensores inteligentes.",
icon: "/icons/device-cctv.svg",
img: "/images/06_Videovigilancia.png",
highlights: [
"Analítica con Inteligencia Artificial",
"Lectura de matrículas (LPR)",
"Detección de humo y llama",
"Conteo de personas y aforos"
],
sections: [
{
heading: "Sistemas de videovigilancia con IA",
paragraphs: [
"Convertimos sus cámaras en sensores inteligentes que generan información útil para la operación diaria."
]
},
{
heading: "¿Qué pueden hacer?",
bullets: [
"Seguir objetivos en movimiento.",
"Contar personas.",
"Leer matrículas (LPR).",
"Detectar humo y llama.",
"Generar metadatos para la operativa diaria."
]
},
{
heading: "¿Qué beneficios aporta?",
bullets: [
"Prioriza los eventos relevantes y reduce las horas de revisión manual.",
"Ofrece datos objetivos para mejorar la seguridad, la gestión de aforos y los flujos de personas.",
"Optimiza la operativa de su negocio."
]
}
]
}
];
