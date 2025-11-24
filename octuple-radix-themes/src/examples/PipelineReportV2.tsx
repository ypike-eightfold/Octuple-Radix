import React, { useState } from 'react';
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  Avatar
} from '@radix-ui/themes';
import { 
  ButtonV2,
  SelectV2,
  EnhancedTable
} from '../index';
import { Icon } from '../components/Icon';
import { pipelineMetrics, dailyTrends, pipelineCandidates, jobPositionOptions } from './data/mockData';
import { PipelineCandidate, ColumnDef } from './data/types';

interface PipelineReportV2Props {
  version?: 'radix' | 'v2.5';
}

export const PipelineReportV2: React.FC<PipelineReportV2Props> = ({ version = 'v2.5' }) => {
  const [selectedPosition, setSelectedPosition] = useState('product-designer');

  const timeframeOptions = [
    { value: '7days', label: '7 Days' },
    { value: '14days', label: '14 Days' },
    { value: '1month', label: '1 Month' },
    { value: '2months', label: '2 Months' },
    { value: '3months', label: '3 Months' }
  ];

  // Enhanced Chart Component (SVG-based funnel)
  const FunnelChart = () => {
    const data = [
      { stage: 'Applied', value: pipelineMetrics.stages.applied, color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
      { stage: 'Under Review', value: pipelineMetrics.stages.underReview, color: 'linear-gradient(135deg, #f59e0b, #d97706)' },
      { stage: 'Interviewed', value: pipelineMetrics.stages.interviewed, color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
      { stage: 'Offered', value: pipelineMetrics.stages.offered, color: 'linear-gradient(135deg, #10b981, #059669)' },
      { stage: 'Hired', value: pipelineMetrics.stages.hired, color: 'linear-gradient(135deg, #06b6d4, #0891b2)' }
    ];

    const maxValue = Math.max(...data.map(d => d.value));

    return (
      <Box style={{ padding: '20px' }}>
        <Flex direction="column" gap="4">
          {data.map((item, index) => {
            const width = (item.value / maxValue) * 100;
            return (
              <Flex key={item.stage} align="center" gap="3">
                <Text size="2" weight="medium" style={{ minWidth: '100px' }}>{item.stage}</Text>
                <Box style={{ flex: 1, position: 'relative' }}>
                  <Box
                    style={{
                      width: `${width}%`,
                      height: '40px',
                      background: item.color,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '80px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Text size="2" style={{ color: 'white', fontWeight: 'bold' }}>
                      {item.value}
                    </Text>
                  </Box>
                </Box>
                <Text size="2" color="gray" style={{ minWidth: '60px', textAlign: 'right' }}>
                  {((item.value / pipelineMetrics.stages.applied) * 100).toFixed(1)}%
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    );
  };

  // Enhanced Line Chart Component
  const TrendChart = () => {
    const maxValue = Math.max(...dailyTrends.map(d => d.applications));
    const chartHeight = 200;
    const chartWidth = 450;

    const points = dailyTrends.map((point, index) => {
      const x = (index / (dailyTrends.length - 1)) * (chartWidth - 40) + 20;
      const y = chartHeight - ((point.applications / maxValue) * (chartHeight - 60)) - 20;
      return { x, y, value: point.applications, date: point.date };
    });

    const pathData = points.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');

    return (
      <Box style={{ padding: '20px' }}>
        <svg width={chartWidth} height={chartHeight + 40} style={{ overflow: 'visible' }}>
          {/* Background gradient */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="20"
              y1={20 + i * ((chartHeight - 40) / 4)}
              x2={chartWidth - 20}
              y2={20 + i * ((chartHeight - 40) / 4)}
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          ))}
          
          {/* Area fill */}
          <path
            d={`${pathData} L ${points[points.length - 1].x} ${chartHeight - 20} L ${points[0].x} ${chartHeight - 20} Z`}
            fill="url(#chartGradient)"
          />
          
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
            <g key={index}>
              <circle cx={point.x} cy={point.y} r="6" fill="white" stroke="#3b82f6" strokeWidth="3" />
              <circle cx={point.x} cy={point.y} r="2" fill="#3b82f6" />
            </g>
          ))}
          
          {/* X-axis labels */}
          {points.map((point, index) => (
            <text
              key={index}
              x={point.x}
              y={chartHeight + 15}
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              fontWeight="500"
            >
              {point.date}
            </text>
          ))}
        </svg>
      </Box>
    );
  };

  // Enhanced Table Columns for V2.5
  const columns: ColumnDef<PipelineCandidate>[] = [
    {
      id: 'name',
      header: 'Candidate Name',
      accessorKey: 'name',
      cell: ({ row }) => (
        <Flex gap="3" align="center">
          <Avatar size="2" fallback={row.original.name.split(' ').map(n => n[0]).join('')} />
          <Text size="2" weight="medium">{row.original.name}</Text>
        </Flex>
      ),
      sortable: true
    },
    {
      id: 'applied',
      header: 'Applied',
      accessorKey: 'applied',
      cell: ({ row }) => <Text size="2">{row.original.applied}</Text>,
      sortable: true
    },
    {
      id: 'underReview',
      header: 'Under Review',
      accessorKey: 'underReview', 
      cell: ({ row }) => (
        <Text size="2" color={row.original.underReview === '--' ? 'gray' : undefined}>
          {row.original.underReview}
        </Text>
      ),
      sortable: true
    },
    {
      id: 'interviewed',
      header: 'Interviewed',
      accessorKey: 'interviewed',
      cell: ({ row }) => (
        <Text size="2" color={row.original.interviewed === '--' ? 'gray' : undefined}>
          {row.original.interviewed}
        </Text>
      ),
      sortable: true
    },
    {
      id: 'offered',
      header: 'Offered', 
      accessorKey: 'offered',
      cell: ({ row }) => (
        <Text size="2" color={row.original.offered === '--' ? 'gray' : undefined}>
          {row.original.offered}
        </Text>
      ),
      sortable: true
    },
    {
      id: 'hired',
      header: 'Hired',
      accessorKey: 'hired',
      cell: ({ row }) => (
        <Text size="2" color={row.original.hired === '--' ? 'gray' : undefined}>
          {row.original.hired}
        </Text>
      ),
      sortable: true
    },
    {
      id: 'currentStage',
      header: 'Current Stage',
      accessorKey: 'currentStage',
      cell: ({ row }) => {
        const getStageColor = (stage: string) => {
          switch (stage) {
            case 'Applied': return 'blue';
            case 'Under Review': return 'orange';
            case 'Interviewed': return 'purple';
            case 'Offered': return 'green';
            case 'Hired': return 'cyan';
            default: return 'gray';
          }
        };
        return (
          <Badge color={getStageColor(row.original.currentStage)} variant="soft">
            {row.original.currentStage}
          </Badge>
        );
      },
      sortable: true
    },
    {
      id: 'actions',
      header: 'Action',
      cell: ({ row }) => (
        <ButtonV2 variant="secondary" size="small">
          View Details
        </ButtonV2>
      )
    }
  ];

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)', padding: '24px' }}>
      <Box style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Enhanced Header */}
        <Flex justify="between" align="center" style={{ marginBottom: '24px' }}>
          <Box>
            <Flex gap="3" align="center">
              <Heading size="6">Pipeline Progress Report</Heading>
              <Badge variant="soft" color="indigo">V2.5</Badge>
              <SelectV2
                options={jobPositionOptions}
                value={selectedPosition}
                onChange={(value) => setSelectedPosition(value as string)}
                placeholder="Select Position"
                shape="pill"
                size="medium"
                style={{ minWidth: '200px' }}
              />
            </Flex>
          </Box>
          
          <Flex gap="3">
            <ButtonV2 variant="secondary" size="medium">
              <Icon name="filter_list" size={16} />
              Advanced Filter
            </ButtonV2>
            <ButtonV2 variant="primary" size="medium">
              <Icon name="download" size={16} />
              Export Report
            </ButtonV2>
          </Flex>
        </Flex>

        <Grid columns="2" gap="6" style={{ marginBottom: '24px' }}>
          {/* Enhanced Funnel Chart */}
          <Card style={{ background: 'linear-gradient(135deg, var(--blue-2), var(--indigo-2))' }}>
            <Box style={{ padding: '24px' }}>
              <Flex justify="between" align="center" style={{ marginBottom: '20px' }}>
                <Heading size="4">Candidate Pipeline Funnel</Heading>
                <Badge variant="soft" color="blue">
                  Total: {pipelineMetrics.totalCandidates}
                </Badge>
              </Flex>
              <FunnelChart />
            </Box>
          </Card>

          {/* Enhanced Trend Chart */}
          <Card style={{ background: 'linear-gradient(135deg, var(--green-2), var(--teal-2))' }}>
            <Box style={{ padding: '24px' }}>
              <Flex justify="between" align="center" style={{ marginBottom: '20px' }}>
                <Heading size="4">Daily Application Trends</Heading>
                <SelectV2
                  options={timeframeOptions}
                  value="7days"
                  onChange={() => {}}
                  placeholder="Timeframe"
                  shape="rounded"
                  size="small"
                  style={{ minWidth: '120px' }}
                />
              </Flex>
              <TrendChart />
            </Box>
          </Card>
        </Grid>

        {/* Enhanced Data Table with V2.5 EnhancedTable */}
        <Card>
          <Box style={{ padding: '24px' }}>
            <Flex justify="between" align="center" style={{ marginBottom: '20px' }}>
              <Heading size="4">
                Candidate Pipeline Details 
                <Badge variant="soft" color="blue" style={{ marginLeft: '8px' }}>
                  Total: {pipelineCandidates.length}
                </Badge>
              </Heading>
            </Flex>

            <EnhancedTable
              data={pipelineCandidates}
              columns={columns}
              searchable={true}
              searchPlaceholder="Search candidates..."
              sortable={true}
              selectable={true}
              pagination={{
                enabled: true,
                pageSize: 5,
                showSizeSelector: true,
                pageSizeOptions: [5, 10, 20]
              }}
              variant="striped"
              size="medium"
              emptyState={{
                message: "No candidates found",
                description: "Try adjusting your search criteria or filters."
              }}
              loading={false}
            />
          </Box>
        </Card>

        {/* V2.5 Features Showcase */}
        <Card style={{ 
          padding: '20px', 
          marginTop: '24px', 
          background: 'linear-gradient(135deg, var(--indigo-2), var(--purple-2))'
        }}>
          <Flex gap="4" align="center">
            <Box>
              <Text size="3" weight="bold" color="indigo">🚀 V2.5 Enhanced Features</Text>
              <Text size="2" color="gray">
                EnhancedTable with sorting, pagination, search • SelectV2 with shapes • ButtonV2 variants • Advanced data visualization
              </Text>
            </Box>
            <Flex gap="2">
              <Badge variant="soft" color="blue">Sortable</Badge>
              <Badge variant="soft" color="green">Searchable</Badge>
              <Badge variant="soft" color="purple">Selectable</Badge>
              <Badge variant="soft" color="orange">Paginated</Badge>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </Box>
  );
};
