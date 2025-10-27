import type { Meta, StoryObj } from '@storybook/react';
import {
  Theme,
  Flex,
  Text,
  Button,
  Card,
  Avatar,
  Badge,
  Separator,
  Box,
  IconButton,
  Select,
  Tabs,
  TextField
} from '@radix-ui/themes';
import { Icon } from '../components/Icon';

// Sample candidate data for different stages
const sampleCandidates = {
  onsite: [
    {
      id: '1',
      name: 'Sandhya Thota',
      initials: 'ST',
      title: 'Senior Software Engineer, Prodapt',
      matchScore: 4.24,
      highlights: 'Diversity (Female)',
      stage: 'Onsite Interview',
      feedbackCount: 1,
      starred: true
    },
    {
      id: '2',
      name: 'Becky Devonport',
      initials: 'BD',
      title: 'Manager, M&A',
      matchScore: 0,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'Onsite Interview',
      starred: true
    },
    {
      id: '3',
      name: 'Matthew Reardon',
      initials: 'MR',
      title: 'Specialist, Audit and Assurance',
      matchScore: 0,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'Onsite Interview',
      starred: true
    },
    {
      id: '4',
      name: 'Neill Eurogeol',
      initials: 'NE',
      title: 'Senior Manager, Tax',
      matchScore: 0,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'Onsite Interview',
      starred: true
    }
  ],
  phonescreen: [
    {
      id: '5',
      name: 'Cara Cook',
      initials: 'CC',
      title: 'Software Engineer, Salesforce',
      matchScore: 4.22,
      highlights: 'Diversity (Female), Top US School',
      stage: 'Phone Interview',
      feedbackCount: 1,
      starred: true
    },
    {
      id: '6',
      name: 'Kabir Gupta',
      initials: 'KG',
      title: 'Senior Engineering Manager, Senior…',
      matchScore: 4.14,
      highlights: 'Top US School',
      stage: 'Hiring Manager Screen',
      feedbackCount: 2,
      starred: true
    },
    {
      id: '7',
      name: 'A. D.',
      initials: 'AD',
      title: 'Software Engineer, American Express',
      matchScore: 4.05,
      highlights: '',
      stage: 'Recruiter Screen',
      starred: true
    },
    {
      id: '8',
      name: 'J. S.',
      initials: 'JS',
      title: 'Software Engineer, Google',
      matchScore: 3.84,
      highlights: '',
      stage: 'Recruiter Screen',
      starred: true
    }
  ],
  newApplicant: [
    {
      id: '9',
      name: 'O. K.',
      initials: 'OK',
      title: 'Specialist, Tech Solutions',
      matchScore: 3.95,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'New',
      starred: true
    },
    {
      id: '10',
      name: 'V. C.',
      initials: 'VC',
      title: 'Software Engineer, Facebook',
      matchScore: 3.84,
      highlights: 'Top US School',
      stage: 'New',
      starred: true
    },
    {
      id: '11',
      name: 'S. S.',
      initials: 'SS',
      title: 'Consultant, Business Services',
      matchScore: 3.31,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'New',
      starred: true
    },
    {
      id: '12',
      name: 'E. C.',
      initials: 'EC',
      title: 'Security Engineer, Autodesk',
      matchScore: 2.75,
      highlights: '',
      stage: 'New',
      starred: true
    },
    {
      id: '13',
      name: 'R. F.',
      initials: 'RF',
      title: 'Software Developer, Techshed',
      matchScore: 2.73,
      highlights: '',
      stage: 'New',
      starred: true
    }
  ],
  interviewOther: [
    {
      id: '14',
      name: 'Venkat Subbiah',
      initials: 'VS',
      title: 'Senior Software Engineer, Microsoft',
      matchScore: 3.77,
      highlights: '',
      stage: 'Offer',
      feedbackCount: 2,
      starred: true,
      status: 'Awaiting Feedback'
    }
  ],
  unclassified: [
    {
      id: '15',
      name: 'Vi Tran',
      initials: 'VT',
      title: 'Associate, Tech Solutions',
      matchScore: 3.87,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'HM Screen',
      starred: true
    },
    {
      id: '16',
      name: 'Cooley Academy',
      initials: 'CA',
      title: 'Partner, Tech Solutions',
      matchScore: 3.07,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'HM Screen',
      starred: true
    },
    {
      id: '17',
      name: 'Nikola Kovacevic',
      initials: 'NK',
      title: 'Specialist, Tech Solutions',
      matchScore: 1.25,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'HM Screen',
      starred: true
    },
    {
      id: '18',
      name: 'Cal Gilliland',
      initials: 'CG',
      title: 'Specialist, M&A',
      matchScore: 0,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'HM Screen',
      starred: true
    },
    {
      id: '19',
      name: 'Maury Hull',
      initials: 'MH',
      title: 'Manager, M&A',
      matchScore: 0,
      highlights: 'Current Employee, Internal Applicant',
      stage: 'HM Screen',
      starred: true
    }
  ]
};

const MatchScoreStars = ({ score }: { score: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Box
        key={i}
        width="12px"
        height="12px"
        style={{
          borderRadius: '50%',
          backgroundColor: i <= score ? '#10b981' : '#e5e7eb',
          border: '1px solid #d1d5db'
        }}
      />
    );
  }
  return <Flex gap="1">{stars}</Flex>;
};

const CandidateCard = ({ candidate }: { candidate: any }) => (
  <Card style={{ marginBottom: '16px', cursor: 'pointer' }}>
    <Flex direction="column" gap="3" p="3">
      {/* Header with avatar and name */}
      <Flex align="center" gap="3">
        <Avatar
          size="3"
          fallback={candidate.initials}
          style={{ backgroundColor: '#6366f1' }}
        />
        <Flex direction="column" flex="1">
          <Flex align="center" justify="between">
            <Text size="2" weight="medium">{candidate.name}</Text>
            <IconButton variant="ghost" size="1">
              <Icon name="star" size={16} />
            </IconButton>
          </Flex>
          <Text size="1" color="gray">{candidate.title}</Text>
        </Flex>
      </Flex>

      {/* Match score and highlights */}
      <Flex align="center" gap="3">
        <MatchScoreStars score={candidate.matchScore} />
        {candidate.highlights && (
          <Text size="1" color="gray">{candidate.highlights}</Text>
        )}
      </Flex>

      {/* Stage indicator */}
      <Flex align="center" gap="2">
        <Box
          width="12px"
          height="12px"
          style={{
            borderRadius: '50%',
            backgroundColor: '#6366f1'
          }}
        />
        <Text size="1">{candidate.stage}</Text>
      </Flex>

      {/* Status and feedback */}
      <Flex justify="between" align="center">
        {candidate.status && (
          <Badge variant="soft" color="blue">
            {candidate.status}
          </Badge>
        )}
        {candidate.feedbackCount && (
          <Badge variant="soft" color="gray">
            <Icon name="comment" size={12} />
            {candidate.feedbackCount}
          </Badge>
        )}
      </Flex>
    </Flex>
  </Card>
);

const KanbanColumn = ({ title, count, candidates }: { title: string; count: number; candidates: any[] }) => (
  <Box width="400px" style={{ backgroundColor: '#f8fafc', borderRadius: '8px', padding: '16px' }}>
    <Flex align="center" justify="between" mb="4">
      <Text size="2" weight="medium">{title}</Text>
      <Badge variant="soft" color="gray">{count}</Badge>
    </Flex>
    <Box>
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </Box>
  </Box>
);

const PipelineKanbanPage = () => (
  <Theme appearance="light" accentColor="indigo" grayColor="slate">
    <Box>
      {/* Navigation Bar */}
      <Box style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '0 20px' }}>
        <Flex align="center" justify="between" style={{ height: '60px' }}>
          {/* Left side - Logo and Navigation */}
          <Flex align="center" gap="6">
            <Flex align="center" gap="3">
              <Box width="32px" height="32px" style={{ backgroundColor: '#6366f1', borderRadius: '4px' }} />
              <Separator orientation="vertical" style={{ height: '30px' }} />
              <Flex direction="column">
                <Text size="1" weight="bold">TALENT</Text>
                <Text size="1" weight="bold">ACQUISITION</Text>
              </Flex>
            </Flex>
            
            <Flex gap="4">
              <Button variant="ghost" size="2">Positions</Button>
              <Button variant="ghost" size="2">
                Talent
                <Icon name="expand_more" size={16} />
              </Button>
              <Button variant="ghost" size="2">
                Engage
                <Icon name="expand_more" size={16} />
              </Button>
              <Button variant="ghost" size="2">Insights</Button>
              <Button variant="ghost" size="2">
                More
                <Icon name="expand_more" size={16} />
              </Button>
            </Flex>
          </Flex>

          {/* Right side - Search and User */}
          <Flex align="center" gap="4">
            <TextField.Root placeholder="Search for positions or candidates" style={{ width: '230px' }}>
              <TextField.Slot>
                <Icon name="search" size={16} />
              </TextField.Slot>
            </TextField.Root>
            
            <Box style={{ backgroundColor: '#f0f9ff', padding: '12px', borderRadius: '8px', maxWidth: '320px' }}>
              <Flex align="center" gap="2">
                <Icon name="psychology" size={20} />
                <Text size="1">Attract applicants faster with Copilot's personalized outreach</Text>
                <Icon name="close" size={16} />
              </Flex>
            </Box>
            
            <IconButton variant="ghost" size="2">
              <Icon name="settings" size={20} />
            </IconButton>
            <IconButton variant="ghost" size="2">
              <Icon name="notifications" size={20} />
            </IconButton>
            <IconButton variant="ghost" size="2">
              <Icon name="apps" size={20} />
            </IconButton>
            <Flex align="center" gap="2">
              <Avatar size="2" fallback="AA" />
              <Icon name="expand_more" size={16} />
            </Flex>
          </Flex>
        </Flex>
      </Box>

      {/* Page Header */}
      <Box p="6" style={{ backgroundColor: 'white' }}>
        <Flex align="center" justify="between" mb="4">
          <Flex align="center" gap="4">
            <Text size="6" weight="bold">Software Engineer</Text>
            <IconButton variant="ghost" size="2">
              <Icon name="expand_more" size={20} />
            </IconButton>
            <IconButton variant="ghost" size="2">
              <Icon name="bookmark_add" size={20} />
            </IconButton>
            <IconButton variant="ghost" size="2">
              <Icon name="info" size={20} />
            </IconButton>
          </Flex>
          
          <Flex gap="3">
            <Button variant="solid" size="2">Calibrate Position</Button>
            <Button variant="solid" size="2">
              Automate Workflows
              <Badge variant="solid" color="blue">4</Badge>
            </Button>
            <IconButton variant="ghost" size="2">
              <Icon name="more_horiz" size={20} />
            </IconButton>
          </Flex>
        </Flex>
        
        <Flex align="center" gap="4" mb="4">
          <Text size="2" color="gray">25213661</Text>
          <Flex align="center" gap="2">
            <Box width="4px" height="4px" style={{ backgroundColor: '#10b981', borderRadius: '50%' }} />
            <Text size="2" color="gray">Bangalore, India</Text>
          </Flex>
          <Flex align="center" gap="2">
            <Box width="12px" height="12px" style={{ backgroundColor: '#10b981', borderRadius: '50%' }} />
            <Text size="2" color="gray">Open</Text>
          </Flex>
          <Flex align="center" gap="2">
            <Box width="12px" height="12px" style={{ backgroundColor: '#10b981', borderRadius: '50%' }} />
            <Text size="2" color="gray">Published</Text>
          </Flex>
        </Flex>
      </Box>

      {/* Tab Navigation */}
      <Box style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <Tabs.Root defaultValue="applicants">
          <Tabs.List>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="leads">
              Leads
              <Badge variant="soft" color="gray">1.2k</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="contacted">
              Contacted
              <Badge variant="soft" color="gray">12</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="employees">
              Employees
              <Badge variant="soft" color="gray">798</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="applicants">
              Applicants
              <Badge variant="soft" color="gray">69</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="recruiter">
              Recruiter Screen
              <Badge variant="soft" color="gray">17</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="hm">
              HM Screen
              <Badge variant="soft" color="gray">5</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="onsite">
              Onsite Interview & Offer
              <Badge variant="soft" color="gray">5</Badge>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Box>

      {/* Toolbar */}
      <Box p="4" style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <Flex align="center" justify="between">
          <Flex align="center" gap="4">
            <Select.Root defaultValue="all-active">
              <Select.Trigger placeholder="Views : All Active" />
              <Select.Content>
                <Select.Item value="all-active">All Active</Select.Item>
                <Select.Item value="my-views">My Views</Select.Item>
              </Select.Content>
            </Select.Root>
            
            <Separator orientation="vertical" style={{ height: '36px' }} />
            
            <Flex gap="3">
              <Button variant="ghost" size="2">
                ATS Stage
                <Icon name="expand_more" size={16} />
              </Button>
              <Button variant="ghost" size="2">
                Match Score
                <Icon name="expand_more" size={16} />
              </Button>
              <Button variant="ghost" size="2">
                Highlights
                <Icon name="expand_more" size={16} />
              </Button>
              <Button variant="ghost" size="2">
                <Icon name="tune" size={16} />
                All filters
                <Badge variant="solid" color="blue">0</Badge>
              </Button>
              <Separator orientation="vertical" style={{ height: '36px' }} />
              <Button variant="ghost" size="2">
                Sort by : Match - High to Low
                <Icon name="expand_more" size={16} />
              </Button>
            </Flex>
          </Flex>
          
          <Flex align="center" gap="3">
            <IconButton variant="ghost" size="2">
              <Icon name="search" size={20} />
            </IconButton>
            <Flex gap="1">
              <IconButton variant="ghost" size="2">
                <Icon name="view_list" size={16} />
              </IconButton>
              <IconButton variant="solid" size="2">
                <Icon name="view_module" size={16} />
              </IconButton>
            </Flex>
            <IconButton variant="ghost" size="2">
              <Icon name="settings" size={20} />
            </IconButton>
          </Flex>
        </Flex>
      </Box>

      {/* Kanban Board */}
      <Box p="4" style={{ backgroundColor: '#f8fafc', minHeight: '600px' }}>
        <Flex gap="4" style={{ overflowX: 'auto' }}>
          <KanbanColumn 
            title="Onsite" 
            count={4} 
            candidates={sampleCandidates.onsite} 
          />
          <KanbanColumn 
            title="Phonescreen" 
            count={22} 
            candidates={sampleCandidates.phonescreen} 
          />
          <KanbanColumn 
            title="New Applicant" 
            count={35} 
            candidates={sampleCandidates.newApplicant} 
          />
          <KanbanColumn 
            title="Interview Other" 
            count={1} 
            candidates={sampleCandidates.interviewOther} 
          />
          <KanbanColumn 
            title="Unclassified" 
            count={7} 
            candidates={sampleCandidates.unclassified} 
          />
        </Flex>
      </Box>
    </Box>
  </Theme>
);

const meta: Meta<typeof PipelineKanbanPage> = {
  title: 'Pages/PipelineKanban',
  component: PipelineKanbanPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof PipelineKanbanPage>;

export const Default: Story = {};
