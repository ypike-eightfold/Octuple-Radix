Component: Accordion
Overview
An accordion component is a user interface element that allows users to expand and collapse sections of content. Accordions are typically used to present large amounts of content in a small space, and they can be a great way to organize information and make it easier for users to find what they are looking for.    

When to Use
Use Accordion when: Displaying FAQs, organizing complex settings into collapsible sections, or reducing initial information overload.    

Consider other components if: You need to navigate between distinct views (use Tabs) or the content is very brief.    

Best Practices
Use clear and concise titles for each panel.    

Use icons (e.g., chevrons) to indicate expand/collapse functionality.    

Allow multiple sections to be open, or restrict to one if appropriate.    

Things to Avoid
Don't nest accordions too deeply.    

Avoid using accordions for critical information that must be seen immediately.    

Key Properties (API Highlights)
items: (array of objects) The data source for accordion panels, each containing key, header, and children/content.    

accordion: (boolean) If true, only one panel can be open at a time.    

bordered: (boolean) Whether to display a border.    

expandIconPosition: (left, right) Position of the expand icon.    

onChange: (function) Callback when a panel is toggled.    

Accessibility Considerations
Ensure headers are focusable buttons.    

Use aria-expanded to indicate state.    

Use aria-controls to link the header to its panel. The panel should have role="region". 

https://github.com/EightfoldAI/octuple/blob/main/src/components/Accordion/Accordion.tsx