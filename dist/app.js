"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new _promisePolyfill2.default(function(e,r){function n(a,o){try{var s=t[a](o),i=s.value}catch(e){return void r(e)}if(!s.done)return _promisePolyfill2.default.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_promisePolyfill=require("./npm/promise-polyfill/lib/index.js"),_promisePolyfill2=_interopRequireDefault(_promisePolyfill);require("./npm/wepy-async-function/index.js");var _utils=require("./utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./utils/api.js"),_api2=_interopRequireDefault(_api),_wepyRedux=require("./npm/wepy-redux/lib/index.js"),_store=require("./store/index.js"),_store2=_interopRequireDefault(_store),_actions=require("./store/actions/index.js"),store=(0,_store2.default)();(0,_wepyRedux.setStore)(store);var device=wx.getSystemInfoSync(),deviceRadio=device.windowWidth/750,_default=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.config={pages:["pages/home","pages/catalog","pages/product/list","pages/product/detail","pages/product/comments","pages/product/shopcart","pages/shopcart","pages/mycenter","pages/order/list","pages/order/detail","pages/order/confirm","pages/order/result","pages/consignee/list","pages/consignee/edit","pages/help/faq","pages/search","pages/topics/free","pages/topics/custom","pages/webview"],tabBar:{color:"#452713",selectedColor:"#a91e11",backgroundColor:"#e9e0cc",list:[{pagePath:"pages/home",iconPath:"images/homepage.png",selectedIconPath:"images/homepage-cur.png",text:"首页"},{pagePath:"pages/catalog",iconPath:"images/catalog.png",selectedIconPath:"images/catalog-cur.png",text:"商品分类"},{pagePath:"pages/shopcart",iconPath:"images/shopcart.png",selectedIconPath:"images/shopcart-cur.png",text:"购物车"},{pagePath:"pages/mycenter",iconPath:"images/mycenter.png",selectedIconPath:"images/mycenter-cur.png",text:"个人中心"}]},window:{backgroundColor:"#e9e0cc",backgroundTextStyle:"light",navigationBarBackgroundColor:"#452713",navigationBarTitleText:"可以兴商城",navigationBarTextStyle:"#d6c5ac"}},e.globalData={deviceRadio:deviceRadio,shareInfo:{},userInfo:null,token:null},e.use("promisify"),e.use("requestfix"),e.intercept("request",{config:function(e){return e.timestamp=+new Date,e},success:function(e){var t={status:1,result:null,message:null,errCode:null};return t=200===e.statusCode?Object.assign({},t,e.data):Object.assign({},t,{status:0,message:"接口异常:"+e.statusCode,errCode:e.statusCode})},fail:function(e){var t={status:0,result:null,message:e.errMsg||"接口异常:"+e.statusCode,errCode:e.statusCode};return t},complete:function(e){}}),e}return _inherits(t,e),_createClass(t,[{key:"onLaunch",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,_utils2.default.login();case 3:return e.next=5,_utils2.default.getShareInfo();case 5:t={uid:this.globalData.uid},store.dispatch((0,_actions.getShopCart)(t));case 7:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.app);App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default,{noPromiseAPI:["createSelectorQuery"]}));