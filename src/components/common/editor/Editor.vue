<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-09 16:07:33
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 16:49:16
-->
<template>
  <div id="wangeditor">
    <div ref="editorElem" style="text-align: left"></div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
  props: ["catchData", "content"], // 接收父组件的方法和参数
  data() {
    return {
      editor: null,
      editorContent: "",
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    console.log(this.content);
    this.editor.config.height = 200;
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.config.onchange = (html) => {
      this.editorContent = html;
      this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
    };
    this.editor.config.menus = [
      // 菜单配置
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      // "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo", // 重复
    ];
    this.editor.create(); // 创建富文本实例
    this.editor.txt.html(this.content);
    this.$emit("editor", this.editor);
  },
};
</script>

<style lang="less" scoped>
</style>