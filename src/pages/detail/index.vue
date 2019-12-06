<template>
  <div class="body">
    <div class="thumb-img">
      <img :src="productDetail.picname" alt="">
    </div>
    <div class="product-detail">
      <div class="product-title">{{productDetail.name}} <span>价格：{{productDetail.price}}</span></div>
      <div class="product-info">{{productDetail.desc}}</div>
    </div>


    <div class="product-shopping">
      <div class="shopping-store">
        <div class="ico-store ico">
          <img src="/static/detail/ico-store.jpg" alt="">
          <text>店铺</text>
        </div>
        <div
          class="ico-cart ico"
        >
          <img src="/static/detail/ico-shopping-cart.jpg" alt="">
          <text
            @click="goToCart"
          >购物车</text>
        </div>
      </div>
      <div class="shopping-buy">
        立即购买
      </div>
      <div 
        class="shopping-add-cart" 
        @click="addProductToCartById( productDetail._id )"
      >
        加入购物车
      </div>
    </div>

  </div>
</template>

<script>

import Global from '@/global.js'
  export default {
    data(){
      return {
          productDetail: {}
      }
    },
    onLoad(options){
      //console.log( this )
       let { _id } = this.$root.$mp.query
        this.getDetailById( _id )
    },
    
    methods:{

      goToCart(){
        wx.switchTab({
          url:'/pages/cart/main'
        })
      },
      addProductToCartById( _id ){

        /*
          根据ID从数据缓存中的购物车列表的数据。查找是否有此商品，如果找到则返回商品的索引，如果没有找到则返回-1
          find/findIndex
          假设在缓存中存储购物车列表的属性名为cartList，并且数据结构为Array数组
          wx.getStorageSync('cartList')
        */

        //console.log( _id ,this.productDetail )
       // console.log( !wx.getStorageSync('cartList'),'cartList' )
        let cartList = !wx.getStorageSync('cartList') ? [] : wx.getStorageSync('cartList')
        //console.log( cartList,'cartList' )

        let index = cartList.findIndex((item)=>{
          return item._id == this.productDetail._id
        })

        //console.log( index )

        if( index == -1 ){
          this.productDetail.nums = 1
          this.productDetail.isChecked = true
          cartList.unshift( this.productDetail )
        }else{
          cartList[index].nums++
        }
        //console.log( cartList,'cartlist' )
        //更新缓存中的购物车列表信息
        wx.setStorageSync( 'cartList',cartList )
      },

       getDetailById( _id ){
        wx.request({
          url:Global.api + '/wxapiGetDetailById',
          data:{ _id },
          success:(res)=>{
            //console.log(res)
            res.data.result.picname = Global.api + '/uploads/' + res.data.result.picname
            //console.log( res.data.result )
            this.productDetail = res.data.result
          }
        })
      },
    }
  }
</script>

<style>
  .thumb-img image{
    width: 750rpx;
    height: 750rpx;
    display: block;
  }
  .thumb-img {
    border-bottom:10rpx solid #f00;
  }
  .product-detail{
    padding: 20rpx 20rpx 120rpx 20rpx;
  }
  .product-title{
    line-height: 50rpx;
  }
  .product-info{
    line-height: 40rpx;
    color:#8d898a;
  }
  .product-shopping{
    position: fixed;
    width: 750rpx;
    height: 100rpx;
    background: #fff;
    bottom: 0;
    left: 0;
    border-top: 2rpx solid #ddd;
    display: flex;
  }


  .shopping-buy,.shopping-add-cart{
    width: 218rpx;
    color:#fff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shopping-buy{
    background: #ffbe24;
  }
  .shopping-add-cart{
    background: #f3554a;
  }
  .shopping-store{
    width: 314rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shopping-store image{
    width: 46rpx;
    height: 46rpx;
  }
  .shopping-store .ico{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
