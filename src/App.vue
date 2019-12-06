<!--
这个页面相当于app.js和app.wxss，无需添加template
-->
<script>
  export default {
    created(){
      console.log('小程序初始化成功')
    }
  }
</script>

<style>
  /* 这是全局样式 */

  .global{
    background: red;
    color:white;
  }
</style>
