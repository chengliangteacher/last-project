<template>
    <div class="listEl">
        <div class='coming'>
            <span>{{time}} {{username}} 欢迎您 | 门店管理员</span>
        </div>
        <img src="../../../public/img/3976678470985158471.png" class="headerImg" />
        <div class="elList">
            <el-menu router  class="el-menu-vertical-demo"
                            background-color="rgba(190, 152, 110, 0.6)"
                            text-color="#fff"
                            active-text-color="#4a6f31">
                 <el-menu-item index="/info_Platform/messageWrap_P">
                    <i class="el-icon-message"></i>
                        <el-badge :value="data.total||0" class="item">
                           <el-button type='text' size="small" style="color:white;font-size:15px;margin-top:-20px">消息提示</el-button>
                        </el-badge>
                </el-menu-item>
                <el-menu-item index="/info_Platform/merchantsWrap_P">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">门店管理</span>
                </el-menu-item>
                <el-menu-item index="/info_Platform/petOwnersWrap_P">
                    <i class="el-icon-menu"></i>
                    <span slot="title">宠主管理</span>
                </el-menu-item>
                <el-menu-item index="/info_Platform/goodsWrap_P">
                    <i class="el-icon-goods"></i>
                    <span slot="title">商品管理</span>
                </el-menu-item>
            </el-menu>
        </div>
        <el-card class="box_card" style=" background: rgba(241, 241, 241, 0.5);min-height:900px"><router-view></router-view></el-card>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data() {
    return {
      time: new Date().toLocaleString(),
      username:'',
      count:'',
    }
  },
  created(){
    this.username=localStorage.username||'程亮'
    this.$store.dispatch('shops/initshopdata',{type:'申请中'})
  },
  methods:{
    ...mapActions('shops',['initshopdata']),
  },
  computed:{
    ...mapState('shops',['data'])
  }
};
</script>


<style>
.coming {
  position: absolute;
  right: 30px;
  top: 80px;
  color: #fff;
  font-size: 14px;
}
.headerImg {
  width: 100%;
  height: 120px;
  margin: 0;
}
.listEl {
  width: 100%;
}
.elList {
  width: 14%;
  float: left;
}

.el-menu-vertical-demo {
  width: 100%;
  height: 900px;
  display: inline-block;
}
.box_card {
  width: 85%;
  margin: 0px auto;
  min-height: 500px;
  float: right;
}
.item {
  margin-top:13px;
  margin-right: 40px;
}
</style>
