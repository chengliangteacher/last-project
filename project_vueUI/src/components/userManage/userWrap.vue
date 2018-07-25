<template>
  <div>
    <div style="margin:10px 0; width:350px">
      <el-button 
        style="marginLeft:10px"
        type="primary"
        @click="adduser()">
        增加用户
      </el-button>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
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
          <el-button @click="handleClick()" type="text" size="small">修改</el-button>
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

      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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

    async adduser(users) {
      // this.$alert(
      //   `
      //   <input style="height:30px; width:90%; padding-left:10px; margin-bottom:25px" v-model="userAcount" placeholder="用户名"></input>
      //   <input style="height:30px; width:90%; padding-left:10px; margin-bottom:25px" v-model="userPwd" placeholder="密码"></input>
      //   <input style="height:30px; width:90%; padding-left:10px; margin-bottom:25px" v-model="userPhone" placeholder="电话号码"></input>
      //   <input style="height:30px; width:90%; padding-left:10px; margin-bottom:25px" v-model="userMail" placeholder="邮箱"></input>
      //   <input style="height:30px; width:90%; padding-left:10px; margin-bottom:25px" v-model="userType" placeholder="用户类型"></input>
      //   <input style="height:30px; width:90%; padding-left:10px; margin-bottom:25px" v-model="userStatus" placeholder="用户状态"></input>
      //   `, '增加用户', {
      //     dangerouslyUseHTMLString: true
      //   });

      await fetch("/users/adduser", {
        method: "post",
        body: JSON.stringify({

        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.users();
      });
      Console.log(users);
    },

    handleSizeChange(val) {
      this.eachPage = val;
      this.users();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.curPage = val;
      this.users();
      // console.log(`当前页: ${val}`);
    }
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
