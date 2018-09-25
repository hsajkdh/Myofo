// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   userInfo:{
     url:"",
     name:"未登录"
   },
   btnClick:"登录",
   btnType:"primary"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success:(res)=> {
        this.setData({
           userInfo:{
             url:res.data.userInfo.url,
             name: res.data.userInfo.name
           },
           btnClick:res.data.btnClick,
           btnType:res.data.btnType
        })
      },
    })
  },
  login: function(){
    if(this.data.btnClick=="登录"){
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                userInfo: {
                  url: res.userInfo.avatarUrl,
                  name: res.userInfo.nickName
                },
                btnClick: "退出登录",
                btnType: "warn"
              })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    url: res.userInfo.avatarUrl,
                    name: res.userInfo.nickName
                  },
                  btnClick: "退出登录",
                  btnType: "warn"
                },
              })
            }
          })
        }
      })
    }else {
      wx.removeStorage({
        key: 'userInfo'
      })
      this.setData({
        userInfo: {
          url: "",
          name: "未登录"
        },
        btnClick: "登录",
        btnType: "primary"
      })
    }
    
  },
  gotoMyWallet:function(){
    wx.redirectTo({
      url: '../wallet/index',
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