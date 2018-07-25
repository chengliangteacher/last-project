<template>
    <div>
   <div style="margin-top: 20px">
  </div>
        <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            style="width: 100%"
            textAlign='center'
            :data='data.shop'
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="shopName"
            label="名称"
            style="textAlign:center"
            width="120">
            </el-table-column>
            <el-table-column
            prop="shopLicenceNum"
            label="营业执照号码"
            width="120">
            </el-table-column>
            <el-table-column
            prop="shopAdd"
            label="营业地址"
            width="120">
            </el-table-column>
               <el-table-column
            prop="shopLicenceImg"
            label="营业执照图片"
            width="120">
             <template slot-scope="scope">
              <img :src="scope.row.shopLicenceImg.url"  style="width:60px" alt="logo">
            </template>
            </el-table-column>
               <el-table-column
            prop="shopLocation"
            label="定位"
            width="120">
            </el-table-column>
               <el-table-column
            prop="shopCorporate"
            label="法人"
            width="120">
            </el-table-column>
               <el-table-column
            prop="shopTel"
            label="联系电话"
            width="120">
            </el-table-column>
            <el-table-column
            prop="shopImg"
            label="头图"
            width="120">
             <template slot-scope="scope">
              <img :src="scope.row.shopImg.url"  style="width:60px" alt="logo">
            </template>
            </el-table-column>
            <el-table-column
            prop="shopFeature"
            label="特色"
            width="120">
            </el-table-column>
        </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="data.curpage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size=10
      layout="total, sizes, prev, pager, next, jumper"
      :total="data.total">
    </el-pagination>
  </div>
    </div>
 
</template>
<script>
import {mapActions,mapState,mapMutations} from 'vuex'
export default {
  methods: {
    //选择框操作
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.changeSize(val)
      this.initshopdataall()
    },
    handleCurrentChange(val) {
      this.changePage(val)
      this.initshopdataall()
    },
    ...mapActions('shops',['initshopdataall']),
    ...mapMutations("shops",["changeSize","changePage"]),
  },
  created(){
      this.initshopdataall()
  },
  computed:{
    ...mapState('shops',['data'])
  }
};
</script>
<<<<<<< HEAD
=======

>>>>>>> 4f2d45f10a24937bad2dda3cdfc13863ea432ea4
