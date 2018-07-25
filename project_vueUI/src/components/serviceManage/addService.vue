<template>
<el-form ref="form"  label-width="120px">
  <el-form-item label="服务名称" style="width:340px;">
    <el-input v-model="serviceName"></el-input>
  </el-form-item>
  <el-form-item label="服务类别">
    <el-select v-model="serviceType"  placeholder="请选择服务类别">
        <el-option label="按摩" value="按摩"></el-option>
        <el-option label="护理" value="护理"></el-option>
        <el-option label="洗剪吹" value="洗剪吹"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="排期">
        <el-col :span="6">
            <el-date-picker type="date" v-model="scheduleDate"  placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="6">
            <el-time-picker type="fixed-time" v-model="scheduleTime"  placeholder="选择时间" style="width: 100%;"></el-time-picker>
        </el-col>
  </el-form-item>
    <el-form-item label="适用规格" style="width:340px;">
        <el-input v-model="serviceCanFor"></el-input>
    </el-form-item>
    <el-form-item label="服务规格"  style="width:340px">
        <el-input v-model="serviceDetial"></el-input>
    </el-form-item>
    <el-form-item label="耗时">
        <el-radio-group v-model="serviceTime" >
            <el-radio label="30分钟"></el-radio>
            <el-radio label="1小时"></el-radio>
            <el-radio label="2小时"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="服务员等级">
        <el-radio-group v-model="serviceLevel">
            <el-radio label="普通"></el-radio>
            <el-radio label="高级"></el-radio>
            <el-radio label="贵宾"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="价格"  style="width:340px">
        <el-input v-model="servicePrice"></el-input>
    </el-form-item>
    <el-form-item label="上传图片" >
        <el-upload
        action="/files/upload?type=service"
        list-type="picture-card"
        :on-success="getImgsId">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </el-form-item>
    <el-form-item>
        <el-button @click="async_addService({serviceName,serviceType,scheduleDate,scheduleTime,serviceCanFor,serviceDetial,serviceTime,serviceLevel,servicePrice,serviceImg})" type="primary">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
</el-form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
     data(){
        return{
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
            serviceImg:'',
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        ...mapActions(["async_addService"]),
        getImgsId(response) {
            this.serviceImg=response.imgId;
        }
    }
}
</script>

