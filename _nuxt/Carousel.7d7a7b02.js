import{_ as r,o as s,q as m,l as h,j as g,f as t,c as i,t as c,a as v,n as S,s as y,T as k,m as C,F as f,r as I}from"./entry.8d02a77f.js";const $={props:["slide","currentSlide","index","direction","link","option"],computed:{transitionEffect(){return this.direction=="right"?"slide-out":"slide-in"}}},b={class:"carousel-item"},L={key:0,class:"if"},N={class:"base-image-input"},B=["src"],j={class:"text"},w=["href"],E={key:1,class:"if"},O={class:"base-image-input"},P=["src"],T={class:"text"},V=["href"],D={key:2,class:"if"},F={class:"base-image-input"},U=["src"],q={class:"text"},H={key:3};function R(n,o,e,a,_,d){const l=C;return s(),m(k,{name:d.transitionEffect},{default:h(()=>[g(t("div",b,[e.option==="partnerOption"?(s(),i("div",L,[t("div",N,[t("img",{src:`${e.slide.image}`},null,8,B)]),t("div",j,[t("h3",null,c(e.slide.name),1),t("p",null,c(e.slide.desc_short),1),t("a",{href:`${e.slide.url}`},"Learn more",8,w)])])):e.option==="projectOption"?(s(),i("div",E,[t("div",O,[t("img",{src:`/HYPermedia-applications-2023/img/projects/${e.slide.data.image}`},null,8,P)]),t("div",T,[t("h3",null,c(e.slide.name),1),t("p",null,c(e.slide.data.desc_short),1),t("a",{href:`${e.slide.data.url}`},"Learn more",8,V)])])):e.option==="areaOption"?(s(),i("div",D,[t("div",F,[t("img",{src:`${e.slide.data.imgURL}`},null,8,U)]),t("div",q,[t("h3",null,c(e.slide.name),1),t("p",null,c(e.slide.data.summary),1),v(l,{to:`/areas/${e.slide.id}`},{default:h(()=>[S("Learn more")]),_:1},8,["to"])])])):(s(),i("div",H," no option given "))],512),[[y,e.currentSlide===e.index]])]),_:1},8,["name"])}const Y=r($,[["render",R],["__scopeId","data-v-cd27a3df"]]);const z={emits:["prev","next"]};function A(n,o,e,a,_,d){return s(),i(f,null,[t("button",{class:"carousel-control left",onClick:o[0]||(o[0]=l=>n.$emit("prev"))},"‹"),t("button",{class:"carousel-control right",onClick:o[1]||(o[1]=l=>n.$emit("next"))},"›")],64)}const G=r(z,[["render",A],["__scopeId","data-v-fc7a1a81"]]);const J={props:["slides","option"],data:()=>({currentSlide:0,slideInterval:null,direction:"right"}),methods:{setCurrentSlide(n){this.currentSlide=n},prev(){const n=this.currentSlide>0?this.currentSlide-1:this.slides.length-1;this.setCurrentSlide(n),this.direction="left"},next(){const n=this.currentSlide<this.slides.length-1?this.currentSlide+1:0;this.setCurrentSlide(n),this.direction="right"}},beforeUnmount(){clearInterval(this.slideInterval)}},K={class:"carousel-inner"};function M(n,o,e,a,_,d){const l=Y,x=G;return s(),i("div",null,[t("div",K,[(s(!0),i(f,null,I(e.slides,(p,u)=>(s(),m(l,{slide:p,key:`item-${u}`,"current-slide":n.currentSlide,index:u,direction:n.direction,option:e.option},null,8,["slide","current-slide","index","direction","option"]))),128))]),v(x,{onPrev:d.prev,onNext:d.next},null,8,["onPrev","onNext"])])}const W=r(J,[["render",M],["__scopeId","data-v-f2612808"]]);export{W as _};