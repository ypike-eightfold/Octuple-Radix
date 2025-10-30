Component: Uploader
Overview
An uploader is a graphical user interface (GUI) that allows users to upload files to a server. It typically consists of a button or a designated area that triggers the file selection process, a progress indicator to show the upload progress, and status messages to display any errors or warnings.    

When to Use
Use the Uploader when users need to submit one or more files, such as resumes, documents, profile pictures, or other media.    

Consider other components if you are only dealing with simple text input (TextInput, TextArea).    

Uploader Styles/Types
Click to Upload: A button or clickable area that opens the system's file selection dialog.    

Drag and Drop: A designated drop zone where users can drag and drop files from their desktop.    

Picture Wall/List: Displays a list or grid of uploaded files, often with image previews and management actions.    

Best Practices
Clearly indicate the accepted file types (e.g., .pdf, .jpg) and any size limits.    

Provide clear visual feedback during the upload process using a Progress bar or spinner.    

Show the status of each file clearly (e.g., pending, uploading, success, error).    

Allow users to cancel an upload in progress or remove an already uploaded file from the list.    

Things to Avoid
Avoid unclear instructions regarding file restrictions, which can lead to user frustration and validation errors.    

Do not leave the user without feedback during a long upload; always show that the system is working.    

Key Properties (API Highlights)
action: (string or function) The URL endpoint for the upload or a custom handler function.    

multiple: (boolean) Allows the user to select and upload multiple files at once.    

accept: (string) A comma-separated string of accepted file types (e.g., "image/png,image/jpeg").    

fileList: (array) A controlled list of file objects to be displayed.    

onChange: (function) A callback function that fires when the upload state changes (e.g., uploading, success, error).    

beforeUpload: (function) A hook to process or validate a file before the upload begins. Can return false to prevent the upload.    

listType: (string) The visual style of the file list: 'text', 'picture', 'picture-card', or 'picture-circle'.    

children: (node) The content that acts as the upload trigger (e.g., a Button).    

maxCount: (number) The maximum number of files that can be uploaded.    

Accessibility Considerations
The upload trigger element (button or drop zone) must have an accessible label.    

All interactive elements within the file list (e.g., remove button, retry button) must be keyboard navigable and have accessible labels.    

File status changes and validation errors should be announced to screen readers using ARIA live regions.    

Provide clear, visible instructions for file type and size limits.    

Image previews in the file list must have appropriate alternative text.    


Sources and related content

https://github.com/EightfoldAI/octuple/blob/main/src/components/Upload/Upload.tsx