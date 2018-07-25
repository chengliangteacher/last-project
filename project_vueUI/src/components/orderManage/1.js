// var arr = []
// arr.push({
//     id: "_id",
//     goodId: "goods",
//     memberId: "members",
//     shopId: "shops",
//     serviceId: "services",
//     aymentstatus: "已付款",
//     count: "10",
//     deliveryStatus: "已发货",
// })
// db.emps.insert(arr);



var arr = []
arr.push({
  shops: "红旗连锁",
},
  {
    shops: "蓝旗连锁",
  })
db.emps.insert(arr);


// <template>
// <div>
//     <el-table
//     ref="multipleTable"
//     :data="tableData3"
//     tooltip-effect="dark"
//     style="width: 100%"
//     @selection-change="handleSelectionChange">
//     <el-table-column
//         type="expand"
//     >
//     </el-table-column>    
//     <el-table-column
//       type="selection"
//       width="55">
//     </el-table-column>
//     <el-table-column
//       label="订单编号"
//       width="120">
//       <template slot-scope="scope">{{ _id }}</template>
//     </el-table-column>
//     <el-table-column
//       prop="name"
//       label="商品名称"
//       width="120">
//     </el-table-column>
//     <el-table-column
//       prop="address"
//       label="付款状态"
//       show-overflow-tooltip>
//     </el-table-column>
//     <el-table-column
//       prop="address"
//       label="发货状态"
//       show-overflow-tooltip>
//     </el-table-column>



//   </el-table>
//    <div class="block">
//     <el-pagination
//       @size-change="handleSizeChange"
//       @current-change="handleCurrentChange"
//       :page-sizes="[100, 200, 300, 400]"
//       :page-size="100"
//       layout="total, sizes, prev, pager, next, jumper"
//       :total="400">
//     </el-pagination>
//   </div>
// </div>


// </template>

// <script>
// export default {
//   data() {
//     return {
//       tableData3: [
//         {
//           date: 1,
//           name: "王小虎",
//           address: "上海市普陀区金沙江路 1518 弄"
//         },
//         {
//           name: "王小虎",
//           address: "上海市普陀区金沙江路 1518 弄"
//         },
//         {
//           name: "王小虎",
//           address: "上海市普陀区金沙江路 1518 弄"
//         },
//         {
//           name: "王小虎",
//           address: "上海市普陀区金沙江路 1518 弄"
//         },
//         {
//           name: "王小虎",
//           address: "上海市普陀区金沙江路 1518 弄"
//         },
//         {
//           name: "王小虎",
//           address: "上海市普陀区金沙江路 1518 弄"
//         },
//         {
//           name: "王小虎",
//           address: "上海市普陀区金沙江路 1518 弄"
//         }
//       ],
//       multipleSelection: []
//     };
//   },

//   methods: {
//     toggleSelection(rows) {
//       if (rows) {
//         rows.forEach(row => {
//           this.$refs.multipleTable.toggleRowSelection(row);
//         });
//       } else {
//         this.$refs.multipleTable.clearSelection();
//       }
//     },
//     handleSelectionChange(val) {
//       this.multipleSelection = val;
//     },
//       handleSizeChange(val) {
//         console.log(`每页 ${val} 条`);
//       },
//       handleCurrentChange(val) {
//         console.log(`当前页: ${val}`);
//       }
//   }
// };
// </script>


// export default {
//     data() {
//       return {
//         tableData5: [{
//           id: '12987122',
//           name: '短毛猫',
//           category: '江浙小吃、小吃零食',
//           desc: '荷兰优质淡奶，奶香浓而不腻',
//           address: '上海市普陀区真北路',
//           shop: '王小虎夫妻店',
//           shopId: '10333'
//         }, {
//           id: '12987123',
//           name: '好滋好味鸡蛋仔',
//           category: '江浙小吃、小吃零食',
//           desc: '荷兰优质淡奶，奶香浓而不腻',
//           address: '上海市普陀区真北路',
//           shop: '王小虎夫妻店',
//           shopId: '10333'
//         }, {
//           id: '12987125',
//           name: '好滋好味鸡蛋仔',
//           category: '江浙小吃、小吃零食',
//           desc: '荷兰优质淡奶，奶香浓而不腻',
//           address: '上海市普陀区真北路',
//           shop: '王小虎夫妻店',
//           shopId: '10333'
//         }, {
//           id: '12987126',
//           name: '好滋好味鸡蛋仔',
//           category: '江浙小吃、小吃零食',
//           desc: '荷兰优质淡奶，奶香浓而不腻',
//           address: '上海市普陀区真北路',
//           shop: '王小虎夫妻店',
//           shopId: '10333'
//         }]
//       }
//     }
//   }




{/* <template>
<div>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="购买商店">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="购买客服">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="付款状态">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="发货状态">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="订单编号">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="购买数量 ">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单编号"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="付款状态"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="发货状态"
      prop="desc">
    </el-table-column>
  </el-table>
   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      curPage: 1,
      eachPage: 10,
      maxPage: 0,
      count: 0,
      rows: []
    };
  },
    watch: {
    curPage() {
      this.$store.dispatch("getEmps/async_getEmpsByPage");
    },
    eachPage() {
      this.$store.dispatch("getEmps/async_getEmpsByPage");
    }
  },
  computed: {
    ...mapState("getEmps", ["rows", "curPage", "eachPage", "maxPage", "count"]),
  },
  methods: {
    ...mapMutations("getEmps", ["firstBtn", "preBtn", "nextBtn", "lastBtn",'handleSizeChange','handleCurrentChange']),    
    async getEmpsByPage() {
      const data = await fetch("/orderWrap/getEmpsByPage", {
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
    firstBtn() {
      this.curPage = 1;
      // this.getEmpsByPage();
    },
    preBtn() {
      if (this.curPage <= 1) {
        this.curPage = 1;
      } else {
        this.curPage--;
      }
      // this.getEmpsByPage();
    },
    nextBtn() {
      if (this.curPage < this.maxPage) {
        this.curPage++;
      } else {
        this.curPage = this.maxPage;
      }
      // this.getEmpsByPage();
    },
    lastBtn() {
      this.curPage = this.maxPage;
    },
  }
};
</script> */}