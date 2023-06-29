import{_ as b}from"./nuxt-link.7d2eb9a5.js";import{_ as a,o as r,f as d,a as s,t as o,p as h,g as v,c as $,w as S,i as I,n as P,d as m,v as C,T as L,F as g,r as k,b as c}from"./entry.a85482dd.js";const q={props:{title:{type:String,required:!0,default:""},imageURL:{type:String,required:!0,default:""},description:{type:String,required:!0,default:"No description"}}},N=e=>(h("data-v-abf58a15"),e=e(),v(),e),U={class:"title-description"},w=["src"],A=N(()=>s("div",{class:"blue-transparent-1"},null,-1)),R={class:"blue-transparent-2"};function T(e,n,t,_,u,i){return r(),d("div",U,[s("img",{src:`/${t.imageURL}`,alt:"Illustration image"},null,8,w),A,s("h1",null,o(t.title),1),s("div",R,[s("p",null,o(t.description),1)])])}const B=a(q,[["render",T],["__scopeId","data-v-abf58a15"]]);const D={props:["slide","currentSlide","index","direction","link"],computed:{transitionEffect(){return this.direction=="right"?"slide-out":"slide-in"}}},j=e=>(h("data-v-72ddfe44"),e=e(),v(),e),E={class:"carousel-item"},V={class:"text"},F=j(()=>s("br",null,null,-1)),z=["href"];function G(e,n,t,_,u,i){return r(),$(L,{name:i.transitionEffect},{default:S(()=>[I(s("div",E,[s("div",{class:"base-image-input",style:P({"background-image":`url(${t.slide.imgPartner})`})},null,4),m(" "+o(console.log("slide",t.slide))+" ",1),s("div",V,[s("h3",null,o(t.slide.namePartner),1),m(" "+o(t.slide.textPartner)+" ",1),F,s("a",{href:`${t.slide.urlPartner}`}," Learn more about them",8,z)])],512),[[C,t.currentSlide===t.index]])]),_:1},8,["name"])}const H=a(D,[["render",G],["__scopeId","data-v-72ddfe44"]]);const J={emits:["prev","next"]};function K(e,n,t,_,u,i){return r(),d(g,null,[s("button",{class:"carousel-control left",onClick:n[0]||(n[0]=l=>e.$emit("prev"))},"‹"),s("button",{class:"carousel-control right",onClick:n[1]||(n[1]=l=>e.$emit("next"))},"›")],64)}const M=a(J,[["render",K],["__scopeId","data-v-fc7a1a81"]]);const O={props:["slides"],data:()=>({currentSlide:0,slideInterval:null,direction:"right"}),methods:{setCurrentSlide(e){this.currentSlide=e},prev(){const e=this.currentSlide>0?this.currentSlide-1:this.slides.length-1;this.setCurrentSlide(e),this.direction="left"},next(){const e=this.currentSlide<this.slides.length-1?this.currentSlide+1:0;this.setCurrentSlide(e),this.direction="right"}},beforeUnmount(){clearInterval(this.slideInterval)}},Q={class:"carousel"},W={class:"carousel-inner"};function X(e,n,t,_,u,i){const l=H,f=M;return r(),d("div",Q,[s("div",W,[(r(!0),d(g,null,k(t.slides,(p,x)=>(r(),$(l,{slide:p,key:`item-${x}`,"current-slide":e.currentSlide,index:x,direction:e.direction},null,8,["slide","current-slide","index","direction"]))),128))]),c(f,{onPrev:i.prev,onNext:i.next},null,8,["onPrev","onNext"])])}const Y=a(O,[["render",X],["__scopeId","data-v-9bf5ec47"]]);const Z={props:{title:{type:String,required:!0,default:""},imageURL:{type:String,required:!0,default:""},description:{type:String,required:!0,default:"No description"},pageURL:{type:String,required:!0,default:""},slidesPartners:{type:Array,required:!0,default:[]},slidesProjects:{type:Array,required:!0,default:[]}}},y=e=>(h("data-v-be353885"),e=e(),v(),e),ee={class:"breadcrumbs"},te=y(()=>s("div",{class:"subtitle"},[s("h2",null,"Partners"),s("div",{class:"bar"})],-1)),se=y(()=>s("div",{class:"subtitle"},[s("h2",null,"Projects"),s("div",{class:"bar"})],-1));function ne(e,n,t,_,u,i){const l=b,f=B,p=Y;return r(),d(g,null,[s("p",ee,[c(l,{to:"/Areas"},{default:S(()=>[m("Areas")]),_:1}),m(" > "+o(t.title),1)]),c(f,{title:t.title,imageURL:t.imageURL,description:t.description},null,8,["title","imageURL","description"]),te,c(p,{slides:t.slidesPartners},null,8,["slides"]),se,c(p,{slides:t.slidesProjects},null,8,["slides"])],64)}const oe=a(Z,[["render",ne],["__scopeId","data-v-be353885"]]);export{oe as _};
