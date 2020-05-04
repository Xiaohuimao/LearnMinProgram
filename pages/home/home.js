// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ['衣服','裤子','鞋子']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleButtonClick() {
    console.log('按钮发生点击')
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTag() {
    console.log('handleTag')
  },
  handleLongPress() {
    console.log('handleLongPress')
  },
  handleEventClick(event) {
    console.log(event)
  },
  handleEventEnd(event) {
    console.log("+++",event)
  },
  handleInner(event) {
    console.log(event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleItemClick(event) {
    const dataset = event.target.dataset
    const index = dataset.index
    const title = dataset.item
    console.log(title,index)
  },

  // 事件冒泡和事件捕获
  handleCapView1() {
    console.log('handleCapView1')
  },
  handleCapView2() {
    console.log('handleCapView2')
  },
  handleCapView3() {
    console.log('handleCapView3')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }
})