import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as u}from"./index-BlmOqGMO.js";import{R as h,L as f,V as v,I as y,T as M,C as _,a as j}from"./index-CVbz7KG_.js";import{p}from"./box-Ck4Ely5C.js";import{p as c}from"./flex-DvmXTkye.js";import{p as a}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-Dkb_ZYRU.js";import"./index-DW48STyt.js";import"./index-CiEb6DFw.js";import"./index-CSHYywJy.js";import"./index-Dz6nX4BC.js";import"./index-5uDXI3f6.js";import"./index-CWo8_AO2.js";import"./index-CH1-paxq.js";import"./index-CW4F2FBO.js";import"./index-DZ3_ZFrS.js";import"./index-Bq0PzALz.js";import"./index-DZCApzUK.js";import"./index-DZ2oWOeb.js";import"./index-UwpWBZco.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const r=u.forwardRef(({children:i,...t},N)=>e.jsxs(h,{ref:N,className:"navigation-menu-root",...t,children:[e.jsx(f,{className:"navigation-menu-list",children:i}),e.jsx(v,{className:"navigation-menu-viewport"})]}));r.displayName="NavigationMenu";const o=y,s=u.forwardRef((i,t)=>e.jsx(M,{ref:t,className:"navigation-menu-trigger",...i}));s.displayName="NavigationMenuTrigger";const l=u.forwardRef((i,t)=>e.jsx(_,{ref:t,className:"navigation-menu-content",...i}));l.displayName="NavigationMenuContent";const n=u.forwardRef((i,t)=>e.jsx(j,{ref:t,className:"navigation-menu-link",...i}));n.displayName="NavigationMenuLink";try{r.displayName="NavigationMenu",r.__docgenInfo={description:"",displayName:"NavigationMenu",props:{defaultValue:{defaultValue:null,description:"Default value (uncontrolled)",name:"defaultValue",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"Controlled value",name:"value",required:!1,type:{name:"string | undefined"}},onValueChange:{defaultValue:null,description:"Callback when value changes",name:"onValueChange",required:!1,type:{name:"((value: string) => void) | undefined"}}}}}catch{}try{o.displayName="NavigationMenuItem",o.__docgenInfo={description:"",displayName:"NavigationMenuItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{s.displayName="NavigationMenuTrigger",s.__docgenInfo={description:"",displayName:"NavigationMenuTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{l.displayName="NavigationMenuContent",l.__docgenInfo={description:"",displayName:"NavigationMenuContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{n.displayName="NavigationMenuLink",n.__docgenInfo={description:"",displayName:"NavigationMenuLink",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const W={title:"Components/Navigation Menu",component:r,parameters:{layout:"padded"},tags:["autodocs"]},d={render:()=>e.jsxs(r,{children:[e.jsxs(o,{children:[e.jsx(s,{children:"Products"}),e.jsx(l,{children:e.jsx(p,{p:"4",style:{width:"400px"},children:e.jsxs(c,{direction:"column",gap:"2",children:[e.jsxs(n,{href:"#",style:{padding:"12px"},children:[e.jsx(a,{weight:"bold",size:"2",children:"Product 1"}),e.jsx(a,{size:"1",color:"gray",children:"Description for product 1"})]}),e.jsxs(n,{href:"#",style:{padding:"12px"},children:[e.jsx(a,{weight:"bold",size:"2",children:"Product 2"}),e.jsx(a,{size:"1",color:"gray",children:"Description for product 2"})]})]})})})]}),e.jsxs(o,{children:[e.jsx(s,{children:"Solutions"}),e.jsx(l,{children:e.jsx(p,{p:"4",style:{width:"400px"},children:e.jsxs(c,{direction:"column",gap:"2",children:[e.jsxs(n,{href:"#",style:{padding:"12px"},children:[e.jsx(a,{weight:"bold",size:"2",children:"Solution 1"}),e.jsx(a,{size:"1",color:"gray",children:"Description for solution 1"})]}),e.jsxs(n,{href:"#",style:{padding:"12px"},children:[e.jsx(a,{weight:"bold",size:"2",children:"Solution 2"}),e.jsx(a,{size:"1",color:"gray",children:"Description for solution 2"})]})]})})})]}),e.jsx(o,{children:e.jsx(n,{href:"#",children:"About"})}),e.jsx(o,{children:e.jsx(n,{href:"#",children:"Contact"})})]})};var g,m,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <Box p="4" style={{
          width: '400px'
        }}>
            <Flex direction="column" gap="2">
              <NavigationMenuLink href="#" style={{
              padding: '12px'
            }}>
                <Text weight="bold" size="2">Product 1</Text>
                <Text size="1" color="gray">Description for product 1</Text>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" style={{
              padding: '12px'
            }}>
                <Text weight="bold" size="2">Product 2</Text>
                <Text size="1" color="gray">Description for product 2</Text>
              </NavigationMenuLink>
            </Flex>
          </Box>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
        <NavigationMenuContent>
          <Box p="4" style={{
          width: '400px'
        }}>
            <Flex direction="column" gap="2">
              <NavigationMenuLink href="#" style={{
              padding: '12px'
            }}>
                <Text weight="bold" size="2">Solution 1</Text>
                <Text size="1" color="gray">Description for solution 1</Text>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" style={{
              padding: '12px'
            }}>
                <Text weight="bold" size="2">Solution 2</Text>
                <Text size="1" color="gray">Description for solution 2</Text>
              </NavigationMenuLink>
            </Flex>
          </Box>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="#">About</NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="#">Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
}`,...(x=(m=d.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const X=["Default"];export{d as Default,X as __namedExportsOrder,W as default};
