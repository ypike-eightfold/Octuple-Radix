import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as B,r as q}from"./index-BlmOqGMO.js";import{R as U}from"./index-ChP4uSaL.js";import{I as s}from"./Icon-D_u5oAGh.js";import{p as o}from"./flex-DvmXTkye.js";import{p as E}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-DW48STyt.js";import"./index-Dz6nX4BC.js";import"./index-5uDXI3f6.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const r=B.forwardRef(({size:a="2",children:n,...L},V)=>e.jsx(U,{ref:V,className:`toggle-root toggle-size-${a}`,...L,children:n}));r.displayName="Toggle";try{r.displayName="Toggle",r.__docgenInfo={description:"",displayName:"Toggle",props:{pressed:{defaultValue:null,description:"The controlled pressed state of the toggle",name:"pressed",required:!1,type:{name:"boolean | undefined"}},defaultPressed:{defaultValue:null,description:"Default pressed state (uncontrolled)",name:"defaultPressed",required:!1,type:{name:"boolean | undefined"}},onPressedChange:{defaultValue:null,description:"Callback when pressed state changes",name:"onPressedChange",required:!1,type:{name:"((pressed: boolean) => void) | undefined"}},disabled:{defaultValue:null,description:"Whether the toggle is disabled",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"2"},description:"Size of the toggle",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},children:{defaultValue:null,description:"Children content",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const ae={title:"Components/Toggle",component:r,parameters:{layout:"padded"},tags:["autodocs"]},l={args:{children:"Toggle me"}},t={render:()=>{const[a,n]=q.useState(!1);return e.jsxs(r,{pressed:a,onPressedChange:n,children:[e.jsx(s,{name:"favorite",size:18}),a?"Liked":"Like"]})}},i={render:()=>e.jsxs(o,{gap:"2",children:[e.jsx(r,{"aria-label":"Bold",children:e.jsx(s,{name:"format_bold",size:18})}),e.jsx(r,{"aria-label":"Italic",children:e.jsx(s,{name:"format_italic",size:18})}),e.jsx(r,{"aria-label":"Underline",children:e.jsx(s,{name:"format_underlined",size:18})})]})},d={render:()=>e.jsxs(o,{direction:"column",gap:"3",align:"start",children:[e.jsxs(r,{size:"1",children:[e.jsx(s,{name:"star",size:14}),"Small"]}),e.jsxs(r,{size:"2",children:[e.jsx(s,{name:"star",size:16}),"Medium"]}),e.jsxs(r,{size:"3",children:[e.jsx(s,{name:"star",size:18}),"Large"]})]})},c={render:()=>{const[a,n]=q.useState(!1);return e.jsxs(o,{direction:"column",gap:"3",align:"start",children:[e.jsxs(r,{pressed:a,onPressedChange:n,children:[e.jsx(s,{name:a?"bookmark":"bookmark_border",size:18}),a?"Saved":"Save"]}),e.jsxs(E,{size:"2",color:"gray",children:["Status: ",a?"Pressed":"Not pressed"]})]})}},m={render:()=>e.jsxs(o,{gap:"2",children:[e.jsxs(r,{disabled:!0,children:[e.jsx(s,{name:"thumb_up",size:18}),"Disabled"]}),e.jsxs(r,{disabled:!0,defaultPressed:!0,children:[e.jsx(s,{name:"thumb_up",size:18}),"Disabled Pressed"]})]})},g={render:()=>e.jsxs(o,{gap:"1",children:[e.jsx(r,{"aria-label":"Bold",children:e.jsx(s,{name:"format_bold",size:18})}),e.jsx(r,{"aria-label":"Italic",children:e.jsx(s,{name:"format_italic",size:18})}),e.jsx(r,{"aria-label":"Underline",children:e.jsx(s,{name:"format_underlined",size:18})}),e.jsx(r,{"aria-label":"Strikethrough",children:e.jsx(s,{name:"strikethrough_s",size:18})})]})};var p,u,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Toggle me'
  }
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onPressedChange={setPressed}>
        <Icon name="favorite" size={18} />
        {pressed ? 'Liked' : 'Like'}
      </Toggle>;
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var z,T,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex gap="2">
      <Toggle aria-label="Bold">
        <Icon name="format_bold" size={18} />
      </Toggle>
      <Toggle aria-label="Italic">
        <Icon name="format_italic" size={18} />
      </Toggle>
      <Toggle aria-label="Underline">
        <Icon name="format_underlined" size={18} />
      </Toggle>
    </Flex>
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var _,I,S;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" align="start">
      <Toggle size="1">
        <Icon name="star" size={14} />
        Small
      </Toggle>
      <Toggle size="2">
        <Icon name="star" size={16} />
        Medium
      </Toggle>
      <Toggle size="3">
        <Icon name="star" size={18} />
        Large
      </Toggle>
    </Flex>
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var P,k,y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Flex direction="column" gap="3" align="start">
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <Icon name={pressed ? 'bookmark' : 'bookmark_border'} size={18} />
          {pressed ? 'Saved' : 'Save'}
        </Toggle>
        <Text size="2" color="gray">
          Status: {pressed ? 'Pressed' : 'Not pressed'}
        </Text>
      </Flex>;
  }
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var v,F,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex gap="2">
      <Toggle disabled>
        <Icon name="thumb_up" size={18} />
        Disabled
      </Toggle>
      <Toggle disabled defaultPressed>
        <Icon name="thumb_up" size={18} />
        Disabled Pressed
      </Toggle>
    </Flex>
}`,...(C=(F=m.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var D,N,R;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Flex gap="1">
      <Toggle aria-label="Bold">
        <Icon name="format_bold" size={18} />
      </Toggle>
      <Toggle aria-label="Italic">
        <Icon name="format_italic" size={18} />
      </Toggle>
      <Toggle aria-label="Underline">
        <Icon name="format_underlined" size={18} />
      </Toggle>
      <Toggle aria-label="Strikethrough">
        <Icon name="strikethrough_s" size={18} />
      </Toggle>
    </Flex>
}`,...(R=(N=g.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const ne=["Default","WithIcon","IconOnly","Sizes","Controlled","Disabled","TextFormatting"];export{c as Controlled,l as Default,m as Disabled,i as IconOnly,d as Sizes,g as TextFormatting,t as WithIcon,ne as __namedExportsOrder,ae as default};
