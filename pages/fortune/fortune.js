Page({
  showMoreInfo: function() {
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
