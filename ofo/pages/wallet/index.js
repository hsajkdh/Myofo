// pages/wallet/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     money:0,
     ticket:0
  },
  gotoMoney:function(){
    wx.redirectTo({
      url: '../money/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
     wx.getStorage({
       key: 'yu',
       success: (res)=> {
         let lastYu=res.data;
         wx.getStorage({
           key: 'money',
           success: (res)=> {
             let yu=parseInt(res.data)+lastYu;
             wx.setStorage({
               key: 'yu',
               data: yu,
             })
             this.setData({
               money: yu
             })
           },
         })
       },
       fail:()=>{
         wx.setStorage({
           key: 'yu',
           data: 0,
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