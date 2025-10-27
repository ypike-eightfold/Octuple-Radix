import type { Meta, StoryObj } from '@storybook/react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '../components/NavigationMenu';
import { Flex, Box, Text } from '@radix-ui/themes';

const meta = {
  title: 'Components/Navigation Menu',
  component: NavigationMenu,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <Box p="4" style={{ width: '400px' }}>
            <Flex direction="column" gap="2">
              <NavigationMenuLink href="#" style={{ padding: '12px' }}>
                <Text weight="bold" size="2">Product 1</Text>
                <Text size="1" color="gray">Description for product 1</Text>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" style={{ padding: '12px' }}>
                <Text weight="bold" size="2">Product 2</Text>
                <Text size="1" color="gray">Description for product 2</Text>
              </NavigationMenuLink>
            </Flex>
          </Box>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
        <NavigationMenuContent>
          <Box p="4" style={{ width: '400px' }}>
            <Flex direction="column" gap="2">
              <NavigationMenuLink href="#" style={{ padding: '12px' }}>
                <Text weight="bold" size="2">Solution 1</Text>
                <Text size="1" color="gray">Description for solution 1</Text>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" style={{ padding: '12px' }}>
                <Text weight="bold" size="2">Solution 2</Text>
                <Text size="1" color="gray">Description for solution 2</Text>
              </NavigationMenuLink>
            </Flex>
          </Box>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="#">About</NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="#">Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};

