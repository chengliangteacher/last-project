<template>
  <div class="telogs">
    <div class="teloel">
        <h1 style="padding-left: 9%; margin: 30px;color: rgb(190, 211, 113);font-size:50px;">宠物邦</h1>
        <el-form status-icon ref="form" label-width="100px" >
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="form.userAcount" clearable  style="width:20%">
            </el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" type="password" v-model="form.userPwd" clearable style="width:20%">
            </el-input>
          </el-form-item>
          <el-form-item style="padding-left: 5%" label="登录类型:"> 
            <el-radio-group v-model="form.userType">
              <el-radio label="平台管理员"></el-radio>
              <el-radio label="门店管理员"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="login" style="width:125px" >登录</el-button>
            <el-button @click="reg" style="margin-left:5%;width:125px">注册</el-button>
          </el-form-item>
        </el-form>
    </div>

  </div>
</template>
  <script>
export default {
  data() {
    return {
      user: this.$route.params.user,
      pass: this.$route.params.pass,
      type: this.$route.params.type,
      form: {
        userAcount: "",
        userPwd: "",
        userType: ""
      }
    };
  },
  methods: {
    reg() {
      this.$router.push("/reg");
    },
    async login() {
      if (
        this.form.userAcount != "" &&
        this.form.userPwd != "" &&
        this.form.userType != ""
      ) {
        const isbool = await this.request();
        if(isbool){
          if(this.form.userType==='平台管理员'){
            this.$router.push("/info_Platform")
          }else{
            localStorage.usersId=isbool[0]._id
               this.$router.push("/Info_Merchants")
          }
        }else{
           this.$alert("用户名或密码不正确", "警告", {
          confirmButtonText: "确定"
        })
        }
      } else {
        this.$alert("任一项不能为空", "警告", {
          confirmButtonText: "确定"
        });
      }
    },
    async request() {
      const data = fetch("/users/useryan", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          form: this.form
        })
      }).then(res => res.json());
      return data;
    }
  },
  created(){
    this.form.userAcount=sessionStorage.userAcount||''
    this.form.userType=sessionStorage.userType||''
  }
};
</script>
  <style>
.user {
  width: 500px;
  height: 400px;
  box-shadow: 20 0 0 15 red;
  margin: 100px auto;
}
body {
  background-image: url("/img/ala1.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.teloel {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.2); */
  width: 100%;
  height: 100%;
}
</style>