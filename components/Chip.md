Component: Chip
Overview
A chip consists of a set of information grouped inside a small block. Chips can be used as tags when filtering, selecting choices, providing input, or triggering actions.    

When to Use
Use Chip when: showing a small container with compact, interactive info (e.g., filtering tags, removable inputs).    

Consider other components if: For simple status indicators (Badge/Pill) or primary actions (Button).    

Best Practices
Keep labels concise.    

If interactive (closable/clickable), provide clear visual cues.    

Ensure sufficient touch/click targets.    

Things to Avoid
Don't overload chips with text.    

Don't use chips for primary navigation.    

Key Properties (API Highlights)
label: (string/node).    

variant: (default, outlined, pill).    

color: (semantic colors like primary, destructive, etc.).    

size: (small, medium, large).    

disabled: (boolean).    

closable: (boolean). Shows close icon.    

onClose: (function).    

icon: (node) Icon at the start.    

onClick: (function).    

Accessibility Considerations
Interactive chips must be keyboard focusable.    

Close button needs an aria-label (e.g., "Remove [chip label]").    

Ensure sufficient color contrast.    

