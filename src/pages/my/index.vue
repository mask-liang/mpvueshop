<template>
  <div>
    <button
      open-type="getUserInfo"
      @getuserinfo="getUserInfo($event)"
    >登录</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    created(){

    },
    methods:{
      getUserInfo(e){
        // console.log(e,'aaaa')
        wx.switchTab({
          url:'/pages/cart/main'
        })
      }
    }
  }
</script>

<style>

</style>
