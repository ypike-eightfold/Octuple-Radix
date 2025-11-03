import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as o}from"./scroll-area-C8qRYAdm.js";import{o as r}from"./card-B3UzYjvl.js";import{p as s}from"./flex-DvmXTkye.js";import{p as i}from"./text-C4SbqUme.js";import{o as D}from"./separator-BQFR_RkM.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./radius.prop-CIarg28h.js";import"./get-subtree-wctCFMnl.js";import"./index-Cpd6F4Jl.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./index-CH1-paxq.js";import"./index-5uDXI3f6.js";import"./index-Dkb_ZYRU.js";import"./index-DZCApzUK.js";import"./index-CWo8_AO2.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const re={title:"Components/Scroll Area",component:o,parameters:{layout:"padded"},tags:["autodocs"]},n={render:()=>e.jsx(r,{style:{width:300},children:e.jsx(o,{style:{height:200},children:e.jsx(s,{direction:"column",gap:"2",p:"3",children:Array.from({length:20},(a,t)=>e.jsxs(i,{size:"2",children:["List item ",t+1]},t))})})})},l={render:()=>e.jsx(r,{style:{width:300},children:e.jsx(o,{style:{height:250},children:e.jsx(s,{direction:"column",children:Array.from({length:15},(a,t)=>e.jsxs("div",{children:[e.jsxs(i,{size:"2",style:{display:"block",padding:"12px 16px"},children:["Item ",t+1]}),t<14&&e.jsx(D,{size:"4"})]},t))})})})},d={render:()=>e.jsx(r,{style:{width:500},children:e.jsx(o,{style:{height:300},children:e.jsxs(s,{direction:"column",gap:"3",p:"4",children:[e.jsx(i,{size:"5",weight:"bold",children:"Terms and Conditions"}),e.jsx(i,{size:"2",color:"gray",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx(i,{size:"2",color:"gray",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(i,{size:"2",color:"gray",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx(i,{size:"2",color:"gray",children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),e.jsx(i,{size:"2",color:"gray",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."})]})})})},c={render:()=>e.jsx(r,{children:e.jsx(o,{type:"auto",scrollbars:"horizontal",style:{width:400},children:e.jsx(s,{gap:"3",p:"3",style:{minWidth:800},children:Array.from({length:10},(a,t)=>e.jsx(r,{style:{minWidth:150,padding:"20px"},children:e.jsxs(i,{weight:"bold",children:["Card ",t+1]})},t))})})})},u={render:()=>e.jsx(r,{children:e.jsx(o,{type:"auto",scrollbars:"both",style:{width:400,height:300},children:e.jsxs("div",{style:{minWidth:800,minHeight:600,padding:"16px"},children:[e.jsx(i,{size:"5",weight:"bold",children:"Large Content Area"}),e.jsx(s,{direction:"column",gap:"3",mt:"3",children:Array.from({length:20},(a,t)=>e.jsxs(i,{size:"2",children:["This is a long line of content that extends beyond the viewport width ",t+1]},t))})]})})})},m={render:()=>e.jsx(r,{style:{width:250},children:e.jsx(o,{style:{height:300},children:e.jsx(s,{direction:"column",children:["Dashboard","Analytics","Projects","Tasks","Calendar","Documents","Team","Settings","Profile","Notifications","Integrations","Billing","Security","API Keys","Webhooks"].map((a,t)=>e.jsxs("div",{children:[e.jsx(i,{size:"2",style:{display:"block",padding:"10px 16px",cursor:"pointer"},children:a}),t<14&&e.jsx(D,{size:"4"})]},t))})})})};var p,h,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 300
  }}>
      <ScrollArea style={{
      height: 200
    }}>
        <Flex direction="column" gap="2" p="3">
          {Array.from({
          length: 20
        }, (_, i) => <Text key={i} size="2">
              List item {i + 1}
            </Text>)}
        </Flex>
      </ScrollArea>
    </Card>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,y,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 300
  }}>
      <ScrollArea style={{
      height: 250
    }}>
        <Flex direction="column">
          {Array.from({
          length: 15
        }, (_, i) => <div key={i}>
              <Text size="2" style={{
            display: 'block',
            padding: '12px 16px'
          }}>
                Item {i + 1}
              </Text>
              {i < 14 && <Separator size="4" />}
            </div>)}
        </Flex>
      </ScrollArea>
    </Card>
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,b,q;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 500
  }}>
      <ScrollArea style={{
      height: 300
    }}>
        <Flex direction="column" gap="3" p="4">
          <Text size="5" weight="bold">Terms and Conditions</Text>
          <Text size="2" color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text size="2" color="gray">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text size="2" color="gray">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
          <Text size="2" color="gray">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </Text>
          <Text size="2" color="gray">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
            excepturi sint occaecati cupiditate non provident.
          </Text>
        </Flex>
      </ScrollArea>
    </Card>
}`,...(q=(b=d.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var S,T,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card>
      <ScrollArea type="auto" scrollbars="horizontal" style={{
      width: 400
    }}>
        <Flex gap="3" p="3" style={{
        minWidth: 800
      }}>
          {Array.from({
          length: 10
        }, (_, i) => <Card key={i} style={{
          minWidth: 150,
          padding: '20px'
        }}>
              <Text weight="bold">Card {i + 1}</Text>
            </Card>)}
        </Flex>
      </ScrollArea>
    </Card>
}`,...(f=(T=c.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var z,A,C;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Card>
      <ScrollArea type="auto" scrollbars="both" style={{
      width: 400,
      height: 300
    }}>
        <div style={{
        minWidth: 800,
        minHeight: 600,
        padding: '16px'
      }}>
          <Text size="5" weight="bold">Large Content Area</Text>
          <Flex direction="column" gap="3" mt="3">
            {Array.from({
            length: 20
          }, (_, i) => <Text key={i} size="2">
                This is a long line of content that extends beyond the viewport width {i + 1}
              </Text>)}
          </Flex>
        </div>
      </ScrollArea>
    </Card>
}`,...(C=(A=u.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var w,k,F;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 250
  }}>
      <ScrollArea style={{
      height: 300
    }}>
        <Flex direction="column">
          {['Dashboard', 'Analytics', 'Projects', 'Tasks', 'Calendar', 'Documents', 'Team', 'Settings', 'Profile', 'Notifications', 'Integrations', 'Billing', 'Security', 'API Keys', 'Webhooks'].map((item, i) => <div key={i}>
              <Text size="2" style={{
            display: 'block',
            padding: '10px 16px',
            cursor: 'pointer'
          }}>
                {item}
              </Text>
              {i < 14 && <Separator size="4" />}
            </div>)}
        </Flex>
      </ScrollArea>
    </Card>
}`,...(F=(k=m.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const oe=["Default","WithSeparators","LongContent","HorizontalScroll","BothDirections","MenuList"];export{u as BothDirections,n as Default,c as HorizontalScroll,d as LongContent,m as MenuList,l as WithSeparators,oe as __namedExportsOrder,re as default};
