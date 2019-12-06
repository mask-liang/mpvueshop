require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(15);

// 引入vue核心库


//引入App组件

//告诉程序App.vue不属于页面级应用，而是属于应用级的组件

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
//创建Vue实例

app.$mount();
//初始化|挂载页面

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_538eee24_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(18);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(16)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_538eee24_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-538eee24", Component.options)
  } else {
    hotAPI.reload("data-v-538eee24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_js__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      productDetail: {}
    };
  },
  onLoad: function onLoad(options) {
    //console.log( this )
    var _id = this.$root.$mp.query._id;

    this.getDetailById(_id);
  },


  methods: {
    goToCart: function goToCart() {
      wx.switchTab({
        url: '/pages/cart/main'
      });
    },
    addProductToCartById: function addProductToCartById(_id) {
      var _this = this;

      /*
        根据ID从数据缓存中的购物车列表的数据。查找是否有此商品，如果找到则返回商品的索引，如果没有找到则返回-1
        find/findIndex
        假设在缓存中存储购物车列表的属性名为cartList，并且数据结构为Array数组
        wx.getStorageSync('cartList')
      */

      //console.log( _id ,this.productDetail )
      // console.log( !wx.getStorageSync('cartList'),'cartList' )
      var cartList = !wx.getStorageSync('cartList') ? [] : wx.getStorageSync('cartList');
      //console.log( cartList,'cartList' )

      var index = cartList.findIndex(function (item) {
        return item._id == _this.productDetail._id;
      });

      //console.log( index )

      if (index == -1) {
        this.productDetail.nums = 1;
        this.productDetail.isChecked = true;
        cartList.unshift(this.productDetail);
      } else {
        cartList[index].nums++;
      }
      //console.log( cartList,'cartlist' )
      //更新缓存中的购物车列表信息
      wx.setStorageSync('cartList', cartList);
    },
    getDetailById: function getDetailById(_id) {
      var _this2 = this;

      wx.request({
        url: __WEBPACK_IMPORTED_MODULE_0__global_js__["a" /* default */].api + '/wxapiGetDetailById',
        data: { _id: _id },
        success: function success(res) {
          //console.log(res)
          res.data.result.picname = __WEBPACK_IMPORTED_MODULE_0__global_js__["a" /* default */].api + '/uploads/' + res.data.result.picname;
          //console.log( res.data.result )
          _this2.productDetail = res.data.result;
        }
      });
    }
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "body"
  }, [_c('div', {
    staticClass: "thumb-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.productDetail.picname,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "product-detail"
  }, [_c('div', {
    staticClass: "product-title"
  }, [_vm._v(_vm._s(_vm.productDetail.name) + " "), _c('span', [_vm._v("价格：" + _vm._s(_vm.productDetail.price))])]), _vm._v(" "), _c('div', {
    staticClass: "product-info"
  }, [_vm._v(_vm._s(_vm.productDetail.desc))])]), _vm._v(" "), _c('div', {
    staticClass: "product-shopping"
  }, [_c('div', {
    staticClass: "shopping-store"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "ico-cart ico"
  }, [_c('img', {
    attrs: {
      "src": "/static/detail/ico-shopping-cart.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('text', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goToCart
    }
  }, [_vm._v("购物车")])])]), _vm._v(" "), _c('div', {
    staticClass: "shopping-buy"
  }, [_vm._v("\n      立即购买\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "shopping-add-cart",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.addProductToCartById(_vm.productDetail._id)
      }
    }
  }, [_vm._v("\n      加入购物车\n    ")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ico-store ico"
  }, [_c('img', {
    attrs: {
      "src": "/static/detail/ico-store.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('text', [_vm._v("店铺")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-538eee24", esExports)
  }
}

/***/ })
],[14]);