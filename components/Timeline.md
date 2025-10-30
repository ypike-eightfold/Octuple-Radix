Component: Timeline
Overview
The Timeline is a variant of the Stepper component, used to display a list of items or events in chronological order. It can indicate the status of each step (e.g., completed, in-progress).    

When to Use
Use to display activity feeds, version histories, or the chronological progression of a process.    

Best Practices
Use icons within each step to visually represent the type of event.    

Use the status prop on individual steps to show progress or errors.    

Key Properties (API Highlights)
variant: ('Timeline') Must be set to Timeline to enable this functionality.    

items: (array of objects) The data for each step in the timeline. Each object can include title, description, icon, and status.    

lineStyle: ('dash', 'dot', 'solid') The style of the line connecting the timeline steps. Default: dash.    

showActiveStepIndex: (boolean) If true, displays the index number for the active step, which is useful when steps use icons. Default: false.    

Individual Step Props:

status: ('wait', 'process', 'finish', 'error') The status of an individual step.    

nodeIcon: (IconName) A custom icon for the step's node.    


Sources and related content

https://github.com/EightfoldAI/octuple/blob/main/src/components/Stepper/Timeline.stories.tsx