<template>
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
            <el-table-column
            prop="type"
            label="店铺状态"
            width="120">
            </el-table-column>
           <el-table-column
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button
                type="text"
                size="small"
                    @click="arrgment(scope.row._id)"
                >
                同意
                </el-button>
                <el-button
               @click="deletype(scope.row._id)"
                type="text"
                size="small">
                拒绝
                </el-button>
             </template>
    </el-table-column>
        </el-table>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        shopImg: {
          url: ""
        },
        shopLicenceImg: {
          url: ""
        }
      }
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
    arrgment(_id){
      fetch("/shops/modefiytype", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id,
        })
      }).then(res => {
          this.initshopdata({type:'申请中'})
      })
    },
    deletype(_id){
        const arr=[]
        arr.push(_id)
      fetch("/shops/deleteshops", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id:arr
        })
      }).then(res => {
          arr.length=0
          this.initshopdata({type:'申请中'})
      })
    },
    deleteSelection() {
      const arr = this.multipleSelection.map(({ _id }) => {
        return _id;
      });
      this.deleteshops(arr);
      this.initshopdata({type:'申请中'});
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      if (val[0]) {
        this.form = val[0];
      }
    },
    handleSizeChange(val) {
      this.changeSize(val);
      this.initshopdata({type:'申请中'});
    },
    handleCurrentChange(val) {
      this.changePage(val);
      this.initshopdata({type:'申请中'});
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
  },
  created() {
    this.initshopdata({type:'申请中'});
  },
  computed: {
    ...mapState("shops", ["data"])
  }
};
</script>

