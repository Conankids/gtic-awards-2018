<template>
  <div class="award-name">
    <img :src="voteNameList[voteType-1].img" alt="">
    <div class="awards-title">
      <h3>{{voteNameList[voteType - 1].name}}-投票</h3>
      <p>{{voteNameList[voteType - 1].text}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      voteType: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        voteNameList: [
          {
            img: require('../assets/images/awards1-blue.png'),
            name: '年度AI先锋',
            text: 'AI Pioneer of the year'
          },
          {
            img: require('../assets/images/awards2-blue.png'),
            name: '年度创新产品',
            text: 'Innovative Product of the year'
          },
          {
            img: require('../assets/images/awards3-blue.png'),
            name: '优秀解决方案',
            text: 'Best Solution of the year'
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  .award-name {
    width: 477px;
    display: flex;
    margin: 50px auto 0;
    align-items: center;
    img {
      height: 84px;
    }
    .awards-title {
      margin-left: 20px;
      text-align: center;
    }
    h3 {
      font-size: 40px;
      line-height: 56px;
      color: #51C0F0;
    }
    p {
      font-size: 20px;
      line-height: 28px;
      color: #FFF;
    }
  }
</style>
