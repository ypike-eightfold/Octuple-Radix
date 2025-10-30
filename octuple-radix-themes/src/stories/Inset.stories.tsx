import type { Meta, StoryObj } from '@storybook/react';
import { Inset, Card, Text, Flex, Strong } from '@radix-ui/themes';

const meta = {
  title: 'Components/Inset',
  component: Inset,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Inset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 }}>
      <Inset pb="current">
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=800&auto=format&fit=crop"
          alt="Bold typography"
          style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover' }}
        />
      </Inset>
      <Flex direction="column" p="4">
        <Text as="p" size="3">
          <Strong>Typography</Strong> is the art and technique of arranging type to make written 
          language legible, readable and appealing when displayed.
        </Text>
      </Flex>
    </Card>
  ),
};

export const Top: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 }}>
      <Inset side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
          alt="Nature"
          style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover' }}
        />
      </Inset>
      <Flex direction="column" gap="3" p="4">
        <Text size="5" weight="bold">Beautiful Landscapes</Text>
        <Text size="2" color="gray">
          Explore stunning natural scenery from around the world.
        </Text>
      </Flex>
    </Card>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 }}>
      <Flex direction="column" gap="3" p="4">
        <Text size="5" weight="bold">Article Title</Text>
        <Text size="2" color="gray">
          This is a sample article with an image at the bottom.
        </Text>
      </Flex>
      <Inset side="bottom" pt="current">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop"
          alt="Workspace"
          style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover' }}
        />
      </Inset>
    </Card>
  ),
};

export const Left: Story = {
  render: () => (
    <Card style={{ maxWidth: 500 }}>
      <Flex gap="0">
        <Inset side="left">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop"
            alt="Profile"
            style={{ display: 'block', width: 150, height: '100%', objectFit: 'cover' }}
          />
        </Inset>
        <Flex direction="column" gap="2" p="4">
          <Text size="5" weight="bold">Sarah Johnson</Text>
          <Text size="2" color="gray">
            Senior Product Designer at Acme Inc.
          </Text>
          <Text size="2">
            Passionate about creating intuitive user experiences and design systems.
          </Text>
        </Flex>
      </Flex>
    </Card>
  ),
};

export const Right: Story = {
  render: () => (
    <Card style={{ maxWidth: 500 }}>
      <Flex gap="0">
        <Flex direction="column" gap="2" p="4">
          <Text size="5" weight="bold">Tech News</Text>
          <Text size="2" color="gray">
            Latest updates from the technology world.
          </Text>
          <Text size="2">
            Stay informed with breaking news and insights.
          </Text>
        </Flex>
        <Inset side="right">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop"
            alt="Technology"
            style={{ display: 'block', width: 150, height: '100%', objectFit: 'cover' }}
          />
        </Inset>
      </Flex>
    </Card>
  ),
};

export const AllSides: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 }}>
      <Inset side="all">
        <img
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?w=800&auto=format&fit=crop"
          alt="Mountain"
          style={{ display: 'block', width: '100%', height: 250, objectFit: 'cover' }}
        />
      </Inset>
    </Card>
  ),
};

export const HorizontalOnly: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 }}>
      <Inset side="x" pb="current">
        <div style={{ 
          padding: '20px 0',
          background: 'linear-gradient(135deg, var(--indigo-3) 0%, var(--indigo-6) 100%)',
          textAlign: 'center'
        }}>
          <Text size="5" weight="bold" style={{ color: 'white' }}>Full Width Banner</Text>
        </div>
      </Inset>
      <Flex direction="column" gap="3" p="4">
        <Text size="3">
          This banner extends to both left and right edges of the card.
        </Text>
      </Flex>
    </Card>
  ),
};

export const VerticalOnly: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 }}>
      <Inset side="y">
        <div style={{ 
          padding: '40px 20px',
          background: 'linear-gradient(180deg, var(--blue-3) 0%, var(--blue-6) 100%)',
          textAlign: 'center'
        }}>
          <Text size="5" weight="bold">Full Height Content</Text>
          <Text size="2" color="gray" style={{ display: 'block', marginTop: '8px' }}>
            Extends to top and bottom
          </Text>
        </div>
      </Inset>
    </Card>
  ),
};

