"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeShopBuyList=exports.getShopBuyList=exports.setShopBuyList=exports.checkAllShopCart=exports.checkOneShopCart=exports.setShopCart=exports.delShopCart=exports.addShopCart=exports.getShopCart=void 0;var _wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_reduxActions=require("./../../npm/redux-actions/lib/index.js"),_shopcart=require("./../types/shopcart.js"),_shopcart2=_interopRequireDefault(_shopcart),getShopCart=exports.getShopCart=(0,_reduxActions.createAction)(_shopcart2.default.GET_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),addShopCart=exports.addShopCart=(0,_reduxActions.createAction)(_shopcart2.default.ADD_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),delShopCart=exports.delShopCart=(0,_reduxActions.createAction)(_shopcart2.default.DEL_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),setShopCart=exports.setShopCart=(0,_reduxActions.createAction)(_shopcart2.default.SET_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),checkOneShopCart=exports.checkOneShopCart=(0,_reduxActions.createAction)(_shopcart2.default.CHECK_ONE_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),checkAllShopCart=exports.checkAllShopCart=(0,_reduxActions.createAction)(_shopcart2.default.CHECK_ALL_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),setShopBuyList=exports.setShopBuyList=(0,_reduxActions.createAction)(_shopcart2.default.SET_BUY_LIST,function(e){return new Promise(function(t,r){t(e)})}),getShopBuyList=exports.getShopBuyList=(0,_reduxActions.createAction)(_shopcart2.default.GET_BUY_LIST,function(e){return new Promise(function(t,r){t(e)})}),removeShopBuyList=exports.removeShopBuyList=(0,_reduxActions.createAction)(_shopcart2.default.REMOVE_BUY_LIST,function(e){return new Promise(function(t,r){t(e)})});