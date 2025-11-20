# PageTabV2 Component Implementation

## Overview
Implemented a Large Page Tabs component based on the Figma design (node-id=27350-111335) using **Radix UI Tabs Primitive**.

## Component Details

### Design Source
- **Figma File**: Octuple-DS--Theme-2
- **Node ID**: 27350:111335
- **Component**: Large Page Tabs

### Visual Specifications
- **Font**: Gilroy SemiBold, 18px, line-height 24px
- **Active/Hover Color**: #146da6 (Secondary blue from tokens)
- **Inactive Color**: #4f5666 (Secondary grey from tokens)
- **Tab Indicator**: **2px** height at bottom, rounded top corners (thinner than NavTab's 4px)
- **Padding**: **16px** vertical (less than NavTab's 24px)
- **Gap**: **32px** horizontal spacing between tabs
- **Layout**: **Horizontal** row layout

### Key Differences from NavTabV2
- **Indicator**: 2px vs 4px (thinner, lighter visual weight)
- **Padding**: 16px vs 24px (more compact)
- **Gap**: 32px vs 16px (more spacing between tabs)
- **Visual Weight**: Lighter and more subtle than NavTab
- **Use Case**: Page-level content navigation vs Primary top navigation

## Files Created

### Component Files
1. **`src/components/PageTabV2/PageTabV2.tsx`**
   - Built on `@radix-ui/react-tabs` primitive (same as NavTabV2)
   - Supports both controlled and uncontrolled modes
   - Includes proper TypeScript interfaces
   - Full accessibility support via Radix

2. **`src/components/PageTabV2/PageTabV2.css`**
   - Custom styles applied to Radix primitives using data attributes
   - Vertical layout with flex-direction: column
   - 2px indicator (vs NavTab's 4px)
   - 16px padding (vs NavTab's 24px)
   - Three size variants: large (default), medium, small
   - Interactive states: default, hover, active (data-state="active"), disabled (data-disabled), focus

3. **`src/components/PageTabV2/index.ts`**
   - Export file for the component and types

4. **`src/stories/PageTabV2.stories.tsx`**
   - Comprehensive Storybook stories showcasing:
     - Default (Large size with content)
     - Size variants (Large, Medium, Small)
     - With content rendering
     - With disabled tabs
     - Controlled mode example
     - Three tabs (matching Figma design)
     - Sidebar navigation example
     - Settings page example

### Export Configuration
5. **`src/index.ts`**
   - Added PageTabV2 export to main package index

## Features

### Component Props
```typescript
interface PageTabV2Props {
  tabs: PageTabV2Item[];       // Array of tab items
  value?: string;             // Currently active tab ID (controlled mode) - Radix prop
  defaultValue?: string;      // Default active tab ID (uncontrolled mode) - Radix prop
  onValueChange?: (value: string) => void;  // Callback when tab changes - Radix prop
  size?: 'large' | 'medium' | 'small';     // Size variant
  className?: string;         // Additional CSS classes
  renderContent?: boolean;    // Whether to render tab content
}

interface PageTabV2Item {
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
- **Active/Selected**: Blue text (#146da6) with blue 2px indicator
- **Disabled**: 40% opacity, not clickable
- **Focus**: Visible outline for keyboard navigation

### Size Variants
1. **Large** (Default)
   - Font: 18px / 24px
   - Padding: 16px vertical

2. **Medium**
   - Font: 16px / 20px
   - Padding: 12px vertical

3. **Small**
   - Font: 14px / 18px
   - Padding: 8px vertical

## Design Tokens Used

From `tokens/blue.json`:
- `#146da6` - gradientMiddlePalette[4] - Active tab color and indicator

From `tokens/grey.json`:
- `#4f5666` - gradientStartPalette[5] - Inactive tab text color

## Testing

### Build Status
✅ Component builds successfully
✅ TypeScript compilation passes
✅ No linter errors
✅ Storybook stories generated
✅ CSS properly bundled (1.88 kB)

### Storybook Stories
The component can be viewed in Storybook under **Octuple V2.5 → PageTab** with the following stories:
- Default
- Large
- Medium
- Small
- With Content
- With Disabled Tab
- Controlled
- Three Tabs (exact match to Figma)
- Sidebar Navigation
- Settings Page

## Usage Example

```tsx
import { PageTabV2, PageTabV2Item } from '@eightfold.ai/octuple-radix';

const tabs: PageTabV2Item[] = [
  { id: 'profile', label: 'Profile', content: <div>Profile content</div> },
  { id: 'settings', label: 'Settings', content: <div>Settings content</div> },
  { id: 'security', label: 'Security', content: <div>Security content</div> },
];

// Uncontrolled mode (using defaultValue)
<PageTabV2 tabs={tabs} defaultValue="profile" size="large" />

// Controlled mode (using value and onValueChange)
const [value, setValue] = useState('profile');
<PageTabV2 
  tabs={tabs} 
  value={value} 
  onValueChange={setValue}
  size="large"
  renderContent={true}
/>
```

## Use Cases

### Horizontal Page Navigation
Perfect for:
- Content sections within a page
- Settings/configuration tabs
- Dashboard page sections
- Multi-part forms
- Profile information sections
- Secondary navigation below primary navigation

### Comparison with NavTabV2
| Feature | NavTabV2 | PageTabV2 |
|---------|----------|-----------|
| Layout | Horizontal | Horizontal |
| Indicator | 4px | 2px |
| Padding | 24px | 16px |
| Gap | 16px | 32px |
| Use Case | Primary top nav | Page content sections |
| Visual Weight | Heavier, prominent | Lighter, subtle |
| Hierarchy | Primary navigation | Secondary/page-level navigation |

## Next Steps
- ✅ Component implemented and exported
- ✅ Storybook stories created
- ✅ Design tokens properly applied
- ✅ Accessibility features included (via Radix)
- ✅ Responsive design implemented
- ✅ Built on Radix Primitives

The component is ready for use in the design system!

