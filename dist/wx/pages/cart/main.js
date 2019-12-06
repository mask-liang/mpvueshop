require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(10);

// 引入vue核心库


//引入App组件

//告诉程序App.vue不属于页面级应用，而是属于应用级的组件

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
//创建Vue实例

app.$mount();
//初始化|挂载页面

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3cf4f833_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(13);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3cf4f833_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\cart\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cf4f833", Component.options)
  } else {
    hotAPI.reload("data-v-3cf4f833", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      //购物车列表初始化数据
      cartList: [{
        _id: "5dde0fe4644b4103ed0e122a",
        name: "苹果7",
        picname: "mQJl93onXyWQDlZTXsE3YsW7.jpg",
        price: "4000",
        desc: "苹果7苹果7苹果7苹果7苹果7",
        typeid: "5ddcdf4895c62f332d3cb7a2",
        nums: 2,
        isChecked: false //true 选中，false 未选中
      }],
      isAllChecked: false, //全选属性
      totalNum: 5, //商品总数量
      totalPrice: 527 //商品总价格
    };
  },

  // 购物车页面的来回切换想要做 一些操作，请在onShow或onHide生命周期函数执行
  onShow: function onShow() {
    var cartList = !wx.getStorageSync('cartList') ? [] : wx.getStorageSync('cartList');
    //console.log( cartList,'购物车页面' )
    this.cartList = cartList;

    this.init();
  },
  created: function created() {},


  methods: {

    //初始化的一些方法
    init: function init() {
      this.isSetAllChecked();
      this.computedProductTotalPrice();
      this.computedProductTotalNum();
    },
    saveCartList: function saveCartList() {
      var _this = this;

      wx.getSetting({
        success: function success(res) {
          console.log(res);
          if (!res.authSetting['scope.userInfo']) {
            //console.log('去授权')
            wx.showModal({
              title: '提示信息',
              content: '未登录，请登录再进行更好的体验',
              success: function success(res) {
                if (res.confirm) {
                  wx.switchTab({
                    url: '/pages/my/main'
                  });
                }
              }
            });
          } else {
            //console.log('可以获取用户信息')
            wx.getUserInfo({
              success: function success(res) {
                //console.log(res,'getUserInfo.wxml')
                var _openid = res.encryptedData;
                var cartList = _this.cartList;
                var result = { _openid: _openid, cartList: cartList
                  //console.log( result )
                };wx.request({
                  url: __WEBPACK_IMPORTED_MODULE_0__global_js__["a" /* default */].api + '/wxapiSetSaveCart',
                  method: 'post',
                  data: result,
                  success: function success(res) {
                    console.log(res, '请求成功');
                  }
                });
              }
            });
          }
        }
      });
    },

    //数量减1
    subByIndex: function subByIndex(index) {
      this.cartList[index].nums -= 1;
      if (this.cartList[index].nums <= 0) {
        this.cartList[index].nums = 1;
      }
      this.init();
    },


    //数量加1
    addByIndex: function addByIndex(index) {
      // console.log(1234)
      this.cartList[index].nums += 1;

      this.init();
    },

    //删除购物车的某个商品
    delteProductByIndex: function delteProductByIndex(index) {
      //console.log(index)
      this.cartList.splice(index, 1);

      this.init();
    },

    //为单个商品的选中按钮绑定change事件，修改数据中对应的isChecked值，然后重新遍历cartList判断全选状态,同时需要把对应点击商品的数组索引传递给事件函数
    productSwitchChange: function productSwitchChange(e) {
      //console.log('productSwitchChange',e)
      var checked = e.target.value;
      var index = e.target.dataset.index;
      this.cartList[index].isChecked = checked;

      this.init();
    },

    //点击全选按钮时设置每个商品的选中与否
    switchProductChecked: function switchProductChecked(e) {
      //console.log(e)
      var checked = e.target.value;
      this.cartList.forEach(function (item) {
        item.isChecked = checked;
      });
      this.isAllChecked = checked;
      //console.log( this.isAllChecked )
    },

    //数据初始化时设置全选状态
    isSetAllChecked: function isSetAllChecked() {
      var isAllChecked = this.cartList.every(function (item) {
        return item.isChecked; //如果每一项商品的选中状态都为true返回true，此时全选按钮选中，否则不选中
      });
      //console.log( isAllChecked )
      this.isAllChecked = isAllChecked;
    },

    //计算总价格
    computedProductTotalPrice: function computedProductTotalPrice() {
      // 只要调取此方法，则先把总数量设置为0
      // 因为下面是循环每一项商品的状态重新计算总数量
      var totalPrice = 0;
      this.cartList.forEach(function (item) {
        item.isChecked ? totalPrice += item.nums * item.price : "";
      });
      //console.log(totalPrice,'totalPrice')
      this.totalPrice = totalPrice;
    },

    //计算总数量
    computedProductTotalNum: function computedProductTotalNum() {
      // 只要调取此方法，则先把总数量设置为0
      // 因为下面是循环每一项商品的状态重新计算总数量
      var totalNum = 0;
      this.cartList.forEach(function (item) {
        item.isChecked ? totalNum += item.nums : "";
      });
      //console.log(nums,'nums')
      this.totalNum = totalNum;
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "body"
  }, [(_vm.cartList.length == 0) ? _c('div', [_vm._v("空空如也~~")]) : _c('div', _vm._l((_vm.cartList), function(item, index) {
    return _c('div', {
      key: item._id,
      staticClass: "cart-list-item"
    }, [_c('span', {
      staticClass: "btn-del",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.delteProductByIndex(index)
        }
      }
    }, [_vm._v("×")]), _vm._v(" "), _c('div', {
      staticClass: "checked"
    }, [_c('switch', {
      attrs: {
        "type": "checkbox",
        "checked": item.isChecked,
        "data-index": index,
        "eventid": '1_' + index
      },
      on: {
        "change": function($event) {
          _vm.productSwitchChange($event)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.picname,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "cart-right"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "nums"
    }, [_c('div', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.price))]), _vm._v(" "), _c('div', {
      staticClass: "controls"
    }, [_c('span', {
      staticClass: "btn",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.subByIndex(index)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('span', {
      staticClass: "num"
    }, [_vm._v(_vm._s(item.nums))]), _vm._v(" "), _c('span', {
      staticClass: "btn",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.addByIndex(index)
        }
      }
    }, [_vm._v("+")])])])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "payment-bar"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('label', [_c('switch', {
    attrs: {
      "type": "checkbox",
      "checked": _vm.isAllChecked,
      "eventid": '4'
    },
    on: {
      "change": function($event) {
        _vm.switchProductChecked($event)
      }
    }
  }), _vm._v("全选\n      ")]), _vm._v(" "), _c('text', [_vm._v("合计：￥" + _vm._s(_vm.totalPrice))])], 1), _vm._v(" "), _c('text', {
    staticClass: "r",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.saveCartList
    }
  }, [_vm._v("结算(" + _vm._s(_vm.totalNum) + ")")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3cf4f833", esExports)
  }
}

/***/ })
],[9]);