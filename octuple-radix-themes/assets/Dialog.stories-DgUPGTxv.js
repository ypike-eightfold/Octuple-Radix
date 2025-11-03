import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as g}from"./Icon-D_u5oAGh.js";import{r as o}from"./index-BlmOqGMO.js";import{y as $}from"./index-Dbpq9gcs.js";import{R as k,T as A,s as M,P as V,O as Y,C as _,a as G,D as J,b as L}from"./dialog.props-DhzRsUg9.js";import{r as q}from"./heading-BYMAx3xl.js";import{p as f}from"./text-C4SbqUme.js";import{R as H}from"./theme-Cr0RmA42.js";import{v as D,p as l}from"./flex-DvmXTkye.js";import{a as F}from"./require-react-element-vhD-RnfA.js";import{o as t}from"./button-DOEX7M_0.js";import{u as j}from"./text-field-XCzB25VA.js";import"./index-yBjzXJbu.js";import"./index-DW48STyt.js";import"./index-CSHYywJy.js";import"./index-Dkb_ZYRU.js";import"./index-CW4F2FBO.js";import"./index-5uDXI3f6.js";import"./index-Dz6nX4BC.js";import"./index-Bq0PzALz.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DZCApzUK.js";import"./index-LsNUdSVz.js";import"./index-CFeakEOz.js";import"./index-CH1-paxq.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./index-BnD1EARC.js";import"./index-UwpWBZco.js";import"./index-CWo8_AO2.js";import"./base-button-1bStz9fB.js";import"./radius.prop-CIarg28h.js";import"./map-prop-values-CWqpaS2P.js";import"./internal-BdPtub1_.js";const s=n=>o.createElement(k,{...n,modal:!0});s.displayName="Dialog.Root";const p=o.forwardRef(({children:n,...r},i)=>o.createElement(A,{...r,ref:i,asChild:!0},F(n)));p.displayName="Dialog.Trigger";const u=o.forwardRef(({align:n,...r},i)=>{const{align:N,...w}=M,{className:S}=D({align:n},{align:N}),{className:I,forceMount:W,container:O,...P}=D(r,w);return o.createElement(V,{container:O,forceMount:W},o.createElement(H,{asChild:!0},o.createElement(Y,{className:"rt-BaseDialogOverlay rt-DialogOverlay"},o.createElement("div",{className:"rt-BaseDialogScroll rt-DialogScroll"},o.createElement("div",{className:`rt-BaseDialogScrollPadding rt-DialogScrollPadding ${S}`},o.createElement(_,{...P,ref:i,className:$("rt-BaseDialogContent","rt-DialogContent",I)}))))))});u.displayName="Dialog.Content";const x=o.forwardRef((n,r)=>o.createElement(G,{asChild:!0},o.createElement(q,{size:"5",mb:"3",trim:"start",...n,asChild:!1,ref:r})));x.displayName="Dialog.Title";const h=o.forwardRef((n,r)=>o.createElement(J,{asChild:!0},o.createElement(f,{as:"p",size:"3",...n,asChild:!1,ref:r})));h.displayName="Dialog.Description";const a=o.forwardRef(({children:n,...r},i)=>o.createElement(L,{...r,ref:i,asChild:!0},F(n)));a.displayName="Dialog.Close";const we={title:"Components/Dialog",component:s,parameters:{layout:"padded"},tags:["autodocs"]},c={render:()=>e.jsxs(s,{children:[e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(g,{name:"edit",size:18}),"Edit profile"]})}),e.jsxs(u,{maxWidth:"450px",children:[e.jsx(x,{children:"Edit profile"}),e.jsx(h,{size:"2",mb:"4",children:"Make changes to your profile."}),e.jsxs(l,{direction:"column",gap:"3",children:[e.jsxs("label",{children:[e.jsx(f,{as:"div",size:"2",mb:"1",weight:"bold",children:"Name"}),e.jsx(j,{defaultValue:"Freja Johnsen",placeholder:"Enter your full name"})]}),e.jsxs("label",{children:[e.jsx(f,{as:"div",size:"2",mb:"1",weight:"bold",children:"Email"}),e.jsx(j,{defaultValue:"freja@example.com",placeholder:"Enter your email"})]})]}),e.jsxs(l,{gap:"3",mt:"4",justify:"end",children:[e.jsx(a,{children:e.jsx(t,{variant:"soft",color:"gray",children:"Cancel"})}),e.jsx(a,{children:e.jsx(t,{children:"Save"})})]})]})]})},d={render:()=>e.jsxs(s,{children:[e.jsx(p,{children:e.jsxs(t,{variant:"soft",children:[e.jsx(g,{name:"info",size:18}),"Learn more"]})}),e.jsx(u,{maxWidth:"450px",children:e.jsxs(l,{gap:"3",direction:"column",align:"center",children:[e.jsx(g,{name:"check_circle",size:48,color:"var(--accent-9)"}),e.jsx(x,{align:"center",children:"Success!"}),e.jsx(h,{size:"2",align:"center",children:"Your profile has been updated successfully."}),e.jsx(l,{gap:"3",mt:"4",width:"100%",justify:"center",children:e.jsx(a,{children:e.jsx(t,{size:"3",children:"Got it"})})})]})})]})},m={render:()=>e.jsxs(s,{children:[e.jsx(p,{children:e.jsxs(t,{color:"red",variant:"soft",children:[e.jsx(g,{name:"delete",size:18}),"Delete account"]})}),e.jsxs(u,{maxWidth:"450px",children:[e.jsx(x,{children:"Are you absolutely sure?"}),e.jsx(h,{size:"2",mb:"4",children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."}),e.jsxs(l,{gap:"3",mt:"4",justify:"end",children:[e.jsx(a,{children:e.jsx(t,{variant:"soft",color:"gray",children:"Cancel"})}),e.jsx(a,{children:e.jsx(t,{color:"red",children:"Yes, delete account"})})]})]})]})};var y,C,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <Icon name="edit" size={18} />
          Edit profile
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root defaultValue="Freja Johnsen" placeholder="Enter your full name" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root defaultValue="freja@example.com" placeholder="Enter your email" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var b,v,E;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft">
          <Icon name="info" size={18} />
          Learn more
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Flex gap="3" direction="column" align="center">
          <Icon name="check_circle" size={48} color="var(--accent-9)" />
          <Dialog.Title align="center">Success!</Dialog.Title>
          <Dialog.Description size="2" align="center">
            Your profile has been updated successfully.
          </Dialog.Description>

          <Flex gap="3" mt="4" width="100%" justify="center">
            <Dialog.Close>
              <Button size="3">Got it</Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var z,B,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger>
        <Button color="red" variant="soft">
          <Icon name="delete" size={18} />
          Delete account
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Are you absolutely sure?</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button color="red">Yes, delete account</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const Se=["Basic","WithIcon","AlertDialog"];export{m as AlertDialog,c as Basic,d as WithIcon,Se as __namedExportsOrder,we as default};
