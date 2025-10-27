Component: Link
Overview
The Link component is for navigation, rendering an <a> tag. When you click on a text link, it takes you to another webpage or a specific location on a webpage.    

When to Use
Use Link when: Navigating to URLs (internal/external), page sections, or browser actions (mailto:).    

Consider other components if: Triggering an operation (Button) or a button styled as a link (Button variant="link").    

Best Practices
Use descriptive link text indicating the destination.    

Ensure links are visually distinguishable from regular text.    

For target="_blank", indicate "opens in new tab" visually and for screen readers.    

Things to Avoid
Don't use links for actions that don't navigate.    

Avoid broken links.    

Key Properties (API Highlights)
href: (string) The URL.    

target: (_self, _blank, etc.).    

variant or type: (e.g., primary, secondary, internal).    

disabled: (boolean).    

icon: (node).    

underline: (none, hover, always).    

Accessibility Considerations
Link text should make sense out of context.    

Must have visible focus state and be keyboard navigable (Enter).    

For target="_blank", add rel="noopener noreferrer" and inform users.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Link/Link.tsx