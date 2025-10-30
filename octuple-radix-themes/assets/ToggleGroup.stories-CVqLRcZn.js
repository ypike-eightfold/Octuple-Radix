import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as L,r as w}from"./index-BlmOqGMO.js";import{R as F,I as M}from"./index-BEDZMEqW.js";import{I as r}from"./Icon-D_u5oAGh.js";import{p as q}from"./flex-DvmXTkye.js";import{p as D}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-Dkb_ZYRU.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./index-b_KpNbIe.js";import"./index-DW48STyt.js";import"./index-DZ3_ZFrS.js";import"./index-CW4F2FBO.js";import"./index-5uDXI3f6.js";import"./index-DZCApzUK.js";import"./index-Dz6nX4BC.js";import"./index-CWo8_AO2.js";import"./index-ChP4uSaL.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const l=L.forwardRef(({children:t,...o},d)=>e.jsx(M,{ref:d,className:"toggle-group-item",...o,children:t}));l.displayName="ToggleGroupItem";const a=L.forwardRef(({type:t="single",size:o="2",children:d,...N},k)=>e.jsx(F,{ref:k,type:t,className:`toggle-group-root toggle-group-size-${o}`,...N,children:d}));a.displayName="ToggleGroup";try{l.displayName="ToggleGroupItem",l.__docgenInfo={description:"",displayName:"ToggleGroupItem",props:{value:{defaultValue:null,description:"Value for this toggle",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether disabled",name:"disabled",required:!1,type:{name:"boolean | undefined"}},"aria-label":{defaultValue:null,description:"Aria label",name:"aria-label",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Children content",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{a.displayName="ToggleGroup",a.__docgenInfo={description:"",displayName:"ToggleGroup",props:{type:{defaultValue:{value:"single"},description:"Type of toggle group",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"single"'},{value:'"multiple"'}]}},value:{defaultValue:null,description:"The controlled value(s)",name:"value",required:!1,type:{name:"string | string[] | undefined"}},defaultValue:{defaultValue:null,description:"Default value(s) for uncontrolled",name:"defaultValue",required:!1,type:{name:"string | string[] | undefined"}},onValueChange:{defaultValue:null,description:"Callback when value changes",name:"onValueChange",required:!1,type:{name:"((value: string | string[]) => void) | undefined"}},disabled:{defaultValue:null,description:"Whether the group is disabled",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"2"},description:"Size of toggles",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},children:{defaultValue:null,description:"Children (ToggleGroupItem components)",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const se={title:"Components/Toggle Group",component:a,parameters:{layout:"padded"},tags:["autodocs"]},n={render:()=>e.jsxs(a,{type:"single",defaultValue:"center",children:[e.jsx(l,{value:"left","aria-label":"Left align",children:e.jsx(r,{name:"format_align_left",size:18})}),e.jsx(l,{value:"center","aria-label":"Center align",children:e.jsx(r,{name:"format_align_center",size:18})}),e.jsx(l,{value:"right","aria-label":"Right align",children:e.jsx(r,{name:"format_align_right",size:18})})]})},i={render:()=>e.jsxs(a,{type:"multiple",defaultValue:["bold"],children:[e.jsx(l,{value:"bold","aria-label":"Bold",children:e.jsx(r,{name:"format_bold",size:18})}),e.jsx(l,{value:"italic","aria-label":"Italic",children:e.jsx(r,{name:"format_italic",size:18})}),e.jsx(l,{value:"underline","aria-label":"Underline",children:e.jsx(r,{name:"format_underlined",size:18})}),e.jsx(l,{value:"strikethrough","aria-label":"Strikethrough",children:e.jsx(r,{name:"strikethrough_s",size:18})})]})},u={render:()=>e.jsxs(a,{type:"single",defaultValue:"list",children:[e.jsxs(l,{value:"list",children:[e.jsx(r,{name:"list",size:18}),"List"]}),e.jsxs(l,{value:"grid",children:[e.jsx(r,{name:"grid_view",size:18}),"Grid"]}),e.jsxs(l,{value:"compact",children:[e.jsx(r,{name:"view_compact",size:18}),"Compact"]})]})},s={render:()=>e.jsxs(q,{direction:"column",gap:"4",align:"start",children:[e.jsxs(a,{type:"single",size:"1",defaultValue:"left",children:[e.jsx(l,{value:"left",children:"Small"}),e.jsx(l,{value:"center",children:"Small"}),e.jsx(l,{value:"right",children:"Small"})]}),e.jsxs(a,{type:"single",size:"2",defaultValue:"left",children:[e.jsx(l,{value:"left",children:"Medium"}),e.jsx(l,{value:"center",children:"Medium"}),e.jsx(l,{value:"right",children:"Medium"})]}),e.jsxs(a,{type:"single",size:"3",defaultValue:"left",children:[e.jsx(l,{value:"left",children:"Large"}),e.jsx(l,{value:"center",children:"Large"}),e.jsx(l,{value:"right",children:"Large"})]})]})},g={render:()=>{const[t,o]=w.useState("center");return e.jsxs(q,{direction:"column",gap:"3",align:"start",children:[e.jsxs(a,{type:"single",value:t,onValueChange:o,children:[e.jsx(l,{value:"left","aria-label":"Left",children:e.jsx(r,{name:"format_align_left",size:18})}),e.jsx(l,{value:"center","aria-label":"Center",children:e.jsx(r,{name:"format_align_center",size:18})}),e.jsx(l,{value:"right","aria-label":"Right",children:e.jsx(r,{name:"format_align_right",size:18})})]}),e.jsxs(D,{size:"2",color:"gray",children:["Selected: ",t||"none"]})]})}},m={render:()=>e.jsxs(a,{type:"single",disabled:!0,defaultValue:"center",children:[e.jsx(l,{value:"left",children:"Left"}),e.jsx(l,{value:"center",children:"Center"}),e.jsx(l,{value:"right",children:"Right"})]})};var p,c,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Left align">
        <Icon name="format_align_left" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center align">
        <Icon name="format_align_center" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right align">
        <Icon name="format_align_right" size={18} />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(f=(c=n.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,T,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Icon name="format_bold" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Icon name="format_italic" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Icon name="format_underlined" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
        <Icon name="strikethrough_s" size={18} />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(v=(T=i.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var G,I,x;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="list">
      <ToggleGroupItem value="list">
        <Icon name="list" size={18} />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="grid">
        <Icon name="grid_view" size={18} />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="compact">
        <Icon name="view_compact" size={18} />
        Compact
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(x=(I=u.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var _,j,y;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" align="start">
      <ToggleGroup type="single" size="1" defaultValue="left">
        <ToggleGroupItem value="left">Small</ToggleGroupItem>
        <ToggleGroupItem value="center">Small</ToggleGroupItem>
        <ToggleGroupItem value="right">Small</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" size="2" defaultValue="left">
        <ToggleGroupItem value="left">Medium</ToggleGroupItem>
        <ToggleGroupItem value="center">Medium</ToggleGroupItem>
        <ToggleGroupItem value="right">Medium</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" size="3" defaultValue="left">
        <ToggleGroupItem value="left">Large</ToggleGroupItem>
        <ToggleGroupItem value="center">Large</ToggleGroupItem>
        <ToggleGroupItem value="right">Large</ToggleGroupItem>
      </ToggleGroup>
    </Flex>
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var b,z,V;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('center');
    return <Flex direction="column" gap="3" align="start">
        <ToggleGroup type="single" value={value} onValueChange={setValue as any}>
          <ToggleGroupItem value="left" aria-label="Left">
            <Icon name="format_align_left" size={18} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center">
            <Icon name="format_align_center" size={18} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right">
            <Icon name="format_align_right" size={18} />
          </ToggleGroupItem>
        </ToggleGroup>
        <Text size="2" color="gray">
          Selected: {value || 'none'}
        </Text>
      </Flex>;
  }
}`,...(V=(z=g.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var S,C,R;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" disabled defaultValue="center">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const ge=["Default","TextFormatting","WithText","Sizes","Controlled","Disabled"];export{g as Controlled,n as Default,m as Disabled,s as Sizes,i as TextFormatting,u as WithText,ge as __namedExportsOrder,se as default};
