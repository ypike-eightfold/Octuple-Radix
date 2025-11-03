import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as a}from"./Icon-D_u5oAGh.js";import{e as r}from"./badge-BMm2Ttez.js";import{p as n}from"./flex-DvmXTkye.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./index-CSHYywJy.js";const T={title:"Components/Badge",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","soft","outline","surface"],description:"Badge variant (classic is hidden)"}}},s={render:()=>e.jsx(r,{children:"New"})},o={render:()=>e.jsxs(n,{direction:"column",gap:"3",align:"start",children:[e.jsx(r,{variant:"solid",children:"Solid"}),e.jsx(r,{variant:"soft",children:"Soft"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"surface",children:"Surface"})]})},c={render:()=>e.jsxs(n,{gap:"2",wrap:"wrap",children:[e.jsx(r,{color:"indigo",children:"Indigo"}),e.jsx(r,{color:"blue",children:"Blue"}),e.jsx(r,{color:"green",children:"Green"}),e.jsx(r,{color:"red",children:"Red"}),e.jsx(r,{color:"orange",children:"Orange"}),e.jsx(r,{color:"amber",children:"Amber"}),e.jsx(r,{color:"gray",children:"Gray"})]})},i={render:()=>e.jsxs(n,{gap:"3",wrap:"wrap",children:[e.jsxs(r,{children:[e.jsx(a,{name:"check_circle",size:14}),"Verified"]}),e.jsxs(r,{color:"green",children:[e.jsx(a,{name:"new_releases",size:14}),"New"]}),e.jsxs(r,{color:"blue",children:[e.jsx(a,{name:"star",size:14}),"Featured"]}),e.jsxs(r,{color:"red",children:[e.jsx(a,{name:"local_fire_department",size:14}),"Hot"]}),e.jsxs(r,{color:"amber",children:[e.jsx(a,{name:"schedule",size:14}),"Pending"]})]})},d={render:()=>e.jsxs(n,{gap:"3",align:"center",children:[e.jsx(r,{size:"1",children:"Size 1"}),e.jsx(r,{size:"2",children:"Size 2"}),e.jsx(r,{size:"3",children:"Size 3"})]})},t={render:()=>e.jsxs(n,{gap:"2",wrap:"wrap",children:[e.jsx(r,{highContrast:!0,children:"Indigo"}),e.jsx(r,{color:"blue",highContrast:!0,children:"Blue"}),e.jsx(r,{color:"green",highContrast:!0,children:"Green"}),e.jsx(r,{color:"red",highContrast:!0,children:"Red"})]})},l={render:()=>e.jsxs(n,{direction:"column",gap:"2",children:[e.jsxs(n,{gap:"2",align:"center",children:[e.jsxs(r,{color:"green",variant:"soft",children:[e.jsx(a,{name:"check_circle",size:14}),"Active"]}),e.jsx("span",{children:"User account is active"})]}),e.jsxs(n,{gap:"2",align:"center",children:[e.jsxs(r,{color:"amber",variant:"soft",children:[e.jsx(a,{name:"schedule",size:14}),"Pending"]}),e.jsx("span",{children:"Awaiting approval"})]}),e.jsxs(n,{gap:"2",align:"center",children:[e.jsxs(r,{color:"red",variant:"soft",children:[e.jsx(a,{name:"cancel",size:14}),"Inactive"]}),e.jsx("span",{children:"Account suspended"})]}),e.jsxs(n,{gap:"2",align:"center",children:[e.jsxs(r,{color:"gray",variant:"soft",children:[e.jsx(a,{name:"draft",size:14}),"Draft"]}),e.jsx("span",{children:"Document in progress"})]})]})};var g,p,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Badge>New</Badge>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,h,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" align="start">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="surface">Surface</Badge>
    </Flex>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var B,j,f;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Flex gap="2" wrap="wrap">
      <Badge color="indigo">Indigo</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="amber">Amber</Badge>
      <Badge color="gray">Gray</Badge>
    </Flex>
}`,...(f=(j=c.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var z,v,S;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex gap="3" wrap="wrap">
      <Badge>
        <Icon name="check_circle" size={14} />
        Verified
      </Badge>
      <Badge color="green">
        <Icon name="new_releases" size={14} />
        New
      </Badge>
      <Badge color="blue">
        <Icon name="star" size={14} />
        Featured
      </Badge>
      <Badge color="red">
        <Icon name="local_fire_department" size={14} />
        Hot
      </Badge>
      <Badge color="amber">
        <Icon name="schedule" size={14} />
        Pending
      </Badge>
    </Flex>
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var F,w,I;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Flex gap="3" align="center">
      <Badge size="1">Size 1</Badge>
      <Badge size="2">Size 2</Badge>
      <Badge size="3">Size 3</Badge>
    </Flex>
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var b,A,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Flex gap="2" wrap="wrap">
      <Badge highContrast>Indigo</Badge>
      <Badge color="blue" highContrast>Blue</Badge>
      <Badge color="green" highContrast>Green</Badge>
      <Badge color="red" highContrast>Red</Badge>
    </Flex>
}`,...(C=(A=t.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var _,y,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="2">
      <Flex gap="2" align="center">
        <Badge color="green" variant="soft">
          <Icon name="check_circle" size={14} />
          Active
        </Badge>
        <span>User account is active</span>
      </Flex>
      <Flex gap="2" align="center">
        <Badge color="amber" variant="soft">
          <Icon name="schedule" size={14} />
          Pending
        </Badge>
        <span>Awaiting approval</span>
      </Flex>
      <Flex gap="2" align="center">
        <Badge color="red" variant="soft">
          <Icon name="cancel" size={14} />
          Inactive
        </Badge>
        <span>Account suspended</span>
      </Flex>
      <Flex gap="2" align="center">
        <Badge color="gray" variant="soft">
          <Icon name="draft" size={14} />
          Draft
        </Badge>
        <span>Document in progress</span>
      </Flex>
    </Flex>
}`,...(D=(y=l.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const q=["Default","AllVariants","AllColors","WithIcons","AllSizes","HighContrast","StatusBadges"];export{c as AllColors,d as AllSizes,o as AllVariants,s as Default,t as HighContrast,l as StatusBadges,i as WithIcons,q as __namedExportsOrder,T as default};
