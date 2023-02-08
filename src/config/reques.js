import { ResultEnum, RequestMethodEnum } from '@/enums/request'
import conf from '../../app.config'
export const config = {
  baseURL: conf.request.baseUrl,
  // 设置超时时间（10s）
  timeout: ResultEnum.TIMEOUT,
  // 跨域时候允许携带凭证
  withCredentials: true,
  default_method: RequestMethodEnum.POST
}
