import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as A}from"./Icon-D_u5oAGh.js";import{r as n}from"./index-BlmOqGMO.js";import{y as ue}from"./index-Dbpq9gcs.js";import{e as me,t as _,o as ve,v as he,p as d}from"./flex-DvmXTkye.js";import{a as U}from"./require-react-element-vhD-RnfA.js";import{c as V,a as fe,A as Z,C as xe,b as ge,R as Pe}from"./theme-Cr0RmA42.js";import{c as j}from"./index-DW48STyt.js";import{u as J,c as Ce}from"./index-CSHYywJy.js";import{c as je}from"./index-Dkb_ZYRU.js";import{D as ye}from"./index-Bq0PzALz.js";import{h as Re,R as we,u as ze,F as Te}from"./index-LsNUdSVz.js";import{u as Ee}from"./index-CW4F2FBO.js";import{P as Fe}from"./index-CFeakEOz.js";import{P as Q}from"./index-CH1-paxq.js";import{P as X}from"./index-CiEb6DFw.js";import{u as Ae}from"./index-Dz6nX4BC.js";import{o as u}from"./button-DOEX7M_0.js";import{p}from"./text-C4SbqUme.js";import{u as I}from"./text-field-XCzB25VA.js";import"./index-yBjzXJbu.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DZCApzUK.js";import"./index-5uDXI3f6.js";import"./index-BnD1EARC.js";import"./index-UwpWBZco.js";import"./index-CWo8_AO2.js";import"./base-button-1bStz9fB.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./map-prop-values-CWqpaS2P.js";import"./internal-BdPtub1_.js";var b="Popover",[ee]=je(b,[V]),y=V(),[Oe,f]=ee(b),oe=o=>{const{__scopePopover:t,children:r,open:a,defaultOpen:s,onOpenChange:i,modal:c=!1}=o,l=y(t),m=n.useRef(null),[v,R]=n.useState(!1),[w,x]=Ae({prop:a,defaultProp:s??!1,onChange:i,caller:b});return e.jsx(fe,{...l,children:e.jsx(Oe,{scope:t,contentId:Ee(),triggerRef:m,open:w,onOpenChange:x,onOpenToggle:n.useCallback(()=>x(S=>!S),[x]),hasCustomAnchor:v,onCustomAnchorAdd:n.useCallback(()=>R(!0),[]),onCustomAnchorRemove:n.useCallback(()=>R(!1),[]),modal:c,children:r})})};oe.displayName=b;var re="PopoverAnchor",te=n.forwardRef((o,t)=>{const{__scopePopover:r,...a}=o,s=f(re,r),i=y(r),{onCustomAnchorAdd:c,onCustomAnchorRemove:l}=s;return n.useEffect(()=>(c(),()=>l()),[c,l]),e.jsx(Z,{...i,...a,ref:t})});te.displayName=re;var ne="PopoverTrigger",se=n.forwardRef((o,t)=>{const{__scopePopover:r,...a}=o,s=f(ne,r),i=y(r),c=J(t,s.triggerRef),l=e.jsx(X.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":de(s.open),...a,ref:c,onClick:j(o.onClick,s.onOpenToggle)});return s.hasCustomAnchor?l:e.jsx(Z,{asChild:!0,...i,children:l})});se.displayName=ne;var N="PopoverPortal",[be,Se]=ee(N,{forceMount:void 0}),ie=o=>{const{__scopePopover:t,forceMount:r,children:a,container:s}=o,i=f(N,t);return e.jsx(be,{scope:t,forceMount:r,children:e.jsx(Q,{present:r||i.open,children:e.jsx(Fe,{asChild:!0,container:s,children:a})})})};ie.displayName=N;var C="PopoverContent",ae=n.forwardRef((o,t)=>{const r=Se(C,o.__scopePopover),{forceMount:a=r.forceMount,...s}=o,i=f(C,o.__scopePopover);return e.jsx(Q,{present:a||i.open,children:i.modal?e.jsx(Ne,{...s,ref:t}):e.jsx(Ie,{...s,ref:t})})});ae.displayName=C;var _e=Ce("PopoverContent.RemoveScroll"),Ne=n.forwardRef((o,t)=>{const r=f(C,o.__scopePopover),a=n.useRef(null),s=J(t,a),i=n.useRef(!1);return n.useEffect(()=>{const c=a.current;if(c)return Re(c)},[]),e.jsx(we,{as:_e,allowPinchZoom:!0,children:e.jsx(ce,{...o,ref:s,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:j(o.onCloseAutoFocus,c=>{var l;c.preventDefault(),i.current||(l=r.triggerRef.current)==null||l.focus()}),onPointerDownOutside:j(o.onPointerDownOutside,c=>{const l=c.detail.originalEvent,m=l.button===0&&l.ctrlKey===!0,v=l.button===2||m;i.current=v},{checkForDefaultPrevented:!1}),onFocusOutside:j(o.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1})})})}),Ie=n.forwardRef((o,t)=>{const r=f(C,o.__scopePopover),a=n.useRef(!1),s=n.useRef(!1);return e.jsx(ce,{...o,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var c,l;(c=o.onCloseAutoFocus)==null||c.call(o,i),i.defaultPrevented||(a.current||(l=r.triggerRef.current)==null||l.focus(),i.preventDefault()),a.current=!1,s.current=!1},onInteractOutside:i=>{var m,v;(m=o.onInteractOutside)==null||m.call(o,i),i.defaultPrevented||(a.current=!0,i.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const c=i.target;((v=r.triggerRef.current)==null?void 0:v.contains(c))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&s.current&&i.preventDefault()}})}),ce=n.forwardRef((o,t)=>{const{__scopePopover:r,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:i,disableOutsidePointerEvents:c,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:v,onInteractOutside:R,...w}=o,x=f(C,r),S=y(r);return ze(),e.jsx(Te,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:s,onUnmountAutoFocus:i,children:e.jsx(ye,{asChild:!0,disableOutsidePointerEvents:c,onInteractOutside:R,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:v,onDismiss:()=>x.onOpenChange(!1),children:e.jsx(xe,{"data-state":de(x.open),role:"dialog",id:x.contentId,...S,...w,ref:t,style:{...w.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),le="PopoverClose",pe=n.forwardRef((o,t)=>{const{__scopePopover:r,...a}=o,s=f(le,r);return e.jsx(X.button,{type:"button",...a,ref:t,onClick:j(o.onClick,()=>s.onOpenChange(!1))})});pe.displayName=le;var Be="PopoverArrow",Me=n.forwardRef((o,t)=>{const{__scopePopover:r,...a}=o,s=y(r);return e.jsx(ge,{...s,...a,ref:t})});Me.displayName=Be;function de(o){return o?"open":"closed"}var De=oe,ke=te,We=se,Le=ie,$e=ae,He=pe;const Ge=["1","2","3","4"],qe={...ve,size:{type:"enum",className:"rt-r-size",values:Ge,default:"2",responsive:!0},width:_.width,minWidth:_.minWidth,maxWidth:{..._.maxWidth,default:"480px"},...me},h=o=>n.createElement(De,{...o});h.displayName="Popover.Root";const g=n.forwardRef(({children:o,...t},r)=>n.createElement(We,{...t,ref:r,asChild:!0},U(o)));g.displayName="Popover.Trigger";const P=n.forwardRef((o,t)=>{const{className:r,forceMount:a,container:s,...i}=he(o,qe);return n.createElement(Le,{container:s,forceMount:a},n.createElement(Pe,{asChild:!0},n.createElement($e,{align:"start",sideOffset:8,collisionPadding:10,...i,ref:t,className:ue("rt-PopperContent","rt-PopoverContent",r)})))});P.displayName="Popover.Content";const O=n.forwardRef(({children:o,...t},r)=>n.createElement(He,{...t,ref:r,asChild:!0},U(o)));O.displayName="Popover.Close";const Ke=n.forwardRef(({children:o,...t},r)=>n.createElement(ke,{...t,ref:r}));Ke.displayName="Popover.Anchor";const Fo={title:"Components/Popover",component:h,parameters:{layout:"padded"},tags:["autodocs"]},z={render:()=>e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs(u,{variant:"soft",children:[e.jsx(A,{name:"more_horiz",size:18}),"Open Popover"]})}),e.jsx(P,{style:{width:300},children:e.jsxs(d,{direction:"column",gap:"3",children:[e.jsx(p,{size:"2",weight:"bold",children:"Popover Title"}),e.jsx(p,{size:"2",color:"gray",children:"This is a popover with some content. You can put any content here."}),e.jsx(d,{gap:"2",justify:"end",children:e.jsx(O,{children:e.jsx(u,{variant:"soft",color:"gray",size:"2",children:"Close"})})})]})})]})},T={render:()=>e.jsxs(h,{children:[e.jsx(g,{children:e.jsxs(u,{children:[e.jsx(A,{name:"edit",size:18}),"Edit Profile"]})}),e.jsx(P,{style:{width:360},children:e.jsxs(d,{direction:"column",gap:"3",children:[e.jsx(p,{size:"3",weight:"bold",children:"Edit Profile"}),e.jsxs(d,{direction:"column",gap:"2",children:[e.jsx(p,{as:"label",size:"2",weight:"bold",children:"Name"}),e.jsx(I,{placeholder:"Enter your name"})]}),e.jsxs(d,{direction:"column",gap:"2",children:[e.jsx(p,{as:"label",size:"2",weight:"bold",children:"Email"}),e.jsx(I,{type:"email",placeholder:"Enter your email"})]}),e.jsxs(d,{gap:"2",justify:"end",mt:"2",children:[e.jsx(O,{children:e.jsx(u,{variant:"soft",color:"gray",size:"2",children:"Cancel"})}),e.jsx(O,{children:e.jsx(u,{size:"2",children:"Save"})})]})]})})]})},E={render:()=>e.jsxs(h,{children:[e.jsx(g,{children:e.jsx(u,{variant:"ghost",size:"2",style:{aspectRatio:"1",padding:0,width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(A,{name:"info",size:20})})}),e.jsx(P,{style:{width:280},children:e.jsxs(d,{direction:"column",gap:"2",children:[e.jsxs(d,{gap:"2",align:"center",children:[e.jsx(A,{name:"info",size:20,color:"var(--accent-9)"}),e.jsx(p,{size:"3",weight:"bold",children:"Information"})]}),e.jsx(p,{size:"2",color:"gray",children:"Click on any item to learn more about it. Hover over icons for quick tooltips."})]})})]})},F={render:()=>e.jsxs(d,{gap:"3",children:[e.jsxs(h,{children:[e.jsx(g,{children:e.jsx(u,{size:"1",children:"Size 1"})}),e.jsx(P,{style:{width:200},children:e.jsx(p,{size:"1",children:"Small popover content"})})]}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsx(u,{size:"2",children:"Size 2"})}),e.jsx(P,{style:{width:250},children:e.jsx(p,{size:"2",children:"Medium popover content"})})]}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsx(u,{size:"3",children:"Size 3"})}),e.jsx(P,{style:{width:300},children:e.jsx(p,{size:"3",children:"Large popover content"})})]})]})};var B,M,D;z.parameters={...z.parameters,docs:{...(B=z.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">
          <Icon name="more_horiz" size={18} />
          Open Popover
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{
      width: 300
    }}>
        <Flex direction="column" gap="3">
          <Text size="2" weight="bold">Popover Title</Text>
          <Text size="2" color="gray">
            This is a popover with some content. You can put any content here.
          </Text>
          <Flex gap="2" justify="end">
            <Popover.Close>
              <Button variant="soft" color="gray" size="2">
                Close
              </Button>
            </Popover.Close>
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover.Root>
}`,...(D=(M=z.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var k,W,L;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Popover.Root>
      <Popover.Trigger>
        <Button>
          <Icon name="edit" size={18} />
          Edit Profile
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{
      width: 360
    }}>
        <Flex direction="column" gap="3">
          <Text size="3" weight="bold">Edit Profile</Text>
          <Flex direction="column" gap="2">
            <Text as="label" size="2" weight="bold">
              Name
            </Text>
            <TextField.Root placeholder="Enter your name" />
          </Flex>
          <Flex direction="column" gap="2">
            <Text as="label" size="2" weight="bold">
              Email
            </Text>
            <TextField.Root type="email" placeholder="Enter your email" />
          </Flex>
          <Flex gap="2" justify="end" mt="2">
            <Popover.Close>
              <Button variant="soft" color="gray" size="2">
                Cancel
              </Button>
            </Popover.Close>
            <Popover.Close>
              <Button size="2">
                Save
              </Button>
            </Popover.Close>
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover.Root>
}`,...(L=(W=T.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var $,H,G;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Popover.Root>
      <Popover.Trigger>
        <Button variant="ghost" size="2" style={{
        aspectRatio: '1',
        padding: 0,
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Icon name="info" size={20} />
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{
      width: 280
    }}>
        <Flex direction="column" gap="2">
          <Flex gap="2" align="center">
            <Icon name="info" size={20} color="var(--accent-9)" />
            <Text size="3" weight="bold">Information</Text>
          </Flex>
          <Text size="2" color="gray">
            Click on any item to learn more about it. Hover over icons for quick tooltips.
          </Text>
        </Flex>
      </Popover.Content>
    </Popover.Root>
}`,...(G=(H=E.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var q,K,Y;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Flex gap="3">
      <Popover.Root>
        <Popover.Trigger>
          <Button size="1">Size 1</Button>
        </Popover.Trigger>
        <Popover.Content style={{
        width: 200
      }}>
          <Text size="1">Small popover content</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button size="2">Size 2</Button>
        </Popover.Trigger>
        <Popover.Content style={{
        width: 250
      }}>
          <Text size="2">Medium popover content</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button size="3">Size 3</Button>
        </Popover.Trigger>
        <Popover.Content style={{
        width: 300
      }}>
          <Text size="3">Large popover content</Text>
        </Popover.Content>
      </Popover.Root>
    </Flex>
}`,...(Y=(K=F.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const Ao=["Default","WithForm","WithIcon","AllSizes"];export{F as AllSizes,z as Default,T as WithForm,E as WithIcon,Ao as __namedExportsOrder,Fo as default};
