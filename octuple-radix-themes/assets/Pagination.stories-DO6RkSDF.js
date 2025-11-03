import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as n}from"./Pagination-X8W3rbC9.js";import{r as i}from"./index-BlmOqGMO.js";import{p as t}from"./flex-DvmXTkye.js";import{o as c}from"./card-B3UzYjvl.js";import{p as a}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./Icon-D_u5oAGh.js";import"./icon-button-C6Cl8Lr1.js";import"./index-Dbpq9gcs.js";import"./base-button-1bStz9fB.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./index-UwpWBZco.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./map-prop-values-CWqpaS2P.js";import"./button-DOEX7M_0.js";import"./text-field-XCzB25VA.js";import"./internal-BdPtub1_.js";const fe={title:"Components/Pagination",component:n,parameters:{layout:"padded"},tags:["autodocs"]};function d({totalPages:r,...g}){const[s,o]=i.useState(1);return e.jsxs(t,{direction:"column",gap:"3",children:[e.jsx(n,{currentPage:s,totalPages:r,onPageChange:o,...g}),e.jsxs(a,{size:"2",color:"gray",children:["Current page: ",s," of ",r]})]})}const m={render:()=>e.jsx(d,{totalPages:10})},p={render:()=>e.jsx(d,{totalPages:5})},P={render:()=>e.jsx(d,{totalPages:100})},x={render:()=>{const[r,g]=i.useState(1),[s,o]=i.useState(1),[u,l]=i.useState(1);return e.jsxs(t,{direction:"column",gap:"4",children:[e.jsx(c,{children:e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(a,{size:"2",weight:"bold",children:"Size 1 (Small)"}),e.jsx(n,{currentPage:r,totalPages:10,onPageChange:g,size:"1"})]})}),e.jsx(c,{children:e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(a,{size:"2",weight:"bold",children:"Size 2 (Default)"}),e.jsx(n,{currentPage:s,totalPages:10,onPageChange:o,size:"2"})]})}),e.jsx(c,{children:e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(a,{size:"2",weight:"bold",children:"Size 3 (Large)"}),e.jsx(n,{currentPage:u,totalPages:10,onPageChange:l,size:"3"})]})})]})}},h={render:()=>e.jsx(d,{totalPages:20,showFirstLast:!1})},j={render:()=>{const[r,g]=i.useState(1),s=12,o=10,u=120,l=(r-1)*o+1,ee=Math.min(r*o,u);return e.jsx(c,{children:e.jsxs(t,{direction:"column",gap:"4",children:[e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(a,{size:"3",weight:"bold",children:"Users List"}),Array.from({length:10},(te,b)=>e.jsxs(t,{justify:"between",p:"2",style:{background:"var(--gray-2)",borderRadius:"4px"},children:[e.jsxs(a,{size:"2",children:["User ",l+b]}),e.jsxs(a,{size:"2",color:"gray",children:["user",l+b,"@example.com"]})]},b))]}),e.jsxs(t,{justify:"between",align:"center",children:[e.jsxs(a,{size:"2",color:"gray",children:["Showing ",l,"-",ee," of ",u]}),e.jsx(n,{currentPage:r,totalPages:s,onPageChange:g})]})]})})}},S={render:()=>{const[r,g]=i.useState(5),[s,o]=i.useState(5);return e.jsxs(t,{direction:"column",gap:"4",children:[e.jsx(c,{children:e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(a,{size:"2",weight:"bold",children:"Sibling Count: 1 (Default)"}),e.jsx(n,{currentPage:r,totalPages:20,onPageChange:g,siblingCount:1})]})}),e.jsx(c,{children:e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(a,{size:"2",weight:"bold",children:"Sibling Count: 2"}),e.jsx(n,{currentPage:s,totalPages:20,onPageChange:o,siblingCount:2})]})})]})}},C={render:()=>e.jsx(d,{totalPages:50,showQuickJumper:!0})},z={render:()=>{const[r,g]=i.useState(1),[s,o]=i.useState(1),[u,l]=i.useState(1);return e.jsxs(t,{direction:"column",gap:"6",children:[e.jsx(c,{p:"4",children:e.jsxs(t,{direction:"column",gap:"3",children:[e.jsx(a,{size:"3",weight:"bold",children:"Size 1 with Jumper"}),e.jsx(n,{currentPage:r,totalPages:20,onPageChange:g,size:"1",showQuickJumper:!0})]})}),e.jsx(c,{p:"4",children:e.jsxs(t,{direction:"column",gap:"3",children:[e.jsx(a,{size:"3",weight:"bold",children:"Size 2 with Jumper (Default)"}),e.jsx(n,{currentPage:s,totalPages:20,onPageChange:o,size:"2",showQuickJumper:!0})]})}),e.jsx(c,{p:"4",children:e.jsxs(t,{direction:"column",gap:"3",children:[e.jsx(a,{size:"3",weight:"bold",children:"Size 3 with Jumper"}),e.jsx(n,{currentPage:u,totalPages:20,onPageChange:l,size:"3",showQuickJumper:!0})]})})]})}},w={render:()=>e.jsx(d,{totalPages:1e3,showQuickJumper:!0,showFirstLast:!0})};var F,f,T;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <PaginationDemo totalPages={10} />
}`,...(T=(f=m.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var J,y,D;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <PaginationDemo totalPages={5} />
}`,...(D=(y=p.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var k,I,L;P.parameters={...P.parameters,docs:{...(k=P.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <PaginationDemo totalPages={100} />
}`,...(L=(I=P.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var Q,W,M;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(1);
    const [page3, setPage3] = useState(1);
    return <Flex direction="column" gap="4">
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Size 1 (Small)</Text>
            <Pagination currentPage={page1} totalPages={10} onPageChange={setPage1} size="1" />
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Size 2 (Default)</Text>
            <Pagination currentPage={page2} totalPages={10} onPageChange={setPage2} size="2" />
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Size 3 (Large)</Text>
            <Pagination currentPage={page3} totalPages={10} onPageChange={setPage3} size="3" />
          </Flex>
        </Card>
      </Flex>;
  }
}`,...(M=(W=x.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var U,_,E;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <PaginationDemo totalPages={20} showFirstLast={false} />
}`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var R,v,A;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 12;
    const itemsPerPage = 10;
    const totalItems = 120;
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    return <Card>
        <Flex direction="column" gap="4">
          {/* Simulated table */}
          <Flex direction="column" gap="2">
            <Text size="3" weight="bold">Users List</Text>
            {Array.from({
            length: 10
          }, (_, i) => <Flex key={i} justify="between" p="2" style={{
            background: 'var(--gray-2)',
            borderRadius: '4px'
          }}>
                <Text size="2">User {startItem + i}</Text>
                <Text size="2" color="gray">user{startItem + i}@example.com</Text>
              </Flex>)}
          </Flex>

          {/* Pagination footer */}
          <Flex justify="between" align="center">
            <Text size="2" color="gray">
              Showing {startItem}-{endItem} of {totalItems}
            </Text>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </Flex>
        </Flex>
      </Card>;
  }
}`,...(A=(v=j.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var O,$,q;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(5);
    const [page2, setPage2] = useState(5);
    return <Flex direction="column" gap="4">
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Sibling Count: 1 (Default)</Text>
            <Pagination currentPage={page1} totalPages={20} onPageChange={setPage1} siblingCount={1} />
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Sibling Count: 2</Text>
            <Pagination currentPage={page2} totalPages={20} onPageChange={setPage2} siblingCount={2} />
          </Flex>
        </Card>
      </Flex>;
  }
}`,...(q=($=S.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var B,G,H;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <PaginationDemo totalPages={50} showQuickJumper />
}`,...(H=(G=C.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,N,V;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(1);
    const [page3, setPage3] = useState(1);
    return <Flex direction="column" gap="6">
        <Card p="4">
          <Flex direction="column" gap="3">
            <Text size="3" weight="bold">Size 1 with Jumper</Text>
            <Pagination currentPage={page1} totalPages={20} onPageChange={setPage1} size="1" showQuickJumper />
          </Flex>
        </Card>

        <Card p="4">
          <Flex direction="column" gap="3">
            <Text size="3" weight="bold">Size 2 with Jumper (Default)</Text>
            <Pagination currentPage={page2} totalPages={20} onPageChange={setPage2} size="2" showQuickJumper />
          </Flex>
        </Card>

        <Card p="4">
          <Flex direction="column" gap="3">
            <Text size="3" weight="bold">Size 3 with Jumper</Text>
            <Pagination currentPage={page3} totalPages={20} onPageChange={setPage3} size="3" showQuickJumper />
          </Flex>
        </Card>
      </Flex>;
  }
}`,...(V=(N=z.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <PaginationDemo totalPages={1000} showQuickJumper showFirstLast />
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Te=["Default","FewPages","ManyPages","Sizes","WithoutFirstLast","TablePagination","CustomSiblingCount","WithQuickJumper","JumperSizes","LargeDatasetWithJumper"];export{S as CustomSiblingCount,m as Default,p as FewPages,z as JumperSizes,w as LargeDatasetWithJumper,P as ManyPages,x as Sizes,j as TablePagination,C as WithQuickJumper,h as WithoutFirstLast,Te as __namedExportsOrder,fe as default};
