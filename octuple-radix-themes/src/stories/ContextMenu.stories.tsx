import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu, Flex, Text, Card } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Context Menu',
  component: ContextMenu.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{ padding: '60px 40px', cursor: 'context-menu' }}>
          <Text>Right-click here to open context menu</Text>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <Icon name="edit" size={18} />
          Edit
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="content_copy" size={18} />
          Duplicate
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item color="red">
          <Icon name="delete" size={18} />
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{ padding: '60px 40px', cursor: 'context-menu' }}>
          <Text>Right-click for context menu with submenu</Text>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <Icon name="note_add" size={18} />
          New File
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="create_new_folder" size={18} />
          New Folder
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>
            <Icon name="file_open" size={18} />
            Open Recent
          </ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Project A</ContextMenu.Item>
            <ContextMenu.Item>Project B</ContextMenu.Item>
            <ContextMenu.Item>Project C</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Clear History</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <Icon name="download" size={18} />
          Export
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

export const WithCheckboxes: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{ padding: '60px 40px', cursor: 'context-menu' }}>
          <Text>Right-click to toggle options</Text>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>View Options</ContextMenu.Label>
        <ContextMenu.CheckboxItem checked>
          <Icon name="visibility" size={18} />
          Show Sidebar
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem checked={false}>
          <Icon name="grid_view" size={18} />
          Show Grid
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem>
          <Icon name="code" size={18} />
          Show Line Numbers
        </ContextMenu.CheckboxItem>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{ padding: '60px 40px', cursor: 'context-menu' }}>
          <Text>Right-click to select view mode</Text>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>View Mode</ContextMenu.Label>
        <ContextMenu.RadioGroup value="grid">
          <ContextMenu.RadioItem value="list">
            <Icon name="list" size={18} />
            List View
          </ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="grid">
            <Icon name="grid_view" size={18} />
            Grid View
          </ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="compact">
            <Icon name="view_compact" size={18} />
            Compact View
          </ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

export const FileActions: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{ padding: '60px 40px', cursor: 'context-menu' }}>
          <Flex direction="column" gap="2" align="center">
            <Icon name="description" size={48} color="var(--gray-9)" />
            <Text>Document.pdf</Text>
            <Text size="1" color="gray">2.4 MB</Text>
          </Flex>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <Icon name="file_open" size={18} />
          Open
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="visibility" size={18} />
          Preview
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <Icon name="drive_file_rename_outline" size={18} />
          Rename
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="content_copy" size={18} />
          Duplicate
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <Icon name="download" size={18} />
          Download
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="share" size={18} />
          Share
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <Icon name="info" size={18} />
          Properties
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item color="red">
          <Icon name="delete" size={18} />
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

