"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCatalogList=void 0;var _wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_reduxActions=require("./../../npm/redux-actions/lib/index.js"),_catalog=require("./../types/catalog.js"),_catalog2=_interopRequireDefault(_catalog),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),getCatalogList=exports.getCatalogList=(0,_reduxActions.createAction)(_catalog2.default.GET_CATALOG_LIST,function(e){return new Promise(function(e,t){_utils2.default.request(_api2.default.catalog.list).then(function(t){var i=(t.status,t.result);e(i)}).catch(function(e){var i=e.result;t(i)})})});