import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-DI2gBlDf.js";import{M as s}from"./index-BOtZxGXl.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-Cg9sa2ww.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"This guide will help you set up Octuple Radix in your React application."}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"Install Octuple Radix from npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @eightfold.ai/octuple-radix
`})}),`
`,e.jsx(n.p,{children:"Or using yarn:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @eightfold.ai/octuple-radix
`})}),`
`,e.jsx(n.h2,{id:"basic-setup",children:"Basic Setup"}),`
`,e.jsx(n.h3,{id:"1-import-global-styles",children:"1. Import Global Styles"}),`
`,e.jsxs(n.p,{children:["Import the global CSS file at the root of your application (usually ",e.jsx(n.code,{children:"main.tsx"})," or ",e.jsx(n.code,{children:"App.tsx"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@eightfold.ai/octuple-radix/styles.css';
`})}),`
`,e.jsx(n.h3,{id:"2-add-themeprovider",children:"2. Add ThemeProvider"}),`
`,e.jsxs(n.p,{children:["Wrap your application with the ",e.jsx(n.code,{children:"ThemeProvider"})," component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { ThemeProvider } from '@eightfold.ai/octuple-radix';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

export default App;
`})}),`
`,e.jsx(n.h3,{id:"3-use-components",children:"3. Use Components"}),`
`,e.jsx(n.p,{children:"Import and use components from the package:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, Card, Flex, Text } from '@eightfold.ai/octuple-radix';

function MyComponent() {
  return (
    <Card>
      <Flex direction="column" gap="3">
        <Text size="5" weight="bold">Welcome to Octuple Radix!</Text>
        <Text>A modern design system built on Radix Themes.</Text>
        <Button>Get Started</Button>
      </Flex>
    </Card>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"theme-configuration",children:"Theme Configuration"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," accepts several props to customize the theme:"]}),`
`,e.jsx(n.h3,{id:"accent-color",children:"Accent Color"}),`
`,e.jsxs(n.p,{children:["Change the primary accent color (default: ",e.jsx(n.code,{children:"indigo"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ThemeProvider accentColor="indigo">
  <App />
</ThemeProvider>
`})}),`
`,e.jsxs(n.p,{children:["Available colors: ",e.jsx(n.code,{children:"indigo"}),", ",e.jsx(n.code,{children:"violet"}),", ",e.jsx(n.code,{children:"blue"}),", ",e.jsx(n.code,{children:"green"}),", ",e.jsx(n.code,{children:"red"}),", ",e.jsx(n.code,{children:"orange"}),", ",e.jsx(n.code,{children:"pink"})]}),`
`,e.jsx(n.h3,{id:"appearance",children:"Appearance"}),`
`,e.jsx(n.p,{children:"Toggle between light and dark mode:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ThemeProvider appearance="dark">
  <App />
</ThemeProvider>
`})}),`
`,e.jsx(n.h3,{id:"border-radius",children:"Border Radius"}),`
`,e.jsx(n.p,{children:"Adjust the global border radius:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ThemeProvider radius="medium">
  <App />
</ThemeProvider>
`})}),`
`,e.jsxs(n.p,{children:["Options: ",e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),", ",e.jsx(n.code,{children:"full"})]}),`
`,e.jsx(n.h3,{id:"scaling",children:"Scaling"}),`
`,e.jsx(n.p,{children:"Adjust UI scaling:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ThemeProvider scaling="95%">
  <App />
</ThemeProvider>
`})}),`
`,e.jsxs(n.p,{children:["Options: ",e.jsx(n.code,{children:"90%"}),", ",e.jsx(n.code,{children:"95%"}),", ",e.jsx(n.code,{children:"100%"}),", ",e.jsx(n.code,{children:"105%"}),", ",e.jsx(n.code,{children:"110%"})]}),`
`,e.jsx(n.h3,{id:"complete-example",children:"Complete Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from '@eightfold.ai/octuple-radix';
import '@eightfold.ai/octuple-radix/styles.css';

function App() {
  return (
    <ThemeProvider
      appearance="light"
      accentColor="indigo"
      grayColor="slate"
      radius="full"
      scaling="100%"
    >
      <YourApp />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"using-icons",children:"Using Icons"}),`
`,e.jsx(n.p,{children:"Octuple Radix uses Material Symbols Outlined for icons:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Icon } from '@eightfold.ai/octuple-radix';

function MyComponent() {
  return (
    <div>
      <Icon name="search" size={18} />
      <Icon name="settings" size={20} color="var(--indigo-9)" />
    </div>
  );
}
`})}),`
`,e.jsxs(n.p,{children:["Common icon names: ",e.jsx(n.code,{children:"add"}),", ",e.jsx(n.code,{children:"edit"}),", ",e.jsx(n.code,{children:"delete"}),", ",e.jsx(n.code,{children:"search"}),", ",e.jsx(n.code,{children:"settings"}),", ",e.jsx(n.code,{children:"check"}),", ",e.jsx(n.code,{children:"close"}),", ",e.jsx(n.code,{children:"arrow_forward"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://fonts.google.com/icons",rel:"nofollow",children:"Browse all Material Symbols →"})}),`
`,e.jsx(n.h2,{id:"typescript-support",children:"TypeScript Support"}),`
`,e.jsx(n.p,{children:"Octuple Radix is written in TypeScript and includes full type definitions:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, type ButtonProps } from '@eightfold.ai/octuple-radix';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
`})}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsxs("div",{style:{display:"flex",gap:"16px",margin:"32px 0",flexWrap:"wrap"},children:[e.jsx("a",{href:"?path=/docs/documentation-design-tokens--docs",style:{padding:"12px 24px",background:"#3e63dd",color:"white",borderRadius:"8px",textDecoration:"none",fontWeight:500},children:e.jsx(n.p,{children:"Design Tokens →"})}),e.jsx("a",{href:"?path=/docs/documentation-components-overview--docs",style:{padding:"12px 24px",background:"#f3f4f6",color:"#1f2937",borderRadius:"8px",textDecoration:"none",fontWeight:500},children:e.jsx(n.p,{children:"Browse Components"})})]}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"styles-not-loading",children:"Styles not loading"}),`
`,e.jsx(n.p,{children:"Make sure you've imported the CSS file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@eightfold.ai/octuple-radix/styles.css';
`})}),`
`,e.jsx(n.h3,{id:"icons-not-showing",children:"Icons not showing"}),`
`,e.jsx(n.p,{children:"Icons require the Material Symbols font to be loaded. It's included automatically when you import the styles."}),`
`,e.jsx(n.h3,{id:"typescript-errors",children:"TypeScript errors"}),`
`,e.jsxs(n.p,{children:["Make sure you have ",e.jsx(n.code,{children:"@types/react"})," and ",e.jsx(n.code,{children:"@types/react-dom"})," installed:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install --save-dev @types/react @types/react-dom
`})})]})}function u(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
