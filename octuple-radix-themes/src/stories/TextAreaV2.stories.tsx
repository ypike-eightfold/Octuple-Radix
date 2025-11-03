import type { Meta, StoryObj } from '@storybook/react';
import { TextAreaV2 } from '../components/TextAreaV2/TextAreaV2';
import { Flex, Text } from '@radix-ui/themes';

const meta = {
  title: 'Octuple V2.5/TextArea',
  component: TextAreaV2,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['rounded', 'pill', 'inline'],
      description: 'Shape variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows',
    },
  },
} satisfies Meta<typeof TextAreaV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shapes: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Rounded (12px)</Text>
        <TextAreaV2 
          shape="rounded" 
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Pill (24px rounded)</Text>
        <TextAreaV2 
          shape="pill" 
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Inline (underline)</Text>
        <TextAreaV2 
          shape="inline" 
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Large (18px font)</Text>
        <TextAreaV2 
          size="large" 
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Medium (16px font)</Text>
        <TextAreaV2 
          size="medium" 
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Small (14px font)</Text>
        <TextAreaV2 
          size="small" 
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Enabled (default)</Text>
        <TextAreaV2 
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Hover (hover over the field)</Text>
        <TextAreaV2 
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Error state</Text>
        <TextAreaV2 
          placeholder="Write your message here..."
          error
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Disabled (40% opacity)</Text>
        <TextAreaV2 
          placeholder="Write your message here..."
          disabled
          rows={3}
        />
      </div>
    </Flex>
  ),
};

export const Resize: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Vertical resize (default)</Text>
        <TextAreaV2 
          placeholder="Drag bottom corner to resize vertically..."
          resize="vertical"
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">No resize</Text>
        <TextAreaV2 
          placeholder="Cannot be resized..."
          resize="none"
          rows={3}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Both directions</Text>
        <TextAreaV2 
          placeholder="Can be resized both ways..."
          resize="both"
          rows={3}
        />
      </div>
    </Flex>
  ),
};

export const Rows: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">2 rows</Text>
        <TextAreaV2 
          placeholder="Compact textarea..."
          rows={2}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">4 rows (default)</Text>
        <TextAreaV2 
          placeholder="Standard textarea..."
          rows={4}
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">8 rows</Text>
        <TextAreaV2 
          placeholder="Large textarea for longer content..."
          rows={8}
        />
      </div>
    </Flex>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <TextAreaV2 
        placeholder="Try typing, hovering, and focusing..."
        rows={4}
      />
      
      <TextAreaV2 
        placeholder="This one has an error"
        error
        rows={3}
        defaultValue="Invalid input that needs correction"
      />
      
      <TextAreaV2 
        shape="pill"
        placeholder="Pill shape with lots of space..."
        rows={5}
        resize="vertical"
      />
      
      <TextAreaV2 
        shape="inline"
        placeholder="Inline underline style"
        rows={3}
        resize="none"
      />
    </Flex>
  ),
};

