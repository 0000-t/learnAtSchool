/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-08 18:09:03
 * @LastEditors: tao
 * @LastEditTime: 2021-02-08 18:35:11
 */
import {
  request
} from './request';

export function getStudentStudyAnalysis() {
  return request({
    url: `/analysis/getStudentStudyAnalysis`
  })
}