import{_ as d,o as p,c as u,f as t,t as l,p as m,g as f,u as R,h as S,w as $,a as n,i as a,d as I,e as L}from"./entry.8bee7e9d.js";import{_ as U}from"./ShortBreadCrumbs.0dd3c21b.js";import{_ as w}from"./Carousel.c4a2090b.js";import{u as P}from"./fetch.6b3c6b9f.js";const A={props:{title:{type:String,required:!0,default:""},imageURL:{type:String,required:!0,default:""},description:{type:String,required:!0,default:"No description"}}},j=e=>(m("data-v-04b12fec"),e=e(),f(),e),B={class:"title-description"},C=["src"],k=j(()=>t("div",{class:"blue-transparent-1"},null,-1)),q={class:"blue-transparent-2"};function D(e,c,s,v,r,_){return p(),u("div",B,[t("img",{src:`${s.imageURL}`,alt:"Illustration image"},null,8,C),k,t("h1",null,l(s.title),1),t("div",q,[t("p",null,l(s.description),1)])])}const F=d(A,[["render",D],["__scopeId","data-v-04b12fec"]]);const h=e=>(m("data-v-fcaf8139"),e=e(),f(),e),N={class:"content-wrap"},O=h(()=>t("div",{class:"subtitle"},[t("h2",null,"Partners"),t("div",{class:"bar"})],-1)),T=h(()=>t("div",{class:"subtitle"},[t("h2",null,"Projects"),t("div",{class:"bar"})],-1)),V={__name:"[id]",async setup(e){let c,s;const r=R().params.id,_=S().public.serverURL+"/areas/"+r;console.log("/areas/"+r+'	Fetching: "'+_+'"');const{data:o}=([c,s]=$(()=>P(_,"$LpZQ2Apvba")),c=await c,s(),c);return(E,H)=>{const g=I,b=U,x=F,i=w,y=L;return p(),u("main",null,[n(g),n(b,{parent:"Areas",link:"/areas",current:a(o).name},null,8,["current"]),n(x,{title:a(o).name,imageURL:a(o).data.imgURL,description:a(o).data.summary},null,8,["title","imageURL","description"]),t("div",N,[O,n(i,{slides:a(o).data.slidesPartners,option:"partnerOption",class:"carouselPartner"},null,8,["slides"]),T,n(i,{slides:a(o).Projects,option:"projectOption",class:"carouselProject"},null,8,["slides"])]),n(y)])}}},J=d(V,[["__scopeId","data-v-fcaf8139"]]);export{J as default};
