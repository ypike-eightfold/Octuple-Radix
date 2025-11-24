import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{p as o,l as t}from"./segmented-control-DZheFDEn.js";import{p as g}from"./flex-DvmXTkye.js";import{p as c}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./internal-BdPtub1_.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./radius.prop-CIarg28h.js";import"./index-Dz6nX4BC.js";import"./index-5uDXI3f6.js";import"./index-BEDZMEqW.js";import"./index-Dkb_ZYRU.js";import"./index-b_KpNbIe.js";import"./index-DW48STyt.js";import"./index-DZ3_ZFrS.js";import"./index-CW4F2FBO.js";import"./index-DZCApzUK.js";import"./index-CWo8_AO2.js";import"./index-ChP4uSaL.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const ge={title:"Components/Segmented Control",component:o,parameters:{layout:"padded"},tags:["autodocs"]},n={render:()=>e.jsxs(o,{defaultValue:"inbox",children:[e.jsx(t,{value:"inbox",children:"Inbox"}),e.jsx(t,{value:"drafts",children:"Drafts"}),e.jsx(t,{value:"sent",children:"Sent"})]})},l={render:()=>e.jsxs(o,{defaultValue:"grid",children:[e.jsx(t,{value:"list",children:"List"}),e.jsx(t,{value:"grid",children:"Grid"}),e.jsx(t,{value:"compact",children:"Compact"})]})},r={render:()=>e.jsxs(g,{direction:"column",gap:"4",children:[e.jsxs(o,{defaultValue:"1",size:"1",children:[e.jsx(t,{value:"1",children:"Small 1"}),e.jsx(t,{value:"2",children:"Small 2"}),e.jsx(t,{value:"3",children:"Small 3"})]}),e.jsxs(o,{defaultValue:"1",size:"2",children:[e.jsx(t,{value:"1",children:"Medium 1"}),e.jsx(t,{value:"2",children:"Medium 2"}),e.jsx(t,{value:"3",children:"Medium 3"})]}),e.jsxs(o,{defaultValue:"1",size:"3",children:[e.jsx(t,{value:"1",children:"Large 1"}),e.jsx(t,{value:"2",children:"Large 2"}),e.jsx(t,{value:"3",children:"Large 3"})]})]})},m={render:()=>e.jsxs(o,{defaultValue:"monthly",children:[e.jsx(t,{value:"monthly",children:"Monthly"}),e.jsx(t,{value:"yearly",children:"Yearly"})]})},d={render:()=>e.jsxs(o,{defaultValue:"all",children:[e.jsx(t,{value:"all",children:"All"}),e.jsx(t,{value:"active",children:"Active"}),e.jsx(t,{value:"inactive",children:"Inactive"}),e.jsx(t,{value:"archived",children:"Archived"})]})},a={render:()=>e.jsxs(o,{defaultValue:"7d",children:[e.jsx(t,{value:"24h",children:"24h"}),e.jsx(t,{value:"7d",children:"7d"}),e.jsx(t,{value:"30d",children:"30d"}),e.jsx(t,{value:"90d",children:"90d"}),e.jsx(t,{value:"1y",children:"1y"})]})},i={render:()=>e.jsxs(o,{defaultValue:"left",children:[e.jsx(t,{value:"left",children:"Left"}),e.jsx(t,{value:"center",children:"Center"}),e.jsx(t,{value:"right",children:"Right"}),e.jsx(t,{value:"justify",children:"Justify"})]})},s={render:()=>e.jsxs(o,{defaultValue:"medium",children:[e.jsx(t,{value:"low",children:"Low"}),e.jsx(t,{value:"medium",children:"Medium"}),e.jsx(t,{value:"high",children:"High"}),e.jsx(t,{value:"urgent",children:"Urgent"})]})},u={render:()=>e.jsxs(g,{direction:"column",gap:"6",style:{padding:"20px"},children:[e.jsxs("div",{children:[e.jsx(c,{size:"3",weight:"bold",style:{marginBottom:"8px",display:"block"},children:"Accessibility Test - Reverse Color Implementation"}),e.jsx(c,{size:"2",color:"gray",style:{marginBottom:"16px",display:"block"},children:"Active state should have dark background with light text for WCAG 2.2 AA compliance"}),e.jsxs(o,{defaultValue:"inbox",children:[e.jsx(t,{value:"inbox",children:"Inbox (Active)"}),e.jsx(t,{value:"drafts",children:"Drafts"}),e.jsx(t,{value:"sent",children:"Sent"})]})]}),e.jsxs("div",{children:[e.jsx(c,{size:"3",weight:"bold",style:{marginBottom:"8px",display:"block"},children:"Multiple Sizes Test"}),e.jsxs(g,{direction:"column",gap:"3",children:[e.jsxs(o,{defaultValue:"1",size:"1",children:[e.jsx(t,{value:"1",children:"Small Active"}),e.jsx(t,{value:"2",children:"Small 2"})]}),e.jsxs(o,{defaultValue:"1",size:"2",children:[e.jsx(t,{value:"1",children:"Medium Active"}),e.jsx(t,{value:"2",children:"Medium 2"})]}),e.jsxs(o,{defaultValue:"1",size:"3",children:[e.jsx(t,{value:"1",children:"Large Active"}),e.jsx(t,{value:"2",children:"Large 2"})]})]})]})]})};var S,C,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Root defaultValue="inbox">
      <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
      <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
      <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
    </SegmentedControl.Root>
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var p,x,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Root defaultValue="grid">
      <SegmentedControl.Item value="list">List</SegmentedControl.Item>
      <SegmentedControl.Item value="grid">Grid</SegmentedControl.Item>
      <SegmentedControl.Item value="compact">Compact</SegmentedControl.Item>
    </SegmentedControl.Root>
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var I,j,f;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <SegmentedControl.Root defaultValue="1" size="1">
        <SegmentedControl.Item value="1">Small 1</SegmentedControl.Item>
        <SegmentedControl.Item value="2">Small 2</SegmentedControl.Item>
        <SegmentedControl.Item value="3">Small 3</SegmentedControl.Item>
      </SegmentedControl.Root>

      <SegmentedControl.Root defaultValue="1" size="2">
        <SegmentedControl.Item value="1">Medium 1</SegmentedControl.Item>
        <SegmentedControl.Item value="2">Medium 2</SegmentedControl.Item>
        <SegmentedControl.Item value="3">Medium 3</SegmentedControl.Item>
      </SegmentedControl.Root>

      <SegmentedControl.Root defaultValue="1" size="3">
        <SegmentedControl.Item value="1">Large 1</SegmentedControl.Item>
        <SegmentedControl.Item value="2">Large 2</SegmentedControl.Item>
        <SegmentedControl.Item value="3">Large 3</SegmentedControl.Item>
      </SegmentedControl.Root>
    </Flex>
}`,...(f=(j=r.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var y,R,V;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Root defaultValue="monthly">
      <SegmentedControl.Item value="monthly">Monthly</SegmentedControl.Item>
      <SegmentedControl.Item value="yearly">Yearly</SegmentedControl.Item>
    </SegmentedControl.Root>
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var b,A,z;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Root defaultValue="all">
      <SegmentedControl.Item value="all">All</SegmentedControl.Item>
      <SegmentedControl.Item value="active">Active</SegmentedControl.Item>
      <SegmentedControl.Item value="inactive">Inactive</SegmentedControl.Item>
      <SegmentedControl.Item value="archived">Archived</SegmentedControl.Item>
    </SegmentedControl.Root>
}`,...(z=(A=d.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var M,L,w;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Root defaultValue="7d">
      <SegmentedControl.Item value="24h">24h</SegmentedControl.Item>
      <SegmentedControl.Item value="7d">7d</SegmentedControl.Item>
      <SegmentedControl.Item value="30d">30d</SegmentedControl.Item>
      <SegmentedControl.Item value="90d">90d</SegmentedControl.Item>
      <SegmentedControl.Item value="1y">1y</SegmentedControl.Item>
    </SegmentedControl.Root>
}`,...(w=(L=a.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var T,k,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Root defaultValue="left">
      <SegmentedControl.Item value="left">Left</SegmentedControl.Item>
      <SegmentedControl.Item value="center">Center</SegmentedControl.Item>
      <SegmentedControl.Item value="right">Right</SegmentedControl.Item>
      <SegmentedControl.Item value="justify">Justify</SegmentedControl.Item>
    </SegmentedControl.Root>
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,B,O;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Root defaultValue="medium">
      <SegmentedControl.Item value="low">Low</SegmentedControl.Item>
      <SegmentedControl.Item value="medium">Medium</SegmentedControl.Item>
      <SegmentedControl.Item value="high">High</SegmentedControl.Item>
      <SegmentedControl.Item value="urgent">Urgent</SegmentedControl.Item>
    </SegmentedControl.Root>
}`,...(O=(B=s.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var G,P,E;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="6" style={{
    padding: '20px'
  }}>
      <div>
        <Text size="3" weight="bold" style={{
        marginBottom: '8px',
        display: 'block'
      }}>
          Accessibility Test - Reverse Color Implementation
        </Text>
        <Text size="2" color="gray" style={{
        marginBottom: '16px',
        display: 'block'
      }}>
          Active state should have dark background with light text for WCAG 2.2 AA compliance
        </Text>
        <SegmentedControl.Root defaultValue="inbox">
          <SegmentedControl.Item value="inbox">Inbox (Active)</SegmentedControl.Item>
          <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
          <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
        </SegmentedControl.Root>
      </div>

      <div>
        <Text size="3" weight="bold" style={{
        marginBottom: '8px',
        display: 'block'
      }}>
          Multiple Sizes Test
        </Text>
        <Flex direction="column" gap="3">
          <SegmentedControl.Root defaultValue="1" size="1">
            <SegmentedControl.Item value="1">Small Active</SegmentedControl.Item>
            <SegmentedControl.Item value="2">Small 2</SegmentedControl.Item>
          </SegmentedControl.Root>
          
          <SegmentedControl.Root defaultValue="1" size="2">
            <SegmentedControl.Item value="1">Medium Active</SegmentedControl.Item>
            <SegmentedControl.Item value="2">Medium 2</SegmentedControl.Item>
          </SegmentedControl.Root>
          
          <SegmentedControl.Root defaultValue="1" size="3">
            <SegmentedControl.Item value="1">Large Active</SegmentedControl.Item>
            <SegmentedControl.Item value="2">Large 2</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Flex>
      </div>
    </Flex>
}`,...(E=(P=u.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const Se=["Default","ViewMode","Sizes","TwoOptions","FourOptions","TimePeriod","Alignment","Priority","AccessibilityDemo"];export{u as AccessibilityDemo,i as Alignment,n as Default,d as FourOptions,s as Priority,r as Sizes,a as TimePeriod,m as TwoOptions,l as ViewMode,Se as __namedExportsOrder,ge as default};
