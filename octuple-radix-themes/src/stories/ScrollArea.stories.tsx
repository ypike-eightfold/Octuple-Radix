import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, Card, Flex, Text, Separator } from '@radix-ui/themes';

const meta = {
  title: 'Components/Scroll Area',
  component: ScrollArea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: 300 }}>
      <ScrollArea style={{ height: 200 }}>
        <Flex direction="column" gap="2" p="3">
          {Array.from({ length: 20 }, (_, i) => (
            <Text key={i} size="2">
              List item {i + 1}
            </Text>
          ))}
        </Flex>
      </ScrollArea>
    </Card>
  ),
};

export const WithSeparators: Story = {
  render: () => (
    <Card style={{ width: 300 }}>
      <ScrollArea style={{ height: 250 }}>
        <Flex direction="column">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i}>
              <Text size="2" style={{ display: 'block', padding: '12px 16px' }}>
                Item {i + 1}
              </Text>
              {i < 14 && <Separator size="4" />}
            </div>
          ))}
        </Flex>
      </ScrollArea>
    </Card>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Card style={{ width: 500 }}>
      <ScrollArea style={{ height: 300 }}>
        <Flex direction="column" gap="3" p="4">
          <Text size="5" weight="bold">Terms and Conditions</Text>
          <Text size="2" color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text size="2" color="gray">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text size="2" color="gray">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
          <Text size="2" color="gray">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </Text>
          <Text size="2" color="gray">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
            excepturi sint occaecati cupiditate non provident.
          </Text>
        </Flex>
      </ScrollArea>
    </Card>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <Card>
      <ScrollArea type="auto" scrollbars="horizontal" style={{ width: 400 }}>
        <Flex gap="3" p="3" style={{ minWidth: 800 }}>
          {Array.from({ length: 10 }, (_, i) => (
            <Card key={i} style={{ minWidth: 150, padding: '20px' }}>
              <Text weight="bold">Card {i + 1}</Text>
            </Card>
          ))}
        </Flex>
      </ScrollArea>
    </Card>
  ),
};

export const BothDirections: Story = {
  render: () => (
    <Card>
      <ScrollArea type="auto" scrollbars="both" style={{ width: 400, height: 300 }}>
        <div style={{ minWidth: 800, minHeight: 600, padding: '16px' }}>
          <Text size="5" weight="bold">Large Content Area</Text>
          <Flex direction="column" gap="3" mt="3">
            {Array.from({ length: 20 }, (_, i) => (
              <Text key={i} size="2">
                This is a long line of content that extends beyond the viewport width {i + 1}
              </Text>
            ))}
          </Flex>
        </div>
      </ScrollArea>
    </Card>
  ),
};

export const MenuList: Story = {
  render: () => (
    <Card style={{ width: 250 }}>
      <ScrollArea style={{ height: 300 }}>
        <Flex direction="column">
          {[
            'Dashboard',
            'Analytics',
            'Projects',
            'Tasks',
            'Calendar',
            'Documents',
            'Team',
            'Settings',
            'Profile',
            'Notifications',
            'Integrations',
            'Billing',
            'Security',
            'API Keys',
            'Webhooks',
          ].map((item, i) => (
            <div key={i}>
              <Text
                size="2"
                style={{
                  display: 'block',
                  padding: '10px 16px',
                  cursor: 'pointer',
                }}
              >
                {item}
              </Text>
              {i < 14 && <Separator size="4" />}
            </div>
          ))}
        </Flex>
      </ScrollArea>
    </Card>
  ),
};

