<template>
  <div class="vote-wrap main">
    <Banner/>
    <vote-name :voteType="voteType"></vote-name>
    <div class="awards-detail-wrap">
      <div :class="voteType==1?'':'none'">
        <dl>
          <h4 class="award-detail-title">奖项介绍</h4>
          <div class="award-detail-desc">不要轻视任何一家创业公司。今天的先锋，或许未来就是一只独角兽。</div>
        </dl>
        <dl>
          <h4 class="award-detail-title">参选标准</h4>
          <div class="award-detail-desc">-参选公司为最近5年创立的人工智能创业公司；<br>
            -参选公司2017年度在技术创新、业务增长、营收增长、融资等任一方面表现亮眼；<br>
            -获奖公司需要出席GTIC AWARDS 2018颁奖仪式。
          </div>
        </dl>
        <dl>
          <h4 class="award-detail-title">选拔流程</h4>
          <div class="award-detail-desc">-将评估参选公司在2017年的创新能力、发展速度、影响力和未来价值；<br>
            -大众投票权重占比30%，评委嘉宾评分权重占70%；<br>
            -最终评选出10家获奖公司。
          </div>
        </dl>
      </div>
      <div :class="voteType==2?'':'none'">
        <dl>
          <h4 class="award-detail-title">奖项介绍</h4>
          <div class="award-detail-desc">唯有创新，才具有长久的生命力。打破常规，敢于创新，当成为本能，砥砺前行。</div>
        </dl>
        <dl>
          <h4 class="award-detail-title">参选标准</h4>
          <div class="award-detail-desc">-参选产品必须是2017年发布、上市或有重大更新；<br>
            -参选产品必须是服务于最终消费者；
          </div>
        </dl>
        <dl>
          <h4 class="award-detail-title">选拔流程</h4>
          <div class="award-detail-desc">-将评估参选产品的创新性、行业影响力；<br>
            -大众投票权重占比30%，评委嘉宾评分权重占70%；<br>
            -最终评选出10个获奖产品。
          </div>
        </dl>
      </div>
      <div :class="voteType==3?'':'none'">
        <dl>
          <h4 class="award-detail-title">奖项介绍</h4>
          <div class="award-detail-desc">把客户需求落地，创造客户认可的价值，是他们一直在追求的目标。</div>
        </dl>
        <dl>
          <h4 class="award-detail-title">参选标准</h4>
          <div class="award-detail-desc">-参选方为最近3年发布或上市的行业解决方案、企业级服务或产品；<br>
            -参选方的服务对象为企业，而非终端消费者；<br>
            -参选方2017年度在客户价值、创新性、增长速度等任一方面表现亮眼。
          </div>
        </dl>
        <dl>
          <h4 class="award-detail-title">选拔流程</h4>
          <div class="award-detail-desc">-将评估参选方的创新性、客户价值、成长性、影响力；<br>
            -大众投票权重占比30%，评委嘉宾评分权重占70%；<br>
            -最终评选出5个获奖者。
          </div>
        </dl>
      </div>
      <div class="left-line"></div>
      <div class="right-line"></div>
    </div>
    <div class="vote-list-wrap">
      <ul class="vote-list">
        <li v-for="(item,index) in voteList" @click="goDetail(item.id)">
          <div class="item-img">
            <img :src="item.cover" alt="">
          </div>
          <div class="item-detail">
            <div class="item-title">{{item.username}}</div>
            <div class="item-desc">{{item.desc}}</div>
            <div class="item-option">
              <div class="vote-num">{{item.vote}} 票</div>
              <div class="vote-btn" @click.stop="vote($event,item.id)" :data-index="index" v-if="item.status==0">投票
              </div>
              <div v-else>已投票</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="part">
      <div class="part-title">
        <div class="part-title-img">
          <img src="../../assets/images/Other Awards.png" alt="">
        </div>
        <p>/ 其他奖项 /</p>
      </div>
      <div class="awards-list-wrap">
        <ul class="awards-list">
          <li :class="voteType==1?'none':''">
            <div class="shadow">
              <div class="awards-img">
                <img src="../../assets/images/awards2.png" alt="">
              </div>
              <div class="awards-name">
                <h3>年度AI先锋</h3>
                <p>AI Pioneer</p>
              </div>
            </div>
            <div class="awards-detail">
              <p>“不要轻视任何一家创业公司。今天的先锋，或许未来就是一只独角兽。”</p>
              <p><br>参选条件</p>
              <p>-参选公司为最近5年创立的人工智能创业公司；</p>
              <p>-参选公司2017年度在技术创新、业务增长、营收增长、融资等任一方面表现亮眼；</p>
              <p>-获奖公司需要出席GTIC AWARDS 2018颁奖仪式。</p>
              <p><br>评选标准</p>
              <p>-将评估参选公司在2017年的创新能力、发展速度、影响力和未来价值；</p>
              <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
              <p>-最终评选出10家获奖公司。</p>
            </div>
            <a class="icon-add" href="javascript:;"><img src="../../assets/images/icon-add.png" alt=""></a>
            <a class="apply-btn" :data-id="1" href="javascript:;" @click="selectVote($event)">投票</a>
          </li>
          <li :class="voteType==2?'none':''">
            <div class="shadow">
              <div class="awards-img">
                <img src="../../assets/images/awards3.png" alt="">
              </div>
              <div class="awards-name">
                <h3>年度创新产品</h3>
                <p>Innovative Product</p>
              </div>
            </div>
            <div class="awards-detail">
              <p>“唯有创新，才具有长久的生命力。打破常规，敢于创新，当成为本能，砥砺前行。”</p>
              <p><br>参选条件</p>
              <p>-参选产品必须是2017年发布、上市或有重大更新；</p>
              <p>-参选产品必须是服务于最终消费者；</p>
              <p><br>评选标准</p>
              <p>-将评估参选产品的创新性、行业影响力；</p>
              <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
              <p>-最终评选出10个获奖产品。</p>
            </div>
            <a class="icon-add" href="javascript:;"><img src="../../assets/images/icon-add.png" alt=""></a>
            <a class="apply-btn" :data-id="2" href="javascript:;" @click="selectVote($event)">投票</a>
          </li>
          <li :class="voteType==3?'none':''">
            <div class="shadow">
              <div class="awards-img">
                <img src="../../assets/images/awards4.png" alt="">
              </div>
              <div class="awards-name">
                <h3>优秀解决方案</h3>
                <p>Best Solution</p>
              </div>
            </div>
            <div class="awards-detail">
              <p>“把客户需求落地，创造客户认可的价值，是他们一直在追求的目标。”</p>
              <p><br>参选条件</p>
              <p>-参选方为最近3年发布或上市的行业解决方案、企业级服务或产品；</p>
              <p>-参选方的服务对象为企业，而非终端消费者；</p>
              <p>-参选方2017年度在客户价值、创新性、增长速度等任一方面表现亮眼。</p>
              <p><br>评选标准</p>
              <p>-将评估参选方的创新性、客户价值、成长性、影响力；</p>
              <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
              <p>-最终评选出5个获奖者。</p>
            </div>
            <a class="icon-add" href="javascript:;"><img src="../../assets/images/icon-add.png" alt=""></a>
            <a class="apply-btn" :data-id="3" href="javascript:;" @click="selectVote($event)">投票</a>
          </li>
        </ul>
      </div>
    </div>
    <GoGtic/>
  </div>
</template>
<script>
  import bus from '../../assets/js/bus'
  import {getData, jsonp, scrollTop} from '../../assets/js/utils'
  import Banner from 'base/banner'
  import VoteName from 'base/voteName'
  import GoGtic from 'base/goGtic'

  export default {
    data: function () {
      return {
        voteType: '',
        voteList: ''
      }
    },
    created() {
      this.getType()
      this._setVoteType()
    },
    mounted() {
      this.$nextTick(function () {
        scrollTop()
      })
    },
    methods: {
      goDetail(id) {
        this.$router.push({
          path: `/detail`,
          query: {type: this.voteType, id: id}
        })
      },
      selectVote(e) {
        let voteId = getData(e.target, 'id')
        this.$router.push({
          path: `/vote/${voteId}`
        })
        location.reload()
      },
      getType() {
        this.voteType = this.$route.params.id
      },
      _setVoteType() {
        const voteType = this.voteType + ''
        let that = this
        jsonp('http://wx.zhidx.com/zhidx/gtic/getuserlist').then(function (res) {
          that.voteList = res[voteType]
        })
      },
      vote(e, id) {
        const that = this
        jsonp('http://wx.zhidx.com/zhidx_gtic_vote.php?id=' + id).then(res => {
          if (res.success == 'true') {
            const idx = getData(e.target, 'index')
            that.voteList[idx].vote++
            that.voteList[idx].status = 1
            this.$layer.msg(res.result);
          } else {
            this.$layer.msg(res.errorMsg);
          }
        }).catch(err => {
          this.$layer.msg("投票失败");
          console.log(err);
        })
      }
    },
    watch: {
      voteList(newVal) {
        scrollTop()
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
  .awards-detail-wrap {
    position: relative;
    box-sizing: border-box;
    width: 554px;
    border: 3px solid #4F4F4F;
    margin: 94px auto 0;
    padding: 0 60px 29px;
    font-size: 14px;
    line-height: 20px;
    border-top: none;
    text-align: center;
    padding-top: 0.1px;
    .left-line, .right-line {
      width: 16px;
      height: 3px;
      background-color: #4F4F4F;
      position: absolute;
      top: 0;
    }
    .left-line {
      left: 0;
    }
    .right-line {
      right: 0;
    }
    dl {
      &:first-of-type {
        margin-top: -35px;
      }
    }
    .award-detail-title {
      font-size: 20px;
      line-height: 28px;
      color: #fff;
      margin-top: 24px;
    }
    .award-detail-desc {
      margin-top: 8px;
      text-align: left;
      a {
        color: #51C0F0;
      }
    }
  }

  .vote-list-wrap {
    margin-top: 78px;
    padding: 90px 40px;
    background: #404040 url(../../assets/images/awards-detial-bg.png);
    background-size: 260px;
    border-radius: 4px;
    &:after {
      display: table;
      content: '';
      clear: both;
    }
    .vote-list {
      width: 110%;
    }
    li {
      width: 460px;
      height: 103px;
      overflow: hidden;
      float: left;
      display: flex;
      align-items: center;
      margin-right: 75px;
      margin-bottom: 30px;
      cursor: pointer;
    }
    .item-img {
      img {
        width: 103px;
        max-height: 103px;
      }
    }
    .item-detail {
      flex: 1;
      margin-left: 23px;
    }
    .item-title {
      font-size: 16px;
      color: #fff;
      line-height: 22px;
      overflow: hidden;
    }
    .item-desc {
      margin-top: 6px;
      font-size: 12px;
      line-height: 17px;
      height: 34px;
      color: #838383;
      overflow: hidden;
    }
    .item-option {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .vote-num {
      font-size: 18px;
      color: #51C0F0;
    }
    .vote-btn {
      width: 66px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      background-color: #51C0F0;
      color: #000;
      cursor: pointer;
    }
  }

  .part {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    .part-title {
      margin-top: 32px;
      text-align: center;
      .part-title-img {
        height: 58px;
        img {
          height: 100%;
        }
      }
      p {
        font-size: 30px;
        line-height: 42px;
        color: #fff;
        margin-top: 20px;
        text-align: center;
      }
    }
  }

  .awards-list-wrap {
    margin-top: 58px;
    .awards-list {
      width: 103%;
      li {
        width: 520px;
        height: 330px;
        margin: 0 5px 5px 0;
        position: relative;
        overflow: hidden;
        float: left;
        &:hover {
          .shadow, .closed {
            display: none;
          }
          .awards-detail{
            display: block;
          }
        }
      }
    }

    .shadow {
      width: 100%;
      height: 100%;
      background-color: #38B0E4;
      display: flex;
      flex-direction: column;
      align-items: center;
      .awards-img {
        height: 118px;
        margin-top: 59px;
        img {
          height: 100%;
        }
      }
      .awards-name {
        margin-top: 16px;
        color: #000;
        text-align: center;
        h3 {
          font-size: 24px;
          line-height: 33px;
        }
        p {
          font-size: 12px;
          line-height: 17px;
        }
      }
    }
    .awards-detail {
      display: none;
      width: 100%;
      height: 100%;
      background: url("../../assets/images/awards-detial-bg.png") no-repeat center center;
      background-size: cover;
      padding: 33px 42px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 17px;
    }
    .icon-add {
      display: block;
      width: 66px;
      height: 66px;
      position: absolute;
      top: -1px;
      right: -1px;
      img {
        width: 100%;
      }
    }
    .apply-btn {
      width: 100px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background-color: #000;
      color: #fff;
      position: absolute;
      top: 278px;
      left: 210px;
      cursor: pointer;
    }
  }


</style>
