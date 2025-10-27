Component: CheckBox
Overview
The CheckBox component allows users to select one or more options from a set, or toggle a single option.    

When to Use
Use CheckBox when: Users need to select multiple items, toggle a single binary state, or for "Select All" functionality.    

Consider other components if: Only one option can be selected (use RadioButton/Select) or for a switch-like visual (use Switch/Toggle).    

Best Practices
Clearly label each checkbox.    

Position labels consistently.    

Use indeterminate state for "Select All" checkboxes.    

Things to Avoid
Don't use checkboxes if only one option can be selected.    

Avoid pre-selecting checkboxes for non-essential choices.    

Key Properties (API Highlights)
checked: (boolean).    

disabled: (boolean).    

onChange: (function).    

indeterminate: (boolean).    

label: (string/node).    

children: (node) Alternative for label.    

variant: (default, pill-shaped).    

size: (small, medium, large).    

Accessibility Considerations
Each checkbox needs an associated label (clickable).    

Keyboard focusable and toggleable with Space.    

Group related checkboxes with <fieldset> and <legend>.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/CheckBox/CheckBox.tsx