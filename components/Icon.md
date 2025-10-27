Component: Icon
Overview
The Icon component displays scalable vector icons, enhancing visual communication. Octuple uses @octuple/icon.    

When to Use
Use Icon when: Accompanying text for visual cues (buttons, lists), representing actions compactly, or for icon-only buttons.    

Consider other components if: Displaying complex images (<img>).    

Best Practices
Choose universally understood icons.    

Use icons consistently.    

Ensure sufficient color contrast and appropriate size.    

Things to Avoid
Don't use ambiguous icons.    

Don't rely solely on icons for critical information without accessible labels.    

Key Properties (API Highlights)
icon: (SVGComponent) The imported SVG icon.    

size: (number/string).    

color: (string).    

ariaLabel: (string) For accessibility, especially for interactive icons.    

Accessibility Considerations
Decorative icons: aria-hidden="true".    

Interactive/Meaningful icons: Must have an accessible name (e.g., aria-label).    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Icon/Icon.tsx