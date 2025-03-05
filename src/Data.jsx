// Navbar Data
export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Projects',
    path: 'projects',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

// About Data

const stories = [
  {
    id: 1,
    title: 'Who am I?',
    description: 
      "My name is Jessica Liong - embarking on a journey to be a full-stack developer, based in Melbourne, Australia. My experiences in previous work environments have equipped me to be adaptable in any circumstances. I have recently been fascinated how technology has evolved over the years to help us ease daily tasks while incorporating attractive designs. I wish to be a part of this growing industry by contributing to creating programs that solve real-life problems. I have just recently graduate my diploma in IT from Coder Academy and I strive to expand my tech knowledge by sharpening my coding skills. I always put in my best efforts into my learning and work and persist in learning new things to implement into my projects and tasks.",
  },
  {
    id: 2,
    title: 'What brought me here?',
    description: 
      "I came from a science background and had a love for mathematics when I was in school. I was drawn into the logic of programming and decided to take a leap of courage to learn to code. I enjoy combing the worlds of logic and creative design to create engaging, functional and accessible websites and applications for users to enjoy. My aim is to deliver exceptional digital experience to end-users in functionality and design.",
  },
  {
    id: 3,
    title: 'What do I stand for?',
    description: 
      "The four values I uphold are: Perseverance, Trust, Dedication and Integrity. One of my favourite quotes that helped me in my tech journey was 'Strive for Progress, not perfection' by Dave Gray. Changing careers into tech hasn't been an easy journey but I believe with hard work, perseverance and consistent learning, I am making continuous progress and I know my efforts will be rewarded.",
  },
  {
    id: 4,
    title: 'Who am I outside of work?',
    description: 
      "I am a foodie, a musician and a crypto enthusiast. These hobbies have allowed me to develop time management, resilience but at the same time have taught me that taking a break maintains my productivity. I love fashion, food photography and I'm also a spiritual enthusiast. This has taught me empathy, positivity, improving myself daily and have a keen eye for colours and design. I am also a team-oriented person who loves to collaborate with others with dedication and respect. I keep a beginner's mindset when it comes to reaching out for assistance while  learning and work diligently to support my team to achieve common goals.",
  }
]

export default stories;



// Projects Data
export const projects = [
      {
       id: 1,
       name: 'MERN Stack Project - server side',
       title: 'Pawtel',
       link: 'https://github.com/orgs/Pawtel/repositories',
       tech_stack: 'React | Node | Express | MongoDB ',
       description:
        'A pet hotel website developed with MERN stack that features room type selection, date selection, checkout process, user authentication and user creation.'
      },
      {
       id: 2,
       name: 'API Webserver',
       title: 'PetStays',
       link: 'https://github.com/jessicacliong/Pet-Stays-API-Webserver',
       tech_stack: 'Python | Flask | PostgreSQL',
       description:
        'A RESTful API for a pet hotel booking platform that connects pet owners and pet hotel staff to book accommodation at a pet hotel.',
      },
      {
       id: 3,
       name: 'Terminal Application',
       title: 'Snooze It',
       link: 'https://github.com/jessicacliong/Sleep-Tracker',
       tech_stack: 'Python',
       description:
        "A command line interface application that stores a user's sleep quality, quantity by date of entry and a journal to write down factors contributing to sleep quality. Each entry can be reveiwed by entering a specific date or a week date range",
      },
      {
       id: 4,
       name: 'Hackathon Project',
       title: 'MX51 Job Board',
       link: 'https://github.com/katielock92/gh-job-board',
       tech_stack: 'Javascript | React',
       description:
        "An API-driven job board for MX51, utilizing Greenhouse' open APIs. A one-week group project to practice GitHub collaboration",
      },
      {
       id: 5,
       name: 'Static Website',
       title: 'Portfolio Website',
       link: 'https://github.com/jessicacliong/Static-Portfolio-Website',
       tech_stack: 'Python | HTML5 | CSS3 | SCSS',
       description:
        "First project created from scratch. First time designing, developing and writing documentation of a website. Built on HTML5, CSS3 and SCSS.",
      },
];

//Skills Data
   export const skills = [
    {
      id: 1,
      name: 'HTML',
      icon: "ri:html5-fill"
    },
   
    {
      id: 2,
      name: 'CSS3',
      icon: "ion:logo-css3" 
    },
   
    {
      id: 3,
      name: 'Python',
      icon: "fa-brands:python"
    },

    {
      id: 4,
      name: 'Flask',
      icon: "simple-icons:flask"
    },
   
    {
      id: 5,
      name: 'PostgreSQL',
      icon: "devicon-plain:postgresql"
    },

    {
      id: 6,
      name: 'JavaScript',
      icon: "teenyicons:javascript-outline" 
    },

    {
      id: 7,
      name: 'React',
      icon: "teenyicons:react-outline"
    },

    {
      id: 8,
      name: 'Node',
      icon: "fa-brands:node-js"
    },

    {
      id: 9,
      name: 'Express',
      icon: "simple-icons:express"
    },

    {
      id: 10,
      name: 'MongoDB',
      icon: "simple-icons:mongodb"
    },

    {
      id: 11,
      name: 'Jest',
      icon: "cib:jest"
    },

    {
      id: 12,
      name: 'PyTest',
      icon: "file-icons:pytest"
    },

    {
      id: 13,
      name: 'VSCode',
      icon: "file-icons:vscode"
    },

    {
      id: 14,
      name: 'Trello',
      icon: "fa-brands:trello"
    },
    
    {
      id: 15,
      name: 'Figma',
      icon: "fa6-brands:figma"
    }
];
  
// Resume Data 
   export const cv = [
      {
       id: 1,
       title: 'Coder Academy',
       subtitle: 'Web Developement',
       date: 'Feb - Dec 2023',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       category: 'education',
      },
   
      {
       id: 2,
       title: 'La Trobe University',
       subtitle: 'Bachelor of Biotechnology and Cell Biology',
       date: '2010 - 2012',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       category: 'education',
      },
   
      /* {
       id: 3,
       title: '',
       subtitle: 'High School',
       date: '2010 - 2012',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       category: 'education',
      }, */
   
      {
       id: 4,
       title: 'Backend Intern',
       subtitle: 'Cogniss ',
       date: 'July 2024 - Sep 2024',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       category: 'experience',
      },
   
      {
       id: 5,
       title: 'Finance Officer',
       subtitle: 'CV Puji Mulyo, Indonesia',
       date: 'Jan 2020 - Present',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       category: 'experience',
      },
   
      {
       id: 6,
       title: 'Finance Associate',
       subtitle: 'Right Management, Melbourne',
       date: 'Jul 2019 - Jan 2020',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       category: 'experience',
      },

      {
        id: 7,
        title: 'Assistant Technical Director',
        subtitle: 'PT Lembah Tidar Jaya, Indonesia',
        date: 'Jul 2015 - Sep 2018',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'experience',
       },

];

    export const blogs = [
      {
        id: 1,
        category: 'Branding',
        date: '3rd March 2023',
        title: 'The Beginning of my Tech Journey',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      },
      {
        id: 2,
        category: 'UI UX Design',
        date: '5th June 2023', 
        title: 'Reflections on the 1st Term',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      },
      {
        id: 3,
        category: 'Development',
        date: '30th Dec 2023',
        title: 'Finishing my Diploma of IT',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      },
      {
        id: 4,
        category: 'Development',
        date: '3rd March 2024',
        title: 'Job Hunting',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      },
      {
        id: 5,
        category: 'Development',
        date: '17th July 2024',
        title: 'First Tech Internship',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      },
      {
        id: 6,
        category: 'Development',
        date: '17th July 2024',
        title: 'First Tech Internship',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      },

];