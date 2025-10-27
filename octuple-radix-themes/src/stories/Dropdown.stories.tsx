import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu, Button, Flex, Text } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Dropdown Menu',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          Options
          <Icon name="expand_more" size={18} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Icon name="edit" size={18} />
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Icon name="content_copy" size={18} />
          Duplicate
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red">
          <Icon name="delete" size={18} />
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const IconTrigger: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button 
          variant="ghost" 
          size="2"
          style={{ 
            aspectRatio: '1',
            padding: 0,
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon name="more_vert" size={20} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Icon name="edit" size={18} />
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Icon name="content_copy" size={18} />
          Duplicate
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Icon name="share" size={18} />
          Share
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red">
          <Icon name="delete" size={18} />
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const IconTriggerCircle: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button 
          variant="soft" 
          size="2"
          style={{ 
            aspectRatio: '1',
            padding: 0,
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%'
          }}
        >
          <Icon name="more_horiz" size={20} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Help</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Sign out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>
          <Icon name="settings" size={18} />
          Settings
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Account</DropdownMenu.Label>
        <DropdownMenu.Item>
          <Icon name="person" size={18} />
          Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Icon name="credit_card" size={18} />
          Billing
        </DropdownMenu.Item>
        
        <DropdownMenu.Separator />
        
        <DropdownMenu.Label>Preferences</DropdownMenu.Label>
        <DropdownMenu.Item>
          <Icon name="notifications" size={18} />
          Notifications
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Icon name="security" size={18} />
          Privacy
        </DropdownMenu.Item>
        
        <DropdownMenu.Separator />
        
        <DropdownMenu.Item color="red">
          <Icon name="logout" size={18} />
          Sign out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          <Icon name="visibility" size={18} />
          View
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.CheckboxItem checked>
          Show Toolbar
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked>
          Show Sidebar
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem>
          Show Footer
        </DropdownMenu.CheckboxItem>
        
        <DropdownMenu.Separator />
        
        <DropdownMenu.CheckboxItem checked>
          Full Screen
        </DropdownMenu.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          <Icon name="palette" size={18} />
          Theme
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.RadioGroup value="light">
          <DropdownMenu.RadioItem value="light">
            <Icon name="light_mode" size={18} />
            Light
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="dark">
            <Icon name="dark_mode" size={18} />
            Dark
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="system">
            <Icon name="computer" size={18} />
            System
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>
          <Icon name="folder" size={18} />
          File
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Icon name="note_add" size={18} />
          New File
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Icon name="create_new_folder" size={18} />
          New Folder
        </DropdownMenu.Item>
        
        <DropdownMenu.Separator />
        
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
            <Icon name="file_open" size={18} />
            Open Recent
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Project A</DropdownMenu.Item>
            <DropdownMenu.Item>Project B</DropdownMenu.Item>
            <DropdownMenu.Item>Project C</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Clear History</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        
        <DropdownMenu.Separator />
        
        <DropdownMenu.Item>
          <Icon name="save" size={18} />
          Save
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Icon name="download" size={18} />
          Export
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const InTableActions: Story = {
  render: () => (
    <Flex gap="2" align="center">
      <Text size="2">John Doe</Text>
      <Text size="2" color="gray">john@example.com</Text>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button 
            variant="ghost" 
            size="1"
            style={{ 
              aspectRatio: '1',
              padding: 0,
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon name="more_vert" size={16} />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Icon name="edit" size={14} />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Icon name="content_copy" size={14} />
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item color="red">
            <Icon name="delete" size={14} />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  ),
};

