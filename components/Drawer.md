Component: Drawer
Overview
A drawer component is a panel that slides vertically in from the bottom of a screen to reveal additional content. This component is similar to the panel component and we intend to use it as a bottom sheet in mobile operating systems.    

When to Use
Use Drawer when: Displaying navigation menus (especially mobile), settings/filters, or related forms/tasks without full blocking.    

Consider other components if: Interaction must block main content (Dialog) or content is brief and contextual (Popover/Tooltip).    

Best Practices
Use a clear title.    

Provide an obvious way to close (button, Escape).    

Choose an appropriate placement (left, right, top, bottom).    

Things to Avoid
Don't overuse drawers.    

Avoid making drawers too wide/tall, forcing excessive scrolling.    

Key Properties (API Highlights)
visible or open: (boolean).    

onClose: (function).    

title: (string/node).    

placement: (top, right, bottom, left). Default: right.    

mask: (boolean).    

maskClosable: (boolean).    

width/height: (string/number).    

push: (boolean or object) Pushes main content.    

Accessibility Considerations
If modal, trap focus and use role="dialog", aria-modal="true".    

If non-modal, use role="complementary" or role="navigation".    

Label with aria-labelledby (if titled).    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Drawer/Drawer.tsx