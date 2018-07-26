<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> adf384a1684bca571e73f185156ff166ff82371f
>>>>>>> 4f2d45f10a24937bad2dda3cdfc13863ea432ea4
>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c
<template>
    <div>
   <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button @click="deleteSelection()">删除</el-button>
    <el-button  @click="modefiySelect = true">修改</el-button>
    <el-button  @click="dialogFormVisible = true">创建门店</el-button>
    <el-dialog title="申请门店" :fullscreen='true' :visible.sync="dialogFormVisible">
      <el-form :model="modefiyForm" >
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="modefiyForm.shopName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码" :label-width="formLabelWidth">
          <el-input v-model="modefiyForm.shopLicenceNum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业地址" :label-width="formLabelWidth">
          <el-input v-model="modefiyForm.shopAdd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业执照图" :label-width="formLabelWidth">
          <el-upload
            :action="actions"
            :on-success="success"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="定位" :label-width="formLabelWidth">
          <el-select v-model="modefiyForm.shopLocation" placeholder="请选择位置">
            <el-option label="成都" value="chengdu"></el-option>
            <el-option label="重庆" value="chongqing"></el-option>
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="上海" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="法人名称" :label-width="formLabelWidth">
          <el-input v-model="modefiyForm.shopCorporate" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="modefiyForm.shopTel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="头图" :label-width="formLabelWidth">
          <el-upload
            action="/imgs/upload?type=shop1"
            :on-success="successheader"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview">            
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="特色" :label-width="formLabelWidth">
          <el-input v-model="modefiyForm.shopFeature" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="open4">立即创建</el-button>
        <el-button type="primary" @click="dialogFormVisible=false" >返回至列表</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改" :visible.sync="modefiySelect">
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
          <img :src="form.shopLicenceImg.url" style="width:350px" alt="">
          <el-upload
            :action="actions"
            :on-success="success"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview">
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
          <img :src="form.shopImg.url" style="width:350px" alt="">
          <el-upload
            action="/imgs/upload?type=shop1"
            list-type="picture-card"
            :on-success="successheader"
            :on-preview="handlePictureCardPreview">
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
        <el-button @click="open5">确定修改</el-button>
        <el-button type="primary" @click="modefiySelect=false" >返回至列表</el-button>
      </div>
    </el-dialog>
  </div>
        <el-table
            ref="multipleTable"
            :stripe="true"
            :highlight-current-row ='true'
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
            label="头图"
            width="120"
            >
            <template slot-scope="scope">
              <img :src="scope.row.shopImg.url" style="width:60px" alt="logo">
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
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      modefiySelect: false,
      form: {
        shopImg: {
          url: ""
        },
        shopLicenceImg: {
          url: ""
        }
      },
      modefiyForm: {},
      formLabelWidth: "120px",
      dialogImageUrl: "",
      dialogVisible: false,
      actions: `/imgs/upload?type=shop0`,
      shop0: "",
      shop1: ""
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
      const arr = this.multipleSelection.map(({ _id }) => {
        return _id;
      });
      this.deleteshops(arr);
      this.initshopdata();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      if (val[0]) {
        this.form = val[0];
      }
    },
    handleSizeChange(val) {
      this.changeSize(val);
      this.initshopdata();
    },
    handleCurrentChange(val) {
      this.changePage(val);
      this.initshopdata();
    },
    ...mapActions("shops", ["initshopdata", "deleteshops"]),
    ...mapMutations("shops", ["changeSize", "changePage"]),
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    success(res) {
      this.shop0 = res;
    },
    successheader(res) {
      this.shop1 = res;
    },
    open4() {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h("p", null, [h("span", null, "正在添加进库")]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "adding...";
            fetch("/shops/addshops", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                data: {
                  ...this.modefiyForm,
                  usersId: localStorage.usersId
                },
                shopLicenceImg: this.shop0,
                shopImg: this.shop1
              })
            }).then(res => {
              instance.confirmButtonLoading = false;
              this.shop0 = "";
              this.shop1 = "";
              this.modefiyForm = {};
              done();
              this.initshopdata();
              return res.json();
            });
          } else {
            done();
          }
        }
      }).then(() => {
        this.$message({
          type: "info",
          message: "添加成功"
        });
      });
    },
    open5() {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h("p", null, [h("span", null, "正在修改中")]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "modefiy...";
            fetch("/shops/modefiyshops", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                data: this.form,
                shopLicenceImg: this.shop0,
                shopImg: this.shop1
              })
            }).then(res => {
              instance.confirmButtonLoading = false;
              this.shop0 = "";
              this.shop1 = "";
              done();
              this.initshopdata();
              return res.json();
            });
          } else {
            done();
          }
        }
      }).then(() => {
        this.$message({
          type: "info",
          message: "修改成功"
        });
      });
    }
  },
  created() {
    localStorage.usersId = "5b560a7e4dd9ed575822702e";
    this.initshopdata();
  },
  computed: {
    ...mapState("shops", ["data"])
  }
};
</script>
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> adf384a1684bca571e73f185156ff166ff82371f
>>>>>>> 4f2d45f10a24937bad2dda3cdfc13863ea432ea4
>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c
