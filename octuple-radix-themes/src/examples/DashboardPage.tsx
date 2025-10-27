import {
  Box,
  Flex,
  Card,
  Avatar,
  Text,
  Button,
  Badge,
  Table,
  Progress,
  Separator,
} from '@radix-ui/themes';
import { Icon } from '../components/Icon';

export function DashboardPage() {
  return (
    <Box style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <Flex justify="between" align="center" mb="6">
        <Flex direction="column" gap="2">
          <Text size="7" weight="bold">
            Dashboard
          </Text>
          <Text size="3" color="gray">
            Welcome back, here's what's happening
          </Text>
        </Flex>
        <Flex gap="3">
          <Button variant="soft">
            <Icon name="download" size={18} />
            Download Report
          </Button>
          <Button>
            <Icon name="add" size={18} />
            New Project
          </Button>
        </Flex>
      </Flex>

      {/* Stats Cards */}
      <Flex gap="4" mb="6" wrap="wrap">
        <Card style={{ flex: 1, minWidth: '250px' }}>
          <Flex direction="column" gap="3">
            <Flex justify="between" align="center">
              <Text size="2" color="gray" weight="medium">
                Total Revenue
              </Text>
              <Icon name="trending_up" size={20} color="var(--green-9)" />
            </Flex>
            <Text size="7" weight="bold">
              $45,231.89
            </Text>
            <Flex gap="2" align="center">
              <Badge color="green" variant="soft">
                +20.1%
              </Badge>
              <Text size="2" color="gray">
                from last month
              </Text>
            </Flex>
          </Flex>
        </Card>

        <Card style={{ flex: 1, minWidth: '250px' }}>
          <Flex direction="column" gap="3">
            <Flex justify="between" align="center">
              <Text size="2" color="gray" weight="medium">
                Active Users
              </Text>
              <Icon name="people" size={20} color="var(--blue-9)" />
            </Flex>
            <Text size="7" weight="bold">
              2,350
            </Text>
            <Flex gap="2" align="center">
              <Badge color="blue" variant="soft">
                +180
              </Badge>
              <Text size="2" color="gray">
                since last week
              </Text>
            </Flex>
          </Flex>
        </Card>

        <Card style={{ flex: 1, minWidth: '250px' }}>
          <Flex direction="column" gap="3">
            <Flex justify="between" align="center">
              <Text size="2" color="gray" weight="medium">
                Tasks Completed
              </Text>
              <Icon name="task_alt" size={20} color="var(--indigo-9)" />
            </Flex>
            <Text size="7" weight="bold">
              573
            </Text>
            <Flex gap="2" align="center">
              <Badge color="indigo" variant="soft">
                +12.5%
              </Badge>
              <Text size="2" color="gray">
                from last month
              </Text>
            </Flex>
          </Flex>
        </Card>

        <Card style={{ flex: 1, minWidth: '250px' }}>
          <Flex direction="column" gap="3">
            <Flex justify="between" align="center">
              <Text size="2" color="gray" weight="medium">
                Response Time
              </Text>
              <Icon name="schedule" size={20} color="var(--amber-9)" />
            </Flex>
            <Text size="7" weight="bold">
              2.4s
            </Text>
            <Flex gap="2" align="center">
              <Badge color="amber" variant="soft">
                -0.3s
              </Badge>
              <Text size="2" color="gray">
                faster than average
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex gap="4" wrap="wrap">
        {/* Recent Activity */}
        <Card style={{ flex: '2', minWidth: '400px' }}>
          <Flex direction="column" gap="4">
            <Flex justify="between" align="center">
              <Text size="5" weight="bold">
                Recent Activity
              </Text>
              <Button variant="ghost" size="1">
                View all
                <Icon name="arrow_forward" size={14} />
              </Button>
            </Flex>

            <Separator size="4" />

            <Flex direction="column" gap="4">
              {[
                {
                  user: 'Sarah Johnson',
                  action: 'completed task',
                  item: '"Update landing page"',
                  time: '2 minutes ago',
                  avatar: 'SJ',
                },
                {
                  user: 'Michael Chen',
                  action: 'commented on',
                  item: '"Q4 Roadmap"',
                  time: '1 hour ago',
                  avatar: 'MC',
                },
                {
                  user: 'Emily Davis',
                  action: 'uploaded',
                  item: '3 files to project',
                  time: '3 hours ago',
                  avatar: 'ED',
                },
                {
                  user: 'Alex Thompson',
                  action: 'created',
                  item: '"New Design System"',
                  time: '5 hours ago',
                  avatar: 'AT',
                },
              ].map((activity, i) => (
                <Flex key={i} gap="3" align="center">
                  <Avatar size="2" fallback={activity.avatar} radius="full" />
                  <Flex direction="column" gap="1" style={{ flex: 1 }}>
                    <Text size="2">
                      <Text weight="bold">{activity.user}</Text>{' '}
                      {activity.action}{' '}
                      <Text weight="medium">{activity.item}</Text>
                    </Text>
                    <Text size="1" color="gray">
                      {activity.time}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Card>

        {/* Team Members */}
        <Card style={{ flex: '1', minWidth: '300px' }}>
          <Flex direction="column" gap="4">
            <Flex justify="between" align="center">
              <Text size="5" weight="bold">
                Team
              </Text>
              <Button variant="ghost" size="1">
                <Icon name="add" size={14} />
              </Button>
            </Flex>

            <Separator size="4" />

            <Flex direction="column" gap="3">
              {[
                { name: 'Sarah Johnson', role: 'Product Manager', status: 'online' },
                { name: 'Michael Chen', role: 'Engineer', status: 'online' },
                { name: 'Emily Davis', role: 'Designer', status: 'away' },
                { name: 'Alex Thompson', role: 'Engineer', status: 'offline' },
              ].map((member, i) => (
                <Flex key={i} gap="3" align="center">
                  <Avatar
                    size="2"
                    fallback={member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                    radius="full"
                  />
                  <Flex direction="column" gap="1" style={{ flex: 1 }}>
                    <Text size="2" weight="medium">
                      {member.name}
                    </Text>
                    <Text size="1" color="gray">
                      {member.role}
                    </Text>
                  </Flex>
                  <Badge
                    color={
                      member.status === 'online'
                        ? 'green'
                        : member.status === 'away'
                        ? 'amber'
                        : 'gray'
                    }
                    variant="soft"
                  >
                    {member.status}
                  </Badge>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Card>
      </Flex>

      {/* Project Progress */}
      <Card mt="4">
        <Flex direction="column" gap="4">
          <Text size="5" weight="bold">
            Project Progress
          </Text>

          <Separator size="4" />

          <Flex direction="column" gap="4">
            {[
              { name: 'Website Redesign', progress: 75, color: 'indigo' as const },
              { name: 'Mobile App', progress: 45, color: 'blue' as const },
              { name: 'API Integration', progress: 90, color: 'green' as const },
              { name: 'Documentation', progress: 30, color: 'amber' as const },
            ].map((project, i) => (
              <Flex key={i} direction="column" gap="2">
                <Flex justify="between" align="center">
                  <Text size="2" weight="medium">
                    {project.name}
                  </Text>
                  <Text size="2" color="gray">
                    {project.progress}%
                  </Text>
                </Flex>
                <Progress value={project.progress} color={project.color} />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
}

