/*! For license information please see 839.78fc78c4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbulksender=self.webpackChunkbulksender||[]).push([[839],{86164:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(63805),o=t(1413);var i={appId:"bulksender",url:"https://descartesnetwork.github.io/bulksender",senhub:"senhub@https://descartesnetwork.github.io/senhub/index.js"},s={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",bulksenderAddress:"FjkVzT6QJCQrgoZ8VoyAqysD5Mfa73ekpXWe9zDprWRA"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",bulksenderAddress:""},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",bulksenderAddress:""}},u={manifest:{development:(0,o.Z)({},i),staging:(0,o.Z)({},i),production:(0,o.Z)({},i)}[r.OB],sol:s[r.ef]}},15659:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(19289);BigInt.prototype.toJSON=function(){return this.toString()};var o={serializableCheck:{isSerializable:function(e){return"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||function(e){if(null===e)return!1;var n=Object.getPrototypeOf(e);return null!==n&&null===Object.getPrototypeOf(n)}(e)||"bigint"===typeof e}}},i=t(84863),s=(0,r.configureStore)({middleware:function(e){return e(o)},devTools:!1,reducer:{main:i.ZP}})},84863:function(e,n,t){t.d(n,{a_:function(){return a},Ko:function(){return c}});var r=t(15861),o=t(87757),i=t.n(o),s=t(19289),u="main",a=(0,s.createAsyncThunk)("".concat(u,"/setData"),function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{data:n});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),c=(0,s.createAsyncThunk)("".concat(u,"/setMintAddress"),function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{mintAddress:n});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),f=(0,s.createSlice)({name:u,initialState:{mintAddress:"",data:[]},reducers:{},extraReducers:function(e){e.addCase(a.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(c.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)}))}});n.ZP=f.reducer},95839:function(e,n,t){t.r(n),t.d(n,{default:function(){return p},widgetConfig:function(){return l}});var r=t(55754),o=t(49142),i=t(78589),s=t(63805),u=t(45263),a=function(){var e=(0,o.useUI)().ui,n=e.width,t=e.infix;return(0,u.jsx)(i.Row,{gutter:[24,24],children:(0,u.jsxs)(i.Col,{span:24,children:[(0,u.jsx)(i.Typography.Title,{level:5,children:"BulkSender Widget"}),(0,u.jsxs)(i.Typography.Text,{children:["Env: ",s.OB," - ",n,"px - ",t]})]})})},c=t(86164),f=t(15659),d=(t(94584),c.Z.manifest.appId),l={size:"small",type:"solid"},p=function(){return(0,u.jsx)(o.UIProvider,{children:(0,u.jsx)(o.WalletProvider,{children:(0,u.jsx)(o.AccountProvider,{children:(0,u.jsx)(o.MintProvider,{children:(0,u.jsx)(o.PoolProvider,{children:(0,u.jsx)(r.Provider,{store:f.Z,children:(0,u.jsx)(i.ConfigProvider,{prefixCls:d,children:(0,u.jsx)(a,{})})})})})})})})}},63805:function(e,n,t){t.d(n,{OB:function(){return o},ef:function(){return i}});var r=t(53933),o="production",i=function(){switch(r.Z.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}}()},53933:function(e,n){var t="sentre",r=window.localStorage,o=function(e){if(!e)return null;try{return JSON.parse(e)}catch(n){return null}},i={set:function(e,n){var i=o(r.getItem(t));i&&"object"===typeof i||(i={}),i[e]=n,r.setItem(t,JSON.stringify(i))},get:function(e){var n=o(r.getItem(t));return n&&"object"===typeof n?n[e]:null},clear:function(e){i.set(e,null)}};n.Z=i},25882:function(e){var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var s,u,a=o(e),c=1;c<arguments.length;c++){for(var f in s=Object(arguments[c]))t.call(s,f)&&(a[f]=s[f]);if(n){u=n(s);for(var d=0;d<u.length;d++)r.call(s,u[d])&&(a[u[d]]=s[u[d]])}}return a}},62175:function(e,n,t){t(25882);var r=t(92950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,f=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(f=n.ref),n)u.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:f,props:i,_owner:s.current}}n.jsx=c,n.jsxs=c},45263:function(e,n,t){e.exports=t(62175)},94584:function(){}}]);
//# sourceMappingURL=839.78fc78c4.chunk.js.map