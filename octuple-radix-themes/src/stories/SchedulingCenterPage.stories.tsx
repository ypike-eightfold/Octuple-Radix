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
import { Pagination } from '../components/Pagination';

// Sample scheduling data
const sampleSchedulingData = [
  {
    id: '1',
    date: 'Aug 27, 2025',
    time: '11:30 AM - 12:00 PM',
    candidate: {
      name: 'Ella Nwachukwu',
      initials: 'EN',
      title: 'Solution Architect'
    },
    coordinator: 'Adam Abrams',
    status: 'Deleted in Calendar (1)',
    position: 'Director of Talent Acquisition (30534672)',
    recruiter: 'Adam Abrams',
    stage: 'New',
    interviews: {
      interviewer: 'Ray Reynolds',
      status: '2 deleted'
    }
  },
  {
    id: '2',
    date: 'Jul 29, 2025',
    time: '4:00 AM - 4:30 AM',
    candidate: {
      name: 'Christian Barnhausen',
      initials: 'CB',
      title: 'ACCOUNTANT IV/Supervisor,…'
    },
    coordinator: 'Adam Abrams',
    status: 'Pending Interviewer Confirmation (1)',
    position: 'Accountant (27811083)',
    recruiter: 'Adam Abrams',
    stage: '-',
    interviews: {
      interviewer: 'Ray Reynolds',
      status: '1 confirmed, 1 pending'
    }
  },
  {
    id: '3',
    date: 'Jul 28, 2025',
    time: '3:00 PM - 3:30 PM',
    candidate: {
      name: 'Lisa Cordova',
      initials: 'LC',
      title: 'Specialist, Tax'
    },
    coordinator: 'Harold Hiring Manager',
    status: 'Pending Interviewer Confirmation (1)',
    position: 'Accountant (27811083)',
    recruiter: 'Adam Abrams',
    stage: 'Hiring Manager Screen',
    interviews: {
      interviewer: 'Harold Hiring Manager',
      status: '1 confirmed, 1 pending'
    }
  },
  {
    id: '4',
    date: 'Pending',
    time: '',
    candidate: {
      name: 'Cara Cook',
      initials: 'CC',
      title: 'Software Engineer, Salesforce'
    },
    coordinator: 'Adam Abrams',
    status: 'Pending Candidate Response (1)',
    position: 'No Position',
    recruiter: 'Adam Abrams',
    stage: '-',
    interviews: {
      interviewer: 'Adam Abrams',
      status: '2 pending'
    }
  },
  {
    id: '5',
    date: 'Pending',
    time: '',
    candidate: {
      name: 'Kabir Gupta',
      initials: 'KG',
      title: 'Senior Engineering Manager,…'
    },
    coordinator: 'Adam Abrams',
    status: 'Pending Candidate Response (1)',
    position: 'Software Engineer (25213661)',
    recruiter: 'Adam Abrams',
    stage: 'Hiring Manager Screen',
    interviews: {
      interviewer: 'Ray Reynolds',
      status: '2 pending'
    }
  }
];

const SchedulingCenterPage = () => (
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
            
            <Flex align="center" gap="4">
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

          {/* Right side - Search and User Profile */}
          <Flex align="center" gap="4">
            <TextField.Root placeholder="Search for positions or candidates" style={{ width: '400px' }}>
              <TextField.Slot>
                <Icon name="search" size={16} />
              </TextField.Slot>
            </TextField.Root>
            
            <IconButton variant="ghost" size="2">
              <Icon name="smart_toy" size={20} />
            </IconButton>
            
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

      {/* Main Content */}
      <Box style={{ padding: '20px' }}>
        {/* Page Header */}
        <Flex align="center" justify="between" mb="6">
          <Text size="8" weight="bold">Scheduling Center</Text>
          
          <Flex align="center" gap="4">
            <Button variant="outline" size="2">
              Scheduling Link
              <Icon name="expand_more" size={16} />
            </Button>
            <IconButton variant="ghost" size="2">
              <Icon name="bookmark_add" size={20} />
            </IconButton>
            <IconButton variant="ghost" size="2">
              <Icon name="info" size={20} />
            </IconButton>
          </Flex>
        </Flex>

        {/* Tab Navigation */}
        <Tabs.Root defaultValue="scheduling-requests" mb="6">
          <Tabs.List>
            <Tabs.Trigger value="scheduling-requests">Scheduling Requests</Tabs.Trigger>
            <Tabs.Trigger value="upcoming">
              Upcoming
              <Badge size="1" color="blue">1</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="exceptions">
              Exceptions
              <Badge size="1" color="red">3</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="all-interviews">
              All Interviews
              <Badge size="1" color="gray">17</Badge>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

        {/* Filter Bar */}
        <Flex align="center" justify="between" mb="6">
          <Select.Root defaultValue="my-positions">
            <Select.Trigger placeholder="Requests sent for my Positions" />
            <Select.Content>
              <Select.Item value="my-positions">Requests sent for my Positions</Select.Item>
              <Select.Item value="all-positions">All Positions</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Text size="2" color="gray">
            Showing latest 17 out of 17 results
          </Text>
        </Flex>

        <Flex gap="6">
          {/* Left Sidebar - Filters */}
          <Box width="250px">
            <Card size="2" p="4">
              {/* Date Range Filter */}
              <Box mb="4">
                <Text size="3" weight="bold" mb="2">Date Range</Text>
                <Flex align="center" gap="2" mb="2">
                  <Icon name="calendar_today" size={16} />
                  <TextField.Root placeholder="Start Date" size="1" style={{ width: '100px' }} />
                  <Text size="1">to</Text>
                  <TextField.Root placeholder="End Date" size="1" style={{ width: '100px' }} />
                </Flex>
              </Box>

              <Separator mb="4" />

              {/* Scheduling Status Filter */}
              <Box mb="4">
                <Text size="3" weight="bold" mb="2">Scheduling Status</Text>
                <Flex direction="column" gap="2">
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Pending Candidate Response</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Pending Interviewer Confirmation</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Confirmed</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Declined</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Cancelled</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Reschedule Requested</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Deleted in Calendar</Text>
                  </Flex>
                </Flex>
              </Box>

              <Separator mb="4" />

              {/* Positions Filter */}
              <Box mb="4">
                <Text size="3" weight="bold" mb="2">Positions</Text>
                <Select.Root>
                  <Select.Trigger placeholder="Select Position" />
                  <Select.Content>
                    <Select.Item value="all">All Positions</Select.Item>
                    <Select.Item value="software-engineer">Software Engineer</Select.Item>
                    <Select.Item value="accountant">Accountant</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Box>

              <Separator mb="4" />

              {/* Events Filter */}
              <Box mb="4">
                <Text size="3" weight="bold" mb="2">Events</Text>
                <Select.Root>
                  <Select.Trigger placeholder="Select Event" />
                  <Select.Content>
                    <Select.Item value="all">All Events</Select.Item>
                    <Select.Item value="interview">Interview</Select.Item>
                    <Select.Item value="meeting">Meeting</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Box>

              <Separator mb="4" />

              {/* Interview Stage Filter */}
              <Box mb="4">
                <Text size="3" weight="bold" mb="2">Interview Stage</Text>
                <Flex direction="column" gap="2">
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Hiring Manager Screen</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">New</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Phone Interview</Text>
                  </Flex>
                </Flex>
              </Box>

              <Separator mb="4" />

              {/* Assigned Coordinator Filter */}
              <Box>
                <Text size="3" weight="bold" mb="2">Assigned Coordinator</Text>
                <Flex direction="column" gap="2">
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Harold Hiring Manager</Text>
                    <Badge size="1" color="blue">1</Badge>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">Adam Abrams</Text>
                    <Badge size="1" color="blue">16</Badge>
                  </Flex>
                </Flex>
              </Box>
            </Card>
          </Box>

          {/* Main Content - Data Table */}
          <Box flex="1">
            <Card size="2">
              {/* Search Bar */}
              <Box p="4" style={{ borderBottom: '1px solid #e5e7eb' }}>
                <Flex align="center" justify="between">
                  <TextField.Root placeholder="Candidate name or position" style={{ width: '400px' }}>
                    <TextField.Slot>
                      <Icon name="search" size={16} />
                    </TextField.Slot>
                  </TextField.Root>
                </Flex>
              </Box>

              {/* Table */}
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>
                      <Flex align="center" gap="2">
                        Meeting Date/Time
                        <Icon name="unfold_more" size={16} />
                      </Flex>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Candidate</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Assigned Coordinator</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Position/Recruiter</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <Flex align="center" gap="2">
                        Interview Stage
                        <Icon name="unfold_more" size={16} />
                      </Flex>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Interview(s)</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {sampleSchedulingData.map((item) => (
                    <Table.Row key={item.id}>
                      <Table.Cell>
                        <Flex align="center" gap="2">
                          <Icon name="event" size={20} />
                          <Flex direction="column">
                            <Text size="2" weight="medium">{item.date}</Text>
                            {item.time && <Text size="1" color="gray">{item.time}</Text>}
                          </Flex>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell>
                        <Flex align="center" gap="3">
                          <Avatar size="2" fallback={item.candidate.initials} />
                          <Flex direction="column">
                            <Text size="2" weight="medium">{item.candidate.name}</Text>
                            <Text size="1" color="gray">{item.candidate.title}</Text>
                          </Flex>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2">{item.coordinator}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2">{item.status}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Flex direction="column">
                          <Text size="2" weight="medium">{item.position}</Text>
                          <Text size="1" color="gray">{item.recruiter}</Text>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2">{item.stage}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Flex direction="column">
                          <Text size="2">{item.interviews.interviewer}</Text>
                          <Text size="1" color="gray">{item.interviews.status}</Text>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell>
                        <IconButton variant="ghost" size="2">
                          <Icon name="more_vert" size={20} />
                        </IconButton>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>

              {/* Pagination */}
              <Box p="4" style={{ borderTop: '1px solid #e5e7eb' }}>
                <Flex justify="end">
                  <Pagination
                    currentPage={1}
                    totalPages={2}
                    onPageChange={(page) => console.log('Page changed to:', page)}
                    size="2"
                    showFirstLast={false}
                  />
                </Flex>
              </Box>
            </Card>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Theme>
);

const meta: Meta<typeof SchedulingCenterPage> = {
  title: 'Pages/SchedulingCenter',
  component: SchedulingCenterPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SchedulingCenterPage />,
};
