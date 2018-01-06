<template>
    <div id="app" v-cloak>
        <router-view></router-view>
        <MyFooter/>
    </div>
</template>

<script>
    import '@/assets/style/base.less';
    import MyFooter from 'base/myFooter'

    export default {
        components: {
            MyFooter,
        }
    }
</script>

<style lang="less" scoped>
    [v-cloak]{
        display: none!important;
    }
</style>
