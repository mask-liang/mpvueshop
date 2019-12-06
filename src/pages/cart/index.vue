<template>
  <div class="body">
    <div v-if="cartList.length==0">空空如也~~</div>
    <div v-else>
      <div class="cart-list-item" v-for="(item,index) in cartList" :key="item._id">
        <span class="btn-del" @click="delteProductByIndex(index)">×</span>
        <div class="checked">
          <switch
            type="checkbox"
            :checked="item.isChecked"
            :data-index="index"
            @change="productSwitchChange($event)"
          ></switch>
        </div>
        <div class="img">
          <img :src="item.picname" alt />
        </div>
        <div class="cart-right">
          <div class="title">{{item.name}}</div>
          <div class="nums">
            <div class="price">￥{{item.price}}</div>
            <div class="controls">
              <span class="btn" @click="subByIndex(index)">-</span>
              <span class="num">{{item.nums}}</span>
              <span class="btn" @click="addByIndex(index)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="payment-bar">
      <div class="l">
        <label>
          <switch type="checkbox" :checked="isAllChecked" @change="switchProductChecked($event)"></switch>全选
        </label>
        <text>合计：￥{{ totalPrice }}</text>
      </div>
      <text 
        class="r"
        @click="saveCartList"
      >结算({{ totalNum }})</text>
    </div>
  </div>
</template>

<script>

import Global from '@/global.js'
export default {
  data() {
    return {
      //购物车列表初始化数据
      cartList: [
        {
          _id: "5dde0fe4644b4103ed0e122a",
          name: "苹果7",
          picname: "mQJl93onXyWQDlZTXsE3YsW7.jpg",
          price: "4000",
          desc: "苹果7苹果7苹果7苹果7苹果7",
          typeid: "5ddcdf4895c62f332d3cb7a2",
          nums: 2,
          isChecked: false //true 选中，false 未选中
        }
      ],
      isAllChecked: false, //全选属性
      totalNum: 5, //商品总数量
      totalPrice: 527 //商品总价格
    };
  },
  // 购物车页面的来回切换想要做 一些操作，请在onShow或onHide生命周期函数执行
  onShow(){
      let cartList = !wx.getStorageSync('cartList') ? [] : wx.getStorageSync('cartList')
      //console.log( cartList,'购物车页面' )
      this.cartList = cartList

      this.init()
  },
  created() {
   
  },

  methods: {

    //初始化的一些方法
    init(){
        this.isSetAllChecked();
        this.computedProductTotalPrice();
        this.computedProductTotalNum();
    },

    saveCartList(){
        wx.getSetting({
          success:(res)=>{
            console.log(res)
              if( !res.authSetting['scope.userInfo'] ){
                  //console.log('去授权')
                  wx.showModal({
                    title: '提示信息',
                    content: '未登录，请登录再进行更好的体验',
                    success(res){
                      if(res.confirm){
                          wx.switchTab({
                            url: '/pages/my/main',
                          })
                      }
                    }
                  })
              }else{
                //console.log('可以获取用户信息')
                wx.getUserInfo({
                  success:(res)=>{
                    //console.log(res,'getUserInfo.wxml')
                    let _openid = res.encryptedData
                    let cartList = this.cartList
                    let result = { _openid,cartList }
                    //console.log( result )
                    wx.request({
                      url:Global.api + '/wxapiSetSaveCart',
                      method:'post',
                      data:result,
                      success:(res)=>{
                          console.log(res,'请求成功')
                      }
                    })
                  }
                })
              }
          }
        })
    },
    //数量减1
    subByIndex(index) {
      this.cartList[index].nums -= 1;
      if (this.cartList[index].nums <= 0) {
        this.cartList[index].nums = 1;
      }
     this.init()
    },

    //数量加1
    addByIndex(index) {
      // console.log(1234)
      this.cartList[index].nums += 1;
      
      
      this.init()
    },
    //删除购物车的某个商品
    delteProductByIndex(index) {
      //console.log(index)
      this.cartList.splice(index, 1);

      this.init()
    },
    //为单个商品的选中按钮绑定change事件，修改数据中对应的isChecked值，然后重新遍历cartList判断全选状态,同时需要把对应点击商品的数组索引传递给事件函数
    productSwitchChange(e) {
      //console.log('productSwitchChange',e)
      let checked = e.target.value;
      let index = e.target.dataset.index;
      this.cartList[index].isChecked = checked;

      this.init()
    },
    //点击全选按钮时设置每个商品的选中与否
    switchProductChecked(e) {
      //console.log(e)
      let checked = e.target.value;
      this.cartList.forEach(item => {
        item.isChecked = checked;
      });
      this.isAllChecked = checked;
      //console.log( this.isAllChecked )
    },
    //数据初始化时设置全选状态
    isSetAllChecked() {
      let isAllChecked = this.cartList.every(item => {
        return item.isChecked; //如果每一项商品的选中状态都为true返回true，此时全选按钮选中，否则不选中
      });
      //console.log( isAllChecked )
      this.isAllChecked = isAllChecked;
    },
    //计算总价格
    computedProductTotalPrice() {
      // 只要调取此方法，则先把总数量设置为0
      // 因为下面是循环每一项商品的状态重新计算总数量
      let totalPrice = 0;
      this.cartList.forEach(item => {
        item.isChecked ? (totalPrice += item.nums * item.price) : "";
      });
      //console.log(totalPrice,'totalPrice')
      this.totalPrice = totalPrice;
    },
    //计算总数量
    computedProductTotalNum() {
      // 只要调取此方法，则先把总数量设置为0
      // 因为下面是循环每一项商品的状态重新计算总数量
      let totalNum = 0;
      this.cartList.forEach(item => {
        item.isChecked ? (totalNum += item.nums) : "";
      });
      //console.log(nums,'nums')
      this.totalNum = totalNum;
    }
  }
};
</script>

<style>
.body {
  background: #f3f3f3;
  padding: 20rpx 20rpx 100rpx 20rpx;
}
.btn-del {
  position: absolute;
  right: 20rpx;
  top: 20rpx;
  color: red;
  font-size: 50rpx;
}
.cart-list-item {
  position: relative;
  display: flex;
  background: #fff;
  -webkit-border-radius: 30rpx;
  -moz-border-radius: 30rpx;
  border-radius: 30rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}

.cart-list-item .checked {
  width: 60rpx;
  display: flex;
  align-items: center;
}

.cart-list-item .img {
  margin-right: 10rpx;
}
.cart-list-item .img image {
  width: 175rpx;
  height: 175rpx;
}

.cart-list-item .cart-right {
  width: 405rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart-right .title {
  font-size: 30rpx;
}
.cart-right .nums {
  display: flex;
  justify-content: space-between;
}
.cart-right .nums .price {
  color: #f00;
}
.controls .btn {
  display: inline-block;
  width: 45rpx;
  height: 45rpx;
  background: #f4f4f4;
  line-height: 45rpx;
  text-align: center;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
.controls .num {
  margin: 0 20rpx;
}
.payment-bar {
  position: fixed;
  background: #fff;
  left: 0;
  bottom: 0;
  width: 710rpx;
  height: 106rpx;
  padding: 0 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payment-bar .l label {
  margin-right: 25rpx;
}
.payment-bar .r {
  background: #f53e1f;
  color: #fff;
  height: 85rpx;
  line-height: 85rpx;
  padding: 0 38rpx;
  -webkit-border-radius: 50rpx;
  -moz-border-radius: 50rpx;
  border-radius: 50rpx;
}
</style>
