<template>
    <el-card class="box-card">
        <h1>登录页面</h1>
        <el-form status-icon  label-width="100px">
            <el-form-item label="用户名" >
                <el-input type="text"></el-input>
            </el-form-item>
            <el-form-item label="密码" >
                <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
                <el-button @click="reg">注册</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/info_Merchants");
    },
    reg() {
      this.$router.push("/reg");
    }
  }
};
</script>

<style>
    .box-card {
    width: 480px;
    margin: 20px auto;
  }
</style>

