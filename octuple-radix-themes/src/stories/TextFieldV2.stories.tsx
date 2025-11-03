import type { Meta, StoryObj } from '@storybook/react';
import { TextFieldV2 } from '../components/TextFieldV2/TextFieldV2';
import { Flex, Text } from '@radix-ui/themes';

const meta = {
  title: 'Octuple V2.5/TextField',
  component: TextFieldV2,
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
    clearable: {
      control: 'boolean',
      description: 'Show clear button when filled',
    },
  },
} satisfies Meta<typeof TextFieldV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shapes: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Rounded (12px)</Text>
        <TextFieldV2 
          shape="rounded" 
          placeholder="Type to search" 
          leftIcon="search"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Pill (fully rounded)</Text>
        <TextFieldV2 
          shape="pill" 
          placeholder="Type to search" 
          leftIcon="search"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Inline (underline)</Text>
        <TextFieldV2 
          shape="inline" 
          placeholder="Type to search" 
          leftIcon="search"
        />
      </div>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start" style={{ width: '400px' }}>
      <div style={{ width: '100%' }}>
        <Text size="2" weight="bold" mb="2" as="div">Large (44px)</Text>
        <TextFieldV2 
          size="large" 
          placeholder="Type to search" 
          leftIcon="search"
        />
      </div>
      
      <div style={{ width: '100%' }}>
        <Text size="2" weight="bold" mb="2" as="div">Medium (36px)</Text>
        <TextFieldV2 
          size="medium" 
          placeholder="Type to search" 
          leftIcon="search"
        />
      </div>
      
      <div style={{ width: '100%' }}>
        <Text size="2" weight="bold" mb="2" as="div">Small (28px)</Text>
        <TextFieldV2 
          size="small" 
          placeholder="Type to search" 
          leftIcon="search"
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
        <TextFieldV2 
          placeholder="Type to search" 
          leftIcon="search"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Hover (hover over the field)</Text>
        <TextFieldV2 
          placeholder="Type to search" 
          leftIcon="search"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Error state</Text>
        <TextFieldV2 
          placeholder="Type to search" 
          leftIcon="search"
          error
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Disabled (40% opacity)</Text>
        <TextFieldV2 
          placeholder="Type to search" 
          leftIcon="search"
          disabled
        />
      </div>
    </Flex>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Left icon only</Text>
        <TextFieldV2 
          placeholder="Search..." 
          leftIcon="search"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Right icon only</Text>
        <TextFieldV2 
          placeholder="Enter email" 
          rightIcon="mail"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">With clearable (type something)</Text>
        <TextFieldV2 
          placeholder="Type to search" 
          leftIcon="search"
          clearable
          defaultValue="UX Designer"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Both icons</Text>
        <TextFieldV2 
          placeholder="Search..." 
          leftIcon="search"
          rightIcon="filter_list"
        />
      </div>
    </Flex>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <TextFieldV2 
        placeholder="Try typing, hovering, and focusing" 
        leftIcon="edit"
        clearable
      />
      
      <TextFieldV2 
        placeholder="This one has an error" 
        leftIcon="error"
        error
        defaultValue="Invalid input"
      />
      
      <TextFieldV2 
        shape="pill"
        placeholder="Pill shape with clear" 
        leftIcon="search"
        clearable
        defaultValue="Search term"
      />
      
      <TextFieldV2 
        shape="inline"
        placeholder="Inline underline style" 
      />
    </Flex>
  ),
};

