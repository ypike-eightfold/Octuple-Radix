import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as i}from"./Icon-D_u5oAGh.js";import{r as n}from"./index-BlmOqGMO.js";import{y as p}from"./index-Dbpq9gcs.js";import{c as Z}from"./scroll-area-C8qRYAdm.js";import{c as ee,R as ye,A as Pe,P as Te,C as ze,I as Oe,S as Ae,f as Be,g as ke,h as Ge,L as De,a as Le,b as Ve,d as Fe,e as $e,G as Ue,i as We,n as N,j as He,k as Xe,p as Ke}from"./base-menu.props-DcTIVRNs.js";import{H as Ye,R as te}from"./theme-Cr0RmA42.js";import{l as qe,t as ne}from"./icons-D7bXrj8K.js";import{v as oe,p as Je}from"./flex-DvmXTkye.js";import{a as Qe}from"./require-react-element-vhD-RnfA.js";import{c as S}from"./index-DW48STyt.js";import{c as Ze}from"./index-Dkb_ZYRU.js";import{P as et}from"./index-CiEb6DFw.js";import{u as tt}from"./index-DZCApzUK.js";import{u as nt}from"./index-Dz6nX4BC.js";import{b as A}from"./index-CSHYywJy.js";import{o as w}from"./card-B3UzYjvl.js";import{p as v}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./radius.prop-CIarg28h.js";import"./get-subtree-wctCFMnl.js";import"./index-Cpd6F4Jl.js";import"./index-CH1-paxq.js";import"./index-5uDXI3f6.js";import"./index-CWo8_AO2.js";import"./index-BdQq_4o_.js";import"./index-DZ3_ZFrS.js";import"./index-Bq0PzALz.js";import"./index-LsNUdSVz.js";import"./index-CW4F2FBO.js";import"./index-CFeakEOz.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-b_KpNbIe.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./index-BnD1EARC.js";import"./index-UwpWBZco.js";var B="ContextMenu",[ot]=Ze(B,[ee]),d=ee(),[rt,re]=ot(B),ae=t=>{const{__scopeContextMenu:o,children:r,onOpenChange:a,dir:s,modal:c=!0}=t,[x,l]=n.useState(!1),C=d(o),h=tt(a),m=n.useCallback(g=>{l(g),h(g)},[h]);return e.jsx(rt,{scope:o,open:x,onOpenChange:m,modal:c,children:e.jsx(ye,{...C,dir:s,open:x,onOpenChange:m,modal:c,children:r})})};ae.displayName=B;var se="ContextMenuTrigger",ie=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,disabled:a=!1,...s}=t,c=re(se,r),x=d(r),l=n.useRef({x:0,y:0}),C=n.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...l.current})}),h=n.useRef(0),m=n.useCallback(()=>window.clearTimeout(h.current),[]),g=M=>{l.current={x:M.clientX,y:M.clientY},c.onOpenChange(!0)};return n.useEffect(()=>m,[m]),n.useEffect(()=>void(a&&m()),[a,m]),e.jsxs(e.Fragment,{children:[e.jsx(Pe,{...x,virtualRef:C}),e.jsx(et.span,{"data-state":c.open?"open":"closed","data-disabled":a?"":void 0,...s,ref:o,style:{WebkitTouchCallout:"none",...t.style},onContextMenu:a?t.onContextMenu:S(t.onContextMenu,M=>{m(),g(M),M.preventDefault()}),onPointerDown:a?t.onPointerDown:S(t.onPointerDown,b(M=>{m(),h.current=window.setTimeout(()=>g(M),700)})),onPointerMove:a?t.onPointerMove:S(t.onPointerMove,b(m)),onPointerCancel:a?t.onPointerCancel:S(t.onPointerCancel,b(m)),onPointerUp:a?t.onPointerUp:S(t.onPointerUp,b(m))})]})});ie.displayName=se;var at="ContextMenuPortal",ce=t=>{const{__scopeContextMenu:o,...r}=t,a=d(o);return e.jsx(Te,{...a,...r})};ce.displayName=at;var ue="ContextMenuContent",xe=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=re(ue,r),c=d(r),x=n.useRef(!1);return e.jsx(ze,{...c,...a,ref:o,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:l=>{var C;(C=t.onCloseAutoFocus)==null||C.call(t,l),!l.defaultPrevented&&x.current&&l.preventDefault(),x.current=!1},onInteractOutside:l=>{var C;(C=t.onInteractOutside)==null||C.call(t,l),!l.defaultPrevented&&!s.modal&&(x.current=!0)},style:{...t.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});xe.displayName=ue;var st="ContextMenuGroup",le=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(Ue,{...s,...a,ref:o})});le.displayName=st;var it="ContextMenuLabel",me=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(De,{...s,...a,ref:o})});me.displayName=it;var ct="ContextMenuItem",de=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(Oe,{...s,...a,ref:o})});de.displayName=ct;var ut="ContextMenuCheckboxItem",Ce=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(Le,{...s,...a,ref:o})});Ce.displayName=ut;var xt="ContextMenuRadioGroup",pe=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(Fe,{...s,...a,ref:o})});pe.displayName=xt;var lt="ContextMenuRadioItem",Me=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx($e,{...s,...a,ref:o})});Me.displayName=lt;var mt="ContextMenuItemIndicator",he=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(Ve,{...s,...a,ref:o})});he.displayName=mt;var dt="ContextMenuSeparator",fe=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(Ae,{...s,...a,ref:o})});fe.displayName=dt;var Ct="ContextMenuArrow",pt=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(We,{...s,...a,ref:o})});pt.displayName=Ct;var ge="ContextMenuSub",Ie=t=>{const{__scopeContextMenu:o,children:r,onOpenChange:a,open:s,defaultOpen:c}=t,x=d(o),[l,C]=nt({prop:s,defaultProp:c??!1,onChange:a,caller:ge});return e.jsx(Be,{...x,open:l,onOpenChange:C,children:r})};Ie.displayName=ge;var Mt="ContextMenuSubTrigger",ve=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(ke,{...s,...a,ref:o})});ve.displayName=Mt;var ht="ContextMenuSubContent",je=n.forwardRef((t,o)=>{const{__scopeContextMenu:r,...a}=t,s=d(r);return e.jsx(Ge,{...s,...a,ref:o,style:{...t.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});je.displayName=ht;function b(t){return o=>o.pointerType!=="mouse"?t(o):void 0}var ft=ae,gt=ie,Re=ce,It=xe,vt=le,jt=me,Rt=de,St=Ce,Nt=pe,wt=Me,Se=he,bt=fe,_t=Ie,Et=ve,yt=je;const I=t=>n.createElement(ft,{...t});I.displayName="ContextMenu.Root";const j=n.forwardRef(({children:t,...o},r)=>n.createElement(gt,{...o,ref:r,asChild:!0},Qe(t)));j.displayName="ContextMenu.Trigger";const Ne=n.createContext({}),R=n.forwardRef((t,o)=>{const r=Ye(),{size:a=N.size.default,variant:s=N.variant.default,highContrast:c=N.highContrast.default}=t,{className:x,children:l,color:C,container:h,forceMount:m,...g}=oe(t,N),M=C||r.accentColor;return n.createElement(Re,{container:h,forceMount:m},n.createElement(te,{asChild:!0},n.createElement(It,{"data-accent-color":M,alignOffset:-Number(a)*4,collisionPadding:10,...g,asChild:!1,ref:o,className:p("rt-PopperContent","rt-BaseMenuContent","rt-ContextMenuContent",x)},n.createElement(Z,{type:"auto"},n.createElement("div",{className:p("rt-BaseMenuViewport","rt-ContextMenuViewport")},n.createElement(Ne.Provider,{value:n.useMemo(()=>({size:a,variant:s,color:M,highContrast:c}),[a,s,M,c])},l))))))});R.displayName="ContextMenu.Content";const k=n.forwardRef(({className:t,...o},r)=>n.createElement(jt,{...o,asChild:!1,ref:r,className:p("rt-BaseMenuLabel","rt-ContextMenuLabel",t)}));k.displayName="ContextMenu.Label";const u=n.forwardRef((t,o)=>{const{className:r,children:a,color:s=He.color.default,shortcut:c,...x}=t;return n.createElement(Rt,{"data-accent-color":s,...x,ref:o,className:p("rt-reset","rt-BaseMenuItem","rt-ContextMenuItem",r)},n.createElement(A,null,a),c&&n.createElement("div",{className:"rt-BaseMenuShortcut rt-ContextMenuShortcut"},c))});u.displayName="ContextMenu.Item";const Pt=n.forwardRef(({className:t,...o},r)=>n.createElement(vt,{...o,asChild:!1,ref:r,className:p("rt-BaseMenuGroup","rt-ContextMenuGroup",t)}));Pt.displayName="ContextMenu.Group";const we=n.forwardRef(({className:t,...o},r)=>n.createElement(Nt,{...o,asChild:!1,ref:r,className:p("rt-BaseMenuRadioGroup","rt-ContextMenuRadioGroup",t)}));we.displayName="ContextMenu.RadioGroup";const z=n.forwardRef((t,o)=>{const{children:r,className:a,color:s=Ke.color.default,...c}=t;return n.createElement(wt,{...c,asChild:!1,ref:o,"data-accent-color":s,className:p("rt-BaseMenuItem","rt-BaseMenuRadioItem","rt-ContextMenuItem","rt-ContextMenuRadioItem",a)},n.createElement(A,null,r),n.createElement(Se,{className:"rt-BaseMenuItemIndicator rt-ContextMenuItemIndicator"},n.createElement(ne,{className:"rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon"})))});z.displayName="ContextMenu.RadioItem";const O=n.forwardRef((t,o)=>{const{children:r,className:a,shortcut:s,color:c=Xe.color.default,...x}=t;return n.createElement(St,{...x,asChild:!1,ref:o,"data-accent-color":c,className:p("rt-BaseMenuItem","rt-BaseMenuCheckboxItem","rt-ContextMenuItem","rt-ContextMenuCheckboxItem",a)},n.createElement(A,null,r),n.createElement(Se,{className:"rt-BaseMenuItemIndicator rt-ContextMenuItemIndicator"},n.createElement(ne,{className:"rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon"})),s&&n.createElement("div",{className:"rt-BaseMenuShortcut rt-ContextMenuShortcut"},s))});O.displayName="ContextMenu.CheckboxItem";const be=t=>n.createElement(_t,{...t});be.displayName="ContextMenu.Sub";const _e=n.forwardRef((t,o)=>{const{className:r,children:a,...s}=t;return n.createElement(Et,{...s,asChild:!1,ref:o,className:p("rt-BaseMenuItem","rt-BaseMenuSubTrigger","rt-ContextMenuItem","rt-ContextMenuSubTrigger",r)},a,n.createElement("div",{className:"rt-BaseMenuShortcut rt-ContextMenuShortcut"},n.createElement(qe,{className:"rt-BaseMenuSubTriggerIcon rt-ContextMenuSubTriggerIcon"})))});_e.displayName="ContextMenu.SubTrigger";const Ee=n.forwardRef((t,o)=>{const{size:r,variant:a,color:s,highContrast:c}=n.useContext(Ne),{className:x,children:l,container:C,forceMount:h,...m}=oe({size:r,variant:a,color:s,highContrast:c,...t},N);return n.createElement(Re,{container:C,forceMount:h},n.createElement(te,{asChild:!0},n.createElement(yt,{"data-accent-color":s,alignOffset:-Number(r)*4,sideOffset:1,collisionPadding:10,...m,asChild:!1,ref:o,className:p("rt-PopperContent","rt-BaseMenuContent","rt-BaseMenuSubContent","rt-ContextMenuContent","rt-ContextMenuSubContent",x)},n.createElement(Z,{type:"auto"},n.createElement("div",{className:p("rt-BaseMenuViewport","rt-ContextMenuViewport")},l)))))});Ee.displayName="ContextMenu.SubContent";const f=n.forwardRef(({className:t,...o},r)=>n.createElement(bt,{...o,asChild:!1,ref:r,className:p("rt-BaseMenuSeparator","rt-ContextMenuSeparator",t)}));f.displayName="ContextMenu.Separator";const hn={title:"Components/Context Menu",component:I,parameters:{layout:"padded"},tags:["autodocs"]},_={render:()=>e.jsxs(I,{children:[e.jsx(j,{children:e.jsx(w,{style:{padding:"60px 40px",cursor:"context-menu"},children:e.jsx(v,{children:"Right-click here to open context menu"})})}),e.jsxs(R,{children:[e.jsxs(u,{children:[e.jsx(i,{name:"edit",size:18}),"Edit"]}),e.jsxs(u,{children:[e.jsx(i,{name:"content_copy",size:18}),"Duplicate"]}),e.jsx(f,{}),e.jsxs(u,{color:"red",children:[e.jsx(i,{name:"delete",size:18}),"Delete"]})]})]})},E={render:()=>e.jsxs(I,{children:[e.jsx(j,{children:e.jsx(w,{style:{padding:"60px 40px",cursor:"context-menu"},children:e.jsx(v,{children:"Right-click for context menu with submenu"})})}),e.jsxs(R,{children:[e.jsxs(u,{children:[e.jsx(i,{name:"note_add",size:18}),"New File"]}),e.jsxs(u,{children:[e.jsx(i,{name:"create_new_folder",size:18}),"New Folder"]}),e.jsx(f,{}),e.jsxs(be,{children:[e.jsxs(_e,{children:[e.jsx(i,{name:"file_open",size:18}),"Open Recent"]}),e.jsxs(Ee,{children:[e.jsx(u,{children:"Project A"}),e.jsx(u,{children:"Project B"}),e.jsx(u,{children:"Project C"}),e.jsx(f,{}),e.jsx(u,{children:"Clear History"})]})]}),e.jsx(f,{}),e.jsxs(u,{children:[e.jsx(i,{name:"download",size:18}),"Export"]})]})]})},y={render:()=>e.jsxs(I,{children:[e.jsx(j,{children:e.jsx(w,{style:{padding:"60px 40px",cursor:"context-menu"},children:e.jsx(v,{children:"Right-click to toggle options"})})}),e.jsxs(R,{children:[e.jsx(k,{children:"View Options"}),e.jsxs(O,{checked:!0,children:[e.jsx(i,{name:"visibility",size:18}),"Show Sidebar"]}),e.jsxs(O,{checked:!1,children:[e.jsx(i,{name:"grid_view",size:18}),"Show Grid"]}),e.jsxs(O,{children:[e.jsx(i,{name:"code",size:18}),"Show Line Numbers"]})]})]})},P={render:()=>e.jsxs(I,{children:[e.jsx(j,{children:e.jsx(w,{style:{padding:"60px 40px",cursor:"context-menu"},children:e.jsx(v,{children:"Right-click to select view mode"})})}),e.jsxs(R,{children:[e.jsx(k,{children:"View Mode"}),e.jsxs(we,{value:"grid",children:[e.jsxs(z,{value:"list",children:[e.jsx(i,{name:"list",size:18}),"List View"]}),e.jsxs(z,{value:"grid",children:[e.jsx(i,{name:"grid_view",size:18}),"Grid View"]}),e.jsxs(z,{value:"compact",children:[e.jsx(i,{name:"view_compact",size:18}),"Compact View"]})]})]})]})},T={render:()=>e.jsxs(I,{children:[e.jsx(j,{children:e.jsx(w,{style:{padding:"60px 40px",cursor:"context-menu"},children:e.jsxs(Je,{direction:"column",gap:"2",align:"center",children:[e.jsx(i,{name:"description",size:48,color:"var(--gray-9)"}),e.jsx(v,{children:"Document.pdf"}),e.jsx(v,{size:"1",color:"gray",children:"2.4 MB"})]})})}),e.jsxs(R,{children:[e.jsxs(u,{children:[e.jsx(i,{name:"file_open",size:18}),"Open"]}),e.jsxs(u,{children:[e.jsx(i,{name:"visibility",size:18}),"Preview"]}),e.jsx(f,{}),e.jsxs(u,{children:[e.jsx(i,{name:"drive_file_rename_outline",size:18}),"Rename"]}),e.jsxs(u,{children:[e.jsx(i,{name:"content_copy",size:18}),"Duplicate"]}),e.jsx(f,{}),e.jsxs(u,{children:[e.jsx(i,{name:"download",size:18}),"Download"]}),e.jsxs(u,{children:[e.jsx(i,{name:"share",size:18}),"Share"]}),e.jsx(f,{}),e.jsxs(u,{children:[e.jsx(i,{name:"info",size:18}),"Properties"]}),e.jsx(f,{}),e.jsxs(u,{color:"red",children:[e.jsx(i,{name:"delete",size:18}),"Delete"]})]})]})};var G,D,L;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{
        padding: '60px 40px',
        cursor: 'context-menu'
      }}>
          <Text>Right-click here to open context menu</Text>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <Icon name="edit" size={18} />
          Edit
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="content_copy" size={18} />
          Duplicate
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item color="red">
          <Icon name="delete" size={18} />
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
}`,...(L=(D=_.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var V,F,$;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{
        padding: '60px 40px',
        cursor: 'context-menu'
      }}>
          <Text>Right-click for context menu with submenu</Text>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <Icon name="note_add" size={18} />
          New File
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="create_new_folder" size={18} />
          New Folder
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>
            <Icon name="file_open" size={18} />
            Open Recent
          </ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Project A</ContextMenu.Item>
            <ContextMenu.Item>Project B</ContextMenu.Item>
            <ContextMenu.Item>Project C</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Clear History</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <Icon name="download" size={18} />
          Export
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
}`,...($=(F=E.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var U,W,H;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{
        padding: '60px 40px',
        cursor: 'context-menu'
      }}>
          <Text>Right-click to toggle options</Text>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>View Options</ContextMenu.Label>
        <ContextMenu.CheckboxItem checked>
          <Icon name="visibility" size={18} />
          Show Sidebar
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem checked={false}>
          <Icon name="grid_view" size={18} />
          Show Grid
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem>
          <Icon name="code" size={18} />
          Show Line Numbers
        </ContextMenu.CheckboxItem>
      </ContextMenu.Content>
    </ContextMenu.Root>
}`,...(H=(W=y.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var X,K,Y;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{
        padding: '60px 40px',
        cursor: 'context-menu'
      }}>
          <Text>Right-click to select view mode</Text>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>View Mode</ContextMenu.Label>
        <ContextMenu.RadioGroup value="grid">
          <ContextMenu.RadioItem value="list">
            <Icon name="list" size={18} />
            List View
          </ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="grid">
            <Icon name="grid_view" size={18} />
            Grid View
          </ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="compact">
            <Icon name="view_compact" size={18} />
            Compact View
          </ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu.Root>
}`,...(Y=(K=P.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var q,J,Q;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Card style={{
        padding: '60px 40px',
        cursor: 'context-menu'
      }}>
          <Flex direction="column" gap="2" align="center">
            <Icon name="description" size={48} color="var(--gray-9)" />
            <Text>Document.pdf</Text>
            <Text size="1" color="gray">2.4 MB</Text>
          </Flex>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <Icon name="file_open" size={18} />
          Open
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="visibility" size={18} />
          Preview
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <Icon name="drive_file_rename_outline" size={18} />
          Rename
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="content_copy" size={18} />
          Duplicate
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <Icon name="download" size={18} />
          Download
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Icon name="share" size={18} />
          Share
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <Icon name="info" size={18} />
          Properties
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item color="red">
          <Icon name="delete" size={18} />
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const fn=["Default","WithSubmenu","WithCheckboxes","WithRadioGroup","FileActions"];export{_ as Default,T as FileActions,y as WithCheckboxes,P as WithRadioGroup,E as WithSubmenu,fn as __namedExportsOrder,hn as default};
