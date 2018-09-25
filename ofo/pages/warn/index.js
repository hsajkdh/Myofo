// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:{
      number: 0,
      des:""
    },
    textAction:"拍摄/相册",
    picUrls:[],
    checkboxValue:[],
    message:[{
      value:"私锁私用",
      checked:false,
      color:"#b9dd08"
    },
    {
      value: "车牌缺损",
      checked: false,
      color: "#b9dd08"
    },
    {
      value: "轮胎坏了",
      checked: false,
      color: "#b9dd08"
    },
    {
      value: "车锁坏了",
      checked: false,
      color: "#b9dd08"
    },
    {
      value: "违规乱停",
      checked: false,
      color: "#b9dd08"
    },
    {
      value: "密码不对",
      checked: false,
      color: "#b9dd08"
    },
    {
      value: "刹车坏了",
      checked: false,
      color: "#b9dd08"
    },
    {
      value: "其他故障",
      checked: false,
      color: "#b9dd08"
    }],
    btnColor:"#f2f2f2"
  },
  checkBind: function(e){
    var _value=e.detail.value;
    if(_value.length==0){
       this.setData({
         checkboxValue: [],
         btnColor:"#f2f2f2"
       })
    }else {
      this.setData({
        checkboxValue: _value,
        btnColor: "#b9dd08"
      })
    }
  },
  chickPhone:function(){
    wx.chooseImage({
      success:(res)=> {
        var _picUrls = this.data.picUrls;
        var _temp=res.tempFilePaths;
        for(var temp of _temp){
          _picUrls.push(temp);
          this.setData({
            picUrls:_picUrls,
            textAction:"+"
          })
        }
      },
    })
  },
  delImg: function(e){
    let index=e.target.dataset.index;
    let _picUrls = this.data.picUrls;
    _picUrls.splice(index,1);
    this.setData({
      picUrls:_picUrls
    })
    if(_picUrls.length==0){
      this.setData({
        textAction: "拍摄/相册" 
      })
    }
  },
  inputNum: function(e){
     this.setData({
       inputValue:{
         number: e.detail.value,
         des: this.data.des
       }
     })
  },
  inputDes: function(e){
    this.setData({
      inputValue: {
        number: this.data.number,
        des: e.detail.value
      }
    }) 
  },
  submit: function(e){
    if (this.data.picUrls.length > 0 && this.data.checkboxValue.length > 0){
      wx.request({
        url: 'https://www.easy-mock.com/mock/5b8e37a1bb7b036754cdda8e/example/submitSuccess',
        success:(res)=>{
           wx.showToast({
             title: '提交成功',
             icon:"success",
             duration: 2000
           })
           setTimeout(function(){
             wx.navigateBack({
               delta: 1
             })
           },2000)
        }
      })
    }else{
      wx.showModal({
        title: '请填写完整的反馈信息',
        content: '以便进行修理',
        confirmText:'确定',
        cancelText:'取消',
        success:(res)=>{
           if(res.confirm){

           }else{
             setTimeout(function () {
               wx.navigateBack({
                 delta: 1
               })
             }, 1000)
           }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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