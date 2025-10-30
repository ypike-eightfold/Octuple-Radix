# Enhanced Table Component

A powerful table component built on top of Radix UI Table with advanced features from the Octuple design system.

## Features

### ✅ **Current Implementation**

- **Column Configuration**: Define columns with titles, data extraction, alignment, and sorting
- **Sorting**: Clickable headers with visual sort indicators (arrows)
- **Row Selection**: Checkbox and radio selection with select all functionality
- **Search & Filtering**: Global search across all columns
- **Pagination**: Integration with our existing Pagination component
- **Loading States**: Overlay with spinner during data fetching
- **Empty States**: Customizable empty state messages and content
- **Visual Enhancements**: Striped rows, hover effects, bordered variants
- **Expandable Rows**: Collapsible row content with custom renderers
- **Custom Cell Rendering**: Function-based cell content rendering
- **Accessibility**: Full WCAG 2.2 AA compliance maintained
- **TypeScript**: Complete type safety with generic support

### 🎯 **Backward Compatibility**

- **Zero Breaking Changes**: All existing `Table.Root` usage continues to work
- **Progressive Enhancement**: New features are completely opt-in
- **Radix Architecture**: Built as a wrapper around existing Radix components

## Storybook Usage

### Interactive Playground

The Enhanced Table component comes with comprehensive Storybook stories that allow you to experiment with all features interactively.

#### Using the Playground

1. **Navigate to Storybook**: Open the Enhanced Table stories in Storybook
2. **Select "Playground"**: This story provides full control over all props
3. **Use the Controls Panel**: All major props are controllable via the right-side controls panel

#### Available Controls

The Storybook controls allow you to experiment with:

**Visual Variants:**
- `striped` - Toggle alternating row colors
- `bordered` - Toggle table and cell borders  
- `hover` - Toggle row hover effects
- `size` - Switch between compact (1), default (2), and large (3) sizes
- `variant` - Toggle between surface and ghost variants

**Features:**
- `searchable` - Enable/disable global search functionality
- `loading` - Toggle loading overlay
- `searchPlaceholder` - Customize search input placeholder

**Empty States:**
- `emptyMessage` - Customize empty state message

**Row Configuration:**
- `rowKey` - Specify the unique identifier property

#### Exploring Stories

Each story demonstrates specific functionality:

- **Default** - Basic table with minimal configuration
- **Playground** - Interactive controls for all props
- **WithSorting** - Pre-configured with default sorting
- **WithSelection** - Checkbox selection example
- **WithSearch** - Global search functionality
- **WithPagination** - Pagination controls and navigation
- **WithAllFeatures** - All features combined
- **Loading/Empty** - Various state examples
- **Size/Visual Variants** - Different visual configurations
- **Expandable** - Row expansion functionality
- **RadioSelection** - Single-select radio buttons
- **LargeDataset** - Performance with 1000+ rows

#### Testing Features

Use the controls to test different combinations:

```
1. Enable striped + hover for better UX
2. Add searchable + pagination for large datasets  
3. Combine selection + sorting for data management
4. Test loading states during development
5. Customize empty states for better user experience
```

#### Control Limitations

Some complex props have limited Storybook controls due to their object/function nature:
- `columns` - Use predefined column sets in stories
- `dataSource` - Use sample data provided in stories
- `rowSelection.onChange` - Functions use explicit spy functions (see Actions panel)
- `expandable.expandedRowRender` - Predefined render functions in stories
- `onSort`, `onSearch`, `onChange` - Function callbacks use explicit spies (check Actions panel for events)

For complete customization of these props, refer to the code examples in the stories source.

#### Function Props and Actions

All function props in the Enhanced Table stories use explicit spy functions (`fn()` from `@storybook/test`) to prevent Storybook implicit action warnings. These spies allow you to:

- **Monitor function calls** in the Actions panel 
- **See arguments passed** to callback functions
- **Track user interactions** like clicks, searches, and selections

**Function Props with Spies:**
- `onSort` - Tracks sort column and direction changes
- `onSearch` - Tracks search input changes  
- `onChange` - Tracks general table state changes
- `onRow` - Tracks row interaction events (click, hover, etc.)
- `rowSelection.onChange` - Tracks row selection changes
- `pagination.onChange` - Tracks page navigation
- `pagination.showTotal` - Mock function returning display text
- `expandable.onExpand` - Tracks row expand/collapse events

## Quick Start

### Basic Usage

```jsx
import { EnhancedTable, ColumnDef } from '@radix-ui/themes';

const columns: ColumnDef[] = [
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
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    render: (role) => <Badge>{role}</Badge>
  },
];

const data = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
];

function MyTable() {
  return (
    <EnhancedTable
      columns={columns}
      dataSource={data}
      rowKey="id"
    />
  );
}
```

### Advanced Usage

```jsx
<EnhancedTable
  columns={columns}
  dataSource={data}
  
  // Search
  searchable
  searchPlaceholder="Search users..."
  
  // Selection
  rowSelection={{
    type: 'checkbox',
    onChange: (keys, rows) => console.log('Selected:', keys),
  }}
  
  // Sorting
  defaultSort={{ key: 'name', direction: 'asc' }}
  onSort={(key, direction) => console.log('Sort:', key, direction)}
  
  // Pagination
  pagination={{
    pageSize: 10,
    showQuickJumper: true,
    showTotal: true,
  }}
  
  // Visual enhancements
  striped
  hover
  bordered
  
  // States
  loading={isLoading}
  emptyMessage="No users found"
/>
```

## API Reference

### EnhancedTableProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `ColumnDef[]` | - | **Required.** Column definitions |
| `dataSource` | `T[]` | `[]` | **Required.** Data array |
| `rowKey` | `string \| function` | `'id'` | Row key extractor |
| `loading` | `boolean` | `false` | Loading state |
| `searchable` | `boolean` | `false` | Enable global search |
| `searchPlaceholder` | `string` | `'Search...'` | Search input placeholder |
| `rowSelection` | `RowSelection` | - | Row selection config |
| `defaultSort` | `SortConfig` | - | Default sort configuration |
| `onSort` | `function` | - | Sort change callback |
| `pagination` | `boolean \| PaginationConfig` | `false` | Pagination config |
| `expandable` | `ExpandableConfig` | - | Expandable rows config |
| `striped` | `boolean` | `false` | Striped row styling |
| `bordered` | `boolean` | `false` | Bordered table styling |
| `hover` | `boolean` | `false` | Hover effects |
| `emptyMessage` | `string \| ReactNode` | `'No data available'` | Empty state message |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Table size (from Radix) |
| `variant` | `'surface' \| 'ghost'` | `'surface'` | Table variant (from Radix) |

### ColumnDef

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `string` | - | **Required.** Unique column key |
| `title` | `string` | - | **Required.** Column header title |
| `dataIndex` | `string` | - | **Required.** Data field name |
| `width` | `number \| string` | - | Column width |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `sortable` | `boolean` | `false` | Enable sorting |
| `sorter` | `boolean \| function` | - | Custom sort function |
| `render` | `function` | - | Custom cell renderer |
| `ellipsis` | `boolean` | `false` | Truncate long text |
| `className` | `string` | - | CSS class name |

### RowSelection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'checkbox' \| 'radio'` | - | Selection type |
| `selectedRowKeys` | `string[]` | `[]` | Selected row keys |
| `onChange` | `function` | - | Selection change callback |
| `showSelectAll` | `boolean` | `true` | Show select all checkbox |
| `getCheckboxProps` | `function` | - | Checkbox props per row |

### PaginationConfig

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `current` | `number` | `1` | Current page |
| `pageSize` | `number` | `10` | Items per page |
| `total` | `number` | - | Total items |
| `showQuickJumper` | `boolean` | `false` | Show page jumper |
| `showTotal` | `boolean \| function` | `false` | Show total count |
| `onChange` | `function` | - | Page change callback |

## Examples

### Column Types

```jsx
const columns = [
  // Basic text column
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
  },
  
  // Custom rendered column
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: (status) => (
      <Badge color={status === 'active' ? 'green' : 'red'}>
        {status}
      </Badge>
    ),
  },
  
  // Action column
  {
    key: 'actions',
    title: 'Actions',
    dataIndex: 'id',
    align: 'center',
    render: (id, record) => (
      <Flex gap="1">
        <IconButton onClick={() => edit(record)}>
          <Icon name="edit" />
        </IconButton>
        <IconButton color="red" onClick={() => delete(id)}>
          <Icon name="delete" />
        </IconButton>
      </Flex>
    ),
  },
];
```

### Selection Handling

```jsx
const [selectedKeys, setSelectedKeys] = useState([]);

<EnhancedTable
  columns={columns}
  dataSource={data}
  rowSelection={{
    type: 'checkbox',
    selectedRowKeys: selectedKeys,
    onChange: (keys, rows) => {
      setSelectedKeys(keys);
      console.log('Selected rows:', rows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.status === 'inactive',
    }),
  }}
/>
```

### Expandable Rows

```jsx
<EnhancedTable
  columns={columns}
  dataSource={data}
  expandable={{
    expandedRowRender: (record) => (
      <Card p="4">
        <Text>Detailed information for {record.name}</Text>
        <Text color="gray">Additional content here...</Text>
      </Card>
    ),
    rowExpandable: (record) => record.hasDetails,
  }}
/>
```

### Pagination with Search

```jsx
const [currentPage, setCurrentPage] = useState(1);
const [searchTerm, setSearchTerm] = useState('');

<EnhancedTable
  columns={columns}
  dataSource={filteredData}
  searchable
  searchValue={searchTerm}
  onSearch={setSearchTerm}
  pagination={{
    current: currentPage,
    pageSize: 20,
    total: totalItems,
    onChange: setCurrentPage,
    showQuickJumper: true,
    showTotal: (total, range) => 
      `${range[0]}-${range[1]} of ${total} items`,
  }}
/>
```

## Styling

### CSS Classes

The component uses these CSS classes for customization:

- `.enhanced-table` - Root container
- `.enhanced-table-striped` - Striped rows variant
- `.enhanced-table-bordered` - Bordered variant
- `.enhanced-table-hover` - Hover effects variant
- `.sortable-header-clickable` - Sortable column headers
- `.enhanced-table-row-selected` - Selected rows
- `.loading-overlay` - Loading state overlay
- `.empty-state` - Empty state container

### Custom Styling

```css
/* Custom table styling */
.my-custom-table {
  border-radius: 8px;
  overflow: hidden;
}

.my-custom-table .sortable-header-clickable:hover {
  background-color: var(--blue-3);
}

.my-custom-table .enhanced-table-row-selected {
  background-color: var(--blue-2);
}
```

## Migration Guide

### From Basic Radix Table

```jsx
// Before: Basic Radix Table
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {data.map(item => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.email}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>

// After: Enhanced Table
<EnhancedTable
  columns={[
    { key: 'name', title: 'Name', dataIndex: 'name' },
    { key: 'email', title: 'Email', dataIndex: 'email' },
  ]}
  dataSource={data}
  rowKey="id"
/>
```

### Adding Features Incrementally

```jsx
// Start simple
<EnhancedTable columns={columns} dataSource={data} />

// Add sorting
<EnhancedTable 
  columns={columns} 
  dataSource={data}
  defaultSort={{ key: 'name', direction: 'asc' }}
/>

// Add search and selection
<EnhancedTable 
  columns={columns} 
  dataSource={data}
  searchable
  rowSelection={{ type: 'checkbox' }}
/>

// Add pagination and visual enhancements
<EnhancedTable 
  columns={columns} 
  dataSource={data}
  searchable
  rowSelection={{ type: 'checkbox' }}
  pagination={{ pageSize: 10 }}
  striped
  hover
/>
```

## Performance Considerations

- **Large Datasets**: Use pagination for datasets > 100 items
- **Custom Renderers**: Memoize expensive render functions
- **Search**: Consider debouncing search input for better performance
- **Selection**: Use `getCheckboxProps` to disable unnecessary rows

## Accessibility

The Enhanced Table maintains full WCAG 2.2 AA compliance:

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Readers**: Proper ARIA labels and roles
- **Sort Indicators**: `aria-sort` attributes on sortable headers
- **Selection**: Clear labels for selection controls
- **Focus Management**: Logical focus order and visible focus indicators

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Changelog

### v1.0.0
- Initial release with core features
- Column configuration and sorting
- Row selection and search
- Pagination integration
- Visual enhancements
- Full TypeScript support
