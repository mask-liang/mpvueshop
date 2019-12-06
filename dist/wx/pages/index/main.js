require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(20);

// 引入vue核心库


//引入App组件

//告诉程序App.vue不属于页面级应用，而是属于应用级的组件

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
//创建Vue实例

app.$mount();
//初始化|挂载页面

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b277275_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b277275"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b277275_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b277275", Component.options)
  } else {
    hotAPI.reload("data-v-6b277275", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 22:
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
      banners: ["/static/banners/1.jpg", "/static/banners/2.jpg", "/static/banners/3.jpg"],
      types: [{
        _id: "5ddcdf5a95c62f332d3cb7a5",
        name: "小米9",
        picname: "T7VS7rnWtyVcapXaWOjoAcqi.png"
      }, {
        _id: "5ddcdf6095c62f332d3cb7a6",
        name: "小米10",
        picname: "COHq9OcX3subq4oF8Oxj-7-X.png"
      }],
      products: [{
        _id: "5dde0fe4644b4103ed0e122a",
        name: "苹果7",
        picname: "mQJl93onXyWQDlZTXsE3YsW7.jpg",
        price: "4000",
        desc: "苹果7苹果7苹果7苹果7苹果7",
        typeid: "5ddcdf4895c62f332d3cb7a2"
      }, {
        _id: "5dde0ff3644b4103ed0e122b",
        name: "苹果8",
        picname: "-rRK0HTHcLVHcNt6wpQCnRjj.jpg",
        price: "3000",
        desc: "苹果8苹果8苹果8苹果8苹果8苹果8",
        typeid: "5ddcdf5495c62f332d3cb7a4"
      }]
    };
  },
  created: function created() {
    // console.log(Global,'Global')
    this.getTypes();
    this.getProducts();
  },

  methods: {
    goToDetail: function goToDetail(_id) {
      //console.log( _id )
      wx.navigateTo({
        url: '/pages/detail/main?_id=' + _id
      });
    },

    // 得到类别并修改页面视图上的数据
    getTypes: function getTypes() {
      var _this = this;

      wx.request({
        url: __WEBPACK_IMPORTED_MODULE_0__global_js__["a" /* default */].api + "/wxapiGetTypes",
        success: function success(res) {
          // console.log(res)
          res.data.result.forEach(function (item, index) {
            //console.log(item,index)
            item.picname = __WEBPACK_IMPORTED_MODULE_0__global_js__["a" /* default */].api + "/uploads/" + item.picname;
          });
          //console.log( res.data.result )
          _this.types = res.data.result;
        }
      });
    },

    // 得到商品并修改页面视图上的数据
    getProducts: function getProducts() {
      var _this2 = this;

      wx.request({
        url: __WEBPACK_IMPORTED_MODULE_0__global_js__["a" /* default */].api + "/wxapiGetProducts",
        success: function success(res) {
          // console.log(res)
          res.data.result.forEach(function (item, index) {
            //console.log(item,index)
            item.picname = __WEBPACK_IMPORTED_MODULE_0__global_js__["a" /* default */].api + "/uploads/" + item.picname;
          });
          //console.log( res.data.result )
          _this2.products = res.data.result;
        }
      });
    }
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "body"
  }, [_c('swiper', {
    staticClass: "banner_swiper",
    attrs: {
      "indicator-dots": "",
      "indicator-active-color": "#fff"
    }
  }, _vm._l((_vm.banners), function(item, index) {
    return _c('swiper-item', {
      key: item,
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('img', {
      attrs: {
        "src": item,
        "alt": ""
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "product-type"
  }, _vm._l((_vm.types), function(item, index) {
    return _c('div', {
      key: item._id,
      staticClass: "type-item"
    }, [_c('img', {
      attrs: {
        "src": item.picname,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.name))])])
  })), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "index-product-list"
  }, _vm._l((_vm.products), function(item, index) {
    return _c('div', {
      key: item._id,
      staticClass: "product-list",
      class: (index + 1) % 3 == 0 ? 'lNob' : '',
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToDetail(item._id)
        }
      }
    }, [_c('text', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('img', {
      attrs: {
        "src": item.picname,
        "alt": ""
      }
    })])
  }))], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-ad"
  }, [_c('img', {
    attrs: {
      "src": "/static/ad/1.jpg",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b277275", esExports)
  }
}

/***/ })

},[19]);