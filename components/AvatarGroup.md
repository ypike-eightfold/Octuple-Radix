Component: AvatarGroup
Overview
The AvatarGroup component is used to display a collection of avatars, often to provide social proof or represent a group of users or objects. It supports images, icons, or characters and can be configured to show a maximum number of avatars before collapsing the rest into a counter.    

When to Use
Use AvatarGroup when: Displaying a list of participants, team members, or users who have interacted with an item.    

Use to show social proof, like "X, Y, and 5 others liked this."    

Best Practices
Use the maxProps to gracefully handle large numbers of avatars.    

Ensure the size is consistent with other UI elements in the same context.    

Key Properties (API Highlights)
animateOnHover: (boolean) If true, avatars will animate on hover. Default: false.    

avatarListProps: (ListProps) Props to be passed to the underlying List component.    

children: (ReactNode) The child Avatar components.    

fontSize: (string) Sets the font size for fallback text avatars. Default: 18px.    

groupVariant: (overlapped, spaced) Defines how the avatars are grouped together. Default: overlapped.    

maxProps: (MaxAvatarProps) Props to configure the "more" indicator when the number of avatars exceeds the max count.    

count: (number) The maximum number of avatars to show.

tooltipProps: (TooltipProps) Props for the tooltip that appears on the "more" indicator.

value: (ReactNode) Custom value for the "more" indicator.

size: (string) Sets the size of the avatars in the group. Default: 32px.    

type: (round, square) The shape of the avatars. Default: square.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Avatar/AvatarGroup.tsx