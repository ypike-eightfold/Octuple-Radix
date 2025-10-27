import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button, IconButton, Flex, Text } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip content="Settings">
      <IconButton>
        <Icon name="settings" size={18} />
      </IconButton>
    </Tooltip>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <Tooltip content="Edit">
        <IconButton variant="soft">
          <Icon name="edit" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Delete">
        <IconButton variant="soft" color="red">
          <Icon name="delete" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Share">
        <IconButton variant="soft">
          <Icon name="share" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Download">
        <IconButton variant="soft">
          <Icon name="download" size={18} />
        </IconButton>
      </Tooltip>
    </Flex>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip content="This is a longer tooltip message that provides more detailed information about the action">
      <Button variant="soft">Hover for long tooltip</Button>
    </Tooltip>
  ),
};

export const WithText: Story = {
  render: () => (
    <Flex gap="2" align="center">
      <Text size="2">
        Hover over the{' '}
        <Tooltip content="Additional information">
          <Text style={{ textDecoration: 'underline', cursor: 'help' }}>
            underlined text
          </Text>
        </Tooltip>
        {' '}for more details.
      </Text>
    </Flex>
  ),
};

export const AllDirections: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center">
      <Tooltip content="Top tooltip" side="top">
        <Button variant="soft">Top</Button>
      </Tooltip>
      
      <Flex gap="4">
        <Tooltip content="Left tooltip" side="left">
          <Button variant="soft">Left</Button>
        </Tooltip>
        
        <Tooltip content="Right tooltip" side="right">
          <Button variant="soft">Right</Button>
        </Tooltip>
      </Flex>
      
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="soft">Bottom</Button>
      </Tooltip>
    </Flex>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Flex gap="3">
      <Tooltip content="No delay" delayDuration={0}>
        <Button variant="soft">No delay</Button>
      </Tooltip>
      
      <Tooltip content="Default delay">
        <Button variant="soft">Default delay</Button>
      </Tooltip>
      
      <Tooltip content="Long delay" delayDuration={1000}>
        <Button variant="soft">Long delay (1s)</Button>
      </Tooltip>
    </Flex>
  ),
};

export const ActionButtons: Story = {
  render: () => (
    <Flex gap="2">
      <Tooltip content="Save changes">
        <Button>
          <Icon name="save" size={18} />
          Save
        </Button>
      </Tooltip>
      
      <Tooltip content="Cancel and discard changes">
        <Button variant="soft">
          Cancel
        </Button>
      </Tooltip>
    </Flex>
  ),
};

