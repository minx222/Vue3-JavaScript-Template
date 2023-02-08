import { RequestMethodEnum, ResultEnum } from '@/enums/request'

import axios from 'axios'
import { config } from '@/config/reques'
import { message } from 'ant-design-vue'
import qs from 'qs'

export class AxiosService {
  constructor(options) {
    this.axiosInstance = axios.create(options)
    this.setupInterceptors(options)
  }

  _setupInterceptors(options) {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.method) {
          config.method = options.default_method
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use((response) => {
      const { data, status } = response
      if (status !== ResultEnum.SUCCESS) {
        message.error('请求失败！ 失败信息：', data.msg)
        Promise.reject(data)
      }
      return data
    })
  }

  get(url, params = {}) {
    return this.axiosInstance({
      url: url + qs.stringify(params),
      method: RequestMethodEnum.GET
    })
  }
  post(url, data) {
    return this.axiosInstance({
      url: url,
      method: RequestMethodEnum.POST,
      data
    })
  }
}

export default new AxiosService(config)
