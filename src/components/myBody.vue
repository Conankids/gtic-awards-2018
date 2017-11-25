<template>
    <div class="main-body main" :class="scrollBarFixed ? 'pt70' : ''">
        <div class="home" id="home-box">
            <div class="awards-img">
                <img src="../assets/images/cup.png" alt="">
            </div>
            <div class="gtic-img">
                <img src="../assets/images/gtic-logo.png" alt="">
            </div>
            <p class="logo-txt">发现智能变革力量</p>
        </div>
        <div class="introduction part" id="introduction-box">
            <div class="part-number">01</div>
            <div class="part-title">
                <div class="part-title-img">
                    <img src="../assets/images/introduction.png" alt="">
                </div>
                <h3>GTIC AWARDS 2018</h3>
                <p>/ 大会介绍 /</p>
            </div>
            <div class="part-body">
                <div class="introduction-detail">
                    <p>
                        GTIC AWARDS 2018，由智东西联合多家顶级投资机构、核心媒体权威发起。此次年度评选聚焦智能变革力量，着眼产业升级趋势，对在2017年度有着卓越表现、快速成长、大胆创新、取得商业突破的优秀公司、产品和应用进行表彰。</p>
                    <p><br>走过2016年的技术普及元年，人工智能在2017年与实体经济开始融合，加速对各个行业赋能和变革。然而，这不只是人工智能的冲锋号角，也是国内传统产业升级的大契机。那么，在这一轮智能产业浪潮中，谁将是本年度最具变革性的力量？谁又是过去一年跑的最快的AI先锋？谁的产品在突破常规，引领创新？谁的应用又在很好地解决客户需求？
                    </p>
                    <p><br>2018年3月9日，GTIC 2018全球智能产业峰会将在上海召开。届时，我们将在峰会的颁奖仪式上正式公布GTIC AWARDS 2018的获奖名单，并向获奖企业颁奖。<br></p>
                </div>
                <div class="left-line"></div>
                <div class="right-line"></div>
            </div>
        </div>
        <div class="time-line part" id="time-line-box">
            <div class="part-number">02</div>
            <div class="part-title">
                <div class="part-title-img">
                    <img src="../assets/images/Time line.png" alt="">
                </div>
                <p>/ 评选流程 /</p>
            </div>
            <div class="part-body">
                <div class="time-line-list">
                    <dl class="on">
                        <dt class="title">报名评选</dt>
                        <dd class="time">2017.11.30-2017.12.31</dd>
                    </dl>
                    <dl>
                        <dt class="title">资料审核</dt>
                        <dd class="time">2018.1.1-2018.1.3</dd>
                    </dl>
                    <dl>
                        <dt class="title">大众投票</dt>
                        <dd class="time">2018.1.4-2018.1.19</dd>
                    </dl>
                    <dl>
                        <dt class="title">专家评审</dt>
                        <dd class="time">2018.1.20-2017.1.27</dd>
                    </dl>
                    <dl>
                        <dt class="title">颁奖仪式</dt>
                        <dd class="time">2018.8.9</dd>
                    </dl>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        <div class="awards part" id="awards-box">
            <div class="part-number">03</div>
            <div class="part-title">
                <div class="part-title-img">
                    <img src="../assets/images/awards.png" alt="">
                </div>
                <p>/ 奖项设置 /</p>
            </div>
            <div class="part-body">
                <ul class="awards-list">
                    <li>
                        <div class="shadow">
                            <div class="awards-img">
                                <img src="../assets/images/awards1.png" alt="">
                            </div>
                            <div class="awards-name">
                                <h3>年度变革力量</h3>
                                <p>Reform of the Year</p>
                            </div>
                        </div>
                        <div class="awards-detail">
                            <p>“GTIC AWARDS年度大奖，为在2017年度最具变革力、最具影响力的公司授予最高荣誉。”</p>
                            <p><br>参选条件</p>
                            <p>-系企业奖项，参选公司为独角兽企业、上市公司、大型公司（未上市）；</p>
                            <p>-获奖公司需要出席GTIC AWARDS 2018颁奖仪式。</p>
                            <p><br>评选标准</p>
                            <p>-将综合考察参选公司在技术、产品、业务、商业上的革新性、行业影响力和未来价值；</p>
                            <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
                            <p>-最终评选出1家获奖公司。</p>
                        </div>
                        <a class="icon-add" href="javascript:;"><img src="../assets/images/icon-add.png" alt=""></a>
                        <a class="apply-btn" href="javascript:;" target="_blank">报名</a>
                    </li>
                    <li>
                        <div class="shadow">
                            <div class="awards-img">
                                <img src="../assets/images/awards2.png" alt="">
                            </div>
                            <div class="awards-name">
                                <h3>年度变革力量</h3>
                                <p>Reform of the Year</p>
                            </div>
                        </div>
                        <div class="awards-detail">
                            <p>“GTIC AWARDS年度大奖，为在2017年度最具变革力、最具影响力的公司授予最高荣誉。”</p>
                            <p><br>参选条件</p>
                            <p>-系企业奖项，参选公司为独角兽企业、上市公司、大型公司（未上市）；</p>
                            <p>-获奖公司需要出席GTIC AWARDS 2018颁奖仪式。</p>
                            <p><br>评选标准</p>
                            <p>-将综合考察参选公司在技术、产品、业务、商业上的革新性、行业影响力和未来价值；</p>
                            <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
                            <p>-最终评选出1家获奖公司。</p>
                        </div>
                        <a class="icon-add" href="javascript:;"><img src="../assets/images/icon-add.png" alt=""></a>
                        <a class="apply-btn" href="javascript:;" target="_blank">报名</a>
                    </li>
                    <li>
                        <div class="shadow">
                            <div class="awards-img">
                                <img src="../assets/images/awards3.png" alt="">
                            </div>
                            <div class="awards-name">
                                <h3>年度变革力量</h3>
                                <p>Reform of the Year</p>
                            </div>
                        </div>
                        <div class="awards-detail">
                            <p>“GTIC AWARDS年度大奖，为在2017年度最具变革力、最具影响力的公司授予最高荣誉。”</p>
                            <p><br>参选条件</p>
                            <p>-系企业奖项，参选公司为独角兽企业、上市公司、大型公司（未上市）；</p>
                            <p>-获奖公司需要出席GTIC AWARDS 2018颁奖仪式。</p>
                            <p><br>评选标准</p>
                            <p>-将综合考察参选公司在技术、产品、业务、商业上的革新性、行业影响力和未来价值；</p>
                            <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
                            <p>-最终评选出1家获奖公司。</p>
                        </div>
                        <a class="icon-add" href="javascript:;"><img src="../assets/images/icon-add.png" alt=""></a>
                        <a class="apply-btn" href="javascript:;" target="_blank">报名</a>
                    </li>
                    <li>
                        <div class="shadow">
                            <div class="awards-img">
                                <img src="../assets/images/awards4.png" alt="">
                            </div>
                            <div class="awards-name">
                                <h3>年度变革力量</h3>
                                <p>Reform of the Year</p>
                            </div>
                        </div>
                        <div class="awards-detail">
                            <p>“GTIC AWARDS年度大奖，为在2017年度最具变革力、最具影响力的公司授予最高荣誉。”</p>
                            <p><br>参选条件</p>
                            <p>-系企业奖项，参选公司为独角兽企业、上市公司、大型公司（未上市）；</p>
                            <p>-获奖公司需要出席GTIC AWARDS 2018颁奖仪式。</p>
                            <p><br>评选标准</p>
                            <p>-将综合考察参选公司在技术、产品、业务、商业上的革新性、行业影响力和未来价值；</p>
                            <p>-大众投票权重占比30%，评委嘉宾评分权重占70%；</p>
                            <p>-最终评选出1家获奖公司。</p>
                        </div>
                        <a class="icon-add" href="javascript:;"><img src="../assets/images/icon-add.png" alt=""></a>
                        <a class="apply-btn" href="javascript:;" target="_blank">报名</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="judges part" id="judge-box">
            <div class="part-number">04</div>
            <div class="part-title">
                <div class="part-title-img">
                    <img src="../assets/images/judges.png" alt="">
                </div>
                <p>/ 评委嘉宾 /</p>
            </div>
            <div class="part-body">
                <ul class="judges-list">
                    <li v-for="item in judgesNum">
                        <div class="judge-img">
                            <img v-lazy="judgeImage" alt="">
                        </div>
                        <div class="judge-content">
                            <h3 class="judge-name">刘鹏</h3>
                            <div class="judge-desc">
                                <p>真格基金董事总经理</p>
                                <p>真格基金董事总经理</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="host part" id="host-box">
            <div class="part-number">05</div>
            <div class="part-title">
                <div class="part-title-img">
                    <img src="../assets/images/host.png" alt="">
                </div>
                <p>/ 主办方 /</p>
            </div>
            <div class="part-body">
                <div class="logo-item">
                    <img src="../assets/images/zhidx.png" alt="">
                </div>
                <div class="logo-item">
                    <img src="../assets/images/jiguo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '../assets/js/bus'
    export default {
        data() {
            return {
                scrollBarFixed: false,
                judgesNum: 15,
                judgeImage: 'src/assets/images/judges1.png'
            }
        },
        created() {
            this.handleScrollBarFixed()
        },
        mounted() {
        },
        methods: {
            handleScrollBarFixed() {
                bus.$on('scrollTop', (messages) => {
                    this.scrollBarFixed = messages.navScrollBarFixed
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .pt70 {
        padding-top: 70px;
    }

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

    .part {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 130px;
        .part-number {
            width: 58px;
            height: 58px;
            background-color: #51BDEC;
            color: #FFF794;
            font-size: 45px;
            text-align: center;
            line-height: 58px;
        }
        .part-title {
            margin-top: 32px;
            .part-title-img {
                height: 58px;
                img {
                    height: 100%;
                }
            }
            h3 {
                font-size: 24px;
                letter-spacing: 6px;
                line-height: 33px;
                color: #fff;
                text-align: center;
                font-weight: normal;
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

    .part-body {
        margin-top: 61px;
        width: 100%;
    }

    .introduction {
        margin-top: 96px;
        .part-body {
            position: relative;
            box-sizing: border-box;
            width: 386px;
            height: 516px;
            border: 3px solid #4F4F4F;
            padding: 0 25px 29px;
            font-size: 14px;
            line-height: 20px;
            margin-top: -118px;
            border-top: none;
            p {
                text-align: justify;
            }
        }
        .introduction-detail {
            margin-top: 139px;
        }
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
    }

    .time-line {
        margin-top: 63px;
        .time-line-list {
            display: flex;
            position: relative;
            justify-content: space-around;
            dl {
                text-align: center;
                &:after {
                    content: '';
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    margin: 20px auto 0;
                    background-color: #999999;
                    position: relative;
                    z-index: 2;
                }
                &.on {
                    color: #fff;
                    &:after {
                        background-color: #fff;
                    }
                }
            }
            dt {
                font-size: 24px;
                line-height: 33px;
            }
            dd {
                font-size: 16px;
                line-height: 20px;
            }
            .line {
                width: 863px;
                height: 1px;
                background-color: #4D4D4D;
                position: absolute;
                left: 119px;
                bottom: 3.5px;
            }
        }
    }

    .awards {
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
                    .shadow {
                        display: none;
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
            width: 100%;
            height: 100%;
            background: url("../assets/images/awards-detial-bg.png") no-repeat center center;
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
        }
    }

    .judges {
        .judges-list {
            padding-left: 30px;
            &:after {
                content: '';
                display: block;
                clear: both;
            }
            li {
                width: 190px;
                float: left;
                margin: 0 10px 20px 0;
            }
            .judge-img {
                width: 100%;
                height: 190px;
                overflow: hidden;
                img {
                    height: 100%;
                }
            }
            .judge-content {
                color: #000;
                background-color: #51BDEC;
                height: 111px;
                text-align: center;
                padding-top: 14px;
            }
            .judge-name {
                font-size: 24px;
                line-height: 33px;
            }
            .judge-desc {
                margin-top: 7px;
                p {
                    font-size: 12px;
                    line-height: 17px;
                }
            }
        }
    }

    .host {
        .part-body {
            display: flex;
            justify-content: center;
            align-items: center;
            .logo-item {
                height: 86px;
                margin-left: 102px;
                img {
                    height: 100%;
                }
                &:first-of-type {
                    height: 112px;
                    margin-left: 0;
                }
            }
        }
    }
</style>
