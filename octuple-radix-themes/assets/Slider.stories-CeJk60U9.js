import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{s as i}from"./slider-DXEc8RKa.js";import{p as H}from"./box-Ck4Ely5C.js";import{p as l}from"./flex-DvmXTkye.js";import{p as r}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-CSHYywJy.js";import"./index-Dkb_ZYRU.js";import"./index-Dz6nX4BC.js";import"./index-5uDXI3f6.js";import"./index-CWo8_AO2.js";import"./index-DZ2oWOeb.js";import"./index-BnD1EARC.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DZ3_ZFrS.js";const ie={title:"Components/Slider",component:i,parameters:{layout:"padded"},tags:["autodocs"]},n={render:()=>e.jsx(H,{style:{width:300},children:e.jsx(i,{defaultValue:[50]})})},t={render:()=>e.jsx(H,{style:{width:300},children:e.jsx(i,{defaultValue:[25,75]})})},o={render:()=>e.jsxs(l,{direction:"column",gap:"4",style:{width:400},children:[e.jsxs(l,{direction:"column",gap:"2",children:[e.jsxs(l,{justify:"between",children:[e.jsx(r,{size:"2",weight:"bold",children:"Volume"}),e.jsx(r,{size:"2",color:"gray",children:"50%"})]}),e.jsx(i,{defaultValue:[50]})]}),e.jsxs(l,{direction:"column",gap:"2",children:[e.jsxs(l,{justify:"between",children:[e.jsx(r,{size:"2",weight:"bold",children:"Brightness"}),e.jsx(r,{size:"2",color:"gray",children:"75%"})]}),e.jsx(i,{defaultValue:[75]})]}),e.jsxs(l,{direction:"column",gap:"2",children:[e.jsxs(l,{justify:"between",children:[e.jsx(r,{size:"2",weight:"bold",children:"Contrast"}),e.jsx(r,{size:"2",color:"gray",children:"30%"})]}),e.jsx(i,{defaultValue:[30]})]})]})},s={render:()=>e.jsxs(l,{direction:"column",gap:"5",style:{width:300},children:[e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Size 1"}),e.jsx(i,{defaultValue:[50],size:"1"})]}),e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Size 2 (Default)"}),e.jsx(i,{defaultValue:[50],size:"2"})]}),e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Size 3"}),e.jsx(i,{defaultValue:[50],size:"3"})]})]})},d={render:()=>e.jsxs(l,{direction:"column",gap:"4",style:{width:300},children:[e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Indigo (Default)"}),e.jsx(i,{defaultValue:[60],color:"indigo"})]}),e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Blue"}),e.jsx(i,{defaultValue:[60],color:"blue"})]}),e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Green"}),e.jsx(i,{defaultValue:[60],color:"green"})]}),e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Red"}),e.jsx(i,{defaultValue:[60],color:"red"})]})]})},a={render:()=>e.jsx(l,{direction:"column",gap:"4",style:{width:300},children:e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",color:"gray",children:"Disabled Slider"}),e.jsx(i,{defaultValue:[60],disabled:!0})]})})},c={render:()=>e.jsxs(l,{direction:"column",gap:"4",style:{width:300},children:[e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"High Contrast"}),e.jsx(i,{defaultValue:[60],highContrast:!0})]}),e.jsxs(l,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Normal Contrast"}),e.jsx(i,{defaultValue:[60]})]})]})};var u,x,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: 300
  }}>
      <Slider defaultValue={[50]} />
    </Box>
}`,...(m=(x=n.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: 300
  }}>
      <Slider defaultValue={[25, 75]} />
    </Box>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var j,f,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: 400
  }}>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Text size="2" weight="bold">Volume</Text>
          <Text size="2" color="gray">50%</Text>
        </Flex>
        <Slider defaultValue={[50]} />
      </Flex>

      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Text size="2" weight="bold">Brightness</Text>
          <Text size="2" color="gray">75%</Text>
        </Flex>
        <Slider defaultValue={[75]} />
      </Flex>

      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Text size="2" weight="bold">Contrast</Text>
          <Text size="2" color="gray">30%</Text>
        </Flex>
        <Slider defaultValue={[30]} />
      </Flex>
    </Flex>
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var z,b,F;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="5" style={{
    width: 300
  }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 1</Text>
        <Slider defaultValue={[50]} size="1" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 2 (Default)</Text>
        <Slider defaultValue={[50]} size="2" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 3</Text>
        <Slider defaultValue={[50]} size="3" />
      </Flex>
    </Flex>
}`,...(F=(b=s.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var S,T,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: 300
  }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Indigo (Default)</Text>
        <Slider defaultValue={[60]} color="indigo" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Blue</Text>
        <Slider defaultValue={[60]} color="blue" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Green</Text>
        <Slider defaultValue={[60]} color="green" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Red</Text>
        <Slider defaultValue={[60]} color="red" />
      </Flex>
    </Flex>
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var y,C,D;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: 300
  }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold" color="gray">Disabled Slider</Text>
        <Slider defaultValue={[60]} disabled />
      </Flex>
    </Flex>
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var B,R,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: 300
  }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">High Contrast</Text>
        <Slider defaultValue={[60]} highContrast />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Normal Contrast</Text>
        <Slider defaultValue={[60]} />
      </Flex>
    </Flex>
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const ne=["Default","Range","WithLabels","AllSizes","AllColors","Disabled","HighContrast"];export{d as AllColors,s as AllSizes,n as Default,a as Disabled,c as HighContrast,t as Range,o as WithLabels,ne as __namedExportsOrder,ie as default};
