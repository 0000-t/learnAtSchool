import {
  Message
} from 'element-ui';

export default function taoMessage(txt, type = "success", option) {
  option = option || {
    message: `${txt}${type == "success" ? "成功" : "失败"}`,
    type,
    center: true,
    showClose: false,
  }
  Message(option);
}