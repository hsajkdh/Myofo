// pages/money/index.js
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
   
      wx.removeStorage({
        key: 'money'
      })
    
  },
  input:function(e){
    if (e.detail.value < 0 || isNaN(e.detail.value)||e.detail.value==undefined){
        wx.setStorage({
          key: 'money',
          data: 'false',
        })
    }else{
      wx.setStorage({
        key: 'money',
        data: e.detail.value,
      })  
    }
  },
  submit:function(e){
    wx.getStorage({
      key: 'money',
      success: function(res) {
        if (res.data == "false" || res.data ==""){
          wx.showModal({
            title: '输入有误',
            content: '请输入正确金额以便充值',
            confirmText: '确定',
            cancelText: '取消'
          })
        }else{
          wx.navigateTo({
            url: '../wallet/index',
          })
        }
      },
      fail:function(){
        wx.showModal({
          title: '输入有误',
          content: '请输入正确金额以便充值',
          confirmText: '确定',
          cancelText: '取消'
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