Component: Slider
Overview
The Slider allows selection of a single value or a range from a continuous or stepped sequence by dragging a handle.    

When to Use
Use Slider when: Selecting from a known range (volume, brightness), inputting imprecise numerical values visually, or filtering by a continuous range.    

Consider other components if: Precise numeric input needed (TextInput type="number"), or few discrete options (RadioButton/Select).    

Best Practices
Clearly indicate current value(s) (tooltip or numeric display).    

Make discrete steps clear if used.    

Allow clicking on the track to change value.    

Things to Avoid
Don't use for selecting from many discrete, non-numeric options.    

Avoid if extreme precision is required (pair with text input if needed).    

Key Properties (API Highlights)
value: (number or [number, number]).    

onChange: (function (value) => void).    

min/max: (number). Defaults 0/100.    

step: (number or null). Default 1.    

disabled: (boolean).    

range: (boolean) For selecting a range.    

vertical: (boolean).    

marks: (object) Marks on the track, e.g., { 0: '0°C', 100: '100°C' }.    

tooltip: (object) Config for tooltip visibility and formatter.    

Accessibility Considerations
Keyboard: Handles focusable. Arrows to adjust value. Home/End for min/max.    

ARIA: role="slider", aria-valuenow, aria-valuemin, aria-valuemax, aria-orientation.    

Ensure current value is perceivable by all users.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Slider/Slider.tsx