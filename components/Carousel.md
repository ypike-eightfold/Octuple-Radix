Component: Carousel
Overview
A Carousel is a component for cycling through a group of content like images, text, or other HTML elements. It can operate in two modes: slide mode for a traditional slideshow experience with transitions, and scroll mode for a horizontally scrolling menu.    

When to Use
Use slide mode for: Showcasing featured content, image galleries, or onboarding tours.    

Use scroll mode for: Displaying a collection of items like product cards or categories in a compact, scrollable view.    

Best Practices
For slide mode, ensure all content has consistent dimensions to avoid layout shifts.    

For scroll mode, provide clear visual cues for scrolling, such as previous/next buttons.    

Use the pagination prop in slide mode to give users a sense of their position in the sequence.    

Key Properties (API Highlights)
type: ('slide', 'scroll') Sets the behavior of the carousel. Default: slide.    

controls: (boolean) Whether to display the previous and next control buttons. Default: true.    

loop: (boolean) If true, the carousel cycles continuously. slide mode only. Default: true.    

pagination: (boolean) If true, adds pagination dots at the bottom. slide mode only. Default: true.    

interval: (number | boolean) Time in milliseconds between automatic transitions. If false, disables auto-cycling. slide mode only. Default: 5000.    

pause: ('hover' | false) If 'hover', pauses auto-cycling on mouse enter. slide mode only. Default: hover.    

transition: ('push', 'crossfade') The animation effect for transitions. slide mode only. Default: push.    

carouselScrollMenuProps: (ScrollMenuProps) Props for the underlying scroll container when type is scroll.    

single: (boolean) If true, scrolls by a single item at a time. scroll mode only. Default: false.    

onPivotStart / onPivotEnd: (function) Callbacks fired at the start and end of a transition in slide mode.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Carousel/Carousel.tsx
