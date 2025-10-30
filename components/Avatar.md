Component: Avatar
Overview
An avatar is a graphical representation of a user or character. Avatars are used to personalize the user experience by displaying a profile picture or unique icon. They can also represent different user types, such as a customer or an administrator. Avatars have three variations: text (2 letter initials), icon, or image. It's recommended to use imagery to represent people or companies whenever possible.    

When to Use
Use Avatar when: Displaying profile pictures, representing users in lists, or as placeholders.    

Consider other components if: You need to display a larger, more detailed image.    

Best Practices
Use consistent sizes within the same context.    

Provide a fallback (initials or default icon) if an image is unavailable.    

Ensure good contrast for text-based fallbacks.    

Things to Avoid
Don't use avatars that are too small to be recognizable.    

Avoid low-resolution images.    

Key Properties (API Highlights)
size: (small, medium, large, xlarge or number).    

shape: (circle, square).    

src: (string) URL of the image.    

icon: (node) Icon to display if src is not provided.    

children: (string/node) Text (initials) if no src or icon.    

backgroundColor: (string) Custom background for text/icon avatars.    

Accessibility Considerations
Provide meaningful alt text if the avatar contains an image.    

If interactive, ensure it's focusable and has an appropriate ARIA role/label.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Avatar/Avatar.tsx