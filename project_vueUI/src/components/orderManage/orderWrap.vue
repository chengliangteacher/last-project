 <template>
 
<div>
   <div style="margin-top: 20px">
    <el-button @click="toggleSelection1">删除</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button @click="orderWrapUpdate">添加</el-button>
  </div>
  <el-table
    ref="multipleTable"
    :data="state0.rows"
    style="width: 100%"
     @select-all="handleSelectionChange"
     @selection-change='handleSizeChangeone'
     >
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.goodId.goodsName}}</span>
          </el-form-item>
          <el-form-item label="购买商店">
            <span>{{ props.row.shopId.shopName }}</span>
          </el-form-item>
          <el-form-item label="购买">
            <span>{{ props.row.memberId.memberName }}</span>
          </el-form-item>
          <el-form-item label="付款状态">
            <span>{{ props.row.aymentstatus }}</span>
          </el-form-item>
          <el-form-item label="发货状态">
            <span>{{ props.row.deliveryStatus }}</span>
          </el-form-item>
          <el-form-item label="订单编号">
            <span>{{ props.row._id }}</span>
          </el-form-item>
          <el-form-item label="购买数量 ">
            <span>{{ props.row.count }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单编号"
      prop="_id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="goodId.goodsName">
    </el-table-column>
    <el-table-column
      label="付款状态"
      prop="aymentstatus">
    </el-table-column>
    <el-table-column
      label="发货状态"
      prop="deliveryStatus">
    </el-table-column>
  </el-table>
   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size=2
      layout="total, sizes, prev, pager, next, jumper"
      :total="state0.count">
    </el-pagination>
  </div>
  <div>
    <el-dialog title="添加订单" :visible.sync="dialogFormVisible">
    <el-form :model="form">
    <el-form-item label="店铺" :label-width="formLabelWidth">
      <el-select v-model="form.shopId" placeholder="请选择店铺">
        <el-option :value="item._id" v-for="(item) in state1" :key="item._id" >{{item.shopName}}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="宠主" :label-width="formLabelWidth">
      <el-select v-model="form.memberId" placeholder="请选择宠主" >
        <el-option  :value="item._id" v-for="(item) in state3" :key="item._id">{{item.memberName}}</el-option>
      </el-select>
    </el-form-item>
        <el-form-item label="商品" :label-width="formLabelWidth">
      <el-select v-model="form.goodId" placeholder="请选择商品" class="fsdfsd">
        <el-option :value="item._id" v-for="(item) in state2" class="afsdf" :key="item._id">{{item.goodsName}}</el-option>
      </el-select>
    </el-form-item>
        <el-form-item label="服务" :label-width="formLabelWidth">
      <el-select v-model="form.serviceId" placeholder="请选择服务">
        <el-option :value="item._id" v-for="(item) in state4" :key="item._id" >{{item.serviceName}}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发货状态" :label-width="formLabelWidth">
       <el-select v-model="form.deliveryStatus" placeholder="请选择发货状态">
         <el-option :value='item' v-for="(item,index) in ['已发货','未发货']" :key="index" >{{item}}</el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="付款状态" :label-width="formLabelWidth">
       <el-select v-model="form.aymentstatus" placeholder="请选择付款状态">
        <el-option :value='item' v-for="(item,index) in ['已付款','未付款']" :key="index" >{{item}}</el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="购买数量" :label-width="formLabelWidth">
      <el-input-number v-model="form.count"  :min="1"></el-input-number>
    </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
    <el-button @click="cancelUpate">取 消</el-button>
    <el-button type="primary" @click="addUpdate">确 定</el-button>
  </div>
     </el-dialog>
  </div>
  
   
</div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  created() {
    this.$store.dispatch("orderWrap/async_getEmpsByPage");
  },

  computed: {
    ...mapState("orderWrap", ["state1", "state2", "state3", "state4", "state0"])
  },

  multipleSelection: [],
  data() {
    return {
      form: {
        shopId: "",
        memberId: "",
        goodId: "",
        deliveryStatus: "",
        aymentstatus: "",
        count:1,
        serviceId: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      arr:[],
    }
  },
  methods: {
    ...mapActions("orderWrap", [
      "async_addEmpsByPage",
      "async_shopsEmpsByPage",
      "async_goodsEmpsByPage",
      "async_membersEmpsByPage",
      "async_servicesEmpsByPage",
      "async_deleteOrderWrap",
       'async_getEmpsByPage'
    ]),
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
      this.async_deleteOrderWrap(this.arr)
      this.async_getEmpsByPage()
    },

    handleSelectionChange(val) {
      this.arr=val.map(({_id})=>{
        return _id
      })
    },
    handleSizeChangeone(val){
      this.arr=val.map(item=>{
        return item._id
      })
    },
    handleSizeChange(val) {
       this.changeSize(val);
       this.async_getEmpsByPage()
    },
    handleCurrentChange(val) {
       this.changePage(val);
       this.async_getEmpsByPage()
    },
    cancelUpate() {
      this.dialogFormVisible = false;
    },
    addUpdate() {
      this.async_addEmpsByPage(this.form);
      this.async_getEmpsByPage()
      this.dialogFormVisible = false;
    },
    orderWrapUpdate() {
      this.async_shopsEmpsByPage();
      this.async_goodsEmpsByPage();
      this.async_membersEmpsByPage();
      this.async_servicesEmpsByPage();
      this.dialogFormVisible = true;
      this.form.shopId="";
      this.form.memberId="";
      this.form.goodId="";
      this.form.serviceId="";
      this.form.deliveryStatus="";
      this.form.aymentstatus="";
      this.form.count=1;
    },
    ...mapMutations("orderWrap", [
      "changeSize",
      "changePage"
    ])
  }
};
</script>
