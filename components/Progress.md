Component: Progress
Overview
A progress bar is a visual indicator that shows the user how far along they are in a process. The goal is to provide the user with clear and concise information about the progress of a process.    

When to Use
Use Progress when: Showing completion status (file uploads, multi-step forms, background tasks with discernible percentage).    

Consider other components if: Task duration is unknown (Loader) or for placeholder content (Skeleton).    

Best Practices
Clearly label what the progress bar represents.    

Update in real-time or frequently.    

Show percentage value for clarity.    

Things to Avoid
Don't use for tasks with unknown duration.    

Avoid erratic or inaccurate progress updates.    

Key Properties (API Highlights)
percent: (number) 0-100.    

showInfo: (boolean) Display percentage/status icon.    

status: (success, exception, normal, active).    

type: (line, circle, dashboard).    

format: (function) Custom text format.    

strokeColor: (string or object).    

steps: (number) For discrete step progress bar.    

variants: (line, circle, dashboard, steps).    

size: (small, medium).    

Accessibility Considerations
role="progressbar".    

aria-valuenow, aria-valuemin="0", aria-valuemax="100".    

Accessible label (visible or aria-label).    

Text fallback for percentage.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Progress/Progress.tsx