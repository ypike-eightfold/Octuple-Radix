Component: Tooltip
Overview
A tooltip is a small, pop-up window that appears when a user hovers over or focuses on an element. Tooltips are typically used to provide additional information about an element, such as its function or purpose. They display brief, non-interactive explanatory text.    

When to Use
Use Tooltip when: Labeling icon-only buttons, providing short explanations for UI elements, or displaying truncated text in full.    

Consider other components if: The information is critical and must always be visible (use a visible text label), or if the content is longer or requires interaction (use Popover).    

Best Practices
Keep the text very concise and to the point.    

Ensure the tooltip appears and disappears promptly on hover or focus.    

Use tooltips for supplemental, non-essential information that clarifies an interface element.    

Things to Avoid
Do not put critical information or actions that the user must see or perform inside a tooltip.    

Avoid using tooltips for lengthy descriptions or interactive content like links or buttons.    

Key Properties (API Highlights)
title: (string/node) The content to be displayed inside the tooltip.    

children: (node) The trigger element that the tooltip is attached to.    

placement: (string) The position of the tooltip relative to the trigger element (e.g., 'top', 'bottom', 'left', 'right').    

trigger: (hover, focus, click) The user action that causes the tooltip to appear. Default is 'hover'.    

arrow: (boolean or object) Whether to show a pointer arrow.    

Accessibility Considerations
The tooltip should appear on keyboard focus for focusable trigger elements to be accessible to keyboard-only users.    

The trigger element can use aria-describedby to programmatically link to the tooltip's content. The tooltip container itself can have role="tooltip".    

Avoid using tooltips on static, non-focusable elements if the information is important for understanding the interface.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Tooltip/Tooltip.tsx