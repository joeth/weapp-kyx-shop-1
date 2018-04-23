"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function i(r,a){try{var s=t[r](a),o=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(o).then(function(e){i("next",e)},function(e){i("throw",e)});e(o)}return i("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_input=require("./../../mixins/input.js"),_input2=_interopRequireDefault(_input),_minui=require("./../../mixins/minui.js"),_minui2=_interopRequireDefault(_minui),_nulldata=require("./../../components/nulldata.js"),_nulldata2=_interopRequireDefault(_nulldata),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_cityselect=require("./../../components/cityselect.js"),_cityselect2=_interopRequireDefault(_cityselect),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),AddressDetail=function(e){function t(){var e,n,i,r;_classCallCheck(this,t);for(var a=arguments.length,s=Array(a),o=0;o<a;o++)s[o]=arguments[o];return n=i=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"}},i.$repeat={},i.$props={cityselect:{"xmlns:v-bind":"","v-bind:selected.sync":"selectedArea"},loadmore:{"xmlns:wx":""}},i.$events={},i.components={cityselect:_cityselect2.default,nulldata:_nulldata2.default,loadmore:_loadmore2.default},i.mixins=[_minui2.default,_input2.default],i.data={preloaded:!1,isloading:!1,activeId:0,from:null,selectedArea:"",consignee:{id:0,name:"",area:"",tel:"",address:""}},i.watch={selectedArea:function(e){this.consignee.area=e}},i.methods={showCityPicker:function(){this.$broadcast("showCityselect")},formSubmit:function(e){var t=this;console.log(e.detail.formId);var n=this.consignee,i=n.name,r=n.tel,a=n.area,s=n.address;if(!i)return void _utils2.default.showToast("请填写收货人");if(!r)return void _utils2.default.showToast("请填写联系方式");if(!a)return void _utils2.default.showToast("请选择所在地区");if(!s)return void _utils2.default.showToast("请填写详细地址");console.log("提交数据",this.consignee);var o=Object.assign({},this.consignee);_utils2.default.request(_api2.default.consignee.info,{data:o,method:"post"}).then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(n){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(_utils2.default.showToast("添加成功","success"),i=Object.assign({},o,n.result),!t.isOpt&&!i.isDefault){e.next=5;break}return e.next=5,_wepy2.default.setStorageSync("__SELECTED_CONSIGNEE__",i);case 5:_wepy2.default.navigateBack();case 6:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){_utils2.default.showToast(e.message)})}},r=n,_possibleConstructorReturn(i,r)}return _inherits(t,e),_createClass(t,[{key:"getConsigneeInfo",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.activeId){e.next=2;break}return e.abrupt("return");case 2:return t={id:this.activeId},e.next=5,_utils2.default.request(_api2.default.consignee.info,{data:t}).then(function(e){console.log("成功了",e),n.consignee=Object.assign({},n.consignee,e.result),n.selectedArea=n.consignee.area,n.$apply()}).catch(function(e){_utils2.default.showToast(e.message)});case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.activeId=t.id,this.isOpt="true"==t.isOpt,e.next=4,this.getConsigneeInfo();case 4:this.preloaded=!0,this.$apply();case 6:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(AddressDetail,"pages/consignee/edit"));