Component: InlineSvg
Overview
The InlineSvg component fetches an SVG from a given URL and renders it directly into the DOM. This allows the SVG to be styled with CSS, making it responsive to theming and custom styles.    

When to Use
Use when you need to display an SVG from an external source and apply custom styles (e.g., color, size) via CSS.    

Useful for theming icons that are not part of the standard icon library.    

Best Practices
Always specify width and height to prevent layout shifts, especially when showSkeleton is enabled.    

Use showSkeleton to provide a better user experience while the SVG is loading.    

Key Properties (API Highlights)
uri: (string) The URL of the SVG file to be rendered.    

width: (string) The width of the SVG (e.g., '90px'). Required for skeleton.    

height: (string) The height of the SVG (e.g., '90px'). Required for skeleton.    

showSkeleton: (boolean) If true, a Skeleton placeholder is shown while the SVG is being fetched. Default: false.    

skeletonVariant: ('Round', 'Square') The shape of the skeleton placeholder. Default: Round.    

hideBrokenIcon: (boolean) If true, hides the broken image icon if the SVG fails to load. Default: false.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/InlineSvg/InlineSvg.tsx