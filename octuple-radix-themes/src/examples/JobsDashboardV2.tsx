import React, { useState, useMemo } from 'react';
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  Tabs,
  Avatar,
  Separator
} from '@radix-ui/themes';
import { 
  ButtonV2,
  TextFieldV2, 
  SelectV2
} from '../index';
import { Icon } from '../components/Icon';
import { jobPostings, dashboardMetrics, jobPositionOptions } from './data/mockData';
import { JobPosting, JobFilter } from './data/types';

interface JobsDashboardV2Props {
  version?: 'radix' | 'v2.5';
}

export const JobsDashboardV2: React.FC<JobsDashboardV2Props> = ({ version = 'v2.5' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [filters, setFilters] = useState<JobFilter>({ status: 'All' });

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'open', label: 'Open' },
    { value: 'pending', label: 'Pending Approval' },
    { value: 'expired', label: 'Expired' }
  ];

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

      // Filter by dropdown status
      const matchesStatus = selectedStatus === 'all' ||
                           (selectedStatus === 'open' && job.status === 'Open') ||
                           (selectedStatus === 'pending' && job.status === 'Pending Approval') ||
                           (selectedStatus === 'expired' && job.status === 'Expired');

      return matchesSearch && matchesTab && matchesStatus;
    });
  }, [searchTerm, selectedTab, selectedStatus]);

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
          <ButtonV2 size="small" variant="secondary">
            <Icon name="edit" size={14} />
            Edit
          </ButtonV2>
          <ButtonV2 size="small" variant="neutral">
            <Icon name="visibility" size={14} />
            View job post
          </ButtonV2>
          <ButtonV2 size="small" variant="primary">
            <Icon name="group" size={14} />
            View Candidates
          </ButtonV2>
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
            <ButtonV2 variant="neutral" size="medium" style={{ justifyContent: 'flex-start', width: '100%' }}>
              Home
            </ButtonV2>
            <ButtonV2 variant="primary" size="medium" style={{ justifyContent: 'flex-start', width: '100%' }}>
              Jobs
            </ButtonV2>
            <ButtonV2 variant="default" size="medium" style={{ justifyContent: 'flex-start', width: '100%' }}>
              Candidates
            </ButtonV2>
            <ButtonV2 variant="default" size="medium" style={{ justifyContent: 'flex-start', width: '100%' }}>
              Calendar
            </ButtonV2>
            <ButtonV2 variant="default" size="medium" style={{ justifyContent: 'flex-start', width: '100%' }}>
              Reports
            </ButtonV2>
            <ButtonV2 variant="default" size="medium" style={{ justifyContent: 'flex-start', width: '100%' }}>
              Settings
            </ButtonV2>
          </Flex>
        </Box>

        {/* Main Content */}
        <Box style={{ flex: 1, padding: '24px' }}>
          {/* Header */}
          <Flex justify="between" align="center" style={{ marginBottom: '24px' }}>
            <Heading size="6">Jobs <Badge variant="soft" color="blue">V2.5</Badge></Heading>
            <ButtonV2 variant="primary" size="large">
              <Icon name="add" size={16} />
              Create new job
            </ButtonV2>
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

          {/* Enhanced Filters and Search with V2.5 Components */}
          <Card style={{ padding: '16px', marginBottom: '24px' }}>
            <Flex gap="4" align="center">
              <Box style={{ flex: 1 }}>
                <TextFieldV2
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  size="large"
                  shape="rounded"
                />
              </Box>
              <SelectV2
                options={statusOptions}
                value={selectedStatus}
                onChange={(value) => setSelectedStatus(value as string)}
                placeholder="Filter by status"
                shape="rounded"
                size="large"
                style={{ minWidth: '200px' }}
              />
              <SelectV2
                options={jobPositionOptions}
                value="all"
                onChange={() => {}}
                placeholder="Job Position"
                shape="pill"
                size="large"
                style={{ minWidth: '180px' }}
              />
            </Flex>
          </Card>

          {/* Enhanced Filter Tabs */}
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

          {/* Enhanced Empty State */}
          {filteredJobs.length === 0 && (
            <Card style={{ padding: '40px', marginTop: '24px' }}>
              <Flex direction="column" justify="center" align="center" gap="3">
                <Box style={{ fontSize: '48px', color: 'var(--gray-8)' }}>🔍</Box>
                <Heading size="4">No jobs found</Heading>
                <Text color="gray" style={{ textAlign: 'center', maxWidth: '300px' }}>
                  No jobs match your current filters. Try adjusting your search terms or filter criteria.
                </Text>
                <ButtonV2 
                  variant="secondary" 
                  size="medium"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTab('all');
                    setSelectedStatus('all');
                  }}
                >
                  Clear Filters
                </ButtonV2>
              </Flex>
            </Card>
          )}

          {/* V2.5 Feature Showcase */}
          <Card style={{ padding: '16px', marginTop: '24px', backgroundColor: 'var(--indigo-2)' }}>
            <Flex gap="3" align="center">
              <Box>
                <Text size="2" weight="bold" color="indigo">🎉 V2.5 Features Demonstrated</Text>
                <Text size="1" color="gray">
                  ButtonV2 variants (8 types) • SelectV2 with shapes • TextFieldV2 with enhanced styling • Improved UX
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
};
