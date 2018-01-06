<template>
    <div id="app" v-cloak>
        <router-view></router-view>
        <MyFooter/>
        <GoGtic/>
        <BackTop/>
    </div>
</template>

<script>
    import '@/assets/style/base.less';
    import MyFooter from 'base/myFooter'
    import GoGtic from 'base/goGtic'
    import BackTop from 'base/backTop'

    export default {
        components: {
            MyFooter,
            GoGtic,
            BackTop
        }
    }
</script>

<style lang="less" scoped>
    [v-cloak]{
        display: none!important;
    }
</style>
