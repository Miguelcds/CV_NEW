const data = {
  name: "Joao Miguel",
  address: "Basauri, Bizkaia",
  email: "miguel-cds@hotmail.com",
  avatar: "./CVProfile.jpg",

  aboutMe:
    "Soy estudiante de Desarrollo de Aplicaciones Web (DAW) y del Máster en Desarrollo Web Full Stack. Me estoy especializando en desarrollo backend con Node.js, Express y MongoDB, aunque también trabajo frontend con React. Provengo de un entorno técnico y de atención al cliente, lo que me ha aportado autonomía, organización y capacidad de resolución de problemas. Busco mi primera oportunidad como desarrollador junior para seguir creciendo profesionalmente y aportar valor desde el primer día.",

  aboutMe_English:
    "I am a Web Application Development (DAW) student and a Full Stack Web Development master’s student. I am mainly focused on backend development using Node.js, Express, and MongoDB, while also working with React on the frontend. Coming from a technical and customer-oriented background, I have developed strong problem-solving skills, autonomy, and good time management. I am currently looking for my first opportunity as a junior web developer.",

  education: [
    {
      degree: "CFGS en Desarrollo de Aplicaciones Web (DAW)",
      university: "The Power FP",
      graduationYear: 2026,
      relevantCourses: `
      HTML, CSS y JavaScript, 
      Diseño de Aplicaciones Web Front y Backend con Node.js y Express, 
      Bases de Datos Relacionales y NoSQL, 
      APIs REST y autenticación`,
    },
    {
      degree: "Máster en Desarrollo Web Full Stack",
      university: "The Power",
      graduationYear: 2026,
      relevantCourses:`HTML, CSS, JavaScript, React, Node.js, MongoDB Arquitectura Full Stack`,
    },
  ],

  workExperience: [
    {
      position: "Técnico de Campo",
      company: "Ista Metering Services Spain",
      startDate: "2019",
      endDate: "2026",
      description:
        "Lectura, mantenimiento y revisión de equipos de medición. Resolución de incidencias en campo, trabajo autónomo por rutas y trato directo con clientes. Durante medio año realicé tareas de organización de personal, asignación de tareas y seguimiento del trabajo del equipo.",
    },
    {
      position: "Camarero",
      company: "Foster’s Hollywood",
      startDate: "2015",
      endDate: "2019",
      description:
        "Atención al cliente, trabajo en equipo en entornos de alta carga de trabajo y gestión eficiente del tiempo.",
    },
  ],

  skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "APIs REST",
    "Git / GitHub",
    "Patrón DAO",
    "Mongoose",
    "SCRUM / Agile",
    "Java",
    "Bootstrap",
    "Tailwind CSS",
  ],

  projects: [
    {
      title: "CSS Showcase",
      description:
        "Proyecto enfocado en CSS moderno con layouts responsive, animaciones y componentes reutilizables utilizando Flexbox y Grid.",
      link: "https://css-j-costa.netlify.app/",
      image: "./project1.avif",
    },
    {
      title: "E-Commerce",
      description:
        "Demo de e-commerce responsive desarrollada con HTML y CSS, enfocada en estructura, diseño y experiencia de usuario.",
      link: "https://proyect-shop-css.netlify.app/",
      image: "./project2.avif",
    },
    {
      title: "Portfolio Website",
      description:
        "Portfolio personal donde muestro mis proyectos, habilidades y evolución como desarrollador web.",
      link: "https://joaocosta-my-portfolio.vercel.app/#",
      image: "./project3.avif",
    },
    {
      title: "Async-Web",
      description:
        "Proyecto interactivo centrado en JavaScript asíncrono, consumo de APIs y renderizado dinámico de datos.",
      link: "https://async-web-jc.netlify.app/",
      image: "./project4.avif",
    },
  ],
};

export default data;
