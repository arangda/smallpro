var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //配置tabBar  
    tabBar: {
      "color": "#9E9E9E",
      "selectedColor": "#f00",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "/images/home_b.png",
          "selectedIconPath": "/images/home_r.png",
          "text": "首页",
           active: true
        },
        {
          "pagePath": "/pages/tel/index",
          "iconPath": "/images/tel_b.png",
          "selectedIconPath": "/images/tel_r.png",
          "text": "电话咨询",
          active: false
        },
        {
          "pagePath": "/pages/map/index",
          "iconPath": "/images/map_b.png",
          "selectedIconPath": "/images/map_r.png",
          "text": "来院路线",
          active: false
        },
        {
          "pagePath": "/pages/reg/index",
          "iconPath": "/images/reg_b.png",
          "selectedIconPath": "/images/reg_r.png",
          "text": "预约挂号",
          active:false
        }
      ],
      "position": "bottom"
    }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      var id = options.id;
      wx.request({
        url: 'https://ask.sxhsz.com/articles/'+id,
        header:{
          'content-type':'application/json' 
        },
        success:function(res){
          console.log(res.data)
          WxParse.wxParse('article', 'html', res.data.content, that, 20);
          that.setData({
              con:res.data
          })
        }
      })
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