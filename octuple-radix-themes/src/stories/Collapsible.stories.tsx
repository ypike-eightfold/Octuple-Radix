import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../components/Collapsible';
import { Icon } from '../components/Icon';
import { Flex, Text, Box } from '@radix-ui/themes';
import { useState } from 'react';

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => (
    <Box style={{ width: '400px' }}>
      <Collapsible>
        <CollapsibleTrigger>
          <span>Show more information</span>
          <Icon name="expand_more" size={18} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Box p="4">
            <Text size="2">
              This is additional information that can be shown or hidden. It uses smooth animations
              for a better user experience.
            </Text>
          </Box>
        </CollapsibleContent>
      </Collapsible>
    </Box>
  ),
};

export const Controlled = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <Flex direction="column" gap="3" style={{ width: '400px' }}>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger>
            <span>{open ? 'Hide' : 'Show'} details</span>
            <Icon name={open ? 'expand_less' : 'expand_more'} size={18} />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Box p="4">
              <Text size="2" color="gray">
                This collapsible is controlled. The trigger text and icon change based on the open state.
              </Text>
            </Box>
          </CollapsibleContent>
        </Collapsible>
        
        <Text size="2" color="gray">
          Current state: {open ? 'Open' : 'Closed'}
        </Text>
      </Flex>
    );
  },
};

export const MultipleCollapsibles = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: '500px' }}>
      <Collapsible defaultOpen>
        <CollapsibleTrigger>
          <span>Section 1: Account Settings</span>
          <Icon name="expand_more" size={18} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Box p="4">
            <Flex direction="column" gap="2">
              <Text size="2" weight="medium">Profile Information</Text>
              <Text size="2" color="gray">Update your name, email, and profile picture</Text>
            </Flex>
          </Box>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger>
          <span>Section 2: Privacy Settings</span>
          <Icon name="expand_more" size={18} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Box p="4">
            <Flex direction="column" gap="2">
              <Text size="2" weight="medium">Data Privacy</Text>
              <Text size="2" color="gray">Control who can see your information</Text>
            </Flex>
          </Box>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger>
          <span>Section 3: Notifications</span>
          <Icon name="expand_more" size={18} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Box p="4">
            <Flex direction="column" gap="2">
              <Text size="2" weight="medium">Notification Preferences</Text>
              <Text size="2" color="gray">Choose how you want to be notified</Text>
            </Flex>
          </Box>
        </CollapsibleContent>
      </Collapsible>
    </Flex>
  ),
};

export const WithRichContent = {
  render: () => (
    <Box style={{ width: '500px' }}>
      <Collapsible>
        <CollapsibleTrigger>
          <Flex align="center" gap="2">
            <Icon name="info" size={18} />
            <span>Important Information</span>
          </Flex>
          <Icon name="expand_more" size={18} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Box p="4">
            <Flex direction="column" gap="3">
              <Text size="3" weight="bold">Terms and Conditions</Text>
              <Text size="2" color="gray">
                By using this service, you agree to our terms and conditions. Please read them carefully
                before proceeding.
              </Text>
              <Flex gap="2">
                <Box p="2" style={{ background: 'var(--indigo-3)', borderRadius: 'var(--radius-2)', flex: 1 }}>
                  <Text size="1" weight="medium" color="violet">✓ Secure</Text>
                </Box>
                <Box p="2" style={{ background: 'var(--green-3)', borderRadius: 'var(--radius-2)', flex: 1 }}>
                  <Text size="1" weight="medium" color="green">✓ Private</Text>
                </Box>
                <Box p="2" style={{ background: 'var(--blue-3)', borderRadius: 'var(--radius-2)', flex: 1 }}>
                  <Text size="1" weight="medium" color="blue">✓ Fast</Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </CollapsibleContent>
      </Collapsible>
    </Box>
  ),
};

