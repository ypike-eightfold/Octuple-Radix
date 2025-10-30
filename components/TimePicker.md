Component: TimePicker
Overview
The TimePicker allows users to select a specific time, typically via a panel with scrollable lists or direct input.    

When to Use
Use TimePicker when: Selecting a precise time (scheduling, reminders).    

Consider other components if: Only selecting a date (DatePicker), or broad time periods (Select).    

Best Practices
Clearly label the TimePicker.    

Use appropriate time format (12/24 hour).    

Ensure easy navigation in the selection panel.    

Things to Avoid
Don't make common time selections difficult.    

Avoid overly complex panel interactions.    

Key Properties (API Highlights)
value/defaultValue: (Dayjs object or string).    

onChange: (function (time, timeString) => void).    

format: (string) e.g., "HH:mm:ss", "h:mm a".    

use12Hours: (boolean).    

hourStep/minuteStep/secondStep: (number).    

disabledHours/disabledMinutes/disabledSeconds: (functions).    

allowClear: (boolean).    

inputReadOnly: (boolean).    

Accessibility Considerations
Input needs an associated label.    

Keyboard navigation for panel (arrows, Enter/Space, Escape).    

ARIA: role="combobox", aria-haspopup, aria-expanded. Selected time clearly announced. 

https://github.com/EightfoldAI/octuple/blob/main/src/components/DateTimePicker/TimePicker/TimePicker.tsx