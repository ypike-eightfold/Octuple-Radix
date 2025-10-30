Component: Pill (Tag)
Overview
A tag (Pill) component is a UI element that can be used to sort, filter, or tag content. Pills can contain information such as an input, action, or attribute. They are used to visually label objects on a page for quick recognition and can be static or interactive.    

When to Use
Use Pill when: Displaying status indicators ("Active", "Pending"), simple non-interactive tags.    

Consider other components if: For counts (Badge), or interactive elements that require more complex actions like removal (Chip).    

Best Practices
Keep text brief.    

Use colors purposefully for meaning.    

Maintain consistency.    

Things to Avoid
Don't put too much text in a pill.    

Avoid using for interactive elements if purely informational (use Chip instead if interaction is needed).    

Key Properties (API Highlights)
label: (string/node).    

color: (string, semantic or custom).    

variant: (default, outlined).    

size: (small, medium, large).    

icon: (node).    

closable/clickable/onClick/onClose: If true, blurs the line with the Chip component. Prefer Chip for interactive use cases.    

Accessibility Considerations
Ensure text has sufficient contrast.    

If color conveys meaning, ensure text also does.    

Interactive pills need focusability and accessible labels for actions.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Pills/Pill.tsx