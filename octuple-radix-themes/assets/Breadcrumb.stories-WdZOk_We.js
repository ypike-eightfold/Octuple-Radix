import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as f}from"./index-BlmOqGMO.js";import{I as O}from"./Icon-D_u5oAGh.js";import{p as L}from"./flex-DvmXTkye.js";import{e as V}from"./link-Bi8zDvMs.js";import{p as W}from"./text-C4SbqUme.js";import{o as b}from"./card-B3UzYjvl.js";import"./index-yBjzXJbu.js";import"./index-Dbpq9gcs.js";import"./index-CSHYywJy.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const r=f.forwardRef(({items:d,separator:N="chevron_right",size:l="2"},I)=>{const q=l==="1"?14:l==="2"?16:18;return e.jsx(L,{ref:I,gap:"2",align:"center",wrap:"wrap",children:d.map((a,u)=>{const p=u===d.length-1;return e.jsxs(f.Fragment,{children:[a.href||a.onClick?e.jsx(V,{href:a.href,onClick:a.onClick,size:l,style:{cursor:"pointer"},children:a.label}):e.jsx(W,{size:l,color:p?"gray":void 0,weight:p?"medium":"regular",children:a.label}),!p&&e.jsx(O,{name:N,size:q,color:"var(--gray-9)"})]},u)})})});r.displayName="Breadcrumb";try{r.displayName="Breadcrumb",r.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"Array of breadcrumb items",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},separator:{defaultValue:{value:"chevron_right"},description:"Separator icon name",name:"separator",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"2"},description:"Size of text and icons",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}}}}}catch{}const ae={title:"Components/Breadcrumb",component:r,parameters:{layout:"padded"},tags:["autodocs"]},s={args:{items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Electronics",href:"#"},{label:"Laptops"}]}},o={args:{items:[{label:"Home",href:"#"},{label:"About"}]}},n={args:{items:[{label:"Home",href:"#"},{label:"Dashboard",href:"#"},{label:"Projects",href:"#"},{label:"Project Alpha",href:"#"},{label:"Tasks",href:"#"},{label:"Task Details"}]}},t={render:()=>e.jsxs(L,{direction:"column",gap:"4",children:[e.jsx(b,{children:e.jsx(r,{size:"1",items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Details"}]})}),e.jsx(b,{children:e.jsx(r,{size:"2",items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Details"}]})}),e.jsx(b,{children:e.jsx(r,{size:"3",items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Details"}]})})]})},c={args:{items:[{label:"Home",href:"#"},{label:"Documents",href:"#"},{label:"Reports",href:"#"},{label:"Annual Report 2024"}],separator:"arrow_forward_ios"}},i={args:{items:[{label:"Dashboard",onClick:()=>alert("Dashboard clicked")},{label:"Settings",onClick:()=>alert("Settings clicked")},{label:"Profile",onClick:()=>alert("Profile clicked")},{label:"Edit Profile"}]}},m={args:{items:[{label:"Documents",href:"#"},{label:"Projects",href:"#"},{label:"octuple-radix",href:"#"},{label:"src",href:"#"},{label:"components"}]}};var h,g,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Products',
      href: '#'
    }, {
      label: 'Electronics',
      href: '#'
    }, {
      label: 'Laptops'
    }]
  }
}`,...(D=(g=s.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var P,k,j;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'About'
    }]
  }
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var x,C,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Dashboard',
      href: '#'
    }, {
      label: 'Projects',
      href: '#'
    }, {
      label: 'Project Alpha',
      href: '#'
    }, {
      label: 'Tasks',
      href: '#'
    }, {
      label: 'Task Details'
    }]
  }
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var _,y,H;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Card>
        <Breadcrumb size="1" items={[{
        label: 'Home',
        href: '#'
      }, {
        label: 'Products',
        href: '#'
      }, {
        label: 'Details'
      }]} />
      </Card>
      
      <Card>
        <Breadcrumb size="2" items={[{
        label: 'Home',
        href: '#'
      }, {
        label: 'Products',
        href: '#'
      }, {
        label: 'Details'
      }]} />
      </Card>
      
      <Card>
        <Breadcrumb size="3" items={[{
        label: 'Home',
        href: '#'
      }, {
        label: 'Products',
        href: '#'
      }, {
        label: 'Details'
      }]} />
      </Card>
    </Flex>
}`,...(H=(y=t.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var v,w,z;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Documents',
      href: '#'
    }, {
      label: 'Reports',
      href: '#'
    }, {
      label: 'Annual Report 2024'
    }],
    separator: 'arrow_forward_ios'
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var B,R,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      onClick: () => alert('Dashboard clicked')
    }, {
      label: 'Settings',
      onClick: () => alert('Settings clicked')
    }, {
      label: 'Profile',
      onClick: () => alert('Profile clicked')
    }, {
      label: 'Edit Profile'
    }]
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var E,T,F;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Documents',
      href: '#'
    }, {
      label: 'Projects',
      href: '#'
    }, {
      label: 'octuple-radix',
      href: '#'
    }, {
      label: 'src',
      href: '#'
    }, {
      label: 'components'
    }]
  }
}`,...(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const le=["Default","TwoLevels","DeepNesting","Sizes","CustomSeparator","WithOnClick","FileSystemPath"];export{c as CustomSeparator,n as DeepNesting,s as Default,m as FileSystemPath,t as Sizes,o as TwoLevels,i as WithOnClick,le as __namedExportsOrder,ae as default};
