"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var isProdMode=!0,baseUrl=isProdMode?"https://api.keyixing.com/":"https://keyixingapi.local.co.bendan.name/";exports.default={payment:baseUrl+"pay",homepage:baseUrl+"homepage",user:{login:baseUrl+"user/login"},catalog:{list:baseUrl+"product/catalog"},product:{list:baseUrl+"product/list",search:baseUrl+"product/search",info:baseUrl+"product/info",year:baseUrl+"product/year",sku:baseUrl+"product/sku",comments:baseUrl+"product/comments"},topics:{free:baseUrl+"topics/free",custom:baseUrl+"topics/custom"},order:{list:baseUrl+"order/list",info:baseUrl+"order/info",create:baseUrl+"order/create",cancel:baseUrl+"order/cancel",confirm:baseUrl+"order/confirm",comment:baseUrl+"order/comment"},consignee:{default:baseUrl+"consignee/default",delete:baseUrl+"consignee/delete",info:baseUrl+"consignee/info",list:baseUrl+"consignee/list"},freightTemplate:{default:baseUrl+"freightTemplate/default"},help:{faq:baseUrl+"help/faq"}};