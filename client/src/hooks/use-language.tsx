import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "EN" | "ES";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Menu
  "nav.home": { EN: "Home", ES: "Inicio" },
  "nav.about": { EN: "About", ES: "Sobre mí" },
  "nav.experience": { EN: "Experience", ES: "Experiencia" },
  "nav.projects": { EN: "Projects", ES: "Proyectos" },
  "nav.skills": { EN: "Skills", ES: "Habilidades" },
  "nav.education": { EN: "Education", ES: "Formación" },
  "nav.contact": { EN: "Contact", ES: "Contacto" },

  // Hero
  "hero.greeting": { EN: "Hello, I'm", ES: "Hola, soy" },
  "hero.role": { 
    EN: "Energy Engineer and Business Analytics student specialized in data science and artificial intelligence, focused on optimizing energy systems through data-driven insights.", 
    ES: "Ingeniero en Energía y estudiante de Analítica de Negocio, especializado en ciencia de datos e inteligencia artificial, enfocado en optimizar sistemas energéticos mediante análisis de datos." 
  },
  "hero.cta.contact": { EN: "Contact Me", ES: "Contactar" },
  "hero.cta.linkedin": { EN: "LinkedIn Profile", ES: "Perfil de LinkedIn" },
  "hero.cta.cv": { EN: "View CV", ES: "Ver CV" },

  // About
  "about.title": { EN: "About Me", ES: "Sobre Mí" },
  "about.edu": { EN: "Education", ES: "Formación Académica" },
  "about.edu.desc": { EN: "Master’s in Business Analytics (Applied AI) & BSc in Energy Engineering", ES: "Máster en Business Analytics (IA Aplicada) y Grado en Ingeniería de la Energía" },
  "about.exp": { EN: "Experience", ES: "Experiencia Profesional" },
  "about.exp.desc": { EN: "Electrical Distribution & Project Management", ES: "Distribución Eléctrica y Gestión de Proyectos" },
  "about.bio": { 
    EN: "Energy Engineer with a strong foundation in electrical distribution and renewable systems, currently expanding expertise in Business Analytics and AI. Passionate about leveraging data-driven insights to optimize energy solutions and drive operational efficiency.", 
    ES: "Ingeniero de la Energía con una sólida base en distribución eléctrica y sistemas renovables, actualmente ampliando mi especialización en Business Analytics e IA. Me apasiona utilizar el análisis de datos para optimizar soluciones energéticas e impulsar la eficiencia operativa." 
  },

  // Experience
  "exp.title": { EN: "Experience", ES: "Experiencia" },
  "exp.role1": { EN: "Final Degree Project – Elecnor", ES: "Trabajo Fin de Grado – Elecnor" },
  "exp.company1": { EN: "Resource Management in Electrical Distribution", ES: "Gestión de Recursos en la Distribución Eléctrica" },
  "exp.date1": { EN: "Sep 2024 – Jul 2025", ES: "Sep 2024 – Jul 2025" },
  "exp.desc1": { 
    EN: "Professional training in electrical distribution within a real operational environment.\nParticipation in fault management and new electrical supply projects.\nDevelopment of a custom LabVIEW application to optimize operational management and resource allocation.\n\nFinal Degree Project report available in Spanish.", 
    ES: "Formación profesional en distribución eléctrica en un entorno operativo real.\nParticipación en la gestión de averías y proyectos de nuevos suministros eléctricos.\nDesarrollo de una aplicación personalizada en LabVIEW para optimizar la gestión operativa y la asignación de recursos.\n\nMemoria del TFG disponible en Español." 
  },

// Experience Skills
"exp.skill.1": { EN: "Electrical Distribution", ES: "Distribución eléctrica" },
"exp.skill.2": { EN: "Fault Management", ES: "Gestión de averías" },
"exp.skill.3": { EN: "New Service Connections", ES: "Nuevos suministros eléctricos" },
"exp.skill.4": { EN: "Resource Planning", ES: "Planificación de recursos" },
"exp.skill.5": { EN: "Operational Coordination", ES: "Coordinación operativa" },
"exp.skill.6": { EN: "Process Optimization", ES: "Optimización de procesos" },
"exp.skill.7": { EN: "LabVIEW", ES: "LabVIEW" },
"exp.skill.8": { EN: "Data Tracking & Reporting", ES: "Seguimiento y reporte de datos" },

  // Projects
  "proj.title": { EN: "Projects", ES: "Proyectos" },
  "proj.1.title": { EN: "Low Power Single Phase Wind Generator", ES: "Generador Eólico Monofásico de Baja Potencia" },
  "proj.1.desc": { EN: "Small-scale wind turbine (72.4 W) with Boost converter, MPPT control, and inverter synchronization.\n\nFull technical report in Basque.", ES: "Aerogenerador de pequeña escala (72,4 W) con convertidor Boost, control MPPT y sincronización de inversor.\n\nMemoria técnica completa en Euskera." },
  "proj.2.title": { EN: "Electric Scooter Implementation", ES: "Implementación de Patinete Eléctrico" },
  "proj.2.desc": { EN: "Converted conventional scooter to electric; DC motor control, Li-Ion battery, PV charging.\n\nFull technical report in English.", ES: "Conversión de un patinete convencional a un modelo eléctrico; control de motor DC, batería de Li-Ion y estación de carga fotovoltaica.\n\nMemoria técnica completa en Ingles." },
  "proj.3.title": { EN: "Solar Thermal Collector", ES: "Colector Solar Térmico" },
  "proj.3.desc": { EN: "Domestic hot water system with Arduino control, sensors, efficiency optimization.\n\nFull technical report in Spanish.", ES: "Sistema de agua caliente sanitaria con control mediante Arduino, sensores y optimización de eficiencia.\n\nMemoria técnica completa en Español." },
  "proj.4.title": { EN: "Off-Grid Hydraulic Power Plant", ES: "Central Hidráulica Aislada" },
  "proj.4.desc": { EN: "Off-grid hydro system for a house, pump control, PLC monitoring.\n\nFull technical report in Basque.", ES: "Sistema hidroeléctrico aislado con control de bombas y monitorización PLC.\n\nMemoria técnica completa en Euskera." },

  // Project Skills - Wind Generator
  "proj.1.skill.1": { EN: "MATLAB & Simulink", ES: "MATLAB y Simulink" },
  "proj.1.skill.2": { EN: "LabVIEW", ES: "LabVIEW" },
  "proj.1.skill.3": { EN: "Power Electronics", ES: "Electrónica de potencia" },
  "proj.1.skill.4": { EN: "MPPT Control", ES: "Control MPPT" },
  "proj.1.skill.5": { EN: "Renewable Energy Systems", ES: "Sistemas de energía renovable" },

  // Project Skills - Electric Scooter
  "proj.2.skill.1": { EN: "MATLAB & Simulink", ES: "MATLAB y Simulink" },
  "proj.2.skill.2": { EN: "Texas Instruments", ES: "Texas Instruments" },
  "proj.2.skill.3": { EN: "DC Motor Control", ES: "Control de motores DC" },
  "proj.2.skill.4": { EN: "Battery Systems", ES: "Sistemas de baterías" },
  "proj.2.skill.5": { EN: "Electric Mobility", ES: "Movilidad eléctrica" },

  // Project Skills - Solar Thermal
  "proj.3.skill.1": { EN: "MATLAB & Simulink", ES: "MATLAB y Simulink" },
  "proj.3.skill.2": { EN: "Arduino", ES: "Arduino" },
  "proj.3.skill.3": { EN: "Thermal Systems", ES: "Sistemas térmicos" },
  "proj.3.skill.4": { EN: "Sensors & Control", ES: "Sensores y control" },
  "proj.3.skill.5": { EN: "Energy Efficiency", ES: "Eficiencia energética" },

  // Project Skills - Off-Grid Hydraulic
  "proj.4.skill.1": { EN: "MATLAB & Simulink", ES: "MATLAB y Simulink" },
  "proj.4.skill.2": { EN: "SolidWorks", ES: "SolidWorks" },
  "proj.4.skill.3": { EN: "Arduino", ES: "Arduino" },
  "proj.4.skill.4": { EN: "Automation & Control", ES: "Automatización y control" },
  "proj.4.skill.5": { EN: "Off-Grid Energy Systems", ES: "Sistemas energéticos aislados" },

  // Skills
  "skills.title": { EN: "Technical Skills", ES: "Conocimientos Técnicos" },
  "skills.soft": { EN: "Interpersonal Skills", ES: "Habilidades Interpersonales" },
  "skills.lang": { EN: "Languages", ES: "Idiomas" },
  "skills.lang.en": { EN: "English (Professional)", ES: "Inglés (Profesional)" },
  "skills.lang.es": { EN: "Spanish (Native)", ES: "Castellano (Nativo)" },
  "skills.lang.eu": { EN: "Basque (Native)", ES: "Euskera (Nativo)" },

  // Skill Items - Technical
  "skills.tech.python": { EN: "Python", ES: "Python" },
  "skills.tech.matlab": { EN: "MATLAB & Simulink", ES: "MATLAB y Simulink" },
  "skills.tech.labview": { EN: "LabVIEW", ES: "LabVIEW" },
  "skills.tech.arduino": { EN: "Arduino", ES: "Arduino" },
  "skills.tech.ti": { EN: "Texas Instruments (power electronics & control)", ES: "Texas Instruments (electrónica de potencia y control)" },
  "skills.tech.tableau": { EN: "Tableau", ES: "Tableau" },
  "skills.tech.sql": { EN: "SQL", ES: "SQL" },
  "skills.tech.ml": { EN: "Machine Learning", ES: "Aprendizaje automático (Machine Learning)" },
  "skills.tech.mlops": { EN: "MLOps", ES: "MLOps" },
  "skills.tech.solidworks": { EN: "SolidWorks", ES: "SolidWorks" },

  // Skill Items - Interpersonal
  "skills.soft.leadership": { EN: "Leadership", ES: "Liderazgo" },
  "skills.soft.comm": { EN: "Communication Skills", ES: "Habilidades de comunicación" },
  "skills.soft.adapt": { EN: "Adaptability", ES: "Adaptabilidad" },
  "skills.soft.team": { EN: "Teamwork", ES: "Trabajo en equipo" },
  "skills.soft.problem": { EN: "Problem Solving", ES: "Resolución de problemas" },
  "skills.soft.strategic": { EN: "Strategic Thinking", ES: "Pensamiento estratégico" },

  // Education
  "edu.title": { EN: "Education", ES: "Formación Académica" },
  "edu.1.school": { EN: "Sacred Heart University", ES: "Sacred Heart University" },
  "edu.1.degree": { EN: "Master’s in Business Analytics with Applied AI", ES: "Máster en Business Analytics con IA Aplicada" },
  "edu.1.date": { EN: "Expected Dec 2026", ES: "Finalización prevista en dic. 2026" },
  "edu.1.note": { EN: "D1 Student Athlete. Maximum Academic and Athletics Scholarship.", ES: "Estudiante Atleta D1. Beca académica y deportiva máxima otorgada por la universidad." },
  "edu.2.school": { EN: "Mondragón University", ES: "Mondragón Unibertsitatea" },
  "edu.2.degree": { EN: "Bachelor’s Degree in Energy Engineering", ES: "Grado en Ingeniería de la Energía" },
  "edu.2.date": { EN: "Sep 2021 – Jul 2025", ES: "Sep 2021 – Jul 2025" },

  // Contact
  "contact.title": { EN: "Get In Touch", ES: "Contacto" },
  "contact.subtitle": { EN: "Open to new professional opportunities and collaborations", ES: "Abierto a nuevas oportunidades profesionales y colaboraciones" },
  "contact.name": { EN: "Name", ES: "Nombre" },
  "contact.email": { EN: "Email", ES: "Correo electrónico" },
  "contact.message": { EN: "Message", ES: "Mensaje" },
  "contact.message.placeholder": { EN: "Your message...", ES: "Tu mensaje..." },
  "contact.submit": { EN: "Send Message", ES: "Enviar Mensaje" },
  "contact.sending": { EN: "Sending...", ES: "Enviando..." },
  "contact.success": { EN: "Message sent successfully!", ES: "¡Mensaje enviado correctamente!" },
  "contact.error": { EN: "Failed to send message.", ES: "Error al enviar el mensaje." },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "EN";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
