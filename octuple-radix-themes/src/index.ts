/**
 * Octuple Radix v3
 * 
 * A modern design system built on Radix Themes
 * - Indigo accent color
 * - Poppins font family
 * - Material Symbols Outlined icons (weight 300)
 * - Full border radius for buttons, medium for inputs
 */

// Theme
export { ThemeProvider } from './theme/ThemeProvider';
export type { ThemeProviderProps } from './theme/ThemeProvider';

// Custom Components
export { Icon } from './components/Icon';
export type { IconProps } from './components/Icon';

export { Uploader } from './components/Uploader';
export type { UploaderProps } from './components/Uploader';

// Radix Primitives Components
export { Toast, ToastProvider, ToastViewport } from './components/Toast';
export type { ToastProps } from './components/Toast';

export { Accordion, AccordionItem } from './components/Accordion';
export type { AccordionProps, AccordionItemProps } from './components/Accordion';

export { Toggle } from './components/Toggle';
export type { ToggleProps } from './components/Toggle';

export { ToggleGroup, ToggleGroupItem } from './components/ToggleGroup';
export type { ToggleGroupProps, ToggleGroupItemProps } from './components/ToggleGroup';

export {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './components/NavigationMenu';
export type { NavigationMenuProps } from './components/NavigationMenu';

export {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from './components/Toolbar';
export type { ToolbarProps } from './components/Toolbar';

export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './components/Collapsible';
export type { CollapsibleProps } from './components/Collapsible';

// Additional Custom Components
export { Breadcrumb } from './components/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb';

export { Pagination } from './components/Pagination';
export type { PaginationProps } from './components/Pagination';

export { SearchBar } from './components/SearchBar';
export type { SearchBarProps } from './components/SearchBar';

export { Stepper } from './components/Stepper';
export type { StepperProps, StepItem } from './components/Stepper';

export { Timeline, TimelineItem } from './components/Timeline';
export type { TimelineProps, TimelineItemData } from './components/Timeline';

export { Empty } from './components/Empty';
export type { EmptyProps } from './components/Empty';

export { Navbar } from './components/Navbar';
export type { NavbarProps, NavbarLink } from './components/Navbar';

// Re-export all Radix Themes components for convenience
export * from '@radix-ui/themes';
