<template>
  <div class="main">
    <Banner/>
    <vote-name :voteType="voteType"></vote-name>
    <div class="vote-detail">
      <div class="avt">
        <div class="avt-box">
          <img :src="voteDetail.cover" alt="">
        </div>
        <div class="vote-num">{{voteDetail.vote}}票</div>
      </div>
      <div class="vote-desc-wrap">
        <div class="vote-name">{{voteDetail.username}}</div>
        <div class="vote-desc">{{voteDetail.desc}}</div>
      </div>
      <div class="apply-btn open" @click="vote(voteDetail.id)" v-if="voteDetail.status==0">投票结束</div>
      <div class="apply-btn" v-else>已投票</div>
    </div>
    <div class="qrcode-wrap">
      <div class="qrcode"></div>
      <div class="qrcode-text">微信扫一扫为TA拉票</div>
    </div>
    <GoGtic/>
  </div>
</template>
<script>
  import Banner from 'base/banner'
  import VoteName from 'base/voteName'
  import GoGtic from 'base/goGtic'
  import Cookies from 'cookies-js'
  import {jsonp, scrollTop} from '../../assets/js/utils'

  export default {
    data() {
      return {
        voteType: this.$route.query.type,
        voteId: this.$route.query.id,
        voteDetail: {},
        code: ''
      }
    },
    created() {
      this.createCode()
      this.getQuery()
    },
    mounted() {
      this.$nextTick(function () {
        scrollTop()
        require('../../assets/js/jquery.qrcode.min.js')
        this.qrcode()
      })
    },
    methods: {
      getQuery() {
        const that = this
        const query = this.$route.query
        jsonp(`http://wx.zhidx.com/zhidx/gtic/getuserlist?code=${this.code}`).then(function (res) {
          const voteList = res[query.type]
          for (let i in voteList) {
            if (voteList[i].id == query.id) {
              that.voteDetail = voteList[i]
            }
          }
        })
      },
      vote(id) {
        const that = this
//        jsonp(`http://wx.zhidx.com/zhidx_gtic_vote.php?code=${this.code}&id=${this.voteId}`).then(res => {
//          if (res.success == 'true') {
//            that.voteDetail.vote++
//            that.voteDetail.status = 1
//            this.$layer.msg(res.result);
//          } else {
//            this.$layer.msg(res.errorMsg);
//          }
//        }).catch(err => {
//          this.$layer.msg("投票失败");
//          console.log(err);
//        })
      },
      qrcode() {
//        const mbUrl = `http://${location.host}/static/gtic/detail.php?type=${this.voteType}&id=${this.voteId}`
        const mbUrl = `http://${location.host}/awards2018/detail.php?type=${this.voteType}&id=${this.voteId}`
        $(".qrcode").qrcode({
          text: mbUrl,
          width: 130,
          height: 130
        });
      },
      createCode() {
        const code = Cookies.get('code') || ('code' + String(Math.random()).replace('.', '') + String(new Date().getTime()))
        Cookies.set('code', code, {expires: 999999999})
        this.code = code
      }
    },
    components: {
      Banner,
      VoteName,
      GoGtic
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

  .vote-detail {
    margin-top: 78px;
    padding: 50px 40px 90px;
    background: #404040 url(../../assets/images/awards-detial-bg.png);
    background-size: 260px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avt {
      position: relative;
      width: 149px;
      height: 149px;
      .avt-box {
        height: 100%;
        border-radius: 50%;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        max-width: 90%;
        max-height: 90%;
      }
      .vote-num {
        width: 129px;
        height: 34px;
        font-size: 20px;
        line-height: 34px;
        color: #fff;
        background-color: #51C0F0;
        text-align: center;
        border-radius: 17px;
        position: absolute;
        bottom: -17px;
        left: 50%;
        margin-left: -64.5px;
      }
    }
  }

  .vote-desc-wrap {
    margin-top: 60px;
  }

  .vote-name {
    font-size: 24px;
    line-height: 33px;
    color: #fff;
    text-align: center;
  }

  .vote-desc {
    width: 628px;
    margin-top: 16px;
    text-align: justify;
    font-size: 12px;
    color: #B3B3B3;
  }

  .apply-btn {
    width: 100px;
    height: 32px;
    line-height: 32px;
    margin-top: 90px;
    text-align: center;
    &.open {
      background-color: #51C0F0;
      color: #000;
      cursor: pointer;
    }
  }

  .qrcode-wrap {
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .qrcode {
    width: 140px;
    height: 140px;
    padding: 5px;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .qrcode-text {
    color: #fff;
    margin-top: 14px;
  }
</style>
