import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as k}from"./index-BlmOqGMO.js";import{P as F}from"./index-CiEb6DFw.js";import{o as r}from"./card-B3UzYjvl.js";import{p as I}from"./flex-DvmXTkye.js";import"./index-yBjzXJbu.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./index-Dbpq9gcs.js";var z="AspectRatio",w=k.forwardRef((W,C)=>{const{ratio:A=1/1,style:S,...P}=W;return t.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/A}%`},"data-radix-aspect-ratio-wrapper":"",children:t.jsx(F.div,{...P,ref:C,style:{...S,position:"absolute",top:0,right:0,bottom:0,left:0}})})});w.displayName=z;var E=w;const e=E,$={title:"Components/Aspect Ratio",component:e,parameters:{layout:"padded"},tags:["autodocs"]},i={render:()=>t.jsx(r,{style:{maxWidth:400},children:t.jsx(e,{ratio:16/9,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1479030160180-b1860951d696?w=800&auto=format&fit=crop",alt:"Landscape",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})})})},a={render:()=>t.jsx(r,{style:{maxWidth:300},children:t.jsx(e,{ratio:1,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1502791451862-7bd8e91a3146?w=800&auto=format&fit=crop",alt:"Portrait",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})})})},o={render:()=>t.jsx(r,{style:{maxWidth:300},children:t.jsx(e,{ratio:3/4,children:t.jsx("img",{src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop",alt:"Portrait",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}})})})},s={render:()=>t.jsx(r,{style:{maxWidth:600},children:t.jsx(e,{ratio:16/9,children:t.jsx("div",{style:{width:"100%",height:"100%",background:"var(--gray-3)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx("video",{controls:!0,style:{width:"100%",height:"100%",borderRadius:"8px"},children:t.jsx("source",{src:"https://www.w3schools.com/html/mov_bbb.mp4",type:"video/mp4"})})})})})},d={render:()=>t.jsxs(I,{direction:"column",gap:"4",children:[t.jsx(r,{style:{maxWidth:400},children:t.jsx(e,{ratio:21/9,children:t.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, var(--indigo-3) 0%, var(--indigo-6) 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--indigo-11)",fontSize:"18px",fontWeight:500},children:"21:9 Ultra Wide"})})}),t.jsx(r,{style:{maxWidth:400},children:t.jsx(e,{ratio:16/9,children:t.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, var(--blue-3) 0%, var(--blue-6) 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--blue-11)",fontSize:"18px",fontWeight:500},children:"16:9 Widescreen"})})}),t.jsx(r,{style:{maxWidth:400},children:t.jsx(e,{ratio:4/3,children:t.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, var(--green-3) 0%, var(--green-6) 100%)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--green-11)",fontSize:"18px",fontWeight:500},children:"4:3 Standard"})})})]})};var c,n,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 400
  }}>
      <AspectRatio ratio={16 / 9}>
        <img src="https://images.unsplash.com/photo-1479030160180-b1860951d696?w=800&auto=format&fit=crop" alt="Landscape" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px'
      }} />
      </AspectRatio>
    </Card>
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var p,h,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 300
  }}>
      <AspectRatio ratio={1}>
        <img src="https://images.unsplash.com/photo-1502791451862-7bd8e91a3146?w=800&auto=format&fit=crop" alt="Portrait" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px'
      }} />
      </AspectRatio>
    </Card>
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,u,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 300
  }}>
      <AspectRatio ratio={3 / 4}>
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop" alt="Portrait" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px'
      }} />
      </AspectRatio>
    </Card>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,f,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 600
  }}>
      <AspectRatio ratio={16 / 9}>
        <div style={{
        width: '100%',
        height: '100%',
        background: 'var(--gray-3)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <video controls style={{
          width: '100%',
          height: '100%',
          borderRadius: '8px'
        }}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
      </AspectRatio>
    </Card>
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,j,R;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Card style={{
      maxWidth: 400
    }}>
        <AspectRatio ratio={21 / 9}>
          <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--indigo-3) 0%, var(--indigo-6) 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--indigo-11)',
          fontSize: '18px',
          fontWeight: 500
        }}>
            21:9 Ultra Wide
          </div>
        </AspectRatio>
      </Card>
      
      <Card style={{
      maxWidth: 400
    }}>
        <AspectRatio ratio={16 / 9}>
          <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--blue-3) 0%, var(--blue-6) 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--blue-11)',
          fontSize: '18px',
          fontWeight: 500
        }}>
            16:9 Widescreen
          </div>
        </AspectRatio>
      </Card>
      
      <Card style={{
      maxWidth: 400
    }}>
        <AspectRatio ratio={4 / 3}>
          <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--green-3) 0%, var(--green-6) 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--green-11)',
          fontSize: '18px',
          fontWeight: 500
        }}>
            4:3 Standard
          </div>
        </AspectRatio>
      </Card>
    </Flex>
}`,...(R=(j=d.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};const G=["Default","Square","Portrait","WithVideo","MultipleRatios"];export{i as Default,d as MultipleRatios,o as Portrait,a as Square,s as WithVideo,G as __namedExportsOrder,$ as default};
