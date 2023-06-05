"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[8485],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],l={title:"Installation"},s=void 0,c={unversionedId:"keyring/start/install",id:"keyring/start/install",title:"Installation",description:"Yes, it really is as simple as installing from npm, so we are not going to waste too much time with the bare basics, just install the Keyring via",source:"@site/docs/keyring/start/install.md",sourceDirName:"keyring/start",slug:"/keyring/start/install",permalink:"/docs/keyring/start/install",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/keyring/start/install.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/keyring/start"},next:{title:"Basics",permalink:"/docs/keyring/start/basics"}},p={},u=[{value:"Other dependencies",id:"other-dependencies",level:2},{value:"Keyring basics",id:"keyring-basics",level:2}],d={toc:u},y="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(y,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Yes, it really is as simple as ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/keyring"},"installing from npm"),", so we are not going to waste too much time with the bare basics, just install the Keyring via"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/keyring")),(0,i.kt)("p",null,"And it will be added and ready for use. The above will always install the latest stable release."),(0,i.kt)("h2",{id:"other-dependencies"},"Other dependencies"),(0,i.kt)("p",null,"In most cases, you don't need to do anything else apart from just installing ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/keyring")," above. It has dependencies such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/util")," which are installed automatically alongside. When using ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," the dependencies are installed, flattened, available for use and you will never run into issues with mismatched versions."),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api"},"API")," alongside the keyring, the keyring will be installed as a dependency of the API itself."),(0,i.kt)("p",null,"This means that by simply installing ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api"),", you will have access to utilities (crypto and normal) and keyring."),(0,i.kt)("h2",{id:"keyring-basics"},"Keyring basics"),(0,i.kt)("p",null,"So we have it installed. Before we jump into actual real-world usage, ",(0,i.kt)("a",{parentName:"p",href:"/docs/keyring/start/basics"},"let's understand what the Keyring gives us"),"."))}f.isMDXComponent=!0}}]);