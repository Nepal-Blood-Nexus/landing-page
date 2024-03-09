import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/ramesh.jpeg',
    name: 'Ramesh Saud',
    category: 'Supervisor',
    description:
      'Ramesh Saud leads our team, ensuring project success through expert guidance and oversight. With extensive experience in project management, they keep us on track, meet deadlines, and maintain quality. Their strategic planning and resource allocation align projects with client objectives while fostering a supportive work environment.',    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/sudeepm.jpeg',
    name: 'Suddep K Mishra',
    category: 'Mobile App & Full Stack Developer',
    description:
      'Sudeep Mishra is our expert in full-stack and mobile app development. Proficient in multiple languages and frameworks, they architect, develop, and deploy robust applications. From backend infrastructure to frontend user, He brings creativity and technical skill, ensuring our solutions are functional and user-friendly across platforms.',
     company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/riju.png',
    name: 'Riju Bohaju',
    category: 'UI/UX Design & Front End Developer',
    description:
      'With Riju Bohaju, at the helm of UI/UX design and frontend development, our team is poised to deliver exceptional digital experiences that captivate users. Their blend of creativity, technical expertise, and collaborative spirit ensures that our projects not only meet but exceed client expectations, setting new standards for innovation and excellence in the digital landscape.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  // {
  //   id: 4,
  //   photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
  //   name: 'Rizki Known',
  //   category: 'Fullstack Development',
  //   description:
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   company: {
  //     name: 'Microsoft',
  //     logo: '/images/companies/microsoft.png',
  //   },
  // },
]
