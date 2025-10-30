import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-DI2gBlDf.js";import{M as p}from"./index-BJYza4QI.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-B6ETTkNR.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const t=({path:o,badge:s,badgeClass:n,title:r,description:d})=>{const c=()=>{if(window.parent){const l=`${window.parent.location.origin}/${o}`;window.parent.location.href=l}};return e.jsxs("div",{className:"component-card",onClick:c,style:{cursor:"pointer"},children:[e.jsx("span",{className:`category-badge ${n}`,children:s}),e.jsx("div",{style:{fontSize:"16px",fontWeight:600,color:"#1f2937",margin:"8px 0"},children:r}),e.jsx("div",{style:{fontSize:"14px",color:"#6b7280",lineHeight:"1.5"},children:d})]})};try{t.displayName="ComponentCard",t.__docgenInfo={description:"",displayName:"ComponentCard",props:{path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!0,type:{name:"string"}},badgeClass:{defaultValue:null,description:"",name:"badgeClass",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}}}catch{}function a(o){const s={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Documentation/Components Overview"}),`
`,e.jsx("style",{children:`
  .component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 24px 0;
  }
  
  .component-card {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 20px;
    background: #ffffff;
    text-decoration: none;
    color: inherit;
    display: block;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  
  .component-card:hover {
    border-color: #8b5cf6;
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);
    transform: translateY(-2px);
  }
  
  .category-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  
  .badge-forms { background: #ddd6fe; color: #5b21b6; }
  .badge-data { background: #dbeafe; color: #1e40af; }
  .badge-navigation { background: #d1fae5; color: #065f46; }
  .badge-overlays { background: #fef3c7; color: #92400e; }
  .badge-layout { background: #fecaca; color: #991b1b; }
  .badge-typography { background: #e0e7ff; color: #3730a3; }
  .badge-utilities { background: #fce7f3; color: #831843; }
  
  .category-section {
    margin: 48px 0;
  }
  
  .category-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid #e5e7eb;
  }
  
  .category-icon {
    font-size: 32px;
    line-height: 1;
  }
  
  .category-title {
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
    margin: 0;
  }
  
  .category-count {
    font-size: 14px;
    color: #6b7280;
    font-weight: 400;
  }
  
  .quick-start-section {
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
    color: white !important;
    padding: 32px;
    border-radius: 16px;
    margin: 32px 0;
  }
  
  .quick-start-section h2 {
    margin-top: 0;
    color: white !important;
  }
  
  .quick-start-section p {
    color: white !important;
  }
  
  .quick-start-section strong {
    color: white !important;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin: 32px 0;
  }
  
  .stat-card {
    background: #f9fafb;
    padding: 24px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid #e5e7eb;
  }
  
  .stat-number {
    font-size: 48px;
    font-weight: 700;
    color: #8b5cf6;
    line-height: 1;
    margin-bottom: 8px;
  }
  
  .stat-label {
    font-size: 14px;
    color: #6b7280;
    font-weight: 500;
  }
`}),`
`,e.jsx(s.h1,{id:"-components-overview",children:"🎨 Components Overview"}),`
`,e.jsx(s.h2,{id:"-accessibility-first",children:"♿ Accessibility First"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"WCAG AA 2.2 Compliant"})," - All components have been audited and enhanced for maximum accessibility:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Enhanced Contrast"}),": Form controls (Switch, Checkbox, Radio) now meet 4.5:1 contrast minimum"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Visible Focus Indicators"}),": Consistent indigo focus rings on all interactive elements"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Keyboard Navigation"}),": Full Tab/Arrow/Space/Enter support across all components"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Screen Reader Ready"}),": Proper ARIA labels, roles, and state announcements"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Color Independence"}),": Information conveyed through more than just color"]}),`
`]}),`
`,e.jsxs("div",{style:{background:"linear-gradient(135deg, #10b981 0%, #059669 100%)",color:"white",padding:"16px 20px",borderRadius:"12px",margin:"16px 0",border:"1px solid #047857"},children:[e.jsx("strong",{children:"🎯 Accessibility Test"}),e.jsx("br",{}),e.jsxs(s.p,{children:["Visit ",e.jsx("strong",{children:"Testing → Accessibility Audit"})," to verify all components meet accessibility standards."]})]}),`
`,e.jsxs("div",{class:"stats-grid",children:[e.jsxs("div",{class:"stat-card",children:[e.jsx("div",{class:"stat-number",children:"60"}),e.jsx("div",{class:"stat-label",children:"Components"})]}),e.jsxs("div",{class:"stat-card",children:[e.jsx("div",{class:"stat-number",children:"7"}),e.jsx("div",{class:"stat-label",children:"Categories"})]}),e.jsxs("div",{class:"stat-card",children:[e.jsx("div",{class:"stat-number",children:"100%"}),e.jsx("div",{class:"stat-label",children:"Accessible"})]})]}),`
`,e.jsxs("div",{class:"quick-start-section",children:[e.jsx("h2",{children:"🚀 Get Started"}),e.jsx("p",{style:{fontSize:"16px",color:"white",opacity:.9,margin:"12px 0"},children:e.jsxs(s.p,{children:["Browse components using the ",e.jsx("strong",{style:{color:"white"},children:"sidebar navigation"})," on the left. Each component has interactive examples and documentation."]})}),e.jsx("p",{style:{fontSize:"14px",color:"white",opacity:.85,margin:"16px 0 0 0"},children:e.jsxs(s.p,{children:["📚 Check out ",e.jsx("strong",{style:{color:"white"},children:"Documentation → Getting Started"})," in the sidebar for installation and usage guides."]})})]}),`
`,e.jsxs("div",{class:"category-section",children:[e.jsxs("div",{class:"category-header",children:[e.jsx("div",{class:"category-icon",children:"📝"}),e.jsxs("div",{children:[e.jsx("h2",{class:"category-title",children:"Form Controls"}),e.jsx("div",{class:"category-count",children:"14 components"})]})]}),e.jsxs("div",{class:"component-grid",children:[e.jsx(t,{path:"?path=/docs/components-button--docs",badge:"Form",badgeClass:"badge-forms",title:"Button",description:"Primary interactive element for triggering actions"}),e.jsx(t,{path:"?path=/docs/components-icon-button--docs",badge:"Form",badgeClass:"badge-forms",title:"IconButton",description:"Button with only an icon for compact actions"}),e.jsx(t,{path:"?path=/docs/components-textfield--docs",badge:"Form",badgeClass:"badge-forms",title:"TextField",description:"Single-line text input for collecting short text"}),e.jsx(t,{path:"?path=/docs/components-textfield--docs",badge:"Form",badgeClass:"badge-forms",title:"TextArea",description:"Multi-line text input for longer content"}),e.jsx(t,{path:"?path=/docs/components-select--docs",badge:"Form",badgeClass:"badge-forms",title:"Select",description:"Dropdown selection for choosing from many options"}),e.jsx(t,{path:"?path=/docs/components-checkbox-group--docs",badge:"Form",badgeClass:"badge-forms",title:"Checkbox",description:"Multi-select toggle for selecting multiple items"}),e.jsx(t,{path:"?path=/docs/components-checkbox-group--docs",badge:"Form",badgeClass:"badge-forms",title:"CheckboxGroup",description:"Grouped checkboxes for related selections"}),e.jsx(t,{path:"?path=/docs/components-checkbox-cards--docs",badge:"Form",badgeClass:"badge-forms",title:"CheckboxCards",description:"Card-style checkboxes for visually rich selections"}),e.jsx(t,{path:"?path=/docs/components-radio-cards--docs",badge:"Form",badgeClass:"badge-forms",title:"RadioGroup",description:"Radio buttons for single-select options"}),e.jsx(t,{path:"?path=/docs/components-radio-cards--docs",badge:"Form",badgeClass:"badge-forms",title:"RadioCards",description:"Card-style radio for visually rich single-select"}),e.jsx(t,{path:"?path=/docs/components-form-controls--docs",badge:"Form",badgeClass:"badge-forms",title:"Switch",description:"Binary toggle for enabling/disabling features"}),e.jsx(t,{path:"?path=/docs/components-slider--docs",badge:"Form",badgeClass:"badge-forms",title:"Slider",description:"Value selection for numeric range input"}),e.jsx(t,{path:"?path=/docs/components-search-bar--docs",badge:"Form",badgeClass:"badge-forms",title:"SearchBar",description:"Search input with icon for search functionality"})]})]}),`
`,e.jsxs("div",{class:"category-section",children:[e.jsxs("div",{class:"category-header",children:[e.jsx("div",{class:"category-icon",children:"📊"}),e.jsxs("div",{children:[e.jsx("h2",{class:"category-title",children:"Data Display"}),e.jsx("div",{class:"category-count",children:"10 components"})]})]}),e.jsxs("div",{class:"component-grid",children:[e.jsx(t,{path:"?path=/docs/components-table--docs",badge:"Data",badgeClass:"badge-data",title:"Table",description:"Structured data display for tabular data"}),e.jsx(t,{path:"?path=/docs/components-card--docs",badge:"Data",badgeClass:"badge-data",title:"Card",description:"Content container for grouping related content"}),e.jsx(t,{path:"?path=/docs/components-badge--docs",badge:"Data",badgeClass:"badge-data",title:"Badge",description:"Status indicator for showing states or counts"}),e.jsx(t,{path:"?path=/docs/components-avatar--docs",badge:"Data",badgeClass:"badge-data",title:"Avatar",description:"User representation for displaying identity"}),e.jsx(t,{path:"?path=/docs/components-data-list--docs",badge:"Data",badgeClass:"badge-data",title:"DataList",description:"Key-value pairs for displaying metadata"}),e.jsx(t,{path:"?path=/docs/components-skeleton--docs",badge:"Data",badgeClass:"badge-data",title:"Skeleton",description:"Loading placeholder while content is loading"}),e.jsx(t,{path:"?path=/docs/components-progress--docs",badge:"Data",badgeClass:"badge-data",title:"Progress",description:"Progress indicator for showing completion"}),e.jsx(t,{path:"?path=/docs/components-spinner--docs",badge:"Data",badgeClass:"badge-data",title:"Spinner",description:"Loading indicator for processing actions"}),e.jsx(t,{path:"?path=/docs/components-icon--docs",badge:"Data",badgeClass:"badge-data",title:"Icon",description:"Material Symbols for visual communication"}),e.jsx(t,{path:"?path=/docs/components-empty--docs",badge:"Data",badgeClass:"badge-data",title:"Empty",description:"Empty state when no data is available"})]})]}),`
`,e.jsxs("div",{class:"category-section",children:[e.jsxs("div",{class:"category-header",children:[e.jsx("div",{class:"category-icon",children:"🧭"}),e.jsxs("div",{children:[e.jsx("h2",{class:"category-title",children:"Navigation"}),e.jsx("div",{class:"category-count",children:"9 components"})]})]}),e.jsxs("div",{class:"component-grid",children:[e.jsx(t,{path:"?path=/docs/components-tabs--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"Tabs",description:"Content sections for organizing related content"}),e.jsx(t,{path:"?path=/docs/components-tab-nav--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"TabNav",description:"Navigation tabs for page-level navigation"}),e.jsx(t,{path:"?path=/docs/components-breadcrumb--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"Breadcrumb",description:"Hierarchy path for showing page location"}),e.jsx(t,{path:"?path=/docs/components-pagination--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"Pagination",description:"Page navigation for multi-page content"}),e.jsx(t,{path:"?path=/docs/components-dropdown-menu--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"DropdownMenu",description:"Action menu for context-specific actions"}),e.jsx(t,{path:"?path=/docs/components-context-menu--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"ContextMenu",description:"Right-click menu for secondary actions"}),e.jsx(t,{path:"?path=/docs/components-navigation-menu--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"NavigationMenu",description:"Site navigation for main navigation"}),e.jsx(t,{path:"?path=/docs/components-segmented-control--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"SegmentedControl",description:"Toggle options for switching views"}),e.jsx(t,{path:"?path=/docs/components-navbar--docs",badge:"Navigation",badgeClass:"badge-navigation",title:"Navbar",description:"Navigation bar for app header navigation"})]})]}),`
`,e.jsxs("div",{class:"category-section",children:[e.jsxs("div",{class:"category-header",children:[e.jsx("div",{class:"category-icon",children:"💬"}),e.jsxs("div",{children:[e.jsx("h2",{class:"category-title",children:"Overlays"}),e.jsx("div",{class:"category-count",children:"7 components"})]})]}),e.jsxs("div",{class:"component-grid",children:[e.jsx(t,{path:"?path=/docs/components-dialog--docs",badge:"Overlay",badgeClass:"badge-overlays",title:"Dialog",description:"Modal dialog for focused user input"}),e.jsx(t,{path:"?path=/docs/components-alertdialog--docs",badge:"Overlay",badgeClass:"badge-overlays",title:"AlertDialog",description:"Confirmation dialog for destructive actions"}),e.jsx(t,{path:"?path=/docs/components-popover--docs",badge:"Overlay",badgeClass:"badge-overlays",title:"Popover",description:"Floating panel for additional information"}),e.jsx(t,{path:"?path=/docs/components-hovercard--docs",badge:"Overlay",badgeClass:"badge-overlays",title:"HoverCard",description:"Hover preview for previewing content"}),e.jsx(t,{path:"?path=/docs/components-tooltip--docs",badge:"Overlay",badgeClass:"badge-overlays",title:"Tooltip",description:"Hover hint for explaining elements"}),e.jsx(t,{path:"?path=/docs/components-toast--docs",badge:"Overlay",badgeClass:"badge-overlays",title:"Toast",description:"Notification for feedback messages"}),e.jsx(t,{path:"?path=/docs/components-accordion--docs",badge:"Overlay",badgeClass:"badge-overlays",title:"Accordion",description:"Collapsible content for progressive disclosure"})]})]}),`
`,e.jsxs("div",{class:"category-section",children:[e.jsxs("div",{class:"category-header",children:[e.jsx("div",{class:"category-icon",children:"📐"}),e.jsxs("div",{children:[e.jsx("h2",{class:"category-title",children:"Layout"}),e.jsx("div",{class:"category-count",children:"7 components"})]})]}),e.jsxs("div",{class:"component-grid",children:[e.jsx(t,{path:"?path=/docs/components-form-controls--docs",badge:"Layout",badgeClass:"badge-layout",title:"Flex",description:"Flexbox container for flexible layouts"}),e.jsx(t,{path:"?path=/docs/components-form-controls--docs",badge:"Layout",badgeClass:"badge-layout",title:"Grid",description:"Grid container for structured layouts"}),e.jsx(t,{path:"?path=/docs/components-form-controls--docs",badge:"Layout",badgeClass:"badge-layout",title:"Box",description:"Basic container for generic spacing"}),e.jsx(t,{path:"?path=/docs/components-form-controls--docs",badge:"Layout",badgeClass:"badge-layout",title:"Container",description:"Max-width wrapper for constraining width"}),e.jsx(t,{path:"?path=/docs/components-form-controls--docs",badge:"Layout",badgeClass:"badge-layout",title:"Section",description:"Page section for major page divisions"}),e.jsx(t,{path:"?path=/docs/components-separator--docs",badge:"Layout",badgeClass:"badge-layout",title:"Separator",description:"Visual divider for separating content"}),e.jsx(t,{path:"?path=/docs/components-scroll-area--docs",badge:"Layout",badgeClass:"badge-layout",title:"ScrollArea",description:"Custom scrollbar for styled scrolling"})]})]}),`
`,e.jsxs("div",{class:"category-section",children:[e.jsxs("div",{class:"category-header",children:[e.jsx("div",{class:"category-icon",children:"✍️"}),e.jsxs("div",{children:[e.jsx("h2",{class:"category-title",children:"Typography"}),e.jsx("div",{class:"category-count",children:"9 components"})]})]}),e.jsxs("div",{class:"component-grid",children:[e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Text",description:"Body text for general content"}),e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Heading",description:"Section headers for titles and headings"}),e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Link",description:"Hyperlink for navigation and references"}),e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Code",description:"Inline code for code snippets"}),e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Blockquote",description:"Quoted text for quotations"}),e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Strong",description:"Bold text for emphasis"}),e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Em",description:"Italic text for subtle emphasis"}),e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Kbd",description:"Keyboard keys for keyboard shortcuts"}),e.jsx(t,{path:"?path=/docs/components-typography--docs",badge:"Typography",badgeClass:"badge-typography",title:"Quote",description:"Inline quote for short quotes"})]})]}),`
`,e.jsxs("div",{class:"category-section",children:[e.jsxs("div",{class:"category-header",children:[e.jsx("div",{class:"category-icon",children:"🔧"}),e.jsxs("div",{children:[e.jsx("h2",{class:"category-title",children:"Utilities"}),e.jsx("div",{class:"category-count",children:"4 components"})]})]}),e.jsxs("div",{class:"component-grid",children:[e.jsx(t,{path:"?path=/docs/components-callout--docs",badge:"Utility",badgeClass:"badge-utilities",title:"Callout",description:"Alert message for important information"}),e.jsx(t,{path:"?path=/docs/components-timeline--docs",badge:"Utility",badgeClass:"badge-utilities",title:"Timeline",description:"Event history for chronological events"}),e.jsx(t,{path:"?path=/docs/components-stepper--docs",badge:"Utility",badgeClass:"badge-utilities",title:"Stepper",description:"Multi-step process for guided workflows"}),e.jsx(t,{path:"?path=/docs/components-uploader--docs",badge:"Utility",badgeClass:"badge-utilities",title:"Uploader",description:"File upload for uploading files"})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-quick-reference-guide",children:"📚 Quick Reference Guide"}),`
`,e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px",margin:"32px 0"},children:[e.jsxs("div",{style:{padding:"20px",background:"#f9fafb",borderRadius:"12px",border:"1px solid #e5e7eb"},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"16px"},children:"✨ Component Variants"}),e.jsxs("ul",{style:{margin:"8px 0",paddingLeft:"20px",fontSize:"14px",lineHeight:"1.8"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"solid"})," - Primary actions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"soft"})," - Secondary actions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"outline"})," - Tertiary actions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ghost"})," - Minimal actions"]})]})]}),e.jsxs("div",{style:{padding:"20px",background:"#f9fafb",borderRadius:"12px",border:"1px solid #e5e7eb"},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"16px"},children:"🎨 Color Meanings"}),e.jsxs("ul",{style:{margin:"8px 0",paddingLeft:"20px",fontSize:"14px",lineHeight:"1.8"},children:[e.jsxs("li",{children:[e.jsx("strong",{style:{color:"#3e63dd"},children:"Indigo"})," - Primary actions"]}),e.jsxs("li",{children:[e.jsx("strong",{style:{color:"#10b981"},children:"Green"})," - Success"]}),e.jsxs("li",{children:[e.jsx("strong",{style:{color:"#f59e0b"},children:"Orange"})," - Warning"]}),e.jsxs("li",{children:[e.jsx("strong",{style:{color:"#ef4444"},children:"Red"})," - Error/Destructive"]})]})]}),e.jsxs("div",{style:{padding:"20px",background:"#f9fafb",borderRadius:"12px",border:"1px solid #e5e7eb"},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"16px"},children:"📏 Component Sizes"}),e.jsxs("ul",{style:{margin:"8px 0",paddingLeft:"20px",fontSize:"14px",lineHeight:"1.8"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Size 1"})," - Small (24px)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Size 2"})," - Medium (32px)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Size 3"})," - Large (40px)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Size 4"})," - XLarge (48px)"]})]})]}),e.jsxs("div",{style:{padding:"20px",background:"#f9fafb",borderRadius:"12px",border:"1px solid #e5e7eb"},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"16px"},children:"🎯 When to Use"}),e.jsxs("ul",{style:{margin:"8px 0",paddingLeft:"20px",fontSize:"14px",lineHeight:"1.8"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dialog"})," - Forms & tasks"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Popover"})," - Extra info"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tooltip"})," - Short hints"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Toast"})," - Feedback"]})]})]})]})]})}function w(o={}){const{wrapper:s}={...i(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(a,{...o})}):a(o)}export{w as default};
