<template>
    <div class="listEl">
        <div class='coming'>
            <span>{{time}} {{username}} 欢迎您 | 门店管理员</span>
        </div>
        <img src="../../../public/img/3976678470985158471.jpg" class="headerImg" />
        <div class="elList">
            <el-menu router  class="el-menu-vertical-demo"
                            background-color="#9bca62"
                            text-color="#fff"
                            active-text-color="#4a6f31">
                 <el-menu-item index="/info_Platform/messageWrap_P">
                    <i class="el-icon-message"></i>
                    <span slot="title">消息提示</span>
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
        <el-card class="box_card"><router-view></router-view></el-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time: new Date().toLocaleString(),
      username:''
    }
  },
  created(){
     this.username=localStorage.username='程亮'
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
  height: 1100px;
  display: inline-block;
}
.box_card {
  width: 85%;
  margin: 0px auto;
  min-height: 500px;
  float: right;
}
</style>
