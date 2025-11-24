import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as x}from"./Icon-D_u5oAGh.js";import{i as h}from"./avatar-Bq0dv-z4.js";import{p as g}from"./box-Ck4Ely5C.js";import{o as u}from"./button-DOEX7M_0.js";import{o as s}from"./card-B3UzYjvl.js";import{p as o}from"./flex-DvmXTkye.js";import{u as a}from"./text-field-XCzB25VA.js";import{p as r}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./get-subtree-wctCFMnl.js";import"./index-Dkb_ZYRU.js";import"./index-DZCApzUK.js";import"./index-5uDXI3f6.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./base-button-1bStz9fB.js";import"./index-UwpWBZco.js";import"./map-prop-values-CWqpaS2P.js";import"./internal-BdPtub1_.js";const J={title:"Components/Card",component:s,parameters:{layout:"padded"},tags:["autodocs"]},i={render:()=>e.jsx(s,{style:{maxWidth:350},children:e.jsxs(o,{gap:"3",align:"center",children:[e.jsx(h,{size:"3",src:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",radius:"full",fallback:"T"}),e.jsxs(g,{children:[e.jsx(r,{as:"div",size:"2",weight:"bold",children:"Teodros Girmay"}),e.jsx(r,{as:"div",size:"2",color:"gray",children:"Engineering"})]})]})})},t={parameters:{layout:"fullscreen"},render:()=>e.jsx(o,{justify:"center",align:"center",style:{minHeight:"100vh",padding:"20px"},children:e.jsx(s,{style:{width:"100%",maxWidth:"600px",padding:"24px"},children:e.jsxs(o,{direction:"column",gap:"5",children:[e.jsx(r,{size:"5",weight:"bold",children:"Sign in"}),e.jsxs(o,{direction:"column",gap:"3",children:[e.jsxs("label",{children:[e.jsx(r,{as:"div",size:"2",mb:"1",weight:"bold",children:"Email"}),e.jsx(a,{type:"email",placeholder:"Enter your email"})]}),e.jsxs("label",{children:[e.jsxs(o,{justify:"between",align:"center",mb:"1",children:[e.jsx(r,{as:"div",size:"2",weight:"bold",children:"Password"}),e.jsx(r,{as:"div",size:"2",color:"violet",style:{cursor:"pointer"},children:"Forgot password?"})]}),e.jsx(a,{type:"password",placeholder:"Enter your password"})]})]}),e.jsxs(o,{direction:"column",gap:"3",mt:"1",children:[e.jsxs(u,{size:"3",style:{width:"100%"},children:["Sign in",e.jsx(x,{name:"arrow_forward",size:18})]}),e.jsxs(o,{gap:"1",justify:"center",children:[e.jsx(r,{size:"2",color:"gray",children:"Don't have an account?"}),e.jsx(r,{size:"2",color:"violet",weight:"bold",style:{cursor:"pointer"},children:"Create account"})]})]})]})})})};var n,l,c;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 350
  }}>
      <Flex gap="3" align="center">
        <Avatar size="3" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" radius="full" fallback="T" />
        <Box>
          <Text as="div" size="2" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="2" color="gray">
            Engineering
          </Text>
        </Box>
      </Flex>
    </Card>
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Flex justify="center" align="center" style={{
    minHeight: '100vh',
    padding: '20px'
  }}>
      <Card style={{
      width: '100%',
      maxWidth: '600px',
      padding: '24px'
    }}>
        <Flex direction="column" gap="5">
        <Text size="5" weight="bold">
          Sign in
        </Text>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root type="email" placeholder="Enter your email" />
          </label>
          <label>
            <Flex justify="between" align="center" mb="1">
              <Text as="div" size="2" weight="bold">
                Password
              </Text>
              <Text as="div" size="2" color="violet" style={{
                cursor: 'pointer'
              }}>
                Forgot password?
              </Text>
            </Flex>
            <TextField.Root type="password" placeholder="Enter your password" />
          </label>
        </Flex>
        <Flex direction="column" gap="3" mt="1">
          <Button size="3" style={{
            width: '100%'
          }}>
            Sign in
            <Icon name="arrow_forward" size={18} />
          </Button>
          <Flex gap="1" justify="center">
            <Text size="2" color="gray">
              Don't have an account?
            </Text>
            <Text size="2" color="violet" weight="bold" style={{
              cursor: 'pointer'
            }}>
              Create account
            </Text>
          </Flex>
        </Flex>
      </Flex>
      </Card>
    </Flex>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const K=["UserProfile","SignInForm"];export{t as SignInForm,i as UserProfile,K as __namedExportsOrder,J as default};
