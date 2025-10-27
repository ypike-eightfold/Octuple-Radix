Component: Switch (aliased as Toggle)
Overview
The Switch (or Toggle) component provides a toggle for a single binary state (on/off, enabled/disabled).    

When to Use
Use Switch/Toggle when: Toggling a single setting immediately (e.g., "Enable notifications").    

Consider other components if: Multiple options (RadioButtons/Select/CheckBoxes) or if a submit action is needed (CheckBox in a form).    

Best Practices
Clearly label what the switch controls (label should describe the "on" state).    

Ensure on/off states are visually distinct.    

Use for immediate state changes.    

Things to Avoid
Don't use if more than two states.    

Avoid for actions requiring confirmation.    

Key Properties (API Highlights)
checked: (boolean).    

onChange: (function (checked: boolean, event) => void).    

disabled: (boolean).    

loading: (boolean).    

size: (default, small).    

checkedChildren: (node) Content inside handle for "on" state.    

unCheckedChildren: (node) Content inside handle for "off" state.    

Accessibility Considerations
role="switch".    

aria-checked="true/false".    

Must have an accessible label.    

Keyboard focusable and toggleable (Space/Enter).    

