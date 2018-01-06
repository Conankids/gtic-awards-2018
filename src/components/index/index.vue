<template>
  <div>
    <MyHeader/>
    <MyBody/>
  </div>
</template>

<script>
  import MyHeader from './myHeader'
  import MyBody from './myBody'
  import {scrollTop} from '../../assets/js/utils'

  export default {
    mounted() {
      this.$nextTick(function () {
        scrollTop()
      })
    },
    components: {
      MyHeader,
      MyBody
    }
  }
</script>

<style lang="less" scoped>

</style>
