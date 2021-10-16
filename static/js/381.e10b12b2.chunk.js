/*! For license information please see 381.e10b12b2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksenhub=self.webpackChunksenhub||[]).push([[381],{5381:function(e,n,r){r.r(n),r.d(n,{Page:function(){return x},Widget:function(){return w}});var t=r(5754),o=r(9142),a=r(6478),s=r(5861),i=r(7757),c=r.n(i),u=r(9289),d="main",l=(0,u.createAsyncThunk)("".concat(d,"/increaseCounter"),function(){var e=(0,s.Z)(c().mark((function e(n,r){var t,o,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.getState,o=t(),a=o.main.counter,e.abrupt("return",{counter:a+1});case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),f=(0,u.createSlice)({name:d,initialState:{counter:0},reducers:{},extraReducers:function(e){e.addCase(l.fulfilled,(function(e,n){var r=n.payload;Object.assign(e,r)}))}}).reducer,p=r(2950),h=r(184),b=function(){var e=(0,o.useWallet)().wallet.address,n=(0,t.useDispatch)(),r=(0,t.useSelector)((function(e){return e.main})).counter,s=(0,p.useCallback)((function(){return n(l())}),[n]);return(0,h.jsxs)(a.Row,{gutter:[24,24],align:"middle",children:[(0,h.jsx)(a.Col,{span:24,children:(0,h.jsxs)(a.Typography.Text,{children:["Page: ",e]})}),(0,h.jsx)(a.Col,{children:(0,h.jsxs)(a.Typography.Text,{children:["Counter: ",r]})}),(0,h.jsx)(a.Col,{children:(0,h.jsx)(a.Button,{onClick:s,children:"Increase"})})]})},y=function(){var e=(0,o.useUI)().ui,n=e.width,r=e.infix;return(0,h.jsx)(a.Row,{gutter:[24,24],children:(0,h.jsx)(a.Col,{span:24,children:(0,h.jsxs)(a.Typography.Text,{children:["Widget: ",n,"px - ",r]})})})};BigInt.prototype.toJSON=function(){return this.toString()};var j=(0,u.getDefaultMiddleware)({serializableCheck:{isSerializable:function(e){return"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||function(e){if(null===e)return!1;var n=Object.getPrototypeOf(e);return null!==n&&null===Object.getPrototypeOf(n)}(e)||"bigint"===typeof e}}}),g=r(511),v=function(e){return"development"===g.Z.env&&{name:e,actionSanitizer:function(e){return{payload:e.payload,type:e.type}}}},m=(0,u.configureStore)({middleware:j,devTools:v("myapp"),reducer:{main:f}}),x=function(){return(0,h.jsx)(o.WalletProvider,{children:(0,h.jsx)(t.Provider,{store:m,children:(0,h.jsx)(b,{})})})},w=function(){return(0,h.jsx)(o.UIProvider,{children:(0,h.jsx)(t.Provider,{store:m,children:(0,h.jsx)(y,{})})})}},5408:function(e,n){n.Z="production"},511:function(e,n,r){var t=r(5408),o=r(3799),a=r(8459),s={env:t.Z,manifest:o.Z[t.Z],sol:a.Z[t.Z]};n.Z=s},3799:function(e,n,r){var t=r(1413);var o={appId:"senpage",url:"https://descartesnetwork.github.io/senpage"},a={development:(0,t.Z)({},o),staging:(0,t.Z)({},o),production:(0,t.Z)({},o)};n.Z=a},8459:function(e,n,r){var t=r(1413),o={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},a={development:(0,t.Z)({node:"https://api.devnet.solana.com",chainId:103,cluster:"devnet",senAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"},o),staging:(0,t.Z)({node:"https://api.devnet.solana.com",cluster:"devnet",chainId:103,senAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"},o),production:(0,t.Z)({node:"https://api.mainnet-beta.solana.com",cluster:"mainnet",chainId:101,senAddress:"SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M",swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e"},o)};n.Z=a},1725:function(e){var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,i,c=o(e),u=1;u<arguments.length;u++){for(var d in s=Object(arguments[u]))r.call(s,d)&&(c[d]=s[d]);if(n){i=n(s);for(var l=0;l<i.length;l++)t.call(s,i[l])&&(c[i[l]]=s[i[l]])}}return c}},6374:function(e,n,r){r(1725);var t=r(2950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,a={},u=null,d=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:o,type:e,key:u,ref:d,props:a,_owner:s.current}}n.jsx=u,n.jsxs=u},184:function(e,n,r){e.exports=r(6374)}}]);
//# sourceMappingURL=381.e10b12b2.chunk.js.map