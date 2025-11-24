import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as n}from"./Icon-D_u5oAGh.js";import{u as r,c as l}from"./text-field-XCzB25VA.js";import{p as d}from"./flex-DvmXTkye.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./internal-BdPtub1_.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./color.prop-n6xztqZx.js";import"./radius.prop-CIarg28h.js";const q={title:"Components/TextField",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["soft","surface"],description:"TextField variant (classic is hidden)"}}},t={render:()=>e.jsx(r,{placeholder:"Search..."})},o={render:()=>e.jsxs(d,{direction:"column",gap:"3",style:{width:300},children:[e.jsx(r,{placeholder:"Search...",children:e.jsx(l,{children:e.jsx(n,{name:"search",size:16})})}),e.jsxs(r,{placeholder:"Enter email...",children:[e.jsx(l,{children:e.jsx(n,{name:"mail",size:16})}),e.jsx(l,{children:e.jsx(n,{name:"info",size:16,color:"var(--gray-9)"})})]})]})},a={render:()=>e.jsxs(d,{direction:"column",gap:"3",style:{width:300},children:[e.jsx(r,{variant:"soft",placeholder:"Soft variant"}),e.jsx(r,{variant:"surface",placeholder:"Surface variant"})]})},s={render:()=>e.jsxs(d,{direction:"column",gap:"3",align:"start",children:[e.jsx(r,{size:"1",placeholder:"Size 1",style:{width:200}}),e.jsx(r,{size:"2",placeholder:"Size 2",style:{width:250}}),e.jsx(r,{size:"3",placeholder:"Size 3",style:{width:300}})]})},i={render:()=>e.jsx(r,{defaultValue:"Disabled input",disabled:!0,style:{width:300}})};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <TextField.Root placeholder="Search..." />
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,h,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" style={{
    width: 300
  }}>
      <TextField.Root placeholder="Search...">
        <TextField.Slot>
          <Icon name="search" size={16} />
        </TextField.Slot>
      </TextField.Root>

      <TextField.Root placeholder="Enter email...">
        <TextField.Slot>
          <Icon name="mail" size={16} />
        </TextField.Slot>
        <TextField.Slot>
          <Icon name="info" size={16} color="var(--gray-9)" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var S,F,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" style={{
    width: 300
  }}>
      <TextField.Root variant="soft" placeholder="Soft variant" />
      <TextField.Root variant="surface" placeholder="Surface variant" />
    </Flex>
}`,...(j=(F=a.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var z,T,f;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" align="start">
      <TextField.Root size="1" placeholder="Size 1" style={{
      width: 200
    }} />
      <TextField.Root size="2" placeholder="Size 2" style={{
      width: 250
    }} />
      <TextField.Root size="3" placeholder="Size 3" style={{
      width: 300
    }} />
    </Flex>
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var g,y,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <TextField.Root defaultValue="Disabled input" disabled style={{
    width: 300
  }} />
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const G=["Basic","WithIcon","AllVariants","AllSizes","Disabled"];export{s as AllSizes,a as AllVariants,t as Basic,i as Disabled,o as WithIcon,G as __namedExportsOrder,q as default};
