"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[2039],{4137:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},l),{},{components:a})):n.createElement(f,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},304:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={title:"Read storage, at a specific blockhash"},c=void 0,p={unversionedId:"api/examples/promise/read-storage-at",id:"api/examples/promise/read-storage-at",title:"Read storage, at a specific blockhash",description:"In addition to querying the latest storage, you can make storage queries at a specific blockhash. Be aware that the node applies a pruning strategy and typically only keeps the last 256 blocks, unless run in archive mode.",source:"@site/docs/api/examples/promise/read-storage-at.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/read-storage-at",permalink:"/docs/api/examples/promise/read-storage-at",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/read-storage-at.md",tags:[],version:"current",frontMatter:{title:"Read storage, at a specific blockhash"},sidebar:"reference",previous:{title:"Read storage",permalink:"/docs/api/examples/promise/read-storage"},next:{title:"Make a simple transfer",permalink:"/docs/api/examples/promise/make-transfer"}},l={},u=[],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to querying the latest storage, you can make storage queries at a specific blockhash. Be aware that the node applies a pruning strategy and typically only keeps the last 256 blocks, unless run in archive mode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\n// Our address for Alice on the dev chain\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';\n\nasync function main () {\n  // Create our API with a default connection to the local node\n  const api = await ApiPromise.create();\n\n  // Retrieve the last block header, extracting the hash and parentHash\n  const { hash, parentHash } = await api.rpc.chain.getHeader();\n\n  console.log(`last header hash ${hash.toHex()}`);\n\n  // Retrieve the balance at the preceding block for Alice using an at api\n  const apiAt = await api.at(parentHash);\n  const balance = await apiAt.query.system.account(ALICE);\n\n  console.log(`Alice's balance at ${parentHash.toHex()} was ${balance.data.free}`);\n\n  // Now perform a multi query, returning multiple balances at once\n  const balances = await api.query.system.account.multi([ALICE, BOB]);\n\n  console.log(`Current balances for Alice and Bob are ${balances[0].data.free} and ${balances[1].data.free}`);\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}m.isMDXComponent=!0}}]);