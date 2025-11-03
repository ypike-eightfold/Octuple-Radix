import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as u}from"./Icon-D_u5oAGh.js";import{r as o}from"./index-BlmOqGMO.js";import{y as ne}from"./index-Dbpq9gcs.js";import{c as G,R as le,T as ie,P as se,O as ce,W as ge,C as de,a as pe,D as me,b as q,s as ue}from"./dialog.props-DhzRsUg9.js";import{r as De}from"./heading-BYMAx3xl.js";import{p as Ae}from"./text-C4SbqUme.js";import{R as he}from"./theme-Cr0RmA42.js";import{v as b,p as D}from"./flex-DvmXTkye.js";import{a as S}from"./require-react-element-vhD-RnfA.js";import{c as fe}from"./index-Dkb_ZYRU.js";import{u as H,d as xe}from"./index-CSHYywJy.js";import{c as ve}from"./index-DW48STyt.js";import{o as i}from"./button-DOEX7M_0.js";import"./index-yBjzXJbu.js";import"./index-CW4F2FBO.js";import"./index-5uDXI3f6.js";import"./index-Dz6nX4BC.js";import"./index-Bq0PzALz.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DZCApzUK.js";import"./index-LsNUdSVz.js";import"./index-CFeakEOz.js";import"./index-CH1-paxq.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./index-BnD1EARC.js";import"./index-UwpWBZco.js";import"./index-CWo8_AO2.js";import"./base-button-1bStz9fB.js";import"./radius.prop-CIarg28h.js";import"./map-prop-values-CWqpaS2P.js";var V="AlertDialog",[ye]=fe(V,[G]),s=G(),k=r=>{const{__scopeAlertDialog:t,...a}=r,n=s(t);return e.jsx(le,{...n,...a,modal:!0})};k.displayName=V;var je="AlertDialogTrigger",J=o.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...n}=r,l=s(a);return e.jsx(ie,{...l,...n,ref:t})});J.displayName=je;var Ce="AlertDialogPortal",K=r=>{const{__scopeAlertDialog:t,...a}=r,n=s(t);return e.jsx(se,{...n,...a})};K.displayName=Ce;var Te="AlertDialogOverlay",Q=o.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...n}=r,l=s(a);return e.jsx(ce,{...l,...n,ref:t})});Q.displayName=Te;var d="AlertDialogContent",[Re,Ne]=ye(d),Ee=xe("AlertDialogContent"),U=o.forwardRef((r,t)=>{const{__scopeAlertDialog:a,children:n,...l}=r,m=s(a),g=o.useRef(null),E=H(t,g),j=o.useRef(null);return e.jsx(ge,{contentName:d,titleName:X,docsSlug:"alert-dialog",children:e.jsx(Re,{scope:a,cancelRef:j,children:e.jsxs(de,{role:"alertdialog",...m,...l,ref:E,onOpenAutoFocus:ve(l.onOpenAutoFocus,c=>{var w;c.preventDefault(),(w=j.current)==null||w.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[e.jsx(Ee,{children:n}),e.jsx(we,{contentRef:g})]})})})});U.displayName=d;var X="AlertDialogTitle",Z=o.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...n}=r,l=s(a);return e.jsx(pe,{...l,...n,ref:t})});Z.displayName=X;var ee="AlertDialogDescription",re=o.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...n}=r,l=s(a);return e.jsx(me,{...l,...n,ref:t})});re.displayName=ee;var Se="AlertDialogAction",te=o.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...n}=r,l=s(a);return e.jsx(q,{...l,...n,ref:t})});te.displayName=Se;var oe="AlertDialogCancel",ae=o.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...n}=r,{cancelRef:l}=Ne(oe,a),m=s(a),g=H(t,l);return e.jsx(q,{...m,...n,ref:g})});ae.displayName=oe;var we=({contentRef:r})=>{const t=`\`${d}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${d}\` by passing a \`${ee}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${d}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return o.useEffect(()=>{var n;document.getElementById((n=r.current)==null?void 0:n.getAttribute("aria-describedby"))||console.warn(t)},[t,r]),null},be=k,Be=J,_e=K,Pe=Q,ze=U,Oe=te,Ie=ae,Fe=Z,We=re;const p=r=>o.createElement(be,{...r});p.displayName="AlertDialog.Root";const A=o.forwardRef(({children:r,...t},a)=>o.createElement(Be,{...t,ref:a,asChild:!0},S(r)));A.displayName="AlertDialog.Trigger";const h=o.forwardRef(({align:r,...t},a)=>{const{align:n,...l}=ue,{className:m}=b({align:r},{align:n}),{className:g,forceMount:E,container:j,...c}=b(t,l);return o.createElement(_e,{container:j,forceMount:E},o.createElement(he,{asChild:!0},o.createElement(Pe,{className:"rt-BaseDialogOverlay rt-AlertDialogOverlay"},o.createElement("div",{className:"rt-BaseDialogScroll rt-AlertDialogScroll"},o.createElement("div",{className:`rt-BaseDialogScrollPadding rt-AlertDialogScrollPadding ${m}`},o.createElement(ze,{...c,ref:a,className:ne("rt-BaseDialogContent","rt-AlertDialogContent",g)}))))))});h.displayName="AlertDialog.Content";const f=o.forwardRef((r,t)=>o.createElement(Fe,{asChild:!0},o.createElement(De,{size:"5",mb:"3",trim:"start",...r,asChild:!1,ref:t})));f.displayName="AlertDialog.Title";const x=o.forwardRef((r,t)=>o.createElement(We,{asChild:!0},o.createElement(Ae,{as:"p",size:"3",...r,asChild:!1,ref:t})));x.displayName="AlertDialog.Description";const v=o.forwardRef(({children:r,...t},a)=>o.createElement(Oe,{...t,ref:a,asChild:!0},S(r)));v.displayName="AlertDialog.Action";const y=o.forwardRef(({children:r,...t},a)=>o.createElement(Ie,{...t,ref:a,asChild:!0},S(r)));y.displayName="AlertDialog.Cancel";const xr={title:"Components/AlertDialog",component:p,parameters:{layout:"padded"},tags:["autodocs"]},C={render:()=>e.jsxs(p,{children:[e.jsx(A,{children:e.jsxs(i,{color:"red",variant:"soft",children:[e.jsx(u,{name:"delete",size:18}),"Delete Account"]})}),e.jsxs(h,{maxWidth:"450px",children:[e.jsx(f,{children:"Delete Account"}),e.jsx(x,{size:"2",children:"Are you sure you want to delete your account? This action cannot be undone. All your data will be permanently removed."}),e.jsxs(D,{gap:"3",mt:"4",justify:"end",children:[e.jsx(y,{children:e.jsx(i,{variant:"soft",color:"gray",children:"Cancel"})}),e.jsx(v,{children:e.jsx(i,{color:"red",children:"Yes, Delete Account"})})]})]})]})},T={render:()=>e.jsxs(p,{children:[e.jsx(A,{children:e.jsxs(i,{children:[e.jsx(u,{name:"save",size:18}),"Save Changes"]})}),e.jsxs(h,{maxWidth:"450px",children:[e.jsx(f,{children:"Save Changes?"}),e.jsx(x,{size:"2",children:"You have unsaved changes. Do you want to save them before leaving this page?"}),e.jsxs(D,{gap:"3",mt:"4",justify:"end",children:[e.jsx(y,{children:e.jsx(i,{variant:"soft",color:"gray",children:"Don't Save"})}),e.jsx(v,{children:e.jsx(i,{children:"Save Changes"})})]})]})]})},R={render:()=>e.jsxs(p,{children:[e.jsx(A,{children:e.jsxs(i,{variant:"soft",children:[e.jsx(u,{name:"logout",size:18}),"Logout"]})}),e.jsxs(h,{maxWidth:"400px",children:[e.jsx(f,{children:"Logout"}),e.jsx(x,{size:"2",children:"Are you sure you want to logout? You'll need to sign in again to access your account."}),e.jsxs(D,{gap:"3",mt:"4",justify:"end",children:[e.jsx(y,{children:e.jsx(i,{variant:"soft",color:"gray",children:"Cancel"})}),e.jsx(v,{children:e.jsx(i,{children:"Logout"})})]})]})]})},N={render:()=>e.jsxs(p,{children:[e.jsx(A,{children:e.jsxs(i,{color:"amber",variant:"soft",children:[e.jsx(u,{name:"warning",size:18}),"Clear Data"]})}),e.jsx(h,{maxWidth:"450px",children:e.jsxs(D,{direction:"column",gap:"3",align:"center",children:[e.jsx(u,{name:"warning",size:48,color:"var(--amber-9)"}),e.jsx(f,{align:"center",children:"Clear All Data?"}),e.jsx(x,{size:"2",align:"center",children:"This will remove all cached data from your browser. This action cannot be undone."}),e.jsxs(D,{gap:"3",mt:"2",width:"100%",justify:"center",children:[e.jsx(y,{children:e.jsx(i,{variant:"soft",color:"gray",children:"Cancel"})}),e.jsx(v,{children:e.jsx(i,{color:"amber",children:"Clear Data"})})]})]})})]})};var B,_,P;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red" variant="soft">
          <Icon name="delete" size={18} />
          Delete Account
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete Account</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to delete your account? This action cannot be undone.
          All your data will be permanently removed.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">
              Yes, Delete Account
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
}`,...(P=(_=C.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var z,O,I;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>
          <Icon name="save" size={18} />
          Save Changes
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Save Changes?</AlertDialog.Title>
        <AlertDialog.Description size="2">
          You have unsaved changes. Do you want to save them before leaving this page?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Don't Save
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button>
              Save Changes
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
}`,...(I=(O=T.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var F,W,L;R.parameters={...R.parameters,docs:{...(F=R.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="soft">
          <Icon name="logout" size={18} />
          Logout
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="400px">
        <AlertDialog.Title>Logout</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to logout? You'll need to sign in again to access your account.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button>
              Logout
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
}`,...(L=(W=R.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var M,$,Y;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="amber" variant="soft">
          <Icon name="warning" size={18} />
          Clear Data
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <Flex direction="column" gap="3" align="center">
          <Icon name="warning" size={48} color="var(--amber-9)" />
          <AlertDialog.Title align="center">Clear All Data?</AlertDialog.Title>
          <AlertDialog.Description size="2" align="center">
            This will remove all cached data from your browser. This action cannot be undone.
          </AlertDialog.Description>

          <Flex gap="3" mt="2" width="100%" justify="center">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="amber">
                Clear Data
              </Button>
            </AlertDialog.Action>
          </Flex>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
}`,...(Y=($=N.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};const vr=["Default","SaveChanges","Logout","WithIcon"];export{C as Default,R as Logout,T as SaveChanges,N as WithIcon,vr as __namedExportsOrder,xr as default};
