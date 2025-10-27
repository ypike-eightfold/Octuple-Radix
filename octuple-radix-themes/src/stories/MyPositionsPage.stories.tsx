import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Theme,
  Button, 
  Card, 
  Flex, 
  Grid, 
  Heading, 
  Text, 
  Badge, 
  IconButton,
  TextField,
  Select,
  Table,
  Separator,
  Link,
  Box
} from '@radix-ui/themes';
import { Icon } from '../components/Icon';
import { Pagination } from '../components/Pagination';

// Sample position data
const samplePositions = [
  {
    id: '30534672',
    title: 'Director of Talent Acquisition',
    location: 'Santa Clara',
    recruiter: 'Holly Hillyer',
    hiringManager: 'Adam Abrams',
    status: 'Open',
    daysOpen: 43,
    leads: 170,
    new: 1,
    recruiterScreen: 0,
    hiringManagerScreen: 0,
    phoneInterview: 0,
    onsiteInterview: 0,
    offer: 0,
    badges: ['Priority']
  },
  {
    id: '30515934',
    title: 'Solutions Consultant',
    location: 'Santa Clara, CA',
    recruiter: 'Holly Hillyer',
    hiringManager: 'Adam Abrams',
    status: 'Open',
    daysOpen: 44,
    leads: 2800,
    new: 0,
    recruiterScreen: 0,
    hiringManagerScreen: 0,
    phoneInterview: 0,
    onsiteInterview: 0,
    offer: 0,
    badges: []
  },
  {
    id: '25213661',
    title: 'Software Engineer',
    location: 'Bangalore, India',
    recruiter: 'Holly Hillyer',
    hiringManager: 'Ray Reynolds',
    status: 'Open',
    daysOpen: 353,
    leads: 1200,
    new: 36,
    recruiterScreen: 17,
    hiringManagerScreen: 4,
    phoneInterview: 1,
    onsiteInterview: 4,
    offer: 0,
    badges: ['Priority']
  },
  {
    id: '25213660',
    title: 'Financial Accountant',
    location: 'Paris France',
    recruiter: 'Harold Hiring Manager',
    hiringManager: 'Rachel Recruiter',
    status: 'Open',
    daysOpen: 353,
    leads: 863,
    new: 23,
    recruiterScreen: 23,
    hiringManagerScreen: 8,
    phoneInterview: 0,
    onsiteInterview: 3,
    offer: 0,
    badges: ['Priority']
  },
  {
    id: '25213645',
    title: 'Customer Service Representative',
    location: 'Chico IL',
    recruiter: 'Harold Hiring Manager',
    hiringManager: 'Rachel Recruiter',
    status: 'Sourcing Pipeline',
    daysOpen: 353,
    leads: 1000,
    new: 23,
    recruiterScreen: 18,
    hiringManagerScreen: 9,
    phoneInterview: 0,
    onsiteInterview: 3,
    offer: 0,
    badges: ['Priority', 'Private']
  }
];

const MyPositionsPage = () => {
  return (
    <Theme>
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
        {/* Navigation Bar */}
        <Card style={{ borderRadius: 0, borderBottom: '1px solid var(--gray-6)' }}>
          <Flex align="center" justify="between" p="4">
            <Flex align="center" gap="4">
              {/* Logo */}
              <Box style={{ width: 32, height: 32, backgroundColor: 'var(--indigo-9)', borderRadius: 4 }} />
              <Separator orientation="vertical" style={{ height: 30 }} />
              <Text size="2" weight="bold" color="gray">TALENT ACQUISITION</Text>
            </Flex>
            
            {/* Navigation Links */}
            <Flex align="center" gap="6">
              <Link href="#" style={{ textDecoration: 'none' }}>
                <Text size="2" weight="medium">Positions</Text>
              </Link>
              <Flex align="center" gap="2">
                <Text size="2">Talent</Text>
                <Icon name="expand_more" size={16} />
              </Flex>
              <Flex align="center" gap="2">
                <Text size="2">Engage</Text>
                <Icon name="expand_more" size={16} />
              </Flex>
              <Link href="#" style={{ textDecoration: 'none' }}>
                <Text size="2">Insights</Text>
              </Link>
              <Flex align="center" gap="2">
                <Text size="2">More</Text>
                <Icon name="expand_more" size={16} />
              </Flex>
            </Flex>

            {/* Right side - Search and User */}
            <Flex align="center" gap="4">
              <TextField.Root placeholder="Search for positions or candidates" style={{ width: 400 }} />
              <IconButton variant="ghost" size="2">
                <Icon name="help_outline" size={20} />
              </IconButton>
              <IconButton variant="ghost" size="2">
                <Icon name="notifications" size={20} />
              </IconButton>
              <IconButton variant="ghost" size="2">
                <Icon name="apps" size={20} />
              </IconButton>
              <Flex align="center" gap="2">
                <Box style={{ width: 36, height: 36, backgroundColor: 'var(--gray-6)', borderRadius: '50%' }} />
                <Icon name="expand_more" size={16} />
              </Flex>
            </Flex>
          </Flex>
        </Card>

        {/* Main Content */}
        <Box p="6">
          {/* Page Header */}
          <Flex align="center" justify="between" mb="6">
            <Heading size="8">Positions</Heading>
            <Button size="2">
              <Icon name="add" size={18} />
              Create Position
            </Button>
          </Flex>

          {/* Tab Navigation */}
          <Flex gap="6" mb="6">
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Text size="2">Overview</Text>
            </Link>
            <Flex direction="column" gap="1">
              <Text size="2" weight="medium">My Positions</Text>
              <Box style={{ height: 2, backgroundColor: 'var(--indigo-9)', borderRadius: 1 }} />
            </Flex>
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Text size="2">Positions To Review</Text>
            </Link>
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Text size="2">All Positions</Text>
            </Link>
          </Flex>

          {/* Search and Filters */}
          <Card mb="4">
            <Flex align="center" justify="between" p="4">
              <TextField.Root placeholder="Search positions, location, Job ID, recruiter or hiring manager..." style={{ width: 400 }} />
              
              <Flex align="center" gap="4">
                <Button variant="outline" size="2">
                  <Icon name="tune" size={18} />
                  Filters
                </Button>
                <Select.Root defaultValue="saved-filters">
                  <Select.Trigger placeholder="Select Saved Filters" style={{ width: 180 }} />
                  <Select.Content>
                    <Select.Item value="saved-filters">Saved Filters</Select.Item>
                    <Select.Item value="recent">Recent</Select.Item>
                    <Select.Item value="favorites">Favorites</Select.Item>
                  </Select.Content>
                </Select.Root>
                <Flex gap="2">
                  <Button variant="ghost" size="1">Save Filters</Button>
                  <Text size="1" color="gray">|</Text>
                  <Button variant="ghost" size="1">Delete Filters</Button>
                </Flex>
                <Text size="2" color="gray">Showing 33 positions</Text>
              </Flex>
            </Flex>
          </Card>

          {/* Data Table */}
          <Card>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Position</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    <Flex align="center" gap="2">
                      Days Open
                      <Icon name="unfold_more" size={16} />
                    </Flex>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    <Flex align="center" gap="2">
                      Leads
                      <Icon name="unfold_more" size={16} />
                    </Flex>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    <Flex align="center" gap="2">
                      New
                      <Icon name="unfold_more" size={16} />
                    </Flex>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    <Flex align="center" gap="2">
                      Recruiter Screen
                      <Icon name="unfold_more" size={16} />
                    </Flex>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    <Flex align="center" gap="2">
                      Hiring Manager Screen
                      <Icon name="unfold_more" size={16} />
                    </Flex>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    <Flex align="center" gap="2">
                      Phone Interview
                      <Icon name="unfold_more" size={16} />
                    </Flex>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    <Flex align="center" gap="2">
                      Onsite Interview
                      <Icon name="unfold_more" size={16} />
                    </Flex>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    <Flex align="center" gap="2">
                      Offer
                      <Icon name="unfold_more" size={16} />
                    </Flex>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {samplePositions.map((position) => (
                  <Table.Row key={position.id}>
                    <Table.Cell>
                      <Flex align="center" gap="3">
                        <IconButton variant="ghost" size="2">
                          <Icon name="bookmark_add" size={20} />
                        </IconButton>
                        <Flex direction="column" gap="1">
                          <Link href="#" style={{ textDecoration: 'none' }}>
                            <Text size="3" weight="medium">{position.title} ({position.id})</Text>
                          </Link>
                          <Text size="2" color="gray">
                            {position.location} • {position.recruiter} • {position.hiringManager}
                          </Text>
                          <Text size="2" color="gray">• {position.status}</Text>
                          {position.badges.length > 0 && (
                            <Flex gap="2" mt="2">
                              {position.badges.map((badge) => (
                                <Badge key={badge} variant="soft" size="1">
                                  {badge}
                                </Badge>
                              ))}
                            </Flex>
                          )}
                        </Flex>
                      </Flex>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">{position.daysOpen}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Link href="#" style={{ textDecoration: 'none' }}>
                        <Text size="2">{position.leads}</Text>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link href="#" style={{ textDecoration: 'none' }}>
                        <Text size="2">{position.new}</Text>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link href="#" style={{ textDecoration: 'none' }}>
                        <Text size="2">{position.recruiterScreen}</Text>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link href="#" style={{ textDecoration: 'none' }}>
                        <Text size="2">{position.hiringManagerScreen}</Text>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link href="#" style={{ textDecoration: 'none' }}>
                        <Text size="2">{position.phoneInterview}</Text>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link href="#" style={{ textDecoration: 'none' }}>
                        <Text size="2">{position.onsiteInterview}</Text>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link href="#" style={{ textDecoration: 'none' }}>
                        <Text size="2">{position.offer}</Text>
                      </Link>
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
          </Card>

          {/* Pagination */}
          <Flex justify="end" mt="6">
            <Pagination
              currentPage={1}
              totalPages={2}
              onPageChange={(page) => console.log('Page changed to:', page)}
              size="2"
              showFirstLast={false}
            />
          </Flex>
        </Box>
      </Box>
    </Theme>
  );
};

const meta = {
  title: 'Pages/My Positions',
  component: MyPositionsPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyPositionsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MyPositionsPage />,
};
