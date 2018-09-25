// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:123,
    hours:0,
    minutes:0,
    seconds:0,
    title:"正在计费",
    overclick:false
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       number:options.number
     })
     var H=0
     var M=0
     var S=0
    this.timer= setInterval(()=>{
        this.setData({
          seconds: S++
        })
        if(S==60){
          S=0;
          M++;
          setTimeout(()=>{
            this.setData({
              minutes: M
            })
          },1000)
          if(M==60){
            M=0;
            H++;
            setTimeout(()=>{
              this.setData({
                hours: H
              })
            },1000)
            
          }
        }
     },1000)
  },
  end:function(e){
    this.setData({
      title:"总共骑行时间",
      overclick:true
    })
    
    clearInterval(this.timer);
    this.timer = "";
  },
  moveToMap:function(e){
     if(this.timer==""){
        wx.redirectTo({
          url: '../index/index',
        })
     }else {
       wx.navigateTo({
         url: '../index/index?timer='+this.timer,
       })
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