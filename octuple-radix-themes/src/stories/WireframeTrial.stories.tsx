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
  TextField,
  Checkbox,
  Table
} from '@radix-ui/themes';
import { Icon } from '../components/Icon';

// Generate random scheduling data
const candidateNames = [
  { name: 'Sarah Johnson', initials: 'SJ', title: 'Senior Software Engineer' },
  { name: 'Michael Chen', initials: 'MC', title: 'Product Manager' },
  { name: 'Emily Rodriguez', initials: 'ER', title: 'UX Designer' },
  { name: 'David Kim', initials: 'DK', title: 'Data Scientist' },
  { name: 'Amanda Foster', initials: 'AF', title: 'Marketing Specialist' },
  { name: 'James Wilson', initials: 'JW', title: 'Full Stack Developer' },
  { name: 'Lisa Anderson', initials: 'LA', title: 'Technical Writer' },
  { name: 'Robert Martinez', initials: 'RM', title: 'DevOps Engineer' },
  { name: 'Jennifer Lee', initials: 'JL', title: 'Business Analyst' },
  { name: 'Christopher Brown', initials: 'CB', title: 'Solutions Architect' },
];

const coordinators = ['Adam Abrams', 'Sarah Mitchell', 'John Smith', 'Emily Davis'];

const statuses = [
  'Pending Candidate Response',
  'Scheduled',
  'Pending Interview Confirmation',
  'Declined',
  'Confirmed',
];

const stages = ['Phone Screen', 'Remote Interview', 'On-site Interview', 'Final Round', 'Hiring Manager Screen'];

const generateRandomData = (count: number) => {
  const data = [];
  const today = new Date();
  
  for (let i = 0; i < count; i++) {
    const daysOffset = Math.floor(Math.random() * 30) - 10; // -10 to +20 days from today
    const date = new Date(today);
    date.setDate(date.getDate() + daysOffset);
    
    const hours = Math.floor(Math.random() * 9) + 9; // 9 AM to 5 PM
    const minutes = Math.random() > 0.5 ? '00' : '30';
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours;
    
    const candidate = candidateNames[Math.floor(Math.random() * candidateNames.length)];
    const coordinator = coordinators[Math.floor(Math.random() * coordinators.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const stage = stages[Math.floor(Math.random() * stages.length)];
    
    data.push({
      id: i + 1,
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: `${displayHours}:${minutes} ${period}`,
      candidate,
      coordinator,
      status,
      stage,
    });
  }
  
  return data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

const schedulingData = generateRandomData(12);

const WireframeTrialPage = () => (
  <Theme appearance="light" accentColor="indigo" grayColor="slate">
    <Box style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Navigation Bar */}
      <Box style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '0 32px' }}>
        <Flex align="center" justify="between" style={{ height: '64px' }}>
          {/* Left side - Logo and Navigation */}
          <Flex align="center" gap="6">
            {/* Logo */}
            <Flex align="center" gap="2">
              <Icon name="search" size={24} style={{ color: '#6366f1' }} />
              <Flex direction="column" style={{ lineHeight: '1.2' }}>
                <Text size="2" weight="bold" style={{ letterSpacing: '0.5px' }}>TALENT</Text>
                <Text size="1" weight="medium" style={{ color: '#64748b', letterSpacing: '0.3px' }}>Acquired Fragments</Text>
              </Flex>
            </Flex>
            
            {/* Navigation Links */}
            <Flex align="center" gap="1" ml="4">
              <Button variant="ghost" size="2" style={{ fontWeight: 500 }}>
                Positions
              </Button>
              <Button variant="ghost" size="2" style={{ fontWeight: 500 }}>
                Talent
              </Button>
              <Button variant="ghost" size="2" style={{ fontWeight: 500 }}>
                Engage
                <Icon name="expand_more" size={16} />
              </Button>
              <Button variant="ghost" size="2" style={{ fontWeight: 500 }}>
                Insights
              </Button>
            </Flex>
          </Flex>

          {/* Right side - Search and User Profile */}
          <Flex align="center" gap="3">
            <TextField.Root placeholder="Search" size="2" style={{ width: '300px' }}>
              <TextField.Slot>
                <Icon name="search" size={16} />
              </TextField.Slot>
            </TextField.Root>
            
            <Avatar size="2" fallback="U" color="gray" />
            <Avatar size="2" fallback="U" color="indigo" />
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box style={{ padding: '32px' }}>
        {/* Page Header */}
        <Flex align="start" justify="between" mb="5">
          <Text size="8" weight="bold">Scheduling Center</Text>
          <Box style={{ width: '200px' }} />
        </Flex>

        {/* Tabs and Filter Bar */}
        <Flex align="center" justify="between" mb="4">
          <Tabs.Root defaultValue="scheduling-requests">
            <Tabs.List>
              <Tabs.Trigger value="scheduling-requests">Scheduling Requests</Tabs.Trigger>
              <Tabs.Trigger value="upcoming">Upcoming</Tabs.Trigger>
              <Tabs.Trigger value="all-interviews">All Interviews</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
          
          <Flex align="center" gap="2">
            <Text size="2" color="gray">Filter</Text>
            <Select.Root defaultValue="my-positions">
              <Select.Trigger placeholder="Select filter" style={{ width: '280px' }} />
              <Select.Content>
                <Select.Item value="my-positions">Requests sent for my Positions</Select.Item>
                <Select.Item value="all-positions">All Positions</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Flex>

        {/* Content Area */}
        <Flex gap="4">
          {/* Left Sidebar - Filters */}
          <Box style={{ width: '280px', flexShrink: 0 }}>
            <Card size="2">
              <Flex direction="column" gap="4">
                {/* Date Range */}
                <Box>
                  <Text size="3" weight="bold" mb="3" style={{ display: 'block' }}>Date Range</Text>
                  <TextField.Root placeholder="Candidate name or position" size="2">
                    <TextField.Slot>
                      <Icon name="search" size={16} />
                    </TextField.Slot>
                  </TextField.Root>
                </Box>

                <Separator size="4" />

                {/* Scheduling Status */}
                <Box>
                  <Text size="3" weight="bold" mb="3" style={{ display: 'block' }}>Scheduling Status</Text>
                  <Flex direction="column" gap="2">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Checkbox size="2" />
                      <Text size="2">Pending Candidate Response</Text>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Checkbox size="2" />
                      <Text size="2">Scheduled</Text>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Checkbox size="2" />
                      <Text size="2">Pending Interview Confirmation</Text>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Checkbox size="2" />
                      <Text size="2">Declined</Text>
                    </label>
                  </Flex>
                </Box>

                <Separator size="4" />

                {/* Interview Stage */}
                <Box>
                  <Text size="3" weight="bold" mb="3" style={{ display: 'block' }}>Interview Stage</Text>
                  <Flex direction="column" gap="2">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Checkbox size="2" />
                      <Text size="2">Phone Screen</Text>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Checkbox size="2" />
                      <Text size="2">Remote Interview</Text>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Checkbox size="2" />
                      <Text size="2">On-site Interview</Text>
                    </label>
                  </Flex>
                </Box>

                <Separator size="4" />

                {/* Assigned Coordinator */}
                <Box>
                  <Text size="3" weight="bold" mb="3" style={{ display: 'block' }}>Assigned Coordinator</Text>
                  <Flex direction="column" gap="2">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Checkbox size="2" />
                      <Text size="2">Adam Abrams</Text>
                    </label>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Box>

          {/* Main Content - Table */}
          <Box style={{ flex: 1 }}>
            <Card size="2">
              {/* Search and Results Header */}
              <Flex align="center" justify="between" p="4" style={{ borderBottom: '1px solid #e5e7eb' }}>
                <TextField.Root placeholder="Candidate name or position" size="2" style={{ width: '400px' }}>
                  <TextField.Slot>
                    <Icon name="search" size={16} />
                  </TextField.Slot>
                </TextField.Root>
                
                <Flex align="center" gap="2">
                  <Text size="2" color="gray">Showing 1 to {schedulingData.length} of {schedulingData.length} results</Text>
                  <IconButton variant="ghost" size="1">
                    <Icon name="chevron_left" size={16} />
                  </IconButton>
                  <IconButton variant="ghost" size="1">
                    <Icon name="chevron_right" size={16} />
                  </IconButton>
                </Flex>
              </Flex>

              {/* Table */}
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Meeting Date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Candidate</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Assigned Coordinator</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell style={{ width: '60px' }}></Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {schedulingData.map((item) => (
                    <Table.Row key={item.id}>
                      <Table.Cell>
                        <Flex direction="column" gap="1">
                          <Text size="2" weight="medium">{item.date}</Text>
                          <Text size="1" color="gray">{item.time}</Text>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell>
                        <Flex align="center" gap="3">
                          <Avatar size="2" fallback={item.candidate.initials} color="indigo" />
                          <Flex direction="column" gap="1">
                            <Text size="2" weight="medium">{item.candidate.name}</Text>
                            <Text size="1" color="gray">{item.candidate.title}</Text>
                          </Flex>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2">{item.coordinator}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge 
                          size="2" 
                          color={
                            item.status === 'Confirmed' ? 'green' :
                            item.status === 'Scheduled' ? 'blue' :
                            item.status === 'Declined' ? 'red' :
                            'gray'
                          }
                          variant="soft"
                        >
                          {item.status}
                        </Badge>
                        <Text size="1" color="gray" style={{ display: 'block', marginTop: '4px' }}>
                          {item.stage}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Flex align="center" gap="2">
                          <IconButton variant="ghost" size="1" color="gray">
                            <Icon name="close" size={16} />
                          </IconButton>
                          <Avatar size="1" fallback={item.coordinator.split(' ').map(n => n[0]).join('')} color="gray" />
                        </Flex>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>

              {/* Pagination Footer */}
              <Flex align="center" justify="end" gap="2" p="4" style={{ borderTop: '1px solid #e5e7eb' }}>
                <IconButton variant="ghost" size="1">
                  <Icon name="first_page" size={16} />
                </IconButton>
                <IconButton variant="ghost" size="1">
                  <Icon name="chevron_left" size={16} />
                </IconButton>
                <Button variant="solid" size="1" style={{ minWidth: '32px' }}>1</Button>
                <IconButton variant="ghost" size="1">
                  <Icon name="chevron_right" size={16} />
                </IconButton>
                <IconButton variant="ghost" size="1">
                  <Icon name="last_page" size={16} />
                </IconButton>
              </Flex>
            </Card>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Theme>
);

const meta: Meta<typeof WireframeTrialPage> = {
  title: 'Pages/WireframeTrial',
  component: WireframeTrialPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A high-fidelity implementation of the Scheduling Center wireframe using only components from the Components section.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <WireframeTrialPage />,
};

