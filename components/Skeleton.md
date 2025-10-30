Component: Skeleton
Overview
The Skeleton component provides a placeholder preview of content that is still loading, mimicking its structure.    

When to Use
Use Skeleton when: Loading content with a predictable structure (cards, lists), to improve perceived performance over a generic Loader, and reduce layout shifts.    

Consider other components if: Loading time is very short, content structure is unknown (Loader), or for determinate progress (Progress).    

Skeleton Sub-Components / Variants
: Props: active, loading, paragraph (boolean/object), title (boolean/object), round.    

: Props: active, size, shape.    

: Props: active, size, shape.    

: Props: active, size.    

: Props: active.    

Best Practices
Match skeleton closely to actual content structure/size.    

Use active animation subtly.    

Ensure smooth transition to loaded content.    

Things to Avoid
Don't make skeletons overly complex or detailed.    

Avoid for very short loading times (flashing).    

Key Properties (API Highlights)
loading: (boolean) Crucial. If true, shows skeleton; else shows children.    

children: (node) Actual content to show when loaded.    

active: (boolean) Enables animation.    

Props for specific shapes: paragraph, title, avatar, button, input, image.    

Accessibility Considerations
Skeletons are primarily visual. Mark loading region with aria-busy="true".    

Animation should respect prefers-reduced-motion.    

Skeletons themselves are not interactive.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Skeleton/Skeleton.tsx