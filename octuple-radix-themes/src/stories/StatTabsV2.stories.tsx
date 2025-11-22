import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatTabsV2, StatV2, StatTabSize, StatTabsDirection } from '../components/StatTabsV2';
import type { StatThemeName, StatValidationStatus } from '../components/StatTabsV2';

const meta: Meta<typeof StatTabsV2> = {
  title: 'Octuple V2.5/StatTabsV2',
  component: StatTabsV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Stat Tabs are specialized tabs for displaying statistics and metrics, built with Radix UI matching Octuple API.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatTabsV2>;

const themes: StatThemeName[] = [
  'red',
  'redOrange',
  'orange',
  'yellow',
  'yellowGreen',
  'green',
  'blueGreen',
  'blue',
  'blueViolet',
  'violet',
  'violetRed',
  'grey',
];

// ==================== MEDIUM SIZE ====================
export const Stat_Medium: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.Medium}
        lineClamp={2}
        maxWidth={240}
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Label 1"
          ratioA={2}
          ratioB="(5%)"
          ariaLabel="Label 1, 2 out of 5%"
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Label 2"
          ratioA={2}
          ratioB="(5%)"
          ariaLabel="Label 2, 2 out of 5%"
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Label 3"
          ratioA={2}
          ratioB="(5%)"
          status="success"
          ariaLabel="Label 3, 2 out of 5%"
        />
        <StatV2
          value="tab4"
          icon="account_circle"
          label="Label 4"
          ratioA={2}
          ratioB="(5%)"
          disabled
          ariaLabel="Label 4, 2 out of 5%"
        />
      </StatTabsV2>
    );
  },
};

// ==================== SMALL SIZE ====================
export const Stat_Small: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.Small}
        lineClamp={2}
        maxWidth={240}
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Label 1"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Label 2"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Label 3"
          ratioA={2}
          ratioB="(5%)"
          status="success"
        />
        <StatV2
          value="tab4"
          icon="account_circle"
          label="Label 4"
          ratioA={2}
          ratioB="(5%)"
          disabled
        />
      </StatTabsV2>
    );
  },
};

// ==================== XSMALL SIZE ====================
export const Stat_XSmall: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.XSmall}
        lineClamp={1}
        maxWidth={240}
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Label 1"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Label 2"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Label 3"
          ratioA={2}
          ratioB="(5%)"
          status="success"
        />
        <StatV2
          value="tab4"
          icon="account_circle"
          label="Label 4"
          ratioA={2}
          ratioB="(5%)"
          disabled
        />
      </StatTabsV2>
    );
  },
};

// ==================== WITH BUTTON ====================
export const Stat_With_Button: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.Medium}
        lineClamp={1}
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Label 1"
          ratioA={2}
          ratioB="(5%)"
          buttonProps={{
            ariaLabel: 'Send reminder',
            icon: 'notifications_outlined',
            onClick: (e) => {
              console.log('Button clicked on tab 1');
            },
          }}
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Label 2"
          ratioA={2}
          ratioB="(5%)"
          buttonProps={{
            ariaLabel: 'Send reminder',
            icon: 'notifications_outlined',
            onClick: (e) => {
              console.log('Button clicked on tab 2');
            },
          }}
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Label 3"
          ratioA={2}
          ratioB="(5%)"
          status="success"
          buttonProps={{
            ariaLabel: 'Send reminder',
            icon: 'notifications_outlined',
            onClick: (e) => {
              console.log('Button clicked on tab 3');
            },
          }}
        />
        <StatV2
          value="tab4"
          icon="account_circle"
          label="Label 4"
          ratioA={2}
          ratioB="(5%)"
          disabled
          buttonProps={{
            ariaLabel: 'Send reminder',
            icon: 'notifications_outlined',
            onClick: (e) => {
              console.log('Button clicked on tab 4');
            },
          }}
        />
      </StatTabsV2>
    );
  },
};

// ==================== VERTICAL ====================
export const Stat_Vertical: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <div style={{ width: '300px' }}>
        <StatTabsV2
          value={activeTab}
          onChange={setActiveTab}
          size={StatTabSize.Medium}
          direction={StatTabsDirection.Vertical}
          fullWidth={false}
          lineClamp={2}
        >
          <StatV2
            value="tab1"
            icon="account_circle"
            label="Label 1"
            ratioA={2}
            ratioB="(5%)"
          />
          <StatV2
            value="tab2"
            icon="account_circle"
            label="Label 2"
            ratioA={2}
            ratioB="(5%)"
          />
          <StatV2
            value="tab3"
            icon="account_circle"
            label="Label 3"
            ratioA={2}
            ratioB="(5%)"
            status="success"
          />
          <StatV2
            value="tab4"
            icon="account_circle"
            label="Label 4"
            ratioA={2}
            ratioB="(5%)"
            disabled
          />
        </StatTabsV2>
      </div>
    );
  },
};

// ==================== READ ONLY ====================
export const Stat_Group_Read_Only: Story = {
  render: () => {
    return (
      <StatTabsV2
        defaultValue="tab1"
        size={StatTabSize.Medium}
        statgrouptheme="blueGreen"
        readOnly={true}
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Label 1"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Label 2"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Label 3"
          ratioA={2}
          ratioB="(5%)"
          status="success"
        />
        <StatV2
          value="tab4"
          icon="account_circle"
          label="Label 4"
          ratioA={2}
          ratioB="(5%)"
          disabled
        />
      </StatTabsV2>
    );
  },
};

// ==================== GROUP THEME ====================
export const Stat_Group_Theme: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.Medium}
        statgrouptheme="blueGreen"
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Label 1"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Label 2"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Label 3"
          ratioA={2}
          ratioB="(5%)"
          status="success"
        />
        <StatV2
          value="tab4"
          icon="account_circle"
          label="Label 4"
          ratioA={2}
          ratioB="(5%)"
          disabled
        />
      </StatTabsV2>
    );
  },
};

// ==================== ITEM THEME OVERRIDE ====================
export const Stat_Item_Theme_Override: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.Medium}
        statgrouptheme="blueGreen"
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Label 1"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Label 2"
          ratioA={2}
          ratioB="(5%)"
          theme="blueViolet"
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Label 3"
          ratioA={2}
          ratioB="(5%)"
          status="success"
        />
        <StatV2
          value="tab4"
          icon="account_circle"
          label="Label 4"
          ratioA={2}
          ratioB="(5%)"
          disabled
        />
      </StatTabsV2>
    );
  },
};

// ==================== ALL THEMES ====================
export const All_Themes: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {themes.map((theme) => {
          const [activeTab, setActiveTab] = useState(`${theme}-tab1`);
          return (
            <div key={theme}>
              <h4 style={{ marginBottom: '12px', textTransform: 'capitalize' }}>
                {theme} Theme
              </h4>
              <StatTabsV2
                value={activeTab}
                onChange={setActiveTab}
                size={StatTabSize.Medium}
                statgrouptheme={theme}
              >
                <StatV2
                  value={`${theme}-tab1`}
                  icon="account_circle"
                  label="Tab 1"
                  ratioA={5}
                  ratioB="(12%)"
                />
                <StatV2
                  value={`${theme}-tab2`}
                  icon="account_circle"
                  label="Tab 2"
                  ratioA={8}
                  ratioB="(20%)"
                />
                <StatV2
                  value={`${theme}-tab3`}
                  icon="account_circle"
                  label="Tab 3"
                  ratioA={3}
                  ratioB="(8%)"
                />
              </StatTabsV2>
            </div>
          );
        })}
      </div>
    );
  },
};

// ==================== STATUS INDICATORS ====================
export const Status_Indicators: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.Medium}
      >
        <StatV2
          value="tab1"
          icon="check_circle"
          label="Success"
          ratioA={15}
          ratioB="(45%)"
          status="success"
        />
        <StatV2
          value="tab2"
          icon="warning"
          label="Warning"
          ratioA={8}
          ratioB="(20%)"
          status="warning"
        />
        <StatV2
          value="tab3"
          icon="error"
          label="Error"
          ratioA={3}
          ratioB="(8%)"
          status="error"
        />
        <StatV2
          value="tab4"
          icon="info"
          label="Normal"
          ratioA={10}
          ratioB="(30%)"
        />
      </StatTabsV2>
    );
  },
};

// ==================== LOADING STATE ====================
export const Loading_State: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.Medium}
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Loading Tab"
          ratioA={0}
          ratioB="(0%)"
          loading={true}
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Normal Tab"
          ratioA={8}
          ratioB="(20%)"
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Another Tab"
          ratioA={3}
          ratioB="(8%)"
        />
      </StatTabsV2>
    );
  },
};

// ==================== WITHOUT BORDERS ====================
export const No_Border: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <StatTabsV2
        value={activeTab}
        onChange={setActiveTab}
        size={StatTabSize.Medium}
        bordered={false}
        divider={false}
      >
        <StatV2
          value="tab1"
          icon="account_circle"
          label="Label 1"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab2"
          icon="account_circle"
          label="Label 2"
          ratioA={2}
          ratioB="(5%)"
        />
        <StatV2
          value="tab3"
          icon="account_circle"
          label="Label 3"
          ratioA={2}
          ratioB="(5%)"
        />
      </StatTabsV2>
    );
  },
};

