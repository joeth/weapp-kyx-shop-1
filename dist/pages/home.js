"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function i(a,r){try{var o=t[a](r),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){i("next",e)},function(e){i("throw",e)});e(s)}return i("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_dec,_class,_lodash=require("./../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../utils/api.js"),_api2=_interopRequireDefault(_api),_common=require("./../mixins/common.js"),_common2=_interopRequireDefault(_common),_tabbar=require("./../components/tabbar.js"),_tabbar2=_interopRequireDefault(_tabbar),_loadmore=require("./../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_grid=require("./../components/product/grid.js"),_grid2=_interopRequireDefault(_grid),_wepyRedux=require("./../npm/wepy-redux/lib/index.js"),_actions=require("./../store/actions/index.js"),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,store=(0,_wepyRedux.getStore)(),HomePage=(_dec=(0,_wepyRedux.connect)({catalogList:function(e){return e.catalog.catalogList}}))(_class=function(e){function t(){var e,n,i,a;_classCallCheck(this,t);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=i=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"},enablePullDownRefresh:!0},i.$repeat={},i.$props={tabbar:{"xmlns:v-bind":"","v-bind:datalist.sync":"catalogList",defaultKey:"home",route:"/pages/product/list","xmlns:v-on":""},loadmore:{"xmlns:wx":""},products:{"v-bind:datalist.sync":"hotReviewList"}},i.$events={tabbar:{"v-on:on-change":"onTabChange"}},i.components={tabbar:_tabbar2.default,loadmore:_loadmore2.default,products:_grid2.default},i.mixins=[_common2.default],i.data={winWidth:winWidth,preloaded:!1,isloading:!1,slideIndex:0,slideList:null,freeQuota:0,newSaleList:null,hotSaleList:null,hotReviewList:null},i.computed={slideOptimize:function(){return winWidth+"x"+300*winRatio}},i.methods={onSlideChange:function(e){this.slideIndex=e.detail.current},onTabChange:function(e){var t=e.key;_wepy2.default.navigateTo({url:"/pages/product/list?id="+t})}},a=n,_possibleConstructorReturn(i,a)}return _inherits(t,e),_createClass(t,[{key:"getInitialData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,store.dispatch((0,_actions.getCatalogList)());case 2:return e.next=4,_utils2.default.request(_api2.default.homepage).then(function(e){var n=e.result;t.freeQuota=n.freeQuota,t.slideList=n.slideList,t.newSaleList=n.newSaleList,t.hotSaleList=n.hotSaleList,t.hotReviewList=n.hotReviewList}).catch(function(e){});case 4:this.$apply();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("下拉刷新数据"),e.next=3,this.getInitialData();case 3:_wepy2.default.stopPullDownRefresh();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInitialData();case 2:this.preloaded=!0,this.$apply();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShareAppMessage",value:function(e){return"button"===e.from&&console.log(e.target),{path:"/pages/home?isShare=true",title:_wepy2.default.$instance.globalData.shareInfo.title,imageUrl:_wepy2.default.$instance.globalData.shareInfo.imageUrl,success:function(e){},fail:function(e){}}}}]),t}(_wepy2.default.page))||_class;Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(HomePage,"pages/home"));