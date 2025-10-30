Component: DatePicker
Overview
The DatePicker component allows users to select a single date or a date range. It supports various picker modes, including date, week, month, year, and quarter. The component is built to work with either Day.js or date-fns libraries.    

When to Use
Use DatePicker for selecting a single date (e.g., a birthday, appointment date).    

Use RangePicker for selecting a start and end date (e.g., booking a hotel, filtering a report).    

Best Practices
Use the placeholder prop to guide users on what to select.    

Use disabledDate to prevent users from selecting invalid dates, such as dates in the past.    

For RangePicker, consider providing preset ranges for common selections like "Last 7 days" or "This month".    

Key Properties (API Highlights)
picker: ('date', 'week', 'month', 'quarter', 'year') Sets the selection granularity. Default: date.    

format: (string | string) Sets the display format of the date.    

disabledDate: ((currentDate) => boolean) A function to specify which dates cannot be selected.    

showTime: (boolean | object) Adds a time selection panel to the date picker.    

showToday / showNow: (boolean) Toggles the visibility of the "Today" or "Now" buttons.    

onChange: (function(date, dateString)) Callback function triggered when a date is selected.    

allowClear: (boolean) Whether to show a clear button. Default: true.    

placeholder: (string) Placeholder text for the input.    

size: ('small', 'medium', 'large') The size of the input.    

status: ('error', 'warning', 'success') Sets the validation status.    

ranges (RangePicker only): (object) An object defining preset date ranges for quick selection.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/DateTimePicker/DatePicker/DatePicker.stories.tsx
