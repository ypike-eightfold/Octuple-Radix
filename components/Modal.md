Component: Modal
Overview
A modal is a user interface (UI) element that appears on top of a parent window as a child window. It creates a mode that disables user interaction with the main window but keeps it visible. Users must interact with the modal to return to the main window.    

When to Use
Use Modal (instance) when: Implementing custom, complex dialogs (similar to Dialog).    

Use Modal (static methods like Modal.confirm) when: Quickly displaying standard confirmations or simple alerts.    

Consider other components if: Message is non-critical and non-blocking (Alert/Message/Toast).    

Best Practices
Include a clear title.    

Provide distinct action buttons.    

Allow closure via 'X' button and Escape key.    

Keep content concise.    

Things to Avoid
Don't use for non-essential notifications.    

Avoid launching modals from other modals.    

Key Properties (API Highlights - Instance)
(Largely identical to Dialog: visible, title, onOk, onCancel, footer, children, etc.)    

confirmLoading: (boolean) Loading state on OK button.    

Key Properties (API Highlights - Static Methods)
Modal.confirm({ title, content, icon, okText, onOk,...})    

(Also info, success, error, warning)    

Accessibility Considerations
(Identical to Dialog): Trap focus, full keyboard operability, role="dialog"/alertdialog, aria-modal="true", aria-labelledby.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Modal/Modal.tsx