import{x as k,C as P,D as A,E as D,G as H,H as U,i as v,I as F,J as R,K as M,L as j}from"./entry.038593b6.js";const L=()=>null;function E(...s){const a=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(a);let[r,e,t={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??L,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const n=U(),c=()=>n.isHydrating?n.payload.data[r]:n.static.data[r],u=()=>c()!==void 0;n._asyncData[r]||(n._asyncData[r]={data:k(c()??t.default()),pending:k(!u()),error:P(n.payload._errors,r),status:k("idle")});const i={...n._asyncData[r]};i.refresh=i.execute=(o={})=>{if(n._asyncDataPromises[r]){if(o.dedupe===!1)return n._asyncDataPromises[r];n._asyncDataPromises[r].cancelled=!0}if((o._initial||n.isHydrating&&o._initial!==!1)&&u())return c();i.pending.value=!0,i.status.value="pending";const d=new Promise((l,y)=>{try{l(e(n))}catch(b){y(b)}}).then(l=>{if(d.cancelled)return n._asyncDataPromises[r];let y=l;t.transform&&(y=t.transform(l)),t.pick&&(y=N(y,t.pick)),i.data.value=y,i.error.value=null,i.status.value="success"}).catch(l=>{if(d.cancelled)return n._asyncDataPromises[r];i.error.value=l,i.data.value=v(t.default()),i.status.value="error"}).finally(()=>{d.cancelled||(i.pending.value=!1,n.payload.data[r]=i.data.value,i.error.value&&(n.payload._errors[r]=F(i.error.value)),delete n._asyncDataPromises[r])});return n._asyncDataPromises[r]=d,n._asyncDataPromises[r]};const f=()=>i.refresh({_initial:!0}),h=t.server!==!1&&n.payload.serverRendered;{const o=R();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const l=o._nuxtOnBeforeMountCbs;o&&(A(()=>{l.forEach(y=>{y()}),l.splice(0,l.length)}),D(()=>l.splice(0,l.length)))}h&&n.isHydrating&&u()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):o&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?o._nuxtOnBeforeMountCbs.push(f):t.immediate&&f(),t.watch&&H(t.watch,()=>i.refresh());const d=n.hook("app:data:refresh",l=>{if(!l||l.includes(r))return i.refresh()});o&&D(d)}const p=Promise.resolve(n._asyncDataPromises[r]).then(()=>i);return Object.assign(p,i),p}function N(s,a){const r={};for(const e of a)r[e]=s[e];return r}const T={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function K(s,a={}){a={...T,...a};const r=O(a);return r.dispatch(s),r.toString()}function O(s){const a=[];let r=[];const e=t=>{a.push(t)};return{toString(){return a.join("")},getContext(){return r},dispatch(t){return s.replacer&&(t=s.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){if(t&&typeof t.toJSON=="function")return this._object(t.toJSON());const n=/\[object (.*)]/i,c=Object.prototype.toString.call(t),u=n.exec(c),i=u?u[1].toLowerCase():"unknown:["+c.toLowerCase()+"]";let f=null;if((f=r.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(r.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this["_"+i]?this["_"+i](t):s.ignoreUnknown||this._unkown(t,i);else{let h=Object.keys(t);s.unorderedObjects&&(h=h.sort()),s.respectType!==!1&&!C(t)&&h.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(h=h.filter(function(p){return!s.excludeKeys(p)})),e("object:"+h.length+":");for(const p of h)this.dispatch(p),e(":"),s.excludeValues||this.dispatch(t[p]),e(",")}},_array(t,n){if(n=typeof n<"u"?n:s.unorderedArrays!==!1,e("array:"+t.length+":"),!n||t.length<=1){for(const i of t)this.dispatch(i);return}const c=[],u=t.map(i=>{const f=O(s);return f.dispatch(i),c.push(f.getContext()),f.toString()});return r=[...r,...c],u.sort(),this._array(u,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this._array(Array.from(t.entries()),!0)},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),C(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const n=[...t];return this._array(n,s.unorderedSets!==!1)},_set(t){e("set:");const n=[...t];return this._array(n,s.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function C(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class x{constructor(a,r){a=this.words=a||[],this.sigBytes=r!==void 0?r:a.length*4}toString(a){return(a||W).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let r=0;r<a.sigBytes;r++){const e=a.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<a.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=a.words[r>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new x([...this.words])}}const W={stringify(s){const a=[];for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},$={stringify(s){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,n=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,c=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|n<<8|c;for(let i=0;i<4&&e*8+i*6<s.sigBytes*8;i++)r.push(a.charAt(u>>>6*(3-i)&63))}return r.join("")}},I={parse(s){const a=s.length,r=[];for(let e=0;e<a;e++)r[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new x(r,a)}},J={parse(s){return I.parse(unescape(encodeURIComponent(s)))}};class q{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new x,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=J.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,r){}_process(a){let r,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let c=0;c<t;c+=this.blockSize)this._doProcessBlock(this._data.words,c);r=this._data.words.splice(0,t),this._data.sigBytes-=n}return new x(r,n)}}class G extends q{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const V=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Q=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],w=[];class X extends G{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new x([...V])}_doProcessBlock(a,r){const e=this._hash.words;let t=e[0],n=e[1],c=e[2],u=e[3],i=e[4],f=e[5],h=e[6],p=e[7];for(let o=0;o<64;o++){if(o<16)w[o]=a[r+o]|0;else{const B=w[o-15],m=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,g=w[o-2],z=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;w[o]=m+w[o-7]+z+w[o-16]}const d=i&f^~i&h,l=t&n^t&c^n&c,y=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),b=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),S=p+b+d+Q[o]+w[o],_=y+l;p=h,h=f,f=i,i=u+S|0,u=c,c=n,n=t,t=S+_|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+c|0,e[3]=e[3]+u|0,e[4]=e[4]+i|0,e[5]=e[5]+f|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0}finalize(a){super.finalize(a);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Y(s){return new X().finalize(s).toString($)}function Z(s,a={}){const r=typeof s=="string"?s:K(s,a);return Y(r).slice(0,10)}function et(s,a,r){const[e={},t]=typeof a=="string"?[{},a]:[a,r],n=e.key||Z([t,v(e.baseURL),typeof s=="string"?s:"",v(e.params||e.query)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const c=n===t?"$f"+n:n,u=M(()=>{let m=s;return typeof m=="function"&&(m=m()),v(m)});if(!e.baseURL&&typeof u.value=="string"&&u.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:f,default:h,transform:p,pick:o,watch:d,immediate:l,...y}=e,b=j({...y,cache:typeof e.cache=="boolean"?void 0:e.cache}),S={server:i,lazy:f,default:h,transform:p,pick:o,immediate:l,watch:d===!1?[]:[b,u,...d||[]]};let _;return E(c,()=>{var g;return(g=_==null?void 0:_.abort)==null||g.call(_),_=typeof AbortController<"u"?new AbortController:{},typeof u.value=="string"&&u.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(u.value,{signal:_.signal,...b})},S)}export{et as u};