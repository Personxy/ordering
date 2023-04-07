Page({
  /**
  
     * 页面的初始数据
  
     */

  data: {
    vtabs: [
      //   {
      //     id: 1,
      //     title: '中餐',
      //     list: [
      //       { id: 1, name: '小炒肉' },
      //       { id: 2, name: '辣椒炒肉' },
      //       { id: 3, name: '炒黄瓜' },
      //       { id: 4, name: '黄焖鸡' },
      //       { id: 5, name: '回锅肉' },
      //       { id: 6, name: '炒黄瓜' },
      //       { id: 7, name: '黄焖鸡' },
      //       { id: 8, name: '回锅肉' }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     title: '西餐',
      //     list: [
      //       { id: 1, name: '烤牛肉' },
      //       { id: 2, name: '烤鸡翅' },
      //       { id: 3, name: '披萨' },
      //       { id: 4, name: '意大利面' },
      //       { id: 5, name: '汉堡' },
      //       { id: 6, name: '披萨' },
      //       { id: 7, name: '意大利面' },
      //       { id: 8, name: '汉堡' }
      //     ]
      //   },
      //   {
      //     id: 3,
      //     title: '日餐',
      //     list: [
      //       { id: 1, name: '寿司' },
      //       { id: 2, name: '刺身' },
      //       { id: 3, name: '天妇罗' },
      //       { id: 4, name: '烤鳗鱼' },
      //       { id: 5, name: '煮豆腐' },
      //       { id: 6, name: '天妇罗' },
      //       { id: 7, name: '烤鳗鱼' },
      //       { id: 8, name: '煮豆腐' }
      //     ]
      //   },
      //   {
      //     id: 4,
      //     title: '甜点',
      //     list: [
      //       { id: 1, name: '芝士蛋糕' },
      //       { id: 2, name: '法式千层面包' },
      //       { id: 3, name: '抹茶冰淇淋' },
      //       { id: 4, name: '奶油蛋糕' },
      //       { id: 5, name: '巧克力酥饼' }
      //     ]
      //   }
    ],

    activeTab: 0 //初始在第几个渲染
  },

  handleTap(evt) {
    //console.log(evt.currentTarget.dataset.id)
    //   wx.navigateTo({
    //     url:`/pages/detail/detail?id=${evt.currentTarget.dataset.id}&name=${evt.currentTarget.dataset.name}`
    //   })
  },

  /**
  
     * 生命周期函数--监听页面加载
  
     */

  onLoad(options) {
    this.getOrderList()
  },
  onChange() {},
  onTabCLick() {},
  async getOrderList() {
    wx.showLoading({
      title: '加载中'
    })

    const res = await wx.cloud.callFunction({
      // 云函数名称
      name: 'getOrderList'
    })
    wx.hideLoading()
    this.setData({
      vtabs: res.result.data
    })
  }
})
