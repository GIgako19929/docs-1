"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4898],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7296:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={title:"Overview",slug:"/api-contract/start"},l=void 0,c={unversionedId:"api-contract/start/intro",id:"api-contract/start/intro",title:"Overview",description:'These sections should provide you with all the information needed to install the @polkadot/api-contract package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using contracts" - it really aims to close the gap to allow anybody to get to grips with using the package.',source:"@site/docs/api-contract/start/intro.md",sourceDirName:"api-contract/start",slug:"/api-contract/start",permalink:"/docs/api-contract/start",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/intro.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/api-contract/start"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api-contract"},next:{title:"Installation",permalink:"/docs/api-contract/start/install"}},p={},u=[{value:"ES2015 Usage and examples",id:"es2015-usage-and-examples",level:2},{value:"What this is not",id:"what-this-is-not",level:2},{value:"Help us help others",id:"help-us-help-others",level:2},{value:"Ready? Steady? Go!",id:"ready-steady-go",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These sections should provide you with all the information needed to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract"),' package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using contracts" - it really aims to close the gap to allow anybody to get to grips with using the package.'),(0,o.kt)("h2",{id:"es2015-usage-and-examples"},"ES2015 Usage and examples"),(0,o.kt)("p",null,"Before we jump into the guide, be aware that in all cases we are using ES2015, including using things like ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," and others. Depending on your environment, this may require some adjustments."),(0,o.kt)("p",null,"We are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," naked in all examples (removing boilerplate allows us to focus on the actual libraries), so unless your environment supports top-level await, you will need to wrap the code samples in an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," block ",(0,o.kt)("inlineCode",{parentName:"p"},"async function main () { ... }")," and then just call ",(0,o.kt)("inlineCode",{parentName:"p"},"main().then(() => console.log('completed'))"),"."),(0,o.kt)("h2",{id:"what-this-is-not"},"What this is not"),(0,o.kt)("p",null,"This is not line-by-line documentation of all the existing function calls available, nor it is tied to a specific environment. There will be some things in the Keyring that are probably not covered, which brings us to the next point..."),(0,o.kt)("h2",{id:"help-us-help-others"},"Help us help others"),(0,o.kt)("p",null,"If you spot gaps in the information provided, or are uncertain about any specific area, please do ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/docs/issues"},"log an issue")," or if you are that way inclined, make a pull-request. We really want to have good documentation in these areas and allow people to be productive right from the start."),(0,o.kt)("h2",{id:"ready-steady-go"},"Ready? Steady? Go!"),(0,o.kt)("p",null,"Let's get started... ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start/install"},"What should be installed, and how should we do it?")))}h.isMDXComponent=!0}}]);