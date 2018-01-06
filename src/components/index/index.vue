<template>
  <div>
    <MyHeader/>
    <MyBody/>
    <BackTop/>
  </div>
</template>

<script>
  import MyHeader from './myHeader'
  import MyBody from './myBody'
  import BackTop from 'base/backTop'
  import {scrollTop} from '../../assets/js/utils'

  export default {
    mounted() {
      this.$nextTick(function () {
        scrollTop()
      })
    },
    components: {
      MyHeader,
      MyBody,
      BackTop
    }
  }
</script>

<style lang="less" >

</style>
