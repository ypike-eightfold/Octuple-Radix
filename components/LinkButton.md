Component: LinkButton
Overview
LinkButton is a component that looks like a Button but behaves like a link (<a> tag), used for triggering a route or navigating to a URL. It extends the standard Button component with link-specific functionality.    

When to Use
Use when you need a call-to-action that navigates the user to a different page or external site.    

Use when a primary action in a section is navigational.    

Best Practices
Use a clear and descriptive label that indicates the destination of the link.    

Use the target prop appropriately (e.g., _blank for external links).    

Key Properties (API Highlights)
...rest: Inherits all attributes of an HTMLAnchorElement, including href, which is essential for navigation.    

target: (string) Specifies where to open the linked document (e.g., _self, _blank). Default: _self.    

shape: ('rectangle', 'pill', 'round') The shape of the button. Default: pill.    

size: ('small', 'medium', 'large', 'flex') The size of the button. Default: medium.    

variant: ('default', 'neutral', 'primary', 'secondary', 'systemui') The visual style of the button.    

alignText: ('left', 'center', 'right') The alignment of the text within the button. Default: center.    

floatingLinkButtonProps: (object) Props to make the button float in the bottom-right corner.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/LinkButton/LinkButton.tsx