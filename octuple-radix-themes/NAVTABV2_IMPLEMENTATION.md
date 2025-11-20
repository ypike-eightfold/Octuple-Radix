# NavTabV2 Component Implementation

## Overview
Implemented a Large Navigation Tabs component based on the Figma design (node-id=27350-114130) using **Radix UI Tabs Primitive**.

## Component Details

### Design Source
- **Figma File**: Octuple-DS--Theme-2
- **Node ID**: 27350:114130
- **Component**: Large nav tabs

### Visual Specifications
- **Font**: Gilroy SemiBold, 18px, line-height 24px
- **Active Tab Color**: #146da6 (Secondary blue from tokens)
- **Inactive Tab Color**: #4f5666 (Secondary grey from tokens)
- **Tab Indicator**: 4px height, rounded top corners
- **Padding**: 24px vertical, 8px horizontal
- **Gap**: 20px between tabs

## Files Created

### Component Files
1. **`src/components/NavTabV2/NavTabV2.tsx`**
   - Built on `@radix-ui/react-tabs` primitive
   - Supports both controlled and uncontrolled modes
   - Includes proper TypeScript interfaces
   - Full accessibility support via Radix (ARIA attributes, keyboard navigation, focus management)

2. **`src/components/NavTabV2/NavTabV2.css`**
   - Custom styles applied to Radix primitives using data attributes
   - Styles using design tokens from `tokens/blue.json` and `tokens/grey.json`
   - Three size variants: large (default), medium, small
   - Interactive states: default, hover, active (data-state="active"), disabled (data-disabled), focus
   - Responsive adjustments for mobile devices
   - Smooth transitions and animations

3. **`src/components/NavTabV2/index.ts`**
   - Export file for the component and types

4. **`src/stories/NavTabV2.stories.tsx`**
   - Comprehensive Storybook stories showcasing:
     - Default (Large size with content)
     - Size variants (Large, Medium, Small)
     - With content rendering
     - With disabled tabs
     - Controlled mode example
     - Five tabs (matching Figma design)
     - Navigation example with realistic labels

### Export Configuration
5. **`src/index.ts`**
   - Added NavTabV2 export to main package index

## Features

### Component Props
```typescript
interface NavTabV2Props {
  tabs: NavTabV2Item[];       // Array of tab items
  value?: string;             // Currently active tab ID (controlled mode) - Radix prop
  defaultValue?: string;      // Default active tab ID (uncontrolled mode) - Radix prop
  onValueChange?: (value: string) => void;  // Callback when tab changes - Radix prop
  size?: 'large' | 'medium' | 'small';     // Size variant
  className?: string;         // Additional CSS classes
  renderContent?: boolean;    // Whether to render tab content
}

interface NavTabV2Item {
  id: string;              // Unique identifier
  label: string;           // Label text
  content?: React.ReactNode;  // Optional content
  disabled?: boolean;      // Whether disabled
}
```

### Modes
- **Uncontrolled**: Component manages its own state
- **Controlled**: Parent component controls active tab

### Accessibility Features (Provided by Radix)
- Proper ARIA attributes automatically managed
- Full keyboard navigation (Arrow keys, Home, End, Tab)
- Focus management and visible states
- Screen reader support
- Roving tabindex
- Automatic orientation detection

### States
- **Enabled**: Default grey text (#4f5666)
- **Hovered**: Blue text with semi-transparent indicator
- **Active/Selected**: Blue text (#146da6) with blue indicator
- **Disabled**: 40% opacity, not clickable
- **Focus**: Visible outline for keyboard navigation

### Size Variants
1. **Large** (Default)
   - Font: 18px / 24px
   - Padding: 24px vertical

2. **Medium**
   - Font: 16px / 20px
   - Padding: 16px vertical

3. **Small**
   - Font: 14px / 18px
   - Padding: 12px vertical

## Design Tokens Used

From `tokens/blue.json`:
- `#146da6` - gradientMiddlePalette[4] - Active tab color and indicator

From `tokens/grey.json`:
- `#4f5666` - gradientStartPalette[5] - Inactive tab text color
- `#ffffff` - White background for default indicator

## Testing

### Build Status
✅ Component builds successfully
✅ TypeScript compilation passes
✅ No linter errors
✅ Storybook stories generated
✅ CSS properly bundled (1.95 kB)

### Storybook Stories
The component can be viewed in Storybook under **Octuple V2.5 → NavTab** with the following stories:
- Default
- Large
- Medium
- Small
- With Content
- With Disabled Tab
- Controlled
- Three Tabs
- Five Tabs (exact match to Figma)
- Navigation Example

## Usage Example

```tsx
import { NavTabV2, NavTabV2Item } from '@eightfold.ai/octuple-radix';

const tabs: NavTabV2Item[] = [
  { id: 'home', label: 'Home', content: <div>Home content</div> },
  { id: 'about', label: 'About', content: <div>About content</div> },
  { id: 'contact', label: 'Contact', content: <div>Contact content</div> },
];

// Uncontrolled mode (using defaultValue)
<NavTabV2 tabs={tabs} defaultValue="home" size="large" />

// Controlled mode (using value and onValueChange)
const [value, setValue] = useState('home');
<NavTabV2 
  tabs={tabs} 
  value={value} 
  onValueChange={setValue}
  size="large"
  renderContent={true}
/>
```

## Next Steps
- ✅ Component implemented and exported
- ✅ Storybook stories created
- ✅ Design tokens properly applied
- ✅ Accessibility features included
- ✅ Responsive design implemented

The component is ready for use in the design system!

