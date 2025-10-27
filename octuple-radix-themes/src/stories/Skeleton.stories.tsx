import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, Box, Flex, Card, Text } from '@radix-ui/themes';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Skeleton width="200px" height="20px" />,
};

export const TextSkeleton: Story = {
  render: () => (
    <Flex direction="column" gap="2" style={{ width: 400 }}>
      <Skeleton>
        <Text>Loading text content...</Text>
      </Skeleton>
      <Skeleton>
        <Text>This text is also loading...</Text>
      </Skeleton>
      <Skeleton width="60%">
        <Text>Shorter line</Text>
      </Skeleton>
    </Flex>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <Card style={{ width: 350 }}>
      <Flex gap="3">
        <Skeleton>
          <Box width="48px" height="48px" style={{ borderRadius: '50%' }} />
        </Skeleton>
        <Flex direction="column" gap="2" style={{ flex: 1 }}>
          <Skeleton>
            <Text size="3" weight="bold">Loading name...</Text>
          </Skeleton>
          <Skeleton>
            <Text size="2">Loading description text...</Text>
          </Skeleton>
        </Flex>
      </Flex>
    </Card>
  ),
};

export const ProfileSkeleton: Story = {
  render: () => (
    <Card style={{ width: 400 }}>
      <Flex direction="column" gap="4">
        {/* Header */}
        <Flex gap="3" align="center">
          <Skeleton>
            <Box width="64px" height="64px" style={{ borderRadius: '50%' }} />
          </Skeleton>
          <Flex direction="column" gap="2" style={{ flex: 1 }}>
            <Skeleton width="200px">
              <Text size="4" weight="bold">Loading name...</Text>
            </Skeleton>
            <Skeleton width="150px">
              <Text size="2">Loading role...</Text>
            </Skeleton>
          </Flex>
        </Flex>

        {/* Bio */}
        <Flex direction="column" gap="2">
          <Skeleton>
            <Text>Loading bio line one...</Text>
          </Skeleton>
          <Skeleton>
            <Text>Loading bio line two...</Text>
          </Skeleton>
          <Skeleton width="70%">
            <Text>Loading bio line three...</Text>
          </Skeleton>
        </Flex>

        {/* Stats */}
        <Flex gap="4">
          <Flex direction="column" gap="1">
            <Skeleton width="60px">
              <Text size="4" weight="bold">000</Text>
            </Skeleton>
            <Skeleton width="80px">
              <Text size="1">Following</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column" gap="1">
            <Skeleton width="60px">
              <Text size="4" weight="bold">000</Text>
            </Skeleton>
            <Skeleton width="80px">
              <Text size="1">Followers</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column" gap="1">
            <Skeleton width="60px">
              <Text size="4" weight="bold">000</Text>
            </Skeleton>
            <Skeleton width="80px">
              <Text size="1">Posts</Text>
            </Skeleton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: 400 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Card key={i}>
          <Flex gap="3" align="center">
            <Skeleton>
              <Box width="40px" height="40px" style={{ borderRadius: '50%' }} />
            </Skeleton>
            <Flex direction="column" gap="1" style={{ flex: 1 }}>
              <Skeleton width={i % 2 === 0 ? '80%' : '60%'}>
                <Text size="2" weight="medium">Loading title...</Text>
              </Skeleton>
              <Skeleton width="40%">
                <Text size="1">Loading subtitle...</Text>
              </Skeleton>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Flex>
  ),
};

