import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as o}from"./Icon-D_u5oAGh.js";import{p as l}from"./box-Ck4Ely5C.js";import{p as t}from"./flex-DvmXTkye.js";import{o as U}from"./button-DOEX7M_0.js";import{I as V,h as H,g as M,y as R,B as f,v as u}from"./dropdown-menu-ClpX7l9K.js";import{o as s}from"./icon-button-C6Cl8Lr1.js";import{i as $}from"./avatar-Bq0dv-z4.js";import{p as r}from"./text-C4SbqUme.js";import{e as P}from"./badge-BMm2Ttez.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./index-CSHYywJy.js";import"./base-button-1bStz9fB.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./index-UwpWBZco.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./map-prop-values-CWqpaS2P.js";import"./scroll-area-C8qRYAdm.js";import"./get-subtree-wctCFMnl.js";import"./index-Cpd6F4Jl.js";import"./index-CH1-paxq.js";import"./index-5uDXI3f6.js";import"./index-Dkb_ZYRU.js";import"./index-DZCApzUK.js";import"./index-CWo8_AO2.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./base-menu.props-DcTIVRNs.js";import"./index-DZ3_ZFrS.js";import"./index-Bq0PzALz.js";import"./index-LsNUdSVz.js";import"./index-CW4F2FBO.js";import"./theme-Cr0RmA42.js";import"./index-BnD1EARC.js";import"./index-CFeakEOz.js";import"./index-Dz6nX4BC.js";import"./index-b_KpNbIe.js";import"./icons-D7bXrj8K.js";import"./require-react-element-vhD-RnfA.js";const x=({logo:g,links:b=[],user:a,onLogout:E,actions:J})=>e.jsx(l,{className:"navbar-root",children:e.jsxs(t,{justify:"between",align:"center",className:"navbar-container",children:[e.jsxs(t,{align:"center",gap:"6",children:[g&&e.jsx(l,{className:"navbar-logo",children:g}),b.length>0&&e.jsx(t,{gap:"1",className:"navbar-links",children:b.map((i,q)=>e.jsx(U,{variant:"ghost",asChild:!0,children:e.jsxs("a",{href:i.href,className:"navbar-link",children:[i.icon&&e.jsx(o,{name:i.icon,size:18}),i.label]})},q))})]}),e.jsxs(t,{align:"center",gap:"3",children:[J,a&&e.jsxs(V,{children:[e.jsx(H,{children:e.jsx(s,{variant:"ghost",style:{cursor:"pointer"},children:e.jsx($,{src:a.avatar,fallback:a.name.charAt(0),size:"2",radius:"full"})})}),e.jsxs(M,{children:[e.jsx(R,{children:e.jsxs(t,{direction:"column",gap:"1",children:[e.jsx(l,{children:a.name}),a.email&&e.jsx(l,{style:{fontSize:"12px",color:"var(--gray-11)"},children:a.email})]})}),e.jsx(f,{}),e.jsxs(u,{children:[e.jsx(o,{name:"person",size:18}),"Profile"]}),e.jsxs(u,{children:[e.jsx(o,{name:"settings",size:18}),"Settings"]}),e.jsx(f,{}),e.jsxs(u,{color:"red",onClick:E,children:[e.jsx(o,{name:"logout",size:18}),"Logout"]})]})]})]})]})});try{x.displayName="Navbar",x.__docgenInfo={description:"",displayName:"Navbar",props:{logo:{defaultValue:null,description:"Logo/brand element",name:"logo",required:!1,type:{name:"ReactNode"}},links:{defaultValue:{value:"[]"},description:"Navigation links",name:"links",required:!1,type:{name:"NavbarLink[] | undefined"}},user:{defaultValue:null,description:"User info (shows avatar if provided)",name:"user",required:!1,type:{name:"{ name: string; email?: string | undefined; avatar?: string | undefined; } | undefined"}},onLogout:{defaultValue:null,description:"Callback when logout is clicked",name:"onLogout",required:!1,type:{name:"(() => void) | undefined"}},actions:{defaultValue:null,description:"Additional action buttons",name:"actions",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ee={title:"Components/Navbar",component:x,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={args:{logo:e.jsx(r,{size:"5",weight:"bold",children:"Octuple"}),links:[{label:"Dashboard",href:"#dashboard"},{label:"Projects",href:"#projects"},{label:"Team",href:"#team"},{label:"Settings",href:"#settings"}],user:{name:"John Doe",email:"john@example.com"},onLogout:()=>alert("Logout clicked!")}},c={args:{logo:e.jsx(r,{size:"5",weight:"bold",children:"Octuple"}),links:[{label:"Dashboard",href:"#dashboard",icon:"dashboard"},{label:"Analytics",href:"#analytics",icon:"analytics"},{label:"Messages",href:"#messages",icon:"mail"},{label:"Calendar",href:"#calendar",icon:"calendar_month"}],user:{name:"Jane Smith",email:"jane@example.com",avatar:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=64&h=64&fit=crop"},onLogout:()=>alert("Logout clicked!")}},m={args:{logo:e.jsx(r,{size:"5",weight:"bold",children:"Octuple"}),links:[{label:"Home",href:"#home"},{label:"Explore",href:"#explore"},{label:"Library",href:"#library"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"ghost",children:e.jsx(o,{name:"search",size:20})}),e.jsxs(s,{variant:"ghost",style:{position:"relative"},children:[e.jsx(o,{name:"notifications",size:20}),e.jsx(P,{color:"red",style:{position:"absolute",top:"4px",right:"4px",minWidth:"16px",height:"16px",padding:"0 4px"},children:"3"})]})]}),user:{name:"Alex Johnson",email:"alex@example.com"},onLogout:()=>alert("Logout clicked!")}},p={args:{logo:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(o,{name:"dashboard",size:24,style:{color:"var(--indigo-9)"}}),e.jsx(r,{size:"5",weight:"bold",children:"Brand"})]}),user:{name:"User",email:"user@example.com"},onLogout:()=>alert("Logout clicked!")}},d={args:{logo:e.jsx(r,{size:"5",weight:"bold",children:"Public Site"}),links:[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Contact",href:"#contact"}]}},h={args:{logo:e.jsx(r,{size:"5",weight:"bold",children:"Shop"}),links:[{label:"Products",href:"#products"},{label:"Categories",href:"#categories"},{label:"Deals",href:"#deals"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"ghost",children:e.jsx(o,{name:"favorite_border",size:20})}),e.jsxs(s,{variant:"ghost",style:{position:"relative"},children:[e.jsx(o,{name:"shopping_cart",size:20}),e.jsx(P,{color:"indigo",style:{position:"absolute",top:"4px",right:"4px",minWidth:"16px",height:"16px",padding:"0 4px"},children:"5"})]})]}),user:{name:"Shopper",email:"shopper@example.com"},onLogout:()=>alert("Logout clicked!")}};var j,v,y;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    logo: <Text size="5" weight="bold">Octuple</Text>,
    links: [{
      label: 'Dashboard',
      href: '#dashboard'
    }, {
      label: 'Projects',
      href: '#projects'
    }, {
      label: 'Team',
      href: '#team'
    }, {
      label: 'Settings',
      href: '#settings'
    }],
    user: {
      name: 'John Doe',
      email: 'john@example.com'
    },
    onLogout: () => alert('Logout clicked!')
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var z,L,k;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    logo: <Text size="5" weight="bold">Octuple</Text>,
    links: [{
      label: 'Dashboard',
      href: '#dashboard',
      icon: 'dashboard'
    }, {
      label: 'Analytics',
      href: '#analytics',
      icon: 'analytics'
    }, {
      label: 'Messages',
      href: '#messages',
      icon: 'mail'
    }, {
      label: 'Calendar',
      href: '#calendar',
      icon: 'calendar_month'
    }],
    user: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=64&h=64&fit=crop'
    },
    onLogout: () => alert('Logout clicked!')
  }
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var I,S,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    logo: <Text size="5" weight="bold">Octuple</Text>,
    links: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'Explore',
      href: '#explore'
    }, {
      label: 'Library',
      href: '#library'
    }],
    actions: <>
        <IconButton variant="ghost">
          <Icon name="search" size={20} />
        </IconButton>
        <IconButton variant="ghost" style={{
        position: 'relative'
      }}>
          <Icon name="notifications" size={20} />
          <Badge color="red" style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          minWidth: '16px',
          height: '16px',
          padding: '0 4px'
        }}>
            3
          </Badge>
        </IconButton>
      </>,
    user: {
      name: 'Alex Johnson',
      email: 'alex@example.com'
    },
    onLogout: () => alert('Logout clicked!')
  }
}`,...(N=(S=m.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,_,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    logo: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="dashboard" size={24} style={{
        color: 'var(--indigo-9)'
      }} />
        <Text size="5" weight="bold">Brand</Text>
      </div>,
    user: {
      name: 'User',
      email: 'user@example.com'
    },
    onLogout: () => alert('Logout clicked!')
  }
}`,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var T,A,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    logo: <Text size="5" weight="bold">Public Site</Text>,
    links: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'About',
      href: '#about'
    }, {
      label: 'Services',
      href: '#services'
    }, {
      label: 'Contact',
      href: '#contact'
    }]
  }
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var D,W,O;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    logo: <Text size="5" weight="bold">Shop</Text>,
    links: [{
      label: 'Products',
      href: '#products'
    }, {
      label: 'Categories',
      href: '#categories'
    }, {
      label: 'Deals',
      href: '#deals'
    }],
    actions: <>
        <IconButton variant="ghost">
          <Icon name="favorite_border" size={20} />
        </IconButton>
        <IconButton variant="ghost" style={{
        position: 'relative'
      }}>
          <Icon name="shopping_cart" size={20} />
          <Badge color="indigo" style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          minWidth: '16px',
          height: '16px',
          padding: '0 4px'
        }}>
            5
          </Badge>
        </IconButton>
      </>,
    user: {
      name: 'Shopper',
      email: 'shopper@example.com'
    },
    onLogout: () => alert('Logout clicked!')
  }
}`,...(O=(W=h.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const Je=["Default","WithIcons","WithActions","MinimalNavbar","WithoutUser","EcommerceNavbar"];export{n as Default,h as EcommerceNavbar,p as MinimalNavbar,m as WithActions,c as WithIcons,d as WithoutUser,Je as __namedExportsOrder,Ee as default};
