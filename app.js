App({
  // 生命周期函数：后台存活两个小时
  /*
  小程序初始化完成时，执行的生命周期函数
  */ 
  onLaunch: function () {
    console.log("小程序初始化完成了：onLaunch")
    // 发送网络请求
    // wx.request({
    //   url: '',
    // })
    // 异步调用 -》数据拿到之后再进行回调的
    // wx.getUserInfo({
    //   // 获取用户信息
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    setTimeout(function() {
      const err = new Error()
      throw err
    },3000)
  },
  // 小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    console.log("界面显示出来：onshow")
  },
  // 界面被隐藏时执行
  onHide: function () {
    console.log("界面被隐藏时会执行：onHide")
  },
  // 小程序中发生了一些错误时被执行
  onError: function (msg) {
    console.log('小程序出现了错误')
  }
})

