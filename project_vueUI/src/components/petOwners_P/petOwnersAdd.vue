<template>
<div class="zong1">
    <h1>新增宠主</h1>
   <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="电话号码">
            <el-input style="width:400px" v-model="formLabelAlign.memberPhone"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
            <el-input  style="width:400px" v-model="formLabelAlign.memberAcount"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
            <el-input  style="width:400px" v-model="formLabelAlign.memberName"></el-input>
        </el-form-item>
        <el-form-item label="会员卡">
            <el-input  style="width:400px" v-model="formLabelAlign.menberCard"></el-input>
        </el-form-item>
        <!-- 添加头像 -->
        <el-form-item label="头图">
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

        <el-form-item label="送货地址">
            <el-input  style="width:400px" v-model="formLabelAlign.memberAdd"></el-input>
        </el-form-item>
        <el-form-item label="区域">
            <el-input  style="width:400px" v-model="formLabelAlign.memberArea"></el-input>
        </el-form-item>
        <el-form-item label="积分">
            <el-input  style="width:400px" v-model="formLabelAlign.memberPoint"></el-input>
       </el-form-item>
       <br>
       <p>已有宠物:</p>
       <ol>
           <li :key="item.id" v-for="(item) in formLabelAlign.pets">{{"名字:"+item.name}}、{{"品类:"+item.class}}、{{"种类:"+item.species}}、{{"颜色:"+item.color}}、{{"出身日期:"+item.days}}、{{"性格:"+item.character}}</li>
       </ol>
       <br>
       <p>添加宠物↓</p>
       <br>
       
        <el-form-item label="宠物名称">
            <el-input  style="width:200px" v-model="formLabelAlign.name"></el-input>
       </el-form-item>
        <el-form-item label="品类">
            <el-input  style="width:200px" v-model="formLabelAlign.class"></el-input>
       </el-form-item>
        <el-form-item label="种类">
            <el-input  style="width:200px" v-model="formLabelAlign.species"></el-input>
       </el-form-item>
        <el-form-item label="颜色">
            <el-input  style="width:200px" v-model="formLabelAlign.color"></el-input>
       </el-form-item>
        <el-form-item label="出身日期">
            <el-input  style="width:200px" v-model="formLabelAlign.days"></el-input>
       </el-form-item>
        <el-form-item label="性格">
            <el-input  style="width:200px" v-model="formLabelAlign.character"></el-input>
       </el-form-item>
       <button @click="addPet">确认添加宠物</button>
       <br /><br /><br />
       <el-button @click="addMembers({
           memberPhone:formLabelAlign.memberPhone,
            memberAcount:formLabelAlign.memberAcount,
             memberName:formLabelAlign.memberName,
            menberCard:formLabelAlign.menberCard,
             memberImg:formLabelAlign.memberImg,
            memberAdd:formLabelAlign.memberAdd,
             memberArea:formLabelAlign.memberArea,
            memberPoint:formLabelAlign.memberPoint,
             pets:formLabelAlign.pets,         
           })" type="primary">提交添加宠主</el-button>
   </el-form>
   
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        memberPhone: "",
        memberAcount: "",
        memberName: "",
        menberCard: "",
        memberImg: {},
        memberAdd: "",
        memberArea: "",
        memberPoint: "",
        name: "",
        class: "",
        species: "",
        color: "",
        days: "",
        character: "",
        pets: []
      },
      dialogImageUrl: "",
      dialogVisible: false,
      actions: `/imgs/addMembersImg?type=member0`,
      member0:"",
      member1:""
    };
  },
  methods: {
    ...mapActions("petOwners_P", ["async_addMembers",]),

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    success(res) {   
      this.formLabelAlign.memberImg = res;
    },
   

    addMembers(i){
       this.async_addMembers(i)
       this.formLabelAlign.memberPhone = "";
      this.formLabelAlign.memberAcount = "";
      this.formLabelAlign.memberName = "";
      this.formLabelAlign.menberCard = "";
      this.formLabelAlign.memberImg = "";
      this.formLabelAlign.memberAdd = "";
      this.formLabelAlign.memberArea = "";
      this.formLabelAlign.memberPoint = "";
      this.$router.push("/info_Platform/petOwnersWrap_P");
       this.$store.dispatch("petOwners_P/async_getMembersByPage");
      
    },


    addPet() {
      this.formLabelAlign.pets.push({
        name: this.formLabelAlign.name,
        class: this.formLabelAlign.class,
        species: this.formLabelAlign.species,
        color: this.formLabelAlign.color,
        days: this.formLabelAlign.days,
        character: this.formLabelAlign.character
      });
      this.formLabelAlign.name = "";
      this.formLabelAlign.class = "";
      this.formLabelAlign.species = "";
      this.formLabelAlign.color = "";
      this.formLabelAlign.days = "";
      this.formLabelAlign.character = "";
    },

  },
  
};
</script>
<style>
.zong1 {
  font-size: 14px;
  color: #606266;
  line-height: 25px;
}
</style>


