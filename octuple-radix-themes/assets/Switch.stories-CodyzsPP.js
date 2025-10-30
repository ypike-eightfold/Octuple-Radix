import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as w}from"./index-BlmOqGMO.js";import{i as a}from"./switch-BsMqpX-o.js";import{p as r}from"./flex-DvmXTkye.js";import{p as n}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./index-DW48STyt.js";import"./index-CSHYywJy.js";import"./index-Dkb_ZYRU.js";import"./index-Dz6nX4BC.js";import"./index-5uDXI3f6.js";import"./index-DZ2oWOeb.js";import"./index-BnD1EARC.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";const P={title:"Components/Switch",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["1","2","3"],description:"Switch size"}}},s={render:()=>e.jsx(a,{defaultChecked:!0})},t={render:()=>e.jsxs(r,{gap:"4",align:"center",children:[e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{size:"1",defaultChecked:!0}),e.jsx(n,{size:"1",children:"Size 1"})]}),e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{size:"2",defaultChecked:!0}),e.jsx(n,{size:"2",children:"Size 2"})]}),e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{size:"3",defaultChecked:!0}),e.jsx(n,{size:"3",children:"Size 3"})]})]})},l={render:()=>e.jsxs(r,{direction:"column",gap:"3",children:[e.jsx(n,{as:"label",size:"2",children:e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{defaultChecked:!0})," Enable notifications"]})}),e.jsx(n,{as:"label",size:"2",children:e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{})," Dark mode"]})}),e.jsx(n,{as:"label",size:"2",children:e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{})," Auto-save"]})})]})},i={render:()=>e.jsxs(r,{direction:"column",gap:"3",children:[e.jsx(n,{as:"label",size:"2",children:e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{})," Off (unchecked)"]})}),e.jsx(n,{as:"label",size:"2",children:e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{defaultChecked:!0})," On (checked)"]})}),e.jsx(n,{as:"label",size:"2",color:"gray",children:e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{disabled:!0})," Disabled (off)"]})}),e.jsx(n,{as:"label",size:"2",color:"gray",children:e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{defaultChecked:!0,disabled:!0})," Disabled (on)"]})})]})},c={render:()=>{const[d,C]=w.useState(!1);return e.jsxs(r,{direction:"column",gap:"3",children:[e.jsx(n,{as:"label",size:"2",children:e.jsxs(r,{gap:"2",align:"center",children:[e.jsx(a,{checked:d,onCheckedChange:C}),"Toggle feature: ",d?"ON":"OFF"]})}),e.jsxs(n,{size:"1",color:"gray",children:["Current state: ",d?"Enabled":"Disabled"]})]})}};var o,x,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Switch defaultChecked />
}`,...(p=(x=s.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var h,g,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Flex gap="4" align="center">
      <Flex gap="2" align="center">
        <Switch size="1" defaultChecked />
        <Text size="1">Size 1</Text>
      </Flex>
      <Flex gap="2" align="center">
        <Switch size="2" defaultChecked />
        <Text size="2">Size 2</Text>
      </Flex>
      <Flex gap="2" align="center">
        <Switch size="3" defaultChecked />
        <Text size="3">Size 3</Text>
      </Flex>
    </Flex>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,j,z;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3">
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch defaultChecked /> Enable notifications
        </Flex>
      </Text>
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch /> Dark mode
        </Flex>
      </Text>
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch /> Auto-save
        </Flex>
      </Text>
    </Flex>
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var f,F,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3">
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch /> Off (unchecked)
        </Flex>
      </Text>
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch defaultChecked /> On (checked)
        </Flex>
      </Text>
      <Text as="label" size="2" color="gray">
        <Flex gap="2" align="center">
          <Switch disabled /> Disabled (off)
        </Flex>
      </Text>
      <Text as="label" size="2" color="gray">
        <Flex gap="2" align="center">
          <Switch defaultChecked disabled /> Disabled (on)
        </Flex>
      </Text>
    </Flex>
}`,...(b=(F=i.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var k,S,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = (React as any).useState(false);
    return <Flex direction="column" gap="3">
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Switch checked={checked} onCheckedChange={setChecked} />
            Toggle feature: {checked ? 'ON' : 'OFF'}
          </Flex>
        </Text>
        <Text size="1" color="gray">
          Current state: {checked ? 'Enabled' : 'Disabled'}
        </Text>
      </Flex>;
  }
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const Q=["Basic","AllSizes","WithLabel","States","Controlled"];export{t as AllSizes,s as Basic,c as Controlled,i as States,l as WithLabel,Q as __namedExportsOrder,P as default};
