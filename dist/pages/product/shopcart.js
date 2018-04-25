"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_minui=require("./../../mixins/minui.js"),_minui2=_interopRequireDefault(_minui),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_nulldata=require("./../../components/nulldata.js"),_nulldata2=_interopRequireDefault(_nulldata),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,store=(0,_wepyRedux.getStore)(),PageShopCart=(_dec=(0,_wepyRedux.connect)({shopCartList:function(e){return e.shopcart.shopCartList},isSelectedAll:function(e){return e.shopcart.isSelectedAll},totalAmount:function(e){return e.shopcart.totalAmount}}))(_class=function(e){function t(){var e,i,n,a;_classCallCheck(this,t);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return i=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"}},n.$repeat={},n.$props={nulldata:{"xmlns:wx":""}},n.$events={},n.components={nulldata:_nulldata2.default,loadmore:_loadmore2.default},n.mixins=[_minui2.default],n.data={uid:null},n.computed={optimize:function(){var e=Math.ceil(180*winRatio);return e+"x"+e}},n.methods={onCheckAll:function(){var e={uid:this.uid};store.dispatch((0,_actions.checkAllShopCart)(e))},onCheckOne:function(e){store.dispatch((0,_actions.checkOneShopCart)(e))},onChangeCounter:function(e){var t=e.currentTarget.dataset.value,i=e.detail.number,n=Object.assign({},t,{count:i});store.dispatch((0,_actions.setShopCart)(n))},onDelCart:function(e){var t=this;wx.showModal({title:"温馨提示",content:"请确认要删除该商品吗？",success:function(i){i.confirm&&(store.dispatch((0,_actions.delShopCart)(e)),t.$apply())}})},formSubmit:function(e){console.log("去结算");e.detail.formId;if(!this.shopCartList.some(function(e){return 1==e.isSelected}))return void _utils2.default.showToast("未选中商品");store.dispatch((0,_actions.setShopBuyList)()).then(function(e){_wepy2.default.navigateTo({url:"/pages/order/confirm"})})}},a=i,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){this.uid=_wepy2.default.$instance.globalData.uid;var e={uid:this.uid};store.dispatch((0,_actions.getShopCart)(e))}}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(PageShopCart,"pages/product/shopcart"));