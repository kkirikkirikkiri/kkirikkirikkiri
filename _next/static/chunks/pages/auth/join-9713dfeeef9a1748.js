(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{3367:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/join",function(){return e(8664)}])},8585:function(n,t,e){"use strict";var o=e(6042),r=e(9396),i=e(9534),c=e(7297),u=e(5893),s=e(9521);function l(){var n=(0,c.Z)(["\n  cursor: pointer;\n  height: 44px;\n  background: ",";\n  color: ",";\n  border-radius: 10px;\n  width: 100%;\n  font-weight: 400;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return l=function(){return n},n}var a=function(n){var t=n.children,e=n.onClick,c=(0,i.Z)(n,["children","onClick"]);return(0,u.jsx)(f,(0,r.Z)((0,o.Z)({},c),{onClick:e,children:t}))},f=s.ZP.button.withConfig({componentId:"sc-18b9871b-0"})(l(),function(n){var t=n.background;return null!=t?t:"inherit"},function(n){var t=n.color;return null!=t?t:"inherit"});t.Z=a},107:function(n,t,e){"use strict";var o=e(5893),r=function(n){return(0,o.jsx)("div",{style:{marginLeft:n.width}})};t.Z=r},8664:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return C}});var o=e(7297),r=e(5893),i=e(8585),c=e(9852),u=e(107),s=e(5675),l=e.n(s),a=e(6420),f=e(9521);function d(){var n=(0,o.Z)(["\n  cursor: pointer;\n  background: #f8d756;\n  border-radius: 10px;\n  width: 100%;\n  min-height: 44px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 100%;\n  color: #050505;\n  gap: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"]);return d=function(){return n},n}var p=function(){return(0,r.jsx)(a.Z,{token:"64d0c649f5b7e5a3ef9790587ee5f19b",onSuccess:console.log,onFail:console.error,onLogout:console.info,render:function(n){var t=n.onClick;return(0,r.jsxs)(i.Z,{onClick:t,background:"#f8d756",color:"#050505",children:[(0,r.jsx)(l(),{src:"/img/icon/kakao.svg",width:14,height:12}),(0,r.jsx)(u.Z,{width:4}),"카카오 로그인"]})}})};f.ZP.button.withConfig({componentId:"sc-4435d0e8-0"})(d());var h=e(9821);function g(){var n=(0,o.Z)(["\n  cursor: pointer;\n  background: #6bbe48;\n  border-radius: 10px;\n  width: 100%;\n  min-height: 44px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 100%;\n  color: #ffffff;\n  gap: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"]);return g=function(){return n},n}var b=function(){return(0,r.jsx)(h.Z,{clientId:"T1PLBkBiDziggLWWCwK_",callbackUrl:"http://localhost:3000/login",render:function(n){return(0,r.jsxs)(i.Z,{onClick:n.onClick,background:"#6bbe48",color:"#ffffff",children:[(0,r.jsx)(l(),{src:"/img/icon/naver.svg",width:14,height:12}),(0,r.jsx)(u.Z,{width:4}),"네이버 로그인"]})},onSuccess:function(n){return console.log(n)},onFailure:function(n){return console.error(n)}})};f.ZP.button.withConfig({componentId:"sc-faced067-0"})(g());var v=e(8358),y=e(1163),w=e(7940);function k(){var n=(0,o.Z)(["\n  width: 100%;\n"]);return k=function(){return n},n}function m(){var n=(0,o.Z)(["\n  border: 1px solid #bdbdbd;\n  background: #fafafa;\n  border: 1px solid #bdbdbd;\n"]);return m=function(){return n},n}var x=function(){var n=(0,y.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(j,{direction:"column",gap:7,children:[(0,r.jsx)(b,{}),(0,r.jsx)(p,{}),(0,r.jsx)(_,{onClick:function(){return n.push(w.Z.TERMS.url)},children:"이메일로 회원가입"})]})})};x.getLayout=function(n){return(0,r.jsx)(v.Z,{children:n})};var j=(0,f.ZP)(c.Z).withConfig({componentId:"sc-44e35fd3-0"})(k()),_=(0,f.ZP)(i.Z).withConfig({componentId:"sc-44e35fd3-1"})(m()),C=x},1163:function(n,t,e){n.exports=e(387)},6420:function(n,t,e){"use strict";var o=e(7294),r=function(n,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},i={display:"inline-block",padding:"0px",width:"222px",height:"49px",lineHeight:"49px",color:"rgb(60, 30, 30)",backgroundColor:"rgb(255, 235, 0)",border:"1px solid transparent",borderRadius:"3px",fontSize:"16px",textAlign:"center"},c=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={isLoggedIn:!1},t.onButtonClick=function(){var n,e=t.props,o=e.throughTalk,r=e.persistAccessToken,i=e.needProfile,c=void 0===i||i,u=e.useLoginForm,s=e.onSuccess,l=e.onFail;(null===(n=window.Kakao)||void 0===n?void 0:n.Auth)[void 0!==u&&u?"loginForm":"login"]({throughTalk:void 0===o||o,persistAccessToken:void 0===r||r,success:function(n){var e;t.setState({isLoggedIn:!0}),c?null===(e=window.Kakao)||void 0===e||e.API.request({url:"/v2/user/me",success:function(t){s({response:n,profile:t})},fail:l}):s({response:n})},fail:l})},t.onLogout=function(){var n;null===(n=window.Kakao)||void 0===n||n.Auth.logout(function(){var n,e,o;null===(e=(n=t.props).onLogout)||void 0===e||e.call(n,null===(o=window.Kakao)||void 0===o?void 0:o.Auth.getAccessToken()),t.setState({isLoggedIn:!1})})},t}return function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}(t,n),t.prototype.componentDidMount=function(){var n,t,e,o;return n=this,t=void 0,e=void 0,o=function(){return function(n,t){var e,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw TypeError("Generator is already executing.");for(;c;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(n,c)}catch(u){i=[6,u],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,function(n){switch(n.label){case 0:return[4,new Promise(function(n,t){var e=document.createElement("script");e.id="kakao-sdk",e.src="//developers.kakao.com/sdk/js/kakao.min.js",e.onload=n,document.body.append(e)})];case 1:return n.sent(),window.Kakao.init(this.props.token),[2]}})},new(e||(e=Promise))(function(r,i){function c(n){try{s(o.next(n))}catch(t){i(t)}}function u(n){try{s(o.throw(n))}catch(t){i(t)}}function s(n){var t;n.done?r(n.value):((t=n.value)instanceof e?t:new e(function(n){n(t)})).then(c,u)}s((o=o.apply(n,t||[])).next())})},t.prototype.render=function(){var n=this.state.isLoggedIn?this.onLogout:this.onButtonClick,t=this.props,e=t.render,r=t.className,c=t.style,u=t.children;return"function"==typeof e?e({onClick:n}):o.createElement("button",{type:"button",className:void 0===r?"":r,onClick:n,style:void 0===c?i:c},void 0===u?"카카오로 로그인하기":u)},t.DEFAULT_STYLE=i,t}(o.PureComponent);t.Z=c},9821:function(n,t,e){"use strict";var o=e(7294),r=function(n,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},i=function(){return window,!1},c=function(n){if(!i()){var t=n.clientId,e=n.callbackUrl,o=n.onSuccess,r=n.onFailure,c=window.naver,u=new c.LoginWithNaverId({callbackUrl:e,clientId:t,isPopup:!0,loginButton:{color:"green",type:3,height:60}});u.init(),window.opener?u.getLoginStatus(function(n){n?window.opener.naver.successCallback(u.user):window.opener.failureCallback(),window.close()}):(c.successCallback=function(n){return o(n)},c.failureCallback=r)}},u=function(){if(document&&0===document.querySelectorAll("#naverIdLogin").length){var n=document.createElement("div");n.id="naverIdLogin",n.style.position="absolute",n.style.top="-10000px",document.body.appendChild(n)}},s=function(n){if(document&&0===document.querySelectorAll("#naver-login-sdk").length){var t=document.createElement("script");t.id="naver-login-sdk",t.src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js",t.onload=function(){return c(n)},document.head.appendChild(t)}},l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return!function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}(t,n),t.prototype.componentDidMount=function(){!i()&&(u(),s(this.props))},t.prototype.render=function(){return(0,this.props.render)({onClick:function(){document&&document.querySelector("#naverIdLogin").firstChild&&document.querySelector("#naverIdLogin").firstChild.click()}})},t}(o.Component);t.Z=l},9396:function(n,t,e){"use strict";function o(n,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e.push.apply(e,o)}return e})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n}e.d(t,{Z:function(){return o}})},9534:function(n,t,e){"use strict";function o(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}e.d(t,{Z:function(){return o}})}},function(n){n.O(0,[307,358,774,888,179],function(){return n(n.s=3367)}),_N_E=n.O()}]);