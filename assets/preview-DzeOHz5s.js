import{_ as N}from"./iframe-ldbWQzS6.js";import"../sb-preview/runtime.js";const{global:T}=__STORYBOOK_MODULE_GLOBAL__,{addons:y}=__STORYBOOK_MODULE_PREVIEW_API__;var n="storybook/a11y",U=`${n}/result`,f=`${n}/request`,g=`${n}/running`,w=`${n}/error`,L=`${n}/manual`,a={RESULT:U,REQUEST:f,RUNNING:g,ERROR:w,MANUAL:L},{document:d,window:p}=T,r=y.getChannel(),o=!1,_,A=async t=>{let{manual:e}=await s(t);e||await l(t)},l=async t=>{_=t;try{let e=await s(t);if(!o){o=!0,r.emit(a.RUNNING);let i=(await N(()=>import("./axe--MrEOhzv.js").then(S=>S.a),__vite__mapDeps([0,1]))).default,{element:u="#storybook-root",config:O,options:E={}}=e,R=d.querySelector(u);if(!R)return;i.reset(),O&&i.configure(O);let c=await i.run(R,E),m=JSON.parse(JSON.stringify(c));_===t?r.emit(a.RESULT,m):(o=!1,l(_))}}catch(e){r.emit(a.ERROR,e)}finally{o=!1}},s=async t=>{let{parameters:e}=await p.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,l);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/axe--MrEOhzv.js","assets/_commonjsHelpers-4gQjN7DL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
