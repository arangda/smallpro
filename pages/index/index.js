
Page({
  data: {
    imgUrls: [
      'http://4g.xafkyy.cn/statics/images/banner1.jpg',
      'http://4g.xafkyy.cn/statics/images/banner2.jpg',
      'http://4g.xafkyy.cn/statics/images/banner3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(){
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'https://ask.sxhsz.com/articles', 
    header: {
      'content-type': 'application/json' 
    },
    success: function (res) {
      console.log(res.data);
      that.setData({
        list: res.data,
      })
    }
  })
}
})