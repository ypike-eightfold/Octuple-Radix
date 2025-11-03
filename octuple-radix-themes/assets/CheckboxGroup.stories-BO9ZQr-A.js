import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-BlmOqGMO.js";import{y as v}from"./index-Dbpq9gcs.js";import{O as W,H as J,K as Q,X as U}from"./checkbox-group.primitive-Dhrn4SJw.js";import{o as Y,v as $,r as H,p as a}from"./flex-DvmXTkye.js";import{t as Z}from"./base-checkbox.props-CssBQTeC.js";import{t as ee}from"./icons-D7bXrj8K.js";import{p as m}from"./text-C4SbqUme.js";import{c as oe}from"./index-Dkb_ZYRU.js";import"./index-yBjzXJbu.js";import"./index-CWo8_AO2.js";import"./internal-BdPtub1_.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./index-Dz6nX4BC.js";import"./index-5uDXI3f6.js";import"./index-b_KpNbIe.js";import"./index-DW48STyt.js";import"./index-DZ3_ZFrS.js";import"./index-CW4F2FBO.js";import"./index-DZCApzUK.js";import"./index-DZ2oWOeb.js";import"./index-BnD1EARC.js";import"./index-CH1-paxq.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const d={...Y,...Z},K="CheckboxGroup",[re]=oe(K,[W]),P=W(),[te,X]=re(K),t=r.forwardRef(({color:p=d.color.default,highContrast:l=d.highContrast.default,size:c=d.size.default,variant:i=d.variant.default,...s},n)=>{const{__scopeCheckboxGroup:u,className:I,...q}=$(s,H),A=P(u);return r.createElement(te,{scope:u,color:p,size:c,highContrast:l,variant:i},r.createElement(J,{...A,...q,ref:n,className:v("rt-CheckboxGroupRoot",I)}))});t.displayName="CheckboxGroup.Root";const o=r.forwardRef((p,l)=>{const{__scopeCheckboxGroup:c,children:i,className:s,style:n,...u}=p,{size:I}=X("CheckboxGroupItem",c);return i?r.createElement(m,{as:"label",size:I,className:v("rt-CheckboxGroupItem",s),style:n},r.createElement(g,{__scopeCheckboxGroup:c,...u,ref:l}),i&&r.createElement("span",{className:"rt-CheckboxGroupItemInner"},i)):r.createElement(g,{__scopeCheckboxGroup:c,...u,ref:l,className:s,style:n})});o.displayName="CheckboxGroup.Item";const g=r.forwardRef(({__scopeCheckboxGroup:p,...l},c)=>{const i=X("CheckboxGroupItemCheckbox",p),s=P(p),{color:n,className:u}=$({...l,...i},d,H);return r.createElement(Q,{...s,"data-accent-color":n,...l,ref:c,className:v("rt-reset","rt-BaseCheckboxRoot","rt-CheckboxGroupItemCheckbox",u)},r.createElement(U,{...s,asChild:!0,className:"rt-BaseCheckboxIndicator"},r.createElement(ee,null)))});g.displayName="CheckboxGroup.ItemCheckbox";const we={title:"Components/Checkbox Group",component:t,parameters:{layout:"padded"},tags:["autodocs"]},x={render:()=>e.jsxs(t,{defaultValue:["1"],children:[e.jsx(o,{value:"1",children:"Option 1"}),e.jsx(o,{value:"2",children:"Option 2"}),e.jsx(o,{value:"3",children:"Option 3"})]})},h={render:()=>e.jsxs(a,{direction:"column",gap:"3",children:[e.jsx(m,{size:"2",weight:"bold",children:"Select your interests"}),e.jsxs(t,{defaultValue:["design"],children:[e.jsx(o,{value:"design",children:"Design"}),e.jsx(o,{value:"development",children:"Development"}),e.jsx(o,{value:"marketing",children:"Marketing"}),e.jsx(o,{value:"sales",children:"Sales"})]})]})},b={render:()=>e.jsxs(a,{direction:"column",gap:"4",children:[e.jsxs(a,{direction:"column",gap:"2",children:[e.jsx(m,{size:"1",weight:"bold",children:"Size 1 (Small)"}),e.jsxs(t,{defaultValue:["1"],size:"1",children:[e.jsx(o,{value:"1",children:"Small option 1"}),e.jsx(o,{value:"2",children:"Small option 2"})]})]}),e.jsxs(a,{direction:"column",gap:"2",children:[e.jsx(m,{size:"2",weight:"bold",children:"Size 2 (Default)"}),e.jsxs(t,{defaultValue:["1"],size:"2",children:[e.jsx(o,{value:"1",children:"Default option 1"}),e.jsx(o,{value:"2",children:"Default option 2"})]})]}),e.jsxs(a,{direction:"column",gap:"2",children:[e.jsx(m,{size:"3",weight:"bold",children:"Size 3 (Large)"}),e.jsxs(t,{defaultValue:["1"],size:"3",children:[e.jsx(o,{value:"1",children:"Large option 1"}),e.jsx(o,{value:"2",children:"Large option 2"})]})]})]})},C={render:()=>e.jsx(a,{direction:"column",gap:"4",children:e.jsxs(a,{direction:"column",gap:"2",children:[e.jsx(m,{size:"2",weight:"bold",children:"Soft"}),e.jsxs(t,{defaultValue:["1"],variant:"soft",children:[e.jsx(o,{value:"1",children:"Option 1"}),e.jsx(o,{value:"2",children:"Option 2"})]})]})})},k={render:()=>e.jsxs(t,{defaultValue:["1"],disabled:!0,children:[e.jsx(o,{value:"1",children:"Option 1 (Disabled)"}),e.jsx(o,{value:"2",children:"Option 2 (Disabled)"}),e.jsx(o,{value:"3",children:"Option 3 (Disabled)"})]})},G={render:()=>e.jsxs(a,{direction:"column",gap:"4",children:[e.jsxs(t,{defaultValue:["1"],color:"indigo",children:[e.jsx(o,{value:"1",children:"Indigo"}),e.jsx(o,{value:"2",children:"Indigo option"})]}),e.jsxs(t,{defaultValue:["1"],color:"blue",children:[e.jsx(o,{value:"1",children:"Blue"}),e.jsx(o,{value:"2",children:"Blue option"})]}),e.jsxs(t,{defaultValue:["1"],color:"green",children:[e.jsx(o,{value:"1",children:"Green"}),e.jsx(o,{value:"2",children:"Green option"})]})]})};var f,j,z;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <CheckboxGroup.Root defaultValue={['1']}>
      <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">Option 3</CheckboxGroup.Item>
    </CheckboxGroup.Root>
}`,...(z=(j=x.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var R,S,V;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3">
      <Text size="2" weight="bold">Select your interests</Text>
      <CheckboxGroup.Root defaultValue={['design']}>
        <CheckboxGroup.Item value="design">Design</CheckboxGroup.Item>
        <CheckboxGroup.Item value="development">Development</CheckboxGroup.Item>
        <CheckboxGroup.Item value="marketing">Marketing</CheckboxGroup.Item>
        <CheckboxGroup.Item value="sales">Sales</CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </Flex>
}`,...(V=(S=h.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var D,O,F;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="1" weight="bold">Size 1 (Small)</Text>
        <CheckboxGroup.Root defaultValue={['1']} size="1">
          <CheckboxGroup.Item value="1">Small option 1</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Small option 2</CheckboxGroup.Item>
        </CheckboxGroup.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 2 (Default)</Text>
        <CheckboxGroup.Root defaultValue={['1']} size="2">
          <CheckboxGroup.Item value="1">Default option 1</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Default option 2</CheckboxGroup.Item>
        </CheckboxGroup.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="3" weight="bold">Size 3 (Large)</Text>
        <CheckboxGroup.Root defaultValue={['1']} size="3">
          <CheckboxGroup.Item value="1">Large option 1</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Large option 2</CheckboxGroup.Item>
        </CheckboxGroup.Root>
      </Flex>
    </Flex>
}`,...(F=(O=b.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var w,E,N;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Soft</Text>
        <CheckboxGroup.Root defaultValue={['1']} variant="soft">
          <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
        </CheckboxGroup.Root>
      </Flex>
    </Flex>
}`,...(N=(E=C.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var _,y,T;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <CheckboxGroup.Root defaultValue={['1']} disabled>
      <CheckboxGroup.Item value="1">Option 1 (Disabled)</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Option 2 (Disabled)</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">Option 3 (Disabled)</CheckboxGroup.Item>
    </CheckboxGroup.Root>
}`,...(T=(y=k.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var L,B,M;G.parameters={...G.parameters,docs:{...(L=G.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <CheckboxGroup.Root defaultValue={['1']} color="indigo">
        <CheckboxGroup.Item value="1">Indigo</CheckboxGroup.Item>
        <CheckboxGroup.Item value="2">Indigo option</CheckboxGroup.Item>
      </CheckboxGroup.Root>

      <CheckboxGroup.Root defaultValue={['1']} color="blue">
        <CheckboxGroup.Item value="1">Blue</CheckboxGroup.Item>
        <CheckboxGroup.Item value="2">Blue option</CheckboxGroup.Item>
      </CheckboxGroup.Root>

      <CheckboxGroup.Root defaultValue={['1']} color="green">
        <CheckboxGroup.Item value="1">Green</CheckboxGroup.Item>
        <CheckboxGroup.Item value="2">Green option</CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </Flex>
}`,...(M=(B=G.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const Ee=["Default","WithLabels","Sizes","Variants","Disabled","Colors"];export{G as Colors,x as Default,k as Disabled,b as Sizes,C as Variants,h as WithLabels,Ee as __namedExportsOrder,we as default};
