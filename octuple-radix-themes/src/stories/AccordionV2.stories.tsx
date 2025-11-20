import type { Meta, StoryObj } from '@storybook/react';
import { AccordionV2 } from '../components/AccordionV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Accordion',
  component: AccordionV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accordion component with collapse/expand functionality, built with Radix UI Accordion primitive.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Type of accordion',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether items can be collapsed (only for type="single")',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AccordionV2>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    value: 'item-1',
    header: 'Accordion header',
    content: 'This is the content for the first accordion item. It can contain any React node.',
  },
  {
    value: 'item-2',
    header: 'Second accordion',
    content: 'This is the content for the second accordion item with different text.',
  },
  {
    value: 'item-3',
    header: 'Third accordion',
    content: 'This is the content for the third accordion item. You can expand multiple items at once if type is set to "multiple".',
  },
];

export const Default: Story = {
  args: {
    items: [
      {
        value: 'item-1',
        header: 'Accordion header',
        content: 'Replace this with your own page level component or DS component',
      },
    ],
    type: 'single',
    collapsible: true,
  },
};

export const Multiple: Story = {
  args: {
    items: sampleItems,
    type: 'single',
    collapsible: true,
  },
};

export const MultipleType: Story = {
  args: {
    items: sampleItems,
    type: 'multiple',
  },
};

export const DefaultExpanded: Story = {
  args: {
    items: sampleItems,
    type: 'single',
    defaultValue: 'item-1',
    collapsible: true,
  },
};

export const WithRichContent: Story = {
  args: {
    items: [
      {
        value: 'item-1',
        header: 'User Information',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ margin: 0 }}><strong>Name:</strong> John Doe</p>
            <p style={{ margin: 0 }}><strong>Email:</strong> john.doe@example.com</p>
            <p style={{ margin: 0 }}><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
        ),
      },
      {
        value: 'item-2',
        header: 'Address Details',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ margin: 0 }}>123 Main Street</p>
            <p style={{ margin: 0 }}>Apt 4B</p>
            <p style={{ margin: 0 }}>New York, NY 10001</p>
          </div>
        ),
      },
      {
        value: 'item-3',
        header: 'Payment Method',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ margin: 0 }}><strong>Card:</strong> •••• 4242</p>
            <p style={{ margin: 0 }}><strong>Expires:</strong> 12/25</p>
            <button style={{ 
              marginTop: '8px', 
              padding: '8px 16px', 
              backgroundColor: '#8b5cf6', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer' 
            }}>
              Update Payment
            </button>
          </div>
        ),
      },
    ],
    type: 'single',
    collapsible: true,
  },
};

export const FAQ: Story = {
  args: {
    items: [
      {
        value: 'q1',
        header: 'What is this component library?',
        content: 'This is a React component library built with Radix UI primitives and custom styling to match our design system.',
      },
      {
        value: 'q2',
        header: 'How do I install it?',
        content: 'You can install it using npm or yarn. Run `npm install @eightfold.ai/octuple-radix` to get started.',
      },
      {
        value: 'q3',
        header: 'Is it accessible?',
        content: 'Yes! All components are built with accessibility in mind, using Radix UI primitives which provide excellent ARIA support out of the box.',
      },
      {
        value: 'q4',
        header: 'Can I customize the styling?',
        content: 'Absolutely! You can override the default styles using CSS or pass custom className props to any component.',
      },
    ],
    type: 'single',
    collapsible: true,
  },
};

export const LongContent: Story = {
  args: {
    items: [
      {
        value: 'item-1',
        header: 'Terms and Conditions',
        content: (
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        ),
      },
    ],
    type: 'single',
    collapsible: true,
  },
};

export const NonCollapsible: Story = {
  args: {
    items: sampleItems,
    type: 'single',
    collapsible: false,
    defaultValue: 'item-1',
  },
};

