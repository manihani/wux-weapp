"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames2=_interopRequireDefault(require("../helpers/classNames")),_styleToCssString=_interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,_baseComponent.default)({properties:{prefixCls:{type:String,value:"wux-card"},bordered:{type:Boolean,value:!0},full:{type:Boolean,value:!1},title:{type:String,value:""},thumb:{type:String,value:""},thumbStyle:{type:[String,Object],value:"",observer:function(e){this.setData({extStyle:(0,_styleToCssString.default)(e)})}},extra:{type:String,value:""}},data:{extStyle:""},computed:{classes:["prefixCls, bordered, full",function(e,t,r){var a;return{wrap:(0,_classNames2.default)(e,(_defineProperty(a={},"".concat(e,"--bordered"),t),_defineProperty(a,"".concat(e,"--full"),r),a)),hd:"".concat(e,"__hd"),content:"".concat(e,"__content"),thumb:"".concat(e,"__thumb"),extra:"".concat(e,"__extra"),bd:"".concat(e,"__bd"),ft:"".concat(e,"__ft")}}]}});