<template>
  <div class="container">
    <div class="login">
      <div class="title">后台管理系统</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="userId">
          <el-input type="text" v-model="ruleForm.userId"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import taoMessage from "common/message";
import { login } from "network/login";
export default {
  data() {
    return {
      ruleForm: {
        userId: "",
        password: "",
      },
      rules: {
        userId: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submit();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    //登录
    async submit() {
      let result = await login({
        phone: this.ruleForm.userId,
        password: this.ruleForm.password,
      });
      if (result.flag) {
        taoMessage("登录");
        this.$emit("power", result.data);
        console.log(result);
        //跳转页面
        this.$router.replace({ path: "/" });
      } else {
        taoMessage("登录", "error");
      }
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  background: url("~assets/img/4.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login {
    width: 400px;
    margin: auto;
    text-align: center;
    background: white;
    padding: 16px 0 30px;
    border-radius: 2px;

    form {
      padding-right: 56px;
    }

    .title {
      margin-top: 25px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>