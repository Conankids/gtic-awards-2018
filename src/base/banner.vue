<template>
  <div class="home" id="home-box">
    <transition
      appear
      appear-class="t-enter-class"
      appear-active-class="t-enter-active-class">
      <div class="awards-img">
        <img src="../assets/images/cup.png" alt="">
      </div>
    </transition>
    <div class="gtic-img t-animate">
      <img src="../assets/images/gtic-logo.png" alt="">
    </div>
    <transition
      appear
      appear-class="b-enter-class"
      appear-active-class="b-enter-active-class">
      <p class="logo-txt b-animate">发现智能变革力量</p>
    </transition>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  .home {
    margin-top: 168px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    background: url("../assets/images/2018.png") no-repeat center bottom;
    background-size: 568px auto;
    .awards-img {
      width: 162px;
      height: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .gtic-img {
      width: 817px;
      height: 146px;
      margin: 20px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .logo-txt {
      font-size: 30px;
      line-height: 42px;
      color: #FFF78D;
      text-align: center;
      letter-spacing: 18.13px;
    }
  }

  /*动画*/
  .t-enter-active-class {
    transition: ease-out .5s;
  }

  .t-enter-class {
    transform: translateY(-30px);
  }

  .b-enter-active-class {
    transition: ease-out .5s;
  }

  .b-enter-class {
    transform: translateY(30px);
  }
</style>
