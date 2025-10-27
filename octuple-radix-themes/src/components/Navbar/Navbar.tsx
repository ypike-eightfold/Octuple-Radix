import React from 'react';
import { Flex, Box, Button, IconButton, DropdownMenu, Avatar } from '@radix-ui/themes';
import { Icon } from '../Icon';
import './Navbar.css';

export interface NavbarLink {
  /**
   * Link label
   */
  label: string;
  /**
   * Link href
   */
  href: string;
  /**
   * Optional icon
   */
  icon?: string;
}

export interface NavbarProps {
  /**
   * Logo/brand element
   */
  logo?: React.ReactNode;
  /**
   * Navigation links
   */
  links?: NavbarLink[];
  /**
   * User info (shows avatar if provided)
   */
  user?: {
    name: string;
    email?: string;
    avatar?: string;
  };
  /**
   * Callback when logout is clicked
   */
  onLogout?: () => void;
  /**
   * Additional action buttons
   */
  actions?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  links = [],
  user,
  onLogout,
  actions,
}) => {
  return (
    <Box className="navbar-root">
      <Flex justify="between" align="center" className="navbar-container">
        {/* Logo/Brand */}
        <Flex align="center" gap="6">
          {logo && <Box className="navbar-logo">{logo}</Box>}
          
          {/* Navigation Links */}
          {links.length > 0 && (
            <Flex gap="1" className="navbar-links">
              {links.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  asChild
                >
                  <a href={link.href} className="navbar-link">
                    {link.icon && <Icon name={link.icon} size={18} />}
                    {link.label}
                  </a>
                </Button>
              ))}
            </Flex>
          )}
        </Flex>

        {/* Actions and User Menu */}
        <Flex align="center" gap="3">
          {actions}
          
          {user && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <IconButton variant="ghost" style={{ cursor: 'pointer' }}>
                  <Avatar
                    src={user.avatar}
                    fallback={user.name.charAt(0)}
                    size="2"
                    radius="full"
                  />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label>
                  <Flex direction="column" gap="1">
                    <Box>{user.name}</Box>
                    {user.email && (
                      <Box style={{ fontSize: '12px', color: 'var(--gray-11)' }}>
                        {user.email}
                      </Box>
                    )}
                  </Flex>
                </DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <Icon name="person" size={18} />
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Icon name="settings" size={18} />
                  Settings
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item color="red" onClick={onLogout}>
                  <Icon name="logout" size={18} />
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

