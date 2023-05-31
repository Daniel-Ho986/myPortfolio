import { Company, PersonalDetails, Project } from './types';

const navlinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Explore',
    href: '/#skills'
  },
  {
    title: 'Work',
    href: '/work'
  },
  {
    title: 'Projects',
    href: '/projects'
  },
  {
    title: 'Contact',
    href: '/connect'
  }
];

const technologies = [
  {
    name: 'ReactJS',
    src: '/images/skills/react.svg'
  },
  {
    name: 'NextJs',
    src: '/images/skills/nextjs.svg'
  },
  {
    name: 'NodeJS',
    src: '/images/skills/node.svg'
  },
  {
    name: 'Javascript',
    src: '/images/skills/js.svg'
  },
  {
    name: 'MongoDB',
    src: '/images/skills/mongodb.svg'
  },
  {
    name: 'VueJS',
    src: '/images/skills/vuejs.svg'
  },
  {
    name: 'Python',
    src: '/images/skills/python.png'
  },
  {
    name: 'Laravel',
    src: '/images/skills/laravel.svg'
  },
  {
    name: 'ExpressJS',
    src: '/images/skills/express.svg'
  },
  {
    name: 'Git',
    src: '/images/skills/git.svg'
  },
  {
    name: 'NFT',
    src: '/images/skills/NFT.svg'
  },
  {
    name: 'Blockchain',
    src: '/images/skills/blockchain.png'
  },
  {
    name: 'Web3',
    src: '/images/skills/Web3.svg'
  }
];

const personalDetailsDefault: PersonalDetails = {
  profile_img: '/images/me.png',
  name: 'Daniel Ho',
  logo: '/images/logo.png',
  about: 'Software Engineer',
  socialMedia: [
    {
      link: 'mailto:kctemis23@gmail.com',
      image_file: '/images/icons/mail.svg',
      alt_text: 'mail'
    },
    {
      link: 'https://github.com/Daniel-Ho986',
      image_file: '/images/icons/github.svg',
      alt_text: 'GitHub'
    },
    {
      link: 'discord:KC23X#3798',
      image_file: '/images/icons/discord.svg',
      alt_text: 'Discord'
    }
  ],
  work: {
    company: 'Dante AI',
    designation: 'Software Engineer',
    logo: 'https://www.dante-ai.com/images/social-share.png'
  },
  resume: 'https://drive.google.com/file/d/1I3HrWqUCio88KRts27pI7ZEvZJQvxDFo/view?usp=drive_link',
  calendyUrl: 'https://calendly.com/kctemis23'
};

const CompanyDetailsDefault: Company[] = [
  {
    name: 'Front End Developer',
    logo_url: 'https://chat.dante-ai.com/images/dante-light.png',
    featured: true,
    position: 'Dante AI',
    startDate: '04/2023',
    endDate: '05/2023',
    responsibilities: [
      'As a developer, I have gained significant experience working on the Dante platform, Chat AI platform.',
      'I have utilized various technologies, including Next.js, TypeScript and Tailwind CSS.',
      'Through my experience with Dante AI, working with Next.js, TypeScript, Tailwind CSS, and Docker, I have gained a comprehensive understanding of building modern and scalable chat AI platforms. I have successfully developed user-friendly interfaces, optimized performance, and ensured reliable deployment using these technologies.'
    ]
  },
  {
    name: 'Full Stack Developer',
    logo_url: 'https://www.thecoinrepublic.com/wp-content/uploads/2022/04/DEUS-1140x734.png',
    featured: true,
    position: 'Deus Finance',
    startDate: '03/2023',
    endDate: '12/2022',
    responsibilities: [
      'Developed web applications using React, Next.js, TailwindCSS, TypeScript, Node, Express, Sequelize, PostgreSQL, and Git.',
      'Collaborated with 10 other developers on group projects and established a project workflow using GitHub',
      'Through my experience with Deus Finance platform, working with Next.js, TypeScript, Tailwind CSS, I have gained a comprehensive understanding of building modern and scalable finance platforms. I have successfully developed user-friendly interfaces, optimized performance, and ensured reliable deployment using these technologies.'
    ]
  },
  {
    name: 'Vue/Laravel Developer',
    logo_url: 'https://www.modelmanagement.com/new-static/images/logo/og_logo.png',
    featured: true,
    position: 'ModelManagement.com',
    startDate: '02/2022',
    endDate: '11/2022',
    responsibilities: [
      'As a developer, I have gained valuable experience working on the ModelManagement.com platform using a combination of technologies such as Vue.js, TypeScript, Laravel, and Docker.',
      'Overall, my experience with ModelManagement.com using Vue.js, TypeScript, Laravel, and Docker has provided me with a comprehensive understanding of building modern web applications, managing front-end and back-end components, and ensuring efficient deployment and scalability.',
      'I am confident that my experience with these technologies, combined with my problem-solving skills and dedication to delivering high-quality software, make me a valuable asset in developing and maintaining projects like ModelManagement.com.'
    ]
  },
  {
    name: 'Front End Developer',
    logo_url:
      'https://s3.cryptwerk.com/companies/sokkerpro-com_6ebaf04b053f41c539f7bde512958859.jpg',
    featured: true,
    position: 'Sokkerpro.com',
    startDate: '09/2021',
    endDate: '03/2022',
    responsibilities: [
      'As a developer, I have gained significant experience working on the SokkerPro.com platform, a sports betting platform. I have utilized various technologies, including Next.js, TypeScript, Tailwind CSS, and Docker.',
      'Through my experience with SokkerPro.com, working with Next.js, TypeScript, Tailwind CSS, and Docker, I have gained a comprehensive understanding of building modern and scalable sports betting platforms. I have successfully developed user-friendly interfaces, optimized performance, and ensured reliable deployment using these technologies.',
      'I am confident that my experience, combined with my problem-solving skills and dedication to delivering high-quality software, make me well-suited to contribute effectively to projects similar to SokkerPro.com.'
    ]
  },

  {
    name: 'Software Engineer Intern',
    logo_url:
      'https://theatrium.ca/wp-content/uploads/2020/10/Atrium-Logo-2014_home-furnishing-centre_512px-x-512px-whitewood-02.png',
    featured: true,
    position: 'Atriume',
    startDate: '06/2021',
    endDate: '08/2021',
    responsibilities: [
      'Streamlined automatic testing for 130+ new integration tests using Cypress',
      'Used Google Analytics and Google Tag Manager to understand usage activity/data and know where they are accessing it',
      'Helped to provide industry-leading solutions.'
    ]
  }
];

const projectsDefault: Project[] = [
  {
    slug: 'laravel-vue-modelmanagement',
    tagline: 'Laravel Vue Modelmanagement',
    description: 'Laravel/Vue Developer at ModelManagement.com',
    img: 'https://www.modelmanagement.com/new-static/images/logo/og_logo.png',
    name: 'modelmanagement.com',
    tags: ['Laravel', 'VueJS'],
    github: '',
    category: ['Laravel', 'VueJS', 'TypeScript'],
    featured: true,
    url: 'modelmanagement.com'
  },
  {
    slug: 'python-blockchain-Deus',
    tagline: 'Python Blockchain Web3 NFT',
    description: 'Python/Blockchain Developer at Deus',
    img: 'https://www.thecoinrepublic.com/wp-content/uploads/2022/04/DEUS-1140x734.png',
    name: 'Python/Blockchain',
    tags: ['Python', 'Web3', 'NFT', 'Blockchain', 'ReactJS'],
    github: '',
    category: ['Python', 'Blockchain'],
    featured: true,
    url: 'https://deus.finance'
  },
  {
    slug: 'frontend-developer-sokkerpro',
    tagline: 'Next TypeScript TailwindCSS Node Mongo',
    description: 'Frontend Developer at SokkerPro',
    img: 'https://s3.cryptwerk.com/companies/sokkerpro-com_6ebaf04b053f41c539f7bde512958859.jpg',
    name: 'Frontend Developer',
    tags: ['ReactJS', 'NodeJS', 'MongoDB'],
    github: '',
    category: ['ReactJS', 'NextJS', 'Blockchain', 'TypeScript'],
    featured: true,
    url: 'https://sokkerpro.com/'
  },
  {
    slug: 'NextJS-DanteAI',
    tagline: 'NextJS, TailwindCSS, Node',
    description: 'Next.js Developer at Dante AI',
    img: 'https://www.dante-ai.com/images/social-share.png',
    name: 'https://chat.dante-ai.com/',
    tags: ['NextJS', 'ReactJS', 'TailwindCSS', 'Javascript'],
    github: '',
    category: ['NextJS', 'ReactJS'],
    featured: true,
    url: 'https://chat.dante-ai.com//'
  },
  {
    slug: 'frontend-bitcash',
    tagline: 'React TypeScript Python Django MongoDB',
    description: 'Frontend Developer at BitCash',
    img:
      'https://uploads.turbologo.com/uploads/design/hq_preview_image/5215821/draw_svg20210705-29907-1rxdbou.svg.png',
    name: 'BitCash',
    tags: ['TypeScript', 'ReactJS', 'Python', 'MongoDB'],
    github: '',
    category: ['TypeScript', 'ReactJS', 'Python', 'Blockchain'],
    featured: true,
    url: 'https://bitcash.org/'
  },
  {
    slug: 'frontend-hashgreed',
    tagline: 'React MongoDB Bootstrap',
    description: 'Frontend Developer at HashGreed',
    img: 'https://pbs.twimg.com/profile_images/1346419723991449600/YtxRvkfy_400x400.jpg',
    name: 'HashGreed',
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'TypeScript'],
    github: '',
    category: ['ReactJS', 'Blockchain'],
    featured: true,
    url: 'https://hashgreed.com'
  }
];
export { navlinks, technologies, personalDetailsDefault, CompanyDetailsDefault, projectsDefault };
