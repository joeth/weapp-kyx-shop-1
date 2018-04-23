"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var u=t[o](i),s=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_lodash=require("./../../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_input=require("./../../mixins/input.js"),_input2=_interopRequireDefault(_input),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,OrderPostComment=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.mixins=[_input2.default],r.props={order:{type:Object,default:null,twoWay:!0}},r.data={id:0,cover:null,score:null,content:null},r.computed={optimize:function(){var e=Math.ceil(180*winRatio);return e+"x"+e}},r.events={showPostComment:function(e){var t=this.$wxpage.selectComponent(".J_POST_COMMENT");t&&t.show(),this.onReinit()},hidePostComment:function(){var e=this.$wxpage.selectComponent(".J_POST_COMMENT");e&&e.hide()}},r.methods={tap:function(e){},tapScore:function(e){e==this.score?this.score=0:this.score=e},onCancel:function(){this.$emit("on-cancel"),this.$emit("hidePostComment")},onSubmit:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={id:this.id,score:this.score,content:this.content},t.id){e.next=4;break}return _utils2.default.showToast("未知订单ID"),e.abrupt("return");case 4:if(null!=t.score){e.next=7;break}return _utils2.default.showToast("请选择评分"),e.abrupt("return");case 7:if(t.content){e.next=10;break}return _utils2.default.showToast("请填写评价"),e.abrupt("return");case 10:return _wepy2.default.showLoading(),e.next=13,_utils2.default.request(_api2.default.order.comment,{data:t,method:"POST"}).then(function(e){e.result;n.$emit("on-submit",t),n.$emit("hidePostComment")}).catch(function(e){_utils2.default.showToast("提交失败了")});case 13:_wepy2.default.hideLoading();case 14:case"end":return e.stop()}},e,this)}));return e}(),onReset:function(e){this.score=null,this.content=null,this.$apply(),this.$emit("on-reset")}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onReinit",value:function(){var e=this;setTimeout(function(){try{e.id=e.order.id||0,e.cover=e.order.productList[0].cover||null}catch(e){}e.score=null,e.content=null,e.$apply()},1)}},{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onReinit();case 2:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.component);exports.default=OrderPostComment;