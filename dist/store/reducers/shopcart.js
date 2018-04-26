"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(exports,"__esModule",{value:!0});var _handleActions,_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},_lodash=require("./../../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_reduxActions=require("./../../npm/redux-actions/lib/index.js"),_shopcart=require("./../types/shopcart.js"),_shopcart2=_interopRequireDefault(_shopcart),SHOP_BUY_LIST="SHOP_BUY_LIST",SHOP_CART_LIST="SHOP_CART_LIST",initState={shopCartData:[],shopCartList:[],shopBuyList:[],shopBuyType:1,isSelectedAll:!1,totalAmount:0,shopCartCount:0},getSelectStatus=function(t){try{return t.every(function(t){return 1==t.isSelected})}catch(t){}},getTotalAmount=function(t){try{var e=0;return t.forEach(function(t){var r=NaN!=Number(t.price)?Number(t.price):0,n=NaN!=Number(t.count)?Number(t.count):0;t.isSelected&&(e+=r*n)}),e.toFixed(2)}catch(t){}},reducers=(0,_reduxActions.handleActions)((_handleActions={},_defineProperty(_handleActions,_shopcart2.default.GET_SHOP_CART,function(t,e){var r=(e.type,e.payload),n=Array.from(new Set(_wepy2.default.getStorageSync(SHOP_CART_LIST)||[])),a=Array.from(new Set(n.filter(function(t){return t.uid==r.uid}))),o=getSelectStatus(a),u=getTotalAmount(a),i=a.length;return _extends({},t,{shopCartData:n,shopCartList:a,isSelectedAll:o,totalAmount:u,shopCartCount:i})}),_defineProperty(_handleActions,_shopcart2.default.SET_SHOP_CART,function(t,e){var r=(e.type,e.payload),n=t.shopCartData.concat();try{n=n.map(function(t){return t.uid==r.uid&&t.id==r.id&&t.sid==r.sid&&(t=r),t})}catch(t){}var a=n.filter(function(t){return t.uid==r.uid}),o=getSelectStatus(a),u=getTotalAmount(a),i=a.length;return _wepy2.default.setStorageSync(SHOP_CART_LIST,n),_extends({},t,{shopCartData:n,shopCartList:a,isSelectedAll:o,totalAmount:u,shopCartCount:i})}),_defineProperty(_handleActions,_shopcart2.default.DEL_SHOP_CART,function(t,e){var r=(e.type,e.payload),n=t.shopCartData.concat();try{var a=n.findIndex(function(t){return t.id==r.id&&t.uid==r.uid&&t.sid==r.sid});n.splice(a,1)}catch(t){}var o=n.filter(function(t){return t.uid==r.uid}),u=getSelectStatus(o),i=getTotalAmount(o),s=o.length;return _wepy2.default.setStorageSync(SHOP_CART_LIST,n),_extends({},t,{shopCartData:n,shopCartList:o,isSelectedAll:u,totalAmount:i,shopCartCount:s})}),_defineProperty(_handleActions,_shopcart2.default.ADD_SHOP_CART,function(t,e){var r=(e.type,e.payload),n=t.shopCartData.concat();try{if(r.constructor==Object){n.find(function(t){return t.id==r.id&&t.uid==r.uid&&t.sid==r.sid})?n=n.map(function(t){return t.id==r.id&&t.uid==r.uid&&t.sid==r.sid&&(t.isSelected=!0,t.count=t.stock<t.count?t.count+r.count:t.count),t}):n.push(Object.assign({},r,{isSelected:!0}))}}catch(t){}var a=n.filter(function(t){return t.uid==r.uid}),o=getSelectStatus(a),u=getTotalAmount(a),i=a.length;return _wepy2.default.setStorageSync(SHOP_CART_LIST,n),_extends({},t,{shopCartData:n,shopCartList:a,isSelectedAll:o,totalAmount:u,shopCartCount:i})}),_defineProperty(_handleActions,_shopcart2.default.CHECK_ONE_SHOP_CART,function(t,e){var r=(e.type,e.payload),n=t.shopCartData.concat();try{n=n.map(function(t){return t.uid==r.uid&&t.id==r.id&&t.sid==r.sid&&(t.isSelected=!t.isSelected),t})}catch(t){}var a=n.filter(function(t){return t.uid==r.uid}),o=getSelectStatus(a),u=getTotalAmount(a);return _wepy2.default.setStorageSync(SHOP_CART_LIST,n),_extends({},t,{shopCartData:n,shopCartList:a,isSelectedAll:o,totalAmount:u})}),_defineProperty(_handleActions,_shopcart2.default.CHECK_ALL_SHOP_CART,function(t,e){var r=(e.type,e.payload),n=t.shopCartData.concat(),a=!t.isSelectedAll;try{n=n.map(function(t){return t.uid==r.uid&&(t.isSelected=a),t})}catch(t){}var o=n.filter(function(t){return t.uid==r.uid}),u=getTotalAmount(o);return _wepy2.default.setStorageSync(SHOP_CART_LIST,n),_extends({},t,{shopCartData:n,shopCartList:o,isSelectedAll:a,totalAmount:u})}),_defineProperty(_handleActions,_shopcart2.default.SET_BUY_LIST,function(t,e){var r=(e.type,e.payload),n=t.shopBuyList.concat(),a=t.shopBuyType;if(r)return r.constructor==Object?(n=[Object.assign({},r,{isSelected:!0})],a=3==r.type?2:1):r.constructor==Array&&(n=r.map(function(t){return t.isSelected=!0,t}),a=3==n[0].type?2:1),_wepy2.default.setStorageSync(SHOP_BUY_LIST,n),_extends({},t,_defineProperty({shopBuyList:n},"shopBuyList",n));var o=t.shopCartList.concat();try{n=o.filter(function(t){return t.isSelected}),a=3==n[0].type?2:1}catch(t){}return _wepy2.default.setStorageSync(SHOP_BUY_LIST,n),_extends({},t,{shopBuyList:n,shopBuyType:a})}),_defineProperty(_handleActions,_shopcart2.default.GET_BUY_LIST,function(t,e){var r=(e.type,e.payload,_wepy2.default.getStorageSync(SHOP_BUY_LIST)||t.shopBuyList.concat()),n=getTotalAmount(r),a=3==r[0].type?2:1;return _extends({},t,{totalAmount:n,shopBuyList:r,shopBuyType:a})}),_defineProperty(_handleActions,_shopcart2.default.REMOVE_BUY_LIST,function(t,e){var r=(e.type,e.payload,t.shopCartData.concat()),n=[],a=null;try{t.shopBuyList.forEach(function(t){var e=r.findIndex(function(e){return e.id==t.id&&e.uid==t.uid&&e.sid==t.sid});console.log(e),e>-1&&(a=r[e].uid,r.splice(e,1))})}catch(t){}var o=r.filter(function(t){return t.uid==a}),u=getSelectStatus(o),i=getTotalAmount(o),s=o.length;return _wepy2.default.setStorageSync(SHOP_CART_LIST,r),_wepy2.default.setStorageSync(SHOP_BUY_LIST,n),_extends({},t,{shopCartData:r,shopCartList:o,shopBuyList:n,isSelectedAll:u,totalAmount:i,shopCartCount:s})}),_handleActions),initState);exports.default=reducers;