import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p,R as T}from"./index-BlmOqGMO.js";import{c as J}from"./index-DW48STyt.js";import{c as Q}from"./index-Dkb_ZYRU.js";import{c as P,R as X,I as A}from"./index-b_KpNbIe.js";import{P as f}from"./index-CiEb6DFw.js";import{c as L,R as Y,I as Z}from"./index-BEDZMEqW.js";import{u as oo}from"./index-CWo8_AO2.js";import{I as a}from"./Icon-D_u5oAGh.js";import"./index-yBjzXJbu.js";import"./index-DZ3_ZFrS.js";import"./index-CSHYywJy.js";import"./index-CW4F2FBO.js";import"./index-5uDXI3f6.js";import"./index-DZCApzUK.js";import"./index-Dz6nX4BC.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-ChP4uSaL.js";var eo="Separator",N="horizontal",ro=["horizontal","vertical"],V=p.forwardRef((e,r)=>{const{decorative:t,orientation:n=N,...l}=e,s=ao(n)?n:N,h=t?{role:"none"}:{"aria-orientation":s==="vertical"?s:void 0,role:"separator"};return o.jsx(f.div,{"data-orientation":s,...h,...l,ref:r})});V.displayName=eo;function ao(e){return ro.includes(e)}var no=V,j="Toolbar",[to]=Q(j,[P,L]),v=P(),$=L(),[lo,M]=to(j),q=p.forwardRef((e,r)=>{const{__scopeToolbar:t,orientation:n="horizontal",dir:l,loop:s=!0,...z}=e,h=v(t),x=oo(l);return o.jsx(lo,{scope:t,orientation:n,dir:x,children:o.jsx(X,{asChild:!0,...h,orientation:n,dir:x,loop:s,children:o.jsx(f.div,{role:"toolbar","aria-orientation":n,dir:x,...z,ref:r})})})});q.displayName=j;var F="ToolbarSeparator",D=p.forwardRef((e,r)=>{const{__scopeToolbar:t,...n}=e,l=M(F,t);return o.jsx(no,{orientation:l.orientation==="horizontal"?"vertical":"horizontal",...n,ref:r})});D.displayName=F;var io="ToolbarButton",y=p.forwardRef((e,r)=>{const{__scopeToolbar:t,...n}=e,l=v(t);return o.jsx(A,{asChild:!0,...l,focusable:!e.disabled,children:o.jsx(f.button,{type:"button",...n,ref:r})})});y.displayName=io;var so="ToolbarLink",U=p.forwardRef((e,r)=>{const{__scopeToolbar:t,...n}=e,l=v(t);return o.jsx(A,{asChild:!0,...l,focusable:!0,children:o.jsx(f.a,{...n,ref:r,onKeyDown:J(e.onKeyDown,s=>{s.key===" "&&s.currentTarget.click()})})})});U.displayName=so;var K="ToolbarToggleGroup",H=p.forwardRef((e,r)=>{const{__scopeToolbar:t,...n}=e,l=M(K,t),s=$(t);return o.jsx(Y,{"data-orientation":l.orientation,dir:l.dir,...s,...n,ref:r,rovingFocus:!1})});H.displayName=K;var co="ToolbarToggleItem",W=p.forwardRef((e,r)=>{const{__scopeToolbar:t,...n}=e,l=$(t),s={__scopeToolbar:e.__scopeToolbar};return o.jsx(y,{asChild:!0,...s,children:o.jsx(Z,{...l,...n,ref:r})})});W.displayName=co;var mo=q,po=D,uo=y,To=U,bo=H,go=W;const m=T.forwardRef(({children:e,orientation:r="horizontal",loop:t=!0,...n},l)=>o.jsx(mo,{ref:l,className:`toolbar-root toolbar-${r}`,orientation:r,loop:t,...n,children:e}));m.displayName="Toolbar";const i=T.forwardRef((e,r)=>o.jsx(uo,{ref:r,className:"toolbar-button",...e}));i.displayName="ToolbarButton";const d=T.forwardRef((e,r)=>o.jsx(po,{ref:r,className:"toolbar-separator",...e}));d.displayName="ToolbarSeparator";const I=T.forwardRef((e,r)=>o.jsx(To,{ref:r,className:"toolbar-link",...e}));I.displayName="ToolbarLink";const u=bo,c=T.forwardRef((e,r)=>o.jsx(go,{ref:r,className:"toolbar-toggle-item",...e}));c.displayName="ToolbarToggleItem";try{m.displayName="Toolbar",m.__docgenInfo={description:"",displayName:"Toolbar",props:{orientation:{defaultValue:{value:"horizontal"},description:"Orientation of the toolbar",name:"orientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},loop:{defaultValue:{value:"true"},description:"Whether to loop keyboard navigation",name:"loop",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{i.displayName="ToolbarButton",i.__docgenInfo={description:"",displayName:"ToolbarButton",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{d.displayName="ToolbarSeparator",d.__docgenInfo={description:"",displayName:"ToolbarSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{I.displayName="ToolbarLink",I.__docgenInfo={description:"",displayName:"ToolbarLink",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{u.displayName="ToolbarToggleGroup",u.__docgenInfo={description:"",displayName:"ToolbarToggleGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{c.displayName="ToolbarToggleItem",c.__docgenInfo={description:"",displayName:"ToolbarToggleItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Po={title:"Components/Toolbar",component:m,parameters:{layout:"padded"},tags:["autodocs"]},b={render:()=>o.jsxs(m,{children:[o.jsx(i,{children:o.jsx(a,{name:"undo",size:18})}),o.jsx(i,{children:o.jsx(a,{name:"redo",size:18})}),o.jsx(d,{}),o.jsxs(u,{type:"multiple",children:[o.jsx(c,{value:"bold",children:o.jsx(a,{name:"format_bold",size:18})}),o.jsx(c,{value:"italic",children:o.jsx(a,{name:"format_italic",size:18})}),o.jsx(c,{value:"underline",children:o.jsx(a,{name:"format_underlined",size:18})})]}),o.jsx(d,{}),o.jsxs(u,{type:"single",children:[o.jsx(c,{value:"left",children:o.jsx(a,{name:"format_align_left",size:18})}),o.jsx(c,{value:"center",children:o.jsx(a,{name:"format_align_center",size:18})}),o.jsx(c,{value:"right",children:o.jsx(a,{name:"format_align_right",size:18})})]})]})},g={render:()=>o.jsxs(m,{children:[o.jsx(i,{"aria-label":"Undo",children:o.jsx(a,{name:"undo",size:18})}),o.jsx(i,{"aria-label":"Redo",children:o.jsx(a,{name:"redo",size:18})}),o.jsx(d,{}),o.jsxs(u,{type:"multiple",children:[o.jsx(c,{value:"bold","aria-label":"Bold",children:o.jsx(a,{name:"format_bold",size:18})}),o.jsx(c,{value:"italic","aria-label":"Italic",children:o.jsx(a,{name:"format_italic",size:18})}),o.jsx(c,{value:"strikethrough","aria-label":"Strikethrough",children:o.jsx(a,{name:"strikethrough_s",size:18})})]}),o.jsx(d,{}),o.jsx(i,{"aria-label":"Insert link",children:o.jsx(a,{name:"link",size:18})}),o.jsx(i,{"aria-label":"Insert image",children:o.jsx(a,{name:"image",size:18})}),o.jsx(i,{"aria-label":"Insert code",children:o.jsx(a,{name:"code",size:18})})]})},_={render:()=>o.jsxs(m,{orientation:"vertical",children:[o.jsx(i,{children:o.jsx(a,{name:"home",size:18})}),o.jsx(i,{children:o.jsx(a,{name:"search",size:18})}),o.jsx(d,{}),o.jsx(i,{children:o.jsx(a,{name:"settings",size:18})}),o.jsx(i,{children:o.jsx(a,{name:"help",size:18})})]})};var B,R,S;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Toolbar>
      <ToolbarButton>
        <Icon name="undo" size={18} />
      </ToolbarButton>
      <ToolbarButton>
        <Icon name="redo" size={18} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="multiple">
        <ToolbarToggleItem value="bold">
          <Icon name="format_bold" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic">
          <Icon name="format_italic" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="underline">
          <Icon name="format_underlined" size={18} />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single">
        <ToolbarToggleItem value="left">
          <Icon name="format_align_left" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="center">
          <Icon name="format_align_center" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="right">
          <Icon name="format_align_right" size={18} />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
}`,...(S=(R=b.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var G,k,E;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Toolbar>
      <ToolbarButton aria-label="Undo">
        <Icon name="undo" size={18} />
      </ToolbarButton>
      <ToolbarButton aria-label="Redo">
        <Icon name="redo" size={18} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="multiple">
        <ToolbarToggleItem value="bold" aria-label="Bold">
          <Icon name="format_bold" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic" aria-label="Italic">
          <Icon name="format_italic" size={18} />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="strikethrough" aria-label="Strikethrough">
          <Icon name="strikethrough_s" size={18} />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarButton aria-label="Insert link">
        <Icon name="link" size={18} />
      </ToolbarButton>
      <ToolbarButton aria-label="Insert image">
        <Icon name="image" size={18} />
      </ToolbarButton>
      <ToolbarButton aria-label="Insert code">
        <Icon name="code" size={18} />
      </ToolbarButton>
    </Toolbar>
}`,...(E=(k=g.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var C,O,w;_.parameters={..._.parameters,docs:{...(C=_.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Toolbar orientation="vertical">
      <ToolbarButton>
        <Icon name="home" size={18} />
      </ToolbarButton>
      <ToolbarButton>
        <Icon name="search" size={18} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton>
        <Icon name="settings" size={18} />
      </ToolbarButton>
      <ToolbarButton>
        <Icon name="help" size={18} />
      </ToolbarButton>
    </Toolbar>
}`,...(w=(O=_.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const Ao=["Default","TextEditor","Vertical"];export{b as Default,g as TextEditor,_ as Vertical,Ao as __namedExportsOrder,Po as default};
