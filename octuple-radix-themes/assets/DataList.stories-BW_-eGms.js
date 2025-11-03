import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{y as j}from"./index-Dbpq9gcs.js";import{r as n}from"./index-BlmOqGMO.js";import{a as M,p as $}from"./text-C4SbqUme.js";import{r as G}from"./color.prop-n6xztqZx.js";import{o as T}from"./high-contrast.prop-BhzBAZU8.js";import{t as H,v as b,r as U,p as I}from"./flex-DvmXTkye.js";import{o as r}from"./card-B3UzYjvl.js";import{e as k}from"./link-Bi8zDvMs.js";import{e as c}from"./badge-BMm2Ttez.js";import"./index-yBjzXJbu.js";import"./index-CSHYywJy.js";import"./radius.prop-CIarg28h.js";const q=["start","center","end","baseline","stretch"],X=["horizontal","vertical"],_=["1","2","3"],K={orientation:{type:"enum",className:"rt-r-orientation",values:X,default:"horizontal",responsive:!0},size:{type:"enum",className:"rt-r-size",values:_,default:"2",responsive:!0},trim:{...M.trim,className:"rt-r-trim"}},Q={align:{type:"enum",className:"rt-r-ai",values:q,responsive:!0}},Y={...H,...G,...T},s=n.forwardRef((l,o)=>{const{className:L,...d}=b(l,K,U);return n.createElement($,{asChild:!0},n.createElement("dl",{...d,ref:o,className:j("rt-DataListRoot",L)}))});s.displayName="DataList.Root";const t=n.forwardRef((l,o)=>{const{className:L,...d}=b(l,Q);return n.createElement("div",{...d,ref:o,className:j("rt-DataListItem",L)})});t.displayName="DataList.Item";const e=n.forwardRef((l,o)=>{const{className:L,color:d,...J}=b(l,Y);return n.createElement("dt",{...J,"data-accent-color":d,ref:o,className:j("rt-DataListLabel",L)})});e.displayName="DataList.Label";const i=n.forwardRef(({children:l,className:o,...L},d)=>n.createElement("dd",{...L,ref:d,className:j(o,"rt-DataListValue")},l));i.displayName="DataList.Value";const ma={title:"Components/Data List",component:s,parameters:{layout:"padded"},tags:["autodocs"]},m={render:()=>a.jsxs(s,{children:[a.jsxs(t,{children:[a.jsx(e,{children:"Name"}),a.jsx(i,{children:"John Doe"})]}),a.jsxs(t,{children:[a.jsx(e,{children:"Email"}),a.jsx(i,{children:"john.doe@example.com"})]}),a.jsxs(t,{children:[a.jsx(e,{children:"Role"}),a.jsx(i,{children:"Developer"})]})]})},D={render:()=>a.jsx(r,{children:a.jsxs(s,{children:[a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Full Name"}),a.jsx(i,{children:"Sarah Johnson"})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Email"}),a.jsx(i,{children:a.jsx(k,{href:"mailto:sarah.j@example.com",children:"sarah.j@example.com"})})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Department"}),a.jsx(i,{children:a.jsx(c,{color:"indigo",children:"Engineering"})})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Role"}),a.jsx(i,{children:"Senior Frontend Developer"})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Status"}),a.jsx(i,{children:a.jsx(c,{color:"green",children:"Active"})})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Joined"}),a.jsx(i,{children:"January 15, 2023"})]})]})})},h={render:()=>a.jsx(r,{children:a.jsxs(s,{children:[a.jsxs(t,{align:"start",children:[a.jsx(e,{minWidth:"120px",children:"Project Name"}),a.jsx(i,{children:"Octuple Radix Design System"})]}),a.jsxs(t,{align:"start",children:[a.jsx(e,{minWidth:"120px",children:"Description"}),a.jsx(i,{children:"A modern design system built on Radix Themes with indigo accent, Poppins font, and Material Symbols icons."})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Status"}),a.jsx(i,{children:a.jsx(c,{color:"blue",children:"In Progress"})})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Priority"}),a.jsx(i,{children:a.jsx(c,{color:"orange",children:"High"})})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"120px",children:"Due Date"}),a.jsx(i,{children:"December 31, 2025"})]}),a.jsxs(t,{align:"start",children:[a.jsx(e,{minWidth:"120px",children:"Team"}),a.jsx(i,{children:a.jsxs(I,{gap:"1",wrap:"wrap",children:[a.jsx(c,{children:"Design"}),a.jsx(c,{children:"Engineering"}),a.jsx(c,{children:"Product"})]})})]})]})})},x={render:()=>a.jsxs(I,{direction:"column",gap:"4",children:[a.jsx(r,{children:a.jsxs(s,{size:"1",children:[a.jsxs(t,{children:[a.jsx(e,{children:"Size 1"}),a.jsx(i,{children:"Small"})]}),a.jsxs(t,{children:[a.jsx(e,{children:"Label"}),a.jsx(i,{children:"Value"})]})]})}),a.jsx(r,{children:a.jsxs(s,{size:"2",children:[a.jsxs(t,{children:[a.jsx(e,{children:"Size 2"}),a.jsx(i,{children:"Default"})]}),a.jsxs(t,{children:[a.jsx(e,{children:"Label"}),a.jsx(i,{children:"Value"})]})]})}),a.jsx(r,{children:a.jsxs(s,{size:"3",children:[a.jsxs(t,{children:[a.jsx(e,{children:"Size 3"}),a.jsx(i,{children:"Large"})]}),a.jsxs(t,{children:[a.jsx(e,{children:"Label"}),a.jsx(i,{children:"Value"})]})]})})]})},p={render:()=>a.jsxs(I,{direction:"column",gap:"4",children:[a.jsx(r,{children:a.jsxs(s,{orientation:"vertical",children:[a.jsxs(t,{children:[a.jsx(e,{children:"Vertical Orientation"}),a.jsx(i,{children:"Labels on top, values below"})]}),a.jsxs(t,{children:[a.jsx(e,{children:"Item 2"}),a.jsx(i,{children:"Second item"})]})]})}),a.jsx(r,{children:a.jsxs(s,{orientation:"horizontal",children:[a.jsxs(t,{children:[a.jsx(e,{minWidth:"140px",children:"Horizontal"}),a.jsx(i,{children:"Side by side (default)"})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"140px",children:"Item 2"}),a.jsx(i,{children:"Second item"})]})]})})]})},u={render:()=>a.jsx(r,{style:{maxWidth:500},children:a.jsxs(s,{children:[a.jsxs(t,{children:[a.jsx(e,{minWidth:"140px",children:"Operating System"}),a.jsx(i,{children:"macOS Sonoma 14.6"})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"140px",children:"Processor"}),a.jsx(i,{children:"Apple M2 Pro"})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"140px",children:"Memory"}),a.jsx(i,{children:"32 GB"})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"140px",children:"Storage"}),a.jsx(i,{children:"1 TB SSD"})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"140px",children:"Graphics"}),a.jsx(i,{children:"Apple M2 Pro 19-core GPU"})]}),a.jsxs(t,{children:[a.jsx(e,{minWidth:"140px",children:"Display"}),a.jsx(i,{children:"14-inch Liquid Retina XDR"})]})]})})};var V,g,S;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <DataList.Root>
      <DataList.Item>
        <DataList.Label>Name</DataList.Label>
        <DataList.Value>John Doe</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Email</DataList.Label>
        <DataList.Value>john.doe@example.com</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Role</DataList.Label>
        <DataList.Value>Developer</DataList.Value>
      </DataList.Item>
    </DataList.Root>
}`,...(S=(g=m.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var W,f,R;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Card>
      <DataList.Root>
        <DataList.Item>
          <DataList.Label minWidth="120px">Full Name</DataList.Label>
          <DataList.Value>Sarah Johnson</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Email</DataList.Label>
          <DataList.Value>
            <Link href="mailto:sarah.j@example.com">sarah.j@example.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Department</DataList.Label>
          <DataList.Value>
            <Badge color="indigo">Engineering</Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Role</DataList.Label>
          <DataList.Value>Senior Frontend Developer</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Status</DataList.Label>
          <DataList.Value>
            <Badge color="green">Active</Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Joined</DataList.Label>
          <DataList.Value>January 15, 2023</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
}`,...(R=(f=D.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var y,z,N;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card>
      <DataList.Root>
        <DataList.Item align="start">
          <DataList.Label minWidth="120px">Project Name</DataList.Label>
          <DataList.Value>Octuple Radix Design System</DataList.Value>
        </DataList.Item>
        <DataList.Item align="start">
          <DataList.Label minWidth="120px">Description</DataList.Label>
          <DataList.Value>
            A modern design system built on Radix Themes with indigo accent, 
            Poppins font, and Material Symbols icons.
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Status</DataList.Label>
          <DataList.Value>
            <Badge color="blue">In Progress</Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Priority</DataList.Label>
          <DataList.Value>
            <Badge color="orange">High</Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Due Date</DataList.Label>
          <DataList.Value>December 31, 2025</DataList.Value>
        </DataList.Item>
        <DataList.Item align="start">
          <DataList.Label minWidth="120px">Team</DataList.Label>
          <DataList.Value>
            <Flex gap="1" wrap="wrap">
              <Badge>Design</Badge>
              <Badge>Engineering</Badge>
              <Badge>Product</Badge>
            </Flex>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
}`,...(N=(z=h.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var P,v,B;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Card>
        <DataList.Root size="1">
          <DataList.Item>
            <DataList.Label>Size 1</DataList.Label>
            <DataList.Value>Small</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Label</DataList.Label>
            <DataList.Value>Value</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>

      <Card>
        <DataList.Root size="2">
          <DataList.Item>
            <DataList.Label>Size 2</DataList.Label>
            <DataList.Value>Default</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Label</DataList.Label>
            <DataList.Value>Value</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>

      <Card>
        <DataList.Root size="3">
          <DataList.Item>
            <DataList.Label>Size 3</DataList.Label>
            <DataList.Value>Large</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Label</DataList.Label>
            <DataList.Value>Value</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>
    </Flex>
}`,...(B=(v=x.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var C,E,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4">
      <Card>
        <DataList.Root orientation="vertical">
          <DataList.Item>
            <DataList.Label>Vertical Orientation</DataList.Label>
            <DataList.Value>Labels on top, values below</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Item 2</DataList.Label>
            <DataList.Value>Second item</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>

      <Card>
        <DataList.Root orientation="horizontal">
          <DataList.Item>
            <DataList.Label minWidth="140px">Horizontal</DataList.Label>
            <DataList.Value>Side by side (default)</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="140px">Item 2</DataList.Label>
            <DataList.Value>Second item</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>
    </Flex>
}`,...(w=(E=p.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var O,F,A;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 500
  }}>
      <DataList.Root>
        <DataList.Item>
          <DataList.Label minWidth="140px">Operating System</DataList.Label>
          <DataList.Value>macOS Sonoma 14.6</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Processor</DataList.Label>
          <DataList.Value>Apple M2 Pro</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Memory</DataList.Label>
          <DataList.Value>32 GB</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Storage</DataList.Label>
          <DataList.Value>1 TB SSD</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Graphics</DataList.Label>
          <DataList.Value>Apple M2 Pro 19-core GPU</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Display</DataList.Label>
          <DataList.Value>14-inch Liquid Retina XDR</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
}`,...(A=(F=u.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const Da=["Default","UserProfile","ProjectDetails","Sizes","Orientation","SystemInfo"];export{m as Default,p as Orientation,h as ProjectDetails,x as Sizes,u as SystemInfo,D as UserProfile,Da as __namedExportsOrder,ma as default};
