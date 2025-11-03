import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./text-area-DzkT3lKc.js";import{p as s}from"./flex-DvmXTkye.js";import{p as t}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./radius.prop-CIarg28h.js";import"./index-CSHYywJy.js";import"./high-contrast.prop-BhzBAZU8.js";const K={title:"Components/TextArea",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["soft","surface"],description:"TextArea variant (classic is hidden)"},size:{control:"select",options:["1","2","3"],description:"TextArea size"}}},i={render:()=>e.jsx(r,{placeholder:"Write your message here...",style:{width:400}})},a={render:()=>e.jsxs(s,{direction:"column",gap:"2",style:{width:400},children:[e.jsx(t,{size:"2",weight:"medium",children:"Description"}),e.jsx(r,{placeholder:"Enter a description..."})]})},o={render:()=>e.jsxs(s,{direction:"column",gap:"3",style:{width:400},children:[e.jsx(r,{size:"1",placeholder:"Size 1 - Small"}),e.jsx(r,{size:"2",placeholder:"Size 2 - Medium (default)"}),e.jsx(r,{size:"3",placeholder:"Size 3 - Large"})]})},n={render:()=>e.jsxs(s,{direction:"column",gap:"3",style:{width:400},children:[e.jsx(r,{variant:"soft",placeholder:"Soft variant"}),e.jsx(r,{variant:"surface",placeholder:"Surface variant"})]})},l={render:()=>e.jsx(r,{defaultValue:"This is some default text that can be edited.",style:{width:400}})},d={render:()=>e.jsx(r,{placeholder:"This text area is disabled",disabled:!0,style:{width:400}})},c={render:()=>e.jsxs(s,{direction:"column",gap:"3",style:{width:400},children:[e.jsxs(s,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Small (3 rows)"}),e.jsx(r,{placeholder:"3 rows...",rows:3})]}),e.jsxs(s,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Large (8 rows)"}),e.jsx(r,{placeholder:"8 rows...",rows:8})]})]})},p={render:()=>e.jsxs(s,{direction:"column",gap:"3",style:{width:400},children:[e.jsxs(s,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Vertical Resize (default)"}),e.jsx(r,{placeholder:"Can be resized vertically..."})]}),e.jsxs(s,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"No Resize"}),e.jsx(r,{placeholder:"Cannot be resized...",style:{resize:"none"}})]}),e.jsxs(s,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Both Directions"}),e.jsx(r,{placeholder:"Can be resized in both directions...",style:{resize:"both"}})]})]})};var m,h,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <TextArea placeholder="Write your message here..." style={{
    width: 400
  }} />
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,g,z;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="2" style={{
    width: 400
  }}>
      <Text size="2" weight="medium">
        Description
      </Text>
      <TextArea placeholder="Enter a description..." />
    </Flex>
}`,...(z=(g=a.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var w,T,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" style={{
    width: 400
  }}>
      <TextArea size="1" placeholder="Size 1 - Small" />
      <TextArea size="2" placeholder="Size 2 - Medium (default)" />
      <TextArea size="3" placeholder="Size 3 - Large" />
    </Flex>
}`,...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var y,f,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" style={{
    width: 400
  }}>
      <TextArea variant="soft" placeholder="Soft variant" />
      <TextArea variant="surface" placeholder="Surface variant" />
    </Flex>
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var A,b,F;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <TextArea defaultValue="This is some default text that can be edited." style={{
    width: 400
  }} />
}`,...(F=(b=l.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var v,R,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <TextArea placeholder="This text area is disabled" disabled style={{
    width: 400
  }} />
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var V,W,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" style={{
    width: 400
  }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          Small (3 rows)
        </Text>
        <TextArea placeholder="3 rows..." rows={3} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          Large (8 rows)
        </Text>
        <TextArea placeholder="8 rows..." rows={8} />
      </Flex>
    </Flex>
}`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var L,B,E;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" style={{
    width: 400
  }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          Vertical Resize (default)
        </Text>
        <TextArea placeholder="Can be resized vertically..." />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          No Resize
        </Text>
        <TextArea placeholder="Cannot be resized..." style={{
        resize: 'none'
      }} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          Both Directions
        </Text>
        <TextArea placeholder="Can be resized in both directions..." style={{
        resize: 'both'
      }} />
      </Flex>
    </Flex>
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const P=["Basic","WithLabel","AllSizes","AllVariants","WithDefaultValue","Disabled","WithRows","Resize"];export{o as AllSizes,n as AllVariants,i as Basic,d as Disabled,p as Resize,l as WithDefaultValue,a as WithLabel,c as WithRows,P as __namedExportsOrder,K as default};
