const header = {
    homepage: 'https://OlehKobrynovych.github.io',
    title: 'O. Kobrynovych',
  }
  
  const about = {
    name: 'Oleh Kobrynovych',
    title: 'ABOUT',
    description:
      'I am an front-end developer passionate about innovation and high quality software. I can develop web applications or implement new features / views, maintain, optimize, and debug existing applications. To achieve team results, I am ready to put 100% of my strength.',
    resume: 'https://drive.google.com/file/d/1G9xqieQaJwO_36peDmyYRtQY8u41B3_N/view?usp=sharing',
    social: {
      linkedin: 'https://www.linkedin.com/in/olehkobrynovych',
      github: 'https://github.com/OlehKobrynovych',
      upwork: 'https://www.upwork.com/freelancers/~015155dd65199c5c2b',
    },
    education: 'Ivan Franko National University of Lviv: Faculty of Economic Cybernetics',
    specialist: "Bachelor's Diploma / Specialist Diploma"
  }
  
  const projects = [
    {
      id: 1,
      name: 'Project',
      foto: './img/ReactGame.png',
      description:
        'Zeros and crosses - players take turns marking gaps in the 3 on 3 grid. The player who manages to place three of their marks in a horizontal, vertical or diagonal row, wins the game.',
      stack: ['React', 'React-redux'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_Game',
      livePreview: 'https://OlehKobrynovych.github.io/React_Game',
    },
    {
      id: 2,
      name: 'Project',
      foto: './img/Pets.png',
      description:
        'Adaptive web design of web pages from a PSD file, using flexbox, on a program like Figma.',
      stack: ['Vue', 'Figma'],
      sourceCode: 'https://github.com/OlehKobrynovych/Vue_Pets',
      livePreview: 'https://OlehKobrynovych.github.io/Vue_Pets',
    },
    {
      id: 3,
      name: 'Project',
      foto: './img/Innovated.png',
      description:
        'Adaptive web design of web pages from a PSD file, using flexbox, on a program like Figma.',
      stack: ['HTML', 'CSS', 'Figma'],
      sourceCode: 'https://github.com/OlehKobrynovych/Innovated',
      livePreview: 'https://olehkobrynovych.github.io/Innovated/',
    },
    {
      id: 4,
      name: 'Project',
      foto: './img/Todos.png',
      description:
        'To-do list This program will perform the following functions: display current tasks, allow you to add new tasks through the input field, delete tasks.',
      stack: ['React', 'React-redux', 'Redux-thunk', 'React-bootstrap'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_todos_Redux',
      livePreview: 'https://OlehKobrynovych.github.io/React_todos_Redux',
    },
    {
      id: 5,
      name: 'Project',
      foto: './img/StarWar.png',
      description:
        'React_StarWar API - You will have access to approximately hundreds of characters, images, locations and episodes.',
      stack: ['React', 'React-redux', 'Redux-thunk', 'React-route', 'Axios', 'Material UI', 'LocalStorage'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_StarWar',
      livePreview: 'https://OlehKobrynovych.github.io/React_StarWar',
    },
    {
      id: 6,
      name: 'Project',
      foto: './img/Films.png',
      description:
        'Rick and Morty API - You will have access to approximately hundreds of characters, images, locations and episodes. ',
      stack: ['React', 'React-redux', 'Redux-thunk', 'React-route', 'Axios', 'React-Bootstrap', 'LocalStorage'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_films_API_Redux',
      livePreview: 'https://OlehKobrynovych.github.io/React_films_API_Redux',
    },
    {
      id: 7,
      name: 'Project',
      foto: './img/FileManager.png',
      description:
        'Unfinished demonstration project to improve skills.',
      stack: ['React', 'Moment', 'Prop-types', 'Material UI', 'LocalStorage'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_FileManager',
      livePreview: 'https://OlehKobrynovych.github.io/React_FileManager',
    },
    {
      id: 8,
      name: 'Project',
      foto: './img/Mozgi.png',
      description:
        'Demonstration animation project for advanced training.',
      stack: ['React', 'React-router', 'React-spring/web', 'Material UI', 'Gsap'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_Mozgi_Animation',
      livePreview: 'https://OlehKobrynovych.github.io/React_Mozgi_Animation',
    },
    {
      id: 9,
      name: 'Project',
      foto: './img/train.png',
      description:
        'Demonstration project for advanced training..',
      stack: ['React', 'Redux', 'Material UI', 'PropTypes'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_Train_Schedule',
      livePreview: 'https://OlehKobrynovych.github.io/React_Train_Schedule',
    },
    {
      id: 10,
      name: 'Project',
      foto: './img/Minimo.png',
      description:
        'Demonstration project for advanced training. Laravel_Mix ...',
      stack: ['Html', 'Css', 'Scss', 'js', 'Swiper', 'Laravel_Mix', 'ejs' ,'ITCSS', 'Image', 'Fonts'],
      sourceCode: 'https://github.com/OlehKobrynovych/Laravel_Mix__Minimo__2022',
      livePreview: 'https://olehkobrynovych.github.io/Laravel_Mix__Minimo__2022/',
    },
  ].reverse();
   
  const skillsProgram = [
    'HTML',
    'CSS',
    'SASS/LESS',
    'JavaScript',
    'React',
    'Redux(Toolkit/Thunk)',
    'React Router',
    'Vue',
    'Vuex',
    "Nuxt.js",
    "Next.js(Beginner)",
    "Node.js(Beginner)",
    "TypeScript(Beginner)",
    "SQL/MySQL(Beginner)",
  ]
  const skillsFrameworks = [
    'Bootstrap',
    'Material UI',
    'Semantic UI',
  ]
  const skillsOther = [
    'Git/GitHub',
    'REST API',
    'BEM (CSS)',
    'Gulp',
    'Webpack',
    'Laravel Mix',
    'Photoshop',
    'Figma',
  ]
  const skillsLenguages = [
    'Ukrainian - (Native)',
    'Russian - (Full)',
    'Polish - (Full)',
    'English - (Pre-Intermediate)',
  ]
  const skillsPersonal = [
    'Motivated',
    'Productive',
    'Responsible',
    'Adaptable',
    'Communicable',
  ]
  
  const contact = {
    email: 'o.kobrynovych@gmail.com',
  }
  
  export { header, about, projects, skillsProgram, skillsFrameworks, skillsOther, skillsLenguages, skillsPersonal, contact }
  