import{_ as y,a as L}from"./CustomFooter.5a5d732a.js";import{_ as l,o,c as R,w as S,a as U,b as $,d as i,e as n,t as u,f as r,p as g,g as h,u as I,h as b,F as m,r as k,i as A}from"./entry.3e6a0c25.js";import{u as w}from"./fetch.3f4d128d.js";const C={props:["link"]};function F(e,s,t,_,d,p){const a=$;return o(),R(a,{class:"button",to:t.link},{default:S(()=>[U(" See more ... ")]),_:1},8,["to"])}const q=l(C,[["render",F],["__scopeId","data-v-b43c2652"]]);const N={props:{title:{type:String,required:!0,default:"Title"},imageURL:{type:String,required:!0,default:""},description:{type:String,required:!0,default:"No descriptions"},pageURL:{type:String,required:!0,default:""}}},B=e=>(g("data-v-c686d2b4"),e=e(),h(),e),V={class:"one-area"},M={class:"title-image"},T=["src"],D={class:"title"},E=B(()=>n("div",{class:"transparent-white"},null,-1)),H={class:"intro"};function P(e,s,t,_,d,p){const a=q;return o(),i("div",V,[n("div",M,[n("img",{src:t.imageURL,alt:"Illustration image"},null,8,T),n("h2",D,u(t.title),1),E]),n("div",H,[n("p",null,u(t.description),1),r(a,{link:t.pageURL},null,8,["link"])])])}const W=l(N,[["render",P],["__scopeId","data-v-c686d2b4"]]);const Y=e=>(g("data-v-4a85d647"),e=e(),h(),e),Z=Y(()=>n("h1",null,"Areas",-1)),j={__name:"Areas",async setup(e){let s,t;const _=I().public.serverURL+"/areas";console.log('/areas	Fetching: "'+_+'"');const{data:d}=([s,t]=b(()=>w(_,"$SYFq4AZW1P")),s=await s,t(),s);return(p,a)=>{const f=y,v=W,x=L;return o(),i(m,null,[r(f),n("main",null,[Z,(o(!0),i(m,null,k(A(d),c=>(o(),i("div",null,[r(v,{title:c.name,imageURL:c.data.imgURL,description:c.data.description,pageURL:"/areas/"+c.id},null,8,["title","imageURL","description","pageURL"])]))),256))]),r(x)],64)}}},K=l(j,[["__scopeId","data-v-4a85d647"]]);export{K as default};
