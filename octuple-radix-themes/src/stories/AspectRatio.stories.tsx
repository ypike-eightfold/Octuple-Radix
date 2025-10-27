import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio, Card, Flex } from '@radix-ui/themes';

const meta = {
  title: 'Components/Aspect Ratio',
  component: AspectRatio,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?w=800&auto=format&fit=crop"
          alt="Landscape"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </AspectRatio>
    </Card>
  ),
};

export const Square: Story = {
  render: () => (
    <Card style={{ maxWidth: 300 }}>
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1502791451862-7bd8e91a3146?w=800&auto=format&fit=crop"
          alt="Portrait"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </AspectRatio>
    </Card>
  ),
};

export const Portrait: Story = {
  render: () => (
    <Card style={{ maxWidth: 300 }}>
      <AspectRatio ratio={3 / 4}>
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop"
          alt="Portrait"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </AspectRatio>
    </Card>
  ),
};

export const WithVideo: Story = {
  render: () => (
    <Card style={{ maxWidth: 600 }}>
      <AspectRatio ratio={16 / 9}>
        <div style={{ 
          width: '100%', 
          height: '100%', 
          background: 'var(--gray-3)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <video
            controls
            style={{ width: '100%', height: '100%', borderRadius: '8px' }}
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
      </AspectRatio>
    </Card>
  ),
};

export const MultipleRatios: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Card style={{ maxWidth: 400 }}>
        <AspectRatio ratio={21 / 9}>
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, var(--indigo-3) 0%, var(--indigo-6) 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--indigo-11)',
            fontSize: '18px',
            fontWeight: 500
          }}>
            21:9 Ultra Wide
          </div>
        </AspectRatio>
      </Card>
      
      <Card style={{ maxWidth: 400 }}>
        <AspectRatio ratio={16 / 9}>
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, var(--blue-3) 0%, var(--blue-6) 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--blue-11)',
            fontSize: '18px',
            fontWeight: 500
          }}>
            16:9 Widescreen
          </div>
        </AspectRatio>
      </Card>
      
      <Card style={{ maxWidth: 400 }}>
        <AspectRatio ratio={4 / 3}>
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, var(--green-3) 0%, var(--green-6) 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--green-11)',
            fontSize: '18px',
            fontWeight: 500
          }}>
            4:3 Standard
          </div>
        </AspectRatio>
      </Card>
    </Flex>
  ),
};

