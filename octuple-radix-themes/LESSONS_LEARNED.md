# Lessons Learned - Octuple Radix v3 Development

## Critical Fixes Applied & Lessons

### 1. Material Icons Not Rendering (CRITICAL)
**Problem**: Icons showing as text ("arrow_forward") instead of glyphs  
**Root Cause**: CSS `font-family` override with `*` selector overriding icon font  
**Fix**: Exclude icons from font override: `.radix-themes *:not(.material-symbols-outlined)`  
**Lesson**: ⚠️ NEVER use universal selector without exclusions for special fonts

### 2. Icon Size & Weight Balance
**Problem**: Icons felt too small and thin compared to text  
**Solution**: 18px size + weight 300 (not 16px + weight 200)  
**Lesson**: ✅ Icons should be ~1.125-1.28x larger than adjacent text, weight 300 for balance

### 3. Ghost Button Height Mismatch
**Problem**: Ghost button shorter than other variants  
**Root Cause**: Missing 1px border makes ghost buttons 2px shorter  
**Fix**: Add compensating padding: `calc(var(--space-2) + 1px)`  
**Lesson**: ⚠️ Buttons without borders need extra padding to match visual height

### 4. Storybook Layout Constraints
**Problem**: Cards/forms being cut off in Storybook  
**Root Cause**: 'centered' layout constrains width  
**Fix**: Use `layout: 'padded'` in story parameters + explicit margins  
**Lesson**: ✅ Always set proper layout parameters for large components

### 5. Form Container Width
**Problem**: 500px card too narrow for form content  
**Solution**: 600px card with proper padding and centered margins  
**Lesson**: ✅ Calculate content width: cardWidth - (padding × 2) should be ≥ 500px

---

## Design System Standards

### Icon Configuration
- **Size**: 18px for UI elements, 20px for icon-only buttons, 24px+ for decorative
- **Weight**: 300 (provides good balance with Poppins text)
- **Font variation**: `'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20`

### Button Standards
- **Sizes**: 24px (size 1), 32px (size 2), 40px (size 3), 48px (size 4)
- **Ghost variant**: Needs `calc(var(--space-2) + 1px)` padding compensation
- **Icon in buttons**: Use 18px icons for size 2-3, 20px for size 4
- **Full width**: Add `width: '100%'` for form buttons

### Card/Container Standards
- **Form cards**: Minimum 600px width for comfortable layout
- **Padding**: 24px for comfortable spacing
- **Storybook layout**: Use 'padded' for large components
- **Centering**: Add `margin: '0 auto'` for proper centering

### CSS Override Strategy
- ✅ ONLY override: Border radius for inputs/containers
- ❌ DON'T override: Button padding, form control styling, interactive behavior
- ✅ USE: CSS custom properties (var()) and calc() for dynamic values
- ❌ AVOID: Universal selectors, !important (use sparingly)

---

## Component Checklist Template

For each new component:

### Styling
- [ ] Use Radix Themes defaults (don't over-customize)
- [ ] Icons at 18px with weight 300
- [ ] Proper border radius overrides only where needed
- [ ] Test all variants (solid, soft, ghost, outline, etc.)

### Layout
- [ ] Proper Storybook layout parameter ('centered' vs 'padded')
- [ ] Adequate width for content (test with long text)
- [ ] Proper spacing with Flex gap values (3, 4, 5)
- [ ] Responsive behavior tested

### Testing
- [ ] All sizes render correctly (1, 2, 3, 4)
- [ ] Icons render as glyphs (not text)
- [ ] Ghost variant matches other variants in height
- [ ] No content cut off or clipping
- [ ] Works in different Storybook layouts

---

## Common Mistakes to Avoid

### ❌ DON'T:
1. Use universal CSS selectors without exclusions
2. Override Radix Themes button/form control sizing
3. Use 'centered' layout for wide components (>500px)
4. Set icon size same as text size (causes balance issues)
5. Forget to test ghost button variant separately
6. Use weight 200 icons (too thin)
7. Hardcode pixel values (use Radix CSS variables)
8. Add borders to ghost buttons (defeats the purpose)

### ✅ DO:
1. Exclude special elements from global CSS rules
2. Let Radix handle interactive component sizing
3. Use 'padded' layout for forms and wide components
4. Make icons 1.125-1.28x larger than text
5. Add compensating padding for borderless variants
6. Use weight 300 for icons (balanced with text)
7. Use CSS calc() and custom properties
8. Test visual height, not just measured height

---

## File Organization Standards

### Component Structure
```
src/
  components/
    ComponentName/
      ComponentName.tsx
      index.ts
  stories/
    ComponentName.stories.tsx
  styles/
    fonts.css (font imports)
    theme-overrides.css (font-family only)
    component-overrides.css (border radius, specific fixes)
```

### Story Structure
```tsx
export const StoryName: Story = {
  parameters: {
    layout: 'padded', // or 'centered' for small components
  },
  render: () => (
    <Component />
  ),
};
```

---

## Remaining Components Checklist

### To Implement:
- [ ] Tabs - Use Radix sizes, test all orientations
- [ ] Accordion - Proper spacing, chevron icons at 18px
- [ ] Popover - Check positioning, proper padding
- [ ] Slider - Test all sizes, proper track/thumb styling
- [ ] Toast/Snackbar - Positioning, animations
- [ ] Badge - Small component, icon support
- [ ] Separator - Thin line, various orientations
- [ ] AspectRatio - Container component
- [ ] ScrollArea - Custom scrollbar styling
- [ ] ContextMenu - Similar to Dropdown
- [ ] HoverCard - Similar to Popover
- [ ] AlertDialog - Similar to Dialog
- [ ] Skeleton - Loading states
- [ ] ToggleGroup - Button group with selection

### Complex Components:
- [ ] Uploader - Drag-drop, progress tracking, file list
- [ ] DataTable - Sorting, filtering, pagination
- [ ] Tree - Nested items, expand/collapse
- [ ] Calendar - Date selection, range picking

---

## Success Metrics

### Code Quality
✅ No linter errors  
✅ TypeScript types for all components  
✅ Consistent naming conventions  
✅ Proper exports in index.ts  

### Visual Quality
✅ All icons render correctly  
✅ Consistent button heights across variants  
✅ No layout clipping or cut-off content  
✅ Proper spacing and padding  

### Accessibility
✅ Violet color passes WCAG contrast  
✅ Keyboard navigation works  
✅ ARIA attributes proper (Radix handles this)  
✅ Focus states visible  

---

## Quick Reference

### CSS Variables (Radix)
- `--space-1` through `--space-9`: Spacing scale
- `--radius-1` through `--radius-6` + `--radius-full`: Border radius
- `--accent-9`: Primary accent color (violet)
- `--gray-6`: Border colors
- `--font-family`: Override with Poppins

### Component Sizes
- **Buttons**: 24, 32, 40, 48px
- **Icons**: 14, 18, 20, 24px+
- **Cards**: 600px for forms, flexible for others
- **Spacing**: Use gap-3, gap-4, gap-5 for good rhythm

This document should be referenced for ALL new components to avoid repeating mistakes! 🎯

