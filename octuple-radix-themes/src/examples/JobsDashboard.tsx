import React, { useState, useMemo } from 'react';
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Badge,
  Tabs,
  TextField,
  Select,
  Avatar,
  Separator
} from '@radix-ui/themes';
import { Icon } from '../components/Icon';
import { jobPostings, dashboardMetrics } from './data/mockData';
import { JobPosting, JobFilter } from './data/types';

interface JobsDashboardProps {
  version?: 'radix' | 'v2.5';
}

export const JobsDashboard: React.FC<JobsDashboardProps> = ({ version = 'radix' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');
  const [filters, setFilters] = useState<JobFilter>({ status: 'All' });

  const filteredJobs = useMemo(() => {
    return jobPostings.filter(job => {
      // Filter by search term
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by tab/status
      const matchesTab = selectedTab === 'all' || 
                        (selectedTab === 'open' && job.status === 'Open') ||
                        (selectedTab === 'pending' && job.status === 'Pending Approval') ||
                        (selectedTab === 'expired' && job.status === 'Expired');

      return matchesSearch && matchesTab;
    });
  }, [searchTerm, selectedTab]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'green';
      case 'Pending Approval': return 'orange';
      case 'Expired': return 'red';
      default: return 'gray';
    }
  };

  const JobCard = ({ job }: { job: JobPosting }) => (
    <Card key={job.id} style={{ padding: '16px' }}>
      <Flex direction="column" gap="3">
        <Flex justify="between" align="start">
          <Box>
            <Heading size="3">{job.title}</Heading>
            <Text size="2" color="gray">{job.department} • {job.location}</Text>
          </Box>
          <Badge color={getStatusColor(job.status)} variant="soft">
            {job.status}
          </Badge>
        </Flex>

        <Grid columns="4" gap="2" style={{ marginTop: '8px' }}>
          <Flex direction="column" align="center">
            <Text size="2" weight="bold">{job.applicants.applied}</Text>
            <Text size="1" color="gray">Applied</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Text size="2" weight="bold">{job.applicants.underReview}</Text>
            <Text size="1" color="gray">Under Review</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Text size="2" weight="bold">{job.applicants.interviewed}</Text>
            <Text size="1" color="gray">Interviewed</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Text size="2" weight="bold">{job.applicants.hired}</Text>
            <Text size="1" color="gray">Hired</Text>
          </Flex>
        </Grid>

        <Flex gap="2" justify="end" style={{ marginTop: '8px' }}>
          <Button size="1" variant="ghost">
            <Icon name="edit" size={14} />
            Edit
          </Button>
          <Button size="1" variant="ghost">
            <Icon name="visibility" size={14} />
            View job post
          </Button>
          <Button size="1" variant="soft">
            <Icon name="group" size={14} />
            View Candidates
          </Button>
        </Flex>
      </Flex>
    </Card>
  );

  const MetricCard = ({ title, value, subtitle }: { title: string; value: number; subtitle?: string }) => (
    <Card style={{ padding: '20px', textAlign: 'center' }}>
      <Flex direction="column" gap="1">
        <Text size="1" color="gray" weight="medium">{title}</Text>
        <Heading size="6">{value}</Heading>
        {subtitle && <Text size="1" color="gray">{subtitle}</Text>}
      </Flex>
    </Card>
  );

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
      <Flex>
        {/* Sidebar Navigation */}
        <Box style={{ 
          width: '240px', 
          backgroundColor: 'var(--color-surface)',
          borderRight: '1px solid var(--gray-6)',
          padding: '16px'
        }}>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold" style={{ padding: '8px' }}>Navigation</Text>
            <Button variant="soft" style={{ justifyContent: 'flex-start' }}>Home</Button>
            <Button variant="solid" style={{ justifyContent: 'flex-start' }}>Jobs</Button>
            <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Candidates</Button>
            <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Calendar</Button>
            <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Reports</Button>
            <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Settings</Button>
          </Flex>
        </Box>

        {/* Main Content */}
        <Box style={{ flex: 1, padding: '24px' }}>
          {/* Header */}
          <Flex justify="between" align="center" style={{ marginBottom: '24px' }}>
            <Heading size="6">Jobs</Heading>
            <Button>
              <Icon name="add" size={16} />
              Create new job
            </Button>
          </Flex>

          {/* Metrics Cards */}
          <Grid columns="4" gap="4" style={{ marginBottom: '24px' }}>
            <MetricCard title="Open Positions" value={dashboardMetrics.openPositions} />
            <MetricCard title="Active Job Posts" value={dashboardMetrics.activeJobPosts} />
            <MetricCard title="Pending Approval" value={dashboardMetrics.pendingApproval} />
            <MetricCard 
              title="Expired Posts" 
              value={dashboardMetrics.expiredPosts}
              subtitle="Closed last week"
            />
          </Grid>

          {/* Filters and Search */}
          <Card style={{ padding: '16px', marginBottom: '24px' }}>
            <Flex gap="4" align="center">
              <Box style={{ flex: 1 }}>
                <TextField.Root
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                >
                  <TextField.Slot>
                    <Icon name="search" size={16} />
                  </TextField.Slot>
                </TextField.Root>
              </Box>
              <Select.Root value="all" onValueChange={() => {}}>
                <Select.Trigger placeholder="Filter by status" />
                <Select.Content>
                  <Select.Item value="all">All Status</Select.Item>
                  <Select.Item value="open">Open</Select.Item>
                  <Select.Item value="pending">Pending</Select.Item>
                  <Select.Item value="expired">Expired</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Card>

          {/* Filter Tabs */}
          <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
            <Tabs.List>
              <Tabs.Trigger value="all">All</Tabs.Trigger>
              <Tabs.Trigger value="open">Open</Tabs.Trigger>
              <Tabs.Trigger value="pending">Pending Approval</Tabs.Trigger>
              <Tabs.Trigger value="expired">Expired</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          {/* Jobs Grid */}
          <Box style={{ marginTop: '16px' }}>
            <Grid columns="1" gap="3">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </Grid>
          </Box>

          {filteredJobs.length === 0 && (
            <Flex justify="center" align="center" style={{ height: '200px' }}>
              <Text color="gray">No jobs found matching your filters.</Text>
            </Flex>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
