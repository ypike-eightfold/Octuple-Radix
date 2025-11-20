# TimelineV2 Implementation Summary

## ⚠️ STATUS: Needs Refinement
The component is functional but requires additional work on horizontal connector spacing/alignment to match Figma exactly.

## Overview
TimelineV2 is a custom component (no Radix primitive available) built to Figma design specifications. It displays a sequence of steps with visual indicators for status in both vertical and horizontal orientations.

## Implementation Approach

### Why Custom Component?
- **No Radix Primitive**: Radix UI does not provide a Timeline primitive
- **Purely Presentational**: No complex interactions or state management needed
- **Custom Design**: Specific Figma requirements for layout, spacing, and styling

## Components Structure

### Files Created
```
src/components/TimelineV2/
├── TimelineV2.tsx        # Custom component with Icon integration
├── TimelineV2.css        # Figma-spec styles
└── index.ts              # Exports

src/stories/
└── TimelineV2.stories.tsx # Storybook stories
```

## Figma Design Specifications

### Vertical Timeline (Primary)
- **Node ID**: 9875:60164
- **Icon Circle**: 28px (6px padding + 16px icon), rounded-24px
- **Gap**: 24px between icon and content
- **Connector**: Dashed line, #2c8cc9, 2px width
- **Step Spacing**: 40px bottom padding
- **Label**: Gilroy SemiBold, 16px, #1a212e
- **Description**: Gilroy Medium, 16px, #69717f

### Horizontal Timeline
- **Node ID**: 9875:60238
- **Each Step**: 200px fixed width
- **Icon Row**: Icon + horizontal dashed connector
- **Content**: Stacked below icon row
- **Gap**: 16px between icon row and content
- **Connector**: Horizontal dashed line between icons

## Component API

```typescript
export interface TimelineV2Props {
  /** Array of timeline items */
  items: TimelineV2Item[];
  
  /** Orientation of the timeline */
  orientation?: 'vertical' | 'horizontal';
  
  /** Size variant */
  size?: 'large' | 'medium' | 'small';
  
  /** Current active step (0-indexed) */
  current?: number;
  
  /** Additional CSS class */
  className?: string;
}

export interface TimelineV2Item {
  /** Label for the step */
  label: string;
  
  /** Optional description */
  description?: string;
  
  /** Status of the step */
  status?: 'completed' | 'active' | 'pending';
  
  /** Custom icon name */
  icon?: string;
}
```

## Key Features

### Three Status States
- **Completed**: 
  - Background: #ebf7ff
  - Icon color: #146da6
  - Icon: `check_circle` (Material Symbols)
- **Active**: 
  - Background: #bce4ff
  - Border: 1px solid #2c8cc9
  - Icon color: #054d7b
  - Icon: `check_circle`
- **Pending**: 
  - Background: #ebf7ff
  - Icon color: #146da6
  - Icon: `radio_button_unchecked` (empty circle)

### Size Variants
- **Large**: 32px gap, 8px icon padding, 18px label, 48px spacing
- **Medium** (default): 24px gap, 6px icon padding, 16px label, 40px spacing
- **Small**: 16px gap, 4px icon padding, 14px label, 32px spacing

### Orientations
- **Vertical**: Icon + connector stacked, content on right
- **Horizontal**: Icon row at top, content stacked below

### Auto Status
If `status` is not explicitly set, it's derived from the `current` prop:
- Steps before `current`: completed
- Step at `current`: active
- Steps after `current`: pending

### Custom Icons
Override default icons per step by providing `icon` prop in `TimelineV2Item`.

### Accessibility
- `role="list"` on root
- `role="listitem"` on each item
- `aria-current="step"` on active item
- `aria-hidden="true"` on decorative icons

## Known Issues & TODO

### ⚠️ Horizontal Connector Spacing
**Issue**: The dashed connector between horizontal steps may not align perfectly with Figma specs.

**Details**:
- SVG connector uses flexible width but may need fine-tuning
- Gap between icon and connector edge needs verification
- Alignment of connector with icon centers needs adjustment

**Next Steps**:
1. Compare horizontal layout pixel-by-pixel with Figma
2. Adjust connector SVG viewBox and positioning
3. Fine-tune flexbox spacing in horizontal mode
4. Test with different step counts (3, 5, 10 steps)

## Storybook Stories

1. **Default** - Vertical timeline with current step
2. **Vertical** - Standard vertical orientation
3. **Horizontal** - Horizontal orientation
4. **AllCompleted** - All steps completed
5. **FirstStep** - First step active
6. **WithoutDescriptions** - Labels only
7. **ExplicitStatuses** - Manual status control
8. **Size Variants** - Large, Medium, Small
9. **ProjectTimeline** - Real-world example
10. **OrderTracking** - E-commerce use case
11. **HorizontalShortSteps** - Checkout flow example

## Design Tokens Used

### Colors
- `#ebf7ff` - Background-1 blue (default icons)
- `#bce4ff` - Background-2 blue (active icon)
- `#2c8cc9` - Primary blue (border, connector)
- `#146da6` - Secondary blue (icon, label)
- `#054d7b` - Primary dark blue (active icon)
- `#1a212e` - Default text (label)
- `#69717f` - Tertiary grey (description)

### Typography
- **Font Family**: Gilroy (with fallbacks)
- **Label**: SemiBold (600), 16px, 24px line-height
- **Description**: Medium (400), 16px, 24px line-height

### Spacing
- **Icon Circle**: 6px padding (medium)
- **Icon-Content Gap**: 24px (medium, vertical)
- **Icon Row-Content Gap**: 16px (horizontal)
- **Step Spacing**: 40px bottom padding (medium, vertical)
- **Horizontal Width**: 200px per step

### Border Radius
- **Icon Circle**: 24px
- **Connector Width**: 2px

## Implementation Notes

### Icon Integration
Uses the existing `Icon` component from the design system:
```typescript
import { Icon } from '../Icon';

<Icon name="check_circle" size={16} />
<Icon name="radio_button_unchecked" size={16} />
```

### Dashed Connector SVG
Two different SVGs for vertical vs horizontal:

**Vertical** (2px wide × flexible height):
```typescript
<svg width="2" height="100%" viewBox="0 0 2 60" preserveAspectRatio="none">
  <line x1="1" y1="0" x2="1" y2="60" stroke="#2C8CC9" strokeWidth="2" strokeDasharray="4 4" />
</svg>
```

**Horizontal** (flexible width × 2px tall):
```typescript
<svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
  <line x1="0" y1="1" x2="100" y2="1" stroke="#2C8CC9" strokeWidth="2" strokeDasharray="4 4" />
</svg>
```

### Responsive Behavior
- Smaller gaps on mobile (24px → 16px)
- Reduced padding on mobile
- Smaller label/description text on mobile
- Considers `prefers-reduced-motion` for animations

## Comparison: Timeline v1 vs TimelineV2

| Feature | Timeline v1 | TimelineV2 |
|---------|-------------|------------|
| **Base** | Custom | Custom |
| **Orientations** | Vertical only | Vertical + Horizontal |
| **Status States** | Basic | Completed/Active/Pending |
| **Icons** | Generic | Material Symbols (check_circle, radio_button_unchecked) |
| **Connector** | Basic | SVG dashed line with proper flex |
| **Size Variants** | Limited | Large/Medium/Small |
| **Figma Specs** | Generic | ✅ Exact match (with refinement needed) |
| **Status Colors** | Basic | ✅ Variant-specific (3 states) |
| **Fixed Width (Horizontal)** | N/A | ✅ 200px per step |
| **Accessibility** | Basic | ✅ ARIA attributes |
| **Auto Status** | Manual | ✅ Derive from `current` prop |

## Testing Considerations

1. **Status States**: Test all three states (completed, active, pending)
2. **Orientations**: Verify both vertical and horizontal layouts
3. **Auto vs Manual Status**: Test `current` prop vs explicit `status`
4. **Custom Icons**: Verify custom icon override works
5. **Size Variants**: Check all three sizes
6. **Responsive**: Test mobile vs desktop
7. **Accessibility**: Screen reader announcements
8. **Edge Cases**: 
   - Single step
   - Many steps (10+)
   - Long descriptions
   - Missing descriptions

## Browser Support
- Modern browsers with flexbox support
- SVG support required
- CSS custom properties not used
- Fallback fonts for Gilroy

## Next Steps

### Required Refinements
1. **Fix Horizontal Connector Alignment** ⚠️
   - Measure exact spacing in Figma
   - Adjust CSS flexbox properties
   - Verify connector stretches properly
   - Test with various step counts

### Potential Enhancements
1. **Animation**: Fade-in transitions for status changes
2. **Interactive**: Click handlers on steps
3. **Clickable Mode**: Navigate between steps
4. **Progress Bar**: Show overall completion percentage
5. **Custom Connector**: Allow different connector styles
6. **Compact Mode**: Smaller spacing for dense layouts
7. **Error State**: Red indicator for failed steps
8. **Loading State**: Show pending/loading animation

### Related Components to Build
- **Stepper**: Numbered step indicator for forms
- **Breadcrumb**: Hierarchical navigation
- **Progress**: Linear progress indicator

## Conclusion

TimelineV2 successfully implements the Figma design as a custom component, providing:
- ✅ Vertical and horizontal orientations
- ✅ Three status states with proper colors
- ✅ Material Symbols icons
- ✅ SVG dashed connectors
- ✅ Size variants
- ✅ Accessibility features
- ⚠️ **Needs refinement** for horizontal connector spacing

The component is functional and ready for use in production, but requires additional work to perfect the horizontal layout alignment.

