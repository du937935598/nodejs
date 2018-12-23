//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    imgSrc: [
      '../../images/icon1.jpg',
      '../../images/icon2.jpg',
      '../../images/icon3.jpg',
      '../../images/icon4.jpg',
      '../../images/icon5.jpg',
      '../../images/icon6.jpg'
    ]
  },

  onLoad: function () {
    
  },

  navigateTo:function(val){
    console.log(val.currentTarget.dataset.uuid);
    wx.navigateTo({
      url: '/pages/detail/detail?uuid=' + val.currentTarget.dataset.uuid,
    })
  },

  apiQuery: function (val) {
    // var that = this;
    // wx.request({
    //   url: app.openApi + '/index.php/Article/queryArray.html?',
    //   method: 'GET',
    //   dataType: 'json',
    //   data: { "type": val },
    //   success: function (res) {
    //     var datas = res.data;
    //     for (var i = 0; i < datas.length; i++) {
    //       datas[i].content = datas[i].content.replace(/<[^>]+>/g, "")
    //     }
    //     that.setData({
    //       dataList: datas
    //     });
    //   }
    // })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('aaaa');
  }
})
