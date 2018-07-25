<template>
  <div class="telogs">
    <div class="teloel">
      <!-- <el-card class="box-card user"> -->
        <h1 style="padding-left: 7%; margin: 30px;color: rgb(190, 211, 113);font-size:90px;">宠物邦</h1>
        <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="user" clearable  style="width:25%">
            </el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" type="password" v-model="pass" clearable style="width:25%">
            </el-input>
          </el-form-item>
          <el-form-item style="padding-left: 5%" label="登录类型:">
            <el-radio-group v-model="type">
              <el-radio label="平台管理员"></el-radio>
              <el-radio label="门店管理员"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item style="margin-left:5%;">
            <el-button type="primary"  >登录</el-button>
            <el-button @click="reg">注册</el-button>
          </el-form-item>
        </el-form>
      <!-- </el-card> -->
    </div>

  </div>
</template>
  <script>
    export default {
      data() {
        return {
          user: this.$route.params.user,
          pass: this.$route.params.pass,
          type: this.$route.params.type
        };
      },
      methods: {
         async btn() {
          if (this.user != undefined && this.pass != undefined && this.type != undefined) {
            const data = await fetch("/user/Land", {
              method: "post",
              body: JSON.stringify({
                userAcount: this.user, //账号
                userPwd: this.pass, //密码
                userType: this.type //登陆类型
              }),
              headers: {
                "Content-Type": "application/json"
              }
            }).then(res => res.json());
            if (data.name != "false" && data.type != "false") {
              this.$alert("登陆成功！", "提示", {
                confirmButtonText: "确定",
                callback: action => {
                  localStorage.username = data.name;
                  localStorage.usertype = data.type;
                  this.$router.push("/info/messagecenter");
                }
              });
            } else {
              this.$alert("登陆失败，账号或者密码错误", "警告", {
                confirmButtonText: "确定"
              });
            }
          } else {
            this.$alert("输入错误", "提示", {
              confirmButtonText: "确定"
            });
          }
        }, 
         
    
        reg() {
          this.$router.push("/reg");
        }
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