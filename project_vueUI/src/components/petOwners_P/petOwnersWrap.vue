<template>
 <div class="container1">
  <el-menu router>
          <el-menu-item index="/info_Platform/petOwnersAdd_P">
            <span slot="title">点击添加宠主</span>
        </el-menu-item>             
  </el-menu>

    <el-table
      :data="rows"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="会员卡">
              <span>{{ props.row.menberCard }}</span>
            </el-form-item>
            <el-form-item label="头图">
              <!-- <span>{{props.row.memberImg}}</span> -->
              <img src="" alt="图片">
            </el-form-item>
            <el-form-item label="送货地址">
              <span>{{ props.row.memberAdd }}</span>
            </el-form-item>
            <el-form-item label="区域">
              <span>{{ props.row.memberArea }}</span>
            </el-form-item>
            <el-form-item label="积分">
              <span>{{props.row.memberPoint}}</span>
            </el-form-item>
            <el-form-item label="拥有的宠物">
              <ol>
              <li :key="item._id" v-for="(item) in props.row.pets">{{"名字 ："+item.name }};  {{"品类 ："+item.class }}; {{"种类 ："+item.species }};  {{"颜色 ："+item.color }};  {{"出身年月 ："+item.days }}；{{"性格 ："+item.character}}</li>
              </ol>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="用户电话"
        prop="memberPhone">
      </el-table-column>
      <el-table-column
        label="昵称"
        prop="memberAcount">
      </el-table-column>
      <el-table-column
        label="用户姓名"
        prop="memberName">
      </el-table-column>
      <el-table-column
        label="操作"
        prop="operation">

    <template slot-scope="scope">
          <el-button
            size="mini"
           @click="handleUpdate(scope.row)">修改</el-button>
          <el-button
            size="mini"
            type="danger"
           @click="handleDelete(scope.row)">删除</el-button>
    </template>

      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="eachPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count">
      </el-pagination>
    </div>
    <div id="flexOut" class="flexOut displayNone">
      <el-input style="width:200px" v-model="count" placeholder="请输入内容"></el-input>
    </div>
<!-- 弹框 -->
    <el-dialog title="修改宠主信息"  :visible.sync="dialogFormVisible" :before-close="handleClose">
      <el-form :model="form">
        <el-form-item label="用户电话" :label-width="formLabelWidth">
          <el-input v-model="form.memberPhone" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.memberAcount" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名" :label-width="formLabelWidth">
          <el-input v-model="form.memberName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员卡" :label-width="formLabelWidth">
          <el-input v-model="form.menberCard" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="头图" :label-width="formLabelWidth">
          <el-input v-model="form.memberImg" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="送货地址" :label-width="formLabelWidth">
          <el-input v-model="form.memberAdd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="区域" :label-width="formLabelWidth">
          <el-input v-model="form.memberArea" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="积分" :label-width="formLabelWidth">
          <el-input v-model="form.memberPoint" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="宠物" :label-width="formLabelWidth">
           <el-select v-model="form.value" @change="changePet(form.value)" placeholder="请选择">
              <el-option
                v-for="item in form.pets"
                :key="item.value"
                :label="item.name"
                :value="item.name">
              </el-option>
           </el-select>
        </el-form-item>
        <el-form-item label="名字" label-width="120px">
          <el-input v-model="form.petOne.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="品类" label-width="120px">
          <el-input v-model="form.petOne.class" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="种类" label-width="120px">
          <el-input v-model="form.petOne.species" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="颜色" label-width="120px">
          <el-input v-model="form.petOne.color" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="出身年月" label-width="120px">
          <el-input v-model="form.petOne.days" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性格" label-width="120px">
          <el-input v-model="form.petOne.character" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure">确认修改</el-button>
      </div>
  </el-dialog>

 </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch("petOwners_P/async_getMembersByPage");
  },
  watch: {
    // rows(){
    //   console.log(this.rows)
    // },
    curPage() {
      this.$store.dispatch("petOwners_P/async_getMembersByPage");
    },
    eachPage() {
      this.$store.dispatch("petOwners_P/async_getMembersByPage");
    },
    count() {
      this.$store.dispatch("petOwners_P/async_getMembersByPage");
    }
  },

  computed: {
    ...mapState("petOwners_P", [
      "rows",
      "curPage",
      "eachPage",
      "maxPage",
      "count"
    ])
  },
  methods: {
    ...mapActions("petOwners_P", ["async_removeMembers", "async_xiuMembers","async_getMembersByPage"]),
    ...mapMutations("petOwners_P", [
      "firstBtn",
      "preBtn",
      "nextBtn",
      "lastBtn",
      "handleSizeChange",
      "handleCurrentChange"
    ]),
    handleClose() {
      this.form.value = "";
      this.form.petOne = "";
      this.form.indexing="";
      this.form._id="";
      this.dialogFormVisible = false;
    },
    cancel() {
      this.form.value = "";
      this.form.petOne = "";
      this.form.indexing="";
      this.form._id="";
      this.dialogFormVisible = false;
    },
    sure() {
      this.form.pets.map((item, index) => {
        if (index == this.form.indexing) {
          item = this.form.petOne;
        }
      });
      this.async_xiuMembers({
        _id: this.form._id,
        memberPhone: this.form.memberPhone,
        memberAcount: this.form.memberAcount,
        memberName: this.form.memberName,
        menberCard: this.form.menberCard,
        memberImg: this.form.memberImg,
        memberAdd: this.form.memberArea,
        memberArea: this.form.memberPoint,
        memberPoint: this.form.memberPoint,
        pets: this.form.pets
      });
      this.form.value = "";
      this.form.petOne = "";
      this.form.indexing = "";
      this.form._id="";
     this.async_getMembersByPage()
      this.dialogFormVisible = false;
    },
    changePet(value) {
      this.form.pets.forEach((item, index) => {
        if (item.name == value) {
          this.form.indexing = index;
          this.form.petOne = item;
        }
      });
    },
    handleDelete(row) {
      this.async_removeMembers(row._id);
      this.$store.dispatch("petOwners_P/async_getMembersByPage");
    },
    handleUpdate(row) {
      this.form.memberPhone = row.memberPhone;
      this.form.memberAcount = row.memberAcount;
      this.form.memberName = row.memberName;
      this.form.menberCard = row.menberCard;
      this.form.memberImg = row.memberImg;
      this.form.memberAdd = row.memberAdd;
      this.form.memberArea = row.memberArea;
      this.form.memberPoint = row.memberPoint;
      this.form.pets = row.pets;
      this.form._id = row._id;
      this.dialogFormVisible = true;
    }
  },

  data() {
    return {
      dialogFormVisible: false,
      form: {
        memberPhone: "",
        memberAcount: "",
        memberName: "",
        menberCard: "",
        memberImg: "",
        memberAdd: "",
        memberArea: "",
        memberPoint: "",
        name: "",
        class: "",
        species: "",
        color: "",
        days: "",
        character: "",
        pets: [],
        value: "",
        petOne: "",
        indexing: "",
        _id:""
      },
      formLabelWidth: "120px"
    };
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
.container1 {
  position: relative;
}
.flexOut {
  width: 100%;
  height: 100%;
  background-color: rgb(243, 245, 249);
  opacity: 0.9;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.displayNone {
  display: none;
}
</style>
