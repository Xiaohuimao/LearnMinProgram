Page({
  data: {
    name: 'Meng',
    age: 18,
    students: [
      {id: 110, name: 'meng', age: 20},
      {id: 111, name: 'xue', age: 18},
      {id: 112, name: 'feng', age: 22}
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1，错误的做法：界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2，this.setDate()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})