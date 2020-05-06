// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 3000,
      icon: 'loading',
      // image: ''
      mask: true,
      // 弹出后调用
      success: function() {
        console.log('展示弹窗成功')
      },
      fail: function() {
        console.log('展示弹窗失败')
      },
      // 弹出后调用
      complete: function() {
        console.log('完成')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      success: function(res) {
        // 可以在res中知晓用户点击确认或取消
        console.log(res)
        if (res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if (res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading() {
    // 网络请求一般使用该方法
    wx.showLoading({
      title: '加载ing',
      mask: 'true'
    })

    setTimeout(()=> {
      // 必须手动调用hideLoading才会让loading消失
      wx.hideLoading()
    },1000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
        switch(res.tapIndex) {
          case 0:
            console.log('用户点击了相册')
            break
          case 1:
            console.log('用户点击了拍照')
        }
      }
    })
  },
  onShareAppMessage:function(options) {
    // 小程序不能直接分享到朋友圈，可以把二维码作为图片分享
    return {
      title: '你好呀，meng',
      path: 'pages/about/about',
      imageUrl: 'https://f11.baidu.com/it/u=1322252272,1472332239&fm=76'
    }
  }
})