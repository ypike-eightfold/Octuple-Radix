// Data types for the HR/Recruitment application

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Intern';
  status: 'Open' | 'Pending Approval' | 'Expired' | 'Closed';
  applicants: {
    applied: number;
    underReview: number;
    interviewed: number;
    offered: number;
    hired: number;
  };
  postedDate: string;
  expiryDate?: string;
  description: string;
  requirements: string[];
  salaryRange?: {
    min: number;
    max: number;
    currency: string;
  };
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  avatar?: string;
  
  // Application info
  appliedDate: string;
  currentStage: 'Applied' | 'Under Review' | 'Interview' | 'Offer' | 'Hired' | 'Rejected';
  jobId: string;
  
  // Profile info
  workExperience: WorkExperience[];
  coverLetter?: string;
  resumeUrl?: string;
  
  // Evaluation
  overallRating: number;
  evaluations: {
    technicalSkills: number;
    problemSolving: number;
    communication: number;
    culturalFit: number;
    adaptability: number;
  };
  
  // Timeline
  timeline: TimelineEvent[];
  
  // Comments
  comments: Comment[];
}

export interface TimelineEvent {
  id: string;
  stage: 'Applied' | 'Under Review' | 'Interview' | 'Offer' | 'Hired' | 'Rejected';
  date: string;
  description?: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface Comment {
  id: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  type: 'comment' | 'status-change' | 'evaluation';
}

export interface PipelineMetrics {
  jobId: string;
  jobTitle: string;
  totalCandidates: number;
  stages: {
    applied: number;
    underReview: number;
    interviewed: number;
    offered: number;
    hired: number;
  };
}

export interface DailyTrend {
  date: string;
  applications: number;
}

export interface PipelineCandidate {
  id: string;
  name: string;
  applied: string;
  underReview?: string;
  interviewed?: string;
  offered?: string;
  hired?: string;
  currentStage: string;
}

export interface DashboardMetrics {
  openPositions: number;
  activeJobPosts: number;
  pendingApproval: number;
  expiredPosts: number;
}

// Filter and search types
export interface JobFilter {
  status?: 'All' | 'Open' | 'Pending Approval' | 'Expired';
  department?: string;
  location?: string;
  type?: string;
}

export interface CandidateFilter {
  stage?: string;
  rating?: number;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface ReportFilter {
  jobPosition?: string;
  timeframe?: '7 Days' | '14 Days' | '1 Month' | '2 Months' | '3 Months';
}
