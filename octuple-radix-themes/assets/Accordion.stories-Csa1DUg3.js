import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x,R as m}from"./index-BlmOqGMO.js";import{c as qe}from"./index-Dkb_ZYRU.js";import{c as ct}from"./index-DZ3_ZFrS.js";import{u as We}from"./index-CSHYywJy.js";import{c as Ue}from"./index-DW48STyt.js";import{u as X}from"./index-Dz6nX4BC.js";import{P}from"./index-CiEb6DFw.js";import{u as lt}from"./index-5uDXI3f6.js";import{P as dt}from"./index-CH1-paxq.js";import{u as Ye}from"./index-CW4F2FBO.js";import{u as pt}from"./index-CWo8_AO2.js";import{I as b}from"./Icon-D_u5oAGh.js";import{e as ut}from"./badge-BMm2Ttez.js";import{p as A}from"./flex-DvmXTkye.js";import{p as n}from"./text-C4SbqUme.js";import{o as y}from"./icon-button-C6Cl8Lr1.js";import{o as mt}from"./button-DOEX7M_0.js";import"./index-yBjzXJbu.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./base-button-1bStz9fB.js";import"./index-UwpWBZco.js";import"./map-prop-values-CWqpaS2P.js";var U="Collapsible",[gt,He]=qe(U),[ht,Z]=gt(U),Le=x.forwardRef((t,r)=>{const{__scopeCollapsible:i,open:o,defaultOpen:a,disabled:s,onOpenChange:c,...d}=t,[u,h]=X({prop:o,defaultProp:a??!1,onChange:c,caller:U});return e.jsx(ht,{scope:i,disabled:s,contentId:Ye(),open:u,onOpenToggle:x.useCallback(()=>h(f=>!f),[h]),children:e.jsx(P.div,{"data-state":ee(u),"data-disabled":s?"":void 0,...d,ref:r})})});Le.displayName=U;var $e="CollapsibleTrigger",Ge=x.forwardRef((t,r)=>{const{__scopeCollapsible:i,...o}=t,a=Z($e,i);return e.jsx(P.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":ee(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...o,ref:r,onClick:Ue(t.onClick,a.onOpenToggle)})});Ge.displayName=$e;var J="CollapsibleContent",Ke=x.forwardRef((t,r)=>{const{forceMount:i,...o}=t,a=Z(J,t.__scopeCollapsible);return e.jsx(dt,{present:i||a.open,children:({present:s})=>e.jsx(xt,{...o,ref:r,present:s})})});Ke.displayName=J;var xt=x.forwardRef((t,r)=>{const{__scopeCollapsible:i,present:o,children:a,...s}=t,c=Z(J,i),[d,u]=x.useState(o),h=x.useRef(null),f=We(r,h),v=x.useRef(0),R=v.current,j=x.useRef(0),S=j.current,T=c.open||d,C=x.useRef(T),z=x.useRef(void 0);return x.useEffect(()=>{const p=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(p)},[]),lt(()=>{const p=h.current;if(p){z.current=z.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const k=p.getBoundingClientRect();v.current=k.height,j.current=k.width,C.current||(p.style.transitionDuration=z.current.transitionDuration,p.style.animationName=z.current.animationName),u(o)}},[c.open,o]),e.jsx(P.div,{"data-state":ee(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!T,...s,ref:f,style:{"--radix-collapsible-content-height":R?`${R}px`:void 0,"--radix-collapsible-content-width":S?`${S}px`:void 0,...t.style},children:T&&a})});function ee(t){return t?"open":"closed"}var ft=Le,vt=Ge,bt=Ke,I="Accordion",At=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[te,It,yt]=ct(I),[Y]=qe(I,[yt,He]),ie=He(),Qe=m.forwardRef((t,r)=>{const{type:i,...o}=t,a=o,s=o;return e.jsx(te.Provider,{scope:t.__scopeAccordion,children:i==="multiple"?e.jsx(zt,{...s,ref:r}):e.jsx(Ct,{...a,ref:r})})});Qe.displayName=I;var[Xe,jt]=Y(I),[Ze,Tt]=Y(I,{collapsible:!1}),Ct=m.forwardRef((t,r)=>{const{value:i,defaultValue:o,onValueChange:a=()=>{},collapsible:s=!1,...c}=t,[d,u]=X({prop:i,defaultProp:o??"",onChange:a,caller:I});return e.jsx(Xe,{scope:t.__scopeAccordion,value:m.useMemo(()=>d?[d]:[],[d]),onItemOpen:u,onItemClose:m.useCallback(()=>s&&u(""),[s,u]),children:e.jsx(Ze,{scope:t.__scopeAccordion,collapsible:s,children:e.jsx(Je,{...c,ref:r})})})}),zt=m.forwardRef((t,r)=>{const{value:i,defaultValue:o,onValueChange:a=()=>{},...s}=t,[c,d]=X({prop:i,defaultProp:o??[],onChange:a,caller:I}),u=m.useCallback(f=>d((v=[])=>[...v,f]),[d]),h=m.useCallback(f=>d((v=[])=>v.filter(R=>R!==f)),[d]);return e.jsx(Xe,{scope:t.__scopeAccordion,value:c,onItemOpen:u,onItemClose:h,children:e.jsx(Ze,{scope:t.__scopeAccordion,collapsible:!0,children:e.jsx(Je,{...s,ref:r})})})}),[Rt,H]=Y(I),Je=m.forwardRef((t,r)=>{const{__scopeAccordion:i,disabled:o,dir:a,orientation:s="vertical",...c}=t,d=m.useRef(null),u=We(d,r),h=It(i),v=pt(a)==="ltr",R=Ue(t.onKeyDown,j=>{var se;if(!At.includes(j.key))return;const S=j.target,T=h().filter(K=>{var ae;return!((ae=K.ref.current)!=null&&ae.disabled)}),C=T.findIndex(K=>K.ref.current===S),z=T.length;if(C===-1)return;j.preventDefault();let p=C;const k=0,L=z-1,$=()=>{p=C+1,p>L&&(p=k)},G=()=>{p=C-1,p<k&&(p=L)};switch(j.key){case"Home":p=k;break;case"End":p=L;break;case"ArrowRight":s==="horizontal"&&(v?$():G());break;case"ArrowDown":s==="vertical"&&$();break;case"ArrowLeft":s==="horizontal"&&(v?G():$());break;case"ArrowUp":s==="vertical"&&G();break}const rt=p%z;(se=T[rt].ref.current)==null||se.focus()});return e.jsx(Rt,{scope:i,disabled:o,direction:a,orientation:s,children:e.jsx(te.Slot,{scope:i,children:e.jsx(P.div,{...c,"data-orientation":s,ref:u,onKeyDown:o?void 0:R})})})}),W="AccordionItem",[kt,ne]=Y(W),et=m.forwardRef((t,r)=>{const{__scopeAccordion:i,value:o,...a}=t,s=H(W,i),c=jt(W,i),d=ie(i),u=Ye(),h=o&&c.value.includes(o)||!1,f=s.disabled||t.disabled;return e.jsx(kt,{scope:i,open:h,disabled:f,triggerId:u,children:e.jsx(ft,{"data-orientation":s.orientation,"data-state":at(h),...d,...a,ref:r,disabled:f,open:h,onOpenChange:v=>{v?c.onItemOpen(o):c.onItemClose(o)}})})});et.displayName=W;var tt="AccordionHeader",it=m.forwardRef((t,r)=>{const{__scopeAccordion:i,...o}=t,a=H(I,i),s=ne(tt,i);return e.jsx(P.h3,{"data-orientation":a.orientation,"data-state":at(s.open),"data-disabled":s.disabled?"":void 0,...o,ref:r})});it.displayName=tt;var Q="AccordionTrigger",nt=m.forwardRef((t,r)=>{const{__scopeAccordion:i,...o}=t,a=H(I,i),s=ne(Q,i),c=Tt(Q,i),d=ie(i);return e.jsx(te.ItemSlot,{scope:i,children:e.jsx(vt,{"aria-disabled":s.open&&!c.collapsible||void 0,"data-orientation":a.orientation,id:s.triggerId,...d,...o,ref:r})})});nt.displayName=Q;var ot="AccordionContent",st=m.forwardRef((t,r)=>{const{__scopeAccordion:i,...o}=t,a=H(I,i),s=ne(ot,i),c=ie(i);return e.jsx(bt,{role:"region","aria-labelledby":s.triggerId,"data-orientation":a.orientation,...c,...o,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});st.displayName=ot;function at(t){return t?"open":"closed"}var re=Qe,Pt=et,St=it,wt=nt,_t=st;const l=m.forwardRef(({value:t,title:r,description:i,badge:o,actions:a,children:s,disabled:c},d)=>e.jsxs(Pt,{ref:d,className:"accordion-item",value:t,disabled:c,children:[e.jsx(St,{className:"accordion-header",children:e.jsx(wt,{className:"accordion-trigger",children:e.jsxs("div",{className:"accordion-trigger-content",children:[e.jsxs("div",{className:"accordion-title-section",children:[e.jsxs("div",{className:"accordion-title-row",children:[e.jsx("span",{className:"accordion-title",children:r}),o&&e.jsx(ut,{variant:"soft",color:"indigo","aria-label":typeof o=="number"?`Count: ${o}`:`Status: ${o}`,children:o})]}),i&&e.jsx("span",{className:"accordion-description",children:i})]}),e.jsxs("div",{className:"accordion-controls",children:[a&&e.jsx("div",{className:"accordion-actions",onClick:u=>u.stopPropagation(),children:a}),e.jsx(b,{name:"expand_more",size:20,className:"accordion-chevron"})]})]})})}),e.jsx(_t,{className:"accordion-content",children:e.jsx("div",{className:"accordion-content-inner",children:s})})]}));l.displayName="AccordionItem";const g=m.forwardRef(({items:t,type:r="single",defaultValue:i,collapsible:o=!1,children:a},s)=>{const c=re,d=r==="single"?{type:"single",collapsible:o,defaultValue:i}:{type:"multiple",defaultValue:i};return e.jsx(c,{ref:s,className:"accordion-root",...d,children:t?t.map(u=>e.jsx(l,{...u},u.value)):a})});g.displayName="Accordion";try{l.displayName="AccordionItem",l.__docgenInfo={description:"",displayName:"AccordionItem",props:{value:{defaultValue:null,description:"Unique value for the accordion item",name:"value",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Header/trigger content",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Optional description text shown below the title",name:"description",required:!1,type:{name:"string | undefined"}},badge:{defaultValue:null,description:"Optional badge/count to display (number or string)",name:"badge",required:!1,type:{name:"string | number | undefined"}},actions:{defaultValue:null,description:"Optional action buttons (settings, delete, etc.)",name:"actions",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Body content",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{g.displayName="Accordion",g.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"Accordion items",name:"items",required:!1,type:{name:"AccordionItemProps[] | undefined"}},type:{defaultValue:{value:"single"},description:"Type of accordion",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"single"'},{value:'"multiple"'}]}},defaultValue:{defaultValue:null,description:"Default open value(s)",name:"defaultValue",required:!1,type:{name:"string | string[] | undefined"}},collapsible:{defaultValue:{value:"false"},description:"Whether the accordion is collapsible (for single type)",name:"collapsible",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"Children (for manual item composition)",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const ri={title:"Components/Accordion",component:g,parameters:{layout:"padded"},tags:["autodocs"]},oe=[{value:"item-1",title:"What is Octuple Radix?",children:"Octuple Radix is a modern design system built on Radix Themes, configured specifically for Eightfold AI with indigo accent color, Poppins font, and Material Symbols icons."},{value:"item-2",title:"How do I get started?",children:"Install the package with npm install @eightfold.ai/octuple-radix, wrap your app with ThemeProvider, and start using the components."},{value:"item-3",title:"What components are available?",children:"Octuple Radix includes all Radix Themes components plus additional custom components like Toast, Accordion, and more. Check the documentation for the full list."}],w={render:()=>e.jsx(g,{items:oe,collapsible:!0})},_={render:()=>e.jsx(g,{type:"single",defaultValue:"item-2",collapsible:!0,items:oe})},N={render:()=>e.jsx(g,{type:"multiple",defaultValue:["item-1","item-3"],items:oe})},D={render:()=>e.jsxs(g,{collapsible:!0,children:[e.jsx(l,{value:"features",title:"Key Features",children:e.jsxs(A,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",children:"• Built on Radix Themes for consistency"}),e.jsx(n,{size:"2",children:"• Indigo accent color throughout"}),e.jsx(n,{size:"2",children:"• Poppins font family"}),e.jsx(n,{size:"2",children:"• Material Symbols Outlined icons"}),e.jsx(n,{size:"2",children:"• Fully accessible components"})]})}),e.jsx(l,{value:"installation",title:"Installation",children:e.jsxs(A,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",weight:"bold",children:"Step 1: Install the package"}),e.jsx(n,{size:"2",style:{fontFamily:"monospace",background:"var(--gray-3)",padding:"8px",borderRadius:"4px"},children:"npm install @eightfold.ai/octuple-radix"}),e.jsx(n,{size:"2",weight:"bold",style:{marginTop:"8px"},children:"Step 2: Import styles"}),e.jsx(n,{size:"2",style:{fontFamily:"monospace",background:"var(--gray-3)",padding:"8px",borderRadius:"4px"},children:"import '@eightfold.ai/octuple-radix/styles.css'"})]})}),e.jsx(l,{value:"usage",title:"Basic Usage",children:e.jsx(n,{size:"2",children:"Wrap your application with ThemeProvider and start using components. All Radix Themes components are available, plus custom components like this Accordion."})})]})},E={render:()=>e.jsx(g,{type:"single",collapsible:!0,items:[{value:"q1",title:"Is Octuple Radix free to use?",children:"Yes, Octuple Radix is open source and free to use in your projects."},{value:"q2",title:"Can I customize the theme?",children:"Absolutely! You can customize accent colors, font families, border radius, and more through the ThemeProvider props."},{value:"q3",title:"Does it support dark mode?",children:"Yes, Radix Themes includes built-in dark mode support. You can toggle it using the appearance prop on ThemeProvider."},{value:"q4",title:"Is it accessible?",children:"Yes! Octuple Radix is built on Radix Primitives which follow WAI-ARIA guidelines and best practices for accessibility."},{value:"q5",title:"Can I use it with TypeScript?",children:"Yes, Octuple Radix is written in TypeScript and includes full type definitions out of the box."}]})},O={render:()=>e.jsxs(g,{collapsible:!0,children:[e.jsx(l,{value:"enabled-1",title:"Active Section 1",children:e.jsx(n,{size:"2",children:"This section is enabled and can be toggled."})}),e.jsx(l,{value:"disabled",title:"Disabled Section",disabled:!0,children:e.jsx(n,{size:"2",children:"This content cannot be accessed."})}),e.jsx(l,{value:"enabled-2",title:"Active Section 2",children:e.jsx(n,{size:"2",children:"This section is also enabled."})})]})},F={render:()=>e.jsxs(g,{collapsible:!0,children:[e.jsx(l,{value:"inbox",title:"Inbox",badge:12,children:e.jsx(n,{size:"2",children:"You have 12 unread messages in your inbox."})}),e.jsx(l,{value:"tasks",title:"Tasks",badge:"3",children:e.jsx(n,{size:"2",children:"You have 3 pending tasks to complete."})}),e.jsx(l,{value:"completed",title:"Completed",badge:0,children:e.jsx(n,{size:"2",children:"No completed items yet."})})]})},M={render:()=>e.jsxs(g,{collapsible:!0,children:[e.jsx(l,{value:"api-settings",title:"API Configuration",description:"Configure API endpoints and authentication settings",children:e.jsxs(A,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",weight:"bold",children:"Base URL"}),e.jsx(n,{size:"2",children:"https://api.example.com/v1"}),e.jsx(n,{size:"2",weight:"bold",children:"Authentication"}),e.jsx(n,{size:"2",children:"API Key authentication is enabled"})]})}),e.jsx(l,{value:"notifications",title:"Notification Preferences",description:"Manage how and when you receive notifications",children:e.jsxs(A,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",children:"• Email notifications: Enabled"}),e.jsx(n,{size:"2",children:"• Push notifications: Disabled"}),e.jsx(n,{size:"2",children:"• Weekly digest: Enabled"})]})})]})},B={render:()=>{const t=i=>{i.preventDefault(),console.log("Settings clicked")},r=i=>{i.preventDefault(),console.log("Delete clicked")};return e.jsxs(g,{collapsible:!0,children:[e.jsx(l,{value:"project-1",title:"Website Redesign",actions:e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"soft",onClick:t,"aria-label":"Settings",children:e.jsx(b,{name:"settings",size:16})}),e.jsx(y,{variant:"soft",color:"red",onClick:r,"aria-label":"Delete",children:e.jsx(b,{name:"delete",size:16})})]}),children:e.jsx(n,{size:"2",children:"Complete redesign of the company website with modern UI/UX principles."})}),e.jsx(l,{value:"project-2",title:"Mobile App Development",actions:e.jsx(y,{variant:"soft",onClick:t,"aria-label":"More options",children:e.jsx(b,{name:"more_vert",size:16})}),children:e.jsx(n,{size:"2",children:"Develop native mobile applications for iOS and Android platforms."})})]})}},V={render:()=>{const t=()=>console.log("Edit clicked"),r=()=>console.log("Share clicked"),i=()=>console.log("Archive clicked");return e.jsxs(g,{type:"multiple",defaultValue:["agent-1"],children:[e.jsx(l,{value:"agent-1",title:"Customer Support Agent",description:"AI agent specialized in handling customer inquiries and support tickets",badge:24,actions:e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"soft",onClick:t,"aria-label":"Edit agent",children:e.jsx(b,{name:"edit",size:16})}),e.jsx(y,{variant:"soft",onClick:r,"aria-label":"Share agent",children:e.jsx(b,{name:"share",size:16})})]}),children:e.jsxs(A,{direction:"column",gap:"3",children:[e.jsx(n,{size:"2",weight:"bold",children:"Agent Status: Active"}),e.jsx(n,{size:"2",children:"This agent has processed 24 support tickets today with an average response time of 2.3 seconds."}),e.jsx(A,{gap:"2",children:e.jsx(n,{size:"2",children:"• Language Models: GPT-4, Claude 3"})}),e.jsx(A,{gap:"2",children:e.jsx(n,{size:"2",children:"• Integrations: Zendesk, Slack, Email"})})]})}),e.jsx(l,{value:"agent-2",title:"Data Analysis Agent",description:"Processes and analyzes large datasets to generate insights",badge:"Running",actions:e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"soft",onClick:t,"aria-label":"Configure agent",children:e.jsx(b,{name:"tune",size:16})}),e.jsx(y,{variant:"soft",color:"orange",onClick:i,"aria-label":"Pause agent",children:e.jsx(b,{name:"pause",size:16})})]}),children:e.jsxs(A,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",children:"Currently analyzing Q3 sales data across 15 regions."}),e.jsx(n,{size:"2",children:"• Progress: 78% complete"}),e.jsx(n,{size:"2",children:"• ETA: 12 minutes remaining"}),e.jsx(n,{size:"2",children:"• Output: Executive summary report"})]})}),e.jsx(l,{value:"agent-3",title:"Content Generation Agent",description:"Creates marketing content, blog posts, and social media updates",badge:0,actions:e.jsx(y,{variant:"soft",disabled:!0,"aria-label":"More options",children:e.jsx(b,{name:"more_horiz",size:16})}),children:e.jsx(n,{size:"2",color:"gray",children:"This agent is currently idle. Configure it to start generating content."})})]})}},q={render:()=>e.jsxs(g,{type:"single",collapsible:!0,children:[e.jsx(l,{value:"active-agents",title:"Active AI Agents",description:"Currently running agents and their real-time status",badge:7,actions:e.jsx(y,{variant:"soft","aria-label":"Refresh agents",children:e.jsx(b,{name:"refresh",size:16})}),children:e.jsxs(A,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",children:"• Document Processing Agent (3 active instances)"}),e.jsx(n,{size:"2",children:"• Email Classification Agent (2 active instances)"}),e.jsx(n,{size:"2",children:"• Sentiment Analysis Agent (1 active instance)"}),e.jsx(n,{size:"2",children:"• Translation Agent (1 active instance)"})]})}),e.jsx(l,{value:"pending-tasks",title:"Task Queue",description:"Pending tasks waiting for agent assignment",badge:156,children:e.jsxs(A,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",children:"• High Priority: 12 tasks"}),e.jsx(n,{size:"2",children:"• Medium Priority: 89 tasks"}),e.jsx(n,{size:"2",children:"• Low Priority: 55 tasks"}),e.jsx(mt,{size:"1",style:{alignSelf:"flex-start",marginTop:"8px"},children:"Process Queue"})]})}),e.jsx(l,{value:"system-health",title:"System Health",description:"Overall system performance and resource utilization",badge:"Good",actions:e.jsx(y,{variant:"soft","aria-label":"View monitoring dashboard",children:e.jsx(b,{name:"monitoring",size:16})}),children:e.jsxs(A,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",children:"• CPU Usage: 68%"}),e.jsx(n,{size:"2",children:"• Memory Usage: 45%"}),e.jsx(n,{size:"2",children:"• Active Connections: 234"}),e.jsx(n,{size:"2",children:"• Response Time: 156ms avg"})]})})]})};var ce,le,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Accordion items={sampleItems} collapsible />
}`,...(de=(le=w.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ue,me;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <Accordion type="single" defaultValue="item-2" collapsible items={sampleItems} />
}`,...(me=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,he,xe;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" defaultValue={['item-1', 'item-3']} items={sampleItems} />
}`,...(xe=(he=N.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,ve,be;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <Accordion collapsible>
      <AccordionItem value="features" title="Key Features">
        <Flex direction="column" gap="2">
          <Text size="2">• Built on Radix Themes for consistency</Text>
          <Text size="2">• Indigo accent color throughout</Text>
          <Text size="2">• Poppins font family</Text>
          <Text size="2">• Material Symbols Outlined icons</Text>
          <Text size="2">• Fully accessible components</Text>
        </Flex>
      </AccordionItem>
      <AccordionItem value="installation" title="Installation">
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Step 1: Install the package</Text>
          <Text size="2" style={{
          fontFamily: 'monospace',
          background: 'var(--gray-3)',
          padding: '8px',
          borderRadius: '4px'
        }}>
            npm install @eightfold.ai/octuple-radix
          </Text>
          <Text size="2" weight="bold" style={{
          marginTop: '8px'
        }}>Step 2: Import styles</Text>
          <Text size="2" style={{
          fontFamily: 'monospace',
          background: 'var(--gray-3)',
          padding: '8px',
          borderRadius: '4px'
        }}>
            import '@eightfold.ai/octuple-radix/styles.css'
          </Text>
        </Flex>
      </AccordionItem>
      <AccordionItem value="usage" title="Basic Usage">
        <Text size="2">
          Wrap your application with ThemeProvider and start using components. 
          All Radix Themes components are available, plus custom components like this Accordion.
        </Text>
      </AccordionItem>
    </Accordion>
}`,...(be=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Ae,Ie,ye;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible items={[{
    value: 'q1',
    title: 'Is Octuple Radix free to use?',
    children: 'Yes, Octuple Radix is open source and free to use in your projects.'
  }, {
    value: 'q2',
    title: 'Can I customize the theme?',
    children: 'Absolutely! You can customize accent colors, font families, border radius, and more through the ThemeProvider props.'
  }, {
    value: 'q3',
    title: 'Does it support dark mode?',
    children: 'Yes, Radix Themes includes built-in dark mode support. You can toggle it using the appearance prop on ThemeProvider.'
  }, {
    value: 'q4',
    title: 'Is it accessible?',
    children: 'Yes! Octuple Radix is built on Radix Primitives which follow WAI-ARIA guidelines and best practices for accessibility.'
  }, {
    value: 'q5',
    title: 'Can I use it with TypeScript?',
    children: 'Yes, Octuple Radix is written in TypeScript and includes full type definitions out of the box.'
  }]} />
}`,...(ye=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var je,Te,Ce;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <Accordion collapsible>
      <AccordionItem value="enabled-1" title="Active Section 1">
        <Text size="2">This section is enabled and can be toggled.</Text>
      </AccordionItem>
      <AccordionItem value="disabled" title="Disabled Section" disabled>
        <Text size="2">This content cannot be accessed.</Text>
      </AccordionItem>
      <AccordionItem value="enabled-2" title="Active Section 2">
        <Text size="2">This section is also enabled.</Text>
      </AccordionItem>
    </Accordion>
}`,...(Ce=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var ze,Re,ke;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <Accordion collapsible>
      <AccordionItem value="inbox" title="Inbox" badge={12}>
        <Text size="2">You have 12 unread messages in your inbox.</Text>
      </AccordionItem>
      <AccordionItem value="tasks" title="Tasks" badge="3">
        <Text size="2">You have 3 pending tasks to complete.</Text>
      </AccordionItem>
      <AccordionItem value="completed" title="Completed" badge={0}>
        <Text size="2">No completed items yet.</Text>
      </AccordionItem>
    </Accordion>
}`,...(ke=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var Pe,Se,we;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <Accordion collapsible>
      <AccordionItem value="api-settings" title="API Configuration" description="Configure API endpoints and authentication settings">
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Base URL</Text>
          <Text size="2">https://api.example.com/v1</Text>
          <Text size="2" weight="bold">Authentication</Text>
          <Text size="2">API Key authentication is enabled</Text>
        </Flex>
      </AccordionItem>
      <AccordionItem value="notifications" title="Notification Preferences" description="Manage how and when you receive notifications">
        <Flex direction="column" gap="2">
          <Text size="2">• Email notifications: Enabled</Text>
          <Text size="2">• Push notifications: Disabled</Text>
          <Text size="2">• Weekly digest: Enabled</Text>
        </Flex>
      </AccordionItem>
    </Accordion>
}`,...(we=(Se=M.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var _e,Ne,De;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const handleSettings = (e: React.MouseEvent) => {
      e.preventDefault();
      console.log('Settings clicked');
    };
    const handleDelete = (e: React.MouseEvent) => {
      e.preventDefault();
      console.log('Delete clicked');
    };
    return <Accordion collapsible>
        <AccordionItem value="project-1" title="Website Redesign" actions={<>
              <IconButton variant="soft" onClick={handleSettings} aria-label="Settings">
                <Icon name="settings" size={16} />
              </IconButton>
              <IconButton variant="soft" color="red" onClick={handleDelete} aria-label="Delete">
                <Icon name="delete" size={16} />
              </IconButton>
            </>}>
          <Text size="2">Complete redesign of the company website with modern UI/UX principles.</Text>
        </AccordionItem>
        <AccordionItem value="project-2" title="Mobile App Development" actions={<IconButton variant="soft" onClick={handleSettings} aria-label="More options">
              <Icon name="more_vert" size={16} />
            </IconButton>}>
          <Text size="2">Develop native mobile applications for iOS and Android platforms.</Text>
        </AccordionItem>
      </Accordion>;
  }
}`,...(De=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Ee,Oe,Fe;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const handleEdit = () => console.log('Edit clicked');
    const handleShare = () => console.log('Share clicked');
    const handleArchive = () => console.log('Archive clicked');
    return <Accordion type="multiple" defaultValue={['agent-1']}>
        <AccordionItem value="agent-1" title="Customer Support Agent" description="AI agent specialized in handling customer inquiries and support tickets" badge={24} actions={<>
              <IconButton variant="soft" onClick={handleEdit} aria-label="Edit agent">
                <Icon name="edit" size={16} />
              </IconButton>
              <IconButton variant="soft" onClick={handleShare} aria-label="Share agent">
                <Icon name="share" size={16} />
              </IconButton>
            </>}>
          <Flex direction="column" gap="3">
            <Text size="2" weight="bold">Agent Status: Active</Text>
            <Text size="2">This agent has processed 24 support tickets today with an average response time of 2.3 seconds.</Text>
            <Flex gap="2">
              <Text size="2">• Language Models: GPT-4, Claude 3</Text>
            </Flex>
            <Flex gap="2">
              <Text size="2">• Integrations: Zendesk, Slack, Email</Text>
            </Flex>
          </Flex>
        </AccordionItem>
        
        <AccordionItem value="agent-2" title="Data Analysis Agent" description="Processes and analyzes large datasets to generate insights" badge="Running" actions={<>
              <IconButton variant="soft" onClick={handleEdit} aria-label="Configure agent">
                <Icon name="tune" size={16} />
              </IconButton>
              <IconButton variant="soft" color="orange" onClick={handleArchive} aria-label="Pause agent">
                <Icon name="pause" size={16} />
              </IconButton>
            </>}>
          <Flex direction="column" gap="2">
            <Text size="2">Currently analyzing Q3 sales data across 15 regions.</Text>
            <Text size="2">• Progress: 78% complete</Text>
            <Text size="2">• ETA: 12 minutes remaining</Text>
            <Text size="2">• Output: Executive summary report</Text>
          </Flex>
        </AccordionItem>

        <AccordionItem value="agent-3" title="Content Generation Agent" description="Creates marketing content, blog posts, and social media updates" badge={0} actions={<IconButton variant="soft" disabled aria-label="More options">
              <Icon name="more_horiz" size={16} />
            </IconButton>}>
          <Text size="2" color="gray">This agent is currently idle. Configure it to start generating content.</Text>
        </AccordionItem>
      </Accordion>;
  }
}`,...(Fe=(Oe=V.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};var Me,Be,Ve;q.parameters={...q.parameters,docs:{...(Me=q.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <AccordionItem value="active-agents" title="Active AI Agents" description="Currently running agents and their real-time status" badge={7} actions={<IconButton variant="soft" aria-label="Refresh agents">
            <Icon name="refresh" size={16} />
          </IconButton>}>
        <Flex direction="column" gap="2">
          <Text size="2">• Document Processing Agent (3 active instances)</Text>
          <Text size="2">• Email Classification Agent (2 active instances)</Text>
          <Text size="2">• Sentiment Analysis Agent (1 active instance)</Text>
          <Text size="2">• Translation Agent (1 active instance)</Text>
        </Flex>
      </AccordionItem>
      
      <AccordionItem value="pending-tasks" title="Task Queue" description="Pending tasks waiting for agent assignment" badge={156}>
        <Flex direction="column" gap="2">
          <Text size="2">• High Priority: 12 tasks</Text>
          <Text size="2">• Medium Priority: 89 tasks</Text>
          <Text size="2">• Low Priority: 55 tasks</Text>
          <Button size="1" style={{
          alignSelf: 'flex-start',
          marginTop: '8px'
        }}>
            Process Queue
          </Button>
        </Flex>
      </AccordionItem>
      
      <AccordionItem value="system-health" title="System Health" description="Overall system performance and resource utilization" badge="Good" actions={<IconButton variant="soft" aria-label="View monitoring dashboard">
            <Icon name="monitoring" size={16} />
          </IconButton>}>
        <Flex direction="column" gap="2">
          <Text size="2">• CPU Usage: 68%</Text>
          <Text size="2">• Memory Usage: 45%</Text>
          <Text size="2">• Active Connections: 234</Text>
          <Text size="2">• Response Time: 156ms avg</Text>
        </Flex>
      </AccordionItem>
    </Accordion>
}`,...(Ve=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};const ci=["Default","SingleOpen","MultipleOpen","RichContent","FAQ","WithDisabledItem","WithBadges","WithDescriptions","WithActions","AllFeaturesCombined","AIAgentDashboard"];export{q as AIAgentDashboard,V as AllFeaturesCombined,w as Default,E as FAQ,N as MultipleOpen,D as RichContent,_ as SingleOpen,B as WithActions,F as WithBadges,M as WithDescriptions,O as WithDisabledItem,ci as __namedExportsOrder,ri as default};
