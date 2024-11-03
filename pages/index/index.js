Page({
    data: {
      timeLeft: 3, // 倒计时时间，单位秒
    },
    onLoad: function() {
      this.countdown();
      // 页面加载时自动跳转到占卜页面，延迟 3 秒
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/fortune/fortune'
        });      
      }, 3000); // 3000 毫秒 = 3 秒
    },
    countdown: function() {
      if (this.data.timeLeft > 0) {
        this.setData({
          timeLeft: this.data.timeLeft - 1,
        });
        setTimeout(this.countdown, 1000); // 1000毫秒后再次调用倒计时函数
      } else {
        // 倒计时结束，可以跳转到其他页面或执行其他操作
      }
    },
  });

