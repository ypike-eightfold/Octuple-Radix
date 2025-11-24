import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as G,r as j}from"./index-BlmOqGMO.js";import{I as d}from"./Icon-D_u5oAGh.js";import{p}from"./flex-DvmXTkye.js";import{p as s}from"./box-Ck4Ely5C.js";import{p as u}from"./text-C4SbqUme.js";import{o as C}from"./button-DOEX7M_0.js";import"./index-yBjzXJbu.js";import"./index-Dbpq9gcs.js";import"./index-CSHYywJy.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./base-button-1bStz9fB.js";import"./radius.prop-CIarg28h.js";import"./index-UwpWBZco.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./map-prop-values-CWqpaS2P.js";const c=({steps:t,currentStep:n,orientation:l="horizontal",clickable:y=!1,onStepClick:g})=>{const O=r=>r<n?"completed":r===n?"current":"upcoming",L=r=>{y&&g&&g(r)};return e.jsx(p,{direction:l==="horizontal"?"row":"column",className:`stepper-root stepper-${l}`,children:t.map((r,o)=>{const a=O(o),k=o===t.length-1;return e.jsxs(G.Fragment,{children:[e.jsxs(p,{className:`stepper-step stepper-step-${a} ${y?"stepper-step-clickable":""}`,onClick:()=>L(o),children:[l==="horizontal"?e.jsx(s,{className:`stepper-indicator stepper-indicator-${a}`,children:a==="completed"?e.jsx(d,{name:"check",size:16}):r.icon?e.jsx(d,{name:r.icon,size:16}):e.jsx(u,{size:"2",weight:"bold",children:o+1})}):e.jsxs(p,{direction:"column",align:"center",className:"stepper-indicator-wrapper",children:[e.jsx(s,{className:`stepper-indicator stepper-indicator-${a}`,children:a==="completed"?e.jsx(d,{name:"check",size:16}):r.icon?e.jsx(d,{name:r.icon,size:16}):e.jsx(u,{size:"2",weight:"bold",children:o+1})}),!k&&e.jsx(s,{className:`stepper-connector stepper-connector-${o<n?"completed":"upcoming"}`})]}),e.jsxs(p,{direction:"column",gap:"1",className:"stepper-content",children:[e.jsx(u,{size:"2",weight:"medium",className:`stepper-label-${a}`,children:r.label}),r.description&&e.jsx(u,{size:"1",color:"gray",children:r.description})]})]}),l==="horizontal"&&!k&&e.jsx(s,{className:`stepper-connector stepper-connector-horizontal stepper-connector-${o<n?"completed":"upcoming"}`})]},o)})})};try{c.displayName="Stepper",c.__docgenInfo={description:"",displayName:"Stepper",props:{steps:{defaultValue:null,description:"Array of steps",name:"steps",required:!0,type:{name:"StepItem[]"}},currentStep:{defaultValue:null,description:"Current active step (0-indexed)",name:"currentStep",required:!0,type:{name:"number"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},clickable:{defaultValue:{value:"false"},description:"Whether steps are clickable",name:"clickable",required:!1,type:{name:"boolean | undefined"}},onStepClick:{defaultValue:null,description:"Callback when step is clicked (if clickable)",name:"onStepClick",required:!1,type:{name:"((stepIndex: number) => void) | undefined"}}}}}catch{}const le={title:"Components/Stepper",component:c,parameters:{layout:"padded"},tags:["autodocs"]},i=[{label:"Account Details",description:"Enter your information"},{label:"Verification",description:"Verify your email"},{label:"Preferences",description:"Set your preferences"},{label:"Complete",description:"Review and finish"}],m={render:()=>e.jsx(s,{style:{width:"800px"},children:e.jsx(c,{steps:i,currentStep:1})})},h={render:()=>{const[t,n]=j.useState(0);return e.jsxs(p,{direction:"column",gap:"5",style:{width:"800px"},children:[e.jsx(c,{steps:i,currentStep:t}),e.jsxs(p,{gap:"3",justify:"center",children:[e.jsx(C,{variant:"soft",onClick:()=>n(Math.max(0,t-1)),disabled:t===0,children:"Previous"}),e.jsx(C,{onClick:()=>n(Math.min(i.length-1,t+1)),disabled:t===i.length-1,children:"Next"})]})]})}},S={render:()=>{const[t,n]=j.useState(1);return e.jsx(s,{style:{width:"800px"},children:e.jsx(c,{steps:i,currentStep:t,clickable:!0,onStepClick:n})})}},x={render:()=>e.jsx(s,{style:{width:"400px"},children:e.jsx(c,{steps:i,currentStep:2,orientation:"vertical"})})},f={render:()=>{const t=[{label:"Profile",description:"Personal information",icon:"person"},{label:"Security",description:"Password and 2FA",icon:"lock"},{label:"Billing",description:"Payment method",icon:"credit_card"},{label:"Done",description:"All set!",icon:"check_circle"}];return e.jsx(s,{style:{width:"800px"},children:e.jsx(c,{steps:t,currentStep:1})})}},b={render:()=>{const[t,n]=j.useState(1);return e.jsx(s,{style:{width:"400px"},children:e.jsx(c,{steps:i,currentStep:t,orientation:"vertical",clickable:!0,onStepClick:n})})}};var w,v,B;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: '800px'
  }}>
      <Stepper steps={steps} currentStep={1} />
    </Box>
}`,...(B=(v=m.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var z,_,N;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return <Flex direction="column" gap="5" style={{
      width: '800px'
    }}>
        <Stepper steps={steps} currentStep={currentStep} />
        
        <Flex gap="3" justify="center">
          <Button variant="soft" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep === steps.length - 1}>
            Next
          </Button>
        </Flex>
      </Flex>;
  }
}`,...(N=(_=h.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var I,P,V;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    return <Box style={{
      width: '800px'
    }}>
        <Stepper steps={steps} currentStep={currentStep} clickable onStepClick={setCurrentStep} />
      </Box>;
  }
}`,...(V=(P=S.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var $,F,A;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: '400px'
  }}>
      <Stepper steps={steps} currentStep={2} orientation="vertical" />
    </Box>
}`,...(A=(F=x.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var W,q,D;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const stepsWithIcons = [{
      label: 'Profile',
      description: 'Personal information',
      icon: 'person'
    }, {
      label: 'Security',
      description: 'Password and 2FA',
      icon: 'lock'
    }, {
      label: 'Billing',
      description: 'Payment method',
      icon: 'credit_card'
    }, {
      label: 'Done',
      description: 'All set!',
      icon: 'check_circle'
    }];
    return <Box style={{
      width: '800px'
    }}>
        <Stepper steps={stepsWithIcons} currentStep={1} />
      </Box>;
  }
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,M,R;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    return <Box style={{
      width: '400px'
    }}>
        <Stepper steps={steps} currentStep={currentStep} orientation="vertical" clickable onStepClick={setCurrentStep} />
      </Box>;
  }
}`,...(R=(M=b.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const de=["Default","Interactive","Clickable","Vertical","WithIcons","VerticalClickable"];export{S as Clickable,m as Default,h as Interactive,x as Vertical,b as VerticalClickable,f as WithIcons,de as __namedExportsOrder,le as default};
