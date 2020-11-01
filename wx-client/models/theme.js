/**
 * @Description: 封装 <业务对象： Theme> 中所有的网络请求方法
 * @author supengyu
 * @date 2020/10/31
*/

import {Http} from "../utils/http";

export class Theme {
    themes = [];
    static locationA = 't-1'

    /**
     * 获取所有主题数据，并写入到 this.themes 中。
     * @returns {Promise<void>}
     */
    async getThemes() {
        const names = `${Theme.locationA}`;
        this.themes = await Http.request({
            url: "theme/by/names",
            data: {
                names
            }
        })
    }

    getHomeLocationA() {
        return this.themes.find(t => t.name === Theme.locationA)
    }
}
