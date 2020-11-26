import { phoneUrl, shopUrl, chartUrl } from './url';
import { request } from 'umi';

export function phoneReq() {
  return request(phoneUrl);
}
export function shopReq(data: any) {
  return request(shopUrl, {
    method: 'post',
    data
  });
}

export function chartReq() {
  return request(chartUrl);
}



