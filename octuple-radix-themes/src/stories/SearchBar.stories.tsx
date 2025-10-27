import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '../components/SearchBar';
import { useState } from 'react';
import { Flex, Text, Card } from '@radix-ui/themes';

const meta = {
  title: 'Components/Search Bar',
  component: SearchBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <Flex direction="column" gap="3">
        <SearchBar
          value={value}
          onChange={setValue}
          onSearch={(val) => alert(`Searching for: ${val}`)}
        />
        <Text size="2" color="gray">
          Current value: "{value}"
        </Text>
      </Flex>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Card>
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Size 1 (Small)</Text>
          <SearchBar size="1" placeholder="Search small..." />
        </Flex>
      </Card>
      
      <Card>
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Size 2 (Default)</Text>
          <SearchBar size="2" placeholder="Search default..." />
        </Flex>
      </Card>
      
      <Card>
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Size 3 (Large)</Text>
          <SearchBar size="3" placeholder="Search large..." />
        </Flex>
      </Card>
    </Flex>
  ),
};

export const WithoutClearButton: Story = {
  args: {
    placeholder: 'Search without clear button...',
    showClear: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled search...',
    disabled: true,
    value: 'Cannot edit',
  },
};

export const WithSearchHandler: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [lastSearch, setLastSearch] = useState('');

    return (
      <Flex direction="column" gap="3">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={(val) => setLastSearch(val)}
          placeholder="Type and press Enter..."
        />
        <Text size="2" color="gray">
          Last searched: "{lastSearch}"
        </Text>
      </Flex>
    );
  },
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <SearchBar placeholder="Full width search..." />
    </div>
  ),
};

export const InToolbar: Story = {
  render: () => (
    <Card>
      <Flex justify="between" align="center">
        <Text size="3" weight="bold">Products</Text>
        <div style={{ width: 300 }}>
          <SearchBar placeholder="Search products..." size="2" />
        </div>
      </Flex>
    </Card>
  ),
};

export const FocusedState: Story = {
  render: () => {
    const [value, setValue] = useState('positions or candidates');
    
    return (
      <Flex direction="column" gap="3" style={{ width: '100%', maxWidth: '600px' }}>
        <Text size="3" weight="bold">Focused/Search State</Text>
        <Text size="2" color="gray">
          This shows the selected/focused state of the search bar. The highlight should extend fully across the width with proper corner radius.
        </Text>
        <div style={{ position: 'relative' }}>
          <SearchBar
            value={value}
            onChange={setValue}
            placeholder="Search for positions or candidates"
            size="2"
            style={{ width: '500px' }}
            autoFocus
          />
        </div>
      </Flex>
    );
  },
};

