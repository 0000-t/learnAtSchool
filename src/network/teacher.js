/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-08 18:09:03
 * @LastEditors: tao
 * @LastEditTime: 2021-02-08 18:13:52
 */
import {
  request
} from './request';

export function getTeacherCourseAnalysis() {
  return request({
    url: `/analysis/getTeacherCourseAnalysis`
  })
}