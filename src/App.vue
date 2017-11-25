<template>
    <div id="app" v-cloak>
        <MyHeader/>
        <MyBody/>
        <MyFooter/>
        <GoGtic/>
        <BackTop/>
    </div>
</template>

<script>
    import '@/assets/style/base.less';
    import MyHeader from './components/myHeader'
    import MyBody from './components/myBody'
    import MyFooter from './components/myFooter'
    import GoGtic from './components/goGtic'
    import BackTop from './components/backTop'

    export default {
        components: {
            MyHeader,
            MyBody,
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
