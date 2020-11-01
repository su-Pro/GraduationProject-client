/**
 * @Description: 对原生小程序进行拓展，支持 Promise + async/await
 * @author supengyu
 * @date 2020/10/31
 */
import {promisic} from "./util";
import {config} from "../config/config";

export class Http {
    static async request({
                             url,
                             data,
                             method = 'GET',
                             refetch = true, // 小程序特有的，可能和登录有关
                             throwError = false // 注意这里抛出错误的参数
                         }) {
        let res;
        try {
            res = await promisic(wx.request)({
                url: `${config.apiBaseUrl}${url}`,
                data,
                method,
                header: {
                    'content-type': 'application/json',
                }
            })
        } catch (e) {
            if (throwError) {
                // TODO: 封装HttpException
                // throw new HttpException(-1, codes[-1])
            }
            // Http.showError(-1)
            return null
        }
        // TODO: 小程序权限校验失败时 二次发送请求
        return res.data;
    }
}
