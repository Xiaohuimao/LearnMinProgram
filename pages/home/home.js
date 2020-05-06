// pages/home/home.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // ------------1,原生的方式发送网络请求--------
    this.get_data_origin()
    // -----------2,使用封装的request发送网络请求---
    // Promise最大的好处就是防止出现回调
    request({
      url:'http://106.54.54.237:8000/api/h8/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
    // 发送网络请求
    // 1,发送最简单的get请求
    // wx.request({
    //   url: 'http://106.54.54.237:8000/api/h8/recommend',
    //   method: 'get',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // 2，get请求，但携带参数
    // wx.request({
    //   url: 'http://106.54.54.237:8000/api/h8/home/data',
    //   method: 'get',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    // 3,post请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'meng',
    //     age: 18
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   // 请求失败时打印
    //   fail: function(err) {
    //     console.log(err)
    //   }
    // })
  }
})