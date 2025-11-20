# Empty State Illustrations - Setup Instructions

## Exporting from Figma

To get pixel-perfect illustrations, you need to export PNG files from Figma:

1. Open the Figma file: https://www.figma.com/design/SlKRC7oKF7XZyHMv2op4ch/Octuple-DS--Theme-2-

2. Navigate to each illustration node and export as PNG @2x:
   - **Empty Data**: Node ID `3672:4553` → Save as `empty-data.png`
   - **Technical Error**: Node ID `3672:4561` → Save as `technical-error.png`
   - **Empty Conversation**: Node ID `3672:4577` → Save as `empty-conversation.png`
   - **Empty Search**: Node ID `3672:4583` → Save as `empty-search.png`
   - **Tasks Complete**: Node ID `3672:4591` → Save as `tasks-complete.png`
   - **Empty Successor**: Node ID `7386:23344` → Save as `empty-successor.png`
   - **Unclaimed Profile**: Node ID `7715:23751` → Save as `unclaimed-profile.png`
   - **Empty Documents**: Node ID `25107:113146` → Save as `empty-documents.png`
   - **Alert**: Node ID `30031:112730` → Save as `alert.png`

3. Place all PNG files in the `illustrations/` directory.

4. Restart the development server.

## Alternative: Use SVG versions

If you prefer SVG versions (which are included), the component will automatically fall back to simplified SVG illustrations.

