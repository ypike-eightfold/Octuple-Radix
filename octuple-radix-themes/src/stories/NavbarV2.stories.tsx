import type { Meta, StoryObj } from '@storybook/react';
import { NavbarV2 } from '../components/NavbarV2';
import { ButtonV2 } from '../components/ButtonV2';
import { Icon } from '../components/Icon';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Navbar',
  component: NavbarV2,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navigation bar component with glassmorphism, tabs, search, and actions based on Figma design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    productName: {
      control: 'text',
      description: 'Product name displayed next to the logo',
    },
  },
} satisfies Meta<typeof NavbarV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Eightfold Logo Component
const EightfoldLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#gradient)" />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#50CEE1" />
        <stop offset="50%" stopColor="#6C7AE0" />
        <stop offset="100%" stopColor="#9B6CB7" />
      </linearGradient>
    </defs>
  </svg>
);

// Product Icon Component
const ProductIcon = () => (
  <div
    style={{
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #50CEE1 0%, #6C7AE0 50%, #9B6CB7 100%)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
    }}
  >
    TA
  </div>
);

// Avatar Component
const Avatar = () => (
  <div
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '16px',
      fontWeight: 600,
    }}
  >
    KM
  </div>
);

// Copilot Icon (gradient button)
const CopilotButton = () => (
  <div
    style={{
      padding: '8px',
      background: 'linear-gradient(90deg, #BCE4FF 0%, #CACFFC 49%, #EAD3E8 100%)',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    }}
  >
    <Icon name="smart_toy" size={16} style={{ color: '#2B3271' }} />
  </div>
);

export const TalentAcquisition: Story = {
  render: () => (
    <NavbarV2
      logo={<EightfoldLogo />}
      productIcon={<ProductIcon />}
      productName="Talent Acquisition"
      tabs={[
        { label: 'Position', active: true, onClick: () => console.log('Position clicked') },
        { 
          label: 'Talent', 
          hasDropdown: true, 
          menuItems: [
            {
              icon: 'person',
              label: 'Candidates',
              description: 'Browse through all the candidates',
              onClick: () => console.log('Candidates clicked'),
            },
            {
              icon: 'groups',
              label: 'Communities',
              description: 'Access to dozens of talent communities',
              onClick: () => console.log('Communities clicked'),
            },
          ],
          onClick: () => console.log('Talent clicked'),
        },
        { 
          label: 'Engage', 
          hasDropdown: true,
          menuItems: [
            {
              icon: 'mail',
              label: 'Email Campaigns',
              description: 'Send targeted email campaigns',
              onClick: () => console.log('Email clicked'),
            },
            {
              icon: 'campaign',
              label: 'Nurture Programs',
              description: 'Automated talent nurturing',
              onClick: () => console.log('Nurture clicked'),
            },
          ],
          onClick: () => console.log('Engage clicked'),
        },
        { label: 'Insight', onClick: () => console.log('Insight clicked') },
        { 
          label: 'More', 
          hasDropdown: true,
          menuItems: [
            {
              icon: 'settings',
              label: 'Settings',
              description: 'Manage your preferences',
              onClick: () => console.log('Settings clicked'),
            },
            {
              icon: 'help',
              label: 'Help & Support',
              description: 'Get help when you need it',
              onClick: () => console.log('Help clicked'),
            },
            {
              icon: 'info',
              label: 'About',
              description: 'Learn more about Talent Acquisition',
              onClick: () => console.log('About clicked'),
            },
          ],
          onClick: () => console.log('More clicked'),
        },
      ]}
      searchBar={{
        placeholder: 'Type to search',
        onChange: (value) => console.log('Search:', value),
        onSearch: (value) => console.log('Search submitted:', value),
      }}
      actionButtons={
        <>
          <CopilotButton />
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="settings" size={20} />
          </ButtonV2>
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="notifications" size={20} />
            <span
              style={{
                marginLeft: '4px',
                background: '#b0f3fe',
                color: '#025966',
                padding: '0 4px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '20px',
              }}
            >
              8
            </span>
          </ButtonV2>
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="apps" size={20} />
          </ButtonV2>
        </>
      }
      profile={{
        avatar: <Avatar />,
        dropdown: (
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="expand_more" size={20} />
          </ButtonV2>
        ),
      }}
    />
  ),
};

export const ResourceManagement: Story = {
  render: () => (
    <NavbarV2
      logo={<EightfoldLogo />}
      productIcon={
        <div
          style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          RM
        </div>
      }
      productName="Resource Management"
      tabs={[
        { label: 'Dashboard', active: true },
        { label: 'Projects', hasDropdown: true },
        { label: 'Resources', hasDropdown: true },
        { label: 'Reports' },
      ]}
      searchBar={{
        placeholder: 'Search projects or resources',
      }}
      actionButtons={
        <>
          <CopilotButton />
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="notifications" size={20} />
          </ButtonV2>
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="apps" size={20} />
          </ButtonV2>
        </>
      }
      profile={{
        avatar: <Avatar />,
        dropdown: (
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="expand_more" size={20} />
          </ButtonV2>
        ),
      }}
    />
  ),
};

export const MinimalNavbar: Story = {
  render: () => (
    <NavbarV2
      logo={<EightfoldLogo />}
      productName="Octuple"
      tabs={[
        { label: 'Components', active: true },
        { label: 'Design Tokens' },
        { label: 'Documentation' },
      ]}
      searchBar={{
        placeholder: 'Search components',
      }}
      profile={{
        avatar: <Avatar />,
        dropdown: (
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="expand_more" size={20} />
          </ButtonV2>
        ),
      }}
    />
  ),
};

export const WithoutSearch: Story = {
  render: () => (
    <NavbarV2
      logo={<EightfoldLogo />}
      productIcon={<ProductIcon />}
      productName="Career Hub"
      tabs={[
        { label: 'My Career', active: true },
        { label: 'Opportunities', hasDropdown: true },
        { label: 'Team', hasDropdown: true },
        { label: 'Insights' },
      ]}
      actionButtons={
        <>
          <ButtonV2 variant="system-ui" size="medium">
            <Icon name="notifications" size={20} />
          </ButtonV2>
        </>
      }
      profile={{
        avatar: <Avatar />,
      }}
    />
  ),
};

export const OnlyBranding: Story = {
  render: () => (
    <NavbarV2
      logo={<EightfoldLogo />}
      productIcon={<ProductIcon />}
      productName="Talent Design"
    />
  ),
};

export const Interactive: Story = {
  args: {
    logo: <EightfoldLogo />,
    productIcon: <ProductIcon />,
    productName: 'Talent Acquisition',
    tabs: [
      { label: 'Position', active: true },
      { label: 'Talent', hasDropdown: true },
      { label: 'Engage', hasDropdown: true },
      { label: 'Insight' },
    ],
    searchBar: {
      placeholder: 'Type to search',
    },
  },
};

