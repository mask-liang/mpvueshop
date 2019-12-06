<template>
  <div class="body">
    <!-- 首页banner -->
    <swiper class="banner_swiper" indicator-dots indicator-active-color="#fff">
      <swiper-item v-for="(item,index) in banners" :key="item">
        <img :src="item" alt />
      </swiper-item>
    </swiper>

    <!-- 商品类别 -->
    <div class="product-type">
      <div class="type-item" v-for="(item,index) in types" :key="item._id">
        <img :src="item.picname" alt />
        <span>{{item.name}}</span>
      </div>
    </div>

    <!-- 广告图 -->
    <div class="index-ad">
      <img src="/static/ad/1.jpg" alt />
    </div>
    
    <!-- 首页商品列表 -->
    <div class="index-product-list">

      <div 
        class="product-list"
        :class=" (index + 1)%3==0?'lNob':'' "
        v-for="(item,index) in products"
        :key="item._id"
        @click="goToDetail( item._id )"
      >
        <text>{{item.name}}</text>
        <img :src="item.picname" alt />
      </div>

    </div>
  </div>
</template>

<script>
import Global from "@/global.js";
export default {
  data() {
    return {
      banners: [
        "/static/banners/1.jpg",
        "/static/banners/2.jpg",
        "/static/banners/3.jpg"
      ],
      types: [
        {
          _id: "5ddcdf5a95c62f332d3cb7a5",
          name: "小米9",
          picname: "T7VS7rnWtyVcapXaWOjoAcqi.png"
        },
        {
          _id: "5ddcdf6095c62f332d3cb7a6",
          name: "小米10",
          picname: "COHq9OcX3subq4oF8Oxj-7-X.png"
        }
      ],
      products: [
        {
          _id: "5dde0fe4644b4103ed0e122a",
          name: "苹果7",
          picname: "mQJl93onXyWQDlZTXsE3YsW7.jpg",
          price: "4000",
          desc: "苹果7苹果7苹果7苹果7苹果7",
          typeid: "5ddcdf4895c62f332d3cb7a2"
        },
        {
          _id: "5dde0ff3644b4103ed0e122b",
          name: "苹果8",
          picname: "-rRK0HTHcLVHcNt6wpQCnRjj.jpg",
          price: "3000",
          desc: "苹果8苹果8苹果8苹果8苹果8苹果8",
          typeid: "5ddcdf5495c62f332d3cb7a4"
        }
      ]
    };
  },
  created() {
    // console.log(Global,'Global')
    this.getTypes();
    this.getProducts();
  },
  methods: {

    goToDetail( _id ){
      //console.log( _id )
      wx.navigateTo({
        url:'/pages/detail/main?_id=' + _id
      })
    },
    // 得到类别并修改页面视图上的数据
    getTypes() {
      wx.request({
        url: Global.api + "/wxapiGetTypes",
        success: res => {
          // console.log(res)
          res.data.result.forEach((item, index) => {
            //console.log(item,index)
            item.picname = Global.api + "/uploads/" + item.picname;
          });
          //console.log( res.data.result )
          this.types = res.data.result;
        }
      });
    },
    // 得到商品并修改页面视图上的数据
    getProducts() {
      wx.request({
        url: Global.api + "/wxapiGetProducts",
        success: res => {
          // console.log(res)
          res.data.result.forEach((item, index) => {
            //console.log(item,index)
            item.picname = Global.api + "/uploads/" + item.picname;
          });
          //console.log( res.data.result )
          this.products = res.data.result;
        }
      });
    }
  }
};
</script>

<style scoped>
.body {
  background: #ccc;
}

.banner_swiper {
  height: 304rpx;
}
.banner_swiper image {
  height: 100%;
  width: 100%;
}

.product-type {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  background: #fff;
}
.product-type image {
  width: 80rpx;
  height: 80rpx;
}

.product-type .type-item {
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
  padding: 15rpx 0;
}

.index-ad {
  margin-top: 20rpx;
}
.index-ad image {
  height: 206rpx;
  width: 750rpx;
}

.index-product-list {
  margin-top: 20rpx;
  display: flex;
  flex-wrap: wrap;
}
.product-list {
  height: 314rpx;
  width: 248rpx;
  margin-bottom: 2rpx;
  margin-right: 2rpx;
  text-align: center;
  background: #fff;
}
.index-product-list .lNob {
  margin-right: 0;
  width: 250rpx;
}
.product-list image {
  width: 174rpx;
  height: 174rpx;
}
.product-list text {
  display: block;
  padding: 20rpx 0;
}
</style>
