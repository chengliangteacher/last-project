<template>
    <div>
        <div class="teloel">
            <!-- <el-card class="box-card user1"> -->
               <h1 style="padding-left: 10%; margin: 30px;color: rgb(190, 211, 113);font-size:90px;">注册</h1>
                <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名">
                        <el-input 
                        style="width:25%"
                            placeholder="请输入用户名"
                            maxlength="8" 
                            v-model="user" 
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pass">
                        <el-input 
                        style="width:25%"
                            placeholder="请输入密码" 
                            maxlength="12" 
                            type="password" 
                            v-model="pass" 
                            auto-complete="off" 
                            clearable max="5"
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="pass">
                        <el-input 
                        style="width:25%"
                            type="password" 
                            placeholder="请确认密码" 
                            maxlength="12" 
                            v-model="pass1" 
                            auto-complete="off" 
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="手机号码">
                        <el-input 
                        style="width:25%"
                            placeholder="请输入手机号" 
                            maxlength="11"
                            v-model="phone"
                            clearable
                            
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="姓名">
                        <el-input 
                        style="width:25%"
                            placeholder="请输入姓名" 
                            maxlength="5" 
                            v-model="name"
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="注册权限:" style="margin-left:5%;">
                        <el-radio-group v-model="type">
                            <el-radio label="门店管理员"></el-radio>
                            <el-radio label="平台管理员"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item style="margin-left:4%;">
                        <el-button type="primary" >立即注册</el-button>
                        <el-button  @click="reg">取消注册</el-button>
                    </el-form-item>
                </el-form>
            <!-- </el-card> -->
        </div>

    </div>
</template>
<script>
export default {
  data() {
      this.phone = (value) => {
        if (value === '') {
          callback(new Error('手机号不可为空'));
        } else {
          if (value !== '') { 
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的手机号码'));
            }
          }
          callback();
        }
      };
    return {
      user: "",
      pass: "",
      type: "",
      pass1: "",
      phone: "",
      name: ""
    };
  },
  methods: {
    async btn() {
    
      if (
        this.user != "" &&
        this.pass != "" &&
        this.type != "" &&
        this.pass1 != "" &&
        this.phone != "" &&
        this.name != ""
      ) {
        if (this.pass === this.pass1) {
          const data = await fetch("/user/register", {
            method: "post",
            body: JSON.stringify({
              userAcount: this.user, //账号
              userPwd: this.pass, //密码
              userPhone: this.phone, //手机
              userName: this.name, //姓名
              userType: this.type //注册类型
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => res.json());
          if (data == true) {
            this.$alert("注册成功！", "提示", {
              confirmButtonText: "确定",
              callback: action => {
                this.$router.push(
                  `/login/${this.user}/${this.pass}/${this.type}`
                );
              }
            });
          } else {
            this.$alert("注册失败，账号已被注册", "警告", {
              confirmButtonText: "确定"
            });
          }
        } else {
          alert("两次密码入不一致");
        }
      } else {
        this.alerts();
      }
    },

    reg() {
      this.$router.push("/login");
    },

    alerts() {
      this.$alert("输入错误", "提示", {
        confirmButtonText: "确定"
      });
    }
  }
};
</script>
<style>
.user1 {
  width: 500px;
  height: 500px;
  box-shadow: 20 0 0 15 red;
  margin: 50px auto;
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

  width: 100%;
  height: 100%;
}
</style>