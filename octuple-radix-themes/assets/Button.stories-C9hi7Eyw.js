import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{I as c}from"./Icon-D_u5oAGh.js";import{o as n}from"./button-DOEX7M_0.js";import{p as e}from"./flex-DvmXTkye.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./base-button-1bStz9fB.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./index-UwpWBZco.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./map-prop-values-CWqpaS2P.js";const U={title:"Components/Button",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","soft","outline","ghost","surface"],description:"Button variant (classic is hidden)"}}},r={render:()=>t.jsx(e,{direction:"column",gap:"3",children:t.jsxs(e,{gap:"3",children:[t.jsx(n,{variant:"solid",children:"Solid"}),t.jsx(n,{variant:"soft",children:"Soft"}),t.jsx(n,{variant:"outline",children:"Outline"}),t.jsx(n,{variant:"ghost",children:"Ghost"}),t.jsx(n,{variant:"surface",children:"Surface"})]})})},a={render:()=>t.jsxs(e,{direction:"column",gap:"3",align:"start",children:[t.jsx(n,{size:"1",children:"Size 1"}),t.jsx(n,{size:"2",children:"Size 2"}),t.jsx(n,{size:"3",children:"Size 3"}),t.jsx(n,{size:"4",children:"Size 4"})]})},o={render:()=>t.jsxs(e,{gap:"3",children:[t.jsxs(n,{children:[t.jsx(c,{name:"add",size:18}),"Create New"]}),t.jsxs(n,{variant:"soft",children:["Save",t.jsx(c,{name:"check",size:18})]}),t.jsx(n,{variant:"outline",children:t.jsx(c,{name:"download",size:18})})]})},s={render:()=>t.jsxs(e,{gap:"3",children:[t.jsx(n,{loading:!0,children:"Processing"}),t.jsx(n,{variant:"soft",loading:!0,children:"Loading"}),t.jsx(n,{variant:"outline",loading:!0,children:"Please wait"})]})},i={render:()=>t.jsxs(e,{gap:"3",children:[t.jsx(n,{disabled:!0,children:"Disabled"}),t.jsx(n,{variant:"soft",disabled:!0,children:"Disabled"}),t.jsx(n,{variant:"outline",disabled:!0,children:"Disabled"})]})},d={render:()=>t.jsxs(e,{gap:"3",children:[t.jsx(n,{highContrast:!0,children:"High Contrast"}),t.jsx(n,{variant:"soft",highContrast:!0,children:"High Contrast"}),t.jsx(n,{variant:"outline",highContrast:!0,children:"High Contrast"})]})},l={render:()=>t.jsxs(e,{gap:"3",direction:"column",align:"start",children:[t.jsx(n,{className:"button-eightfold",size:"2",children:"Eightfold Gradient"}),t.jsxs(n,{className:"button-eightfold",size:"3",children:[t.jsx(c,{name:"star",size:20}),"Featured Action"]})]})};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3">
      <Flex gap="3">
        <Button variant="solid">Solid</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="surface">Surface</Button>
      </Flex>
    </Flex>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" align="start">
      <Button size="1">Size 1</Button>
      <Button size="2">Size 2</Button>
      <Button size="3">Size 3</Button>
      <Button size="4">Size 4</Button>
    </Flex>
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var B,j,f;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Flex gap="3">
      <Button>
        <Icon name="add" size={18} />
        Create New
      </Button>
      <Button variant="soft">
        Save
        <Icon name="check" size={18} />
      </Button>
      <Button variant="outline">
        <Icon name="download" size={18} />
      </Button>
    </Flex>
}`,...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var v,z,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex gap="3">
      <Button loading>Processing</Button>
      <Button variant="soft" loading>Loading</Button>
      <Button variant="outline" loading>Please wait</Button>
    </Flex>
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var b,F,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Flex gap="3">
      <Button disabled>Disabled</Button>
      <Button variant="soft" disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled</Button>
    </Flex>
}`,...(C=(F=i.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var D,H,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Flex gap="3">
      <Button highContrast>High Contrast</Button>
      <Button variant="soft" highContrast>High Contrast</Button>
      <Button variant="outline" highContrast>High Contrast</Button>
    </Flex>
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var w,A,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex gap="3" direction="column" align="start">
      <Button className="button-eightfold" size="2">
        Eightfold Gradient
      </Button>
      <Button className="button-eightfold" size="3">
        <Icon name="star" size={20} />
        Featured Action
      </Button>
    </Flex>
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const X=["AllVariants","AllSizes","WithIcons","Loading","Disabled","HighContrast","EightfoldGradient"];export{a as AllSizes,r as AllVariants,i as Disabled,l as EightfoldGradient,d as HighContrast,s as Loading,o as WithIcons,X as __namedExportsOrder,U as default};
