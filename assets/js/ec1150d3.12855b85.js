"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[7497],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=a(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||f[m]||s;return n?r.createElement(b,c(c({ref:t},p),{},{components:n})):r.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,c=new Array(s);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var a=2;a<s;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var r=n(7462),o=n(3366),s=(n(7294),n(4137)),c=["components"],i={},l="Listen to new blocks",a={unversionedId:"api/examples/rxjs/listen_to_blocks/README",id:"api/examples/rxjs/listen_to_blocks/README",title:"Listen to new blocks",description:"This example shows how to subscribe to new blocks.",source:"@site/docs/api/examples/rxjs/02_listen_to_blocks/README.md",sourceDirName:"api/examples/rxjs/02_listen_to_blocks",slug:"/api/examples/rxjs/listen_to_blocks/",permalink:"/docs/api/examples/rxjs/listen_to_blocks/",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/rxjs/02_listen_to_blocks/README.md",tags:[],version:"current",frontMatter:{}},p={},u=[],f={toc:u},m="wrapper";function b(e){var t=e.components,n=(0,o.Z)(e,c);return(0,s.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"listen-to-new-blocks"},"Listen to new blocks"),(0,s.kt)("p",null,"This example shows how to subscribe to new blocks."),(0,s.kt)("p",null,"It displays the block number every time a new block is seen by the node you are connected to."),(0,s.kt)("p",null,"NOTE: The example runs until you stop it with CTRL+C"),(0,s.kt)("p",null,"<<< @/docs/examples/rx/02_listen_to_blocks/index.js"))}b.isMDXComponent=!0}}]);