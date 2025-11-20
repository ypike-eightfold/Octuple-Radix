# Component Analysis List

Components extracted from Storybook stories for Figma comparison.

## V2.5 Status Summary

**🎉 Major Milestone: All Core Form Controls Complete!**

### ✅ **V2.5 Completed: 17 Components**

**Phase 1: Form Controls (8/8)** ✅
- ButtonV2, TextFieldV2, TextAreaV2, SelectV2, CheckboxV2, RadioV2, SwitchV2, SliderV2

**Phase 2: Navigation (4/4)** ✅
- NavbarV2, NavigationMenuV2, NavTabV2, PageTabV2

**Phase 3: Feedback & Overlays (2/2)** ✅
- ToastV2, TooltipV2

**Phase 4: Progress & Status (2/2)** ✅
- ProgressV2, TimelineV2

**Phase 5: Utilities & Tools (1/1)** ✅
- UploaderV2

---

### 📋 **What's Next for V2.5?**

According to COMPONENT_STRATEGY.md, we need to:
1. **Analyze Figma** for remaining components to determine which need V2 versions
2. **Follow the same pattern** as form controls (if Figma specs differ significantly from Radix defaults)

**Priority Candidates:**
- **Dialog/AlertDialog** - Critical user interactions
- **Card/Badge** - Common display components
- **Popover/HoverCard** - Contextual information
- **Accordion** - Feedback component

**Needs Refinement:**
- **TimelineV2** - Horizontal connector spacing/alignment needs fine-tuning to match Figma exactly

---

## Form Controls (High Priority)
- [x] Button → **Primitive** (Done: ButtonV2)
- [x] TextField → **Primitive** (Done: TextFieldV2 - 81 combinations)
- [x] TextArea → **Primitive** (Done: TextAreaV2 - matches TextField)
- [x] Select → **Primitive** (Done: SelectV2 - custom dropdown with search)
- [x] Checkbox → **Primitive** (Done: CheckboxV2 - custom states)
- [x] Radio → **Primitive** (Done: RadioV2 - custom states)
- [x] Switch → **Primitive** (Done: SwitchV2 - custom toggle)
- [x] Slider → **Primitive** (Done: SliderV2 - custom range control)
- [ ] SegmentedControl → **Radix Themes** (Use existing)
- [ ] CheckboxCards → **Radix Themes** (Use existing)
- [ ] RadioCards → **Radix Themes** (Use existing)

## Navigation
- [x] Navbar → **Primitive** (✅ V2 Done: NavbarV2 - glassmorphism, tabs, dropdowns)
- [x] NavigationMenu → **Primitive** (✅ V2 Done: NavigationMenuV2 - dropdown menus)
- [x] NavTab → **Primitive** (✅ V2 Done: NavTabV2 - 4px indicator, 24px padding, primary navigation)
- [x] PageTab → **Primitive** (✅ V2 Done: PageTabV2 - 2px indicator, 16px padding, page-level navigation)
- [ ] Breadcrumb → **Custom** (v1 exists - 🔍 Evaluate for V2)
- [ ] Pagination → **Custom** (v1 exists - 🔍 Evaluate for V2)
- [ ] SearchBar → **Custom** (v1 exists - 🔍 Evaluate for V2)

## Feedback & Overlays
- [x] Toast → **Primitive** (✅ V2 Done: ToastV2 - variant backgrounds, tinted colors, Figma specs) ✅
- [x] Tooltip → **Primitive** (✅ V2 Done: TooltipV2 - custom grey bg #4f5666, max-width 136px, Figma specs) ✅
- [ ] Accordion → **Radix Primitive** (v1 exists - 🔍 Evaluate for V2)
- [ ] Dialog → **Radix Themes** (🔍 Evaluate for V2)
- [ ] AlertDialog → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Popover → **Radix Themes** (🔍 Evaluate for V2)
- [ ] HoverCard → **Radix Themes** (🔍 Evaluate for V2)
- [ ] ContextMenu → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Dropdown → **Radix Themes** (🔍 Evaluate for V2)

## Display & Content
- [ ] Icon → **Custom** (v1 exists - 🔍 Evaluate for V2)
- [ ] Empty → **Custom** (v1 exists - 🔍 Evaluate for V2)
- [ ] EnhancedTable → **Custom** (v1 exists - 🔍 Evaluate for V2)
- [ ] Card → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Badge → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Callout → **Radix Themes** (🔍 Evaluate for V2)
- [ ] DataList → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Table → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Typography → **Radix Themes** (🔍 Evaluate for V2)
- [ ] IconButton → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Separator → **Radix Themes** (🔍 Evaluate for V2)

## Layout & Structure
- [ ] AspectRatio → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Inset → **Radix Themes** (🔍 Evaluate for V2)
- [ ] ScrollArea → **Radix Themes** (🔍 Evaluate for V2)

## Progress & Status
- [ ] Stepper → **Custom** (v1 exists - 🔍 Evaluate for V2)
- [x] Timeline → **Custom** (✅ V2 Done: TimelineV2 - vertical/horizontal, status indicators, Figma specs) ⚠️ **NOTE: Needs refinement - horizontal connector spacing/alignment**
- [x] Progress → **Primitive** (✅ V2 Done: ProgressV2 - segmented/smooth styles, Figma specs)
- [ ] Spinner → **Radix Themes** (🔍 Evaluate for V2)
- [ ] Skeleton → **Radix Themes** (🔍 Evaluate for V2)

## Utilities & Tools
- [x] Uploader → **Custom** (✅ V2 Done: UploaderV2 - 3 sizes, drag-and-drop, file validation, Figma specs)
- [ ] Toggle → **Radix Primitive** (v1 exists - 🔍 Evaluate for V2)
- [ ] ToggleGroup → **Radix Primitive** (v1 exists - 🔍 Evaluate for V2)
- [ ] Toolbar → **Radix Primitive** (v1 exists - 🔍 Evaluate for V2)

## Total Components Summary
- **✅ Completed V2 Components**: 17 (8 Form controls + 4 Navigation + 2 Feedback/Overlays + 2 Progress + 1 Utilities)
- **📦 Existing v1 Components**: Icon, Empty, EnhancedTable, Accordion, Toggle, ToggleGroup, Toolbar, Stepper, Breadcrumb, Pagination, SearchBar
- **🔍 To Analyze for V2**: ~15+ components (Need Figma review to determine V2 requirements)

---

## Analysis Template (to be filled for each component):

**Component Name:** [Name]
**Figma Status:** Found / Not Found
**Figma Specs:** [Colors, spacing, radius, typography, states, variants]
**Radix Equivalent:** [Component name]
**Key Differences:** [List]
**Recommendation:** Radix Themes / Wrap Radix / Build Primitive
**Reasoning:** [Why]

