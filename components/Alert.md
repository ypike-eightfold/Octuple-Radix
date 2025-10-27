Component: Alert (info bar)
Overview
The Alert component is used to display brief, important messages that don't interrupt the user's flow but require their attention. It is typically used to inform users of important or urgent messages. Info bars are designed to be more disruptive than snack bars, and they should only be used for messages that require the user's immediate attention.    

When to Use
Use Alert when: Providing feedback after an action (e.g., "Profile updated"), notifying of system status, or displaying non-critical errors.    

Consider other components if: The message requires immediate user action (use Dialog/Modal) or is a transient notification (use Toast).    

Best Practices
Use clear, concise language.    

Choose the correct alert type (success, info, warning, error) to match the intent.    

Make alerts closable if the information can be acknowledged and dismissed.    

Things to Avoid
Don't use alerts for messages that must block the user's task.    

Avoid displaying too many alerts at once.    

Key Properties (API Highlights)
type: (success, info, warning, error, system) Defines the visual style and meaning.    

message: (string/node) The main content.    

description: (string/node) Additional text.    

closable: (boolean) If true, allows the user to dismiss the alert.    

showIcon: (boolean) Whether to display a type-specific icon.    

action: (node) Allows adding a button or link within the alert.    

Accessibility Considerations
Alerts should have role="alert" (for assertive messages) or role="status" (for polite updates).    

Color should not be the only way to convey the alert's type; use icons and text.    
https://github.com/EightfoldAI/octuple/blob/main/src/components/InfoBar/InfoBar.tsx
