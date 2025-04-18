
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'mobile' | 'data' | 'devops' | 'other';
}

export interface Hackathon {
  id: string;
  name: string;
  date: string;
  location: string;
  isOnline: boolean;
  url?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  title: string;
  location: string;
  isRemote: boolean;
  bio: string;
  skills: Skill[];
  hackathonsInterested: Hackathon[];
  email: string;
}

// Mock data for skills
export const skillsData: Skill[] = [
  { id: '1', name: 'React', category: 'frontend' },
  { id: '2', name: 'Angular', category: 'frontend' },
  { id: '3', name: 'Vue', category: 'frontend' },
  { id: '4', name: 'TypeScript', category: 'frontend' },
  { id: '5', name: 'Node.js', category: 'backend' },
  { id: '6', name: 'Python', category: 'backend' },
  { id: '7', name: 'Django', category: 'backend' },
  { id: '8', name: 'Express', category: 'backend' },
  { id: '9', name: 'MongoDB', category: 'backend' },
  { id: '10', name: 'PostgreSQL', category: 'backend' },
  { id: '11', name: 'UI/UX Design', category: 'design' },
  { id: '12', name: 'Figma', category: 'design' },
  { id: '13', name: 'Adobe XD', category: 'design' },
  { id: '14', name: 'React Native', category: 'mobile' },
  { id: '15', name: 'Flutter', category: 'mobile' },
  { id: '16', name: 'Swift', category: 'mobile' },
  { id: '17', name: 'Kotlin', category: 'mobile' },
  { id: '18', name: 'TensorFlow', category: 'data' },
  { id: '19', name: 'PyTorch', category: 'data' },
  { id: '20', name: 'Docker', category: 'devops' },
  { id: '21', name: 'Kubernetes', category: 'devops' },
  { id: '22', name: 'AWS', category: 'devops' },
  { id: '23', name: 'Product Management', category: 'other' },
];

// Mock data for hackathons
export const hackathonsData: Hackathon[] = [
  { 
    id: '1', 
    name: 'Global Hackathon 2025', 
    date: '2025-01-15', 
    location: 'Online', 
    isOnline: true,
    url: 'https://globalhackathon.com' 
  },
  { 
    id: '2', 
    name: 'TechCrunch Disrupt', 
    date: '2025-03-20', 
    location: 'San Francisco, CA', 
    isOnline: false,
    url: 'https://techcrunch.com/events/disrupt-2025' 
  },
  { 
    id: '3', 
    name: 'AI for Good Hackathon', 
    date: '2025-02-10', 
    location: 'Online', 
    isOnline: true,
    url: 'https://aiforgood.com' 
  },
  { 
    id: '4', 
    name: 'Web3 Summit Hackathon', 
    date: '2025-04-05', 
    location: 'Berlin, Germany', 
    isOnline: false,
    url: 'https://web3summit.com' 
  },
  { 
    id: '5', 
    name: 'HackTokyo', 
    date: '2025-05-12', 
    location: 'Tokyo, Japan', 
    isOnline: false,
    url: 'https://hacktokyo.com' 
  },
  { 
    id: '6', 
    name: 'Climate Tech Hackathon', 
    date: '2025-06-18', 
    location: 'Online', 
    isOnline: true,
    url: 'https://climatetech.org' 
  },
];

// Mock data for user profiles
export const usersData: UserProfile[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    title: 'Frontend Developer',
    location: 'San Francisco, CA',
    isRemote: true,
    bio: 'Passionate about creating beautiful and accessible user interfaces. Looking for hackathon partners who are interested in solving real-world problems.',
    skills: [skillsData[0], skillsData[3], skillsData[11]],
    hackathonsInterested: [hackathonsData[0], hackathonsData[2]],
    email: 'alex@example.com',
  },
  {
    id: '2',
    name: 'Maya Patel',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80',
    title: 'Full Stack Developer',
    location: 'New York, NY',
    isRemote: false,
    bio: 'Full stack dev with a passion for blockchain and decentralized applications. Always looking to collaborate on innovative projects.',
    skills: [skillsData[0], skillsData[4], skillsData[9]],
    hackathonsInterested: [hackathonsData[3], hackathonsData[0]],
    email: 'maya@example.com',
  },
  {
    id: '3',
    name: 'Carlos Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    title: 'UI/UX Designer',
    location: 'Berlin, Germany',
    isRemote: true,
    bio: 'Designer with 5 years of experience. Specialized in creating intuitive and engaging user experiences. Looking to join a team for the next big hackathon!',
    skills: [skillsData[10], skillsData[11], skillsData[12]],
    hackathonsInterested: [hackathonsData[3], hackathonsData[5]],
    email: 'carlos@example.com',
  },
  {
    id: '4',
    name: 'Aisha Khan',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    title: 'Backend Developer',
    location: 'Toronto, Canada',
    isRemote: true,
    bio: 'Backend engineer specializing in scalable architectures and database optimization. Excited about AI and machine learning projects.',
    skills: [skillsData[5], skillsData[8], skillsData[9]],
    hackathonsInterested: [hackathonsData[2], hackathonsData[0]],
    email: 'aisha@example.com',
  },
  {
    id: '5',
    name: 'Jamal Williams',
    avatar: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    title: 'Mobile Developer',
    location: 'London, UK',
    isRemote: false,
    bio: 'Experienced mobile developer with a track record of successful app launches. Looking for design and backend talent to collaborate with.',
    skills: [skillsData[14], skillsData[15], skillsData[3]],
    hackathonsInterested: [hackathonsData[4], hackathonsData[3]],
    email: 'jamal@example.com',
  },
  {
    id: '6',
    name: 'Sophie Chen',
    avatar: 'https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80',
    title: 'Data Scientist',
    location: 'Singapore',
    isRemote: true,
    bio: 'Data scientist passionate about using AI to solve environmental challenges. Looking to join climate tech hackathons.',
    skills: [skillsData[5], skillsData[18], skillsData[19]],
    hackathonsInterested: [hackathonsData[5], hackathonsData[0]],
    email: 'sophie@example.com',
  },
  {
    id: '7',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    title: 'DevOps Engineer',
    location: 'Seoul, South Korea',
    isRemote: true,
    bio: 'DevOps engineer with a knack for optimizing development workflows. Interested in hackathons focused on developer tools and infrastructure.',
    skills: [skillsData[20], skillsData[21], skillsData[22]],
    hackathonsInterested: [hackathonsData[0], hackathonsData[3]],
    email: 'david@example.com',
  },
  {
    id: '8',
    name: 'Elena Martinez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    title: 'Product Manager',
    location: 'Barcelona, Spain',
    isRemote: false,
    bio: 'Product manager with a technical background. Great at organizing teams and keeping projects on track during intense hackathon sprints.',
    skills: [skillsData[23], skillsData[0], skillsData[10]],
    hackathonsInterested: [hackathonsData[1], hackathonsData[3]],
    email: 'elena@example.com',
  },
];
