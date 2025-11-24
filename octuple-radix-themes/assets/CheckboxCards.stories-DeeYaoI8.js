import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as i}from"./Icon-D_u5oAGh.js";import{r as l}from"./index-BlmOqGMO.js";import{y as j}from"./index-Dbpq9gcs.js";import{O as P,H as A,K as M,X}from"./checkbox-group.primitive-Dhrn4SJw.js";import{o as W,v as L,r as G,p as o}from"./flex-DvmXTkye.js";import{r as H}from"./color.prop-n6xztqZx.js";import{o as K}from"./high-contrast.prop-BhzBAZU8.js";import{s as k,o as q}from"./grid-7JjhQrL2.js";import{t as J}from"./base-checkbox.props-CssBQTeC.js";import{t as Q}from"./icons-D7bXrj8K.js";import{c as Y}from"./index-Dkb_ZYRU.js";import{p as r}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-CWo8_AO2.js";import"./internal-BdPtub1_.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./index-Dz6nX4BC.js";import"./index-5uDXI3f6.js";import"./index-b_KpNbIe.js";import"./index-DW48STyt.js";import"./index-DZ3_ZFrS.js";import"./index-CW4F2FBO.js";import"./index-DZCApzUK.js";import"./index-DZ2oWOeb.js";import"./index-BnD1EARC.js";import"./index-CH1-paxq.js";const Z=["1","2","3"],ee=["surface","classic"],re={...W,size:{type:"enum",className:"rt-r-size",values:Z,default:"2",responsive:!0},variant:{type:"enum",className:"rt-variant",values:ee,default:"surface"},...H,...K,columns:{...k.columns,default:"repeat(auto-fit, minmax(200px, 1fr))"},gap:{...k.gap,default:"4"}},U="CheckboxCards",[oe]=Y(U,[P]),_=P(),[ae,ie]=oe(U),s=l.forwardRef((t,p)=>{const{__scopeCheckboxCards:n,className:u,color:C,...b}=L(t,re,G),c=_(n);return l.createElement(ae,{scope:n,size:t.size,highContrast:t.highContrast},l.createElement(q,{asChild:!0},l.createElement(A,{...c,"data-accent-color":C,...b,ref:p,className:j("rt-CheckboxCardsRoot",u)})))});s.displayName="CheckboxCards.Root";const a=l.forwardRef(({__scopeCheckboxCards:t,children:p,className:n,style:u,...C},b)=>{const c=ie("CheckboxCardsItem",t),z=_(t),{className:B}=L({size:c==null?void 0:c.size,variant:"surface",highContrast:c==null?void 0:c.highContrast},J);return l.createElement("label",{className:j("rt-BaseCard","rt-CheckboxCardsItem",n),style:u},p,l.createElement(M,{...z,...C,ref:b,className:j("rt-reset","rt-BaseCheckboxRoot","rt-CheckboxCardCheckbox",B)},l.createElement(X,{...z,asChild:!0,className:"rt-BaseCheckboxIndicator"},l.createElement(Q,null))))});a.displayName="CheckboxCards.Item";const $e={title:"Components/Checkbox Cards",component:s,parameters:{layout:"padded"},tags:["autodocs"]},d={render:()=>e.jsxs(s,{defaultValue:["1"],columns:"1",children:[e.jsx(a,{value:"1",children:e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{weight:"bold",children:"Option 1"}),e.jsx(r,{size:"2",color:"gray",children:"First choice available"})]})}),e.jsx(a,{value:"2",children:e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{weight:"bold",children:"Option 2"}),e.jsx(r,{size:"2",color:"gray",children:"Second choice available"})]})}),e.jsx(a,{value:"3",children:e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{weight:"bold",children:"Option 3"}),e.jsx(r,{size:"2",color:"gray",children:"Third choice available"})]})})]})},x={render:()=>e.jsxs(s,{defaultValue:["design"],columns:"1",children:[e.jsx(a,{value:"design",children:e.jsxs(o,{gap:"3",align:"start",children:[e.jsx(i,{name:"palette",size:24,color:"var(--indigo-9)"}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{weight:"bold",children:"Design"}),e.jsx(r,{size:"2",color:"gray",children:"UI/UX design, prototyping, and visual design"})]})]})}),e.jsx(a,{value:"development",children:e.jsxs(o,{gap:"3",align:"start",children:[e.jsx(i,{name:"code",size:24,color:"var(--blue-9)"}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{weight:"bold",children:"Development"}),e.jsx(r,{size:"2",color:"gray",children:"Frontend, backend, and full-stack development"})]})]})}),e.jsx(a,{value:"marketing",children:e.jsxs(o,{gap:"3",align:"start",children:[e.jsx(i,{name:"campaign",size:24,color:"var(--green-9)"}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{weight:"bold",children:"Marketing"}),e.jsx(r,{size:"2",color:"gray",children:"Digital marketing, content, and SEO"})]})]})})]})},m={render:()=>e.jsxs(s,{defaultValue:["1","2"],columns:{initial:"1",sm:"2"},children:[e.jsx(a,{value:"1",children:e.jsx(r,{weight:"bold",children:"Option 1"})}),e.jsx(a,{value:"2",children:e.jsx(r,{weight:"bold",children:"Option 2"})}),e.jsx(a,{value:"3",children:e.jsx(r,{weight:"bold",children:"Option 3"})}),e.jsx(a,{value:"4",children:e.jsx(r,{weight:"bold",children:"Option 4"})})]})},h={render:()=>e.jsxs(o,{direction:"column",gap:"4",children:[e.jsxs(o,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Size 1 (Small)"}),e.jsxs(s,{defaultValue:["1"],size:"1",columns:"1",children:[e.jsx(a,{value:"1",children:"Small card 1"}),e.jsx(a,{value:"2",children:"Small card 2"})]})]}),e.jsxs(o,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Size 2 (Default)"}),e.jsxs(s,{defaultValue:["1"],size:"2",columns:"1",children:[e.jsx(a,{value:"1",children:"Default card 1"}),e.jsx(a,{value:"2",children:"Default card 2"})]})]}),e.jsxs(o,{direction:"column",gap:"2",children:[e.jsx(r,{size:"2",weight:"bold",children:"Size 3 (Large)"}),e.jsxs(s,{defaultValue:["1"],size:"3",columns:"1",children:[e.jsx(a,{value:"1",children:"Large card 1"}),e.jsx(a,{value:"2",children:"Large card 2"})]})]})]})},g={render:()=>e.jsxs(s,{defaultValue:["pro"],columns:{initial:"1",sm:"3"},children:[e.jsx(a,{value:"free",children:e.jsxs(o,{direction:"column",gap:"3",children:[e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{size:"5",weight:"bold",children:"Free"}),e.jsx(r,{size:"2",color:"gray",children:"For individuals"})]}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{size:"6",weight:"bold",children:"$0"}),e.jsx(r,{size:"1",color:"gray",children:"per month"})]}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsxs(o,{gap:"2",align:"center",children:[e.jsx(i,{name:"check",size:16,color:"var(--green-9)"}),e.jsx(r,{size:"2",children:"5 projects"})]}),e.jsxs(o,{gap:"2",align:"center",children:[e.jsx(i,{name:"check",size:16,color:"var(--green-9)"}),e.jsx(r,{size:"2",children:"Basic support"})]})]})]})}),e.jsx(a,{value:"pro",children:e.jsxs(o,{direction:"column",gap:"3",children:[e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{size:"5",weight:"bold",children:"Pro"}),e.jsx(r,{size:"2",color:"gray",children:"For professionals"})]}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{size:"6",weight:"bold",children:"$29"}),e.jsx(r,{size:"1",color:"gray",children:"per month"})]}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsxs(o,{gap:"2",align:"center",children:[e.jsx(i,{name:"check",size:16,color:"var(--green-9)"}),e.jsx(r,{size:"2",children:"Unlimited projects"})]}),e.jsxs(o,{gap:"2",align:"center",children:[e.jsx(i,{name:"check",size:16,color:"var(--green-9)"}),e.jsx(r,{size:"2",children:"Priority support"})]}),e.jsxs(o,{gap:"2",align:"center",children:[e.jsx(i,{name:"check",size:16,color:"var(--green-9)"}),e.jsx(r,{size:"2",children:"Advanced features"})]})]})]})}),e.jsx(a,{value:"enterprise",children:e.jsxs(o,{direction:"column",gap:"3",children:[e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{size:"5",weight:"bold",children:"Enterprise"}),e.jsx(r,{size:"2",color:"gray",children:"For organizations"})]}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsx(r,{size:"6",weight:"bold",children:"Custom"}),e.jsx(r,{size:"1",color:"gray",children:"Contact sales"})]}),e.jsxs(o,{direction:"column",gap:"1",children:[e.jsxs(o,{gap:"2",align:"center",children:[e.jsx(i,{name:"check",size:16,color:"var(--green-9)"}),e.jsx(r,{size:"2",children:"Everything in Pro"})]}),e.jsxs(o,{gap:"2",align:"center",children:[e.jsx(i,{name:"check",size:16,color:"var(--green-9)"}),e.jsx(r,{size:"2",children:"Dedicated support"})]}),e.jsxs(o,{gap:"2",align:"center",children:[e.jsx(i,{name:"check",size:16,color:"var(--green-9)"}),e.jsx(r,{size:"2",children:"Custom SLA"})]})]})]})})]})};var v,T,F;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <CheckboxCards.Root defaultValue={['1']} columns="1">
      <CheckboxCards.Item value="1">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 1</Text>
          <Text size="2" color="gray">First choice available</Text>
        </Flex>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="2">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 2</Text>
          <Text size="2" color="gray">Second choice available</Text>
        </Flex>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="3">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 3</Text>
          <Text size="2" color="gray">Third choice available</Text>
        </Flex>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
}`,...(F=(T=d.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var f,I,w;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <CheckboxCards.Root defaultValue={['design']} columns="1">
      <CheckboxCards.Item value="design">
        <Flex gap="3" align="start">
          <Icon name="palette" size={24} color="var(--indigo-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Design</Text>
            <Text size="2" color="gray">
              UI/UX design, prototyping, and visual design
            </Text>
          </Flex>
        </Flex>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="development">
        <Flex gap="3" align="start">
          <Icon name="code" size={24} color="var(--blue-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Development</Text>
            <Text size="2" color="gray">
              Frontend, backend, and full-stack development
            </Text>
          </Flex>
        </Flex>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="marketing">
        <Flex gap="3" align="start">
          <Icon name="campaign" size={24} color="var(--green-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Marketing</Text>
            <Text size="2" color="gray">
              Digital marketing, content, and SEO
            </Text>
          </Flex>
        </Flex>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
}`,...(w=(I=x.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var y,S,R;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <CheckboxCards.Root defaultValue={['1', '2']} columns={{
    initial: '1',
    sm: '2'
  }}>
      <CheckboxCards.Item value="1">
        <Text weight="bold">Option 1</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="2">
        <Text weight="bold">Option 2</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="3">
        <Text weight="bold">Option 3</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="4">
        <Text weight="bold">Option 4</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
}`,...(R=(S=m.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var O,D,E;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 1 (Small)</Text>
        <CheckboxCards.Root defaultValue={['1']} size="1" columns="1">
          <CheckboxCards.Item value="1">Small card 1</CheckboxCards.Item>
          <CheckboxCards.Item value="2">Small card 2</CheckboxCards.Item>
        </CheckboxCards.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 2 (Default)</Text>
        <CheckboxCards.Root defaultValue={['1']} size="2" columns="1">
          <CheckboxCards.Item value="1">Default card 1</CheckboxCards.Item>
          <CheckboxCards.Item value="2">Default card 2</CheckboxCards.Item>
        </CheckboxCards.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 3 (Large)</Text>
        <CheckboxCards.Root defaultValue={['1']} size="3" columns="1">
          <CheckboxCards.Item value="1">Large card 1</CheckboxCards.Item>
          <CheckboxCards.Item value="2">Large card 2</CheckboxCards.Item>
        </CheckboxCards.Root>
      </Flex>
    </Flex>
}`,...(E=(D=h.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var V,$,N;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <CheckboxCards.Root defaultValue={['pro']} columns={{
    initial: '1',
    sm: '3'
  }}>
      <CheckboxCards.Item value="free">
        <Flex direction="column" gap="3">
          <Flex direction="column" gap="1">
            <Text size="5" weight="bold">Free</Text>
            <Text size="2" color="gray">For individuals</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Text size="6" weight="bold">$0</Text>
            <Text size="1" color="gray">per month</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">5 projects</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Basic support</Text>
            </Flex>
          </Flex>
        </Flex>
      </CheckboxCards.Item>

      <CheckboxCards.Item value="pro">
        <Flex direction="column" gap="3">
          <Flex direction="column" gap="1">
            <Text size="5" weight="bold">Pro</Text>
            <Text size="2" color="gray">For professionals</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Text size="6" weight="bold">$29</Text>
            <Text size="1" color="gray">per month</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Unlimited projects</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Priority support</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Advanced features</Text>
            </Flex>
          </Flex>
        </Flex>
      </CheckboxCards.Item>

      <CheckboxCards.Item value="enterprise">
        <Flex direction="column" gap="3">
          <Flex direction="column" gap="1">
            <Text size="5" weight="bold">Enterprise</Text>
            <Text size="2" color="gray">For organizations</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Text size="6" weight="bold">Custom</Text>
            <Text size="1" color="gray">Contact sales</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Everything in Pro</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Dedicated support</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Custom SLA</Text>
            </Flex>
          </Flex>
        </Flex>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
}`,...(N=($=g.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};const Ne=["Default","WithIcons","MultiColumn","Sizes","PlanSelection"];export{d as Default,m as MultiColumn,g as PlanSelection,h as Sizes,x as WithIcons,Ne as __namedExportsOrder,$e as default};
