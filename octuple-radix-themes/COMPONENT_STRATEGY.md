# Component Strategy: Radix Themes vs Primitives

This document tracks the analysis of each component to determine whether to use Radix Themes or build as primitives.

## Decision Criteria

**Use Radix Themes when:**
- Design is close to Radix defaults (< 5 style overrides)
- Only theme token adjustments needed
- Component behavior matches Radix exactly

**Wrap Radix Themes when:**
- Moderate customization (5-15 overrides)
- Need custom variants/sizes not in Radix
- Core behavior is same but styling differs

**Build as Primitive when:**
- Heavy customization (> 15 overrides or lots of !important)
- Unique behavior/interactions
- Design significantly diverges from Radix
- Fighting with Radix specificity

---

## Component Analysis

### 1. Button ✅ ANALYZED

**Figma Specs:**
- 3 Sizes: Large (18px), Medium (16px), Small (14px)
- Border radius: 24px
- 4 States: Enabled, Hovered, Pressed, Disabled (40% opacity)
- 8+ Variants: Primary, Secondary, Default, Neutral, System UI, Disruptive Primary/Secondary/Default
- Colors: Custom hex values (#b0f3fe, #054d7b, etc.)
- Font: Poppins 600

**Radix Themes Equivalent:** Button component

**Key Differences:**
- Custom colors (not Radix color tokens)
- Custom border radius (24px vs Radix 6px)
- Custom sizes/padding
- Different variants than Radix
- Would need 30+ CSS overrides with !important

**Recommendation:** ✅ **Build as Primitive (Already Done)**

**Status:** Implemented as ButtonV2 component

---

### 2. TextField/Input Field 🔍 IN PROGRESS

**Figma Specs:**

**3 Shape Variants:**
- Rounded corner (12px border radius)
- Pill shape (fully rounded ~22px)
- Inline (underline only, no border)

**9+ States:**
- Enabled
- Hovered (text color changes to #1a212e)
- Active and filled (shows clear icon)
- Highlighted
- Disabled (40% opacity)
- Read-only
- Highlight-Success (success border/background)
- Highlight-Warning (warning border/background)
- Highlight-Error (error border/background)

**3 Sizes:**
- Large: 44px height, 18px font, 12px horizontal padding, 10px vertical padding
- Medium: 36px height, 16px font, 10px horizontal padding, 8px vertical padding
- Small: 28px height, 14px font, 8px horizontal padding, 6px vertical padding

**Other Details:**
- Border: 1px solid #69717f (gray)
- Background: White
- Font: Gilroy Medium
- Placeholder color: #69717f
- Text color: #1a212e
- Icon support: Material Design Icons, 24px

**Radix Themes Equivalent:** TextField.Root, TextField.Slot (for icons)

**Key Differences:**
1. **3 shape variants** (Radix has no pill/inline variants)
2. **12px border radius** (Radix default is 6px)
3. **Complex state system** (9 states vs Radix's 4-5)
4. **Custom highlight states** (Success/Warning/Error with specific styling)
5. **Custom sizing** (different from Radix size system)
6. **Gilroy font** (Radix uses system fonts)
7. **Custom colors** (not Radix tokens)
8. Would need:
   - 40+ CSS overrides
   - Custom wrapper for shape variants
   - Custom state management for highlights
   - Heavy use of !important

**Recommendation:** 🔴 **Build as Primitive**

**Reasoning:**
- Too many variants (3 shapes × 9 states × 3 sizes = 81 combinations)
- Radix TextField can't handle pill/inline variants
- Custom highlight system doesn't match Radix
- Would require massive CSS overrides
- Better to build clean primitive with full control

**Complexity Score:** 9/10 (One of most complex components)

**Implementation Priority:** High (used everywhere)

---

### 3. TextArea ✅ ANALYZED

**Figma Specs:** No dedicated Figma design - using TextField styling

**Design Decision:** Match TextField design for consistency

**Applied Specs (from TextField):**
- 3 Shapes: Rounded (12px), Pill (24px), Inline (underline)
- 3 Sizes: Large (18px), Medium (16px), Small (14px)
- 4 States: Enabled, Hover, Error, Disabled (40% opacity)
- Colors: Same as TextField (#69717f border, #1a212e text)
- Font: Poppins 400
- Multi-line specific: rows prop, resize options (none/vertical/horizontal/both)

**Radix Themes Equivalent:** TextArea component

**Key Differences:**
- Same issues as TextField (different shapes, sizes, colors)
- Would need same 40+ overrides
- Design consistency with TextField required
- Radix can't support pill/inline shapes

**Recommendation:** ✅ **Build as Primitive (Already Done)**

**Status:** Implemented as TextAreaV2 component

**Reasoning:** Must match TextField for consistent user experience across all text input components

---

## Summary

| Component | Figma Complexity | Radix Match | Recommendation | Status |
|-----------|-----------------|-------------|----------------|--------|
| Button | High | Low | Primitive | ✅ Done (ButtonV2) |
| TextField | Very High | Low | Primitive | ✅ Done (TextFieldV2) |
| TextArea | Very High | Low | Primitive | ✅ Done (TextAreaV2) |

---

## Next Steps

1. Continue analysis for remaining 49 components
2. Start with high-priority form controls:
   - TextArea
   - Select
   - Checkbox
   - Radio
   - Switch
3. Then navigation components
4. Then feedback/overlay components

---

## Code Patterns

### Pattern 1: Pure Primitive (like ButtonV2)
```tsx
// Clean component from scratch
export const ComponentV2 = ({ variant, size, ...props }) => {
  return <element className={`comp-v2 comp-v2--${variant} comp-v2--${size}`} {...props} />;
};
```

### Pattern 2: Wrapped Radix (TBD)
```tsx
// Use Radix as base, add custom wrapper
export const CustomComponent = ({ customProp, ...props }) => {
  return (
    <div className="custom-wrapper">
      <RadixComponent {...props} />
    </div>
  );
};
```

### Pattern 3: Pure Radix (TBD)
```tsx
// Use Radix directly, minimal theme token adjustments
import { Component } from '@radix-ui/themes';
export { Component }; // Re-export with custom theme
```

