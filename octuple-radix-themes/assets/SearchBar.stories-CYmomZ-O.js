import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as T,r as y}from"./index-BlmOqGMO.js";import{I as F}from"./Icon-D_u5oAGh.js";import{u as de,c as C}from"./text-field-XCzB25VA.js";import{p as o}from"./flex-DvmXTkye.js";import{p as n}from"./text-C4SbqUme.js";import{o as v}from"./card-B3UzYjvl.js";import"./index-yBjzXJbu.js";import"./index-Dbpq9gcs.js";import"./internal-BdPtub1_.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./color.prop-n6xztqZx.js";import"./radius.prop-CIarg28h.js";import"./high-contrast.prop-BhzBAZU8.js";const r=T.forwardRef(({placeholder:t="Search...",value:a,onChange:s,onSearch:c,size:i="2",disabled:re,showClear:ae=!0,style:se,autoFocus:te},le)=>{const[oe,j]=T.useState(""),w=a!==void 0?a:oe,z=i==="1"?14:i==="2"?16:18,ne=l=>{const b=l.target.value;a===void 0&&j(b),s==null||s(b)},ce=l=>{l.key==="Enter"&&c&&c(w)},ie=()=>{a===void 0&&j(""),s==null||s(""),c==null||c("")};return e.jsxs(de,{size:i,placeholder:t,value:w,onChange:ne,onKeyPress:ce,disabled:re,ref:le,style:se,autoFocus:te,children:[e.jsx(C,{children:e.jsx(F,{name:"search",size:z})}),ae&&w&&e.jsx(C,{children:e.jsx("button",{onClick:ie,style:{all:"unset",cursor:"pointer",display:"flex",alignItems:"center",color:"var(--gray-9)",transition:"color 0.15s ease"},onMouseEnter:l=>l.currentTarget.style.color="var(--gray-12)",onMouseLeave:l=>l.currentTarget.style.color="var(--gray-9)",children:e.jsx(F,{name:"close",size:z})})})]})});r.displayName="SearchBar";try{r.displayName="SearchBar",r.__docgenInfo={description:"",displayName:"SearchBar",props:{placeholder:{defaultValue:{value:"Search..."},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"Value of the search input",name:"value",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"Callback when value changes",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},onSearch:{defaultValue:null,description:"Callback when search is submitted",name:"onSearch",required:!1,type:{name:"((value: string) => void) | undefined"}},size:{defaultValue:{value:"2"},description:"Size of the search bar",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},disabled:{defaultValue:null,description:"Whether the input is disabled",name:"disabled",required:!1,type:{name:"boolean | undefined"}},showClear:{defaultValue:{value:"true"},description:"Show clear button when there's text",name:"showClear",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"Custom styles for the TextField",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},autoFocus:{defaultValue:null,description:"Auto-focus the input when mounted",name:"autoFocus",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Ve={title:"Components/Search Bar",component:r,parameters:{layout:"padded"},tags:["autodocs"]},d={args:{placeholder:"Search..."}},u={render:()=>{const[t,a]=y.useState("");return e.jsxs(o,{direction:"column",gap:"3",children:[e.jsx(r,{value:t,onChange:a,onSearch:s=>alert(`Searching for: ${s}`)}),e.jsxs(n,{size:"2",color:"gray",children:['Current value: "',t,'"']})]})}},h={render:()=>e.jsxs(o,{direction:"column",gap:"3",children:[e.jsx(v,{children:e.jsxs(o,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",weight:"bold",children:"Size 1 (Small)"}),e.jsx(r,{size:"1",placeholder:"Search small..."})]})}),e.jsx(v,{children:e.jsxs(o,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",weight:"bold",children:"Size 2 (Default)"}),e.jsx(r,{size:"2",placeholder:"Search default..."})]})}),e.jsx(v,{children:e.jsxs(o,{direction:"column",gap:"2",children:[e.jsx(n,{size:"2",weight:"bold",children:"Size 3 (Large)"}),e.jsx(r,{size:"3",placeholder:"Search large..."})]})})]})},p={args:{placeholder:"Search without clear button...",showClear:!1}},m={args:{placeholder:"Disabled search...",disabled:!0,value:"Cannot edit"}},x={render:()=>{const[t,a]=y.useState(""),[s,c]=y.useState("");return e.jsxs(o,{direction:"column",gap:"3",children:[e.jsx(r,{value:t,onChange:a,onSearch:i=>c(i),placeholder:"Type and press Enter..."}),e.jsxs(n,{size:"2",color:"gray",children:['Last searched: "',s,'"']})]})}},S={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{placeholder:"Full width search..."})})},g={render:()=>e.jsx(v,{children:e.jsxs(o,{justify:"between",align:"center",children:[e.jsx(n,{size:"3",weight:"bold",children:"Products"}),e.jsx("div",{style:{width:300},children:e.jsx(r,{placeholder:"Search products...",size:"2"})})]})})},f={render:()=>{const[t,a]=y.useState("positions or candidates");return e.jsxs(o,{direction:"column",gap:"3",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(n,{size:"3",weight:"bold",children:"Focused/Search State"}),e.jsx(n,{size:"2",color:"gray",children:"This shows the selected/focused state of the search bar. The highlight should extend fully across the width with proper corner radius."}),e.jsx("div",{style:{position:"relative"},children:e.jsx(r,{value:t,onChange:a,placeholder:"Search for positions or candidates",size:"2",style:{width:"500px"},autoFocus:!0})})]})}};var V,B,_;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  }
}`,...(_=(B=d.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var q,W,D;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Flex direction="column" gap="3">
        <SearchBar value={value} onChange={setValue} onSearch={val => alert(\`Searching for: \${val}\`)} />
        <Text size="2" color="gray">
          Current value: "{value}"
        </Text>
      </Flex>;
  }
}`,...(D=(W=u.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var L,E,I;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3">
      <Card>
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Size 1 (Small)</Text>
          <SearchBar size="1" placeholder="Search small..." />
        </Flex>
      </Card>
      
      <Card>
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Size 2 (Default)</Text>
          <SearchBar size="2" placeholder="Search default..." />
        </Flex>
      </Card>
      
      <Card>
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Size 3 (Large)</Text>
          <SearchBar size="3" placeholder="Search large..." />
        </Flex>
      </Card>
    </Flex>
}`,...(I=(E=h.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,k,R;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search without clear button...',
    showClear: false
  }
}`,...(R=(k=p.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var N,$,H;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled search...',
    disabled: true,
    value: 'Cannot edit'
  }
}`,...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var K,M,A;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [lastSearch, setLastSearch] = useState('');
    return <Flex direction="column" gap="3">
        <SearchBar value={searchTerm} onChange={setSearchTerm} onSearch={val => setLastSearch(val)} placeholder="Type and press Enter..." />
        <Text size="2" color="gray">
          Last searched: "{lastSearch}"
        </Text>
      </Flex>;
  }
}`,...(A=(M=x.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var O,G,J;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%'
  }}>
      <SearchBar placeholder="Full width search..." />
    </div>
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Card>
      <Flex justify="between" align="center">
        <Text size="3" weight="bold">Products</Text>
        <div style={{
        width: 300
      }}>
          <SearchBar placeholder="Search products..." size="2" />
        </div>
      </Flex>
    </Card>
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('positions or candidates');
    return <Flex direction="column" gap="3" style={{
      width: '100%',
      maxWidth: '600px'
    }}>
        <Text size="3" weight="bold">Focused/Search State</Text>
        <Text size="2" color="gray">
          This shows the selected/focused state of the search bar. The highlight should extend fully across the width with proper corner radius.
        </Text>
        <div style={{
        position: 'relative'
      }}>
          <SearchBar value={value} onChange={setValue} placeholder="Search for positions or candidates" size="2" style={{
          width: '500px'
        }} autoFocus />
        </div>
      </Flex>;
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Be=["Default","Controlled","Sizes","WithoutClearButton","Disabled","WithSearchHandler","FullWidth","InToolbar","FocusedState"];export{u as Controlled,d as Default,m as Disabled,f as FocusedState,S as FullWidth,g as InToolbar,h as Sizes,x as WithSearchHandler,p as WithoutClearButton,Be as __namedExportsOrder,Ve as default};
