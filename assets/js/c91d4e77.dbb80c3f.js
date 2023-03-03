"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[1021],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return t?o.createElement(f,s(s({ref:n},d),{},{components:t})):o.createElement(f,s({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3273:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var o=t(7462),a=t(3366),i=(t(7294),t(4137)),s=["components"],r={title:"Transactions"},l=void 0,c={unversionedId:"api/cookbook/tx",id:"api/cookbook/tx",title:"Transactions",description:"A blockchain is no fun if you are not submitting transactions. Or at least if somebody is not submitting any. Here you will find some snippets for dealing with some common issues.",source:"@site/docs/api/cookbook/tx.md",sourceDirName:"api/cookbook",slug:"/api/cookbook/tx",permalink:"/docs/api/cookbook/tx",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/cookbook/tx.md",tags:[],version:"current",frontMatter:{title:"Transactions"},sidebar:"reference",previous:{title:"Storage",permalink:"/docs/api/cookbook/storage"},next:{title:"ApiPromise Examples",permalink:"/docs/api/examples/promise"}},d={},u=[{value:"How do I estimate the transaction fees?",id:"how-do-i-estimate-the-transaction-fees",level:2},{value:"How do I get the decoded enum for an ExtrinsicFailed event?",id:"how-do-i-get-the-decoded-enum-for-an-extrinsicfailed-event",level:2},{value:"How do I get the Result of a Sudo event?",id:"how-do-i-get-the-result-of-a-sudo-event",level:2},{value:"How do I send an unsigned extrinsic?",id:"how-do-i-send-an-unsigned-extrinsic",level:2},{value:"How can I batch transactions?",id:"how-can-i-batch-transactions",level:2},{value:"How do I take the pending tx pool into account in my nonce?",id:"how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce",level:2}],p={toc:u};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A blockchain is no fun if you are not submitting transactions. Or at least if somebody is not submitting any. Here you will find some snippets for dealing with some common issues."),(0,i.kt)("h2",{id:"how-do-i-estimate-the-transaction-fees"},"How do I estimate the transaction fees?"),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"signAndSend")," helper on transactions, ",(0,i.kt)("inlineCode",{parentName:"p"},".paymentInfo")," (with the exact same parameters) are also exposed. Using the same sender, it applies a dummy signature to the transaction and then gets the fee estimation via RPC."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// estimate the fees as RuntimeDispatchInfo, using the signer (either\n// address or locked/unlocked keypair) (When overrides are applied, e.g\n//  nonce, the format would be `paymentInfo(sender, { nonce })`)\nconst info = await api.tx.balances\n  .transfer(recipient, 123)\n  .paymentInfo(sender);\n\n// log relevant info, partialFee is Balance, estimated for current\nconsole.log(`\n  class=${info.class.toString()},\n  weight=${info.weight.toString()},\n  partialFee=${info.partialFee.toHuman()}\n`);\n")),(0,i.kt)("h2",{id:"how-do-i-get-the-decoded-enum-for-an-extrinsicfailed-event"},"How do I get the decoded enum for an ExtrinsicFailed event?"),(0,i.kt)("p",null,"Assuming you are sending a tx via ",(0,i.kt)("inlineCode",{parentName:"p"},".signAndSend"),", the callback yields information around the tx pool status as well as any events when ",(0,i.kt)("inlineCode",{parentName:"p"},"isInBlock")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"isFinalized"),". If an extrinsic fails via ",(0,i.kt)("inlineCode",{parentName:"p"},"system.ExtrinsicFailed")," event, you can retrieve the error, if defined as an enum on a module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"api.tx.balances\n  .transfer(recipient, 123)\n  .signAndSend(sender, ({ status, events }) => {\n    if (status.isInBlock || status.isFinalized) {\n      events\n        // find/filter for failed events\n        .filter(({ event }) =>\n          api.events.system.ExtrinsicFailed.is(event)\n        )\n        // we know that data for system.ExtrinsicFailed is\n        // (DispatchError, DispatchInfo)\n        .forEach(({ event: { data: [error, info] } }) => {\n          if (error.isModule) {\n            // for module errors, we have the section indexed, lookup\n            const decoded = api.registry.findMetaError(error.asModule);\n            const { docs, method, section } = decoded;\n\n            console.log(`${section}.${method}: ${docs.join(' ')}`);\n          } else {\n            // Other, CannotLookup, BadOrigin, no extra info\n            console.log(error.toString());\n          }\n        });\n    }\n  });\n")),(0,i.kt)("p",null,"As of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," 2.3.1 additional result fields are exposed. Firstly there is ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatchInfo: DispatchInfo")," which occurs in both ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtrinsicSuccess")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtrinsicFailed")," events. Additionally, on failures the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatchError: DispatchError")," is exposed. With this in mind, the above can be simplified to be -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"api.tx.balances\n  .transfer(recipient, 123)\n  .signAndSend(sender, ({ status, events, dispatchError }) => {\n    // status would still be set, but in the case of error we can shortcut\n    // to just check it (so an error would indicate InBlock or Finalized)\n    if (dispatchError) {\n      if (dispatchError.isModule) {\n        // for module errors, we have the section indexed, lookup\n        const decoded = api.registry.findMetaError(dispatchError.asModule);\n        const { docs, name, section } = decoded;\n\n        console.log(`${section}.${name}: ${docs.join(' ')}`);\n      } else {\n        // Other, CannotLookup, BadOrigin, no extra info\n        console.log(dispatchError.toString());\n      }\n    }\n  });\n")),(0,i.kt)("h2",{id:"how-do-i-get-the-result-of-a-sudo-event"},"How do I get the Result of a Sudo event?"),(0,i.kt)("p",null,"The section above shows you how to listen for the result of a regular extrinsic. However, Sudo extrinsics do not directly report the success or failure of the underlying call. Instead, a Sudo transaction will return ",(0,i.kt)("inlineCode",{parentName:"p"},"Sudid(result)"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," will be the information you are looking for."),(0,i.kt)("p",null,"To properly parse this information, we will follow the steps above, but then specifically peek into the event data to find the final result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const unsub = await api.tx.sudo\n  .sudo(\n    api.tx.balances.forceTransfer(user1, user2, amount)\n  )\n  .signAndSend(sudoPair, ({ status, events }) => {\n    if (status.isInBlock || status.isFinalized) {\n      events\n        // We know this tx should result in `Sudid` event.\n        .filter(({ event }) =>\n          api.events.sudo.Sudid.is(event)\n        )\n        // We know that `Sudid` returns just a `Result`\n        .forEach(({ event : { data: [result] } }) => {\n          // Now we look to see if the extrinsic was actually successful or not...\n          if (result.isError) {\n            let error = result.asError;\n            if (error.isModule) {\n              // for module errors, we have the section indexed, lookup\n              const decoded = api.registry.findMetaError(error.asModule);\n              const { docs, name, section } = decoded;\n\n              console.log(`${section}.${name}: ${docs.join(' ')}`);\n            } else {\n              // Other, CannotLookup, BadOrigin, no extra info\n              console.log(error.toString());\n            }\n          }\n        });\n      unsub();\n    }\n  });\n")),(0,i.kt)("h2",{id:"how-do-i-send-an-unsigned-extrinsic"},"How do I send an unsigned extrinsic?"),(0,i.kt)("p",null,"For most runtime modules, transactions need to be signed and validation for this happens node-side. There are however modules that accepts unsigned extrinsics, an example would be the Polkadot/Kusama token claims (which is here used as an example)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// construct the transaction, exactly as per normal\nconst utx = api.tx.claims.claim(beneficiary, ethSignature);\n\n// send it without calling sign, pass callback with status/events\ntx.send(({ status }) => {\n  if (status.isInBlock) {\n    console.log(`included in ${status.asInBlock}`);\n  }\n});\n")),(0,i.kt)("p",null,"The signing is indicated by the first byte in the transaction, so in this case we have called ",(0,i.kt)("inlineCode",{parentName:"p"},".send")," on it (no ",(0,i.kt)("inlineCode",{parentName:"p"},".sign")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".signAndSend"),"), so it will be sent using the unsigned state, without signature attached."),(0,i.kt)("h2",{id:"how-can-i-batch-transactions"},"How can I batch transactions?"),(0,i.kt)("p",null,"Polkadot/Substrate provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"utility.batch")," method that can be used to send a number of transactions at once. These are then executed from a single sender (single nonce specified) in sequence. This is very useful in a number of cases, for instance if you wish to create a payout for a validator for multiple eras, you can use this method. Likewise, you can send a number of transfers at once. Or even batch different types of transactions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// construct a list of transactions we want to batch\nconst txs = [\n  api.tx.balances.transfer(addrBob, 12345),\n  api.tx.balances.transfer(addrEve, 12345),\n  api.tx.staking.unbond(12345)\n];\n\n// construct the batch and send the transactions\napi.tx.utility\n  .batch(txs)\n  .signAndSend(sender, ({ status }) => {\n    if (status.isInBlock) {\n      console.log(`included in ${status.asInBlock}`);\n    }\n  });\n")),(0,i.kt)("p",null,"The fee for a batch transaction can be estimated similar to the fee for a single transaction using the exposed ",(0,i.kt)("inlineCode",{parentName:"p"},".paymentInfo")," helper method that was described earlier, and it is usually less than the sum of the fees for each individual transaction."),(0,i.kt)("h2",{id:"how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce"},"How do I take the pending tx pool into account in my nonce?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"system.account")," query will always contain the current state, i.e. it will reflect the nonce for the last known block. As such when sending multiple transactions in quick succession (see batching above), there may be transactions in the pool that has the same nonce that ",(0,i.kt)("inlineCode",{parentName:"p"},"signAndSend")," would apply - this call doesn't do any magic, it simply reads the state for the nonce. Since we can specify options to the ",(0,i.kt)("inlineCode",{parentName:"p"},"signAndSend")," operation, we can override the nonce, either by manually incrementing it or querying it via ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc.system.accountNextIndex"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 10; i++) {\n  // retrieve sender's next index/nonce, taking txs in the pool into account\n  const nonce = await api.rpc.system.accountNextIndex(sender);\n\n  // send, just retrieving the hash, not waiting on status\n  const txhash = await api.tx.balances\n    .transfer(recipient, 123)\n    .signAndSend(sender, { nonce });\n}\n")),(0,i.kt)("p",null,"As a convenience function, the ",(0,i.kt)("inlineCode",{parentName:"p"},"accountNextIndex")," can be omitted by specifying a nonce of ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),", allow the API to do the lookup. In this case the above can be simplified even further,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 10; i++) {\n  const txhash = await api.tx.balances\n    .transfer(recipient, 123)\n    .signAndSend(sender, { nonce: -1 });\n}\n")),(0,i.kt)("p",null,"The latter form is preferred since it dispatches the RPC calls for nonce and blockHash (used for mortality) in parallel and therefore will yield a better throughput, especially with the above bulk example."))}h.isMDXComponent=!0}}]);