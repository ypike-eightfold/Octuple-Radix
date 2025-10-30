import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{o as i}from"./separator-BQFR_RkM.js";import{p as t}from"./flex-DvmXTkye.js";import{p as r}from"./text-C4SbqUme.js";import{p as n}from"./box-Ck4Ely5C.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./index-CSHYywJy.js";import"./high-contrast.prop-BhzBAZU8.js";const H={title:"Components/Separator",component:i,parameters:{layout:"padded"},tags:["autodocs"]},o={render:()=>e.jsxs(t,{direction:"column",gap:"3",style:{width:300},children:[e.jsx(r,{children:"Above separator"}),e.jsx(i,{size:"4"}),e.jsx(r,{children:"Below separator"})]})},s={render:()=>e.jsxs(t,{align:"center",gap:"3",style:{height:80},children:[e.jsx(r,{children:"Left"}),e.jsx(i,{orientation:"vertical"}),e.jsx(r,{children:"Center"}),e.jsx(i,{orientation:"vertical"}),e.jsx(r,{children:"Right"})]})},a={render:()=>e.jsxs(t,{direction:"column",gap:"5",style:{width:300},children:[e.jsxs(n,{children:[e.jsx(r,{size:"2",weight:"bold",mb:"2",children:"Size 1"}),e.jsx(i,{size:"1"})]}),e.jsxs(n,{children:[e.jsx(r,{size:"2",weight:"bold",mb:"2",children:"Size 2"}),e.jsx(i,{size:"2"})]}),e.jsxs(n,{children:[e.jsx(r,{size:"2",weight:"bold",mb:"2",children:"Size 3"}),e.jsx(i,{size:"3"})]}),e.jsxs(n,{children:[e.jsx(r,{size:"2",weight:"bold",mb:"2",children:"Size 4"}),e.jsx(i,{size:"4"})]})]})},c={render:()=>e.jsx(n,{style:{maxWidth:400},children:e.jsxs(t,{direction:"column",gap:"3",children:[e.jsx(r,{size:"4",weight:"bold",children:"Settings"}),e.jsx(i,{size:"4"}),e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"medium",children:"Profile"}),e.jsx(r,{size:"2",color:"gray",children:"Manage your profile information"})]}),e.jsx(i,{size:"4"}),e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"medium",children:"Security"}),e.jsx(r,{size:"2",color:"gray",children:"Update your password and security settings"})]}),e.jsx(i,{size:"4"}),e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"medium",children:"Notifications"}),e.jsx(r,{size:"2",color:"gray",children:"Configure notification preferences"})]})]})})};var l,x,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" style={{
    width: 300
  }}>
      <Text>Above separator</Text>
      <Separator size="4" />
      <Text>Below separator</Text>
    </Flex>
}`,...(d=(x=o.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex align="center" gap="3" style={{
    height: 80
  }}>
      <Text>Left</Text>
      <Separator orientation="vertical" />
      <Text>Center</Text>
      <Separator orientation="vertical" />
      <Text>Right</Text>
    </Flex>
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,z,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="5" style={{
    width: 300
  }}>
      <Box>
        <Text size="2" weight="bold" mb="2">Size 1</Text>
        <Separator size="1" />
      </Box>

      <Box>
        <Text size="2" weight="bold" mb="2">Size 2</Text>
        <Separator size="2" />
      </Box>

      <Box>
        <Text size="2" weight="bold" mb="2">Size 3</Text>
        <Separator size="3" />
      </Box>

      <Box>
        <Text size="2" weight="bold" mb="2">Size 4</Text>
        <Separator size="4" />
      </Box>
    </Flex>
}`,...(u=(z=a.parameters)==null?void 0:z.docs)==null?void 0:u.source}}};var j,T,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box style={{
    maxWidth: 400
  }}>
      <Flex direction="column" gap="3">
        <Text size="4" weight="bold">Settings</Text>
        <Separator size="4" />
        <Flex direction="column" gap="2">
          <Text size="2" weight="medium">Profile</Text>
          <Text size="2" color="gray">Manage your profile information</Text>
        </Flex>
        <Separator size="4" />
        <Flex direction="column" gap="2">
          <Text size="2" weight="medium">Security</Text>
          <Text size="2" color="gray">Update your password and security settings</Text>
        </Flex>
        <Separator size="4" />
        <Flex direction="column" gap="2">
          <Text size="2" weight="medium">Notifications</Text>
          <Text size="2" color="gray">Configure notification preferences</Text>
        </Flex>
      </Flex>
    </Box>
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const I=["Horizontal","Vertical","AllSizes","InCard"];export{a as AllSizes,o as Horizontal,c as InCard,s as Vertical,I as __namedExportsOrder,H as default};
