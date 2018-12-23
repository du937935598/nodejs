// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: '../../images/icon1.jpg',
    other: '其他',
    popups: false,
    inputValue: '',
    inputValue1: '',
    detailBtn: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.uuid);
  },

  // 选择箱数 
  chooseNum:function(val){
    console.log(val.currentTarget.dataset.num)
    let num = val.currentTarget.dataset.num;
    this.setData({
      detailBtn: num
    })
    if (num == '101'){
      console.log('1')
      this.setData({
        popups: !this.data.popups
      })
    }else{
      this.setData({
        inputValue1: num
      })
    }
  },

  // 其他箱数
  numberSub:function(val){
    let num = val.currentTarget.dataset.numbersub;
    if (num == '2'){
      if (this.data.inputValue !== ''){
        this.setData({
          popups: !this.data.popups
        })
        this.setData({
          other: this.data.inputValue + '箱',
          inputValue1: this.data.inputValue
        })
      }else{
        wx.showToast({
          icon: 'none',
          title: '输入箱数',
        })
      }
    }else if(num == '1'){
      this.setData({
        popups: !this.data.popups,
        other: '其他',
        detailBtn: 0,
        inputValue1: '',
        bindmobiles: '',
        bindaddresss: ''
      })
    }
  },

  // 输入手机号
  bindmobile:function(e){
    this.setData({
      bindmobiles: e.detail.value
    })
  },
  
  // 输入地址
  bindaddress: function (e) {
    this.setData({
      bindaddresss: e.detail.value
    })
  },

  // 输入箱数
  bindinputs:function(e){
    console.log(e.detail.value)
    this.setData({
      inputValue: e.detail.value
    })
  },

  // 购买
  buy:function(){
    if (this.data.bindmobiles == '' || this.data.bindmobiles == undefined){
      wx.showToast({
        icon: 'none',
        title: '请输入手机号',
      })
    } else if (this.data.bindaddresss == '' || this.data.bindaddresss == undefined){
      wx.showToast({
        icon: 'none',
        title: '请选输入地址',
      })
    } else if (this.data.inputValue1 == ''){
      wx.showToast({
        icon: 'none',
        title: '请选择箱数',
      })
    }else{
      console.log(this.data.bindmobiles);
      console.log(this.data.bindaddresss);
      console.log(this.data.inputValue1);
    }
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
  
  }
})