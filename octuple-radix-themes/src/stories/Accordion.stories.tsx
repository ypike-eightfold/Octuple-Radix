import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../components/Accordion';
import { Text, Flex, Button, IconButton } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    value: 'item-1',
    title: 'What is Octuple Radix?',
    children: 'Octuple Radix is a modern design system built on Radix Themes, configured specifically for Eightfold AI with indigo accent color, Poppins font, and Material Symbols icons.',
  },
  {
    value: 'item-2',
    title: 'How do I get started?',
    children: 'Install the package with npm install @eightfold.ai/octuple-radix, wrap your app with ThemeProvider, and start using the components.',
  },
  {
    value: 'item-3',
    title: 'What components are available?',
    children: 'Octuple Radix includes all Radix Themes components plus additional custom components like Toast, Accordion, and more. Check the documentation for the full list.',
  },
];

export const Default: Story = {
  render: () => (
    <Accordion items={sampleItems} collapsible />
  ),
};

export const SingleOpen: Story = {
  render: () => (
    <Accordion
      type="single"
      defaultValue="item-2"
      collapsible
      items={sampleItems}
    />
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <Accordion
      type="multiple"
      defaultValue={['item-1', 'item-3']}
      items={sampleItems}
    />
  ),
};

export const RichContent: Story = {
  render: () => (
    <Accordion collapsible>
      <AccordionItem value="features" title="Key Features">
        <Flex direction="column" gap="2">
          <Text size="2">• Built on Radix Themes for consistency</Text>
          <Text size="2">• Indigo accent color throughout</Text>
          <Text size="2">• Poppins font family</Text>
          <Text size="2">• Material Symbols Outlined icons</Text>
          <Text size="2">• Fully accessible components</Text>
        </Flex>
      </AccordionItem>
      <AccordionItem value="installation" title="Installation">
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Step 1: Install the package</Text>
          <Text size="2" style={{ fontFamily: 'monospace', background: 'var(--gray-3)', padding: '8px', borderRadius: '4px' }}>
            npm install @eightfold.ai/octuple-radix
          </Text>
          <Text size="2" weight="bold" style={{ marginTop: '8px' }}>Step 2: Import styles</Text>
          <Text size="2" style={{ fontFamily: 'monospace', background: 'var(--gray-3)', padding: '8px', borderRadius: '4px' }}>
            import '@eightfold.ai/octuple-radix/styles.css'
          </Text>
        </Flex>
      </AccordionItem>
      <AccordionItem value="usage" title="Basic Usage">
        <Text size="2">
          Wrap your application with ThemeProvider and start using components. 
          All Radix Themes components are available, plus custom components like this Accordion.
        </Text>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      items={[
        {
          value: 'q1',
          title: 'Is Octuple Radix free to use?',
          children: 'Yes, Octuple Radix is open source and free to use in your projects.',
        },
        {
          value: 'q2',
          title: 'Can I customize the theme?',
          children: 'Absolutely! You can customize accent colors, font families, border radius, and more through the ThemeProvider props.',
        },
        {
          value: 'q3',
          title: 'Does it support dark mode?',
          children: 'Yes, Radix Themes includes built-in dark mode support. You can toggle it using the appearance prop on ThemeProvider.',
        },
        {
          value: 'q4',
          title: 'Is it accessible?',
          children: 'Yes! Octuple Radix is built on Radix Primitives which follow WAI-ARIA guidelines and best practices for accessibility.',
        },
        {
          value: 'q5',
          title: 'Can I use it with TypeScript?',
          children: 'Yes, Octuple Radix is written in TypeScript and includes full type definitions out of the box.',
        },
      ]}
    />
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion collapsible>
      <AccordionItem value="enabled-1" title="Active Section 1">
        <Text size="2">This section is enabled and can be toggled.</Text>
      </AccordionItem>
      <AccordionItem value="disabled" title="Disabled Section" disabled>
        <Text size="2">This content cannot be accessed.</Text>
      </AccordionItem>
      <AccordionItem value="enabled-2" title="Active Section 2">
        <Text size="2">This section is also enabled.</Text>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Accordion collapsible>
      <AccordionItem value="inbox" title="Inbox" badge={12}>
        <Text size="2">You have 12 unread messages in your inbox.</Text>
      </AccordionItem>
      <AccordionItem value="tasks" title="Tasks" badge="3">
        <Text size="2">You have 3 pending tasks to complete.</Text>
      </AccordionItem>
      <AccordionItem value="completed" title="Completed" badge={0}>
        <Text size="2">No completed items yet.</Text>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <Accordion collapsible>
      <AccordionItem 
        value="api-settings" 
        title="API Configuration"
        description="Configure API endpoints and authentication settings"
      >
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Base URL</Text>
          <Text size="2">https://api.example.com/v1</Text>
          <Text size="2" weight="bold">Authentication</Text>
          <Text size="2">API Key authentication is enabled</Text>
        </Flex>
      </AccordionItem>
      <AccordionItem 
        value="notifications" 
        title="Notification Preferences"
        description="Manage how and when you receive notifications"
      >
        <Flex direction="column" gap="2">
          <Text size="2">• Email notifications: Enabled</Text>
          <Text size="2">• Push notifications: Disabled</Text>
          <Text size="2">• Weekly digest: Enabled</Text>
        </Flex>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithActions: Story = {
  render: () => {
    const handleSettings = (e: React.MouseEvent) => {
      e.preventDefault();
      console.log('Settings clicked');
    };

    const handleDelete = (e: React.MouseEvent) => {
      e.preventDefault();
      console.log('Delete clicked');
    };

    return (
      <Accordion collapsible>
        <AccordionItem 
          value="project-1" 
          title="Website Redesign"
          actions={
            <>
              <IconButton variant="soft" onClick={handleSettings} aria-label="Settings">
                <Icon name="settings" size={16} />
              </IconButton>
              <IconButton variant="soft" color="red" onClick={handleDelete} aria-label="Delete">
                <Icon name="delete" size={16} />
              </IconButton>
            </>
          }
        >
          <Text size="2">Complete redesign of the company website with modern UI/UX principles.</Text>
        </AccordionItem>
        <AccordionItem 
          value="project-2" 
          title="Mobile App Development"
          actions={
            <IconButton variant="soft" onClick={handleSettings} aria-label="More options">
              <Icon name="more_vert" size={16} />
            </IconButton>
          }
        >
          <Text size="2">Develop native mobile applications for iOS and Android platforms.</Text>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const AllFeaturesCombined: Story = {
  render: () => {
    const handleEdit = () => console.log('Edit clicked');
    const handleShare = () => console.log('Share clicked'); 
    const handleArchive = () => console.log('Archive clicked');

    return (
      <Accordion type="multiple" defaultValue={['agent-1']}>
        <AccordionItem 
          value="agent-1" 
          title="Customer Support Agent"
          description="AI agent specialized in handling customer inquiries and support tickets"
          badge={24}
          actions={
            <>
              <IconButton variant="soft" onClick={handleEdit} aria-label="Edit agent">
                <Icon name="edit" size={16} />
              </IconButton>
              <IconButton variant="soft" onClick={handleShare} aria-label="Share agent">
                <Icon name="share" size={16} />
              </IconButton>
            </>
          }
        >
          <Flex direction="column" gap="3">
            <Text size="2" weight="bold">Agent Status: Active</Text>
            <Text size="2">This agent has processed 24 support tickets today with an average response time of 2.3 seconds.</Text>
            <Flex gap="2">
              <Text size="2">• Language Models: GPT-4, Claude 3</Text>
            </Flex>
            <Flex gap="2">
              <Text size="2">• Integrations: Zendesk, Slack, Email</Text>
            </Flex>
          </Flex>
        </AccordionItem>
        
        <AccordionItem 
          value="agent-2" 
          title="Data Analysis Agent"
          description="Processes and analyzes large datasets to generate insights"
          badge="Running"
          actions={
            <>
              <IconButton variant="soft" onClick={handleEdit} aria-label="Configure agent">
                <Icon name="tune" size={16} />
              </IconButton>
              <IconButton variant="soft" color="orange" onClick={handleArchive} aria-label="Pause agent">
                <Icon name="pause" size={16} />
              </IconButton>
            </>
          }
        >
          <Flex direction="column" gap="2">
            <Text size="2">Currently analyzing Q3 sales data across 15 regions.</Text>
            <Text size="2">• Progress: 78% complete</Text>
            <Text size="2">• ETA: 12 minutes remaining</Text>
            <Text size="2">• Output: Executive summary report</Text>
          </Flex>
        </AccordionItem>

        <AccordionItem 
          value="agent-3" 
          title="Content Generation Agent"
          description="Creates marketing content, blog posts, and social media updates"
          badge={0}
          actions={
            <IconButton variant="soft" disabled aria-label="More options">
              <Icon name="more_horiz" size={16} />
            </IconButton>
          }
        >
          <Text size="2" color="gray">This agent is currently idle. Configure it to start generating content.</Text>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const AIAgentDashboard: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem 
        value="active-agents" 
        title="Active AI Agents"
        description="Currently running agents and their real-time status"
        badge={7}
        actions={
          <IconButton variant="soft" aria-label="Refresh agents">
            <Icon name="refresh" size={16} />
          </IconButton>
        }
      >
        <Flex direction="column" gap="2">
          <Text size="2">• Document Processing Agent (3 active instances)</Text>
          <Text size="2">• Email Classification Agent (2 active instances)</Text>
          <Text size="2">• Sentiment Analysis Agent (1 active instance)</Text>
          <Text size="2">• Translation Agent (1 active instance)</Text>
        </Flex>
      </AccordionItem>
      
      <AccordionItem 
        value="pending-tasks" 
        title="Task Queue"
        description="Pending tasks waiting for agent assignment"
        badge={156}
      >
        <Flex direction="column" gap="2">
          <Text size="2">• High Priority: 12 tasks</Text>
          <Text size="2">• Medium Priority: 89 tasks</Text>
          <Text size="2">• Low Priority: 55 tasks</Text>
          <Button size="1" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
            Process Queue
          </Button>
        </Flex>
      </AccordionItem>
      
      <AccordionItem 
        value="system-health" 
        title="System Health"
        description="Overall system performance and resource utilization"
        badge="Good"
        actions={
          <IconButton variant="soft" aria-label="View monitoring dashboard">
            <Icon name="monitoring" size={16} />
          </IconButton>
        }
      >
        <Flex direction="column" gap="2">
          <Text size="2">• CPU Usage: 68%</Text>
          <Text size="2">• Memory Usage: 45%</Text>
          <Text size="2">• Active Connections: 234</Text>
          <Text size="2">• Response Time: 156ms avg</Text>
        </Flex>
      </AccordionItem>
    </Accordion>
  ),
};

