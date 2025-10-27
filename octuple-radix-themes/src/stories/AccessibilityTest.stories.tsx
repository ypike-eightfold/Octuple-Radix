import type { Meta, StoryObj } from '@storybook/react';
import { 
  Switch, Checkbox, RadioGroup, Button, Badge, Slider, Progress, 
  Tabs, Select, TextField, TextArea, Card, Callout, Tooltip,
  Flex, Text, Separator, Link, SegmentedControl, Table,
  Dialog, AlertDialog
} from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Testing/Accessibility Audit',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive accessibility test for all form controls and interactive components. Tests WCAG AA 2.2 compliance including contrast ratios, focus states, and disabled states.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormControlsAccessibility: Story = {
  render: () => (
    <Flex direction="column" gap="6" style={{ maxWidth: '800px' }}>
      <div>
        <Text size="4" weight="bold">Form Controls Accessibility Test</Text>
        <Text size="2" color="gray">Testing all interactive states for WCAG AA compliance</Text>
      </div>

      <Separator size="4" />

      {/* Switch Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Switch Component
        </Text>
        <Flex direction="column" gap="3">
          <Flex gap="4" align="center">
            <Switch /> <Text size="2">Off (unchecked) - Testing contrast</Text>
          </Flex>
          <Flex gap="4" align="center">
            <Switch defaultChecked /> <Text size="2">On (checked)</Text>
          </Flex>
          <Flex gap="4" align="center">
            <Switch disabled /> <Text size="2" color="gray">Disabled (off)</Text>
          </Flex>
          <Flex gap="4" align="center">
            <Switch defaultChecked disabled /> <Text size="2" color="gray">Disabled (on)</Text>
          </Flex>
        </Flex>
      </div>

      <Separator />

      {/* Checkbox Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Checkbox Component
        </Text>
        <Flex direction="column" gap="3">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox /> Unchecked - Testing contrast
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox defaultChecked /> Checked
            </Flex>
          </Text>
          <Text as="label" size="2" color="gray">
            <Flex gap="2" align="center">
              <Checkbox disabled /> Disabled (unchecked)
            </Flex>
          </Text>
          <Text as="label" size="2" color="gray">
            <Flex gap="2" align="center">
              <Checkbox defaultChecked disabled /> Disabled (checked)
            </Flex>
          </Text>
        </Flex>
      </div>

      <Separator />

      {/* Radio Button Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Radio Button Component
        </Text>
        <RadioGroup.Root>
          <Flex direction="column" gap="3">
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <RadioGroup.Item value="unselected" /> Unselected - Testing contrast
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <RadioGroup.Item value="selected" /> Selected
              </Flex>
            </Text>
          </Flex>
        </RadioGroup.Root>
      </div>

      <Separator />

      {/* Button Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Button Variants
        </Text>
        <Flex wrap="wrap" gap="3">
          <Button variant="solid">Solid</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost - Testing contrast</Button>
          <Button variant="surface">Surface</Button>
        </Flex>
        <Flex wrap="wrap" gap="3" style={{ marginTop: '12px' }}>
          <Button variant="solid" disabled>Solid Disabled</Button>
          <Button variant="ghost" disabled>Ghost Disabled</Button>
        </Flex>
      </div>

      <Separator />

      {/* Slider Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Slider Component
        </Text>
        <Flex direction="column" gap="4" style={{ width: '300px' }}>
          <div>
            <Text size="2" style={{ marginBottom: '8px', display: 'block' }}>
              Default - Testing track contrast
            </Text>
            <Slider defaultValue={[50]} />
          </div>
          <div>
            <Text size="2" style={{ marginBottom: '8px', display: 'block' }}>
              Range slider
            </Text>
            <Slider defaultValue={[25, 75]} />
          </div>
          <div>
            <Text size="2" color="gray" style={{ marginBottom: '8px', display: 'block' }}>
              Disabled
            </Text>
            <Slider defaultValue={[50]} disabled />
          </div>
        </Flex>
      </div>

      <Separator />

      {/* Progress Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Progress Component
        </Text>
        <Flex direction="column" gap="3" style={{ width: '300px' }}>
          <div>
            <Text size="2" style={{ marginBottom: '8px', display: 'block' }}>
              Progress - Testing track contrast
            </Text>
            <Progress value={60} />
          </div>
          <div>
            <Text size="2" style={{ marginBottom: '8px', display: 'block' }}>
              Low progress
            </Text>
            <Progress value={15} />
          </div>
        </Flex>
      </div>

      <Separator />

      {/* Input Fields */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Input Fields
        </Text>
        <Flex direction="column" gap="3" style={{ width: '300px' }}>
          <TextField.Root placeholder="Placeholder text - Testing contrast" />
          <TextField.Root value="Filled input" />
          <TextField.Root placeholder="Disabled input" disabled />
          <TextArea placeholder="TextArea placeholder - Testing contrast" />
          <TextArea value="Filled textarea" />
          <TextArea placeholder="Disabled textarea" disabled />
        </Flex>
      </div>

      <Separator />

      {/* Select Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Select Component
        </Text>
        <Flex direction="column" gap="3" style={{ width: '200px' }}>
          <Select.Root>
            <Select.Trigger placeholder="Select option - Testing contrast" />
            <Select.Content>
              <Select.Item value="option1">Option 1</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          <Select.Root disabled>
            <Select.Trigger placeholder="Disabled select" />
          </Select.Root>
        </Flex>
      </div>
    </Flex>
  ),
};

export const InteractiveComponentsAccessibility: Story = {
  render: () => (
    <Flex direction="column" gap="6" style={{ maxWidth: '800px' }}>
      <div>
        <Text size="4" weight="bold">Interactive Components Accessibility</Text>
        <Text size="2" color="gray">Testing tabs, badges, cards, and other interactive elements</Text>
      </div>

      <Separator size="4" />

      {/* Tabs Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Tabs Component
        </Text>
        <Tabs.Root defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Active Tab</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Inactive - Testing contrast</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Another Tab</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1" style={{ padding: '12px 0' }}>
            <Text size="2">Content for active tab</Text>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <Separator />

      {/* Badge Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Badge Variants
        </Text>
        <Flex wrap="wrap" gap="3">
          <Badge variant="solid">Solid</Badge>
          <Badge variant="soft">Soft - Testing contrast</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="surface">Surface - Testing contrast</Badge>
        </Flex>
      </div>

      <Separator />

      {/* Card Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Card Variants
        </Text>
        <Flex gap="4" wrap="wrap">
          <Card variant="surface" style={{ padding: '16px', width: '200px' }}>
            <Text size="2" weight="medium">Surface Card</Text>
            <Text size="1" color="gray" style={{ marginTop: '8px', display: 'block' }}>
              Testing border contrast
            </Text>
          </Card>
          <Card variant="classic" style={{ padding: '16px', width: '200px' }}>
            <Text size="2" weight="medium">Classic Card</Text>
            <Text size="1" color="gray" style={{ marginTop: '8px', display: 'block' }}>
              Default variant
            </Text>
          </Card>
          <Card variant="ghost" style={{ padding: '16px', width: '200px' }}>
            <Text size="2" weight="medium">Ghost Card</Text>
            <Text size="1" color="gray" style={{ marginTop: '8px', display: 'block' }}>
              Testing border visibility
            </Text>
          </Card>
        </Flex>
      </div>

      <Separator />

      {/* Segmented Control */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Segmented Control
        </Text>
        <SegmentedControl.Root defaultValue="inbox">
          <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
          <SegmentedControl.Item value="drafts">Drafts - Testing contrast</SegmentedControl.Item>
          <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
        </SegmentedControl.Root>
      </div>

      <Separator />

      {/* Callout Tests */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Callout Variants
        </Text>
        <Flex direction="column" gap="3">
          <Callout.Root variant="soft">
            <Callout.Icon>
              <Icon name="info" size={16} />
            </Callout.Icon>
            <Callout.Text>
              Soft callout - Testing background/text contrast
            </Callout.Text>
          </Callout.Root>
          <Callout.Root variant="surface">
            <Callout.Icon>
              <Icon name="warning" size={16} />
            </Callout.Icon>
            <Callout.Text>
              Surface callout - Testing border visibility
            </Callout.Text>
          </Callout.Root>
        </Flex>
      </div>

      <Separator />

      {/* Links */}
      <div>
        <Text size="3" weight="medium" style={{ marginBottom: '12px', display: 'block' }}>
          Link Component
        </Text>
        <Flex direction="column" gap="2">
          <Text size="2">
            This is a <Link href="#" color="indigo">standard link</Link> in a sentence.
          </Text>
          <Text size="2">
            This is an <Link href="#" underline="always">always underlined link</Link> for better accessibility.
          </Text>
          <Text size="2">
            <Link href="#" color="gray">Gray link - Testing contrast</Link>
          </Text>
        </Flex>
      </div>
    </Flex>
  ),
};

export const FocusAndKeyboardAccessibility: Story = {
  render: () => (
    <Flex direction="column" gap="6" style={{ maxWidth: '800px' }}>
      <div>
        <Text size="4" weight="bold">Focus & Keyboard Accessibility</Text>
        <Text size="2" color="gray">
          Use Tab key to navigate through elements. All interactive elements should have visible focus indicators.
        </Text>
      </div>

      <Separator size="4" />

      <Flex direction="column" gap="4">
        <Button>Button 1 - Tab here first</Button>
        <Switch />
        <Checkbox />
        <TextField.Root placeholder="Text input" />
        <Select.Root>
          <Select.Trigger placeholder="Select dropdown" style={{ width: '200px' }} />
          <Select.Content>
            <Select.Item value="1">Option 1</Select.Item>
            <Select.Item value="2">Option 2</Select.Item>
          </Select.Content>
        </Select.Root>
        <Slider defaultValue={[50]} style={{ width: '200px' }} />
        <Flex gap="2">
          <Button variant="solid">Button 2</Button>
          <Button variant="ghost">Button 3</Button>
          <Button variant="outline">Button 4</Button>
        </Flex>
        <Link href="#" color="indigo">Focusable link</Link>
        
        <div style={{ marginTop: '16px' }}>
          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
            Expected behavior:
          </Text>
          <ul style={{ fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li>All elements should be reachable via Tab key</li>
            <li>Focus indicators should be clearly visible (indigo outlines)</li>
            <li>Switch, checkbox can be toggled with Space bar</li>
            <li>Buttons can be activated with Enter or Space</li>
            <li>Select opens with Enter/Space, navigates with arrows</li>
            <li>Slider adjusts with arrow keys</li>
          </ul>
        </div>
      </Flex>
    </Flex>
  ),
};
