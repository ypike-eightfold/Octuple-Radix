Component: Stepper
Overview
The Stepper (Steps) guides users through a multi-step process, indicating current, completed, and upcoming steps. It breaks down a long or complex process into a series of smaller, more manageable steps.    

When to Use
Use Stepper when: Breaking down complex tasks (checkout, wizards, multi-stage forms) into a linear sequence.    

Consider other components if: Process isn't linear (Tabs), continuous progress (Progress), or hierarchical navigation (Breadcrumb).    

Best Practices
Use concise, clear step titles.    

Clearly differentiate step statuses (completed, current, pending).    

Limit number of steps (3-7 is manageable).    

Provide clear navigation buttons (Next, Previous).    

Things to Avoid
Don't use for non-sequential tasks.    

Avoid overly long steps or too many input fields per step.    

Key Properties (API Highlights)
current: (number) Index of current step (0-based).    

items: (array of objects) Defines steps: title, description, icon, status, disabled.    

direction: (horizontal, vertical).    

status: (wait, process, finish, error) Status of current step.    

type: (default, navigation, dot). navigation allows clicking past steps.    

onChange: (function (current: number) => void) If clickable.    

Accessibility Considerations
Container can be <nav aria-label="...">.    

Current step: aria-current="step".    

Step status should be programmatically determinable.    

Clickable steps must be keyboard accessible.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Stepper/Stepper.tsx