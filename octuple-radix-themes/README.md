# Octuple Radix - Design System v3

> Modern, accessible design system built on Radix Themes with Violet accent, Full radius, Poppins font, and Material Icons.

## Features

✅ **40+ Production-Ready Components** - Button, Select, Dialog, Table, Card, and more  
✅ **Violet Accent Color** - Soft purple theme for a modern, professional look  
✅ **Full Border Radius** - Maximum roundness for a friendly, approachable UI  
✅ **Poppins Font** - Clean, geometric sans-serif (weights 300-600)  
✅ **Material Symbols Outlined** - 2,500+ icons at weight 200  
✅ **Fully Accessible** - WCAG AA compliant, keyboard navigable  
✅ **Dark Mode Ready** - Built-in light/dark theme support  
✅ **TypeScript** - Full type safety out of the box  
✅ **Responsive** - Mobile-first, works on all devices  

## Installation

```bash
npm install @eightfold.ai/octuple-radix
```

## Quick Start

```tsx
import { ThemeProvider, Button, Card, Flex } from '@eightfold.ai/octuple-radix';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Flex direction="column" gap="3">
          <Button>Primary Action</Button>
          <Button variant="soft">Secondary Action</Button>
        </Flex>
      </Card>
    </ThemeProvider>
  );
}
```

## Theme Configuration

The design system comes pre-configured with optimal defaults:

```tsx
<ThemeProvider
  accentColor="violet"    // Soft purple accent
  radius="full"           // Maximum roundness
  appearance="light"      // Light or dark mode
  scaling="100%"          // UI scale (90-110%)
>
  <YourApp />
</ThemeProvider>
```

## Using Icons

```tsx
import { Icon } from '@eightfold.ai/octuple-radix';

// Material Symbols Outlined
<Icon name="home" size={24} />
<Icon name="settings" color="var(--accent-9)" />
<Icon name="check" size={16} />
```

Browse 2,500+ icons: [Google Fonts Icons](https://fonts.google.com/icons)

## Available Components

### Layout & Structure
- `Box`, `Flex`, `Grid`, `Container`, `Section`

### Typography
- `Heading`, `Text`, `Code`, `Quote`, `Strong`, `Em`

### Forms
- `Button`, `TextField`, `TextArea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`

### Data Display
- `Table`, `Card`, `Avatar`, `Badge`, `Code`, `DataList`, `Separator`

### Overlays
- `Dialog`, `AlertDialog`, `ContextMenu`, `DropdownMenu`, `HoverCard`, `Popover`, `Tooltip`

### Navigation
- `Tabs`, `SegmentedControl`

### Feedback
- `Spinner`, `Skeleton`, `Progress`, `Callout`

## Component Examples

### Button

```tsx
import { Button } from '@eightfold.ai/octuple-radix';

// Variants
<Button variant="classic">Classic</Button>
<Button variant="solid">Solid</Button>
<Button variant="soft">Soft</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="1">Small</Button>
<Button size="2">Medium</Button>
<Button size="3">Large</Button>
```

### Dialog

```tsx
import { Button, Dialog, Flex } from '@eightfold.ai/octuple-radix';

<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>

  <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Welcome</Dialog.Title>
    <Dialog.Description>
      This is a beautiful dialog with full radius.
    </Dialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">Cancel</Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Confirm</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### Card

```tsx
import { Card, Flex, Avatar, Box, Text } from '@eightfold.ai/octuple-radix';

<Card>
  <Flex gap="3" align="center">
    <Avatar size="3" src="https://..." fallback="JD" />
    <Box>
      <Text as="div" size="2" weight="bold">
        John Doe
      </Text>
      <Text as="div" size="2" color="gray">
        Product Designer
      </Text>
    </Box>
  </Flex>
</Card>
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build

# Type check
npm run type-check
```

## Design Tokens

The design system uses CSS variables for theming:

```css
/* Accent color (Violet) */
var(--accent-9)      /* Primary */
var(--accent-10)     /* Hover */
var(--accent-11)     /* Active */

/* Gray scale (Slate) */
var(--gray-1)        /* Background */
var(--gray-12)       /* Text */

/* Radius */
var(--radius-full)   /* Maximum roundness */
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT © Eightfold AI

## Credits

Built on [Radix Themes](https://www.radix-ui.com/themes) by [WorkOS](https://workos.com)

