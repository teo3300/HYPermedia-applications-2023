import{_ as y,a as g}from"./CustomFooter.4142b460.js";import{_ as v}from"./nuxt-link.aac7cee6.js";import{s as d,x as $,l as j,y as k,z as C,k as A,A as D,_ as x,o as i,f as p,b as m,w as N,a as u,t as w,m as B,F as I,r as R,B as b,c as F}from"./entry.acc165dc.js";import{u as L}from"./asyncData.dee10629.js";const f="__nuxt_component";async function P(n,e){const t=d(),r=j(),_=D(),{fetchKey:o}=_.proxy.$options,a=typeof o=="function"?o(()=>""):o||r.fullPath,{data:s,error:c}=await L(`options:asyncdata:${a}`,()=>t.runWithContext(()=>e(t)));if(c.value)throw k(c.value);s.value&&typeof s.value=="object"&&Object.assign(await n,C(A(s.value)))}const E=function(e){const{setup:t}=e;return!t&&!e.asyncData&&!e.head?{[f]:!0,...e}:{[f]:!0,...e,setup(r,_){const o=d(),a=t?Promise.resolve(o.runWithContext(()=>t(r,_))).then(c=>c||{}):{},s=[];if(e.asyncData&&s.push(P(a,e.asyncData)),e.head){const c=d();$(typeof e.head=="function"?()=>e.head(c):e.head)}return Promise.resolve(a).then(()=>Promise.all(s)).then(()=>a).finally(()=>{s.length=0})}}};const H={props:["text","image","link"]},U={class:"card"},V={class:"image-container"},W=["src"],z={class:"title"};function K(n,e,t,r,_,o){const a=v;return i(),p("main",null,[m(a,{to:t.link,class:"link"},{default:N(()=>[u("div",U,[u("div",V,[u("img",{src:`/img/projects/${t.image}`,class:"img"},null,8,W)]),u("span",z,w(t.text),1)])]),_:1},8,["to"])])}const O=x(H,[["render",K],["__scopeId","data-v-dee62ecc"]]);const h=B().public.serverURL+"/projects";console.log('/projects	Fetching: "'+h+'"');const S=E({async asyncData(){let n,e;return{projects:([n,e]=b(()=>$fetch(h)),n=await n,e(),n)}}}),q={id:"card-container"};function G(n,e,t,r,_,o){const a=y,s=O,c=g;return i(),p("main",null,[m(a),u("div",q,[(i(!0),p(I,null,R(n.projects,l=>(i(),F(s,{text:l.name,image:l.data.image,link:"/project/"+l.id,class:"projectCard"},null,8,["text","image","link"]))),256))]),m(c)])}const X=x(S,[["render",G],["__scopeId","data-v-ed035aa3"]]);export{X as default};
