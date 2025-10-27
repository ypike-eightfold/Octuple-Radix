Component: Button
Overview
Buttons allow end-users to perform actions and make choices with a single click. Buttons can perform functions like calling APIs, updating data or inserting new data.    

When to Use
Use Button when: Initiating an action, submitting forms, triggering modals.    

Consider other components if: For simple navigation (use Link) or toggling states (use Switch/Toggle).    

Best Practices
Use clear, concise labels describing the action.    

Maintain consistency in styling and placement.    

Use the disabled state when an action isn't available.    

Things to Avoid
Don't use buttons for navigation if a Link is more appropriate.    

Avoid too many buttons in close proximity.    

Key Properties (API Highlights)
variant: (string) Defines the visual style. Allowed Values: primary, secondary, link, destructive primary, destructive secondary, text, default, destructive default, neutral, copilot primary, copilot secondary.    

size: (string) Sets the button size. Allowed Values: small, medium, large.    

disabled: (boolean) If true, the button is not interactive.    

onClick: (function) Callback function executed on click.    

icon: (React.ReactNode) An icon element to display within the button.    

iconPosition: (string) Position of the icon relative to the text. Allowed Values: left, right.    

loading: (boolean) If true, displays a loading spinner inside the button.    

htmlType: (string) The native HTML type attribute for the button. Allowed Values: button, submit, reset.    

Accessibility Considerations
Ensure a clear focus state.    

Must be keyboard navigable and triggerable with both Enter and Space keys.    

Icon-only buttons need an ariaLabel prop to describe the action.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Button/Button.tsx
