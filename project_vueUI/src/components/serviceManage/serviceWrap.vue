<template>
<div>
  <el-input
    placeholder="按名称搜索"
    style="width:230px;marginRight:12px"
    clearable>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button
      size="mini"
      @click="dialogFormVisible = true">修改
    </el-button>
    <el-dialog title="修改服务" :visible.sync="dialogFormVisible">
        <el-form  label-width="120px">
          <el-form-item label="服务名称" style="width:340px;">
            <el-input v-model="service[0].serviceName"></el-input>
          </el-form-item>
          <el-form-item label="服务类别">
            <el-select v-model="service[0].serviceType"  placeholder="请选择服务类别">
                <el-option label="按摩" value="按摩"></el-option>
                <el-option label="护理" value="护理"></el-option>
                <el-option label="洗剪吹" value="洗剪吹"></el-option>
            </el-select>
          </el-form-item>
            <el-form-item label="排期">
                <el-col :span="6">
                    <el-date-picker type="date" v-model="service[0].scheduleDate"  placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="1">-</el-col>
                <el-col :span="6">
                    <el-time-picker type="fixed-time" v-model="service[0].scheduleTime"  placeholder="选择时间" style="width: 100%;"></el-time-picker>
                </el-col>
          </el-form-item>
            <el-form-item label="适用规格" style="width:340px;">
                <el-input v-model="service[0].serviceCanFor"></el-input>
            </el-form-item>
            <el-form-item label="服务规格"  style="width:340px">
                <el-input v-model="service[0].serviceDetial"></el-input>
            </el-form-item>
            <el-form-item label="耗时">
                <el-radio-group v-model="service[0].serviceTime" >
                    <el-radio label="30分钟"></el-radio>
                    <el-radio label="1小时"></el-radio>
                    <el-radio label="2小时"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="服务员等级">
                <el-radio-group v-model="service[0].serviceLevel">
                    <el-radio label="普通"></el-radio>
                    <el-radio label="高级"></el-radio>
                    <el-radio label="贵宾"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="价格"  style="width:340px">
                <el-input v-model="service[0].servicePrice"></el-input>
            </el-form-item>
            <el-form-item label="上传图片" >
                <img style="width:100px" :src="service[0].serviceImg[0].url" alt="">
                <el-upload
                action="/files/xiuImg?type=service"
                list-type="picture-card"
                :on-success="getImgsId">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;async_xiuService(service[0])">修改</el-button>
        </div>
    </el-dialog>
    <el-button size="mini" type="text" icon="el-icon-caret-top">按热度排序</el-button>
    <el-button size="mini" type="text" icon="el-icon-caret-top">按时间排序</el-button>
    <el-table
    :data="rows"
    @selection-change="handleSelectionChange"
    style="width:100%;marginTop:50px">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="营业执照号码">
            <span>{{ props.row._id}}</span>
          </el-form-item>
          <el-form-item label="排期">
            <span>{{ props.row.serviceSchedule}}</span>
          </el-form-item>
          <el-form-item label="适用规格">
            <span>{{ props.row.serviceCanFor}}</span>
          </el-form-item>
          <el-form-item label="服务规格">
            <span>{{ props.row.serviceDetial}}</span>
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
      prop="serviceName">
    </el-table-column>
    <el-table-column
      label="服务类别"
      prop="serviceType">
    </el-table-column>
    <el-table-column
      label="耗时"
      prop="serviceTime">
    </el-table-column>
    <el-table-column
      label="服务员等级"
      prop="serviceLevel">
    </el-table-column>
    <el-table-column
      label="服务价格"
      prop="servicePrice">
    </el-table-column>
    <el-table-column
      label="图片">
      <template slot-scope="scope">
        <div v-for=" (item,index) in scope.row.serviceImg "  :key="index">
          <img style="width:100px" :src='item.url' alt="">
        </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleDelete({servicesId:scope.row._id,imgId:scope.row.serviceImg})">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
      style="float:right;marginTop:20px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[10, 20, 40, 60]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</div>
</template>


<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
  data(){
    return{
      service:[{
        scheduleDate:'',
        scheduleTime:'',
        serviceName:'美美哒',
        serviceType:'护理',
        serviceSchedule:`${this.scheduleDate}+${this.scheduleTime}`,
        serviceCanFor:'成狗',
        serviceDetial:'大',
        serviceTime:'30分钟',
        serviceLevel:'普通',
        servicePrice:'34',
        serviceImg:[{url:''}],
        usersId:'',
      }],
      dialogImageUrl: '',
      dialogVisible: false,
      dialogFormVisible: false,
    }
  },
  created(){
    this.async_getService();
  },

  watch: {
    curPage() {
      this.async_getService();
    },
    eachPage() {
      this.async_getService();
    },
    total() {
      this.async_getService();
    }
  },
  
  computed:{
    ...mapState(["curPage", "eachPage", "maxPage", "total", "rows"])
  },
  methods: {
    ...mapMutations(["handleSizeChange","handleCurrentChange"]),
    ...mapActions(["async_getService","async_handleDelete","async_xiuService","async_findService"]),
    handleDelete({servicesId,imgId}){
      this.async_handleDelete({servicesId,imgId})
      this.async_getService();
    },
    getImgsId(response) {
      this.service[0].serviceImg[0].url=response.url;
    },
    toggleSelection() {
        this.$refs.multipleTable.clearSelection();
    },
    handleSelectionChange(val){
      this.service=val;
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
