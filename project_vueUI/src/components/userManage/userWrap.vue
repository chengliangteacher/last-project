<template>
  <div class="container">
    <div style="margin:10px 0; width:350px">
      <el-button type="primary" @click="dialogFormVisible = true">增加用户</el-button>
      <el-dialog title="增加用户" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userAcount" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userPwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userPhone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userMail" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户类型" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userType" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户状态" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userStatus" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="adduser(),dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="修改用户" :visible.sync="dialogFormVisible1">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userAcount" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userPwd" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userPhone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userMail" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户类型" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userType" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户状态" :label-width="formLabelWidth">
            <el-input style="width:80%" v-model="form.userStatus" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="alteruser1()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          fixed
          prop="userAcount"
          label="用户名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="userPwd"
          label="密码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="userPhone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="userMail"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="userType"
          label="用户类型">
        </el-table-column>
        <el-table-column
          prop="userStatus"
          label="用户状态">
        </el-table-column>
        <el-table-column
          prop="_id"
          label="操作">
          <template slot-scope="scope">
          <el-button @click="alteruser(scope.$index, scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="remuser(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="curPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="count">
        </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input10: "",
      tableData: [],
      curPage: 1,
      eachPage: 5,
      count: 100,
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        userAcount: "1",
        userPwd: "2",
        userPhone: "3",
        userMail: "4",
        userType: "5",
        userStatus: "6",
        _id: ""
      },
      formLabelWidth: "120px"
    };
  },

  created() {
    this.users();
  },

  methods: {
    async users() {
      const data = await fetch("/users/users", {
        method: "post",
        body: JSON.stringify({
          curPage: this.curPage,
          eachPage: this.eachPage
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      Object.assign(this, data);
    },
    handleSizeChange (val){
        this.eachPage=val
        this.users()
    },
    handleCurrentChange(val){
      this.curPage=val
      this.users()
    },
    async remuser(_id) {
      await fetch("/users/remuser", {
        method: "post",
        body: JSON.stringify({ _id }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.users();
      });
    },

    async adduser() {
      await fetch("/users/adduser", {
        method: "post",
        body: JSON.stringify({
          userAcount: this.form.userAcount,
          userPwd: this.form.userPwd,
          userPhone: this.form.userPhone,
          userMail: this.form.userMail,
          userType: this.form.userType,
          userStatus: this.form.userStatus
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.users();
      });
    },

    async alteruser(index, row) {
      this.dialogFormVisible1 = true;
      this.form.userAcount = row.userAcount;
      this.form.userPwd = row.userPwd;
      this.form.userPhone = row.userPhone;
      this.form.userMail = row.userMail;
      this.form.userType = row.userType;
      this.form.userStatus = row.userStatus;
      this.form._id = row._id;
    },
    async alteruser1() {
      await fetch("/users/alteruser", {
        method: "post",
        body: JSON.stringify({
          userAcount: this.form.userAcount,
          userPwd: this.form.userPwd,
          userPhone: this.form.userPhone,
          userMail: this.form.userMail,
          userType: this.form.userType,
          userStatus: this.form.userStatus,
          _id: this.form._id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.users();
      });
      this.dialogFormVisible1 = false;
    },
  }
};
</script>

<style>

.block {
  background-color: #ccc;
  width: 50%;
  padding: 5px 0;
  margin: 30px auto;
  text-align: center;
  border-radius: 5px;
}
</style>
