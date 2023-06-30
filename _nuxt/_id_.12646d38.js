import{_ as R,a as U}from"./CustomFooter.759f2606.js";import{_ as M,o as D,f as C,a as B,t as j,F as L,r as N,p as T,g as E,u as I,j as O,k as $,l as W,m as P,q as K,s as m,x as J,y as V,z as q,A as G,B as Q,C as X,D as Y,b as z}from"./entry.249f864b.js";import"./nuxt-link.cd0b07e4.js";const Z={props:["name","desc_short","desc_long","image"]},tt=r=>(T("data-v-36d2f0eb"),r=r(),E(),r),et={id:"main"},st={id:"content"},rt={id:"text-section"},nt={id:"desc-short"},at=tt(()=>B("div",{class:"bar"},null,-1)),it={id:"desc-long"},ot=["src"];function ct(r,n,s,e,t,a){return D(),C("div",et,[B("h1",null,j(s.name),1),B("div",st,[B("div",rt,[B("div",nt,j(s.desc_short),1),at,B("div",it,[(D(!0),C(L,null,N(s.desc_long,o=>(D(),C("p",{key:o.id},j(o),1))),128))])]),B("img",{src:`/img/projects/${s.image}`,alt:"Project's image"},null,8,ot)])])}const ut=M(Z,[["render",ct],["__scopeId","data-v-36d2f0eb"]]),lt=()=>null;function ft(...r){const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??lt,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=I(),o=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],u=()=>o()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:O(o()??t.default()),pending:O(!u()),error:$(a.payload._errors,s)});const i={...a._asyncData[s]};i.refresh=i.execute=(c={})=>{if(a._asyncDataPromises[s]){if(c.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((c._initial||a.isHydrating&&c._initial!==!1)&&u())return o();i.pending.value=!0;const _=new Promise((l,p)=>{try{l(e(a))}catch(x){p(x)}}).then(l=>{if(_.cancelled)return a._asyncDataPromises[s];let p=l;t.transform&&(p=t.transform(l)),t.pick&&(p=ht(p,t.pick)),i.data.value=p,i.error.value=null}).catch(l=>{if(_.cancelled)return a._asyncDataPromises[s];i.error.value=l,i.data.value=m(t.default())}).finally(()=>{_.cancelled||(i.pending.value=!1,a.payload.data[s]=i.data.value,i.error.value&&(a.payload._errors[s]=J(i.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=_,a._asyncDataPromises[s]};const f=()=>i.refresh({_initial:!0}),h=t.server!==!1&&a.payload.serverRendered;{const c=V();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const l=c._nuxtOnBeforeMountCbs;c&&(W(()=>{l.forEach(p=>{p()}),l.splice(0,l.length)}),P(()=>l.splice(0,l.length)))}h&&a.isHydrating&&u()?i.pending.value=!1:c&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?c._nuxtOnBeforeMountCbs.push(f):t.immediate&&f(),t.watch&&K(t.watch,()=>i.refresh());const _=a.hook("app:data:refresh",l=>{if(!l||l.includes(s))return i.refresh()});c&&P(_)}const d=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(d,i),d}function ht(r,n){const s={};for(const e of n)s[e]=r[e];return s}const dt={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function pt(r,n={}){n={...dt,...n};const s=F(n);return s.dispatch(r),s.toString()}function F(r){const n=[];let s=[];const e=t=>{n.push(t)};return{toString(){return n.join("")},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){if(t&&typeof t.toJSON=="function")return this._object(t.toJSON());const a=/\[object (.*)]/i,o=Object.prototype.toString.call(t),u=a.exec(o),i=u?u[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let f=null;if((f=s.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(s.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this["_"+i]?this["_"+i](t):r.ignoreUnknown||this._unkown(t,i);else{let h=Object.keys(t);r.unorderedObjects&&(h=h.sort()),r.respectType!==!1&&!A(t)&&h.splice(0,0,"prototype","__proto__","letructor"),r.excludeKeys&&(h=h.filter(function(d){return!r.excludeKeys(d)})),e("object:"+h.length+":");for(const d of h)this.dispatch(d),e(":"),r.excludeValues||this.dispatch(t[d]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:r.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const i of t)this.dispatch(i);return}const o=[],u=t.map(i=>{const f=F(r);return f.dispatch(i),o.push(f.getContext()),f.toString()});return s=[...s,...o],u.sort(),this._array(u,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this._array(Array.from(t.entries()),!0)},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),A(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,r.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,r.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function A(r){return typeof r!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(r))!=null}class v{constructor(n,s){n=this.words=n||[],this.sigBytes=s!==void 0?s:n.length*4}toString(n){return(n||_t).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new v([...this.words])}}const _t={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},yt={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,a=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|a<<8|o;for(let i=0;i<4&&e*8+i*6<r.sigBytes*8;i++)s.push(n.charAt(u>>>6*(3-i)&63))}return s.join("")}},gt={parse(r){const n=r.length,s=[];for(let e=0;e<n;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new v(s,n)}},mt={parse(r){return gt.parse(unescape(encodeURIComponent(r)))}};class wt{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new v,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=mt.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new v(s,a)}}class bt extends wt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const Bt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],xt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class St extends bt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new v([...Bt])}_doProcessBlock(n,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],u=e[3],i=e[4],f=e[5],h=e[6],d=e[7];for(let c=0;c<64;c++){if(c<16)b[c]=n[s+c]|0;else{const S=b[c-15],w=(S<<25|S>>>7)^(S<<14|S>>>18)^S>>>3,g=b[c-2],H=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;b[c]=w+b[c-7]+H+b[c-16]}const _=i&f^~i&h,l=t&a^t&o^a&o,p=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),x=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),k=d+x+_+xt[c]+b[c],y=p+l;d=h,h=f,f=i,i=u+k|0,u=o,o=a,a=t,t=k+y|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+u|0,e[4]=e[4]+i|0,e[5]=e[5]+f|0,e[6]=e[6]+h|0,e[7]=e[7]+d|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function vt(r){return new St().finalize(r).toString(yt)}function kt(r,n={}){const s=typeof r=="string"?r:pt(r,n);return vt(s).slice(0,10)}function Dt(r,n,s){const[e={},t]=typeof n=="string"?[{},n]:[n,s],a=e.key||kt([t,m(e.baseURL),typeof r=="string"?r:"",m(e.params||e.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===t?"$f"+a:a,u=q(()=>{let w=r;return typeof w=="function"&&(w=w()),m(w)});if(!e.baseURL&&typeof u.value=="string"&&u.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:f,default:h,transform:d,pick:c,watch:_,immediate:l,...p}=e,x=G({...p,cache:typeof e.cache=="boolean"?void 0:e.cache}),k={server:i,lazy:f,default:h,transform:d,pick:c,immediate:l,watch:_===!1?[]:[x,u,..._||[]]};let y;return ft(o,()=>{var g;return(g=y==null?void 0:y.abort)==null||g.call(y),y=typeof AbortController<"u"?new AbortController:{},typeof u.value=="string"&&u.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(u.value,{signal:y.signal,...x})},k)}const Ot={__name:"[id]",async setup(r){let n,s;const t=Q().params.id,a=X().public.serverURL+"/project/"+t;console.log("/project/"+t+'	Fetching: "'+a+'"');const{data:o}=([n,s]=Y(()=>Dt(a,"$UHn5eMH0H4")),n=await n,s(),n);return(u,i)=>{const f=R,h=ut,d=U;return D(),C("main",null,[z(f),z(h,{name:m(o).name,desc_short:m(o).data.desc_short,desc_long:m(o).data.desc_long,image:m(o).data.image},null,8,["name","desc_short","desc_long","image"]),z(d)])}}};export{Ot as default};