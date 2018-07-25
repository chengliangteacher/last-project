<template>
    <div class="listEl">
        <div class='coming'>
            <span>{{time}} 大兄弟 欢迎您 | 门店管理员</span>
        </div>
        <img src="../../../public/img/3976678470985158471.jpg" class="headerImg" />
        <div class="elList">
            <el-menu router  class="el-menu-vertical-demo" 
                    background-color="#9bca62"
                    text-color="#fff"
                    active-text-color="#4a6f31">
                 <el-menu-item index="/info_Merchants/userWrap">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="/info_Merchants/petWrap">
                    <i class="el-icon-menu"></i>
                    <span slot="title">宠物管理</span>
                </el-menu-item>
                <el-menu-item index="/info_Merchants/merchantsWrap">
                    <i class="el-icon-setting"></i>
                    <span slot="title">门店管理</span>
                </el-menu-item>
                <el-submenu index='1'>
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">商品管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/info_Merchants/addGoods">新增商品</el-menu-item>
                        <el-menu-item index="/info_Merchants/goodsWrap">商品列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index='2'>
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">服务管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/info_Merchants/addService">新增服务</el-menu-item>
                        <el-menu-item index="/info_Merchants/serviceWrap">服务列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/info_Merchants/OrderWrap">
                    <i class="el-icon-bell"></i>
                    <span slot="title">订单管理</span>
                </el-menu-item>
            </el-menu>
        </div>
        <el-card class="box_card"><router-view></router-view></el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            time:new Date().toLocaleString(),
        }
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.el-submenu .el-menu-item{
    min-width: 100px !important;
}
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
  width: 16%;
  float: left;
}

.el-menu-vertical-demo {
  width: 100%;
  height: 500px;
  display: inline-block;
}
.box_card {
  width: 85%;
  margin: 0px auto;
  min-height: 500px;
  float: right;
}
</style>
