import {dateUrl,listUrl} from './url';
import { request } from 'umi';
export function dataReq(){
   return request(dateUrl)
}
export function listReq(){
   return request(listUrl)
}