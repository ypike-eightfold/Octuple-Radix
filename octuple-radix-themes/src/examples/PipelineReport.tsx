import React, { useState } from 'react';
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Badge,
  Select,
  Table,
  TextField
} from '@radix-ui/themes';
import { Icon } from '../components/Icon';
import { pipelineMetrics, dailyTrends, pipelineCandidates, jobPositionOptions } from './data/mockData';
import { PipelineCandidate } from './data/types';

interface PipelineReportProps {
  version?: 'radix' | 'v2.5';
}

export const PipelineReport: React.FC<PipelineReportProps> = ({ version = 'radix' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('product-designer');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredCandidates = pipelineCandidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCandidates = filteredCandidates.slice(startIndex, startIndex + itemsPerPage);

  // Simple Chart Component (SVG-based funnel)
  const FunnelChart = () => {
    const data = [
      { stage: 'Applied', value: pipelineMetrics.stages.applied, color: '#3b82f6' },
      { stage: 'Under Review', value: pipelineMetrics.stages.underReview, color: '#f59e0b' },
      { stage: 'Interviewed', value: pipelineMetrics.stages.interviewed, color: '#8b5cf6' },
      { stage: 'Offered', value: pipelineMetrics.stages.offered, color: '#10b981' },
      { stage: 'Hired', value: pipelineMetrics.stages.hired, color: '#06b6d4' }
    ];

    const maxValue = Math.max(...data.map(d => d.value));

    return (
      <Box style={{ padding: '20px' }}>
        <Flex direction="column" gap="3">
          {data.map((item, index) => {
            const width = (item.value / maxValue) * 100;
            return (
              <Flex key={item.stage} align="center" gap="3">
                <Text size="2" style={{ minWidth: '100px' }}>{item.stage}</Text>
                <Box style={{ flex: 1, position: 'relative' }}>
                  <Box
                    style={{
                      width: `${width}%`,
                      height: '32px',
                      backgroundColor: item.color,
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '60px'
                    }}
                  >
                    <Text size="2" style={{ color: 'white', fontWeight: 'bold' }}>
                      {item.value}
                    </Text>
                  </Box>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    );
  };

  // Simple Line Chart Component
  const TrendChart = () => {
    const maxValue = Math.max(...dailyTrends.map(d => d.applications));
    const chartHeight = 200;
    const chartWidth = 400;

    const points = dailyTrends.map((point, index) => {
      const x = (index / (dailyTrends.length - 1)) * chartWidth;
      const y = chartHeight - ((point.applications / maxValue) * (chartHeight - 40));
      return { x, y, value: point.applications, date: point.date };
    });

    const pathData = points.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');

    return (
      <Box style={{ padding: '20px' }}>
        <svg width={chartWidth} height={chartHeight} style={{ overflow: 'visible' }}>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="0"
              y1={i * (chartHeight / 4)}
              x2={chartWidth}
              y2={i * (chartHeight / 4)}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          ))}
          
          {/* Chart line */}
          <path
            d={pathData}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#3b82f6"
            />
          ))}
          
          {/* X-axis labels */}
          {points.map((point, index) => (
            <text
              key={index}
              x={point.x}
              y={chartHeight + 15}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {point.date}
            </text>
          ))}
        </svg>
      </Box>
    );
  };

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)', padding: '24px' }}>
      <Box style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <Flex justify="between" align="center" style={{ marginBottom: '24px' }}>
          <Box>
            <Flex gap="2" align="center">
              <Heading size="6">Pipeline Progress Report</Heading>
              <Select.Root value={selectedPosition} onValueChange={setSelectedPosition}>
                <Select.Trigger>
                  Product Designer
                </Select.Trigger>
                <Select.Content>
                  {jobPositionOptions.map(option => (
                    <Select.Item key={option.value} value={option.value}>
                      {option.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>
          </Box>
          
          <Flex gap="3">
            <Button variant="ghost">
              <Icon name="filter_list" size={16} />
              Filter
            </Button>
            <Button>
              <Icon name="download" size={16} />
              Export
            </Button>
          </Flex>
        </Flex>

        <Grid columns="2" gap="6" style={{ marginBottom: '24px' }}>
          {/* Funnel Chart */}
          <Card>
            <Box style={{ padding: '20px' }}>
              <Heading size="4" style={{ marginBottom: '16px' }}>
                Candidate Pipeline Funnel
              </Heading>
              <FunnelChart />
            </Box>
          </Card>

          {/* Trend Chart */}
          <Card>
            <Box style={{ padding: '20px' }}>
              <Flex justify="between" align="center" style={{ marginBottom: '16px' }}>
                <Heading size="4">Daily Application Trends</Heading>
                <Flex gap="2">
                  <Button variant="soft" size="1">7 Days</Button>
                  <Button variant="ghost" size="1">14 Days</Button>
                  <Button variant="ghost" size="1">1 Month</Button>
                  <Button variant="ghost" size="1">2 Months</Button>
                  <Button variant="ghost" size="1">3 Months</Button>
                </Flex>
              </Flex>
              <TrendChart />
            </Box>
          </Card>
        </Grid>

        {/* Data Table */}
        <Card>
          <Box style={{ padding: '20px' }}>
            <Flex justify="between" align="center" style={{ marginBottom: '16px' }}>
              <Heading size="4">
                Candidate Pipeline Details 
                <Badge variant="soft" style={{ marginLeft: '8px' }}>
                  Total: {pipelineCandidates.length}
                </Badge>
              </Heading>
              
              <TextField.Root
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '300px' }}
              >
                <TextField.Slot>
                  <Icon name="search" size={16} />
                </TextField.Slot>
              </TextField.Root>
            </Flex>

            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Candidate Name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Applied</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Under Review</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Interviewed</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Offered</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Hired</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {paginatedCandidates.map((candidate) => (
                  <Table.Row key={candidate.id}>
                    <Table.RowHeaderCell>
                      <Flex gap="2" align="center">
                        <Box
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--blue-9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 'bold'
                          }}
                        >
                          {candidate.name.split(' ').map(n => n[0]).join('')}
                        </Box>
                        {candidate.name}
                      </Flex>
                    </Table.RowHeaderCell>
                    <Table.Cell>{candidate.applied}</Table.Cell>
                    <Table.Cell>{candidate.underReview}</Table.Cell>
                    <Table.Cell>{candidate.interviewed}</Table.Cell>
                    <Table.Cell>{candidate.offered}</Table.Cell>
                    <Table.Cell>{candidate.hired}</Table.Cell>
                    <Table.Cell>
                      <Button variant="ghost" size="1">
                        View
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>

            {/* Pagination */}
            <Flex justify="between" align="center" style={{ marginTop: '16px', padding: '0 8px' }}>
              <Text size="2" color="gray">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredCandidates.length)} of {filteredCandidates.length} candidates
              </Text>
              
              <Flex gap="2">
                <Button 
                  variant="ghost" 
                  size="2"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "solid" : "ghost"}
                    size="2"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="ghost"
                  size="2"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                >
                  Next
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
