import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as j}from"./index-BlmOqGMO.js";import{s}from"./progress-CewqBrwS.js";import{p as r}from"./flex-DvmXTkye.js";import{p as t}from"./text-C4SbqUme.js";import{o as O}from"./card-B3UzYjvl.js";import{o as h}from"./button-DOEX7M_0.js";import"./index-yBjzXJbu.js";import"./index-Dbpq9gcs.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./index-Dkb_ZYRU.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./base-button-1bStz9fB.js";import"./index-UwpWBZco.js";import"./map-prop-values-CWqpaS2P.js";const me={title:"Components/Progress",component:s,parameters:{layout:"padded"},tags:["autodocs"]},a={render:()=>e.jsx(s,{value:50})},c={render:()=>e.jsx(s,{value:100})},d={render:()=>e.jsx(s,{value:30,color:"red"})},u={render:()=>e.jsxs(r,{direction:"column",gap:"4",style:{width:300},children:[e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Default (25%)"}),e.jsx(s,{value:25})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"In Progress (50%)"}),e.jsx(s,{value:50})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Almost Done (75%)"}),e.jsx(s,{value:75})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Complete (100%)"}),e.jsx(s,{value:100})]})]})},p={render:()=>e.jsxs(r,{direction:"column",gap:"4",style:{width:300},children:[e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"1",children:"Size 1"}),e.jsx(s,{size:"1",value:50})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",children:"Size 2"}),e.jsx(s,{size:"2",value:50})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"3",children:"Size 3"}),e.jsx(s,{size:"3",value:50})]})]})},m={render:()=>e.jsxs(r,{direction:"column",gap:"4",style:{width:300},children:[e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Indigo (Default)"}),e.jsx(s,{value:60,color:"indigo"})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Blue"}),e.jsx(s,{value:60,color:"blue"})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Green (Success)"}),e.jsx(s,{value:60,color:"green"})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Amber (Warning)"}),e.jsx(s,{value:60,color:"amber"})]}),e.jsxs(r,{direction:"column",gap:"2",children:[e.jsx(t,{size:"2",weight:"medium",children:"Red (Error)"}),e.jsx(s,{value:60,color:"red"})]})]})},x={render:function(){const[n,i]=j.useState(1),o=4,l=n/o*100;return e.jsx(O,{style:{width:450},children:e.jsxs(r,{direction:"column",gap:"4",children:[e.jsxs(r,{justify:"between",align:"center",children:[e.jsx(t,{size:"5",weight:"bold",children:"Form Progress"}),e.jsxs(t,{size:"2",color:"gray",children:["Step ",n," of ",o]})]}),e.jsx(s,{value:l,size:"2"}),e.jsxs(r,{gap:"2",justify:"between",mt:"2",children:[e.jsx(h,{variant:"soft",color:"gray",disabled:n===1,onClick:()=>i(Math.max(1,n-1)),children:"Previous"}),e.jsxs(r,{gap:"2",children:[e.jsx(h,{variant:"outline",onClick:()=>i(1),children:"Reset"}),e.jsx(h,{onClick:()=>i(Math.min(o,n+1)),disabled:n===o,children:"Next"})]})]})]})})}},g={render:function(){const[n,i]=j.useState(0),[o,l]=j.useState(!1),H=()=>{l(!0),i(0);const J=setInterval(()=>{i(F=>F>=100?(clearInterval(J),l(!1),100):F+2)},50)};return e.jsx(O,{style:{width:400},children:e.jsxs(r,{direction:"column",gap:"4",children:[e.jsx(t,{size:"4",weight:"bold",children:"Upload File"}),n>0&&e.jsxs(r,{direction:"column",gap:"2",children:[e.jsxs(r,{justify:"between",children:[e.jsx(t,{size:"2",children:"document.pdf"}),e.jsxs(t,{size:"2",color:"gray",children:[Math.round(n),"%"]})]}),e.jsx(s,{value:n,color:n===100?"green":"indigo"})]}),e.jsx(h,{onClick:H,disabled:o,style:{width:"100%"},children:o?"Uploading...":n===100?"Upload Complete!":"Start Upload"})]})})}};var z,v,S;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Progress value={50} />
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,f,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Progress value={100} />
}`,...(T=(f=c.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var P,y,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Progress value={30} color="red" />
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var U,b,A;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: 300
  }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Default (25%)</Text>
        <Progress value={25} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">In Progress (50%)</Text>
        <Progress value={50} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Almost Done (75%)</Text>
        <Progress value={75} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Complete (100%)</Text>
        <Progress value={100} />
      </Flex>
    </Flex>
}`,...(A=(b=u.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var I,E,B;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: 300
  }}>
      <Flex direction="column" gap="2">
        <Text size="1">Size 1</Text>
        <Progress size="1" value={50} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2">Size 2</Text>
        <Progress size="2" value={50} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="3">Size 3</Text>
        <Progress size="3" value={50} />
      </Flex>
    </Flex>
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var M,k,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: 300
  }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Indigo (Default)</Text>
        <Progress value={60} color="indigo" />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Blue</Text>
        <Progress value={60} color="blue" />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Green (Success)</Text>
        <Progress value={60} color="green" />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Amber (Warning)</Text>
        <Progress value={60} color="amber" />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Red (Error)</Text>
        <Progress value={60} color="red" />
      </Flex>
    </Flex>
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var R,W,G;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function MultiStepFormExample() {
    const [step, setStep] = useState(1);
    const totalSteps = 4;
    const progress = step / totalSteps * 100;
    return <Card style={{
      width: 450
    }}>
        <Flex direction="column" gap="4">
          <Flex justify="between" align="center">
            <Text size="5" weight="bold">Form Progress</Text>
            <Text size="2" color="gray">Step {step} of {totalSteps}</Text>
          </Flex>
          
          <Progress value={progress} size="2" />
          
          <Flex gap="2" justify="between" mt="2">
            <Button variant="soft" color="gray" disabled={step === 1} onClick={() => setStep(Math.max(1, step - 1))}>
              Previous
            </Button>
            <Flex gap="2">
              <Button variant="outline" onClick={() => setStep(1)}>
                Reset
              </Button>
              <Button onClick={() => setStep(Math.min(totalSteps, step + 1))} disabled={step === totalSteps}>
                Next
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>;
  }
}`,...(G=(W=x.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var N,_,$;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function AnimatedUploadExample() {
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const startUpload = () => {
      setIsUploading(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    };
    return <Card style={{
      width: 400
    }}>
        <Flex direction="column" gap="4">
          <Text size="4" weight="bold">Upload File</Text>
          
          {progress > 0 && <Flex direction="column" gap="2">
              <Flex justify="between">
                <Text size="2">document.pdf</Text>
                <Text size="2" color="gray">{Math.round(progress)}%</Text>
              </Flex>
              <Progress value={progress} color={progress === 100 ? 'green' : 'indigo'} />
            </Flex>}
          
          <Button onClick={startUpload} disabled={isUploading} style={{
          width: '100%'
        }}>
            {isUploading ? 'Uploading...' : progress === 100 ? 'Upload Complete!' : 'Start Upload'}
          </Button>
        </Flex>
      </Card>;
  }
}`,...($=(_=g.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const xe=["Default","Complete","Error","AllStatuses","AllSizes","WithCustomColors","MultiStepForm","AnimatedUpload"];export{p as AllSizes,u as AllStatuses,g as AnimatedUpload,c as Complete,a as Default,d as Error,x as MultiStepForm,m as WithCustomColors,xe as __namedExportsOrder,me as default};
