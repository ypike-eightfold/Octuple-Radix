# Octuple Radix v3 - AI Usage Guide

## Overview

**Octuple Radix** is a modern design system built on top of **Radix Themes**, configured specifically for Eightfold AI. This guide helps AI agents understand how to use and integrate this design system.

---

## Core Configuration

### Theme Settings
- **Accent Color**: `violet` (soft purple)
- **Border Radius**: `full` for buttons, `medium` for inputs/cards
- **Font Family**: Poppins (weights: 300, 400, 500, 600)
- **Icon Set**: Material Symbols Outlined (weight 300, size 18px default)
- **Gray Scale**: `slate`

### Installation

```bash
npm install @eightfold.ai/octuple-radix
# or
yarn add @eightfold.ai/octuple-radix
```

### Basic Setup

```tsx
import { ThemeProvider } from '@eightfold.ai/octuple-radix';
import '@eightfold.ai/octuple-radix/styles.css';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

---

## Component Usage Patterns

### 1. Buttons

**Standard Usage:**
```tsx
import { Button } from '@eightfold.ai/octuple-radix';
import { Icon } from '@eightfold.ai/octuple-radix';

// Primary action
<Button size="3">Save Changes</Button>

// With icon
<Button size="3">
  <Icon name="add" size={18} />
  Create New
</Button>

// Secondary action
<Button variant="soft" size="3">Cancel</Button>

// Destructive action
<Button color="red" size="3">Delete</Button>

// Ghost button (minimal)
<Button variant="ghost" size="3">Learn More</Button>
```

**Sizes:**
- `size="1"`: 24px height (compact)
- `size="2"`: 32px height (standard)
- `size="3"`: 40px height (default)
- `size="4"`: 48px height (large)

**Variants:**
- `classic`: Solid background (default)
- `solid`: Solid with strong color
- `soft`: Subtle background
- `outline`: Border only
- `ghost`: Minimal (no background/border)

---

### 2. Form Controls

#### Text Input
```tsx
import { TextField } from '@eightfold.ai/octuple-radix';

<TextField.Root size="3">
  <TextField.Input placeholder="Enter your email" />
</TextField.Root>

// With icon
<TextField.Root size="3">
  <TextField.Slot>
    <Icon name="search" size={18} />
  </TextField.Slot>
  <TextField.Input placeholder="Search..." />
</TextField.Root>
```

#### Select
```tsx
import { Select } from '@eightfold.ai/octuple-radix';

<Select.Root defaultValue="option1" size="3">
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="option1">Option 1</Select.Item>
    <Select.Item value="option2">Option 2</Select.Item>
    <Select.Item value="option3">Option 3</Select.Item>
  </Select.Content>
</Select.Root>
```

#### Checkbox & Radio
```tsx
import { Checkbox, RadioGroup, Flex, Text } from '@eightfold.ai/octuple-radix';

// Checkbox
<Flex gap="2">
  <Checkbox id="terms" />
  <Text as="label" htmlFor="terms">Accept terms</Text>
</Flex>

// Radio Group
<RadioGroup.Root defaultValue="1">
  <Flex direction="column" gap="2">
    <Flex gap="2">
      <RadioGroup.Item value="1" id="r1" />
      <Text as="label" htmlFor="r1">Option 1</Text>
    </Flex>
    <Flex gap="2">
      <RadioGroup.Item value="2" id="r2" />
      <Text as="label" htmlFor="r2">Option 2</Text>
    </Flex>
  </Flex>
</RadioGroup.Root>
```

#### Switch
```tsx
import { Switch, Flex, Text } from '@eightfold.ai/octuple-radix';

<Flex gap="2" align="center">
  <Switch id="notifications" />
  <Text as="label" htmlFor="notifications">Enable notifications</Text>
</Flex>
```

---

### 3. Layout Components

#### Card
```tsx
import { Card, Flex, Text, Button } from '@eightfold.ai/octuple-radix';

<Card>
  <Flex direction="column" gap="3">
    <Text size="5" weight="bold">Card Title</Text>
    <Text>Card content goes here.</Text>
    <Button size="3">Action</Button>
  </Flex>
</Card>
```

#### Flex (Flexbox)
```tsx
import { Flex } from '@eightfold.ai/octuple-radix';

// Horizontal
<Flex gap="3" align="center" justify="between">
  <div>Left</div>
  <div>Right</div>
</Flex>

// Vertical
<Flex direction="column" gap="4">
  <div>Top</div>
  <div>Bottom</div>
</Flex>
```

#### Grid
```tsx
import { Grid } from '@eightfold.ai/octuple-radix';

<Grid columns="3" gap="4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

---

### 4. Overlays

#### Dialog (Modal)
```tsx
import { Dialog, Button, Flex } from '@eightfold.ai/octuple-radix';

<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>

  <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Edit Profile</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Make changes to your profile.
    </Dialog.Description>

    <Flex direction="column" gap="3">
      {/* Form content */}
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft">Cancel</Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Save</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

#### Alert Dialog
```tsx
import { AlertDialog, Button } from '@eightfold.ai/octuple-radix';

<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">Delete</Button>
  </AlertDialog.Trigger>

  <AlertDialog.Content style={{ maxWidth: 450 }}>
    <AlertDialog.Title>Are you sure?</AlertDialog.Title>
    <AlertDialog.Description size="2">
      This action cannot be undone.
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft">Cancel</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button color="red">Delete</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

#### Popover
```tsx
import { Popover, Button } from '@eightfold.ai/octuple-radix';

<Popover.Root>
  <Popover.Trigger>
    <Button variant="soft">Options</Button>
  </Popover.Trigger>

  <Popover.Content style={{ width: 300 }}>
    <Flex direction="column" gap="3">
      <Text size="2" weight="bold">Settings</Text>
      {/* Content */}
    </Flex>
  </Popover.Content>
</Popover.Root>
```

---

### 5. Navigation

#### Dropdown Menu
```tsx
import { DropdownMenu, Button, Icon } from '@eightfold.ai/octuple-radix';

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="soft">
      Options
      <Icon name="expand_more" size={18} />
    </Button>
  </DropdownMenu.Trigger>

  <DropdownMenu.Content>
    <DropdownMenu.Item>
      <Icon name="edit" size={18} />
      Edit
    </DropdownMenu.Item>
    <DropdownMenu.Item>
      <Icon name="content_copy" size={18} />
      Duplicate
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item color="red">
      <Icon name="delete" size={18} />
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

#### Tabs
```tsx
import { Tabs, Card } from '@eightfold.ai/octuple-radix';

<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Documents</Tabs.Trigger>
    <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
  </Tabs.List>

  <Card mt="3">
    <Tabs.Content value="tab1">
      Account content
    </Tabs.Content>
    <Tabs.Content value="tab2">
      Documents content
    </Tabs.Content>
    <Tabs.Content value="tab3">
      Settings content
    </Tabs.Content>
  </Card>
</Tabs.Root>
```

---

### 6. Data Display

#### Badge
```tsx
import { Badge } from '@eightfold.ai/octuple-radix';

<Badge>New</Badge>
<Badge color="red">Error</Badge>
<Badge color="green">Success</Badge>
<Badge variant="soft">Beta</Badge>
```

#### Progress
```tsx
import { Progress } from '@eightfold.ai/octuple-radix';

<Progress value={75} size="2" />
```

#### Separator
```tsx
import { Separator } from '@eightfold.ai/octuple-radix';

<Separator size="4" />
```

#### Skeleton
```tsx
import { Skeleton, Flex } from '@eightfold.ai/octuple-radix';

<Flex direction="column" gap="2">
  <Skeleton width="200px" height="24px" />
  <Skeleton width="150px" height="20px" />
  <Skeleton width="100px" height="20px" />
</Flex>
```

---

### 7. Icons

**Material Symbols Outlined (Weight 300)**

```tsx
import { Icon } from '@eightfold.ai/octuple-radix';

// Standard icons
<Icon name="add" size={18} />
<Icon name="edit" size={18} />
<Icon name="delete" size={18} />
<Icon name="search" size={18} />
<Icon name="settings" size={18} />
<Icon name="check" size={18} />
<Icon name="close" size={18} />

// Custom size
<Icon name="info" size={24} />

// Custom color
<Icon name="error" size={20} color="var(--red-9)" />
```

**Common Icons:**
- `add`, `remove`, `edit`, `delete`, `close`
- `check`, `check_circle`, `cancel`, `error`, `warning`, `info`
- `search`, `filter_list`, `sort`
- `arrow_forward`, `arrow_back`, `arrow_upward`, `arrow_downward`
- `expand_more`, `expand_less`, `chevron_right`, `chevron_left`
- `settings`, `more_vert`, `more_horiz`
- `person`, `group`, `account_circle`
- `home`, `dashboard`, `menu`
- `visibility`, `visibility_off`
- `download`, `upload`, `cloud_upload`
- `attach_file`, `folder`, `description`

---

### 8. File Upload

```tsx
import { Uploader } from '@eightfold.ai/octuple-radix';

// Basic uploader
<Uploader />

// With restrictions
<Uploader
  accept="image/*"
  maxSize={5 * 1024 * 1024} // 5MB
  multiple={true}
  onFilesSelected={(files) => {
    console.log('Selected:', files);
  }}
/>
```

---

## Typography

```tsx
import { Text, Heading } from '@eightfold.ai/octuple-radix';

// Headings
<Heading size="9">Page Title</Heading>
<Heading size="7">Section Title</Heading>
<Heading size="5">Subsection</Heading>

// Text
<Text size="5" weight="bold">Large Bold Text</Text>
<Text size="3">Body text (default)</Text>
<Text size="2" color="gray">Small muted text</Text>

// Font weights
<Text weight="light">Light (300)</Text>
<Text weight="regular">Regular (400)</Text>
<Text weight="medium">Medium (500)</Text>
<Text weight="bold">Semibold (600)</Text>
```

---

## Color System

### Accent Colors
- `violet` (default) - Primary actions
- `blue` - Informational
- `green` - Success
- `red` - Errors/Destructive
- `orange` - Warnings
- `gray` - Neutral

### Usage
```tsx
<Button color="violet">Primary</Button>
<Button color="red">Delete</Button>
<Button color="green">Confirm</Button>
<Text color="gray">Muted text</Text>
<Badge color="blue">Info</Badge>
```

---

## Spacing & Layout

### Gap (Flexbox/Grid)
```tsx
gap="1" // 4px
gap="2" // 8px
gap="3" // 12px
gap="4" // 16px
gap="5" // 24px
gap="6" // 32px
```

### Padding/Margin
```tsx
p="4" // padding: 16px
pt="2" // padding-top: 8px
pb="2" // padding-bottom: 8px
px="3" // padding-left & padding-right: 12px
py="3" // padding-top & padding-bottom: 12px

m="4" // margin
mt="2" // margin-top
mb="3" // margin-bottom
mx="4" // margin horizontal
my="4" // margin vertical
```

---

## Responsive Design

```tsx
// Responsive columns
<Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Responsive text size
<Text size={{ initial: '3', md: '5' }}>
  Responsive text
</Text>

// Responsive display
<Box display={{ initial: 'none', md: 'block' }}>
  Hidden on mobile
</Box>
```

---

## Best Practices for AI Agents

### 1. **Always Wrap with ThemeProvider**
```tsx
<ThemeProvider>
  {/* Your app */}
</ThemeProvider>
```

### 2. **Use Icon Component for Material Symbols**
```tsx
// ✅ CORRECT
<Icon name="add" size={18} />

// ❌ WRONG
<span className="material-symbols-outlined">add</span>
```

### 3. **Button + Icon Pattern**
```tsx
// Icon before text
<Button>
  <Icon name="add" size={18} />
  Create
</Button>

// Icon after text
<Button>
  Save
  <Icon name="check" size={18} />
</Button>

// Icon only (use ghost for minimal)
<Button variant="ghost" size="1">
  <Icon name="more_vert" size={18} />
</Button>
```

### 4. **Form Layout Pattern**
```tsx
<Flex direction="column" gap="3">
  <label>
    <Text as="div" size="2" mb="1" weight="bold">
      Email
    </Text>
    <TextField.Root size="3">
      <TextField.Input placeholder="Enter email" />
    </TextField.Root>
  </label>

  <label>
    <Text as="div" size="2" mb="1" weight="bold">
      Password
    </Text>
    <TextField.Root size="3" type="password">
      <TextField.Input placeholder="Enter password" />
    </TextField.Root>
  </label>

  <Button size="3" style={{ width: '100%' }}>
    Sign In
  </Button>
</Flex>
```

### 5. **Card Content Pattern**
```tsx
<Card>
  <Flex direction="column" gap="3">
    <Heading size="5">Card Title</Heading>
    <Text size="2" color="gray">
      Description text
    </Text>
    <Separator size="4" />
    <Flex justify="end" gap="2">
      <Button variant="soft">Cancel</Button>
      <Button>Confirm</Button>
    </Flex>
  </Flex>
</Card>
```

### 6. **Action Menu Pattern**
```tsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="ghost" size="1">
      <Icon name="more_vert" size={18} />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>
      <Icon name="edit" size={18} />
      Edit
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item color="red">
      <Icon name="delete" size={18} />
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

---

## Common Patterns

### Sign-In Form
```tsx
<Card style={{ width: '100%', maxWidth: '400px', padding: '24px' }}>
  <Flex direction="column" gap="5">
    <Text size="5" weight="bold">Sign in</Text>
    
    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">Email</Text>
        <TextField.Root size="3">
          <TextField.Input type="email" placeholder="Enter your email" />
        </TextField.Root>
      </label>

      <label>
        <Text as="div" size="2" mb="1" weight="bold">Password</Text>
        <TextField.Root size="3">
          <TextField.Input type="password" placeholder="Enter your password" />
        </TextField.Root>
      </label>
    </Flex>

    <Button size="3" style={{ width: '100%' }}>
      Sign in
      <Icon name="arrow_forward" size={18} />
    </Button>
  </Flex>
</Card>
```

### Dashboard Card
```tsx
<Card>
  <Flex direction="column" gap="3">
    <Flex justify="between" align="center">
      <Text size="2" weight="bold" color="gray">Total Revenue</Text>
      <Icon name="trending_up" size={20} color="var(--green-9)" />
    </Flex>
    <Text size="8" weight="bold">$45,231</Text>
    <Text size="2" color="green">+20.1% from last month</Text>
  </Flex>
</Card>
```

### Table Actions
```tsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="ghost" size="1">
      <Icon name="more_vert" size={18} />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>
      <Icon name="visibility" size={18} />
      View Details
    </DropdownMenu.Item>
    <DropdownMenu.Item>
      <Icon name="edit" size={18} />
      Edit
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item color="red">
      <Icon name="delete" size={18} />
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

---

## Component Availability

### ✅ Available (From Radix Themes)
- Button, Badge, Card, Dialog, AlertDialog
- TextField, TextArea, Select, Checkbox, Radio, Switch
- DropdownMenu, Popover, HoverCard, Tooltip
- Tabs, Progress, Slider, Separator, Skeleton
- Flex, Grid, Container, Section, Box
- Text, Heading, Code, Kbd, Quote
- Avatar

### ⚠️ Custom Components
- **Icon**: Wrapper for Material Symbols
- **Uploader**: File upload with drag-drop

### ❌ Not Available
- **Accordion**: Not in Radix Themes (use Radix Primitives separately if needed)
- **Toast**: Not in Radix Themes (install `@radix-ui/react-toast` separately)

---

## Quick Reference

**Import Pattern:**
```tsx
import { Button, Card, Flex, Text, Icon } from '@eightfold.ai/octuple-radix';
```

**Default Sizes:**
- Buttons: `size="3"` (40px height)
- Text inputs: `size="3"`
- Icons: `size={18}`
- Text: `size="3"`

**Font Weights:**
- `light` = 300
- `regular` = 400 (default)
- `medium` = 500
- `bold` = 600 (semibold)

**Never use:**
- Font weight 700+ (too heavy)
- Font weight 100-200 (too thin)
- Icon weight other than 300

---

## Support

For questions or issues, refer to:
- **Radix Themes Docs**: https://www.radix-ui.com/themes/docs
- **Material Symbols**: https://fonts.google.com/icons

---

**Version**: 3.0.0  
**Last Updated**: October 2025  
**Maintainer**: Eightfold AI Design Team

