import { GitHub, Linkedin, Mail, Twitter } from 'react-feather';

export const navLinks = [
  {
    name: 'home',
    title: 'Home',
    href: '/',
  },
  {
    name: 'work',
    title: 'Work',
    href: '/work',
  },
  {
    name: 'projects',
    title: 'Projects',
    href: '/projects',
  },
];

export const socialLinks = [
  {
    name: 'github',
    title: 'Github',
    href: 'https://github.com/patelmilanun',
    Icon: GitHub,
  },
  {
    name: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/patelmilanun',
    Icon: Linkedin,
  },
  {
    name: 'twitter',
    title: 'Twitter',
    href: 'https://twitter.com/patelmilanun',
    Icon: Twitter,
  },
];

export const experience = [
  {
    startDate: 'Feb 2022',
    endDate: 'Present',
    companyName: 'Green Apex Technolabs LLP',
    companyWebsite: 'https://www.green-apex.com/',
    position: 'Software Engineer',
    descriptionPoints: [
      'Worked on the Demat module for IDFC bank, where I played a key role in writing and implementing test cases using jest. This resulted in a significant increase in code coverage to 97%, and my efforts helped the Demat module reach the 100 crore rupee mark.',
      'At a large expo with over 18,000 visitors and 160 exhibiting companies, I played a critical role in streamlining the process for over 10,000 users. My efforts ensured a seamless and efficient experience for all participants, resulting in the successful execution of the event.',
      'Developed a user-friendly dashboard and added audio manipulation capabilities to a podcast streaming app, providing over 100,000 listeners with the power to edit their recordings.',
      'Helped improve the user experience on a platform connecting individuals with shared interests through meaningful conversations by adding a responsive design, resulting in a seamless and satisfying experience for all participants.',
    ],
    tech: [
      'ReactJS',
      'Redux',
      'NextJS',
      'Typescript',
      'HTML/CSS',
      'Javascript',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    startDate: 'Nov 2020',
    endDate: 'Jan 2022',
    companyName: 'Pardy Panda Studios',
    companyWebsite: 'https://pardypanda.com/',
    position: 'Full Stack Web Developer',
    descriptionPoints: [
      'Developed a COVID patient portal for a municipality corporation, which streamlined the management of 150,000 patient records. This resulted in improved efficiency and better control over patient data.',
      'Optimized the data record export module, reducing the export time from over 3 minutes for 10,000 records to just 2 seconds for 150,000 records, achieved by optimizing the query and adding indexing to the database.',
      'Built a platform for students and tutors to connect, enhancing communication through the implementation of real-time messaging and communication impacting over 1,000 users.',
    ],
    tech: [
      'ReactJS',
      'Redux',
      'HTML/CSS',
      'Javascript',
      'Material UI',
      'NodeJs',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'RTC/RTM',
      'CI/CD',
    ],
  },
  {
    startDate: 'Aug 2019',
    endDate: 'Oct 2020',
    companyName: 'Maskoid Technologies PVT. LTD.',
    companyWebsite: 'https://maskoid.com/',
    position: 'Software Developer',
    descriptionPoints: [
      'Developed a global UI library that was integrated across all products, resulting in a seamless and consistent user experience across all applications.',
      'Developed a custom, fully functional, and highly customizable table using MUI, complete with features such as sorting, searching, and column selection. This reduced the time spent on creating tables for all of our products, leading to a more efficient development process.',
    ],
    tech: [
      'ReactJS',
      'Redux',
      'HTML/CSS',
      'Javascript',
      'Material UI',
      'NodeJs',
      'PostgreSQL',
      'MongoDB',
      'Nginx',
      'Figma',
    ],
  },
];

export const projects = [
  {
    title: 'YLanes',
    description:
      'YLanes is a platform that facilitates meaningful conversations among users in virtual rooms. Users can create and join rooms on various topics, with the option to pay for access. These rooms offer audio and video capabilities, as well as chat support. Users can provide feedback after participating in a room. Additionally, creators can restrict access to their rooms to individuals within their own country.',
    projectType: 'Client Project',
    screenshot: '/ylanes/scr3.png',
    detailPageLink: '/projects/ylanes',
  },
  {
    title: 'IDFC',
    description:
      "The project revolves around developing a comprehensive net banking portal exclusively for IDFC Bank, empowering users to conveniently manage their banking requirements through this platform. This net banking portal's functionality is self-evident, requiring no detailed explanation. It aims to provide a seamless and user-friendly banking experience for IDFC Bank customers, catering to their diverse financial needs.",
    projectType: 'Client Project',
    screenshot: '/idfc/scr4.png',
    detailPageLink: '/projects/idfc',
  },
  {
    title: 'Rubber Event',
    description:
      'This project centered around developing an event management system tailored for a particular event. The team received existing code and Figma designs as references. They made customizations to existing modules and introduced new ones, with the entire system built using Next.js. The primary purpose of this system is to enable event administrators to efficiently manage various aspects such as event information, security personnel, sponsors, attendees, and feedback.',
    projectType: 'Client Project',
    screenshot: '/rubber/scr6.jpg',
    detailPageLink: '/projects/rubber',
  },
  {
    title: 'Covid Tracker',
    description:
      'This project involved the development of a COVID patient management system for a municipal corporation. The application featured role-based login functionality and allowed for the transfer of patients between different levels of observation. Upper-level authorities could effectively manage lower-level personnel within the system.',
    projectType: 'Client Project',
    screenshot: '/covid/scr2.jpeg',
    detailPageLink: '/projects/covid',
  },
  {
    title: 'Chessbuzz',
    description:
      'This charity project includes an Android app connected to a custom backend via a REST API, allowing authorized users to manage chess-related articles. The backend, built with Node.js and MongoDB, acts as a mini Content Management System (CMS). An admin dashboard in React facilitates content management, while images are stored in Cloudinary, and access requires user authentication.',
    projectType: 'Client Project',
    screenshot: '/chessbuzz/scr3.jpg',
    detailPageLink: '/projects/chessbuzz',
  },
  {
    title: 'Virtual Village',
    description:
      'This project facilitated the connection between tutors and students, enabling tutors to schedule sessions and students to join by making payments. It offered different session types, including one-on-one and premium options, providing flexibility in the learning experience.',
    projectType: 'Client Project',
    screenshot: '/vv/scr3.png',
    detailPageLink: '/projects/vv',
  },
  {
    title: 'Hop CMS',
    description:
      'This project centered around the development of a custom Content Management System (CMS) tailored for existing users. This CMS served as a pivotal tool for users, empowering them to effortlessly create, organize, and modify content.',
    projectType: 'Client Project',
    screenshot: '/hopcms/scr1.png',
    detailPageLink: '/projects/hopcms',
  },
  {
    title: 'Unicorn Store',
    description:
      'The Unicorn Store is the user-facing part of the e-commerce website. It lets users browse products, filter by color and size, and explore categories. They can add items to their cart and use Stripe for purchases, enhancing their shopping experience.',
    projectType: 'Personal Project',
    screenshot: '/unicorn-store/scr1.png',
    detailPageLink: '/projects/unicorn-store',
  },
  {
    title: 'Unicorn Store Admin',
    description:
      'The Unicorn Store Admin facilitates comprehensive management of the e-commerce platform. It allows administrators to perform CRUD operations on categories, products, colors, and sizes. Additionally, it offers APIs for storefront integration and includes features like copying item IDs and adding multiple stores. User authentication is also included for security.',
    projectType: 'Personal Project',
    screenshot: '/unicorn-admin/scr1.png',
    detailPageLink: '/projects/unicorn-admin',
  },
  {
    title: 'Parse Dashboard',
    description:
      'Parse Dashboard is a standalone dashboard for managing your Parse Server apps. Parse Server is an open source backend that can be deployed to any infrastructure that can run Node.js. Parse Server works with the Express web application framework. It can be added to existing web applications, or run by itself.',
    projectType: 'Open Source Contribution',
    screenshot: '/parse/scr1.png',
    detailPageLink: '/projects/parse',
  },
];
