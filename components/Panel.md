Component: Panel
Overview
The Panel is a container that slides in from the edge of the screen to display supplementary content, forms, or detailed views without navigating away from the main page. It is more feature-rich than a Drawer, with dedicated header and footer sections.    

When to Use
Use for complex forms, detailed record views, or settings panels that require more space and structure than a Dialog or Popover.    

Use for multi-step tasks where the user needs to remain in the context of the main page.    

Best Practices
Use the title and header action buttons to provide clear context and actions.    

Use the footer for primary actions like "Save" or "Cancel".    

Ensure the placement and size are appropriate for the content and viewport.    

Key Properties (API Highlights)
visible: (boolean) Toggles the visibility of the panel.    

onClose: (function) Callback function triggered when the panel is closed.    

placement: ('top', 'right', 'bottom', 'left') The edge from which the panel appears. Default: right.    

title: (ReactNode) The title displayed in the panel's header.    

footer: (ReactNode) The content for the panel's footer section.    

closable: (boolean) Whether to show the close button. Default: true.    

maskClosable: (boolean) Whether clicking the overlay mask closes the panel. Default: true.    

width / height: (number) Custom width or height for the panel.    

size: ('small', 'medium', 'large') Predefined sizes for the panel. Default: medium.    

actionButtonOneProps / Two / Three: (ButtonProps) Props for adding up to three action buttons in the header.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Panel/Panel.tsx