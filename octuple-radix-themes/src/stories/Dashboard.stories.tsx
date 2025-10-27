import type { Meta, StoryObj } from '@storybook/react';
import { DashboardPage } from '../examples/DashboardPage';

const meta = {
  title: 'Examples/Dashboard',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullDashboard: Story = {
  render: () => <DashboardPage />,
};

