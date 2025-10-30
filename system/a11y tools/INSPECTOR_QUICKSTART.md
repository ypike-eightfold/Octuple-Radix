# A11y Inspector - Quick Start Guide

## ✅ What's New
A new **"a11y"** button has been added to the prototype header (next to the "Navigate" button) that provides accessibility inspection tools.

## 🚀 How to Use

### Step 1: Open the Prototype
```bash
cd prototype
npm run dev
```

### Step 2: Access the a11y Button
Look for the **"a11y"** button in the top-right corner of the header (left of the "Navigate" button).

### Step 3: Enable Inspection Modes
1. Click the "a11y" button
2. Choose your inspection mode:

#### Option A: Show Header Levels
- Check the box for **"Show Header Levels"**
- All heading elements (H1-H6) will be highlighted with:
  - Purple bounding boxes (`#7B61FF`)
  - Labels showing the heading level

#### Option B: Show Tab Order
- Check the box for **"Show Tab Order"**  
- All focusable/interactive elements will be highlighted with:
  - Orange bounding boxes (`#FF6B35`)
  - Numbered badges showing keyboard tab sequence
  - Animated dashed lines connecting elements
  - Element type labels (button, input, link, etc.)

#### Option C: Show Image Accessibility
- Check the box for **"Show Image Accessibility"**
- All images and SVGs will be highlighted with color-coded status:
  - **Blue** 🎨 = Decorative (properly marked with empty alt)
  - **Green** ✓ = Informational (has proper alt text)
  - **Purple** 📊 = Complex (has extended description)
  - **Red** ⚠ = Missing accessibility attributes (needs fixing!)

#### Option D: Show Tooltips & Labels
- Check the box for **"Show Tooltips & Labels"**
- All elements with tooltips/labels will show their text persistently:
  - **Orange boxes** = Elements with tooltips or labels
  - **Red boxes with "ICON"** = Icon-only buttons (critical to check!)
  - Tooltip text displayed without hovering
  - Label source shown (title, aria-label, etc.)

### Step 4: Interact with Overlays
When multiple callouts overlap, **click on any callout to bring it to the front**. This helps you read the full content when overlays are crowded:
- Click once to bring a callout forward (z-index: 1,000,000)
- Click again to deselect and return it to normal layering
- Works for all inspection modes (headers, tab order, images, tooltips)

### Step 5: Navigate Between Pages
- The inspection overlay remains active as you navigate between pages
- Use the "Navigate" dropdown to visit different pages and compare structures
- Uncheck the inspection mode to hide the overlay
- You can switch between inspection modes (currently one active at a time)

## 📊 What You'll See

### When "Show Header Levels" is enabled:
- **Purple boxes** (`#7B61FF`) around all heading elements
- **Labels** (e.g., "H1", "H2", "H3") positioned above each heading
- **Semi-transparent overlay** for easy identification

### When "Show Tab Order" is enabled:
- **Orange boxes** (`#FF6B35`) around all focusable elements
- **Numbered circular badges** (1, 2, 3...) showing tab sequence
- **Animated dashed lines** connecting tab stops
- **Element type labels** below each element (button, input, link, etc.)
- **Explicit tabindex indicators** when custom tab order is used

### When "Show Image Accessibility" is enabled:
- **Color-coded borders** around all images (blue/green/purple/red)
- **Status badge** with emoji icon (🎨/✓/📊/⚠)
- **Information panel** showing:
  - Accessibility status (Decorative/Informational/Complex/Missing)
  - Alt text content (if present)
  - ARIA attributes (aria-label, aria-labelledby)
  - Role attributes
  - Warnings for missing or inadequate markup

### When "Show Tooltips & Labels" is enabled:
- **Orange borders** around elements with tooltips/labels
- **Red borders + "ICON" badge** for icon-only buttons
- **Persistent tooltip display** (no hover needed):
  - Tooltip/label text shown in speech bubble
  - Source attribute indicated (title, aria-label, etc.)
  - Positioned above element with arrow pointer

## 🎯 Use Cases

### Header Levels
1. **Heading Hierarchy Review**: Quickly verify that pages have proper H1→H2→H3 structure
2. **Accessibility Audits**: Document heading structure for WCAG compliance
3. **Design Handoffs**: Show heading levels to developers and stakeholders
4. **Quality Assurance**: Ensure consistent heading usage across the prototype

### Tab Order
1. **Keyboard Navigation**: Verify logical tab flow for keyboard-only users
2. **Focus Management**: Identify focus traps or navigation issues
3. **Form Validation**: Ensure form fields follow a logical sequence
4. **Accessibility Compliance**: Document keyboard interaction for WCAG 2.1
5. **UX Review**: Verify interactive elements are in the expected order

### Image Accessibility
1. **Alt Text Audit**: Identify images missing alternative text
2. **Decorative Classification**: Verify decorative images are properly marked
3. **Quality Check**: Catch generic or unhelpful alt text (filenames, "image", etc.)
4. **WCAG Compliance**: Ensure all informational images have meaningful descriptions
5. **Complex Images**: Verify charts/diagrams have extended descriptions
6. **SVG Accessibility**: Check that SVG graphics have proper labeling

### Tooltips & Labels
1. **Icon-Only Button Audit**: Verify all icon buttons have accessible names
2. **Tooltip Quality**: Review tooltip text for clarity and helpfulness
3. **Consistency Check**: Ensure similar elements have consistent labels
4. **Screen Reader Preview**: See exactly what screen reader users will hear
5. **Missing Labels**: Identify interactive elements without accessible names
6. **Hover-Free Review**: Audit all tooltips without hovering each element

## 🔧 Technical Details

- **Header Inspector**: Purple `#7B61FF` (Eightfold Design System)
- **Tab Order**: Orange `#FF6B35` (for visual distinction)
- **Tooltip Inspector**: 
  - Amber/Orange (`#F59E0B`) = Standard tooltips
  - Red (`#EF4444`) = Icon-only buttons
- **Image Inspector**: 
  - Blue (`#3B82F6`) = Decorative
  - Green (`#22C55E`) = Informational  
  - Purple (`#A855F7`) = Complex
  - Red (`#EF4444`) = Missing/Issues
- **Non-intrusive**: Overlays don't interfere with page interactions
- **Real-time**: Automatically updates when content changes
- **Scoped**: Only inspects content within the prototype stage
- **Auto-detection**: All attributes detected from DOM - no manual tagging needed
- **Smart filtering**: Only shows visible elements and validates attribute quality

## 🚀 Future Enhancements

The View button is designed to support additional inspection modes:
- [x] Header Levels ✅
- [x] Tab Order / Keyboard Navigation ✅
- [x] Image Accessibility ✅
- [x] Tooltips & Labels ✅
- [ ] Color contrast checking
- [ ] ARIA live regions
- [ ] Landmark region display
- [ ] Form label associations
- [ ] Skip link detection

## 📝 Example Pages to Try

1. **PCS High Volume Hiring** (`/hvh-title`)
   - **Headers**: 1 H1 and 4 H3 elements
   - **Tab Order**: Multiple buttons and navigation elements
   - **Images**: Logo image (check if properly labeled)
   
2. **Admin Console** (`/admin-console`)
   - **Headers**: Complex heading structure
   - **Tab Order**: Rich forms and interactive controls
   - **Images**: Various UI icons and graphics
   
3. **Positions Dashboard** (`/positions`)
   - **Headers**: Table and dashboard headings
   - **Tab Order**: Table interactions and filters
   - **Images**: Avatars and status icons

## 💡 Pro Tips

- **Click overlapping callouts** to bring them to the front for easier reading
- Leave the inspection mode on while navigating to compare structures across pages
- Use Tab Order view to verify that interactive elements follow visual reading order
- Screenshots with inspection overlays are great for documentation and handoffs
- Look for unusual tab order numbers that skip around - this may indicate UX issues
- Check that explicit `tabindex` values are intentional (they appear in orange labels)
- Verify forms have a logical top-to-bottom, left-to-right tab flow
- **Red-bordered images** need immediate attention - add alt text or mark as decorative
- Decorative images (logos used purely for branding) should have `alt=""`
- Informational images need descriptive alt text that conveys their meaning/purpose
- Avoid alt text like "image", "picture", or filenames - be descriptive!
- **Red-bordered buttons with "ICON"** are critical - these must have accessible labels
- Icon-only buttons need `aria-label` or `title` attributes for screen readers
- Tooltip text should be concise but descriptive enough to understand the action
- Consistent wording across similar actions (e.g., all "Edit" buttons should say "Edit")

---

All existing flows and pages remain unchanged - this is purely an admin overlay tool!
