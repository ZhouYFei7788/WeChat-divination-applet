Page({
  onLoad: function() {
    // 页面加载时自动跳转到占卜页面，延迟 3 秒
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/fortune/fortune'
      });      
    }, 3000); // 3000 毫秒 = 3 秒
  }
});
