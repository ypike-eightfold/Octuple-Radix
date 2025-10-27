Component: Dialog
Overview
A dialog component is a type of window that appears when a program needs to give the user information in an urgent manner. Dialog boxes are used to enable communication and interaction between a user and a software program, inform users about critical information, require users to make decisions, or involve multiple tasks.    

When to Use
Use Dialog when: Requiring decisions before continuing (confirmations), displaying critical alerts, or focused tasks (login forms).    

Consider other components if: Information is non-critical (Alert/Toast/Popover) or content is for a side panel (Drawer).    

Best Practices
Use a clear, descriptive title.    

Provide obvious actions in a footer (Confirm, Cancel).    

Allow dismissal via 'X' button and Escape key.    

Things to Avoid
Don't use for non-critical information.    

Avoid dialogs that are too tall/wide requiring scrolling of the dialog itself.    

Don't open dialogs on top of other dialogs.    

Key Properties (API Highlights)
visible or open: (boolean).    

title: (string/node).    

onClose or onCancel: (function).    

onOk: (function).    

footer: (node/null).    

maskClosable: (boolean).    

keyboard: (boolean).    

focusLock: (boolean).    

Accessibility Considerations
Trap focus within the dialog (focusLock).    

Use role="dialog" or role="alertdialog", with aria-modal="true".    

Use aria-labelledby to associate the dialog with its title.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Dialog/Dialog.tsx