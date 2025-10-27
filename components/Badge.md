Component: Badge
Overview
A variant of the pill component to create a visual to represent count inside other components like tabs, buttons, etc. Depending on the color of the background, there are a few different color variants to use inside other components.    

When to Use
Use Badge when: Displaying notification counts, status indicators (e.g., "New"), or small metadata.    

Consider other components if: Information is longer (use Pill/Chip) or needs interaction.    

Best Practices
Keep content very short.    

Use colors purposefully to convey meaning.    

Position badges consistently.    

Things to Avoid
Don't put too much text in a badge.    

Avoid using too many badges in one view.    

Key Properties (API Highlights)
count: (number/node) Content to display.    

dot: (boolean) Displays a small dot instead of count.    

status: (success, processing, default, error, warning) Sets color and meaning.    

color: (string) Custom color.    

offset: ([number, number]) Offset from the wrapped element's corner.    

Accessibility Considerations
If a badge conveys important information, ensure it's also available to screen readers (e.g., via aria-label on the parent).    

Ensure sufficient color contrast.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Badge/Badge.tsx
