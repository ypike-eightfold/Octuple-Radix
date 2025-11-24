import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableV2, TableSize } from '../components/TableV2';
import type { ColumnsType, Key } from '../components/TableV2';
import { AvatarV2 } from '../components/AvatarV2';
import { ButtonV2 } from '../components/ButtonV2';
import { BadgeV2 } from '../components/BadgeV2';
import { LinkV2 } from '../components/LinkV2';

const meta: Meta<typeof TableV2> = {
  title: 'Octuple V2.5/TableV2',
  component: TableV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A table component built with Radix UI that matches Octuple API for displaying structured data with sorting, selection, pagination, and expandable rows.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableV2>;

// ==================== SAMPLE DATA ====================

interface UserData {
  key: string;
  name: string;
  age: number;
  address: string;
  email: string;
  status: 'active' | 'inactive';
  role: string;
}

const userData: UserData[] = [
  { key: '1', name: 'John Doe', age: 32, address: 'New York, USA', email: 'john@example.com', status: 'active', role: 'Admin' },
  { key: '2', name: 'Jane Smith', age: 28, address: 'London, UK', email: 'jane@example.com', status: 'active', role: 'User' },
  { key: '3', name: 'Bob Johnson', age: 45, address: 'Paris, France', email: 'bob@example.com', status: 'inactive', role: 'User' },
  { key: '4', name: 'Alice Williams', age: 36, address: 'Berlin, Germany', email: 'alice@example.com', status: 'active', role: 'Editor' },
  { key: '5', name: 'Charlie Brown', age: 29, address: 'Tokyo, Japan', email: 'charlie@example.com', status: 'active', role: 'User' },
  { key: '6', name: 'Diana Prince', age: 31, address: 'Sydney, Australia', email: 'diana@example.com', status: 'inactive', role: 'Admin' },
  { key: '7', name: 'Ethan Hunt', age: 42, address: 'Toronto, Canada', email: 'ethan@example.com', status: 'active', role: 'Editor' },
  { key: '8', name: 'Fiona Green', age: 27, address: 'Dublin, Ireland', email: 'fiona@example.com', status: 'active', role: 'User' },
];

const columns: ColumnsType<UserData> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    key: 'age',
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    key: 'address',
    title: 'Address',
    dataIndex: 'address',
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => (
      <BadgeV2 active={status === 'active'}>
        {status}
      </BadgeV2>
    ),
  },
];

// ==================== BASIC STORIES ====================

export const Basic: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData}
      pagination={false}
    />
  ),
};

export const With_Pagination: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData}
      pagination={{
        pageSize: 5,
        showQuickJumper: true,
      }}
    />
  ),
};

export const With_Sorting: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData}
      pagination={{ pageSize: 5 }}
    />
  ),
};

export const With_Row_Selection: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          Selected: {selectedKeys.join(', ') || 'None'}
        </div>
        <TableV2
          columns={columns}
          dataSource={userData}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
          pagination={{ pageSize: 5 }}
        />
      </div>
    );
  },
};

export const With_Radio_Selection: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          Selected: {selectedKeys[0] || 'None'}
        </div>
        <TableV2
          columns={columns}
          dataSource={userData}
          rowSelection={{
            type: 'radio',
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
          pagination={{ pageSize: 5 }}
        />
      </div>
    );
  },
};

export const With_Expandable_Rows: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData}
      expandableConfig={{
        expandedRowRender: (record) => (
          <div style={{ padding: '16px' }}>
            <p><strong>Email:</strong> {record.email}</p>
            <p><strong>Role:</strong> {record.role}</p>
            <p><strong>Full Address:</strong> {record.address}</p>
          </div>
        ),
      }}
      pagination={{ pageSize: 5 }}
    />
  ),
};

// ==================== SIZE VARIANTS ====================

export const Small_Size: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      size={TableSize.Small}
      pagination={false}
    />
  ),
};

export const Medium_Size: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      size={TableSize.Medium}
      pagination={false}
    />
  ),
};

export const Large_Size: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      size={TableSize.Large}
      pagination={false}
    />
  ),
};

// ==================== BORDER VARIANTS ====================

export const Bordered: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      bordered
      pagination={false}
    />
  ),
};

export const Cell_Bordered: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      cellBordered
      pagination={false}
    />
  ),
};

export const Header_Bottom_Bordered: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      headerBottomBordered
      pagination={false}
    />
  ),
};

export const Row_Bordered: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      rowBordered
      pagination={false}
    />
  ),
};

// ==================== VISUAL VARIANTS ====================

export const No_Striped_Rows: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      alternateRowColor={false}
      pagination={false}
    />
  ),
};

export const No_Hover: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      rowHoverBackgroundEnabled={false}
      pagination={false}
    />
  ),
};

// ==================== LOADING & EMPTY STATES ====================

export const Loading: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={userData.slice(0, 4)}
      loading={true}
      pagination={false}
    />
  ),
};

export const Empty: Story = {
  render: () => (
    <TableV2
      columns={columns}
      dataSource={[]}
      emptyText="No users found"
      emptyTextDetails="Try adjusting your filters"
      pagination={false}
    />
  ),
};

// ==================== CUSTOM RENDERING ====================

export const Custom_Cell_Rendering: Story = {
  render: () => {
    const customColumns: ColumnsType<UserData> = [
      {
        key: 'avatar',
        title: '',
        width: 60,
        render: (_, record) => (
          <AvatarV2 size="m" fallback={record.name.charAt(0)} />
        ),
      },
      {
        key: 'name',
        title: 'User',
        dataIndex: 'name',
        render: (name: string, record) => (
          <div>
            <div style={{ fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{record.email}</div>
          </div>
        ),
      },
      {
        key: 'age',
        title: 'Age',
        dataIndex: 'age',
        align: 'center',
      },
      {
        key: 'role',
        title: 'Role',
        dataIndex: 'role',
        render: (role: string) => (
          <BadgeV2 active={role === 'Admin'}>
            {role}
          </BadgeV2>
        ),
      },
      {
        key: 'actions',
        title: 'Actions',
        align: 'right',
        render: () => (
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <ButtonV2 size="small" variant="neutral">
              Edit
            </ButtonV2>
            <ButtonV2 size="small" variant="disruptive-neutral">
              Delete
            </ButtonV2>
          </div>
        ),
      },
    ];

    return (
      <TableV2
        columns={customColumns}
        dataSource={userData.slice(0, 5)}
        pagination={false}
      />
    );
  },
};

export const With_Links: Story = {
  render: () => {
    const linkColumns: ColumnsType<UserData> = [
      {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        render: (name: string) => (
          <LinkV2 href="#" size="medium">
            {name}
          </LinkV2>
        ),
      },
      {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
        render: (email: string) => (
          <LinkV2 href={`mailto:${email}`} size="medium">
            {email}
          </LinkV2>
        ),
      },
      {
        key: 'address',
        title: 'Address',
        dataIndex: 'address',
      },
    ];

    return (
      <TableV2
        columns={linkColumns}
        dataSource={userData.slice(0, 5)}
        pagination={false}
      />
    );
  },
};

// ==================== ALIGNMENT ====================

export const Column_Alignment: Story = {
  render: () => {
    const alignColumns: ColumnsType<UserData> = [
      {
        key: 'name',
        title: 'Name (Left)',
        dataIndex: 'name',
        align: 'left',
      },
      {
        key: 'age',
        title: 'Age (Center)',
        dataIndex: 'age',
        align: 'center',
      },
      {
        key: 'address',
        title: 'Address (Right)',
        dataIndex: 'address',
        align: 'right',
      },
    ];

    return (
      <TableV2
        columns={alignColumns}
        dataSource={userData.slice(0, 4)}
        pagination={false}
      />
    );
  },
};

// ==================== COMPLEX EXAMPLE ====================

export const Full_Featured: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<Key[]>(['1', '3']);

    const fullColumns: ColumnsType<UserData> = [
      {
        key: 'avatar',
        title: '',
        width: 60,
        render: (_, record) => (
          <AvatarV2 size="m" fallback={record.name.charAt(0)} />
        ),
      },
      {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render: (name: string, record) => (
          <div>
            <div style={{ fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{record.email}</div>
          </div>
        ),
      },
      {
        key: 'age',
        title: 'Age',
        dataIndex: 'age',
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
      {
        key: 'address',
        title: 'Address',
        dataIndex: 'address',
      },
      {
        key: 'role',
        title: 'Role',
        dataIndex: 'role',
        render: (role: string) => (
          <BadgeV2 active={role === 'Admin'}>
            {role}
          </BadgeV2>
        ),
      },
      {
        key: 'status',
        title: 'Status',
        dataIndex: 'status',
        render: (status: string) => (
          <BadgeV2 active={status === 'active'} disruptive={status === 'inactive'}>
            {status}
          </BadgeV2>
        ),
      },
    ];

    return (
      <div>
        <div style={{ marginBottom: '16px', padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
          <strong>Selected Users:</strong> {selectedKeys.length > 0 ? selectedKeys.join(', ') : 'None'}
        </div>
        <TableV2
          columns={fullColumns}
          dataSource={userData}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
          expandableConfig={{
            expandedRowRender: (record) => (
              <div style={{ padding: '16px', background: '#fafafa' }}>
                <h4 style={{ marginTop: 0 }}>User Details</h4>
                <p><strong>Email:</strong> {record.email}</p>
                <p><strong>Role:</strong> {record.role}</p>
                <p><strong>Status:</strong> {record.status}</p>
                <p><strong>Location:</strong> {record.address}</p>
              </div>
            ),
          }}
          pagination={{
            pageSize: 5,
            showQuickJumper: true,
          }}
          bordered
          headerBottomBordered
          onRow={(record, index) => ({
            onClick: () => console.log('Row clicked:', record),
            onDoubleClick: () => console.log('Row double-clicked:', record),
          })}
        />
      </div>
    );
  },
};

