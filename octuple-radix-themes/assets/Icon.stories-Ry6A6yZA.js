import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as r}from"./Icon-D_u5oAGh.js";import{p as n}from"./flex-DvmXTkye.js";import{p as o}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./index-CSHYywJy.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const A={title:"Components/Icon",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Material Symbol icon name"},size:{control:"number",description:"Icon size in pixels"},color:{control:"color",description:"Icon color"}}},a={args:{name:"home",size:24}},i={render:()=>e.jsxs(n,{gap:"4",align:"center",children:[e.jsxs(n,{direction:"column",align:"center",gap:"2",children:[e.jsx(r,{name:"star",size:16}),e.jsx(o,{size:"1",children:"16px"})]}),e.jsxs(n,{direction:"column",align:"center",gap:"2",children:[e.jsx(r,{name:"star",size:20}),e.jsx(o,{size:"1",children:"20px"})]}),e.jsxs(n,{direction:"column",align:"center",gap:"2",children:[e.jsx(r,{name:"star",size:24}),e.jsx(o,{size:"1",children:"24px"})]}),e.jsxs(n,{direction:"column",align:"center",gap:"2",children:[e.jsx(r,{name:"star",size:32}),e.jsx(o,{size:"1",children:"32px"})]}),e.jsxs(n,{direction:"column",align:"center",gap:"2",children:[e.jsx(r,{name:"star",size:48}),e.jsx(o,{size:"1",children:"48px"})]})]})},s={render:()=>e.jsxs(n,{direction:"column",gap:"4",children:[e.jsx(n,{gap:"3",wrap:"wrap",children:["home","settings","person","search","notifications","favorite","shopping_cart","mail","check","close","add","remove","edit","delete","download","upload","visibility","visibility_off","lock","arrow_forward","arrow_back","expand_more","expand_less","info"].map(t=>e.jsxs(n,{direction:"column",align:"center",gap:"2",style:{padding:"12px",borderRadius:"8px",border:"1px solid var(--gray-6)",minWidth:"100px"},children:[e.jsx(r,{name:t,size:24}),e.jsx(o,{size:"1",color:"gray",style:{textAlign:"center",fontSize:"11px"},children:t})]},t))}),e.jsxs(o,{size:"2",color:"gray",align:"center",children:["Browse 2,500+ icons at"," ",e.jsx("a",{href:"https://fonts.google.com/icons",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent-9)"},children:"fonts.google.com/icons"})]})]})},c={render:()=>e.jsxs(n,{gap:"4",children:[e.jsx(r,{name:"favorite",size:32,color:"var(--red-9)"}),e.jsx(r,{name:"star",size:32,color:"var(--amber-9)"}),e.jsx(r,{name:"check_circle",size:32,color:"var(--green-9)"}),e.jsx(r,{name:"info",size:32,color:"var(--blue-9)"}),e.jsx(r,{name:"ac_unit",size:32,color:"var(--cyan-9)"}),e.jsx(r,{name:"palette",size:32,color:"var(--indigo-9)"})]})};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'home',
    size: 24
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,x,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Flex gap="4" align="center">
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={16} />
        <Text size="1">16px</Text>
      </Flex>
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={20} />
        <Text size="1">20px</Text>
      </Flex>
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={24} />
        <Text size="1">24px</Text>
      </Flex>
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={32} />
        <Text size="1">32px</Text>
      </Flex>
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={48} />
        <Text size="1">48px</Text>
      </Flex>
    </Flex>
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var z,u,h;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Flex gap="3" wrap="wrap">
        {['home', 'settings', 'person', 'search', 'notifications', 'favorite', 'shopping_cart', 'mail', 'check', 'close', 'add', 'remove', 'edit', 'delete', 'download', 'upload', 'visibility', 'visibility_off', 'lock', 'arrow_forward', 'arrow_back', 'expand_more', 'expand_less', 'info'].map(iconName => <Flex key={iconName} direction="column" align="center" gap="2" style={{
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid var(--gray-6)',
        minWidth: '100px'
      }}>
            <Icon name={iconName} size={24} />
            <Text size="1" color="gray" style={{
          textAlign: 'center',
          fontSize: '11px'
        }}>
              {iconName}
            </Text>
          </Flex>)}
      </Flex>
      <Text size="2" color="gray" align="center">
        Browse 2,500+ icons at{' '}
        <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer" style={{
        color: 'var(--accent-9)'
      }}>
          fonts.google.com/icons
        </a>
      </Text>
    </Flex>
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var j,f,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex gap="4">
      <Icon name="favorite" size={32} color="var(--red-9)" />
      <Icon name="star" size={32} color="var(--amber-9)" />
      <Icon name="check_circle" size={32} color="var(--green-9)" />
      <Icon name="info" size={32} color="var(--blue-9)" />
      <Icon name="ac_unit" size={32} color="var(--cyan-9)" />
      <Icon name="palette" size={32} color="var(--indigo-9)" />
    </Flex>
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const B=["Basic","AllSizes","CommonIcons","Colored"];export{i as AllSizes,a as Basic,c as Colored,s as CommonIcons,B as __namedExportsOrder,A as default};
