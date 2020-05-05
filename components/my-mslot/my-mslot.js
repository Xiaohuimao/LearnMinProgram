Component({
  options: {
    multipleSlots: true
  },
  // 1,监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来的')
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时')
    },
    resize() {
      console.log('监听页面尺寸的改变')
    }
  },
  // 2,监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('组件被创建')
    },
    attached() {
      console.log('组件被添加到页面中')
    },
    ready() {
      console.log('组件被渲染出来')
    },
    movied() {
      console.log('组件被移动到节点另一个位置')
    },
    detached() {
      console.log("组件被移除")
    }
  }
})