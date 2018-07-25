<template>
<el-form  label-width="120px">
  <el-form-item label="商品名称" style="width:340px;">
    <el-input v-model="goodsName" ></el-input>
  </el-form-item>
  <el-form-item label="商品品类">
    <el-select v-model="goodsType" placeholder="请选择商品品类">
        <el-option label="狗粮" value="狗粮"></el-option>
        <el-option label="猫粮" value="猫粮"></el-option>
        <el-option label="猫砂" value="猫砂"></el-option>
        <el-option label="玩具" value="玩具"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="材质或制作方法">
    <el-select v-model="goodsMaterial"  placeholder="请选择商品材质"  style="marginRight:20px">
        <el-option label="狗粮" value="狗粮"></el-option>
        <el-option label="猫粮" value="猫粮"></el-option>
        <el-option label="猫砂" value="猫砂"></el-option>
        <el-option label="玩具" value="玩具"></el-option>
    </el-select>
    <el-select v-model="goodsMath" placeholder="请选择商品制作方法">
        <el-option label="烘培" value="烘培"></el-option>
        <el-option label="膨化" value="膨化"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="适用规格" style="width:340px;">
        <el-input v-model="goodsCanFor"></el-input>
    </el-form-item>
    <el-form-item label="专属规格" style="width:340px;">
        <el-input v-model="goodsOnlyFor"></el-input>
    </el-form-item>
    <el-form-item label="包装规格">
        <el-radio-group v-model="goodsSize">
            <el-radio label="500g"></el-radio>
            <el-radio label="1kg"></el-radio>
            <el-radio label="5kg"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="口味" style="width:340px;">
        <el-input v-model="goodsTaste"></el-input>
    </el-form-item>
    <el-form-item label="特殊功用" style="width:340px;">
        <el-input v-model="goodsSpecial"></el-input>
    </el-form-item>
    <el-form-item label="产地" style="width:340px;">
        <el-input v-model="goodsRegion"></el-input>
    </el-form-item>
    <el-form-item label="出厂日期">
        <el-col :span="11">
            <el-date-picker type="date" v-model="goodsDate" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"  placeholder="请选择日期" style="width:340px;"></el-date-picker>
        </el-col>
    </el-form-item>
    <el-form-item label="保质期">
        <el-radio-group v-model="goodsTime">
            <el-radio label="12个月"></el-radio>
            <el-radio label="2年"></el-radio>
            <el-radio label="3年"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="供应商"  style="width:340px;">
        <el-input v-model="goodsSupplier"></el-input>
    </el-form-item>
    <el-form-item label="特色说明" style="width:340px;">
        <el-input type="textarea" v-model="goodsIntro"></el-input>
    </el-form-item>
    <el-form-item label="价格"  style="width:340px;">
        <el-input v-model="goodsPrice"></el-input>
    </el-form-item>
    <el-form-item label="上传小图">
        <el-upload
        action="/files/upload?type=good0"
        list-type="picture-card"
        :on-success="getImgsId">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </el-form-item>
    <el-form-item label="上传大图">
        <el-upload
        action="/files/upload?type=good1"
        list-type="picture-card"
        :on-success="getImgsId">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="async_addGoods({goodsName,goodsType,goodsMaterial,goodsMath,goodsCanFor,goodsOnlyFor,goodsSize,goodsTaste,goodsSpecial,
        goodsRegion,goodsDate,goodsTime,goodsSupplier,goodsIntro,goodsPrice,goodsImg})">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
</el-form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            goodsName:"猫粮",
            goodsType:"猫砂",
            goodsMaterial:"猫砂",
            goodsMath:"烘焙",
            goodsCanFor:"幼年",
            goodsOnlyFor:"狗类",
            goodsSize:"1kg",
            goodsTaste:"牛肉味",
            goodsSpecial:"无",
            goodsRegion:"国内",
            goodsDate:"",
            goodsTime:"1年",
            goodsSupplier:"天猫",
            goodsIntro:"和平vkdfkdfnbfdbndflghidfkflsdfosof",
            goodsPrice:"42",
            goodsImg:[],
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        ...mapActions("goodsManage",["async_addGoods"]),
        getImgsId(response) {
            this.goodsImg.push(response.imgId);
        }
    }
}
</script>

