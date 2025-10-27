import type { Meta, StoryObj } from '@storybook/react';
import { Card, Avatar, Box, Flex, Text, Button } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserProfile: Story = {
  render: () => (
    <Card style={{ maxWidth: 350 }}>
      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="2" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="2" color="gray">
            Engineering
          </Text>
        </Box>
      </Flex>
    </Card>
  ),
};

export const SignInForm: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Flex justify="center" align="center" style={{ minHeight: '100vh', padding: '20px' }}>
      <Card style={{ width: '100%', maxWidth: '600px', padding: '24px' }}>
        <Flex direction="column" gap="5">
        <Text size="5" weight="bold">
          Sign in
        </Text>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid var(--gray-6)',
                fontSize: '14px',
                fontFamily: 'Poppins',
                outline: 'none',
              }}
            />
          </label>
          <label>
            <Flex justify="between" align="center" mb="1">
              <Text as="div" size="2" weight="bold">
                Password
              </Text>
              <Text as="div" size="2" color="violet" style={{ cursor: 'pointer' }}>
                Forgot password?
              </Text>
            </Flex>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid var(--gray-6)',
                fontSize: '14px',
                fontFamily: 'Poppins',
                outline: 'none',
              }}
            />
          </label>
        </Flex>
        <Flex direction="column" gap="3" mt="1">
          <Button size="3" style={{ width: '100%' }}>
            Sign in
            <Icon name="arrow_forward" size={18} />
          </Button>
          <Flex gap="1" justify="center">
            <Text size="2" color="gray">
              Don't have an account?
            </Text>
            <Text size="2" color="violet" weight="bold" style={{ cursor: 'pointer' }}>
              Create account
            </Text>
          </Flex>
        </Flex>
      </Flex>
      </Card>
    </Flex>
  ),
};

