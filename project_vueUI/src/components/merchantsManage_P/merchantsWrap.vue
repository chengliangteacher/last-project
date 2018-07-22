<template>
    <div>
   <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button @click="deleteSelection()">删除</el-button>
    <el-button @click="modefiySelection()">修改</el-button>
    <!-- <el-button @click="modefiySelection()">创建门店</el-button> -->
    <el-button  @click="dialogFormVisible = true">创建门店</el-button>
    <el-dialog title="申请门店" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.shopName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码" :label-width="formLabelWidth">
          <el-input v-model="form.shopLicenceNum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业地址" :label-width="formLabelWidth">
          <el-input v-model="form.shopAdd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业执照图" :label-width="formLabelWidth">
          <el-upload
            action="/imgs/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="定位" :label-width="formLabelWidth">
          <el-select v-model="form.shopLocation" placeholder="请选择位置">
            <el-option label="成都" value="chengdu"></el-option>
            <el-option label="重庆" value="chongqing"></el-option>
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="上海" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="法人名称" :label-width="formLabelWidth">
          <el-input v-model="form.shopCorporate" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.shopTel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="头图" :label-width="formLabelWidth">
          <el-upload
            action="/imgs/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="特色" :label-width="formLabelWidth">
          <el-input v-model="form.shopFeature" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
  </el-dialog>
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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
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
    deleteSelection() {
      console.log(this.multipleSelection[0]._id);
    },
    modefiySelection(rows) {
      console.log(rows);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    ...mapActions("shops", ["initshopdata"]),
      handleRemove(file, fileList) {
      console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      }
  },
  created() {
    this.initshopdata();
  },
  computed: {
    ...mapState("shops", ["data"])
  }


};
</script>

