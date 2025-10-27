# Accessibility - Color Contrast Compliance

## WCAG AA Standards

Octuple Radix meets WCAG AA color contrast requirements:

- **Text**: 4.5:1 minimum contrast ratio
- **Icons & UI Components**: 3:1 minimum contrast ratio
- **Large Text** (18pt+ or 14pt+ bold): 3:1 minimum contrast ratio

## Color Scale Strategy

We use Radix Themes' semantic color scale which is designed for accessibility:

### Text Colors
- `--gray-12`: High contrast text (primary headings, important text)
- `--gray-11`: Standard text (body copy, labels, icons)
- `--violet-11`: Accent text on light backgrounds

### UI Component Colors
- `--violet-9`: Solid backgrounds (buttons, badges)
- `--violet-11`: Text on light backgrounds
- White text on `--violet-9` backgrounds meets 4.5:1 ratio

### Icon Colors
All icons use `--gray-11` or darker, ensuring 3:1+ contrast ratio with backgrounds.

## Component Compliance

### ✅ All Components Meet Standards

**Custom Components:**
- **Toast**: Uses `--gray-11` for icons, `--gray-12` for titles, `--gray-11` for descriptions
- **Accordion**: Uses `--gray-12` for triggers, `--gray-11` for content
- **Stepper**: Uses `--violet-11` text on `--violet-3` backgrounds (designed pairing)
- **Timeline**: Uses Radix semantic colors throughout
- **Toggle/ToggleGroup**: Uses `--gray-11` for text, `--violet-11` when active
- **Toolbar**: Uses `--gray-11` for buttons, `--violet-11` for links
- **NavigationMenu**: Uses `--gray-11` for links, `--violet-11` when active
- **Collapsible**: Uses `--gray-12` for trigger text
- **Navbar**: Uses `--gray-12` for logo/text
- **Empty**: Uses Radix Themes components (compliant by default)
- **Breadcrumb**: Uses Radix Themes components (compliant by default)
- **Pagination**: Uses Radix Themes components (compliant by default)
- **SearchBar**: Uses Radix Themes TextField (compliant by default)

**Radix Themes Components:**
All Radix Themes components (Button, Card, Dialog, Select, etc.) are designed to meet WCAG AA standards by default.

## Testing

To verify contrast ratios:
1. Use browser DevTools to inspect color values
2. Use contrast checkers like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
3. Radix color scales are pre-tested and documented at [radix-ui.com/colors](https://www.radix-ui.com/colors)

## Changes Made

### Fixed Issues
- **Toast close button**: Changed from `--gray-9` to `--gray-11` for proper icon contrast (3:1 ratio)

### No Issues Found
All other components were already using proper semantic colors from the Radix color scale.

## Color Pairing Guide

Safe color pairings that meet contrast requirements:

### Text on Backgrounds
- `--gray-12` on `--gray-1` (primary text)
- `--gray-11` on `--gray-1` (secondary text)
- `--violet-11` on `--gray-1` (accent text)
- White on `--violet-9` (solid backgrounds)
- `--violet-11` on `--violet-3` (soft backgrounds)

### Icons
- `--gray-11` or `--gray-12` on light backgrounds
- `--violet-11` on light backgrounds
- White on `--violet-9` backgrounds

## Best Practices

1. **Use Semantic Colors**: Always use Radix's semantic color scale (1-12)
2. **Text**: Use `--gray-11` or `--gray-12` for all text
3. **Icons**: Use `--gray-11` minimum for icons
4. **Backgrounds**: Pair `--gray-1` through `--gray-3` for backgrounds
5. **Interactive States**: Use `--violet-11` for text, `--violet-9` for solid fills

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Radix Colors Documentation](https://www.radix-ui.com/colors/docs/overview/getting-started)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

