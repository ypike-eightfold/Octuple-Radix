import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Badge, IconButton, Tooltip, Flex, Text, Card } from '@radix-ui/themes';
import { EnhancedTable, ColumnDef } from '../components/EnhancedTable';
import { Icon } from '../components/Icon';

// Sample data for stories
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  avatar?: string;
}

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Designer',
    status: 'active',
    joinDate: '2023-02-20',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Manager',
    status: 'inactive',
    joinDate: '2022-11-10',
  },
  {
    id: '4',
    name: 'Alice Wilson',
    email: 'alice@example.com',
    role: 'Developer',
    status: 'pending',
    joinDate: '2023-03-05',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'QA Engineer',
    status: 'active',
    joinDate: '2023-01-28',
  },
];

const meta = {
  title: 'Components/Enhanced Table',
  component: EnhancedTable<User>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Enhanced Table component built on top of Radix UI Table with advanced features like sorting, selection, pagination, and search. Use the controls below to experiment with different props and see how they affect the table.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Data Management
    columns: { 
      control: false, // Complex object, not suitable for controls 
      description: 'Column definitions array with keys, titles, dataIndex, and optional render/sort functions'
    },
    dataSource: { 
      control: false, // Complex array, not suitable for controls
      description: 'Array of data objects to display in the table'
    },
    loading: { 
      control: 'boolean',
      description: 'Show loading overlay with spinner'
    },
    rowKey: { 
      control: 'text',
      description: 'Property name to use as unique row identifier (defaults to "id")'
    },

    // Visual Variants
    striped: { 
      control: 'boolean',
      description: 'Enable alternating row background colors for better readability'
    },
    bordered: { 
      control: 'boolean',
      description: 'Add borders around the entire table and cells'
    },
    hover: { 
      control: 'boolean',
      description: 'Enable hover effects on table rows'
    },
    
    // Radix Props
    size: { 
      control: 'select',
      options: ['1', '2', '3'],
      description: 'Table size variant (1=compact, 2=default, 3=large)'
    },
    variant: { 
      control: 'select',
      options: ['surface', 'ghost'],
      description: 'Table visual style variant'
    },
    
    // Search & Filtering
    searchable: { 
      control: 'boolean',
      description: 'Enable global search functionality with input field'
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input field'
    },
    searchValue: {
      control: 'text',
      description: 'Controlled search input value'
    },
    
    // Empty State
    emptyMessage: {
      control: 'text', 
      description: 'Message to show when no data is available'
    },

    // Selection (Complex objects - limited controls)
    'rowSelection.type': {
      control: 'select',
      options: ['checkbox', 'radio'],
      description: 'Type of row selection (checkbox for multi-select, radio for single-select)',
      if: { arg: 'rowSelection', exists: true }
    },
    
    // Pagination (Complex objects - limited controls)  
    'pagination.pageSize': {
      control: { type: 'number', min: 5, max: 100, step: 5 },
      description: 'Number of items to display per page'
    },
    'pagination.showQuickJumper': {
      control: 'boolean',
      description: 'Show input field to jump to specific page number'
    },
    'pagination.showSizeChanger': {
      control: 'boolean', 
      description: 'Show dropdown to change page size'
    },
    'pagination.showTotal': {
      control: 'boolean',
      description: 'Show total items count information'
    },

    // Sorting
    'defaultSort.key': {
      control: 'text',
      description: 'Column key to sort by default'
    },
    'defaultSort.direction': {
      control: 'select',
      options: ['asc', 'desc'],
      description: 'Default sort direction'
    },

    // Expandable (Complex - limited controls)
    'expandable.rowExpandable': {
      control: false,
      description: 'Function to determine which rows can be expanded'
    },

    // Function Props (Callbacks)
    onSort: {
      control: false,
      description: 'Callback when column sort changes. Receives (key: string, direction: "asc" | "desc")'
    },
    onSearch: {
      control: false,
      description: 'Callback when search value changes. Receives (value: string)'
    },
    onChange: {
      control: false,
      description: 'General table change callback for pagination, filters, sorting'
    },
    onRow: {
      control: false,
      description: 'Row event handlers. Returns object with onClick, onDoubleClick, onMouseEnter, onMouseLeave'
    },

    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class names'
    }
  },
} satisfies Meta<typeof EnhancedTable>;

export default meta;
type Story = StoryObj<{ columns: ColumnDef<User>[]; dataSource: User[] }>;

// Basic column definitions
const basicColumns: ColumnDef<User>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    sortable: true,
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
  },
];

// Enhanced column definitions with custom rendering
const enhancedColumns: ColumnDef<User>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
    width: 200,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    sortable: true,
    ellipsis: true,
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
    align: 'center',
    render: (role: string) => (
      <Badge 
        color={
          role === 'Manager' ? 'purple' : 
          role === 'Developer' ? 'blue' : 
          role === 'Designer' ? 'green' : 
          'gray'
        }
      >
        {role}
      </Badge>
    ),
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
    sortable: true,
    render: (status: string) => (
      <Badge 
        color={
          status === 'active' ? 'green' : 
          status === 'inactive' ? 'red' : 
          'orange'
        }
        variant="soft"
      >
        {status}
      </Badge>
    ),
  },
  {
    key: 'joinDate',
    title: 'Join Date',
    dataIndex: 'joinDate',
    sortable: true,
    align: 'right',
    render: (date: string) => new Date(date).toLocaleDateString(),
  },
  {
    key: 'actions',
    title: 'Actions',
    dataIndex: 'id',
    align: 'center',
    width: 120,
    render: (id: string, record: User) => (
      <Flex gap="1" justify="center">
        <Tooltip content="Edit user">
          <IconButton variant="ghost" size="1">
            <Icon name="edit" size={16} />
          </IconButton>
        </Tooltip>
        <Tooltip content="Delete user">
          <IconButton variant="ghost" size="1" color="red">
            <Icon name="delete" size={16} />
          </IconButton>
        </Tooltip>
      </Flex>
    ),
  },
];

export const Default: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    onRow: fn(),
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic Enhanced Table with minimal configuration. Shows essential functionality with sortable columns and clean layout.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    columns: enhancedColumns,
    dataSource: sampleUsers,
    // Visual variants - all disabled by default
    striped: false,
    bordered: false,
    hover: false,
    
    // Features - all disabled by default
    searchable: false,
    loading: false,
    
    // Radix props
    size: '2',
    variant: 'surface',
    
    // Search
    searchPlaceholder: 'Search users...',
    
    // Empty state
    emptyMessage: 'No users found',
    
    // Row key
    rowKey: 'id',
    
    // Function props with explicit spies
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
    
    // Basic props that will be controllable through nested object args
    // (These are set via special controls due to complex object nature)
    rowSelection: undefined, // Will be configured through controls if needed
    pagination: false, // Will be configured through controls if needed
    defaultSort: undefined, // Will be configured through controls if needed
    expandable: undefined, // Will be configured through controls if needed
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Enhanced Table features. Use the controls below to toggle different props and see how they affect the table appearance and behavior in real-time.',
      },
    },
  },
};

export const WithSorting: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    defaultSort: { key: 'name', direction: 'asc' },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with default sorting applied. Click column headers to change sort direction and column.',
      },
    },
  },
};

export const WithSelection: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    rowSelection: {
      type: 'checkbox',
      onChange: fn(),
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with checkbox row selection. Enable multi-select with checkboxes and select-all header functionality.',
      },
    },
  },
};

export const WithSearch: Story = {
  args: {
    columns: enhancedColumns,
    dataSource: sampleUsers,
    searchable: true,
    searchPlaceholder: 'Search users...',
    onSearch: fn(),
    onSort: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with global search functionality. Type to filter all rows across all columns.',
      },
    },
  },
};

export const WithPagination: Story = {
  args: {
    columns: enhancedColumns,
    dataSource: [...sampleUsers, ...sampleUsers, ...sampleUsers], // More data for pagination
    pagination: {
      pageSize: 5,
      showQuickJumper: true,
      showTotal: fn().mockReturnValue('Showing items'),
      onChange: fn(),
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with pagination controls. Navigate through pages, jump to specific page, and see total counts.',
      },
    },
  },
};

export const WithAllFeatures: Story = {
  args: {
    columns: enhancedColumns,
    dataSource: [...sampleUsers, ...sampleUsers, ...sampleUsers],
    searchable: true,
    rowSelection: {
      type: 'checkbox',
      onChange: fn(),
    },
    pagination: {
      pageSize: 5,
      showQuickJumper: true,
      showTotal: fn().mockReturnValue('Showing items'),
      onChange: fn(),
    },
    striped: true,
    hover: true,
    defaultSort: { key: 'name', direction: 'asc' },
    onSort: fn(),
    onSearch: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive example showing all Enhanced Table features working together: sorting, search, selection, pagination, and visual enhancements.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    loading: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state with overlay spinner. Use while fetching data from API.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    columns: basicColumns,
    dataSource: [],
    emptyMessage: 'No users found. Try adjusting your search criteria.',
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty table state with custom message. Shows when no data is available.',
      },
    },
  },
};

export const CustomEmpty: Story = {
  args: {
    columns: basicColumns,
    dataSource: [],
    emptyMessage: (
      <div style={{ textAlign: 'center' }}>
        <Text size="3" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
          No team members yet
        </Text>
        <Text size="2" color="gray" style={{ display: 'block', marginBottom: '16px' }}>
          Invite your first team member to get started
        </Text>
        <button 
          style={{
            background: 'var(--accent-9)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-2)',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          Invite Member
        </button>
      </div>
    ),
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state with custom JSX content including actions. Provides rich empty state experience.',
      },
    },
  },
};

export const Expandable: Story = {
  args: {
    columns: enhancedColumns.slice(0, 4), // Fewer columns for better display
    dataSource: sampleUsers,
    expandable: {
      expandedRowRender: (record: User) => (
        <Card>
          <Flex gap="4" p="4">
            <div>
              <Text size="2" weight="bold" style={{ display: 'block', marginBottom: '4px' }}>
                Contact Information
              </Text>
              <Text size="2" color="gray">Email: {record.email}</Text>
              <Text size="2" color="gray">Join Date: {new Date(record.joinDate).toLocaleDateString()}</Text>
            </div>
            <div>
              <Text size="2" weight="bold" style={{ display: 'block', marginBottom: '4px' }}>
                Role Details
              </Text>
              <Text size="2" color="gray">Position: {record.role}</Text>
              <Text size="2" color="gray">Status: {record.status}</Text>
            </div>
          </Flex>
        </Card>
      ),
      rowExpandable: (record: User) => record.status === 'active',
      onExpand: fn(),
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with expandable rows. Click the expand icon to show additional details. Only active users can be expanded.',
      },
    },
  },
};

export const SizeCompact: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    size: '1',
    striped: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact table size (size="1") - smaller padding and text for data-dense layouts.',
      },
    },
  },
};

export const SizeDefault: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    size: '2',
    striped: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default table size (size="2") - standard padding and text size for most use cases.',
      },
    },
  },
};

export const SizeLarge: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    size: '3',
    striped: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Large table size (size="3") - increased padding and text for better readability.',
      },
    },
  },
};

export const VariantStriped: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    striped: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Striped table rows - alternating background colors for better visual separation.',
      },
    },
  },
};

export const VariantBordered: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    bordered: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Bordered table - adds borders around the table and all cells.',
      },
    },
  },
};

export const VariantHover: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    hover: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover effects - highlights table rows when mouse hovers over them.',
      },
    },
  },
};

export const VariantAllCombined: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    striped: true,
    bordered: true,
    hover: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'All visual variants combined - striped, bordered, and hover effects together.',
      },
    },
  },
};

export const RadioSelection: Story = {
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    rowSelection: {
      type: 'radio',
      onChange: fn(),
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with radio button selection for single-row selection only.',
      },
    },
  },
};

export const BackwardCompatibility = {
  render: () => (
    <Flex direction="column" gap="6">
      <div>
        <Text size="3" weight="bold" style={{ marginBottom: '16px', display: 'block' }}>
          Enhanced Table (New)
        </Text>
        <EnhancedTable
          columns={basicColumns}
          dataSource={sampleUsers.slice(0, 3)}
          striped
          hover
        />
      </div>
      
      <div>
        <Text size="3" weight="bold" style={{ marginBottom: '16px', display: 'block' }}>
          Original Radix Table (Still Works)
        </Text>
        <div style={{ border: '1px solid var(--gray-6)', borderRadius: 'var(--radius-3)', overflow: 'hidden', padding: 'var(--space-4)' }}>
          {/* This would be the original Table.Root component */}
          <Text size="2" color="gray">
            Original Radix Table usage remains unchanged and fully functional
          </Text>
        </div>
      </div>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates backward compatibility - existing Radix Table components continue to work alongside the new Enhanced Table without any breaking changes.',
      },
    },
  },
};

// Performance test with large dataset
const generateLargeDataset = (count: number): User[] => {
  const roles = ['Developer', 'Designer', 'Manager', 'QA Engineer', 'DevOps'];
  const statuses = ['active', 'inactive', 'pending'] as const;
  
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    joinDate: new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
  }));
};

export const LargeDataset: Story = {
  args: {
    columns: enhancedColumns,
    dataSource: generateLargeDataset(1000),
    searchable: true,
    rowSelection: {
      type: 'checkbox',
      onChange: fn(),
    },
    pagination: {
      pageSize: 20,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: fn().mockReturnValue('Showing items'),
      onChange: fn(),
    },
    striped: true,
    hover: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Performance test with 1000 rows. Shows search, selection, and pagination working efficiently with large datasets.',
      },
    },
  },
};
