import{_ as p,o as r,c as i,f as e,a as _,w as y,h as m,t as a,i as S,F as I,r as P,p as h,g,u as b,j as w,k as C,l as o,d as R,e as B}from"./entry.d260f356.js";import{_ as F}from"./seeMore.5282be82.js";import{_ as N}from"./Carousel.bd9c8f43.js";import{u as L}from"./fetch.d211a286.js";const T={props:["parent","link","current"]},V={class:"breadcrumbs"};function H(n,c,t,u,d,l){const s=S;return r(),i("main",null,[e("p",V,[_(s,{to:t.link},{default:y(()=>[m(a(t.parent),1)]),_:1},8,["to"]),m(" > "+a(t.current),1)])])}const A=p(T,[["render",H],["__scopeId","data-v-4dfc1430"]]);const U={props:["name","desc_short","desc_long","image","path"]},Y=n=>(h("data-v-39889715"),n=n(),g(),n),z={id:"main"},D={id:"content"},E={id:"text-section"},M={id:"desc-short"},q=Y(()=>e("div",{class:"bar"},null,-1)),G={id:"desc-long"},J=["src"];function K(n,c,t,u,d,l){return r(),i("div",z,[e("h1",null,a(t.name),1),e("div",D,[e("div",E,[e("div",M,a(t.desc_short),1),q,e("div",G,[(r(!0),i(I,null,P(t.desc_long,s=>(r(),i("p",{key:s.id},a(s),1))),128))])]),e("img",{src:`/HYPermedia-applications-2023/img/projects/${t.image}`,alt:"Project's image"},null,8,J)])])}const O=p(U,[["render",K],["__scopeId","data-v-39889715"]]);const Q={props:["name","desc_short","image","link"]},W=n=>(h("data-v-8ecc2802"),n=n(),g(),n),X={class:"main"},Z={class:"image-container"},ee=["src"],te={class:"text-container"},se={class:"text-inner"},ne=W(()=>e("h2",null,"Supervisor",-1)),oe={class:"supervisor-name"},_e={class:"description"};function ce(n,c,t,u,d,l){const s=F;return r(),i("main",X,[e("div",Z,[e("img",{src:`/HYPermedia-applications-2023/img/people/${t.image}`,class:"image",alt:"Supervisor's picture"},null,8,ee)]),e("div",te,[e("div",se,[ne,e("h3",oe,a(t.name),1),e("p",_e,a(t.desc_short),1),_(s,{link:t.link},null,8,["link"])])])])}const ae=p(Q,[["render",ce],["__scopeId","data-v-8ecc2802"]]);const re={class:"related-areas"},ie=e("h2",null,"Related areas",-1),de={class:"carousel-container"},ve={__name:"[id]",async setup(n){let c,t;const d=b().params.id,l=w().public.serverURL+"/projects/"+d;console.log("/projects/"+d+'	Fetching: "'+l+'"');const{data:s}=([c,t]=C(()=>L(l,"$NLv8nVzATR")),c=await c,t(),c);return(le,ue)=>{const v=R,x=A,$=O,f=ae,k=N,j=B;return r(),i("main",null,[_(v),_(x,{parent:"Projects",link:"/projects",current:o(s).name},null,8,["current"]),_($,{name:o(s).name,desc_short:o(s).data.desc_short,desc_long:o(s).data.desc_long,image:o(s).data.image},null,8,["name","desc_short","desc_long","image"]),_(f,{name:o(s).Person.name,desc_short:o(s).Person.data.desc_short,image:o(s).Person.data.image,link:"/people/"+o(s).Person.id},null,8,["name","desc_short","image","link"]),e("div",re,[ie,e("div",de,[_(k,{class:"carousel"})])]),_(j)])}}};export{ve as default};