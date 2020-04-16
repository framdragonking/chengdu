Page({
  data: {
    isPlay: true,
    but_1: true,
    but_3: false,
    but_4: false,
    but_5: false,
    toView: "",
    winHeight: '100%',
    banner_autoplay: true,
    banner_interval: 3000,
    banner_duration: 500,
    banner_dots: true,
    imgs: [],
    currentSwiper: 0,
    isMute: false,
    playState: true,
    innerAudioContext: wx.createInnerAudioContext(),
    currentTime: '00:00',
    duration: '00:00',
    circleLeft: 0,
    startPageX: 0,
    second_top: 0,
    third_top: 0,
    solid_height: 0,
    m1_top: 0,
    m3_top: 0,
    m4_top: 0,
    m5_top: 0,
    getPosition: "",
    detail: "",
    open_time: "",
    ticket_policy: "",
    phone: "",
    address: "",
    traffic: "",
    _setTime: null,
    pageConfig: [
      //
      {
        name: "宽窄巷子",
        imgs: [{
          url: 'http://139.196.29.126:8081/json/kuanzhai1.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/kuanzhai2.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/kuanzhai3.jpg',
        }
        ],
        detail: "由宽巷子、窄巷子和井巷子组成，是成都现存较成规模的清朝古街道。\r\n宽巷子集中了整个街区最多最完整的老建筑，在这里可以品碗茶，吃正宗川菜，体验老成都的风土人情。\r\n窄巷子既有清末民初的建筑，也有早期西式洋楼，是以西式饮食文化、艺术休闲为主的休闲生活品味区。\r\n井巷子是典型的民俗成都缩影，除了引人入胜的砖文化墙，还汇聚了成都特色小吃、民俗玩意儿等。",
        address: "四川省成都市青羊区金河路口宽窄巷子",
        open_time: "全天开放(1月1日-12月31日 周一-周日)",
        ticket_policy: "免费",
        phone: "028-86259233",
        traffic: "乘地铁2号线至人民公园站下车，步行400 米即可到达。\r\n乘地铁4号线至宽窄巷子站下车即可到达。\r\n乘62、70、93、126 环线、127、163、340 路公交车至宽窄巷子站下车。",
      },
      {
        name: "成都大熊猫繁育研究基地",
        imgs: [{
          url: 'http://139.196.29.126:8081/json/panda1.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/panda2.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/panda3.jpg',
          }
        ],
        detail: "大熊猫繁育科研机构，完全模拟大熊猫野外生活环境，建有湖泊、溪流、竹林、草坪等，共饲养100 多只大熊猫。\r\n大门附近有个大熊猫博物馆，可在里面熊猫国邮政局寄出盖有熊猫邮戳的明信片，还可在电影院看有关大熊猫的纪录片。\r\n除了大熊猫，还可以看到黑颈鹤、孔雀、鹭鸶等小动物。在月亮产房，有时还可以看到刚出生得小熊猫。",
        address: "四川省成都市成华区熊猫大道1375号",
        open_time: "07:30-18:00；停止售票时间:17:00 (1月1日-12月31日 周一-周日)",
        ticket_policy: "成人票:55人民币/半票27人民币 (1月1日-12月31日 周一-周日)\r\n半票:6周岁-18周岁未成年人、全日制大学本科及以下学历学生(包括港、澳、台未成年人/学生)、60周岁-65周岁老年人节假日，凭有效证件可购买半价票。\r\n免票:6周岁以下或身高不足1.3米的儿童、65周岁以上老年人、离休人员、老红军、残疾人、现役军人，凭有效证件免票入园。。",
        phone: "028-83510033",
        traffic: "乘87、198a、198、867 路公交车在熊猫基地站下车",
      },
      {
        name: "春熙路",
        imgs: [{
          url: 'http://139.196.29.126:8081/json/chunxilu1.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/chunxilu2.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/chunxilu3.jpg',
        }
        ],
        detail: "春熙路是成都最古老的商业街道之一，如今的春熙路依旧热闹非凡，串起了正科甲巷、署袜中街等形成了城中最旺的商圈。\r\n这里汇聚众多品牌专卖店，百年老商场，品牌折扣都有，是人们购物的常去之处。\r\n除去购物，这里聚集了成都的几大老字号美食店，可以一口气吃遍成都小吃。",
        address: "四川省成都市锦江区春熙路",
        open_time: "全天开放",
        ticket_policy: "免费",
        phone: "028-87706026",
        traffic: "乘地铁2 号线可直达；乘58、81、98 路公交车至春熙路北口站下车即到；或乘154 路公交车至华兴街站下车步行约200 米可达；或乘18、98、166 路公交车至总府街站下车步行约260 米可达",
      },
      {
        name: "杜甫草堂博物馆",
        imgs: [{
          url: 'http://139.196.29.126:8081/json/dufu1.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/dufu2.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/dufu3.jpg',
        }        
        ],
        detail: "&杜甫流寓成都时的故居，杜甫在此居住近四年，创作了上百首诗歌，被视为中国文学史上的“圣地”。\r\n现今的杜甫草堂是经宋、元、明、清多次修复而成，园内亭台林立，古木参天。\r\n主要景点有大廨、诗史堂、工部祠等，“杜诗书法木刻廊”陈列着百余件杜诗书法木刻作品。\r\n杜甫当年的茅屋故居，是借鉴川西民居的特点复建的，如今成为了杜甫草堂的标志性景观。",
        open_time: "08:00-20:00(夏季)；停止售票时间:19:00 (5月1日-10月31日 周一-周日)\r\n08:00-18:30(冬季)；停止售票时间:17:30 (11月1日-次年4月30日 周一-周日)",
        ticket_policy: "门票:50人民币 (1月1日-12月31日 周一-周日)\r\n半票:6周岁(不含)至18周岁(含)未成年人、全日制大学本科及以下学历学生凭有效证件",
        phone: "028-66005161",
        address: "四川省成都市青羊区青华路37号",
        traffic: "乘坐地铁4号线，在草堂北路下车后步行可到。乘坐1024路公交车，在杜甫草堂博物馆站下车",
      },
      {
        name: "武侯祠",
        imgs: [{
          url: 'http://139.196.29.126:8081/json/dufu1.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/dufu2.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/dufu3.jpg',
        }        
        ],
        detail: "纪念的是蜀国丞相诸葛亮，明朝初年并入汉昭烈庙，也是全国影响最大的三国遗迹博物馆。\r\n由惠陵、汉昭烈庙、武侯祠三部分组成。祠内供奉刘备、诸葛亮等蜀汉英雄塑像50尊。\r\n武大门、二门、刘备殿、过厅、诸葛亮殿、三义庙等，排列在从南到北的一条中轴线上",
        open_time: "08:00-20:00；停止售票时间:19:30 (5月1日-10月31日 周一-周日)\r\n08:00-18:30；停止售票时间:17:30 (11月1日-次年4月30日 周一-周日)",
        ticket_policy: "成人票:全价票50人民币/年票100人民币\r\n半票:6周岁-18周岁的未成年人/学生、全日制大学本科及以下学历学生凭有效证件。\r\n免票:离休人员、残疾人、现役军人、公安干警、革命烈属、本市老年人、60周岁以上的老年人、6周岁及以下或身高1.3米及以下的儿童、大中小学生15人及以上的团体凭有效证件。",
        phone: "028-85535951",
        address: "四川省成都市武侯区武侯祠大街231号",
        traffic: "乘坐1、57、82、334、335路公交车在武侯祠站下车或乘坐8、21路公交车在武侯祠东街站下车 。",
      },
      {
        name: "都江堰景区",
        imgs: [{
          url: 'http://139.196.29.126:8081/json/dufu1.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/dufu2.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/dufu3.jpg',
        }
        ],
        detail: "是全世界迄今为止，年代最久、唯一留存、以无坝引水为特征的宏大水利工程。\r\n主要有鱼嘴分水堤、飞沙堰溢洪道、宝瓶口进水口三大部分构成，一直发挥着防洪灌溉的作用。\r\n都江堰附近景色秀丽，文物古迹众多，主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园等。",
        address: "四川省成都市都江堰市公园路",
        open_time: "08:00-17:30 (12月1日-次年2月28日 周一-周日)\r\n08:00-18:00 (3月1日-11月30日 周一-周日)",
        ticket_policy: "普通票:成人票80人民币 (1月1日-12月31日 周一-周日)\r\n半票:学生凭有效证件",
        phone: "028-87138587",
        traffic: "乘坐都江堰9路公交车，在离堆公园站下车即可到达。",
      },
      {
        name: "锦里",
        imgs: [{
          url: 'http://139.196.29.126:8081/json/jinli1.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/jinli2.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/jinli3.jpg',
        }
        ],
        detail: "锦里是一条仿古商业街，是成都人气最旺景点之一，也是成都武侯祠博物馆的一部分。\r\n在这里，你可以欣赏捏泥人、摆糖画的手艺，也可以逛逛极富三国特色的店铺。\r\n街里还有各种四川特色小吃，各种茶楼、咖啡馆、酒吧、客栈等随时可落座。\r\n黄昏时分，锦里会亮起灯，颇有韵味，适合拍照游玩。",

        address: "四川省成都市武侯区武侯祠大街231号附1号",
        open_time: "全天开放",
        ticket_policy: "免费",
        phone: "028-66311313",
        traffic: "1.乘1、57、82、334、335 路至武侯祠站下车；乘8、21路至武侯祠东街站下车",
 
      },
      {
        name: "青城后山",
        imgs: [{
          url: 'http://139.196.29.126:8081/json/qingcheng1.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/qingcheng2.jpg',
        },
        {
          url: 'http://139.196.29.126:8081/json/qingcheng3.jpg',
        }
        ],
        detail: "青城后山位于青城山后，后山的宫殿香火虽不如前山旺盛，但清幽洁净更胜一筹，自然景观更多。\r\n特别适合喜欢休闲徒步游和喜欢爬山的蜂蜂，沿山道而行，山花烂漫，飞瀑流泉不绝，相当惬意。\r\n青城后山主要景点有泰安古镇、三潭雾泉、龙隐峡栈道、金鞭岩、又一村、白云寺。",
        address: "四川省成都市都江堰市泰安古镇驿道街112号",
        open_time: "08:00-17:00 (1月1日-12月31日 周一-周日)",
        ticket_policy: "普通票:20人民币",
        phone: "028-87239460",
        traffic: "在成都茶店子汽车站乘坐直达青城山的班车，发车时间为8:00-10:00，票价28元左右/ 人。",

      },
    ]
  },
  onLoad: function (options) {
    let that = this;
    that.chooseIndex = options.chooseIndex
    let pageConfig = this.data.pageConfig[that.chooseIndex];
    this.setData({
      imgs: pageConfig.imgs,
      detail: pageConfig.detail,
      open_time: pageConfig.open_time,
      ticket_policy: pageConfig.ticket_policy,
      phone: pageConfig.phone,
      address: pageConfig.address,
      traffic: pageConfig.traffic,
    })
    wx.setNavigationBarTitle({
      title: pageConfig.name
    })
    wx.getSystemInfo({
      success: function (res) {
        wx.createSelectorQuery().selectAll('.fixed-area').boundingClientRect(function (rects) {
          rects.forEach(function (rect) {
            that.setData({
              winHeight: res.windowHeight - rect.bottom + 5 + 'px'
            });
          })
        }).exec();
        wx.createSelectorQuery().select("#m1").boundingClientRect(function (m1) {
          that.setData({
            m1_top: m1.top
          })
        }).exec();
        wx.createSelectorQuery().select("#m3").boundingClientRect(function (m3) {
          that.setData({
            m3_top: m3.top
          })
        }).exec();
        wx.createSelectorQuery().select("#m4").boundingClientRect(function (m4) {
          that.setData({
            m4_top: m4.top
          })
        }).exec();
        wx.createSelectorQuery().select("#m5").boundingClientRect(function (m5) {
          that.setData({
            m5_top: m5.top
          })
        }).exec();

      }
    });
    this.innerAudioContext = wx.createInnerAudioContext();

    this.innerAudioContext.onPlay(() => {
      this.updateTime();
    });
    this.innerAudioContext.onError(res => {
    });

  },
  onUnload() {
    this.innerAudioContext.destroy()
  },
  onShow() {
    this.innerAudioContext.play();
  },
  goToMiniProgram() {
    this.innerAudioContext.pause();
    let chooseIndex = this.chooseIndex;
    console.log(chooseIndex)
    switch (chooseIndex) {
      case "0":
        this.appId = ""
        break;
      case "1":
        this.appId = "wx58bf9e4546ab7ba5"
        break;
      case "2":
        this.appId = ""
        break;
      case "3":
        this.appId = ""
        break;
      case "4":
        this.appId = ""
        break;
      case "5":
        this.appId = ""
        break;
      case "6":
        this.appId = ""
        break;
      case "7":
        this.appId = ""
        break;
      case "8":
        this.appId = ""
        break;
      case "9":
        this.appId = ""
        break;
      case "10":
        this.appId = ""
        break;
      case "11":
        this.appId = ""
        break;
      default:
        this.appId = ""
        break;
    }
    wx.navigateToMiniProgram({
      appId: this.appId,
      path: 'pages/index/index',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  },
  audioPlay() {
    this.data.isPlay ? this.innerAudioContext.pause() : this.innerAudioContext.play();
    this.setData({
      isPlay: !this.data.isPlay
    })
  },
  updateTime(currentTime) {
    this.innerAudioContext.offSeeked();
    let _currentTime = currentTime || this.innerAudioContext.currentTime;
    this.setData({
      circleLeft: _currentTime / this.innerAudioContext.duration * 560,
      _setTime: setTimeout(this.updateTime, 1000)
    })
  },
  dragStart(e) {
    this.startPageX = e.touches[0].clientX;
    this.innerAudioContext.offPlay();
    clearTimeout(this.data._setTime);
  },
  dragMove(e) {
    let newLeft = 0;
    if (
      (this.data.circleLeft >= this.startPageX - e.touches[0].clientX &&
        this.startPageX - e.touches[0].clientX >= 0) ||
      (this.data.circleLeft <= 560 + this.startPageX - e.touches[0].clientX &&
        this.startPageX - e.touches[0].clientX <= 0)
    ) {
      newLeft = (e.touches[0].clientX - this.startPageX) * 2;
      this.startPageX = e.touches[0].clientX;
      this.setData({
        circleLeft: newLeft + this.data.circleLeft
      })
    }
  },
  dragEnd(e) {
    let newPosition = this.data.circleLeft / 560 * this.innerAudioContext.duration;

    this.innerAudioContext.onSeeked(() => {
      console.log("onSeeked");
      this.updateTime(newPosition);
    })
    this.innerAudioContext.seek(newPosition);

    if (this.innerAudioContext.paused) {
      this.innerAudioContext.play();
      this.playState = true;
    }
  },
  clickBtn1: function (e) {
    this.setData({
      but_1: true,
      but_3: false,
      but_4: false,
      but_5: false,
      toView: e.currentTarget.dataset.hash
    })
  },
  clickBtn3: function (e) {
    this.setData({
      but_1: false,
      but_3: true,
      but_4: false,
      but_5: false,
      toView: e.currentTarget.dataset.hash
    })
  },
  clickBtn4: function (e) {
    this.setData({
      but_1: false,
      but_3: false,
      but_4: true,
      but_5: false,
      toView: e.currentTarget.dataset.hash
    })
  },
  clickBtn5: function (e) {
    this.setData({
      but_1: false,
      but_3: false,
      but_4: false,
      but_5: true,
      toView: e.currentTarget.dataset.hash
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current,
    })
  },
  // 滑动内容改变导航栏选中的词条
  scrollContent(e) {
    let scrollTop = e.detail.scrollTop + this.data.m1_top;
    switch (true) {
      case scrollTop >= this.data.m1_top && scrollTop < this.data.m3_top:
        this.setData({
          but_1: true,
          but_3: false,
          but_4: false,
          but_5: false,
        })
        break;

      case scrollTop >= this.data.m3_top && scrollTop < this.data.m4_top:
        this.setData({
          but_1: false,
          but_3: true,
          but_4: false,
          but_5: false,
        })
        break;
      case scrollTop >= this.data.m4_top && scrollTop < this.data.m5_top:
        this.setData({
          but_1: false,
          but_3: false,
          but_4: true,
          but_5: false,
        })
        break;
      case scrollTop >= this.data.m5_top:
        this.setData({
          but_1: false,
          but_3: false,
          but_4: false,
          but_5: true,
        })
        break;
      default:
        break;
    }
  }
})