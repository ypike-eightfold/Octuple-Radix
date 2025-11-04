import { 
  JobPosting, 
  Candidate, 
  WorkExperience, 
  TimelineEvent, 
  Comment, 
  PipelineMetrics, 
  DailyTrend, 
  PipelineCandidate,
  DashboardMetrics 
} from './types';

// Dashboard Metrics
export const dashboardMetrics: DashboardMetrics = {
  openPositions: 10,
  activeJobPosts: 7,
  pendingApproval: 2,
  expiredPosts: 1
};

// Job Postings Mock Data
export const jobPostings: JobPosting[] = [
  {
    id: 'job-1',
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'New York, USA',
    type: 'Full-time',
    status: 'Open',
    applicants: {
      applied: 40,
      underReview: 35,
      interviewed: 5,
      offered: 5,
      hired: 4
    },
    postedDate: '2024-09-03',
    description: 'We are looking for a skilled Software Engineer to join our team.',
    requirements: ['React', 'TypeScript', 'Node.js', '3+ years experience'],
    salaryRange: {
      min: 80000,
      max: 120000,
      currency: 'USD'
    }
  },
  {
    id: 'job-2', 
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    status: 'Open',
    applicants: {
      applied: 50,
      underReview: 20,
      interviewed: 20,
      offered: 15,
      hired: 10
    },
    postedDate: '2024-09-02',
    description: 'Lead our marketing initiatives and drive brand growth.',
    requirements: ['5+ years marketing experience', 'Digital marketing', 'Analytics'],
    salaryRange: {
      min: 70000,
      max: 100000,
      currency: 'USD'
    }
  },
  {
    id: 'job-3',
    title: 'HR Coordinator', 
    department: 'Human Resources',
    location: 'San Francisco, USA',
    type: 'Full-time',
    status: 'Pending Approval',
    applicants: {
      applied: 0,
      underReview: 0,
      interviewed: 0,
      offered: 0,
      hired: 0
    },
    postedDate: '2024-09-05',
    description: 'Support HR operations and employee engagement initiatives.',
    requirements: ['HR experience', 'Communication skills', 'HRIS knowledge']
  },
  {
    id: 'job-4',
    title: 'Product Designer',
    department: 'Design',
    location: 'Los Angeles, USA', 
    type: 'Full-time',
    status: 'Pending Approval',
    applicants: {
      applied: 0,
      underReview: 0,
      interviewed: 0,
      offered: 0,
      hired: 0
    },
    postedDate: '2024-09-05',
    description: 'Create beautiful and functional user experiences.',
    requirements: ['Figma', 'Design Systems', 'User Research', 'Prototyping']
  },
  {
    id: 'job-5',
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Chicago, USA',
    type: 'Full-time', 
    status: 'Expired',
    applicants: {
      applied: 60,
      underReview: 50,
      interviewed: 40,
      offered: 10,
      hired: 9
    },
    postedDate: '2024-08-01',
    expiryDate: '2024-09-01',
    description: 'Drive sales growth and manage client relationships.',
    requirements: ['B2B sales', 'CRM experience', 'Communication skills']
  }
];

// Work Experience Mock Data
const workExperiences: WorkExperience[] = [
  {
    id: 'exp-1',
    title: 'Senior Software Engineer',
    company: 'GlobalTech Solutions',
    location: 'Remote',
    type: 'Full-time',
    startDate: 'Jan 2021',
    endDate: 'Present',
    current: true,
    description: 'Lead development of scalable web applications using React and Node.js'
  },
  {
    id: 'exp-2', 
    title: 'Software Engineer',
    company: 'GlobalTech Solutions',
    location: 'On-site',
    type: 'Full-time',
    startDate: 'Jan 2019',
    endDate: 'Jan 2021',
    current: false,
    description: 'Developed frontend applications and collaborated with cross-functional teams'
  },
  {
    id: 'exp-3',
    title: 'Junior Software Engineer', 
    company: 'GlobalTech Solutions',
    location: 'On-site',
    type: 'Full-time',
    startDate: 'Jan 2018',
    endDate: 'Jan 2019',
    current: false,
    description: 'Built and maintained web applications using modern frameworks'
  }
];

// Timeline Events
const timelineEvents: TimelineEvent[] = [
  {
    id: 'timeline-1',
    stage: 'Applied',
    date: '2024-09-03',
    description: 'Application submitted',
    status: 'completed'
  },
  {
    id: 'timeline-2',
    stage: 'Under Review', 
    date: '2024-09-08',
    description: 'Resume screening completed',
    status: 'completed'
  },
  {
    id: 'timeline-3',
    stage: 'Interview',
    date: '2024-09-12', 
    description: 'Technical interview scheduled',
    status: 'current'
  },
  {
    id: 'timeline-4',
    stage: 'Offer',
    date: '2024-09-14',
    status: 'upcoming'
  },
  {
    id: 'timeline-5',
    stage: 'Hired',
    date: '2024-09-18',
    status: 'upcoming'
  }
];

// Comments Mock Data
const comments: Comment[] = [
  {
    id: 'comment-1',
    author: {
      name: 'Klara Weaver',
      role: 'Technical Lead',
      avatar: '/avatars/klara.jpg'
    },
    content: 'Technical Skill Assessment: The candidate showed strong skills in algorithms and data structures but struggled with some system design concepts. Further discussion could clarify their knowledge',
    timestamp: '10:50 AM',
    type: 'evaluation'
  },
  {
    id: 'comment-2',
    author: {
      name: 'Jennifer Martinez', 
      role: 'HR Manager',
      avatar: '/avatars/jennifer.jpg'
    },
    content: 'Overall impression: The candidate has a solid foundation in software engineering and a willingness to learn. They may need training on our tech stack, but I recommend a second interview to assess their potential',
    timestamp: '10:50 AM', 
    type: 'comment'
  }
];

// Sample Candidate
export const sampleCandidate: Candidate = {
  id: 'candidate-1',
  name: 'Joshua Taylor',
  email: 'joshua123@gmail.com',
  phone: '(919) 833-3830',
  location: 'New York, USA',
  role: 'Software Engineer',
  appliedDate: '2024-09-03',
  currentStage: 'Interview',
  jobId: 'job-1',
  workExperience: workExperiences,
  coverLetter: 'Dear Hiring Manager,\n\nI am writing to express my interest in the Software Engineer position at TechSolutions Inc., as advertised on LinkedIn. With a background in software development, a passion for problem-solving...',
  resumeUrl: '/resumes/joshua-taylor-resume.pdf',
  overallRating: 4.0,
  evaluations: {
    technicalSkills: 3,
    problemSolving: 5,
    communication: 4,
    culturalFit: 4,
    adaptability: 4
  },
  timeline: timelineEvents,
  comments: comments
};

// Pipeline Metrics for Reports
export const pipelineMetrics: PipelineMetrics = {
  jobId: 'job-4',
  jobTitle: 'Product Designer',
  totalCandidates: 300,
  stages: {
    applied: 350,
    underReview: 300,
    interviewed: 120,
    offered: 80,
    hired: 20
  }
};

// Daily Trends for Chart
export const dailyTrends: DailyTrend[] = [
  { date: 'Oct 01', applications: 20 },
  { date: 'Oct 02', applications: 22 },
  { date: 'Oct 03', applications: 18 },
  { date: 'Oct 04', applications: 7 },
  { date: 'Oct 05', applications: 3 },
  { date: 'Oct 06', applications: 38 },
  { date: 'Oct 07', applications: 42 }
];

// Pipeline Table Data
export const pipelineCandidates: PipelineCandidate[] = [
  {
    id: 'pc-1',
    name: 'Michael Brown',
    applied: '2024-09-03',
    underReview: '--',
    interviewed: '--', 
    offered: '--',
    hired: '--',
    currentStage: 'Applied'
  },
  {
    id: 'pc-2',
    name: 'Emily Johnson',
    applied: '2024-09-02',
    underReview: '2024-09-08',
    interviewed: '--',
    offered: '--', 
    hired: '--',
    currentStage: 'Under Review'
  },
  {
    id: 'pc-3', 
    name: 'John Smith',
    applied: '2024-09-01',
    underReview: '2024-09-05',
    interviewed: '2024-09-12',
    offered: '--',
    hired: '--',
    currentStage: 'Interviewed'
  },
  {
    id: 'pc-4',
    name: 'Sarah Davis',
    applied: '2024-09-05',
    underReview: '2024-09-06', 
    interviewed: '2024-09-10',
    offered: '2024-09-14',
    hired: '--',
    currentStage: 'Offered'
  },
  {
    id: 'pc-5',
    name: 'Laura Rodriguez',
    applied: '2024-09-05',
    underReview: '2024-09-06',
    interviewed: '2024-09-10',
    offered: '2024-09-14',
    hired: '2024-09-18',
    currentStage: 'Hired'
  }
];

// Job Position Options for Filters
export const jobPositionOptions = [
  { value: 'all', label: 'All Positions' },
  { value: 'product-designer', label: 'Product Designer' },
  { value: 'software-engineer', label: 'Software Engineer' },
  { value: 'marketing-manager', label: 'Marketing Manager' },
  { value: 'hr-coordinator', label: 'HR Coordinator' },
  { value: 'sales-executive', label: 'Sales Executive' }
];
