Component: Message
Overview
Banners (Messages) run across the whole viewport of the interface. They are to be placed at the top of the page to provide an important message to the user. Depending on the severity and context of the message, these banners can have a close button on the right and another CTA for the users to take action.    

When to Use
Use Message when: Providing immediate, temporary feedback (e.g., "Settings saved") or brief system notifications.    

Consider other components if: Feedback needs to be persistent (Alert) or requires user action (Dialog/Modal).    

Best Practices
Keep messages concise.    

Use appropriate types (success, error, etc.).    

Ensure auto-dismissal is reasonably timed; consider a manual close for accessibility.    

Things to Avoid
Don't use for critical errors requiring user intervention.    

Avoid overly long messages or frequent displays.    

Key Properties (API - Programmatic Usage)
message.success(content, [duration], [onClose])    

message.error(content, [duration], [onClose])    

(Also info, warning, loading)

Global config: message.config({ top, duration, maxCount }).    

Accessibility Considerations
Messages should be in an ARIA live region (aria-live="polite" or assertive).    

Ensure duration is sufficient for readability. If closable, the close button must be accessible.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/MessageBar/MessageBar.tsx