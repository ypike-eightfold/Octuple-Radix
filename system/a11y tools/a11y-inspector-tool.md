# A11y Inspector Tool

## Overview
The A11y Inspector Tool is an admin overlay system built into the prototype that allows you to visualize and inspect accessibility features across all pages without modifying the actual content.

## Location
The inspector is accessible from the top-right corner of the prototype header, next to the "Navigate" button.

## How to Use

### Accessing the Tool
1. Click the **"a11y"** button in the top-right corner of the prototype
2. A dropdown menu will appear showing available inspection tools

### Presentation Screens
Some pages in the prototype are classified as **presentation screens** (e.g., landing pages, overview screens, demo screens, candidate-facing experiences) rather than product UI. These screens don't require accessibility assessment and will display a message:

> *"Accessibility inspection does not apply to presentation screens."*

**Current presentation screens:**
- `/hvh-title` - PCS High Volume Hiring title screen
- `/camera2` - QR code to SMS agent experience
- `/sms/new` - SMS new message screen
- `/sms` - SMS conversation screen
- `/instant-interview/interviewer` - Instant interview experience
- `/instant-interview/confirmation` - Interview confirmation screen
- `/camera` - QR code to job description

**To add more presentation screens**, edit the `presentationScreens` array in `PrototypeLayout.tsx`:
```typescript
const presentationScreens = [
  '/hvh-title',
  '/camera2',
  '/sms/new',
  '/sms',
  '/instant-interview/interviewer',
  '/instant-interview/confirmation',
  '/camera',
  '/your-new-presentation-screen'
]
```

### Interacting with Overlays

When multiple callouts overlap, you can **click on any callout to bring it to the front** (highest z-index), making its content fully readable. Click the same callout again to deselect it and return it to its normal layering.

This works across all inspection modes:
- **Header overlays**: Click to bring the header label and box to the front
- **Tab Order badges**: Click to prioritize a specific tab stop and its info
- **Image callouts**: Click to bring detailed image information to the foreground
- **Tooltip overlays**: Click to read overlapping tooltip content clearly

The active/selected callout will have a z-index of 1,000,000, ensuring it appears above all other overlays.

### Available Inspection Modes

#### Show Header Levels
- **Purpose**: Visualize the semantic heading structure across the page
- **What it shows**: 
  - Purple bounding boxes (`#7B61FF`) around all heading elements (H1-H6)
  - A label tag showing the heading level (e.g., "H1", "H2", "H3")
  - Semi-transparent purple background for easy identification
- **Interaction**: Click any header overlay to bring it to the front when overlapping
- **How to use**:
  1. Check the "Show Header Levels" checkbox in the a11y dropdown
  2. All heading elements on the current page will be highlighted
  3. Uncheck to hide the highlights
- **Use cases**:
  - Verify proper heading hierarchy
  - Identify missing or incorrect heading levels
  - Document heading structure for design handoffs
  - Ensure WCAG 2.1 compliance for heading semantics

#### Show Tab Order
- **Purpose**: Visualize keyboard navigation flow and tab sequence
- **What it shows**:
  - Orange bounding boxes (`#FF6B35`) around all focusable elements
  - Numbered circular badges showing tab order (1, 2, 3...)
  - Element type labels (button, input, link, etc.)
  - Animated dashed lines connecting sequential tab stops
  - Special indicators for explicit `tabindex` attributes
- **Interaction**: Click any tab stop overlay to bring it to the front when overlapping
- **What is detected** (automatically, no tagging required):
  - Links with href
  - Buttons (not disabled)
  - Form inputs, selects, textareas (not disabled)
  - Elements with positive tabindex
  - Content-editable elements
  - Native interactive elements (summary, details, media controls)
- **How to use**:
  1. Check the "Show Tab Order" checkbox in the a11y dropdown
  2. All focusable elements will be highlighted with their sequence
  3. Follow the numbered badges to trace keyboard navigation flow
  4. Uncheck to hide the visualization
- **Use cases**:
  - Verify logical tab order for keyboard users
  - Identify focus traps or navigation issues
  - Document keyboard interaction flows
  - Ensure WCAG 2.1 compliance for keyboard navigation
  - Detect problematic explicit tabindex usage
  - Validate form field order

#### Show Tooltips & Labels
- **Purpose**: Display all tooltips and accessible labels without requiring hover
- **What it shows**:
  - Orange bounding boxes (`#F59E0B`) around elements with tooltips/labels
  - Red bounding boxes (`#EF4444`) with "ICON" badge for icon-only buttons
  - Persistent tooltip content (normally shown on hover)
  - Label source indicator (title, aria-label, etc.)
- **Interaction**: Click any tooltip overlay to bring it to the front when overlapping
- **What is detected** (automatically):
  - `title` attributes (native browser tooltips)
  - `aria-label` (screen reader labels)
  - `aria-labelledby` (labels via ID reference)
  - `aria-describedby` (additional descriptions)
  - Icon-only buttons (buttons with icons but no visible text)
- **How to use**:
  1. Check the "Show Tooltips & Labels" checkbox in the a11y dropdown
  2. All tooltip and label text will be displayed persistently
  3. Red-bordered elements with "ICON" badges are icon-only buttons
  4. Review that all interactive elements have helpful labels
  5. Uncheck to hide the visualization
- **Use cases**:
  - Verify all icon-only buttons have accessible names
  - Audit tooltip quality and consistency
  - Identify missing labels on interactive elements
  - Document accessible names for screen reader users
  - Ensure WCAG 2.1 compliance for button/control labels
  - Review tooltips without having to hover each element

#### Show Image Accessibility
- **Purpose**: Audit image accessibility and ensure proper alternative text
- **What it shows**:
  - Color-coded bounding boxes around all images and SVGs
  - Status badges with icons indicating accessibility state
  - Detailed information panel showing all a11y attributes
  - Warnings for missing or inadequate accessibility markup
- **Interaction**: Click any image overlay to bring its detailed callout to the front when overlapping
- **Status Categories**:
  - **🎨 Decorative (Blue)**: Images properly marked as decorative with `alt=""` or `role="presentation"`
  - **✓ Informational (Green)**: Images with meaningful alternative text via `alt`, `aria-label`, or `aria-labelledby`
  - **📊 Complex (Purple)**: Images with extended descriptions via `aria-describedby` or `longdesc`
  - **⚠ Missing A11y (Red)**: Images lacking proper accessibility attributes
- **What is detected** (automatically):
  - `<img>` elements
  - `<svg>` elements (with or without role="img")
  - `alt` attribute presence and quality
  - `aria-label` and `aria-labelledby`
  - `role="presentation"` or `role="none"`
  - `title` attribute (fallback)
  - Generic/unhelpful alt text (filenames, "image", "picture", etc.)
- **How to use**:
  1. Check the "Show Image Accessibility" checkbox in the a11y dropdown
  2. All images will be highlighted with their accessibility status
  3. Review red-bordered images - they need accessibility fixes
  4. Verify blue-bordered decorative images are truly decorative
  5. Uncheck to hide the visualization
- **Use cases**:
  - Audit image accessibility compliance
  - Identify images missing alt text
  - Verify decorative vs. informational classification
  - Document image accessibility for WCAG 2.1 compliance
  - Catch generic or unhelpful alt text
  - Ensure complex images have extended descriptions

## Design Specifications

### Colors

#### Header Inspector
- **Primary callout color**: `#7B61FF` (from Design file UI)
- **Border**: 2px solid `#7B61FF`
- **Background overlay**: `rgba(123, 97, 255, 0.08)`
- **Label background**: `#7B61FF`
- **Label text**: White

#### Tab Order Inspector
- **Primary callout color**: `#FF6B35` (Orange - for visual distinction)
- **Border**: 2px solid `#FF6B35`
- **Background overlay**: `rgba(255, 107, 53, 0.08)`
- **Badge background**: `#FF6B35`
- **Badge text**: White
- **Connection lines**: `#FF6B35` with animated dashes

#### Tooltip & Label Inspector
- **Standard elements**: Amber/Orange (`#F59E0B`)
  - Border: 2px solid `#F59E0B`
  - Background: `rgba(245, 158, 11, 0.08)`
- **Icon-only buttons**: Red (`#EF4444`)
  - Border: 3px solid `#EF4444`
  - Background: `rgba(239, 68, 68, 0.1)`
  - Badge: "ICON" label in red
- **Tooltip display**: White background with colored border
  - Shows tooltip text and source attribute
  - Arrow pointing to element
  - Positioned above element (or below if no space)

#### Image Accessibility Inspector
- **Decorative (Blue)**: `#3B82F6`
  - Border: 3px solid `#3B82F6`
  - Background: `rgba(59, 130, 246, 0.1)`
- **Informational (Green)**: `#22C55E`
  - Border: 3px solid `#22C55E`
  - Background: `rgba(34, 197, 94, 0.1)`
- **Complex (Purple)**: `#A855F7`
  - Border: 3px solid `#A855F7`
  - Background: `rgba(168, 85, 247, 0.1)`
- **Missing A11y (Red)**: `#EF4444`
  - Border: 3px solid `#EF4444`
  - Background: `rgba(239, 68, 68, 0.15)`
- **Badge**: Circular with emoji icons, white background
- **Info panel**: White background with color-coded border matching status

### Visual Style
- Bounding boxes have 4px border radius
- Labels appear above the element (top-left corner)
- Labels have a subtle drop shadow for visibility
- Non-interactive overlays (pointer-events: none)
- High z-index (999998) to appear above content

## Technical Implementation

### Components
- **A11yInspectorContext**: Global state management for inspection modes
- **HeaderInspector**: Component that scans and highlights heading elements
- **TabOrderInspector**: Component that detects and visualizes tab order
- **ImageA11yInspector**: Component that audits image accessibility
- **TooltipInspector**: Component that displays all tooltips and accessible labels
- **PrototypeLayout**: Integration point for the a11y button and overlays

### Features
- Automatic DOM scanning for relevant elements
- Real-time updates on resize and scroll
- Periodic rescanning for dynamic content
- Scoped to `.prototype-stage` to avoid highlighting UI chrome
- Click-outside-to-close dropdown behavior
- Smart detection of accessibility attributes
- Quality checking for generic/unhelpful text

## Future Expansion
The system is designed to accommodate additional inspection modes:
- Color contrast checking
- ARIA live regions
- Landmark region highlighting (nav, main, aside, etc.)
- Form label associations and error messages
- Skip link detection
- Language attributes
- Button vs. link usage patterns

## Notes
- The tool preserves all existing flows and pages without modification
- Overlays are non-interactive and won't interfere with prototype interactions
- State persists across navigation until manually toggled off
- Multiple inspection modes can potentially be active simultaneously (future enhancement)
