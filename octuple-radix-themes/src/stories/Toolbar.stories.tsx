import type { Meta, StoryObj } from '@storybook/react';
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '../components/Toolbar';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => (
    <Toolbar>
      <ToolbarButton>
        <Icon name="undo" size={18} />
      </ToolbarButton>
      <ToolbarButton>
        <Icon name="redo" size={18} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="multiple">
        <ToolbarToggleItem value="bold">
          <Icon name="format_bold" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic">
          <Icon name="format_italic" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="underline">
          <Icon name="format_underlined" size={18} />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single">
        <ToolbarToggleItem value="left">
          <Icon name="format_align_left" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="center">
          <Icon name="format_align_center" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="right">
          <Icon name="format_align_right" size={18} />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
  ),
};

export const TextEditor = {
  render: () => (
    <Toolbar>
      <ToolbarButton aria-label="Undo">
        <Icon name="undo" size={18} />
      </ToolbarButton>
      <ToolbarButton aria-label="Redo">
        <Icon name="redo" size={18} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="multiple">
        <ToolbarToggleItem value="bold" aria-label="Bold">
          <Icon name="format_bold" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic" aria-label="Italic">
          <Icon name="format_italic" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="strikethrough" aria-label="Strikethrough">
          <Icon name="strikethrough_s" size={18} />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarButton aria-label="Insert link">
        <Icon name="link" size={18} />
      </ToolbarButton>
      <ToolbarButton aria-label="Insert image">
        <Icon name="image" size={18} />
      </ToolbarButton>
      <ToolbarButton aria-label="Insert code">
        <Icon name="code" size={18} />
      </ToolbarButton>
    </Toolbar>
  ),
};

export const Vertical = {
  render: () => (
    <Toolbar orientation="vertical">
      <ToolbarButton>
        <Icon name="home" size={18} />
      </ToolbarButton>
      <ToolbarButton>
        <Icon name="search" size={18} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton>
        <Icon name="settings" size={18} />
      </ToolbarButton>
      <ToolbarButton>
        <Icon name="help" size={18} />
      </ToolbarButton>
    </Toolbar>
  ),
};

