/**
 * @Description:
 * @author supengyu
 * @date 2020/10/31
*/
import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    bannerB: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log(`123`)
    this.initAllData()

  },
  // XXX: 七月写的代码太恶心了 没有给一个统一获取函数
  async initAllData() {
    const theme = new Theme()
    await theme.getThemes()
    const themeA = theme.getHomeLocationA()
    const bannerB = await Banner.getHomeLocationB()
    console.log(themeA,bannerB)
    this.setData({
      themeA,
      bannerB
    })
  }
})
