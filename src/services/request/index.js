import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class HYRequest {
  constructor(baseURL, timeout) {
    // 结合导出 new HYRequest(), 实现每一次导入都是创建的一个新的 axios 实例
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    // 拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

const hyRequest = new HYRequest(BASE_URL, TIMEOUT)

export default hyRequest
