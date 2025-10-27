import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../components/Accordion';
import { Text, Flex } from '@radix-ui/themes';

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

