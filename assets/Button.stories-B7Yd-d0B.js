import{j as m}from"./jsx-runtime-vNq4Oc-g.js";import{I as T,r as _,c as M}from"./index-nq1cuS43.js";import{R as e,r as O}from"./index-4g5l5LRQ.js";import"./extends-dGVwEr9R.js";import"./index-jmm5gWkb.js";import"./_commonjsHelpers-4gQjN7DL.js";var n=new Map;n.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});n.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});n.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});n.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});n.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});n.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var V=function(d,I){return _(d,I,n)},D=O.forwardRef(function(r,d){return e.createElement(T,Object.assign({ref:d},r,{renderPath:V}))});D.displayName="ArrowRight";const q=D,K={title:"Form/Button",component:M,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary","destruction"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{onClick:{control:{type:"boolean"}}},onClick:{action:"click"}},parameters:{docs:{description:{component:"Component global que serve para aplicar todas as configurações para todos components"}}}},t={},o={args:{variant:"secondary",children:"Create new"}},a={args:{variant:"tertiary",children:"Cancel"}},s={args:{size:"sm"}},i={args:{children:m.jsxs(m.Fragment,{children:["Próximo passo",m.jsx(q,{weight:"bold"})]})}},c={args:{disabled:!0}},l={args:{variant:"destruction",children:"Cancel",size:"sm"}};var p,u,k,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source},description:{story:"component de botão Primary todas as configurações de um botão Primary deve ser feito no mesmo",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var y,f,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var E,L,j;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...(j=(L=a.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var b,W,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(v=(W=s.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var F,S,w;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var P,C,R;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var A,z,B;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'destruction',
    children: 'Cancel',
    size: 'sm'
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const Q=["Primary","Secondary","Tertiary","Small","WithIcon","Desabled","Destruction"];export{c as Desabled,l as Destruction,t as Primary,o as Secondary,s as Small,a as Tertiary,i as WithIcon,Q as __namedExportsOrder,K as default};
