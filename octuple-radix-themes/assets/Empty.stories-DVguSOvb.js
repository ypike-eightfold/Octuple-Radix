import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as ce}from"./Icon-D_u5oAGh.js";import{p as N}from"./flex-DvmXTkye.js";import{p as C}from"./text-C4SbqUme.js";import{o as le}from"./button-DOEX7M_0.js";import{o as de}from"./card-B3UzYjvl.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./index-CSHYywJy.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./base-button-1bStz9fB.js";import"./radius.prop-CIarg28h.js";import"./index-UwpWBZco.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./map-prop-values-CWqpaS2P.js";const g=({icon:y="inbox",title:re,description:f,actionLabel:h,onAction:b,size:t="medium"})=>{const ae={small:48,medium:64,large:80},ne={small:"3",medium:"5",large:"6"},ie={small:"1",medium:"2",large:"3"},se={small:"2",medium:"3",large:"4"};return e.jsxs(N,{direction:"column",align:"center",justify:"center",gap:se[t],className:`empty-root empty-${t}`,children:[e.jsx(ce,{name:y,size:ae[t],style:{color:"var(--gray-9)",opacity:.5}}),e.jsxs(N,{direction:"column",align:"center",gap:"1",children:[e.jsx(C,{size:ne[t],weight:"medium",align:"center",children:re}),f&&e.jsx(C,{size:ie[t],color:"gray",align:"center",children:f})]}),h&&b&&e.jsx(le,{onClick:b,size:t==="small"?"2":"3",children:h})]})};try{g.displayName="Empty",g.__docgenInfo={description:"",displayName:"Empty",props:{icon:{defaultValue:{value:"inbox"},description:"Icon to display",name:"icon",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"Title text",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Description text",name:"description",required:!1,type:{name:"string | undefined"}},actionLabel:{defaultValue:null,description:"Action button label",name:"actionLabel",required:!1,type:{name:"string | undefined"}},onAction:{defaultValue:null,description:"Action button callback",name:"onAction",required:!1,type:{name:"(() => void) | undefined"}},size:{defaultValue:{value:"medium"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const Ee={title:"Components/Empty",component:g,parameters:{layout:"padded"},tags:["autodocs"]},o={args:{title:"No data available",description:"There is no data to display at the moment"}},r={args:{icon:"folder_open",title:"No files yet",description:"Upload your first file to get started",actionLabel:"Upload File",onAction:()=>alert("Upload clicked!")}},a={args:{icon:"search_off",title:"No results found",description:"Try adjusting your search or filters",actionLabel:"Clear Filters",onAction:()=>alert("Clear filters clicked!")}},n={args:{icon:"error_outline",title:"Something went wrong",description:"We encountered an error loading your data",actionLabel:"Try Again",onAction:()=>alert("Retry clicked!")}},i={args:{icon:"mail_outline",title:"No messages",description:"Your inbox is empty. Check back later for new messages."}},s={args:{icon:"notifications_off",title:"All caught up!",description:"You have no new notifications"}},c={args:{icon:"shopping_cart",title:"Your cart is empty",description:"Add items to your cart to continue shopping",actionLabel:"Start Shopping",onAction:()=>alert("Start shopping clicked!")}},l={args:{icon:"inbox",title:"No items",description:"Nothing here yet",size:"small"}},d={args:{icon:"cloud_off",title:"No Connection",description:"Unable to connect to the server. Please check your internet connection.",actionLabel:"Retry Connection",onAction:()=>alert("Retry clicked!"),size:"large"}},m={render:()=>e.jsx(de,{style:{width:"600px",minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(g,{icon:"dashboard",title:"No dashboards yet",description:"Create your first dashboard to visualize your data",actionLabel:"Create Dashboard",onAction:()=>alert("Create dashboard clicked!")})})},p={args:{icon:"comment",title:"No comments yet",description:"Be the first to leave a comment",actionLabel:"Add Comment",onAction:()=>alert("Add comment clicked!")}},u={args:{icon:"delete",title:"Trash is empty",description:"Deleted items will appear here"}};var A,x,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'No data available',
    description: 'There is no data to display at the moment'
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var _,k,v;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    icon: 'folder_open',
    title: 'No files yet',
    description: 'Upload your first file to get started',
    actionLabel: 'Upload File',
    onAction: () => alert('Upload clicked!')
  }
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,j,w;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    icon: 'search_off',
    title: 'No results found',
    description: 'Try adjusting your search or filters',
    actionLabel: 'Clear Filters',
    onAction: () => alert('Clear filters clicked!')
  }
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var E,z,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    icon: 'error_outline',
    title: 'Something went wrong',
    description: 'We encountered an error loading your data',
    actionLabel: 'Try Again',
    onAction: () => alert('Retry clicked!')
  }
}`,...(T=(z=n.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var R,I,U;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    icon: 'mail_outline',
    title: 'No messages',
    description: 'Your inbox is empty. Check back later for new messages.'
  }
}`,...(U=(I=i.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var D,q,V;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    icon: 'notifications_off',
    title: 'All caught up!',
    description: 'You have no new notifications'
  }
}`,...(V=(q=s.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var Y,F,W;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    icon: 'shopping_cart',
    title: 'Your cart is empty',
    description: 'Add items to your cart to continue shopping',
    actionLabel: 'Start Shopping',
    onAction: () => alert('Start shopping clicked!')
  }
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var $,B,H;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    icon: 'inbox',
    title: 'No items',
    description: 'Nothing here yet',
    size: 'small'
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var M,P,O;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    icon: 'cloud_off',
    title: 'No Connection',
    description: 'Unable to connect to the server. Please check your internet connection.',
    actionLabel: 'Retry Connection',
    onAction: () => alert('Retry clicked!'),
    size: 'large'
  }
}`,...(O=(P=d.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '600px',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <Empty icon="dashboard" title="No dashboards yet" description="Create your first dashboard to visualize your data" actionLabel="Create Dashboard" onAction={() => alert('Create dashboard clicked!')} />
    </Card>
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    icon: 'comment',
    title: 'No comments yet',
    description: 'Be the first to leave a comment',
    actionLabel: 'Add Comment',
    onAction: () => alert('Add comment clicked!')
  }
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,oe;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    icon: 'delete',
    title: 'Trash is empty',
    description: 'Deleted items will appear here'
  }
}`,...(oe=(te=u.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ze=["Default","WithAction","NoResults","Error","NoMessages","NoNotifications","EmptyCart","Small","Large","InCard","NoComments","EmptyTrash"];export{o as Default,c as EmptyCart,u as EmptyTrash,n as Error,m as InCard,d as Large,p as NoComments,i as NoMessages,s as NoNotifications,a as NoResults,l as Small,r as WithAction,ze as __namedExportsOrder,Ee as default};
