import{_ as f,h as p,w as d,c as y,a as t,f as e,i as l,F as b,o as w,p as I,g as S,d as k,e as P}from"./entry.0a8269ca.js";import{u as F,_ as R}from"./Subtitle.d79fea9f.js";import{_ as C}from"./seeMore.d849d28b.js";import{_ as E}from"./Carousel.781f2062.js";import{_ as V}from"./Deck.10a4e622.js";import{u}from"./fetch.502e4530.js";const s=n=>(I("data-v-a0265cb1"),n=n(),S(),n),B=s(()=>e("h1",null,"Projects",-1)),N={id:"top-section"},T={id:"top-title"},U={clas:"top-cont"},$=s(()=>e("p",{class:"text"},"We present to you a meticulously curated assortment of our most significant, highly triumphant, and exceedingly ambitious undertakings that encapsulate the pinnacle of our achievements thus far.",-1)),A={class:"seeseesee"},D=s(()=>e("div",{id:"card-title"},[e("p",{class:"text"},"To provide you with a comprehensive overview, we are pleased to present an extensive compilation containing an exhaustive and inclusive inventory of every single project that oure VC I3E is presently actively engaged in, diligently pursuing their respective objectives and aspirations.")],-1)),L={id:"card-container-outer"},M={id:"card-container-inner"},O=s(()=>e("p",{class:"text"}," If you are interested, instead, into browsing our projects based on their area of interest, please go through this section ",-1)),q={class:"seeseesee last"},H=s(()=>e("div",{clas:"space"},null,-1)),Q={__name:"index",async setup(n){let o,c;const a=p().public.serverURL+"/projects";console.log('/projects	Fetching: "'+a+'"');const{data:m}=([o,c]=d(()=>u(a,"$olQ4jpDRvq")),o=await o,c(),o),_=p().public.serverURL+"/projects/top";console.log('/projects	Fetching: "'+_+'"');const{data:h}=([o,c]=d(()=>u(_,"$IPSSr3RZSN")),o=await o,c(),o);return F({title:"Projects - I3E VC",description:"I3E Projects overview"}),(W,Z)=>{const v=k,i=R,r=C,x=E,g=V,j=P;return w(),y(b,null,[t(v),e("main",null,[B,e("div",N,[e("div",T,[t(i,{text:"Top projects"}),e("div",U,[$,e("div",A,[t(r,{link:"/projects/relevantprojects",class:"nav-item"})])])]),t(x,{option:"projectOption",class:"carouselProject",slides:l(h)},null,8,["slides"])]),t(i,{text:"All projects"}),D,e("div",L,[e("div",M,[t(g,{class:"deck",cards:l(m),option:"projects"},null,8,["cards"])])]),t(i,{text:"Projects divided by area"}),O,e("div",q,[t(r,{link:"/projects/by_area",class:"nav-item"})]),H]),t(j)],64)}}},ee=f(Q,[["__scopeId","data-v-a0265cb1"]]);export{ee as default};
