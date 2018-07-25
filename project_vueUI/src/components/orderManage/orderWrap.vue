 <template>
<div>
  <el-table
    ref="multipleTable"
    :data="rows"
    style="width: 100%"
     @selection-change="handleSelectionChange">
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.good }}</span>
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
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="1">
    </el-pagination>
  </div>
   <div style="margin-top: 20px">
    <el-button @click="toggleSelection1()">删除</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
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
  multipleSelection: [],
  data() {
    return {
      rows: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    toggleSelection1() {
      console.log("1");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
