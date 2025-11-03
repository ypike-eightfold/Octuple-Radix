import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as l,u as n,g as a,y as p,h as s,v as t,I}from"./select-Bx7SG8CJ.js";import{p as v}from"./flex-DvmXTkye.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./icons-D7bXrj8K.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./theme-Cr0RmA42.js";import"./index-DW48STyt.js";import"./index-CSHYywJy.js";import"./index-Dkb_ZYRU.js";import"./index-Bq0PzALz.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DZCApzUK.js";import"./index-CW4F2FBO.js";import"./index-5uDXI3f6.js";import"./index-BnD1EARC.js";import"./index-CFeakEOz.js";import"./index-CH1-paxq.js";import"./index-Dz6nX4BC.js";import"./index-UwpWBZco.js";import"./index-CWo8_AO2.js";import"./index-BdQq_4o_.js";import"./index-DZ3_ZFrS.js";import"./index-LsNUdSVz.js";import"./index-DZ2oWOeb.js";import"./index-Cpd6F4Jl.js";const $={title:"Components/Select",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["soft","ghost","surface"],description:"Select variant (classic is hidden)"}}},r={render:()=>e.jsxs(l,{defaultValue:"apple",children:[e.jsx(n,{style:{width:200}}),e.jsxs(a,{children:[e.jsxs(p,{children:[e.jsx(s,{children:"Fruits"}),e.jsx(t,{value:"orange",children:"Orange"}),e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"grape",children:"Grape"})]}),e.jsx(I,{}),e.jsxs(p,{children:[e.jsx(s,{children:"Vegetables"}),e.jsx(t,{value:"carrot",children:"Carrot"}),e.jsx(t,{value:"potato",children:"Potato"})]})]})]})},o={render:()=>e.jsxs(v,{direction:"column",gap:"3",children:[e.jsxs(l,{defaultValue:"apple",children:[e.jsx(n,{variant:"soft",style:{width:200}}),e.jsxs(a,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"orange",children:"Orange"})]})]}),e.jsxs(l,{defaultValue:"apple",children:[e.jsx(n,{variant:"ghost",style:{width:200}}),e.jsxs(a,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"orange",children:"Orange"})]})]}),e.jsxs(l,{defaultValue:"apple",children:[e.jsx(n,{variant:"surface",style:{width:200}}),e.jsxs(a,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"orange",children:"Orange"})]})]})]})},c={render:()=>e.jsxs(v,{direction:"column",gap:"3",align:"start",children:[e.jsxs(l,{defaultValue:"apple",children:[e.jsx(n,{size:"1",style:{width:150}}),e.jsxs(a,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"orange",children:"Orange"})]})]}),e.jsxs(l,{defaultValue:"apple",children:[e.jsx(n,{size:"2",style:{width:200}}),e.jsxs(a,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"orange",children:"Orange"})]})]}),e.jsxs(l,{defaultValue:"apple",children:[e.jsx(n,{size:"3",style:{width:250}}),e.jsxs(a,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"orange",children:"Orange"})]})]})]})};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Select.Root defaultValue="apple">
      <Select.Trigger style={{
      width: 200
    }} />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="grape">Grape</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,S,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3">
      <Select.Root defaultValue="apple">
        <Select.Trigger variant="soft" style={{
        width: 200
      }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger variant="ghost" style={{
        width: 200
      }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger variant="surface" style={{
        width: 200
      }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var h,x,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" align="start">
      <Select.Root defaultValue="apple">
        <Select.Trigger size="1" style={{
        width: 150
      }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger size="2" style={{
        width: 200
      }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger size="3" style={{
        width: 250
      }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const ee=["Basic","AllVariants","AllSizes"];export{c as AllSizes,o as AllVariants,r as Basic,ee as __namedExportsOrder,$ as default};
