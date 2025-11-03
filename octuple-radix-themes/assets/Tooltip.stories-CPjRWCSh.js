import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{I as e}from"./Icon-D_u5oAGh.js";import{e as o}from"./tooltip-CGhsJN4E.js";import{o as n}from"./button-DOEX7M_0.js";import{o as i}from"./icon-button-C6Cl8Lr1.js";import{p as r}from"./flex-DvmXTkye.js";import{p as h}from"./text-C4SbqUme.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Dbpq9gcs.js";import"./theme-Cr0RmA42.js";import"./index-DW48STyt.js";import"./index-CSHYywJy.js";import"./index-Dkb_ZYRU.js";import"./index-Bq0PzALz.js";import"./index-CiEb6DFw.js";import"./index-47vA16Eq.js";import"./index-B6ujFmsw.js";import"./index-DZCApzUK.js";import"./index-CW4F2FBO.js";import"./index-5uDXI3f6.js";import"./index-BnD1EARC.js";import"./index-CFeakEOz.js";import"./index-CH1-paxq.js";import"./index-Dz6nX4BC.js";import"./index-UwpWBZco.js";import"./index-CWo8_AO2.js";import"./base-button-1bStz9fB.js";import"./color.prop-n6xztqZx.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-CIarg28h.js";import"./map-prop-values-CWqpaS2P.js";const gt={title:"Components/Tooltip",component:o,parameters:{layout:"padded"},tags:["autodocs"]},a={render:()=>t.jsx(o,{content:"This is a tooltip",children:t.jsx(n,{children:"Hover me"})})},s={render:()=>t.jsx(o,{content:"Settings",children:t.jsx(i,{children:t.jsx(e,{name:"settings",size:18})})})},l={render:()=>t.jsxs(r,{gap:"3",align:"center",children:[t.jsx(o,{content:"Edit",children:t.jsx(i,{variant:"soft",children:t.jsx(e,{name:"edit",size:18})})}),t.jsx(o,{content:"Delete",children:t.jsx(i,{variant:"soft",color:"red",children:t.jsx(e,{name:"delete",size:18})})}),t.jsx(o,{content:"Share",children:t.jsx(i,{variant:"soft",children:t.jsx(e,{name:"share",size:18})})}),t.jsx(o,{content:"Download",children:t.jsx(i,{variant:"soft",children:t.jsx(e,{name:"download",size:18})})})]})},c={render:()=>t.jsx(o,{content:"This is a longer tooltip message that provides more detailed information about the action",children:t.jsx(n,{variant:"soft",children:"Hover for long tooltip"})})},d={render:()=>t.jsx(r,{gap:"2",align:"center",children:t.jsxs(h,{size:"2",children:["Hover over the"," ",t.jsx(o,{content:"Additional information",children:t.jsx(h,{style:{textDecoration:"underline",cursor:"help"},children:"underlined text"})})," ","for more details."]})})},p={render:()=>t.jsxs(r,{direction:"column",gap:"4",align:"center",children:[t.jsx(o,{content:"Top tooltip",side:"top",children:t.jsx(n,{variant:"soft",children:"Top"})}),t.jsxs(r,{gap:"4",children:[t.jsx(o,{content:"Left tooltip",side:"left",children:t.jsx(n,{variant:"soft",children:"Left"})}),t.jsx(o,{content:"Right tooltip",side:"right",children:t.jsx(n,{variant:"soft",children:"Right"})})]}),t.jsx(o,{content:"Bottom tooltip",side:"bottom",children:t.jsx(n,{variant:"soft",children:"Bottom"})})]})},m={render:()=>t.jsxs(r,{gap:"3",children:[t.jsx(o,{content:"No delay",delayDuration:0,children:t.jsx(n,{variant:"soft",children:"No delay"})}),t.jsx(o,{content:"Default delay",children:t.jsx(n,{variant:"soft",children:"Default delay"})}),t.jsx(o,{content:"Long delay",delayDuration:1e3,children:t.jsx(n,{variant:"soft",children:"Long delay (1s)"})})]})},u={render:()=>t.jsxs(r,{gap:"2",children:[t.jsx(o,{content:"Save changes",children:t.jsxs(n,{children:[t.jsx(e,{name:"save",size:18}),"Save"]})}),t.jsx(o,{content:"Cancel and discard changes",children:t.jsx(n,{variant:"soft",children:"Cancel"})})]})};var x,f,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var T,j,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tooltip content="Settings">
      <IconButton>
        <Icon name="settings" size={18} />
      </IconButton>
    </Tooltip>
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var B,y,D;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Flex gap="3" align="center">
      <Tooltip content="Edit">
        <IconButton variant="soft">
          <Icon name="edit" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Delete">
        <IconButton variant="soft" color="red">
          <Icon name="delete" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Share">
        <IconButton variant="soft">
          <Icon name="share" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Download">
        <IconButton variant="soft">
          <Icon name="download" size={18} />
        </IconButton>
      </Tooltip>
    </Flex>
}`,...(D=(y=l.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var I,S,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a longer tooltip message that provides more detailed information about the action">
      <Button variant="soft">Hover for long tooltip</Button>
    </Tooltip>
}`,...(z=(S=c.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var F,L,C;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Flex gap="2" align="center">
      <Text size="2">
        Hover over the{' '}
        <Tooltip content="Additional information">
          <Text style={{
          textDecoration: 'underline',
          cursor: 'help'
        }}>
            underlined text
          </Text>
        </Tooltip>
        {' '}for more details.
      </Text>
    </Flex>
}`,...(C=(L=d.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var A,H,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" align="center">
      <Tooltip content="Top tooltip" side="top">
        <Button variant="soft">Top</Button>
      </Tooltip>
      
      <Flex gap="4">
        <Tooltip content="Left tooltip" side="left">
          <Button variant="soft">Left</Button>
        </Tooltip>
        
        <Tooltip content="Right tooltip" side="right">
          <Button variant="soft">Right</Button>
        </Tooltip>
      </Flex>
      
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="soft">Bottom</Button>
      </Tooltip>
    </Flex>
}`,...(W=(H=p.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var R,b,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Flex gap="3">
      <Tooltip content="No delay" delayDuration={0}>
        <Button variant="soft">No delay</Button>
      </Tooltip>
      
      <Tooltip content="Default delay">
        <Button variant="soft">Default delay</Button>
      </Tooltip>
      
      <Tooltip content="Long delay" delayDuration={1000}>
        <Button variant="soft">Long delay (1s)</Button>
      </Tooltip>
    </Flex>
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var E,N,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Flex gap="2">
      <Tooltip content="Save changes">
        <Button>
          <Icon name="save" size={18} />
          Save
        </Button>
      </Tooltip>
      
      <Tooltip content="Cancel and discard changes">
        <Button variant="soft">
          Cancel
        </Button>
      </Tooltip>
    </Flex>
}`,...(M=(N=u.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};const Tt=["Default","WithIcon","MultipleTooltips","LongContent","WithText","AllDirections","WithDelay","ActionButtons"];export{u as ActionButtons,p as AllDirections,a as Default,c as LongContent,l as MultipleTooltips,m as WithDelay,s as WithIcon,d as WithText,Tt as __namedExportsOrder,gt as default};
