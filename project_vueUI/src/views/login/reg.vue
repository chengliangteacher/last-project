<template>
    <div>
        <div class="teloel"  style="width:26%;height:600px;margin:30px;">
            <!-- <el-card class="box-card user1"> -->
              <h1  style="width:150px;margin:30px auto;color: rgb(230, 191, 113);font-size:50px;">注册</h1>
              <el-form :model="form" status-icon :rules="rules2" ref="form" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop='userAcount'>
                        <el-input 
                        style="width:90%"
                            placeholder="请输入用户名"
                            v-model="form.userAcount" 
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pass">
                        <el-input 
                        style="width:90%"
                            placeholder="请输入密码" 
                            type="password" 
                            v-model="form.userPwd" 
                            maxlength="10" 
                            minlength='6'
                            auto-complete="off" 
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input 
                        style="width:90%"
                            type="password" 
                            placeholder="请确认密码" 
                            v-model="form.userPwdaga" 
                            auto-complete="off" 
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱"  
                    prop="userMail"
                      :rules="[
                       { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                       ]">
                        <el-input 
                        style="width:90%"
                            placeholder="请输入邮箱"  
                            v-model="form.userMail"
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="手机号码" prop='userPhone'>
                        <el-input 
                        style="width:90%"
                            placeholder="请输入手机号" 
                            maxlength="11"
                            v-model="form.userPhone"
                            clearable
                            
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="姓名" prop='userName'>
                        <el-input 
                        style="width:90%"
                            placeholder="请输入姓名" 
                            maxlength="5" 
                            v-model="form.userName"
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="注册权限:" style="margin-left:5%;" prop='userType'>
                        <el-radio-group v-model="form.userType">
                            <el-radio label="门店管理员"></el-radio>
                            <el-radio label="平台管理员"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item style="margin-left:4%;">
                        <el-button type="primary" @click="reg(form)">立即注册</el-button>
                        <el-button @click="returnlogin" >返回登陆</el-button>
                    </el-form-item>
                </el-form>
            <!-- </el-card> -->
        </div>

    </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (this.form.userPwd === "") {
        callback(new Error("请输入密码"));
      } else if (
        this.form.userPwd.length < 6 ||
        this.form.userPwd.length >= 10
      ) {
        callback(new Error("6-10位之间"));
      } else {
        if (this.form.userPwdaga !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (this.form.userPwdaga === "") {
        callback(new Error("请再次输入密码"));
      } else if (this.form.userPwdaga !== this.form.userPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };

    return {
      form: {
        userAcount: "",
        userPwdaga: "",
        userPwd: "",
        userPhone: "",
        userMail: "",
        userName: "",
        userType: "",
        userStatus:'可用',
      },
      rules2: {
        pass: [
          {
            required: true,
            validator: validatePass,
            trigger: ["blur", "change"]
          }
        ],
        checkPass: [
          {
            required: true,
            validator: validatePass2,
            trigger: ["blur", "change"]
          }
        ],
        userAcount: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: ["blur", "change"]
          }
        ],
        userPhone: [
          { required: true, validator: checkPhone, trigger: ["blur", "change"] }
        ],
        userName: [{ required: true, message: "请输入姓名" }],
        userType:[{ required: true }]
      }
    };
  },
  methods: {
     reg(form) {
      this.$refs.form.validate(async valid => {
        if (valid) {
          if (this.form.userType !== "") {
              await fetch("/users/adduser", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                ...this.form
              })
            }).then(res => res.json());
          }
        } else {
          return false;
        }
      });
      sessionStorage.userAcount=this.form.userAcount
      sessionStorage.userType=this.form.userType
      this.$router.push("/login");
    },
    returnlogin(){
      this.$router.push("/login");
    }
  },

  alerts() {
    this.$alert("输入错误", "提示", {
      confirmButtonText: "确定"
    });
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
  background-image: url("/img/f3f2676b4ec53db5db3def0c8ad432cb.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.teloel {
  background: rgba(255, 255, 255, 0.3)
}
.el-form{
  width: 100%;
  display:inline-block;
}
</style>