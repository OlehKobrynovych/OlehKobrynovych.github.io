const header = {
    homepage: 'https://OlehKobrynovych.github.io',
    title: 'O. Kobrynovych',
  }
  
  const about = {
    name: 'Oleg Kobrynovych',
    title: 'ABOUT',
    description:
      'I want to be part of a friendly and professional team where I can develop my skills. I can develop web applications or implement new features / views, maintain, optimize, and debug existing applications. To achieve team results, I am ready to put 100% of my strength.',
    resume: 'https://docs.google.com/document/d/15Idr6s381-8PT57vLT8mh-FnQo0__XQu_y-b7sRRGl0/edit?usp=sharing',
    social: {
      linkedin: 'https://www.linkedin.com/in/olehkobrynovych',
      github: 'https://github.com/OlehKobrynovych',
    },
    education: 'Ivan Franko National University of Lviv: Faculty of Economic Cybernetics',
    specialist: "Bachelor's Diploma / Specialist Diploma"
  }
  
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      foto: './img/ReactGame.png',
      description:
        'Zeros and crosses - players take turns marking gaps in the 3 on 3 grid. The player who manages to place three of their marks in a horizontal, vertical or diagonal row, wins the game.',
      stack: ['React', 'React-redux'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_Game',
      livePreview: 'https://OlehKobrynovych.github.io/React_Game',
    },
    {
      id: 2,
      name: 'Project 2',
      foto: './img/Pets.png',
      description:
        'Adaptive web design of web pages from a PSD file, using flexbox, on a program like Figma.',
      stack: ['Vue', 'Figma'],
      sourceCode: 'https://github.com/OlehKobrynovych/Vue_Pets',
      livePreview: 'https://OlehKobrynovych.github.io/Vue_Pets',
    },
    {
      id: 3,
      name: 'Project 3',
      foto: './img/Innovated.png',
      description:
        'Adaptive web design of web pages from a PSD file, using flexbox, on a program like Figma.',
      stack: ['HTML', 'CSS', 'Figma'],
      sourceCode: 'https://github.com/OlehKobrynovych/Innovated',
      livePreview: 'https://olehkobrynovych.github.io/Innovated/',
    },
    {
      id: 4,
      name: 'Project 4',
      foto: './img/Todos.png',
      description:
        'To-do list This program will perform the following functions: display current tasks, allow you to add new tasks through the input field, delete tasks.',
      stack: ['React', 'React-redux', 'Redux-thunk', 'React-bootstrap'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_todos_Redux',
      livePreview: 'https://OlehKobrynovych.github.io/React_todos_Redux',
    },
    {
      id: 5,
      name: 'Project 5',
      foto: './img/StarWar.png',
      description:
        'React_StarWar API - You will have access to approximately hundreds of characters, images, locations and episodes.',
      stack: ['React', 'React-redux', 'Redux-thunk', 'React-route', 'Axios', 'Material UI', 'LocalStorage'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_StarWar',
      livePreview: 'https://OlehKobrynovych.github.io/React_StarWar',
    },
    {
      id: 6,
      name: 'Project 6',
      foto: './img/Films.png',
      description:
        'Rick and Morty API - You will have access to approximately hundreds of characters, images, locations and episodes. ',
      stack: ['React', 'React-redux', 'Redux-thunk', 'React-route', 'Axios', 'React-Bootstrap', 'LocalStorage'],
      sourceCode: 'https://github.com/OlehKobrynovych/React_films_API_Redux',
      livePreview: 'https://OlehKobrynovych.github.io/React_films_API_Redux',
    },
  ]
  
  const skillsProgram = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Vue',
    'Redux',
    'SASS/LESS',
  ]
  const skillsFrameworks = [
    'Bootstrap',
    'Material UI',
  ]
  const skillsOther = [
    'Git/GitHub',
    'REST API',
    'Gulp',
    'Webpack',
    'Photoshop',
    'Figma',
  ]
  const skillsLenguages = [
    'Ukrainian - (Native)',
    'Russian - (Full)',
    'Polish - (Full)',
    'English - (Limited)',
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
  