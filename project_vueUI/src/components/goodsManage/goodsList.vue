<template>
<div>
    <el-input
    placeholder="按名称搜索"
    style="width:230px;marginRight:12px"
    clearable>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button size="mini" type="text" icon="el-icon-caret-top">按热度排序</el-button>
    <el-button size="mini" type="text" icon="el-icon-caret-top">按时间排序</el-button>
    <el-table
    :data="tableData5"
    style="width: 100%;marginTop:50px">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="品类">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="材质或制作方法">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="适用规格">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="专属规格">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="包装规格">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="口味">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="特殊功用">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="产地">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="出厂日期">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="保质期">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="供应商">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="特色说明">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="价格">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="图片">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品品类"
      prop="name">
    </el-table-column>
    <el-table-column
      label="材质或制作方法"
      prop="desc">
    </el-table-column>
        <el-table-column
      label="适用规格"
      prop="shopId">
    </el-table-column>
        <el-table-column
      label="专属规格"
      prop="category">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="dialogFormVisible = true">修改</el-button>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <el-form>
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select placeholder="请选择活动区域">
                        <el-option label="区域一"></el-option>
                        <el-option label="区域二"></el-option>
                    </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        <el-button
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
      style="float:right;marginTop:20px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
</div>
</template>


<script>
export default {
  data() {
    return {
      tableData5: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ],
      dialogFormVisible: false
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>


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
