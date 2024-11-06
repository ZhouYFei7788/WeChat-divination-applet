Page({
  data: {
    isPlaying: false, // 是否正在播放 GIF
    timr: 0
  },
  playGif() {
    // 设置为播放状态
    this.setData({
      isPlaying: true
    });
    if (this.data.timr == 0) {
      // 设置一个定时器，在 GIF 播放结束后将 isPlaying 设为 false
      this.data.timr = setTimeout(() => {
        this.setData({
          isPlaying: false
        });
        wx.navigateTo({
          url: '/pages/solution/solution'
        });
      }, 4800); // 7000 毫秒后停止播放（可根据实际 GIF 的时长调整）
      // 清空定时器
      this.data.timr = 0
        
    }

  },
  showMoreInfo: function () {
    wx.showModal({
      title: '充值提示',
      content: '充值后可查看更多详细运势信息。',
      confirmText: '充值',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          // 这里可以添加充值逻辑，比如跳转到充值页面
          wx.navigateTo({
            url: '/pages/recharge/recharge' // 假设您有充值页面
          });
        }
      }
    });
  }
});