export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  badge: string;
  features: ServiceFeature[];
  benefits: string[];
  faqs: ServiceFAQ[];
}

export const SITE_DATA = {
  name: "Fervi Asesores",
  tagline: "Asesoría integral y soluciones de ahorro en El Ejido",
  description:
    "Optimizamos tus contratos de seguros, energía, telecomunicaciones, servicios jurídicos, finanzas e informática en El Ejido. Un único asesor de confianza, sin letra pequeña.",
  email: "roger@ferviasesores.es",
  address: {
    street: "C/ Leonardo Da Vinci, 1",
    building: "Edif. CIM, Planta 4, Oficina 15",
    postalCode: "04700",
    city: "El Ejido",
    province: "Almería",
    full: "C/ Leonardo Da Vinci, 1, Edif. CIM, Planta 4, Oficina 15, 04700 El Ejido (Almería)",
    googleMapsEmbed:
      "https://www.google.com/maps?q=Calle+Leonardo+da+Vinci+1,+04700+El+Ejido,+Almeria&output=embed",
    googleMapsLink:
      "https://www.google.com/maps/search/?api=1&query=Calle+Leonardo+da+Vinci+1+Edificio+CIM+El+Ejido",
  },
  phones: [
    {
      number: "850 985 066",
      raw: "850985066",
      whatsappUrl: "https://wa.me/34850985066?text=Hola%20Fervi%20Asesores,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n.",
      hasWhatsapp: true,
      label: "Fijo y WhatsApp",
    },
    {
      number: "605 310 779",
      raw: "605310779",
      hasWhatsapp: false,
      label: "Atención Móvil",
    },
  ],
  socials: {
    instagram: "https://www.instagram.com/ferviasesores/",
    facebook: "https://www.facebook.com/profile.php?id=100072073890373",
  },
  schedule: "Lunes a Viernes de 9:00 a 14:00 y de 16:30 a 19:30",
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "seguros",
    title: "Asesoría y Mediación de Seguros",
    shortTitle: "Seguros",
    badge: "Protección a medida",
    subtitle: "Comparamos entre las principales aseguradoras para darte la mejor cobertura al precio más justo.",
    description:
      "Automóvil, hogar, salud, vida, decesos y empresas. Analizamos tus pólizas actuales para evitar duplicidades y mejorar tus coberturas.",
    longDescription:
      "En Fervi Asesores trabajamos con total independencia frente a las grandes aseguradoras. Revisamos cada cláusula de tus pólizas actuales para que no pagues por coberturas duplicadas ni te quedes desprotegido ante un siniestro. Además, si ocurre cualquier incidencia, nos encargamos personalmente de tramitar y defender tu parte frente a la compañía.",
    icon: "shield",
    features: [
      {
        title: "Seguros de Hogar y Comunidad",
        description: "Protección integral frente a daños por agua, fenómenos eléctricos, robo y responsabilidad civil con asistencia rápida.",
      },
      {
        title: "Auto, Moto y Flotas Comerciales",
        description: "Terceros ampliado o todo riesgo con vehículo de sustitución y las mejores coberturas de asistencia en carretera.",
      },
      {
        title: "Salud, Vida y Decesos",
        description: "Cuadros médicos de primer nivel sin esperas y tranquilidad económica garantizada para el futuro de tu familia.",
      },
      {
        title: "Seguros para Empresas, Pymes y Autónomos",
        description: "Responsabilidad civil, multirriesgo comercial, baja laboral (ILT), convenios colectivos y protección de mercancías.",
      },
    ],
    benefits: [
      "Auditoría gratuita de tus pólizas actuales para detectar sobrecostes.",
      "Unificación de vencimientos y gestión centralizada con un único asesor.",
      "Acompañamiento y defensa activa en la gestión de siniestros sin centralitas.",
      "Precios negociados con las aseguradoras líderes del mercado nacional.",
    ],
    faqs: [
      {
        question: "¿Cuándo debo avisar para cambiar mi seguro actual?",
        answer: "La ley establece un plazo mínimo de 30 días antes de la fecha de vencimiento para comunicar la no renovación. En Fervi Asesores controlamos los plazos por ti y redactamos la baja sin que tengas que preocuparte.",
      },
      {
        question: "¿Si tengo un siniestro hablo con vosotros o con la aseguradora?",
        answer: "Hablas directamente con nosotros en nuestra oficina de El Ejido, por teléfono o WhatsApp. Nosotros abrimos el parte y hacemos el seguimiento con los peritos.",
      },
    ],
  },
  {
    slug: "energia",
    title: "Consultoría de Energía: Luz y Gas",
    shortTitle: "Energía",
    badge: "Ahorro garantizado en factura",
    subtitle: "Optimizamos tu factura eléctrica y de gas eliminando costes ocultos y ajustando tu potencia real.",
    description:
      "Optimizamos tu factura eléctrica y de gas para hogares, comunidades y empresas, buscando las tarifas más competitivas del mercado.",
    longDescription:
      "El mercado energético cambia constantemente y la mayoría de hogares, negocios e invernaderos pagan de más por potencias mal dimensionadas, energía reactiva o servicios de mantenimiento innecesarios. Realizamos un estudio técnico gratuito de tu factura de luz y gas para reducir tu recibo mensual sin cortes de suministro ni permanencias engañosas.",
    icon: "bolt",
    features: [
      {
        title: "Optimización de Potencia Contratada",
        description: "Analizamos tu curva de carga real mediante maxímetro para ajustar los kW contratados a lo que verdaderamente necesitas.",
      },
      {
        title: "Tarifas para Hogares, Pymes y Sector Agrícola",
        description: "Tarifas fijas o indexadas negociadas para viviendas, locales comerciales, comunidades de propietarios y explotaciones en El Ejido.",
      },
      {
        title: "Eliminación de Servicios Innecesarios",
        description: "Detectamos y damos de baja mantenimientos añadidos en factura que encarecen tu recibo sin que lo sepas.",
      },
      {
        title: "Suministro de Gas Natural",
        description: "Revisión de tramos de consumo (RL.1, RL.2, RL.3) para reducir el término fijo y el precio por kWh en calefacción y agua caliente.",
      },
    ],
    benefits: [
      "Estudio comparativo 100% gratuito entregando solo tu última factura.",
      "Cambio de comercializadora totalmente transparente, sin cortes de luz en ningún momento.",
      "Revisión anual de tus tarifas para evitar subidas automáticas al renovar.",
      "Atención presencial en El Ejido para resolver cualquier incidencia de facturación.",
    ],
    faqs: [
      {
        question: "¿Me quedaré sin luz en algún momento durante el cambio?",
        answer: "No, en absoluto. El cambio es puramente administrativo y de facturación; la distribuidora y el cableado siguen siendo exactamente los mismos.",
      },
      {
        question: "¿Qué necesito para solicitar el estudio de ahorro?",
        answer: "Solo necesitamos una foto o PDF de tu última factura completa (por ambas caras) por WhatsApp al 850 985 066 o a través del formulario.",
      },
    ],
  },
  {
    slug: "telecomunicaciones",
    title: "Asesoría en Telecomunicaciones: Fibra y Móvil",
    shortTitle: "Telecomunicaciones",
    badge: "Conectividad sin sobrecostes",
    subtitle: "Analizamos tus facturas de telefonía e internet para reducir costes manteniendo la mejor cobertura.",
    description:
      "Estudiamos tus tarifas de fibra, móvil y centralitas para particulares y empresas, reduciendo tu factura de forma rápida y sencilla.",
    longDescription:
      "Las compañías telefónicas aplican subidas periódicas y paquetes llenos de servicios que no utilizas. En Fervi Asesores estudiamos el consumo real de tus líneas móviles y fibra óptica, seleccionando el operador con mejor cobertura en tu zona de El Ejido y el Poniente para que ahorres cada mes.",
    icon: "wifi",
    features: [
      {
        title: "Paquetes Convergentes Fibra + Móvil",
        description: "Alta velocidad simétrica y líneas móviles con datos ilimitados o compartidos al precio más bajo del mercado.",
      },
      {
        title: "Comunicaciones para Empresas y Autónomos",
        description: "Centralitas virtuales, IP fija, líneas multisede y tarifas profesionales adaptadas a tu volumen de llamadas.",
      },
      {
        title: "Gestión Integral de Portabilidades",
        description: "Conservamos todos tus números de teléfono actuales y coordinamos la instalación para que no pierdas conectividad.",
      },
      {
        title: "Control de Permanencias y Penalizaciones",
        description: "Verificamos el estado de tus contratos antes de cualquier cambio para que nunca tengas sorpresas en tu cuenta bancaria.",
      },
    ],
    benefits: [
      "Ahorro medio de entre un 25% y un 40% en la factura anual de comunicaciones.",
      "Asesoramiento multioperador: trabajamos con distintas redes para asegurar cobertura real.",
      "Olvídate de pasar horas al teléfono con operadoras automáticas.",
      "Soporte cercano para cambios de titular, duplicados de SIM o ampliaciones de línea.",
    ],
    faqs: [
      {
        question: "¿Pierdo mi número de teléfono de toda la vida al cambiar?",
        answer: "No. Gestionamos la portabilidad completa tanto de tus números móviles como del teléfono fijo para que mantengas exactamente la misma numeración.",
      },
      {
        question: "¿Qué pasa si el router nuevo tarda en instalarse?",
        answer: "Coordinamos la portabilidad para que el corte sea inapreciable y no des de baja tu servicio anterior hasta que el nuevo esté operativo.",
      },
    ],
  },
  {
    slug: "servicios-juridicos",
    title: "Servicios Jurídicos, Administrativos e Inmobiliarios",
    shortTitle: "Servicios Jurídicos",
    badge: "Seguridad legal y documental",
    subtitle: "Respaldo legal, tramitación administrativa y asesoramiento en compraventa y alquiler de inmuebles.",
    description:
      "Asesoramiento jurídico, revisión de contratos, reclamaciones, gestiones administrativas e intermediación documental inmobiliaria en El Ejido.",
    longDescription:
      "Firmar un contrato, gestionar una compraventa o reclamar un cobro indebido requiere seguridad jurídica. En Fervi Asesores te ofrecemos asesoramiento legal y documental cercano y comprensible, protegiendo tus intereses en operaciones inmobiliarias, contratos mercantiles, reclamaciones de consumo y trámites ante la administración.",
    icon: "scale",
    features: [
      {
        title: "Derecho Inmobiliario y Contratos de Arrendamiento",
        description: "Redacción y revisión de contratos de arras, compraventa y alquiler seguro con cláusulas de protección para propietarios e inquilinos.",
      },
      {
        title: "Reclamaciones Bancarias y de Consumo",
        description: "Defensa frente a cláusulas abusivas, tarjetas revolving, cobros indebidos de suministros y siniestros rechazados.",
      },
      {
        title: "Trámites Administrativos y Gestoría Documental",
        description: "Certificados, escrituras, liquidación de impuestos asociados a transmisiones, plusvalías y registros oficiales.",
      },
      {
        title: "Asesoramiento Civil y Mercantil",
        description: "Orientación preventiva para particulares, autónomos y pymes en acuerdos comerciales y resolución extrajudicial de conflictos.",
      },
    ],
    benefits: [
      "Explicaciones claras en lenguaje llano, sin tecnicismos incomprensibles.",
      "Revisión preventiva de documentos antes de firmar para evitar riesgos futuros.",
      "Coordinación directa con notarías, registros y organismos públicos en El Ejido.",
      "Presupuesto cerrado y transparente desde la primera consulta.",
    ],
    faqs: [
      {
        question: "¿Revisáis contratos redactados por otra parte antes de que los firme?",
        answer: "Sí. Analizamos contratos de arras, alquiler, préstamos o prestación de servicios para detectar cláusulas perjudiciales y proponer modificaciones antes de tu firma.",
      },
      {
        question: "¿También gestionáis la intermediación inmobiliaria?",
        answer: "Por supuesto. Te acompañamos en todo el proceso de compra, venta o alquiler de tu inmueble, desde la valoración hasta la firma en notaría y el cambio de suministros.",
      },
    ],
  },
  {
    slug: "informatica",
    title: "Soluciones de Informática y Equipamiento Tecnológico",
    shortTitle: "Informática",
    badge: "Tecnología para tu negocio",
    subtitle: "Mantenimiento informático, equipamiento profesional, redes y seguridad para que tu empresa no se detenga.",
    description:
      "Suministro de equipos de primeras marcas, mantenimiento técnico, redes, copias de seguridad y software de gestión para empresas y particulares.",
    longDescription:
      "La tecnología debe ser una herramienta que impulse tu productividad, no una fuente de problemas. Actuamos como tu socio tecnológico en El Ejido: suministramos ordenadores y periféricos de marcas líderes, configuramos redes seguras y ofrecemos soporte técnico ágil para que tu negocio o despacho funcione siempre a pleno rendimiento.",
    icon: "computer",
    features: [
      {
        title: "Suministro de Hardware y Equipos a Medida",
        description: "Ordenadores de sobremesa, portátiles profesionales, servidores, TPVs e impresoras configurados según las necesidades reales de tu puesto.",
      },
      {
        title: "Mantenimiento Preventivo y Soporte Técnico",
        description: "Resolución rápida de averías, optimización de sistemas lentos, sustitución de componentes y asistencia presencial o remota.",
      },
      {
        title: "Ciberseguridad y Copias de Seguridad (Backup)",
        description: "Protección antivirus corporativa, cortafuegos y sistemas de respaldo automático en la nube y local para blindar tus datos.",
      },
      {
        title: "Redes Wi-Fi Profesionales y Software de Gestión",
        description: "Instalación de puntos de acceso de alto rendimiento, cableado estructurado e implantación de programas de facturación y ofimática.",
      },
    ],
    benefits: [
      "Asesoramiento honesto: te recomendamos solo el equipo que realmente necesitas.",
      "Puesta en marcha completa y migración de datos de tus equipos antiguos.",
      "Tiempos de respuesta rápidos en El Ejido y comarca del Poniente.",
      "Un único proveedor para tu informática y tus telecomunicaciones.",
    ],
    faqs: [
      {
        question: "¿Hacéis mantenimiento periódico para pequeñas empresas y comercios?",
        answer: "Sí, disponemos de planes adaptados a pymes, comercios y despachos profesionales, así como intervenciones puntuales bajo demanda.",
      },
      {
        question: "¿Podéis asesorarme en la compra de equipos nuevos y dejarlos configurados?",
        answer: "Exacto. Nos encargamos de adquirir el equipo, instalar el sistema y tus programas habituales, pasar tus archivos y dejarlo listo para trabajar.",
      },
    ],
  },
  {
    slug: "finanzas-e-inversion",
    title: "Planificación de Finanzas, Ahorro e Inversión",
    shortTitle: "Finanzas e Inversión",
    badge: "Haz crecer tu patrimonio",
    subtitle: "Planificación financiera personalizada y productos de ahorro adaptados a tus objetivos a corto, medio y largo plazo.",
    description:
      "Estudio de hipotecas, préstamos, reunificación, planes de ahorro y gestión patrimonial con asesoramiento independiente y transparente.",
    longDescription:
      "Sacar partido a tus ahorros o conseguir la mejor financiación para tu vivienda no debería depender únicamente de lo que te ofrezca tu banco habitual. En Fervi Asesores analizamos tu perfil financiero y tus metas vitales para diseñar una estrategia de ahorro, inversión o financiación segura, diversificada y con comisiones reducidas.",
    icon: "chart",
    features: [
      {
        title: "Planes de Ahorro Sistemático y Futuro Familiar",
        description: "Soluciones flexibles para crear un colchón financiero, planificar los estudios de tus hijos o complementar tu jubilación con ventajas fiscales.",
      },
      {
        title: "Asesoramiento en Hipotecas y Financiación",
        description: "Negociación de nuevas hipotecas, subrogaciones para bajar tu cuota mensual y estudio de financiación para proyectos empresariales.",
      },
      {
        title: "Inversión Diversificada según tu Perfil de Riesgo",
        description: "Opciones conservadoras, moderadas o dinámicas respaldadas por entidades de primer nivel y supervisadas oficialmente.",
      },
      {
        title: "Optimización Fiscal del Patrimonio",
        description: "Estructuración inteligente de tus productos financieros para minimizar el impacto fiscal en el rescate o rendimiento de tu capital.",
      },
    ],
    benefits: [
      "Independencia frente a entidades bancarias tradicionales: buscamos lo que más te conviene a ti.",
      "Transparencia absoluta en rentabilidades históricas, riesgos, liquidez y comisiones.",
      "Seguimiento periódico presencial para ajustar tu plan si cambian tus circunstancias.",
      "Estudio inicial de salud financiera totalmente gratuito y confidencial.",
    ],
    faqs: [
      {
        question: "¿Necesito tener un gran capital para empezar a ahorrar o invertir?",
        answer: "En absoluto. Existen planes de ahorro periódico desde aportaciones mensuales muy reducidas, totalmente flexibles y con disponibilidad de tu dinero.",
      },
      {
        question: "¿Podéis revisar mi hipoteca actual para ver si puedo pagar menos al mes?",
        answer: "Sí. Estudiamos las condiciones de tu hipoteca actual y las comparamos con las ofertas vigentes del mercado para calcular cuánto te ahorrarías con una mejora o subrogación.",
      },
    ],
  },
];

// ============================================================================
// BLOQUE DE COMPATIBILIDAD CON TODOS LOS COMPONENTES ORIGINALES DEL PROYECTO
// ============================================================================

export const steps = [
  {
    step: "01",
    title: "Contacto y revisión",
    text: "Llámanos, escríbenos por WhatsApp o ven a vernos a nuestra oficina en El Ejido. Cuéntanos qué facturas o pólizas deseas revisar.",
    description: "Llámanos, escríbenos por WhatsApp o ven a vernos a nuestra oficina en El Ejido. Cuéntanos qué facturas o pólizas deseas revisar.",
  },
  {
    step: "02",
    title: "Estudio sin coste",
    text: "Analizamos tus contratos actuales de luz, telefonía, seguros o finanzas para detectar sobrecostes y servicios innecesarios.",
    description: "Analizamos tus contratos actuales de luz, telefonía, seguros o finanzas para detectar sobrecostes y servicios innecesarios.",
  },
  {
    step: "03",
    title: "Propuesta clara",
    text: "Comparamos entre las principales compañías del sector y te mostramos las opciones reales de ahorro, sin letra pequeña.",
    description: "Comparamos entre las principales compañías del sector y te mostramos las opciones reales de ahorro, sin letra pequeña.",
  },
  {
    step: "04",
    title: "Gestión y ahorro",
    text: "Tramitamos los cambios de forma ágil sin que tengas que lidiar con centralitas. Tú solo disfrutas del ahorro mes a mes.",
    description: "Tramitamos los cambios de forma ágil sin que tengas que lidiar con centralitas. Tú solo disfrutas del ahorro mes a mes.",
  },
];

// Añadimos también campos alias (como summary o text) a los servicios por si ServiceList.astro los lee
export const services = SERVICES.map((s) => ({
  ...s,
  name: s.shortTitle,
  summary: s.description,
  text: s.description,
  href: `/servicios/${s.slug}`,
  url: `/servicios/${s.slug}`,
}));

export const site = {
  ...SITE_DATA,
  title: `${SITE_DATA.name} — ${SITE_DATA.tagline}`,
  url: "https://ferviasesores.es",
  phone: SITE_DATA.phones[0].number,
  phoneRaw: SITE_DATA.phones[0].raw,
  secondaryPhone: SITE_DATA.phones[1].number,
  secondaryPhoneRaw: SITE_DATA.phones[1].raw,
  whatsapp: SITE_DATA.phones[0].whatsappUrl,
  addressText: SITE_DATA.address.full,
  location: SITE_DATA.address.full,
  city: SITE_DATA.address.city,
  steps,
  services,
  hero: {
    eyebrow: "ASESORÍA INTEGRAL Y AHORRO EN EL EJIDO",
    title: "Ahorra en tus facturas y protege lo que importa con un único asesor de confianza",
    subtitle:
      "Optimizamos tus contratos de seguros, luz, telecomunicaciones, servicios jurídicos, finanzas e informática. Analizamos tu caso sin compromiso para que pagues solo lo justo, sin letra pequeña.",
    ctaPrimary: { label: "Solicita tu estudio gratuito", href: "/contacto" },
    ctaSecondary: { label: "Ver servicios", href: "/#servicios" },
  },
  cta: {
    title: "¿Cuánto puedes ahorrar en tus facturas cada mes?",
    text: "Tráenos tus recibos de luz, seguros o telefonía a nuestra oficina en El Ejido o envíanoslos por WhatsApp. Analizamos tus costes actuales sin compromiso.",
    buttonText: "Solicita tu estudio gratuito",
    buttonHref: "/contacto",
  },
  legal: {
    companyName: SITE_DATA.name,
    owner: "Fervi Asesores",
    cif: "B00000000",
    address: SITE_DATA.address.full,
    email: SITE_DATA.email,
  },
};

export default site;