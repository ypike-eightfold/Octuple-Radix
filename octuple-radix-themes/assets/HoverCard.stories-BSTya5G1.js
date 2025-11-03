import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as _}from"./Icon-D_u5oAGh.js";import{r as o}from"./index-BlmOqGMO.js";import{y as G}from"./index-Dbpq9gcs.js";import{e as ae,t as F,o as se,v as ie,p}from"./flex-DvmXTkye.js";import{a as ce}from"./require-react-element-vhD-RnfA.js";import{c as K,a as le,A as de,C as pe,b as ue,R as me}from"./theme-Cr0RmA42.js";import{c as u}from"./index-DW48STyt.js";import{c as fe}from"./index-Dkb_ZYRU.js";import{u as xe}from"./index-Dz6nX4BC.js";import{u as he}from"./index-CSHYywJy.js";import{P as ge}from"./index-CFeakEOz.js";import{P as V}from"./index-CH1-paxq.js";import{P as ve}from"./index-CiEb6DFw.js";import{D as Ce}from"./index-Bq0PzALz.js";import{e as k}from"./link-Bi8zDvMs.js";import{i as q}from"./avatar-Bq0dv-z4.js";import{p as X}from"./box-Ck4Ely5C.js";import{p as d}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-CW4F2FBO.js";import"./index-5uDXI3f6.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DZCApzUK.js";import"./index-BnD1EARC.js";import"./index-UwpWBZco.js";import"./index-CWo8_AO2.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./get-subtree-wctCFMnl.js";var N,S="HoverCard",[Y]=fe(S,[K]),E=K(),[Te,z]=Y(S),Z=r=>{const{__scopeHoverCard:n,children:a,open:s,defaultOpen:i,onOpenChange:c,openDelay:x=700,closeDelay:h=300}=r,l=E(n),g=o.useRef(0),m=o.useRef(0),C=o.useRef(!1),f=o.useRef(!1),[T,t]=xe({prop:s,defaultProp:i??!1,onChange:c,caller:S}),w=o.useCallback(()=>{clearTimeout(m.current),g.current=window.setTimeout(()=>t(!0),x)},[x,t]),j=o.useCallback(()=>{clearTimeout(g.current),!C.current&&!f.current&&(m.current=window.setTimeout(()=>t(!1),h))},[h,t]),ne=o.useCallback(()=>t(!1),[t]);return o.useEffect(()=>()=>{clearTimeout(g.current),clearTimeout(m.current)},[]),e.jsx(Te,{scope:n,open:T,onOpenChange:t,onOpen:w,onClose:j,onDismiss:ne,hasSelectionRef:C,isPointerDownOnContentRef:f,children:e.jsx(le,{...l,children:a})})};Z.displayName=S;var ee="HoverCardTrigger",re=o.forwardRef((r,n)=>{const{__scopeHoverCard:a,...s}=r,i=z(ee,a),c=E(a);return e.jsx(de,{asChild:!0,...c,children:e.jsx(ve.a,{"data-state":i.open?"open":"closed",...s,ref:n,onPointerEnter:u(r.onPointerEnter,R(i.onOpen)),onPointerLeave:u(r.onPointerLeave,R(i.onClose)),onFocus:u(r.onFocus,i.onOpen),onBlur:u(r.onBlur,i.onClose),onTouchStart:u(r.onTouchStart,x=>x.preventDefault())})})});re.displayName=ee;var A="HoverCardPortal",[we,je]=Y(A,{forceMount:void 0}),oe=r=>{const{__scopeHoverCard:n,forceMount:a,children:s,container:i}=r,c=z(A,n);return e.jsx(we,{scope:n,forceMount:a,children:e.jsx(V,{present:a||c.open,children:e.jsx(ge,{asChild:!0,container:i,children:s})})})};oe.displayName=A;var b="HoverCardContent",te=o.forwardRef((r,n)=>{const a=je(b,r.__scopeHoverCard),{forceMount:s=a.forceMount,...i}=r,c=z(b,r.__scopeHoverCard);return e.jsx(V,{present:s||c.open,children:e.jsx(ye,{"data-state":c.open?"open":"closed",...i,onPointerEnter:u(r.onPointerEnter,R(c.onOpen)),onPointerLeave:u(r.onPointerLeave,R(c.onClose)),ref:n})})});te.displayName=b;var ye=o.forwardRef((r,n)=>{const{__scopeHoverCard:a,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:c,onInteractOutside:x,...h}=r,l=z(b,a),g=E(a),m=o.useRef(null),C=he(n,m),[f,T]=o.useState(!1);return o.useEffect(()=>{if(f){const t=document.body;return N=t.style.userSelect||t.style.webkitUserSelect,t.style.userSelect="none",t.style.webkitUserSelect="none",()=>{t.style.userSelect=N,t.style.webkitUserSelect=N}}},[f]),o.useEffect(()=>{if(m.current){const t=()=>{T(!1),l.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var j;((j=document.getSelection())==null?void 0:j.toString())!==""&&(l.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",t),()=>{document.removeEventListener("pointerup",t),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!1}}},[l.isPointerDownOnContentRef,l.hasSelectionRef]),o.useEffect(()=>{m.current&&be(m.current).forEach(w=>w.setAttribute("tabindex","-1"))}),e.jsx(Ce,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:x,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:u(c,t=>{t.preventDefault()}),onDismiss:l.onDismiss,children:e.jsx(pe,{...g,...h,onPointerDown:u(h.onPointerDown,t=>{t.currentTarget.contains(t.target)&&T(!0),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!0}),ref:C,style:{...h.style,userSelect:f?"text":void 0,WebkitUserSelect:f?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),He="HoverCardArrow",Pe=o.forwardRef((r,n)=>{const{__scopeHoverCard:a,...s}=r,i=E(a);return e.jsx(ue,{...i,...s,ref:n})});Pe.displayName=He;function R(r){return n=>n.pointerType==="touch"?void 0:r()}function be(r){const n=[],a=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;a.nextNode();)n.push(a.currentNode);return n}var Re=Z,Se=re,Ee=oe,ze=te;const De=["1","2","3"],Oe={...se,size:{type:"enum",className:"rt-r-size",values:De,default:"2",responsive:!0},width:F.width,minWidth:F.minWidth,maxWidth:{...F.maxWidth,default:"480px"},...ae},v=r=>o.createElement(Re,{closeDelay:150,openDelay:200,...r});v.displayName="HoverCard.Root";const D=o.forwardRef(({children:r,className:n,...a},s)=>o.createElement(Se,{ref:s,className:G("rt-HoverCardTrigger",n),...a,asChild:!0},ce(r)));D.displayName="HoverCard.Trigger";const O=o.forwardRef((r,n)=>{const{className:a,forceMount:s,container:i,...c}=ie(r,Oe);return o.createElement(Ee,{container:i,forceMount:s},o.createElement(me,{asChild:!0},o.createElement(ze,{align:"start",sideOffset:8,collisionPadding:10,...c,ref:n,className:G("rt-PopperContent","rt-HoverCardContent",a)})))});O.displayName="HoverCard.Content";const pr={title:"Components/HoverCard",component:v,parameters:{layout:"padded"},tags:["autodocs"]},y={render:()=>e.jsxs(v,{children:[e.jsx(D,{children:e.jsx(k,{href:"#",children:"@octuple"})}),e.jsx(O,{maxWidth:"300px",children:e.jsxs(p,{gap:"3",children:[e.jsx(q,{size:"3",radius:"full",fallback:"O",color:"indigo"}),e.jsxs(X,{children:[e.jsx(d,{as:"div",size:"2",weight:"bold",children:"Octuple Design System"}),e.jsx(d,{as:"div",size:"2",color:"gray",children:"@octuple"}),e.jsx(d,{as:"div",size:"1",style:{marginTop:8},children:"A modern design system built with Radix Themes featuring indigo accents and Poppins font."})]})]})})]})},H={render:()=>e.jsxs(d,{size:"2",children:["Designed by"," ",e.jsxs(v,{children:[e.jsx(D,{children:e.jsx(k,{href:"#",children:"Sarah Johnson"})}),e.jsx(O,{maxWidth:"320px",children:e.jsxs(p,{gap:"3",children:[e.jsx(q,{size:"3",src:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=128&h=128&fit=crop",fallback:"SJ",radius:"full"}),e.jsx(X,{style:{flex:1},children:e.jsxs(p,{direction:"column",gap:"1",children:[e.jsx(d,{size:"2",weight:"bold",children:"Sarah Johnson"}),e.jsx(d,{size:"1",color:"gray",children:"Lead Designer"}),e.jsx(d,{size:"1",style:{marginTop:8},children:"Passionate about creating beautiful and functional user interfaces. 10+ years of experience in product design."}),e.jsxs(p,{gap:"3",mt:"2",children:[e.jsxs(p,{gap:"1",align:"center",children:[e.jsx(_,{name:"work",size:14}),e.jsx(d,{size:"1",color:"gray",children:"Eightfold AI"})]}),e.jsxs(p,{gap:"1",align:"center",children:[e.jsx(_,{name:"location_on",size:14}),e.jsx(d,{size:"1",color:"gray",children:"San Francisco"})]})]})]})})]})})]})," ","and the team."]})},P={render:()=>e.jsx(p,{gap:"2",wrap:"wrap",children:e.jsxs(v,{children:[e.jsx(D,{children:e.jsx(k,{href:"#",children:"Hover for info"})}),e.jsx(O,{maxWidth:"260px",children:e.jsxs(p,{direction:"column",gap:"2",children:[e.jsxs(p,{gap:"2",align:"center",children:[e.jsx(_,{name:"info",size:18,color:"var(--accent-9)"}),e.jsx(d,{size:"2",weight:"bold",children:"Quick Tip"})]}),e.jsx(d,{size:"2",color:"gray",children:"Hover cards are great for showing additional context without cluttering the UI."})]})})]})})};var L,I,W;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <HoverCard.Root>
      <HoverCard.Trigger>
        <Link href="#">@octuple</Link>
      </HoverCard.Trigger>
      <HoverCard.Content maxWidth="300px">
        <Flex gap="3">
          <Avatar size="3" radius="full" fallback="O" color="indigo" />
          <Box>
            <Text as="div" size="2" weight="bold">
              Octuple Design System
            </Text>
            <Text as="div" size="2" color="gray">
              @octuple
            </Text>
            <Text as="div" size="1" style={{
            marginTop: 8
          }}>
              A modern design system built with Radix Themes featuring indigo accents and Poppins font.
            </Text>
          </Box>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
}`,...(W=(I=y.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var M,U,B;H.parameters={...H.parameters,docs:{...(M=H.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Text size="2">
      Designed by{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Sarah Johnson</Link>
        </HoverCard.Trigger>
        <HoverCard.Content maxWidth="320px">
          <Flex gap="3">
            <Avatar size="3" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=128&h=128&fit=crop" fallback="SJ" radius="full" />
            <Box style={{
            flex: 1
          }}>
              <Flex direction="column" gap="1">
                <Text size="2" weight="bold">
                  Sarah Johnson
                </Text>
                <Text size="1" color="gray">
                  Lead Designer
                </Text>
                <Text size="1" style={{
                marginTop: 8
              }}>
                  Passionate about creating beautiful and functional user interfaces.
                  10+ years of experience in product design.
                </Text>
                <Flex gap="3" mt="2">
                  <Flex gap="1" align="center">
                    <Icon name="work" size={14} />
                    <Text size="1" color="gray">Eightfold AI</Text>
                  </Flex>
                  <Flex gap="1" align="center">
                    <Icon name="location_on" size={14} />
                    <Text size="1" color="gray">San Francisco</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>
      {' '}and the team.
    </Text>
}`,...(B=(U=H.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var $,J,Q;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Flex gap="2" wrap="wrap">
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#">Hover for info</Link>
        </HoverCard.Trigger>
        <HoverCard.Content maxWidth="260px">
          <Flex direction="column" gap="2">
            <Flex gap="2" align="center">
              <Icon name="info" size={18} color="var(--accent-9)" />
              <Text size="2" weight="bold">Quick Tip</Text>
            </Flex>
            <Text size="2" color="gray">
              Hover cards are great for showing additional context without cluttering the UI.
            </Text>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>
    </Flex>
}`,...(Q=(J=P.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ur=["Default","UserProfile","QuickInfo"];export{y as Default,P as QuickInfo,H as UserProfile,ur as __namedExportsOrder,pr as default};
