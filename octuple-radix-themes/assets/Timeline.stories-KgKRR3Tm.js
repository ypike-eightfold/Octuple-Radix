import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as $}from"./index-BlmOqGMO.js";import{I as x}from"./Icon-D_u5oAGh.js";import{p as a}from"./flex-DvmXTkye.js";import{p as n}from"./box-Ck4Ely5C.js";import{p as o}from"./text-C4SbqUme.js";import{o as J}from"./card-B3UzYjvl.js";import"./index-yBjzXJbu.js";import"./index-Dbpq9gcs.js";import"./index-CSHYywJy.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const r=({items:t,orientation:s="vertical"})=>{const H=i=>{switch(i){case"success":return"var(--green-9)";case"error":return"var(--red-9)";case"warning":return"var(--orange-9)";case"info":return"var(--blue-9)";default:return"var(--indigo-9)"}},Y=i=>{switch(i){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";case"info":return"info";default:return"circle"}};return e.jsx(a,{direction:s==="horizontal"?"row":"column",className:`timeline-root timeline-${s}`,children:t.map((i,g)=>{const v=g===t.length-1,f=H(i.variant),y=i.icon||Y(i.variant);return e.jsxs($.Fragment,{children:[e.jsxs(a,{gap:"3",className:`timeline-item timeline-item-${s}`,direction:s==="horizontal"?"column":"row",children:[s==="horizontal"?e.jsx(n,{className:"timeline-indicator",style:{backgroundColor:f},children:e.jsx(x,{name:y,size:16,style:{color:"white"}})}):e.jsxs(a,{direction:"column",align:"center",className:"timeline-indicator-wrapper",children:[e.jsx(n,{className:"timeline-indicator",style:{backgroundColor:f},children:e.jsx(x,{name:y,size:16,style:{color:"white"}})}),!v&&e.jsx(n,{className:"timeline-connector",style:{backgroundColor:"var(--gray-6)"}})]}),e.jsx(a,{direction:"column",gap:"1",className:"timeline-content",children:s==="horizontal"?e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"3",weight:"medium",children:i.title}),i.description&&e.jsx(o,{size:"2",color:"gray",children:i.description})]}):e.jsxs(e.Fragment,{children:[e.jsxs(a,{justify:"between",align:"start",gap:"3",children:[e.jsx(o,{size:"3",weight:"medium",children:i.title}),e.jsx(o,{size:"1",color:"gray",className:"timeline-timestamp",children:i.timestamp})]}),i.description&&e.jsx(o,{size:"2",color:"gray",children:i.description})]})})]}),s==="horizontal"&&!v&&e.jsx(n,{className:"timeline-connector timeline-connector-horizontal",style:{backgroundColor:"var(--gray-6)"}})]},g)})})},w=()=>null;try{r.displayName="Timeline",r.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"Array of timeline items",name:"items",required:!0,type:{name:"TimelineItemData[]"}},orientation:{defaultValue:{value:"vertical"},description:"Orientation of the timeline",name:"orientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{w.displayName="TimelineItem",w.__docgenInfo={description:"",displayName:"TimelineItem",props:{title:{defaultValue:null,description:"Title of the event",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Optional description",name:"description",required:!1,type:{name:"string | undefined"}},timestamp:{defaultValue:null,description:"Timestamp",name:"timestamp",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"Optional icon name",name:"icon",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:{value:"'default'"},description:"Status/color variant",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}const se={title:"Components/Timeline",component:r,parameters:{layout:"padded"},tags:["autodocs"]},E=[{title:"Project Created",description:'New project "Website Redesign" was created',timestamp:"2 hours ago",variant:"success"},{title:"Design Review",description:"Design mockups reviewed by the team",timestamp:"4 hours ago",variant:"info"},{title:"Initial Meeting",description:"Kickoff meeting with stakeholders",timestamp:"1 day ago",variant:"default"}],c={render:()=>e.jsx(n,{style:{width:"500px"},children:e.jsx(r,{items:E})})},l={render:()=>{const t=[{title:"Build Successful",description:"All tests passed, deployment ready",timestamp:"Just now",variant:"success"},{title:"Warning Detected",description:"Package version mismatch detected",timestamp:"5 minutes ago",variant:"warning"},{title:"Build Failed",description:"Compilation error in main.ts",timestamp:"10 minutes ago",variant:"error"},{title:"Build Started",description:"Starting build process...",timestamp:"15 minutes ago",variant:"info"}];return e.jsx(n,{style:{width:"500px"},children:e.jsx(r,{items:t})})}},m={render:()=>{const t=[{title:"Deployment Complete",description:"Version 2.1.0 deployed to production",timestamp:"10:30 AM",icon:"rocket_launch",variant:"success"},{title:"Code Review",description:"Pull request #234 approved",timestamp:"9:15 AM",icon:"code",variant:"info"},{title:"Commit Pushed",description:"feat: Add new dashboard component",timestamp:"8:45 AM",icon:"commit",variant:"default"}];return e.jsx(n,{style:{width:"500px"},children:e.jsx(r,{items:t})})}},d={render:()=>{const t=[{title:"Order Shipped",description:"Your order has been shipped via FedEx",timestamp:"Today, 2:30 PM",variant:"success"},{title:"Order Processing",description:"Your order is being prepared",timestamp:"Today, 10:00 AM",variant:"info"},{title:"Payment Confirmed",description:"Payment received successfully",timestamp:"Today, 9:45 AM",variant:"success"},{title:"Order Placed",description:"Order #12345 has been placed",timestamp:"Today, 9:30 AM",variant:"default"}];return e.jsx(J,{style:{width:"600px",padding:"24px"},children:e.jsx(r,{items:t})})}},p={render:()=>{const t=[{title:"Meeting scheduled",timestamp:"3:00 PM"},{title:"Email sent",timestamp:"2:15 PM"},{title:"Task completed",timestamp:"1:30 PM"},{title:"Project started",timestamp:"9:00 AM"}];return e.jsx(n,{style:{width:"400px"},children:e.jsx(r,{items:t})})}},u={render:()=>e.jsx(n,{style:{width:"800px"},children:e.jsx(r,{items:E,orientation:"horizontal"})})},h={render:()=>{const t=[{title:"Start",timestamp:"9:00 AM",variant:"success"},{title:"In Progress",timestamp:"10:30 AM",variant:"info"},{title:"Review",timestamp:"2:15 PM",variant:"warning"},{title:"Complete",timestamp:"4:00 PM",variant:"success"}];return e.jsx(n,{style:{width:"800px"},children:e.jsx(r,{items:t,orientation:"horizontal"})})}};var j,M,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: '500px'
  }}>
      <Timeline items={defaultItems} />
    </Box>
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var T,C,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      title: 'Build Successful',
      description: 'All tests passed, deployment ready',
      timestamp: 'Just now',
      variant: 'success' as const
    }, {
      title: 'Warning Detected',
      description: 'Package version mismatch detected',
      timestamp: '5 minutes ago',
      variant: 'warning' as const
    }, {
      title: 'Build Failed',
      description: 'Compilation error in main.ts',
      timestamp: '10 minutes ago',
      variant: 'error' as const
    }, {
      title: 'Build Started',
      description: 'Starting build process...',
      timestamp: '15 minutes ago',
      variant: 'info' as const
    }];
    return <Box style={{
      width: '500px'
    }}>
        <Timeline items={items} />
      </Box>;
  }
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var z,_,S;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      title: 'Deployment Complete',
      description: 'Version 2.1.0 deployed to production',
      timestamp: '10:30 AM',
      icon: 'rocket_launch',
      variant: 'success' as const
    }, {
      title: 'Code Review',
      description: 'Pull request #234 approved',
      timestamp: '9:15 AM',
      icon: 'code',
      variant: 'info' as const
    }, {
      title: 'Commit Pushed',
      description: 'feat: Add new dashboard component',
      timestamp: '8:45 AM',
      icon: 'commit',
      variant: 'default' as const
    }];
    return <Box style={{
      width: '500px'
    }}>
        <Timeline items={items} />
      </Box>;
  }
}`,...(S=(_=m.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var I,b,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      title: 'Order Shipped',
      description: 'Your order has been shipped via FedEx',
      timestamp: 'Today, 2:30 PM',
      variant: 'success' as const
    }, {
      title: 'Order Processing',
      description: 'Your order is being prepared',
      timestamp: 'Today, 10:00 AM',
      variant: 'info' as const
    }, {
      title: 'Payment Confirmed',
      description: 'Payment received successfully',
      timestamp: 'Today, 9:45 AM',
      variant: 'success' as const
    }, {
      title: 'Order Placed',
      description: 'Order #12345 has been placed',
      timestamp: 'Today, 9:30 AM',
      variant: 'default' as const
    }];
    return <Card style={{
      width: '600px',
      padding: '24px'
    }}>
        <Timeline items={items} />
      </Card>;
  }
}`,...(B=(b=d.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var N,k,V;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      title: 'Meeting scheduled',
      timestamp: '3:00 PM'
    }, {
      title: 'Email sent',
      timestamp: '2:15 PM'
    }, {
      title: 'Task completed',
      timestamp: '1:30 PM'
    }, {
      title: 'Project started',
      timestamp: '9:00 AM'
    }];
    return <Box style={{
      width: '400px'
    }}>
        <Timeline items={items} />
      </Box>;
  }
}`,...(V=(k=p.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var O,D,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: '800px'
  }}>
      <Timeline items={defaultItems} orientation="horizontal" />
    </Box>
}`,...(q=(D=u.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var R,W,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      title: 'Start',
      timestamp: '9:00 AM',
      variant: 'success' as const
    }, {
      title: 'In Progress',
      timestamp: '10:30 AM',
      variant: 'info' as const
    }, {
      title: 'Review',
      timestamp: '2:15 PM',
      variant: 'warning' as const
    }, {
      title: 'Complete',
      timestamp: '4:00 PM',
      variant: 'success' as const
    }];
    return <Box style={{
      width: '800px'
    }}>
        <Timeline items={items} orientation="horizontal" />
      </Box>;
  }
}`,...(F=(W=h.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const ae=["Default","WithVariants","WithCustomIcons","InCard","SimpleTimeline","Horizontal","HorizontalWithVariants"];export{c as Default,u as Horizontal,h as HorizontalWithVariants,d as InCard,p as SimpleTimeline,m as WithCustomIcons,l as WithVariants,ae as __namedExportsOrder,se as default};
