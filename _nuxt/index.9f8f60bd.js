import{_ as m,o as a,c as i,a as r,l as y,f as e,t as b,m as k,p as u,g,h as w,w as $,F as d,r as I,i as C,q as F,d as P,e as S}from"./entry.4f5c689f.js";import{u as B}from"./fetch.7d64cec6.js";const H={props:["name","image","link"]},j=t=>(u("data-v-c5be9212"),t=t(),g(),t),A={class:"card"},E={class:"image-container"},L=["src"],N=j(()=>e("div",{class:"bar"},null,-1)),R={class:"text"};function T(t,o,s,n,l,h){const p=k;return a(),i("div",A,[r(p,{to:s.link,class:"link"},{default:y(()=>[e("div",E,[e("img",{class:"img",src:`/HYPermedia-applications-2023/img/people/${s.image}`,alt:"profile picture"},null,8,L)]),N,e("span",R,b(s.name),1)]),_:1},8,["to"])])}const Y=m(H,[["render",T],["__scopeId","data-v-c5be9212"]]);const _=t=>(u("data-v-fcf7b716"),t=t(),g(),t),U=_(()=>e("h1",null,"People",-1)),V=_(()=>e("div",{class:"text"},[e("p",{class:"text"}," At IE3, team spirit is the driving force behind our success. Every day, our employees combine their strengths, skills and passion to achieve common goals. Together, we form a true professional family, where collaboration and solidarity are at the heart of our corporate culture. And this working family is at your service to support you in your various projects.")],-1)),q=["src"],D={class:"content-wrap"},M=_(()=>e("div",{class:"subtitle"},[e("h2",null,"Members"),e("div",{class:"bar"})],-1)),z={class:"members-cards"},G=["src"],J={__name:"index",async setup(t){let o,s;const n=w().public.serverURL+"/people";console.log('/people	Fetching: "'+n+'"');const{data:l}=([o,s]=$(()=>B(n,"$86ry0ThwyT")),o=await o,s(),o);return(h,p)=>{const f=P,v=Y,x=S;return a(),i(d,null,[r(f),e("main",null,[U,V,e("img",{src:"/HYPermedia-applications-2023/img/people/group.jpg",alt:"Illustration photo",id:"group-img"},null,8,q),e("div",D,[M,e("div",z,[(a(!0),i(d,null,I(C(l),c=>(a(),F(v,{name:c.name,image:c.data.image,link:"/people/"+c.id},null,8,["name","image","link"]))),256))])]),e("img",{src:"/HYPermedia-applications-2023/img/people/organigram.jpg",alt:"Company's organigram",id:"organigram"},null,8,G)]),r(x)],64)}}},Q=m(J,[["__scopeId","data-v-fcf7b716"]]);export{Q as default};
