// pages/home/home.js
// getApp()获取App()产生的示例对象
const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)
// 注册一个页面
// 页面也有自己的生命周期
Page({
  // -------2,初始化数据---------
  data: {
    content: "haha",
    list: []
  },
  // ------1，监听页面的生命周期函数-------
  // 页面被加载出来执行
  onLoad() {
    console.log('onLoad')
    // 系统提供的api：wx.request来进行数据请求
    wx.request({
      url: 'http://152.136.185.210:8000/api/h8/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list;
        // this.data.list = data
        this.setData({
          list: data
        })
      }
    })
  },
  // 监听页面初次渲染完成（逻辑层把数据传递过去，准备好之后再执行）
  onReady() {
    console.log('onReady')
  },
  // 注意：先执行onShow，再执行onReady,且onReady只在初次渲染后才执行
  // 页面显示出来时，会回调
  onShow() {
    console.log('onShow')
  },
  // 页面隐藏时执行
  onHide() {
    console.log('onHide')
  },
  // 页面被销毁时执行（页面的跳转）
  onUnload() {
    console.log('onUnload')
  },
  // --------3，监听页面中相关的事件---------
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleViewClick() {
    console.log("view被点击了")
  },
  // --------4，其他事件---------
  // 监听页面的滚动
  onPageScroll(obj) {
    // console.log(obj)
  },
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  onPullDownRefresh() {
    console.log("下拉刷新")
  }
})