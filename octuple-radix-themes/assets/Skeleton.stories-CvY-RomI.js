import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-BlmOqGMO.js";import{y as v}from"./index-Dbpq9gcs.js";import{e as N,t as D,v as V,r as _,p as n}from"./flex-DvmXTkye.js";import{S as H}from"./index-CSHYywJy.js";import{p as h}from"./box-Ck4Ely5C.js";import{o as p}from"./card-B3UzYjvl.js";import{p as i}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";const I=parseFloat(o.version)>=19||"",O={loading:{type:"boolean",default:!0},...D,...N},t=o.forwardRef((l,R)=>{const{children:r,className:E,loading:$,...B}=V(l,O,_);if(!$)return r;const P=o.isValidElement(r)?H:"span";return o.createElement(P,{ref:R,"aria-hidden":!0,className:v("rt-Skeleton",E),"data-inline-skeleton":o.isValidElement(r)?void 0:!0,tabIndex:-1,inert:I,...B},r)});t.displayName="Skeleton";const Z={title:"Components/Skeleton",component:t,parameters:{layout:"padded"},tags:["autodocs"]},s={render:()=>e.jsx(t,{width:"200px",height:"20px"})},d={render:()=>e.jsxs(n,{direction:"column",gap:"2",style:{width:400},children:[e.jsx(t,{children:e.jsx(i,{children:"Loading text content..."})}),e.jsx(t,{children:e.jsx(i,{children:"This text is also loading..."})}),e.jsx(t,{width:"60%",children:e.jsx(i,{children:"Shorter line"})})]})},x={render:()=>e.jsx(p,{style:{width:350},children:e.jsxs(n,{gap:"3",children:[e.jsx(t,{children:e.jsx(h,{width:"48px",height:"48px",style:{borderRadius:"50%"}})}),e.jsxs(n,{direction:"column",gap:"2",style:{flex:1},children:[e.jsx(t,{children:e.jsx(i,{size:"3",weight:"bold",children:"Loading name..."})}),e.jsx(t,{children:e.jsx(i,{size:"2",children:"Loading description text..."})})]})]})})},a={render:()=>e.jsx(p,{style:{width:400},children:e.jsxs(n,{direction:"column",gap:"4",children:[e.jsxs(n,{gap:"3",align:"center",children:[e.jsx(t,{children:e.jsx(h,{width:"64px",height:"64px",style:{borderRadius:"50%"}})}),e.jsxs(n,{direction:"column",gap:"2",style:{flex:1},children:[e.jsx(t,{width:"200px",children:e.jsx(i,{size:"4",weight:"bold",children:"Loading name..."})}),e.jsx(t,{width:"150px",children:e.jsx(i,{size:"2",children:"Loading role..."})})]})]}),e.jsxs(n,{direction:"column",gap:"2",children:[e.jsx(t,{children:e.jsx(i,{children:"Loading bio line one..."})}),e.jsx(t,{children:e.jsx(i,{children:"Loading bio line two..."})}),e.jsx(t,{width:"70%",children:e.jsx(i,{children:"Loading bio line three..."})})]}),e.jsxs(n,{gap:"4",children:[e.jsxs(n,{direction:"column",gap:"1",children:[e.jsx(t,{width:"60px",children:e.jsx(i,{size:"4",weight:"bold",children:"000"})}),e.jsx(t,{width:"80px",children:e.jsx(i,{size:"1",children:"Following"})})]}),e.jsxs(n,{direction:"column",gap:"1",children:[e.jsx(t,{width:"60px",children:e.jsx(i,{size:"4",weight:"bold",children:"000"})}),e.jsx(t,{width:"80px",children:e.jsx(i,{size:"1",children:"Followers"})})]}),e.jsxs(n,{direction:"column",gap:"1",children:[e.jsx(t,{width:"60px",children:e.jsx(i,{size:"4",weight:"bold",children:"000"})}),e.jsx(t,{width:"80px",children:e.jsx(i,{size:"1",children:"Posts"})})]})]})]})})},c={render:()=>e.jsx(n,{direction:"column",gap:"3",style:{width:400},children:[1,2,3,4,5].map(l=>e.jsx(p,{children:e.jsxs(n,{gap:"3",align:"center",children:[e.jsx(t,{children:e.jsx(h,{width:"40px",height:"40px",style:{borderRadius:"50%"}})}),e.jsxs(n,{direction:"column",gap:"1",style:{flex:1},children:[e.jsx(t,{width:l%2===0?"80%":"60%",children:e.jsx(i,{size:"2",weight:"medium",children:"Loading title..."})}),e.jsx(t,{width:"40%",children:e.jsx(i,{size:"1",children:"Loading subtitle..."})})]})]})},l))})};var g,m,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Skeleton width="200px" height="20px" />
}`,...(S=(m=s.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var j,w,u;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="2" style={{
    width: 400
  }}>
      <Skeleton>
        <Text>Loading text content...</Text>
      </Skeleton>
      <Skeleton>
        <Text>This text is also loading...</Text>
      </Skeleton>
      <Skeleton width="60%">
        <Text>Shorter line</Text>
      </Skeleton>
    </Flex>
}`,...(u=(w=d.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var k,T,F;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 350
  }}>
      <Flex gap="3">
        <Skeleton>
          <Box width="48px" height="48px" style={{
          borderRadius: '50%'
        }} />
        </Skeleton>
        <Flex direction="column" gap="2" style={{
        flex: 1
      }}>
          <Skeleton>
            <Text size="3" weight="bold">Loading name...</Text>
          </Skeleton>
          <Skeleton>
            <Text size="2">Loading description text...</Text>
          </Skeleton>
        </Flex>
      </Flex>
    </Card>
}`,...(F=(T=x.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var b,y,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 400
  }}>
      <Flex direction="column" gap="4">
        {/* Header */}
        <Flex gap="3" align="center">
          <Skeleton>
            <Box width="64px" height="64px" style={{
            borderRadius: '50%'
          }} />
          </Skeleton>
          <Flex direction="column" gap="2" style={{
          flex: 1
        }}>
            <Skeleton width="200px">
              <Text size="4" weight="bold">Loading name...</Text>
            </Skeleton>
            <Skeleton width="150px">
              <Text size="2">Loading role...</Text>
            </Skeleton>
          </Flex>
        </Flex>

        {/* Bio */}
        <Flex direction="column" gap="2">
          <Skeleton>
            <Text>Loading bio line one...</Text>
          </Skeleton>
          <Skeleton>
            <Text>Loading bio line two...</Text>
          </Skeleton>
          <Skeleton width="70%">
            <Text>Loading bio line three...</Text>
          </Skeleton>
        </Flex>

        {/* Stats */}
        <Flex gap="4">
          <Flex direction="column" gap="1">
            <Skeleton width="60px">
              <Text size="4" weight="bold">000</Text>
            </Skeleton>
            <Skeleton width="80px">
              <Text size="1">Following</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column" gap="1">
            <Skeleton width="60px">
              <Text size="4" weight="bold">000</Text>
            </Skeleton>
            <Skeleton width="80px">
              <Text size="1">Followers</Text>
            </Skeleton>
          </Flex>
          <Flex direction="column" gap="1">
            <Skeleton width="60px">
              <Text size="4" weight="bold">000</Text>
            </Skeleton>
            <Skeleton width="80px">
              <Text size="1">Posts</Text>
            </Skeleton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,L,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="3" style={{
    width: 400
  }}>
      {[1, 2, 3, 4, 5].map(i => <Card key={i}>
          <Flex gap="3" align="center">
            <Skeleton>
              <Box width="40px" height="40px" style={{
            borderRadius: '50%'
          }} />
            </Skeleton>
            <Flex direction="column" gap="1" style={{
          flex: 1
        }}>
              <Skeleton width={i % 2 === 0 ? '80%' : '60%'}>
                <Text size="2" weight="medium">Loading title...</Text>
              </Skeleton>
              <Skeleton width="40%">
                <Text size="1">Loading subtitle...</Text>
              </Skeleton>
            </Flex>
          </Flex>
        </Card>)}
    </Flex>
}`,...(C=(L=c.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};const ee=["Default","TextSkeleton","CardSkeleton","ProfileSkeleton","ListSkeleton"];export{x as CardSkeleton,s as Default,c as ListSkeleton,a as ProfileSkeleton,d as TextSkeleton,ee as __namedExportsOrder,Z as default};
