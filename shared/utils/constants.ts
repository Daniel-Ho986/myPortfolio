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
    name: 'WordPress',
    src: '/images/skills/wordpress.svg'
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
  name: 'David Jin',
  logo: '/images/logo.png',
  about: 'Senior Web Developer',
  socialMedia: [
    {
      link: 'mailto:enjoydhoney@gmail.com',
      image_file: '/images/icons/mail.svg',
      alt_text: 'mail'
    },
    {
      link: 'https://github.com/faievtsev',
      image_file: '/images/icons/github.svg',
      alt_text: 'GitHub'
    },
    {
      link: 'https://gitlab.com/enjoydeve',
      image_file: '/images/icons/gitlab.svg',
      alt_text: 'GitLab'
    },
    {
      link: 'live:.cid.5ab898b976e7bc2',
      image_file: '/images/icons/skype.svg',
      alt_text: 'Skype'
    },
    {
      link: 'discord:!enjoydev#5361',
      image_file: '/images/icons/discord.svg',
      alt_text: 'Discord'
    },
    {
      link: 'https://t.me/enjoydeve',
      image_file: '/images/icons/telegram.svg',
      alt_text: 'Telegram'
    }
  ],
  work: {
    company: 'RistrettoApps',
    designation: 'Laravel/Vue Developer',
    logo: 'https://owwlish.com/wp-content/uploads/2022/04/White-Logo.png'
  },
  resume: 'https://drive.google.com/file/d/1hsjSLfbtNSge0ALb30_8diz4C8e5pN8U/view?usp=share_link',
  calendyUrl: 'https://calendly.com/enjoydhoney'
};

const CompanyDetailsDefault: Company[] = [
  {
    name: 'Laravel/Vue Developer',
    logo_url: 'https://owwlish.com/wp-content/uploads/2022/04/White-Logo.png',
    featured: true,
    position: 'RistrettoApps (Owwlish)',
    startDate: '03/2022',
    endDate: '02/2023',
    responsibilities: [
      'Continually reinforce industry best practices',
      'Worked to assess competing websites in regards to content, look, and feel',
      'Worked with a proficient understanding of code conversion tools.'
    ]
  },
  {
    name: 'Python, Blockchain Developer',
    logo_url: 'https://axieinfinity.com/images/branding/axie-infinity-logo.png',
    featured: true,
    position: 'John Sacs',
    startDate: '05/2021',
    endDate: '08/2022',
    responsibilities: [
      'Analyzing NFT collections especially Axie Infinity.',
      'Auto Buy/Sell NFT asset using web3.py',
      'Helped to provide industry-leading solutions.'
    ]
  },
  {
    name: 'Frontend Developer',
    logo_url:
      'data:image/png;base64,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',
    featured: true,
    position: 'jwsoftware',
    startDate: '09/2021',
    endDate: '04/2022',
    responsibilities: [
      'Worked to assess competing websites in regards to content, look, and feel',
      'Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues',
      'Effectively translated client requirements into application designs and system requirements.'
    ]
  },
  {
    name: 'WordPress Developer',
    logo_url:
      'https://d1ta636jpe4mqt.cloudfront.net/wp-content/uploads/2019/12/cropped-ristrettoapps-logo-5-2.png',
    featured: true,
    position: 'RistrettoApps Co',
    startDate: '06/2020',
    endDate: '05/2021',
    responsibilities: [
      'Worked to meet client deadlines',
      'Effetively multitasked and worked well with internal and external teams.',
      'Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.'
    ]
  },
  {
    name: 'Frontend Developer',
    logo_url:
      'data:image/jpeg;base64,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',
    featured: true,
    position: 'Shoclef Corporation Limited',
    startDate: '7/2020',
    endDate: '04/2021',
    responsibilities: [
      'Worked to ensure a positive and hassle-free customer experience.',
      'Settled any customer disputes in a professional and pleasant manner.'
    ]
  }
];

const projectsDefault: Project[] = [
  {
    slug: 'laravel-vue-owwlish',
    tagline: 'Laravel Vue Owwlish',
    description: 'Laravel/Vue Developer at RistrettoApps (Owwlish)',
    img: 'https://owwlish.com/wp-content/uploads/2022/04/White-Logo.png',
    name: 'https://owwlish.com',
    tags: ['Laravel', 'VueJS'],
    github: '',
    category: ['Laravel', 'VueJS'],
    featured: true,
    url: 'https://owwlish.com/'
  },
  {
    slug: 'python-blockchain-john',
    tagline: 'Python Blockchain Web3 NFT',
    description: 'Python/Blockchain Developer at John Sacs',
    img: 'https://axieinfinity.com/images/branding/axie-infinity-logo.png',
    name: 'Python/Blockchain',
    tags: ['Python', 'Web3', 'NFT', 'Blockchain'],
    github: '',
    category: ['Python', 'Blockchain'],
    featured: true,
    url: ''
  },
  {
    slug: 'frontend-developer-jw',
    tagline: 'React Node Mongo',
    description: 'Frontend Developer at jwSoftware',
    img:
      'data:image/png;base64,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',
    name: 'Frontend Developer',
    tags: ['ReactJS', 'NodeJS', 'MongoDB'],
    github: '',
    category: ['ReactJS'],
    featured: true,
    url: 'https://jwsoftware.com'
  },
  {
    slug: 'wordpress-ristrettoapps',
    tagline: 'WordPress Theme Plugin Ristrettoapps',
    description: 'WordPress Developer at RistrettoApps',
    img:
      'https://d1ta636jpe4mqt.cloudfront.net/wp-content/uploads/2019/12/cropped-ristrettoapps-logo-5-2.png',
    name: 'https://ristrettoapps.com',
    tags: ['WordPress', 'ReactJS', 'PHP', 'Javascript'],
    github: '',
    category: ['WordPress', 'ReactJS'],
    featured: true,
    url: 'https://ristrettoapps.com/'
  },
  {
    slug: 'frontend-shoclef',
    tagline: 'React WordPress Python Django MongoDB',
    description: 'Frontend Developer at Shoclef Corporation',
    img:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABBgACBAUDB//EADUQAAEDAwIEBAQEBgMAAAAAAAEAAgMEBREhMQYSQVETImGRFHGB8FKhwdEjMlNzseEVNEL/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQIEBQYDB//EADERAAIBAwIEAwgCAgMAAAAAAAABAgMEEQUhEjFBURMigWFxkaGxwdHwMuEGQhQVI//aAAwDAQACEQMRAD8AYbxdai5VUj3yO8HJEcYPlA6ad1u0aMacVtufOr+/q3VRtvy9F0wYQvczywQIsgQQgRZAgIAqUDAUDRU7IJAa9zHBzHFrhsQcFLGVhkoycXlDTaOKzT0YiruaWRpw1/Ut9e/VZ9ay4pZhsdPY674dHhr7tfT2iotE5cIQIuECOhbbVVXA5iZiP8btvp3VatdQpbc2atjpFxd+ZbR7v7dzut4coqVgdX1TWf3Hhg9v9qk7ytN4gjejoVhQWa8s+94X76k+G4bZ5TVwH5OcfzS4rt9yXg6LHby/FhFpsVUeWnrYQ87BsuD7Eo8a5hz+gf8AX6RX2g1n2SMdw4XqYGl9M/xWj/ydD77L2p36e00Urr/G5RXFbyz7H+Rfka5jix7S1wOCCNlfjJSWUc1UpTpScZrDRQqREqUDAgABAywQI6/DtqNzqvOD4EervX0VO7uPDXDHmzb0bTVdT8SovKvn7Dp37iEURNBaOVhZ5ZJgNj2b+6r29rxeeoaep6w6T8C22xzf2QpySvleXyvc953c45JWkkksI5ac5TfFJ5ZttVpqro53w4aGM/me44AXjWrxpcy7Y6dWvG+DZLmzpDh2lc7wm3mjdPt4fMN+26r/APLnz4Hg0lo1DPCq64u36wMq7tw1UCKUl8H9Nxyxw9D0+9E+GjcrK2ZHxL3SpqMt49unp2Otc6OmvttFxt4xKBqOuerSq1Oc7apwy5fu5q3VvR1W28Wl/Lp+GJp030Wunk4hpp4YEwAgYEAXaC44GpUJzUFlntQt53E+CC3HRvPZOE3SRAioe3GR0c7c/QZ9lkxar18vkdpOMrDTuGH8kvm+b9PsImVrnEMOUCNFJI0SCKeWVlLI4CYRndvy6qE45WUt+hYt6ijJRnJqL547HXE3C8sgpfhqiFpPKKhx2Pc67fRU3G6j5s+huxq6TUfhcDS7/fmaaupbb4KmzXt7pmsj8SkmAy70B++/TCjCLm1Vp7dz1rVY0ITtLp8SxmL+hn4KuBguRpXH+DUjlx2cNj+n1Xre004cXYqaDcSp3DpdJfb9wefElA+luUzmMPhP8+g27/fqizrJwUHzI63p84VnWgvK9/cccq8YAEDwAFAG+0mP4tokI12yql1FtJmxo9WEJyjLm8Y9Og3Xivg+BAIIiY055tOY9AFQo05KWDpL64p+Dxt7I+frYOGwduycPzXECR5LIjtjcqlXu1B8MeZvadojrxVWs8RfJdX+DqutnDdO4x1FbCXjQjxCcey8FUupbr6Gk7XSKb4ZYz73+Qy8K224QGS11bSRsWP5x9UldVYPFRBLR7KvDNvLHueUJ1xpKmgq3QVYcJG9TrkdCPRaNOcZxzE5y5oVaNRwq81+7G7hqRjLjG5x1aQ5vzC8bqOUi9pM1Ccu+3yHG81NNM18paWsaw85eqFGElLBv3tWnKlx9EIi2zggZQAEDCCgRaQukA5nE42ydksJciTnJ83krTs56mON2zngH3UKjxBtHvbQVStCL5NpfMeOKZH0HDTG02W+K9rHub0bqT/jCybOKlV3Oy1qrOlaeTbLx6fux8+WwcUbrPXy264RTxPLRzAPGdC3rleVemqkGi5YXMrevGSe3X3DFxvU264UFPPTVUElSx+C1kgJ5SDnQeoCpWcZwm1JbG5rdShVpRlCSbT6PoxMBLHZGQQtE5pPqj2fVzygCaaSRo2DnEojGK5IlUqVJrEnkLX+ykV3E9MpkQZQMIQIKBE6gg4I1B7JNZWCUZOLyh8tFzor7bjb67l8Utw6NxxzerfvRY9WjOhLijyO4tL631Gj4dT+XVfdfuxxrlwVUROLqGVsjOjX6EfVe9O/X+6M+4/x+S3oy9H+RerbbWUP/ap3sH4sZHuFbhWp1P4sx7iwuLfepHC79DC4dRuvUqomebfdAciuyBlmuwgTR6hxxoUyGC6ZEIKBBygQUAQj3GxSxkkm4vKOhScSXehw1tUZGDZsw5h77/mq07WlLoatvq93S2Usr27/ANjLZ+K6a6SNpLjTsikk8rXDVjj212VKtaOmuKLyjfstYhcy8KosN/BnF4ysUdrkZVUgxTTO5eX8Dt9PQ6qxaXDn5ZczM1jT427VWntF9OzFgjqFdMNE3SGDZAwgpiwaFI8sEQIKBGu1mL4+EVABiLsO5hpqvG4UvDfDzL2nOkrqHipOPtGLi2yMpqWGroIQIm5EwYNh0Py3VKzrttxm/cbmt6dFU1UowSS54QpEBwWmcsti1BBLLWwxwtJdzg6dNd141pKMG2XrGlOtXjGC3yh346mazhyGKQ/xJJW8o+QJJ++6zLJN1MnU65OKtuF82z56D0WsccyEJggbpABMZoBUjxCgCIDAcoEMtl4tlooRT10RqIAMBwPnaP1VCvZKT4obHQ2OuTpRVOusrv1/s2yV3CVSed5ETjqQYXfoF4KndRWF9TQdzpNV8Uks+5/gH/P2C2sJoIXzydA1nIM+pP7IVrWqPzsHqtjbxaoR+Cx8RTvV1qbtVmeqI00Yxv8AKwdgr9KjGlHCOfurupdT45+i7HPyvQqlge6YmgEdQgaJlLIYNL2uje5jhhzTgjsVJPO6ISi4tplUyIcoAOUCIgDze3qEsEkzzzhImHdAFCMIJASAsCgRogoqioYXwwue0HGQOqjKcYvdntTt6tRZgsjfxvaKWnPx0IcySV3naD5Se+O6p2VaUvIzZ1qypQ/9o7N/AT1onNkQBEARAEQB5vCTJplWpDZDsgEUSJGighbUVcULyQ17sEjdQqS4Yto9remqlVQfU+u2m201romU1KzDBqS7UuPcnusWpUlUlxSO5tranb01CC2P/9k=',
    name: 'Shoclef',
    tags: ['WordPress', 'ReactJS', 'Python', 'MongoDB'],
    github: '',
    category: ['WordPress', 'ReactJS', 'Python'],
    featured: true,
    url: ''
  },
  {
    slug: 'frontend-kitten',
    tagline: 'VueJS MongoDB Bootstrap',
    description: 'Frontend Developer at Shoclef Corporation',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCTr-9b4rDxRwaF4MZAThbXbva2T9oL6U_yknxCRwTob_aQa5rWP8-2cvnYXQeCTq-HI&usqp=CAU',
    name: "Kitten D'Amour",
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    github: '',
    category: ['ReactJS'],
    featured: true,
    url: 'https://kittendamour.com/'
  }
];
export { navlinks, technologies, personalDetailsDefault, CompanyDetailsDefault, projectsDefault };
