import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, Avatar, Box, Flex, Text, Link } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link href="#">@octuple</Link>
      </HoverCard.Trigger>
      <HoverCard.Content maxWidth="300px">
        <Flex gap="3">
          <Avatar
            size="3"
            radius="full"
            fallback="O"
            color="indigo"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Octuple Design System
            </Text>
            <Text as="div" size="2" color="gray">
              @octuple
            </Text>
            <Text as="div" size="1" style={{ marginTop: 8 }}>
              A modern design system built with Radix Themes featuring indigo accents and Poppins font.
            </Text>
          </Box>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Text size="2">
      Designed by{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Sarah Johnson</Link>
        </HoverCard.Trigger>
        <HoverCard.Content maxWidth="320px">
          <Flex gap="3">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=128&h=128&fit=crop"
              fallback="SJ"
              radius="full"
            />
            <Box style={{ flex: 1 }}>
              <Flex direction="column" gap="1">
                <Text size="2" weight="bold">
                  Sarah Johnson
                </Text>
                <Text size="1" color="gray">
                  Lead Designer
                </Text>
                <Text size="1" style={{ marginTop: 8 }}>
                  Passionate about creating beautiful and functional user interfaces.
                  10+ years of experience in product design.
                </Text>
                <Flex gap="3" mt="2">
                  <Flex gap="1" align="center">
                    <Icon name="work" size={14} />
                    <Text size="1" color="gray">Eightfold AI</Text>
                  </Flex>
                  <Flex gap="1" align="center">
                    <Icon name="location_on" size={14} />
                    <Text size="1" color="gray">San Francisco</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>
      {' '}and the team.
    </Text>
  ),
};

export const QuickInfo: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap">
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Hover for info</Link>
        </HoverCard.Trigger>
        <HoverCard.Content maxWidth="260px">
          <Flex direction="column" gap="2">
            <Flex gap="2" align="center">
              <Icon name="info" size={18} color="var(--accent-9)" />
              <Text size="2" weight="bold">Quick Tip</Text>
            </Flex>
            <Text size="2" color="gray">
              Hover cards are great for showing additional context without cluttering the UI.
            </Text>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>
    </Flex>
  ),
};

