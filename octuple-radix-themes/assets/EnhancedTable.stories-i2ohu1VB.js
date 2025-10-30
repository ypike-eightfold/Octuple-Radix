import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as n}from"./index-DtL3pAzF.js";import{r as v,R as Qn}from"./index-BlmOqGMO.js";import{I as j}from"./Icon-D_u5oAGh.js";import{f as ue,T as pe,m as Xn,d as Gn,P as be,b as Yn}from"./table-DB334KEj.js";import{p as E}from"./flex-DvmXTkye.js";import{c as Ve}from"./checkbox-B8M7p9o-.js";import{s as Zn}from"./base-button-1bStz9fB.js";import{p as f}from"./text-C4SbqUme.js";import{u as ea}from"./text-field-XCzB25VA.js";import{P as na}from"./Pagination-X8W3rbC9.js";import{o as xe}from"./icon-button-C6Cl8Lr1.js";import{e as Ne}from"./badge-BMm2Ttez.js";import{e as De}from"./tooltip-CGhsJN4E.js";import{o as aa}from"./card-B3UzYjvl.js";import"./index-yBjzXJbu.js";import"./index-Dbpq9gcs.js";import"./scroll-area-C8qRYAdm.js";import"./radius.prop-CIarg28h.js";import"./get-subtree-wctCFMnl.js";import"./index-Cpd6F4Jl.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-CSHYywJy.js";import"./index-CH1-paxq.js";import"./index-5uDXI3f6.js";import"./index-Dkb_ZYRU.js";import"./index-DZCApzUK.js";import"./index-CWo8_AO2.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./internal-BdPtub1_.js";import"./base-checkbox.props-CssBQTeC.js";import"./index-Dz6nX4BC.js";import"./index-DZ2oWOeb.js";import"./index-BnD1EARC.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./icons-D7bXrj8K.js";import"./index-UwpWBZco.js";import"./map-prop-values-CWqpaS2P.js";import"./button-DOEX7M_0.js";import"./theme-Cr0RmA42.js";import"./index-Bq0PzALz.js";import"./index-CW4F2FBO.js";import"./index-CFeakEOz.js";function we({column:a,sortConfig:o,onSort:l}){const c=a.sortable||!!a.sorter,t=(o==null?void 0:o.key)===a.key,g=t?o.direction:void 0,b=()=>{c&&l(a.key)},h=w=>{c&&(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),l(a.key))},i=["sortable-header",c&&"sortable-header-clickable",t&&"sortable-header-active",g&&`sortable-header-${g}`].filter(Boolean).join(" ");return e.jsx(ue,{className:`${i} ${a.className||""}`,style:{textAlign:a.align||"left",width:a.width,cursor:c?"pointer":"default",userSelect:"none"},onClick:b,onKeyDown:h,tabIndex:c?0:void 0,role:c?"button":void 0,"aria-sort":t?g==="asc"?"ascending":"descending":c?"none":void 0,"aria-label":c?`Sort by ${a.title}${t?`, currently sorted ${g}ending`:""}`:void 0,children:e.jsxs(E,{align:"center",gap:"1",justify:a.align==="center"?"center":a.align==="right"?"end":"start",children:[e.jsx("span",{className:"sortable-header-title",children:a.title}),c&&e.jsxs("div",{className:"sortable-header-icons",children:[!t&&e.jsx(j,{name:"swap_vert",size:14,className:"sortable-header-icon-inactive"}),t&&g==="asc"&&e.jsx(j,{name:"keyboard_arrow_up",size:14,className:"sortable-header-icon-active"}),t&&g==="desc"&&e.jsx(j,{name:"keyboard_arrow_down",size:14,className:"sortable-header-icon-active"})]})]})})}try{we.displayName="SortableHeader",we.__docgenInfo={description:`Sortable Header Component

Renders a table column header with optional sorting functionality.
Includes visual indicators for sort direction and interactive hover states.`,displayName:"SortableHeader",props:{column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"ColumnDef<T>"}},sortConfig:{defaultValue:null,description:"",name:"sortConfig",required:!1,type:{name:"SortConfig | undefined"}},onSort:{defaultValue:null,description:"",name:"onSort",required:!0,type:{name:"(columnKey: string) => void"}}}}}catch{}function me({type:a,selectedRowKeys:o,dataSource:l,getRowKey:c,onChange:t,isHeader:g=!1,showSelectAll:b=!0,record:h,index:i,checkboxProps:w}){if(g){if(a==="checkbox"&&b){const R=l.map((x,N)=>c(x,N)),T=R.length>0&&R.every(x=>o.includes(x)),C=o.length>0&&o.length<R.length,S=x=>{x===!0?t(R,l):t([],[])};return e.jsx(ue,{style:{width:"48px",textAlign:"center"},children:e.jsx(Ve,{checked:T,onCheckedChange:S,"aria-label":"Select all rows",className:C?"checkbox-indeterminate":""})})}return e.jsx(ue,{style:{width:"48px"}})}if(!h||i===void 0)return null;const V=c(h,i),fe=o.includes(V),z=(w==null?void 0:w.disabled)||!1,A=R=>{if(z)return;const T=R===!0;let C,S;a==="checkbox"?T?C=[...o,V]:C=o.filter(x=>x!==V):C=T?[V]:[],S=l.filter((x,N)=>C.includes(c(x,N))),t(C,S)};return e.jsx(pe,{style:{width:"48px",textAlign:"center"},children:e.jsx(Ve,{checked:fe,onCheckedChange:A,disabled:z,"aria-label":`Select row ${i+1}`})})}try{me.displayName="SelectionColumn",me.__docgenInfo={description:`Selection Column Component

Renders checkbox or radio selection controls for table rows.
Handles both header (select all) and individual row selection.`,displayName:"SelectionColumn",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},selectedRowKeys:{defaultValue:null,description:"",name:"selectedRowKeys",required:!0,type:{name:"string[]"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"T[]"}},getRowKey:{defaultValue:null,description:"",name:"getRowKey",required:!0,type:{name:"(record: T, index: number) => string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selectedKeys: string[], selectedRows: T[]) => void"}},isHeader:{defaultValue:{value:"false"},description:"",name:"isHeader",required:!1,type:{name:"boolean | undefined"}},showSelectAll:{defaultValue:{value:"true"},description:"",name:"showSelectAll",required:!1,type:{name:"boolean | undefined"}},record:{defaultValue:null,description:"",name:"record",required:!1,type:{name:"T | undefined"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number | undefined"}},checkboxProps:{defaultValue:null,description:"",name:"checkboxProps",required:!1,type:{name:"{ disabled?: boolean | undefined; } | undefined"}}}}}catch{}function Se({message:a="Loading..."}){return e.jsxs("div",{className:"loading-overlay",children:[e.jsx("div",{className:"loading-overlay-backdrop"}),e.jsx("div",{className:"loading-overlay-content",children:e.jsxs(E,{direction:"column",align:"center",gap:"3",children:[e.jsx(Zn,{size:"3"}),a&&e.jsx(f,{size:"2",color:"gray",children:a})]})})]})}try{Se.displayName="LoadingOverlay",Se.__docgenInfo={description:`Loading Overlay Component

Displays a loading spinner with optional message over the table content.
Uses Radix Spinner for consistent styling.`,displayName:"LoadingOverlay",props:{message:{defaultValue:{value:"Loading..."},description:"",name:"message",required:!1,type:{name:"string | undefined"}}}}}catch{}function ve({message:a="No data available",icon:o="inbox",description:l}){return e.jsx("div",{className:"empty-state",children:e.jsxs(E,{direction:"column",align:"center",justify:"center",gap:"3",py:"8",children:[e.jsx(j,{name:o,size:48,className:"empty-state-icon",style:{color:"var(--gray-8)"}}),e.jsxs("div",{className:"empty-state-content",children:[typeof a=="string"?e.jsx(f,{size:"3",weight:"medium",align:"center",color:"gray",children:a}):a,l&&e.jsx(f,{size:"2",align:"center",color:"gray",mt:"1",children:l})]})]})})}try{ve.displayName="EmptyState",ve.__docgenInfo={description:`Empty State Component

Displays a message when the table has no data to show.
Includes optional icon and description for better UX.`,displayName:"EmptyState",props:{message:{defaultValue:{value:"No data available"},description:"",name:"message",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:{value:"inbox"},description:"",name:"icon",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}}}}}catch{}function he({value:a,onChange:o,placeholder:l="Search...",disabled:c=!1}){const t=b=>{o(b.target.value)},g=()=>{o("")};return e.jsx("div",{className:"search-input",children:e.jsx(E,{align:"center",gap:"2",style:{position:"relative",maxWidth:"320px"},children:e.jsxs("div",{style:{position:"relative",flex:1},children:[e.jsx(ea,{value:a,onChange:t,placeholder:l,disabled:c,size:"2",style:{paddingLeft:"32px",paddingRight:a?"32px":"12px"}}),e.jsx(j,{name:"search",size:16,style:{position:"absolute",left:"8px",top:"50%",transform:"translateY(-50%)",color:"var(--gray-9)",pointerEvents:"none"}}),a&&e.jsx("button",{type:"button",onClick:g,disabled:c,className:"search-input-clear",style:{position:"absolute",right:"6px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"2px",borderRadius:"2px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--gray-9)"},"aria-label":"Clear search",children:e.jsx(j,{name:"close",size:14})})]})})})}try{he.displayName="SearchInput",he.__docgenInfo={description:`Search Input Component

Provides a search input field for filtering table data.
Uses Radix TextField with search icon for consistent styling.`,displayName:"SearchInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},placeholder:{defaultValue:{value:"Search..."},description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}}}catch{}function Ce({current:a,pageSize:o,total:l,onChange:c,config:t}){const g=w=>{c(w,o)},b=Math.ceil(l/o),h=(t==null?void 0:t.showTotal)!==!1,i=typeof(t==null?void 0:t.showTotal)=="function"?t.showTotal(l,[(a-1)*o+1,Math.min(a*o,l)]):h?`${l} items`:void 0;return e.jsxs("div",{className:"table-pagination",children:[e.jsx(na,{currentPage:a,totalPages:b,onPageChange:g,size:"2",showFirstLast:b>7,showQuickJumper:t==null?void 0:t.showQuickJumper}),i&&e.jsx("div",{className:"table-pagination-total",children:i})]})}try{Ce.displayName="TablePagination",Ce.__docgenInfo={description:`Table Pagination Component

Wraps our existing Pagination component for use within Enhanced Table.
Handles page changes and integrates with table data management.`,displayName:"TablePagination",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(page: number, pageSize: number) => void"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"PaginationConfig | undefined"}}}}}catch{}function ke({record:a,expanded:o,onExpand:l,expandable:c=!0}){const t=g=>{g.stopPropagation(),l(!o,a)};return e.jsx(pe,{style:{width:"48px",textAlign:"center"},children:c?e.jsx(xe,{variant:"ghost",size:"1",onClick:t,"aria-label":o?"Collapse row":"Expand row",className:`expandable-row-button ${o?"expandable-row-button-expanded":""}`,children:e.jsx(j,{name:o?"keyboard_arrow_up":"keyboard_arrow_down",size:16,style:{transition:"transform 0.2s ease",transform:"rotate(0deg)"}})}):e.jsx("div",{style:{width:"24px",height:"24px"}})})}try{ke.displayName="ExpandableRow",ke.__docgenInfo={description:`Expandable Row Component

Renders the expand/collapse button for expandable table rows.
Handles the expand state and provides visual feedback.`,displayName:"ExpandableRow",props:{record:{defaultValue:null,description:"",name:"record",required:!0,type:{name:"T"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!0,type:{name:"(expanded: boolean, record: T) => void"}},expandable:{defaultValue:{value:"true"},description:"",name:"expandable",required:!1,type:{name:"boolean | undefined"}}}}}catch{}function ge({columns:a,dataSource:o=[],loading:l=!1,rowKey:c="id",rowSelection:t,defaultSort:g,onSort:b,pagination:h=!1,expandable:i,striped:w=!1,bordered:V=!1,hover:fe=!1,searchable:z=!1,searchPlaceholder:A="Search...",searchValue:R,onSearch:T,emptyMessage:C="No data available",onChange:S,onRow:x,size:N="2",variant:Jn="surface",className:Hn="",style:je}){const[u,I]=v.useState({data:o,loading:l,sortConfig:g,selectedRowKeys:(t==null?void 0:t.selectedRowKeys)||[],expandedRowKeys:(i==null?void 0:i.defaultExpandedRowKeys)||[],searchValue:R||"",pagination:{current:1,pageSize:typeof h=="object"&&h.pageSize||10,total:o.length}}),P=v.useCallback((r,s)=>typeof c=="function"?c(r):r[c]||s.toString(),[c]),B=v.useMemo(()=>{if(!z||!u.searchValue)return o;const r=u.searchValue.toLowerCase();return o.filter(s=>a.some(d=>{const m=s[d.dataIndex];return String(m).toLowerCase().includes(r)}))},[o,u.searchValue,z,a]),L=v.useMemo(()=>{if(!u.sortConfig)return B;const{key:r,direction:s}=u.sortConfig,d=a.find(m=>m.key===r);return d?[...B].sort((m,k)=>{const D=m[d.dataIndex],M=k[d.dataIndex];if(typeof d.sorter=="function"){const U=d.sorter(m,k);return s==="desc"?-U:U}return D<M?s==="asc"?-1:1:D>M?s==="asc"?1:-1:0}):B},[B,u.sortConfig,a]),K=v.useMemo(()=>{if(!h)return L;const{current:r,pageSize:s}=u.pagination,d=(r-1)*s,m=d+s;return L.slice(d,m)},[L,u.pagination,h]),ye=(t==null?void 0:t.type)&&(t.type==="checkbox"||t.type==="radio"),W=!!(i!=null&&i.expandedRowRender),$n=v.useCallback(r=>{const s=u.sortConfig;let d="asc";(s==null?void 0:s.key)===r&&(d=s.direction==="asc"?"desc":"asc");const m={key:r,direction:d};I(k=>({...k,sortConfig:m})),b&&b(r,d),S&&S(u.pagination,{},m,{action:"sort"})},[u.sortConfig,u.pagination,b,S]),Re=v.useCallback((r,s)=>{I(d=>({...d,selectedRowKeys:r})),t!=null&&t.onChange&&t.onChange(r,s)},[t]),Te=v.useCallback(r=>{I(s=>({...s,searchValue:r,pagination:{...s.pagination,current:1}})),T&&T(r)},[T]),Fn=v.useCallback((r,s)=>{const d={...u.pagination,current:r,pageSize:s};I(m=>({...m,pagination:d})),typeof h=="object"&&h.onChange&&h.onChange(r,s),S&&S(d,{},u.sortConfig,{action:"paginate"})},[u.pagination,u.sortConfig,h,S]),On=v.useCallback((r,s)=>{const d=P(s,0);I(m=>{const k=r?[...m.expandedRowKeys,d]:m.expandedRowKeys.filter(D=>D!==d);return{...m,expandedRowKeys:k}}),i!=null&&i.onExpand&&i.onExpand(r,s)},[P,i]),_e=["enhanced-table",w&&"enhanced-table-striped",V&&"enhanced-table-bordered",fe&&"enhanced-table-hover",l&&"enhanced-table-loading",Hn].filter(Boolean).join(" ");return!l&&K.length===0?e.jsxs("div",{className:_e,style:je,children:[z&&e.jsx("div",{className:"enhanced-table-search",children:e.jsx(he,{value:u.searchValue,onChange:Te,placeholder:A})}),e.jsx(ve,{message:C})]}):e.jsxs("div",{className:_e,style:je,children:[z&&e.jsx("div",{className:"enhanced-table-search",children:e.jsx(he,{value:u.searchValue,onChange:Te,placeholder:A})}),e.jsxs("div",{className:"enhanced-table-container",children:[e.jsxs(Xn,{size:N,variant:Jn,children:[e.jsx(Gn,{children:e.jsxs(be,{children:[ye&&e.jsx(me,{type:t.type,selectedRowKeys:u.selectedRowKeys,dataSource:K,getRowKey:P,onChange:Re,showSelectAll:t==null?void 0:t.showSelectAll,isHeader:!0}),W&&e.jsx(ue,{style:{width:"48px"}}),a.map(r=>e.jsx(we,{column:r,sortConfig:u.sortConfig,onSort:$n},r.key))]})}),e.jsx(Yn,{children:K.map((r,s)=>{var M,U;const d=P(r,s),m=u.selectedRowKeys.includes(d),k=u.expandedRowKeys.includes(d),D=x?x(r,s):{};return e.jsxs(Qn.Fragment,{children:[e.jsxs(be,{className:`enhanced-table-row ${m?"enhanced-table-row-selected":""}`,...D,children:[ye&&e.jsx(me,{type:t.type,selectedRowKeys:u.selectedRowKeys,dataSource:K,getRowKey:P,onChange:Re,record:r,index:s,checkboxProps:(M=t==null?void 0:t.getCheckboxProps)==null?void 0:M.call(t,r)}),W&&e.jsx(ke,{record:r,expanded:k,onExpand:On,expandable:((U=i.rowExpandable)==null?void 0:U.call(i,r))??!0}),a.map(_=>{const ze=r[_.dataIndex],Ee=_.render?_.render(ze,r,s):String(ze||"");return e.jsx(pe,{style:{textAlign:_.align||"left",width:_.width},className:_.className,children:_.ellipsis?e.jsx(f,{truncate:!0,children:Ee}):Ee},_.key)})]}),W&&k&&(i==null?void 0:i.expandedRowRender)&&e.jsx(be,{className:"enhanced-table-expanded-row",children:e.jsx(pe,{colSpan:a.length+(ye?1:0)+(W?1:0),children:e.jsx("div",{className:"enhanced-table-expanded-content",children:i.expandedRowRender(r,s)})})})]},d)})})]}),l&&e.jsx(Se,{})]}),h&&e.jsx("div",{className:"enhanced-table-pagination",children:e.jsx(Ce,{current:u.pagination.current,pageSize:u.pagination.pageSize,total:L.length,onChange:Fn,config:typeof h=="object"?h:void 0})})]})}try{ge.displayName="EnhancedTable",ge.__docgenInfo={description:`Enhanced Table Component

A powerful table component that wraps Radix UI Table with additional features:
- Column-based configuration
- Sorting with visual indicators
- Row selection (checkbox/radio)
- Pagination integration
- Search and filtering
- Loading and empty states
- Expandable rows
- Visual enhancements (striped, hover, bordered)

Maintains full backward compatibility with existing Radix Table usage.`,displayName:"EnhancedTable",props:{columns:{defaultValue:null,description:"Column definitions",name:"columns",required:!0,type:{name:"ColumnDef<T>[]"}},dataSource:{defaultValue:{value:"[]"},description:"Data source array",name:"dataSource",required:!1,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean | undefined"}},rowKey:{defaultValue:{value:"id"},description:"Row key extractor",name:"rowKey",required:!1,type:{name:"string | ((record: T) => string) | undefined"}},rowSelection:{defaultValue:null,description:"Row selection configuration",name:"rowSelection",required:!1,type:{name:"RowSelection<T> | undefined"}},defaultSort:{defaultValue:null,description:"Default sort configuration",name:"defaultSort",required:!1,type:{name:"SortConfig | undefined"}},onSort:{defaultValue:null,description:"Sort change callback",name:"onSort",required:!1,type:{name:'((key: string, direction: "asc" | "desc") => void) | undefined'}},pagination:{defaultValue:{value:"false"},description:"Pagination configuration",name:"pagination",required:!1,type:{name:"boolean | PaginationConfig | undefined"}},expandable:{defaultValue:null,description:"Expandable row configuration",name:"expandable",required:!1,type:{name:"ExpandableConfig<T> | undefined"}},striped:{defaultValue:{value:"false"},description:"Striped row styling",name:"striped",required:!1,type:{name:"boolean | undefined"}},bordered:{defaultValue:{value:"false"},description:"Bordered table styling",name:"bordered",required:!1,type:{name:"boolean | undefined"}},hover:{defaultValue:{value:"false"},description:"Hover effects on rows",name:"hover",required:!1,type:{name:"boolean | undefined"}},searchable:{defaultValue:{value:"false"},description:"Global search functionality",name:"searchable",required:!1,type:{name:"boolean | undefined"}},searchPlaceholder:{defaultValue:{value:"Search..."},description:"Search input placeholder",name:"searchPlaceholder",required:!1,type:{name:"string | undefined"}},searchValue:{defaultValue:null,description:"Search value (controlled)",name:"searchValue",required:!1,type:{name:"string | undefined"}},onSearch:{defaultValue:null,description:"Search change callback",name:"onSearch",required:!1,type:{name:"((value: string) => void) | undefined"}},emptyMessage:{defaultValue:{value:"No data available"},description:"Custom empty state message",name:"emptyMessage",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Table change callback (pagination, filters, sorter)",name:"onChange",required:!1,type:{name:"((pagination: any, filters: any, sorter: any, extra: any) => void) | undefined"}},onRow:{defaultValue:null,description:"Row click callback",name:"onRow",required:!1,type:{name:"((record: T, index: number) => { onClick?: ((event: MouseEvent<HTMLTableRowElement, MouseEvent>) => void) | undefined; onDoubleClick?: ((event: MouseEvent<...>) => void) | undefined; onMouseEnter?: ((event: MouseEvent<...>) => void) | undefined; onMouseLeave?: ((event: MouseEvent<...>) => void) | undefined; }) | und..."}},size:{defaultValue:{value:"2"},description:"Table size variant",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},variant:{defaultValue:{value:"surface"},description:"Table style variant",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"surface"'},{value:'"ghost"'}]}},className:{defaultValue:{value:""},description:"Additional CSS class name",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Inline styles",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}try{EnhancedTableProps.displayName="EnhancedTableProps",EnhancedTableProps.__docgenInfo={description:"Enhanced Table Props",displayName:"EnhancedTableProps",props:{}}}catch{}try{ColumnDef.displayName="ColumnDef",ColumnDef.__docgenInfo={description:"Column definition for enhanced table",displayName:"ColumnDef",props:{}}}catch{}const p=[{id:"1",name:"John Doe",email:"john@example.com",role:"Developer",status:"active",joinDate:"2023-01-15"},{id:"2",name:"Jane Smith",email:"jane@example.com",role:"Designer",status:"active",joinDate:"2023-02-20"},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"Manager",status:"inactive",joinDate:"2022-11-10"},{id:"4",name:"Alice Wilson",email:"alice@example.com",role:"Developer",status:"pending",joinDate:"2023-03-05"},{id:"5",name:"Charlie Brown",email:"charlie@example.com",role:"QA Engineer",status:"active",joinDate:"2023-01-28"}],Ga={title:"Components/Enhanced Table",component:ge,parameters:{layout:"padded",docs:{description:{component:"Enhanced Table component built on top of Radix UI Table with advanced features like sorting, selection, pagination, and search. Use the controls below to experiment with different props and see how they affect the table."}}},tags:["autodocs"],argTypes:{columns:{control:!1,description:"Column definitions array with keys, titles, dataIndex, and optional render/sort functions"},dataSource:{control:!1,description:"Array of data objects to display in the table"},loading:{control:"boolean",description:"Show loading overlay with spinner"},rowKey:{control:"text",description:'Property name to use as unique row identifier (defaults to "id")'},striped:{control:"boolean",description:"Enable alternating row background colors for better readability"},bordered:{control:"boolean",description:"Add borders around the entire table and cells"},hover:{control:"boolean",description:"Enable hover effects on table rows"},size:{control:"select",options:["1","2","3"],description:"Table size variant (1=compact, 2=default, 3=large)"},variant:{control:"select",options:["surface","ghost"],description:"Table visual style variant"},searchable:{control:"boolean",description:"Enable global search functionality with input field"},searchPlaceholder:{control:"text",description:"Placeholder text for the search input field"},searchValue:{control:"text",description:"Controlled search input value"},emptyMessage:{control:"text",description:"Message to show when no data is available"},"rowSelection.type":{control:"select",options:["checkbox","radio"],description:"Type of row selection (checkbox for multi-select, radio for single-select)",if:{arg:"rowSelection",exists:!0}},"pagination.pageSize":{control:{type:"number",min:5,max:100,step:5},description:"Number of items to display per page"},"pagination.showQuickJumper":{control:"boolean",description:"Show input field to jump to specific page number"},"pagination.showSizeChanger":{control:"boolean",description:"Show dropdown to change page size"},"pagination.showTotal":{control:"boolean",description:"Show total items count information"},"defaultSort.key":{control:"text",description:"Column key to sort by default"},"defaultSort.direction":{control:"select",options:["asc","desc"],description:"Default sort direction"},"expandable.rowExpandable":{control:!1,description:"Function to determine which rows can be expanded"},onSort:{control:!1,description:'Callback when column sort changes. Receives (key: string, direction: "asc" | "desc")'},onSearch:{control:!1,description:"Callback when search value changes. Receives (value: string)"},onChange:{control:!1,description:"General table change callback for pagination, filters, sorting"},onRow:{control:!1,description:"Row event handlers. Returns object with onClick, onDoubleClick, onMouseEnter, onMouseLeave"},className:{control:"text",description:"Additional CSS class names"}}},y=[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"email",title:"Email",dataIndex:"email",sortable:!0},{key:"role",title:"Role",dataIndex:"role",sortable:!0}],q=[{key:"name",title:"Name",dataIndex:"name",sortable:!0,width:200},{key:"email",title:"Email",dataIndex:"email",sortable:!0,ellipsis:!0},{key:"role",title:"Role",dataIndex:"role",sortable:!0,align:"center",render:a=>e.jsx(Ne,{color:a==="Manager"?"purple":a==="Developer"?"blue":a==="Designer"?"green":"gray",children:a})},{key:"status",title:"Status",dataIndex:"status",align:"center",sortable:!0,render:a=>e.jsx(Ne,{color:a==="active"?"green":a==="inactive"?"red":"orange",variant:"soft",children:a})},{key:"joinDate",title:"Join Date",dataIndex:"joinDate",sortable:!0,align:"right",render:a=>new Date(a).toLocaleDateString()},{key:"actions",title:"Actions",dataIndex:"id",align:"center",width:120,render:(a,o)=>e.jsxs(E,{gap:"1",justify:"center",children:[e.jsx(De,{content:"Edit user",children:e.jsx(xe,{variant:"ghost",size:"1",children:e.jsx(j,{name:"edit",size:16})})}),e.jsx(De,{content:"Delete user",children:e.jsx(xe,{variant:"ghost",size:"1",color:"red",children:e.jsx(j,{name:"delete",size:16})})})]})}],J={args:{columns:y,dataSource:p,onRow:n(),onSort:n(),onSearch:n(),onChange:n()},parameters:{docs:{description:{story:"Basic Enhanced Table with minimal configuration. Shows essential functionality with sortable columns and clean layout."}}}},H={args:{columns:q,dataSource:p,striped:!1,bordered:!1,hover:!1,searchable:!1,loading:!1,size:"2",variant:"surface",searchPlaceholder:"Search users...",emptyMessage:"No users found",rowKey:"id",onSort:n(),onSearch:n(),onChange:n(),onRow:n(),rowSelection:void 0,pagination:!1,defaultSort:void 0,expandable:void 0},parameters:{docs:{description:{story:"Interactive playground to experiment with all Enhanced Table features. Use the controls below to toggle different props and see how they affect the table appearance and behavior in real-time."}}}},$={args:{columns:y,dataSource:p,defaultSort:{key:"name",direction:"asc"},onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Table with default sorting applied. Click column headers to change sort direction and column."}}}},F={args:{columns:y,dataSource:p,rowSelection:{type:"checkbox",onChange:n()},onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Table with checkbox row selection. Enable multi-select with checkboxes and select-all header functionality."}}}},O={args:{columns:q,dataSource:p,searchable:!0,searchPlaceholder:"Search users...",onSearch:n(),onSort:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Table with global search functionality. Type to filter all rows across all columns."}}}},Q={args:{columns:q,dataSource:[...p,...p,...p],pagination:{pageSize:5,showQuickJumper:!0,showTotal:n().mockReturnValue("Showing items"),onChange:n()},onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Table with pagination controls. Navigate through pages, jump to specific page, and see total counts."}}}},X={args:{columns:q,dataSource:[...p,...p,...p],searchable:!0,rowSelection:{type:"checkbox",onChange:n()},pagination:{pageSize:5,showQuickJumper:!0,showTotal:n().mockReturnValue("Showing items"),onChange:n()},striped:!0,hover:!0,defaultSort:{key:"name",direction:"asc"},onSort:n(),onSearch:n(),onRow:n()},parameters:{docs:{description:{story:"Comprehensive example showing all Enhanced Table features working together: sorting, search, selection, pagination, and visual enhancements."}}}},G={args:{columns:y,dataSource:p,loading:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Table in loading state with overlay spinner. Use while fetching data from API."}}}},Y={args:{columns:y,dataSource:[],emptyMessage:"No users found. Try adjusting your search criteria.",onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Empty table state with custom message. Shows when no data is available."}}}},Z={args:{columns:y,dataSource:[],emptyMessage:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(f,{size:"3",weight:"medium",style:{display:"block",marginBottom:"8px"},children:"No team members yet"}),e.jsx(f,{size:"2",color:"gray",style:{display:"block",marginBottom:"16px"},children:"Invite your first team member to get started"}),e.jsx("button",{style:{background:"var(--accent-9)",color:"white",border:"none",borderRadius:"var(--radius-2)",padding:"8px 16px",cursor:"pointer"},children:"Invite Member"})]}),onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Empty state with custom JSX content including actions. Provides rich empty state experience."}}}},ee={args:{columns:q.slice(0,4),dataSource:p,expandable:{expandedRowRender:a=>e.jsx(aa,{children:e.jsxs(E,{gap:"4",p:"4",children:[e.jsxs("div",{children:[e.jsx(f,{size:"2",weight:"bold",style:{display:"block",marginBottom:"4px"},children:"Contact Information"}),e.jsxs(f,{size:"2",color:"gray",children:["Email: ",a.email]}),e.jsxs(f,{size:"2",color:"gray",children:["Join Date: ",new Date(a.joinDate).toLocaleDateString()]})]}),e.jsxs("div",{children:[e.jsx(f,{size:"2",weight:"bold",style:{display:"block",marginBottom:"4px"},children:"Role Details"}),e.jsxs(f,{size:"2",color:"gray",children:["Position: ",a.role]}),e.jsxs(f,{size:"2",color:"gray",children:["Status: ",a.status]})]})]})}),rowExpandable:a=>a.status==="active",onExpand:n()},onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Table with expandable rows. Click the expand icon to show additional details. Only active users can be expanded."}}}},ne={args:{columns:y,dataSource:p.slice(0,3),size:"1",striped:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:'Compact table size (size="1") - smaller padding and text for data-dense layouts.'}}}},ae={args:{columns:y,dataSource:p.slice(0,3),size:"2",striped:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:'Default table size (size="2") - standard padding and text size for most use cases.'}}}},te={args:{columns:y,dataSource:p.slice(0,3),size:"3",striped:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:'Large table size (size="3") - increased padding and text for better readability.'}}}},oe={args:{columns:y,dataSource:p.slice(0,3),striped:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Striped table rows - alternating background colors for better visual separation."}}}},re={args:{columns:y,dataSource:p.slice(0,3),bordered:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Bordered table - adds borders around the table and all cells."}}}},se={args:{columns:y,dataSource:p.slice(0,3),hover:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Hover effects - highlights table rows when mouse hovers over them."}}}},ie={args:{columns:y,dataSource:p.slice(0,3),striped:!0,bordered:!0,hover:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"All visual variants combined - striped, bordered, and hover effects together."}}}},le={args:{columns:y,dataSource:p,rowSelection:{type:"radio",onChange:n()},onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Table with radio button selection for single-row selection only."}}}},ce={render:()=>e.jsxs(E,{direction:"column",gap:"6",children:[e.jsxs("div",{children:[e.jsx(f,{size:"3",weight:"bold",style:{marginBottom:"16px",display:"block"},children:"Enhanced Table (New)"}),e.jsx(ge,{columns:y,dataSource:p.slice(0,3),striped:!0,hover:!0})]}),e.jsxs("div",{children:[e.jsx(f,{size:"3",weight:"bold",style:{marginBottom:"16px",display:"block"},children:"Original Radix Table (Still Works)"}),e.jsx("div",{style:{border:"1px solid var(--gray-6)",borderRadius:"var(--radius-3)",overflow:"hidden",padding:"var(--space-4)"},children:e.jsx(f,{size:"2",color:"gray",children:"Original Radix Table usage remains unchanged and fully functional"})})]})]}),parameters:{docs:{description:{story:"Demonstrates backward compatibility - existing Radix Table components continue to work alongside the new Enhanced Table without any breaking changes."}}}},ta=a=>{const o=["Developer","Designer","Manager","QA Engineer","DevOps"],l=["active","inactive","pending"];return Array.from({length:a},(c,t)=>({id:`user-${t+1}`,name:`User ${t+1}`,email:`user${t+1}@example.com`,role:o[t%o.length],status:l[t%l.length],joinDate:new Date(2022,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1).toISOString().split("T")[0]}))},de={args:{columns:q,dataSource:ta(1e3),searchable:!0,rowSelection:{type:"checkbox",onChange:n()},pagination:{pageSize:20,showQuickJumper:!0,showSizeChanger:!0,showTotal:n().mockReturnValue("Showing items"),onChange:n()},striped:!0,hover:!0,onSort:n(),onSearch:n(),onChange:n(),onRow:n()},parameters:{docs:{description:{story:"Performance test with 1000 rows. Shows search, selection, and pagination working efficiently with large datasets."}}}};var qe,Ie,Pe;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    onRow: fn(),
    onSort: fn(),
    onSearch: fn(),
    onChange: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic Enhanced Table with minimal configuration. Shows essential functionality with sortable columns and clean layout.'
      }
    }
  }
}`,...(Pe=(Ie=J.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Me,Ue,Ae;H.parameters={...H.parameters,docs:{...(Me=H.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    columns: enhancedColumns,
    dataSource: sampleUsers,
    // Visual variants - all disabled by default
    striped: false,
    bordered: false,
    hover: false,
    // Features - all disabled by default
    searchable: false,
    loading: false,
    // Radix props
    size: '2',
    variant: 'surface',
    // Search
    searchPlaceholder: 'Search users...',
    // Empty state
    emptyMessage: 'No users found',
    // Row key
    rowKey: 'id',
    // Function props with explicit spies
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn(),
    // Basic props that will be controllable through nested object args
    // (These are set via special controls due to complex object nature)
    rowSelection: undefined,
    // Will be configured through controls if needed
    pagination: false,
    // Will be configured through controls if needed
    defaultSort: undefined,
    // Will be configured through controls if needed
    expandable: undefined // Will be configured through controls if needed
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Enhanced Table features. Use the controls below to toggle different props and see how they affect the table appearance and behavior in real-time.'
      }
    }
  }
}`,...(Ae=(Ue=H.parameters)==null?void 0:Ue.docs)==null?void 0:Ae.source}}};var Be,Le,Ke;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    defaultSort: {
      key: 'name',
      direction: 'asc'
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with default sorting applied. Click column headers to change sort direction and column.'
      }
    }
  }
}`,...(Ke=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Ke.source}}};var We,Je,He;F.parameters={...F.parameters,docs:{...(We=F.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    rowSelection: {
      type: 'checkbox',
      onChange: fn()
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with checkbox row selection. Enable multi-select with checkboxes and select-all header functionality.'
      }
    }
  }
}`,...(He=(Je=F.parameters)==null?void 0:Je.docs)==null?void 0:He.source}}};var $e,Fe,Oe;O.parameters={...O.parameters,docs:{...($e=O.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    columns: enhancedColumns,
    dataSource: sampleUsers,
    searchable: true,
    searchPlaceholder: 'Search users...',
    onSearch: fn(),
    onSort: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with global search functionality. Type to filter all rows across all columns.'
      }
    }
  }
}`,...(Oe=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};var Qe,Xe,Ge;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    columns: enhancedColumns,
    dataSource: [...sampleUsers, ...sampleUsers, ...sampleUsers],
    // More data for pagination
    pagination: {
      pageSize: 5,
      showQuickJumper: true,
      showTotal: fn().mockReturnValue('Showing items'),
      onChange: fn()
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with pagination controls. Navigate through pages, jump to specific page, and see total counts.'
      }
    }
  }
}`,...(Ge=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.source}}};var Ye,Ze,en;X.parameters={...X.parameters,docs:{...(Ye=X.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    columns: enhancedColumns,
    dataSource: [...sampleUsers, ...sampleUsers, ...sampleUsers],
    searchable: true,
    rowSelection: {
      type: 'checkbox',
      onChange: fn()
    },
    pagination: {
      pageSize: 5,
      showQuickJumper: true,
      showTotal: fn().mockReturnValue('Showing items'),
      onChange: fn()
    },
    striped: true,
    hover: true,
    defaultSort: {
      key: 'name',
      direction: 'asc'
    },
    onSort: fn(),
    onSearch: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive example showing all Enhanced Table features working together: sorting, search, selection, pagination, and visual enhancements.'
      }
    }
  }
}`,...(en=(Ze=X.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,an,tn;G.parameters={...G.parameters,docs:{...(nn=G.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    loading: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state with overlay spinner. Use while fetching data from API.'
      }
    }
  }
}`,...(tn=(an=G.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var on,rn,sn;Y.parameters={...Y.parameters,docs:{...(on=Y.parameters)==null?void 0:on.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: [],
    emptyMessage: 'No users found. Try adjusting your search criteria.',
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty table state with custom message. Shows when no data is available.'
      }
    }
  }
}`,...(sn=(rn=Y.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var ln,cn,dn;Z.parameters={...Z.parameters,docs:{...(ln=Z.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: [],
    emptyMessage: <div style={{
      textAlign: 'center'
    }}>
        <Text size="3" weight="medium" style={{
        display: 'block',
        marginBottom: '8px'
      }}>
          No team members yet
        </Text>
        <Text size="2" color="gray" style={{
        display: 'block',
        marginBottom: '16px'
      }}>
          Invite your first team member to get started
        </Text>
        <button style={{
        background: 'var(--accent-9)',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-2)',
        padding: '8px 16px',
        cursor: 'pointer'
      }}>
          Invite Member
        </button>
      </div>,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state with custom JSX content including actions. Provides rich empty state experience.'
      }
    }
  }
}`,...(dn=(cn=Z.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var un,pn,mn;ee.parameters={...ee.parameters,docs:{...(un=ee.parameters)==null?void 0:un.docs,source:{originalSource:`{
  args: {
    columns: enhancedColumns.slice(0, 4),
    // Fewer columns for better display
    dataSource: sampleUsers,
    expandable: {
      expandedRowRender: (record: User) => <Card>
          <Flex gap="4" p="4">
            <div>
              <Text size="2" weight="bold" style={{
              display: 'block',
              marginBottom: '4px'
            }}>
                Contact Information
              </Text>
              <Text size="2" color="gray">Email: {record.email}</Text>
              <Text size="2" color="gray">Join Date: {new Date(record.joinDate).toLocaleDateString()}</Text>
            </div>
            <div>
              <Text size="2" weight="bold" style={{
              display: 'block',
              marginBottom: '4px'
            }}>
                Role Details
              </Text>
              <Text size="2" color="gray">Position: {record.role}</Text>
              <Text size="2" color="gray">Status: {record.status}</Text>
            </div>
          </Flex>
        </Card>,
      rowExpandable: (record: User) => record.status === 'active',
      onExpand: fn()
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with expandable rows. Click the expand icon to show additional details. Only active users can be expanded.'
      }
    }
  }
}`,...(mn=(pn=ee.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};var hn,gn,fn;ne.parameters={...ne.parameters,docs:{...(hn=ne.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    size: '1',
    striped: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact table size (size="1") - smaller padding and text for data-dense layouts.'
      }
    }
  }
}`,...(fn=(gn=ne.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var yn,bn,xn;ae.parameters={...ae.parameters,docs:{...(yn=ae.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    size: '2',
    striped: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Default table size (size="2") - standard padding and text size for most use cases.'
      }
    }
  }
}`,...(xn=(bn=ae.parameters)==null?void 0:bn.docs)==null?void 0:xn.source}}};var wn,Sn,vn;te.parameters={...te.parameters,docs:{...(wn=te.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    size: '3',
    striped: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Large table size (size="3") - increased padding and text for better readability.'
      }
    }
  }
}`,...(vn=(Sn=te.parameters)==null?void 0:Sn.docs)==null?void 0:vn.source}}};var Cn,kn,jn;oe.parameters={...oe.parameters,docs:{...(Cn=oe.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    striped: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Striped table rows - alternating background colors for better visual separation.'
      }
    }
  }
}`,...(jn=(kn=oe.parameters)==null?void 0:kn.docs)==null?void 0:jn.source}}};var Rn,Tn,_n;re.parameters={...re.parameters,docs:{...(Rn=re.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    bordered: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Bordered table - adds borders around the table and all cells.'
      }
    }
  }
}`,...(_n=(Tn=re.parameters)==null?void 0:Tn.docs)==null?void 0:_n.source}}};var zn,En,Vn;se.parameters={...se.parameters,docs:{...(zn=se.parameters)==null?void 0:zn.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    hover: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover effects - highlights table rows when mouse hovers over them.'
      }
    }
  }
}`,...(Vn=(En=se.parameters)==null?void 0:En.docs)==null?void 0:Vn.source}}};var Nn,Dn,qn;ie.parameters={...ie.parameters,docs:{...(Nn=ie.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers.slice(0, 3),
    striped: true,
    bordered: true,
    hover: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'All visual variants combined - striped, bordered, and hover effects together.'
      }
    }
  }
}`,...(qn=(Dn=ie.parameters)==null?void 0:Dn.docs)==null?void 0:qn.source}}};var In,Pn,Mn;le.parameters={...le.parameters,docs:{...(In=le.parameters)==null?void 0:In.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    dataSource: sampleUsers,
    rowSelection: {
      type: 'radio',
      onChange: fn()
    },
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with radio button selection for single-row selection only.'
      }
    }
  }
}`,...(Mn=(Pn=le.parameters)==null?void 0:Pn.docs)==null?void 0:Mn.source}}};var Un,An,Bn;ce.parameters={...ce.parameters,docs:{...(Un=ce.parameters)==null?void 0:Un.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="6">
      <div>
        <Text size="3" weight="bold" style={{
        marginBottom: '16px',
        display: 'block'
      }}>
          Enhanced Table (New)
        </Text>
        <EnhancedTable columns={basicColumns} dataSource={sampleUsers.slice(0, 3)} striped hover />
      </div>
      
      <div>
        <Text size="3" weight="bold" style={{
        marginBottom: '16px',
        display: 'block'
      }}>
          Original Radix Table (Still Works)
        </Text>
        <div style={{
        border: '1px solid var(--gray-6)',
        borderRadius: 'var(--radius-3)',
        overflow: 'hidden',
        padding: 'var(--space-4)'
      }}>
          {/* This would be the original Table.Root component */}
          <Text size="2" color="gray">
            Original Radix Table usage remains unchanged and fully functional
          </Text>
        </div>
      </div>
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates backward compatibility - existing Radix Table components continue to work alongside the new Enhanced Table without any breaking changes.'
      }
    }
  }
}`,...(Bn=(An=ce.parameters)==null?void 0:An.docs)==null?void 0:Bn.source}}};var Ln,Kn,Wn;de.parameters={...de.parameters,docs:{...(Ln=de.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  args: {
    columns: enhancedColumns,
    dataSource: generateLargeDataset(1000),
    searchable: true,
    rowSelection: {
      type: 'checkbox',
      onChange: fn()
    },
    pagination: {
      pageSize: 20,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: fn().mockReturnValue('Showing items'),
      onChange: fn()
    },
    striped: true,
    hover: true,
    onSort: fn(),
    onSearch: fn(),
    onChange: fn(),
    onRow: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Performance test with 1000 rows. Shows search, selection, and pagination working efficiently with large datasets.'
      }
    }
  }
}`,...(Wn=(Kn=de.parameters)==null?void 0:Kn.docs)==null?void 0:Wn.source}}};const Ya=["Default","Playground","WithSorting","WithSelection","WithSearch","WithPagination","WithAllFeatures","Loading","Empty","CustomEmpty","Expandable","SizeCompact","SizeDefault","SizeLarge","VariantStriped","VariantBordered","VariantHover","VariantAllCombined","RadioSelection","BackwardCompatibility","LargeDataset"];export{ce as BackwardCompatibility,Z as CustomEmpty,J as Default,Y as Empty,ee as Expandable,de as LargeDataset,G as Loading,H as Playground,le as RadioSelection,ne as SizeCompact,ae as SizeDefault,te as SizeLarge,ie as VariantAllCombined,re as VariantBordered,se as VariantHover,oe as VariantStriped,X as WithAllFeatures,Q as WithPagination,O as WithSearch,F as WithSelection,$ as WithSorting,Ya as __namedExportsOrder,Ga as default};
