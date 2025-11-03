import type { Meta, StoryObj } from '@storybook/react';
import { SelectV2, SelectV2Option } from '../components/SelectV2/SelectV2';
import { Flex, Text } from '@radix-ui/themes';

const meta = {
  title: 'Octuple V2.5/Select',
  component: SelectV2,
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
    multiple: {
      control: 'boolean',
      description: 'Multi-select mode',
    },
  },
} satisfies Meta<typeof SelectV2>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions: SelectV2Option[] = [
  { value: 'ux', label: 'UX Designer' },
  { value: 'ui', label: 'UI Designer' },
  { value: 'product', label: 'Product Designer' },
  { value: 'frontend', label: 'Frontend Developer' },
  { value: 'backend', label: 'Backend Developer' },
  { value: 'fullstack', label: 'Full Stack Developer' },
];

const fruitOptions: SelectV2Option[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

export const Shapes: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Rounded (12px)</Text>
        <SelectV2 
          shape="rounded" 
          options={sampleOptions}
          placeholder="Select a role"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Pill (fully rounded)</Text>
        <SelectV2 
          shape="pill" 
          options={sampleOptions}
          placeholder="Select a role"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Inline (underline)</Text>
        <SelectV2 
          shape="inline" 
          options={sampleOptions}
          placeholder="Select a role"
        />
      </div>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Large (44px)</Text>
        <SelectV2 
          size="large" 
          options={sampleOptions}
          placeholder="Select a role"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Medium (36px)</Text>
        <SelectV2 
          size="medium" 
          options={sampleOptions}
          placeholder="Select a role"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Small (28px)</Text>
        <SelectV2 
          size="small" 
          options={sampleOptions}
          placeholder="Select a role"
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
        <SelectV2 
          options={sampleOptions}
          placeholder="Select a role"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">With selected value</Text>
        <SelectV2 
          options={sampleOptions}
          value="ux"
          placeholder="Select a role"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Error state</Text>
        <SelectV2 
          options={sampleOptions}
          error
          placeholder="Select a role"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Disabled (40% opacity)</Text>
        <SelectV2 
          options={sampleOptions}
          disabled
          placeholder="Select a role"
        />
      </div>
    </Flex>
  ),
};

export const MultiSelect: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Multi-select mode</Text>
        <SelectV2 
          options={fruitOptions}
          multiple
          placeholder="Select fruits"
        />
      </div>
      
      <div>
        <Text size="2" weight="bold" mb="2" as="div">Multi-select with defaults</Text>
        <SelectV2 
          options={fruitOptions}
          multiple
          value={['apple', 'banana']}
          placeholder="Select fruits"
        />
      </div>
    </Flex>
  ),
};

export const WithDisabledOptions: Story = {
  render: () => {
    const optionsWithDisabled: SelectV2Option[] = [
      { value: 'ux', label: 'UX Designer' },
      { value: 'ui', label: 'UI Designer', disabled: true },
      { value: 'product', label: 'Product Designer' },
      { value: 'frontend', label: 'Frontend Developer', disabled: true },
      { value: 'backend', label: 'Backend Developer' },
    ];

    return (
      <Flex direction="column" gap="4" style={{ width: '400px' }}>
        <div>
          <Text size="2" weight="bold" mb="2" as="div">Some options disabled</Text>
          <SelectV2 
            options={optionsWithDisabled}
            placeholder="Select a role"
          />
        </div>
      </Flex>
    );
  },
};

export const Interactive: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }}>
      <SelectV2 
        options={sampleOptions}
        placeholder="Try clicking to open menu"
      />
      
      <SelectV2 
        options={sampleOptions}
        error
        value="backend"
        placeholder="Select a role"
      />
      
      <SelectV2 
        shape="pill"
        options={fruitOptions}
        multiple
        placeholder="Select multiple fruits"
      />
      
      <SelectV2 
        shape="inline"
        size="small"
        options={sampleOptions}
        placeholder="Inline small select"
      />
    </Flex>
  ),
};

