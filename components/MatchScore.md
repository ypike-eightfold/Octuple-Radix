Component: MatchScore
Overview
The MatchScore component provides a visual representation of a score out of a total, typically using a series of indicators (like stars or dots) that can be filled, half-filled, or empty.    

When to Use
Use to display ratings, like a 4.5 out of 5-star review.    

Use to visualize a "match score" or proficiency level in a standardized way.    

Best Practices
Always provide a total to set the scale of the score.    

Use the label prop or ensure the component has a visible text label nearby to explain what the score represents.    

Key Properties (API Highlights)
score: (number) The score value to be displayed (e.g., 3.5).    

total: (number) The maximum possible score, which determines the number of indicators.    

label: (string) Custom text label for the component.    

hideLabel: (boolean) If true, the text label is hidden. Default: false.    

hideValues: (boolean) If true, the numeric value labels are hidden. Default: false.    

ariaLabel: (string) An accessible label for the component, crucial for screen reader users.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/MatchScore/MatchScore.tsx