<template>
<div>
    <el-input
      v-model="title"
      placeholder="按名称搜索"
      @change="async_findGoods(title)"
      style="width:230px;marginRight:12px"
      clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-button
          type="primary"
          @click="dialogFormVisible = true">修改</el-button>
    <el-dialog title="修改商品" :visible.sync="dialogFormVisible">
        <el-form label-width="120px">
        <el-form-item label="商品名称" style="width:340px;">
          <el-input v-model="goods[0].goodsName"></el-input>
        </el-form-item>
        <el-form-item label="商品品类">
          <el-select v-model="goods[0].goodsType" placeholder="请选择商品品类">
              <el-option label="狗粮" value="狗粮"></el-option>
              <el-option label="猫粮" value="猫粮"></el-option>
              <el-option label="猫砂" value="猫砂"></el-option>
              <el-option label="玩具" value="玩具"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="材质或制作方法">
          <el-select v-model="goods[0].goodsMaterial"  placeholder="请选择商品材质"  style="marginRight:20px">
              <el-option label="狗粮" value="狗粮"></el-option>
              <el-option label="猫粮" value="猫粮"></el-option>
              <el-option label="猫砂" value="猫砂"></el-option>
              <el-option label="玩具" value="玩具"></el-option>
          </el-select>
          <el-select v-model="goods[0].goodsMath" placeholder="请选择商品制作方法">
              <el-option label="烘培" value="烘培"></el-option>
              <el-option label="膨化" value="膨化"></el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="适用规格" style="width:340px;">
              <el-input v-model="goods[0].goodsCanFor" ></el-input>
          </el-form-item>
          <el-form-item label="专属规格" style="width:340px;">
              <el-input  v-model="goods[0].goodsOnlyFor"></el-input>
          </el-form-item>
          <el-form-item  label="包装规格">
              <el-radio-group v-model="goods[0].goodsSize">
                  <el-radio label="500g"></el-radio>
                  <el-radio label="1kg"></el-radio>
                  <el-radio label="5kg"></el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="口味" style="width:340px;">
              <el-input  v-model="goods[0].goodsTaste"></el-input>
          </el-form-item>
          <el-form-item label="特殊功用" style="width:340px;">
              <el-input  v-model="goods[0].goodsSpecial"></el-input>
          </el-form-item>
          <el-form-item label="产地" style="width:340px;">
              <el-input  v-model="goods[0].goodsRegion"></el-input>
          </el-form-item>
          <el-form-item label="出厂日期">
              <el-col :span="11">
                  <el-date-picker v-model="goods[0].goodsDate" placeholder="请选择日期" style="width:340px;"></el-date-picker>
              </el-col>
          </el-form-item>
          <el-form-item label="保质期">
              <el-radio-group v-model="goods[0].goodsTime">
                  <el-radio label="12个月"></el-radio>
                  <el-radio label="2年"></el-radio>
                  <el-radio label="3年"></el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="供应商"  style="width:340px;">
              <el-input v-model="goods[0].goodsSupplier"></el-input>
          </el-form-item>
          <el-form-item label="特色说明"  style="width:340px;">
              <el-input v-model="goods[0].goodsIntro" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="价格"  style="width:340px;">
              <el-input  v-model="goods[0].goodsPrice"></el-input>
          </el-form-item>
          <el-form-item label="上传小图">
              <img style="width:100px" :src="goods[0].goodsImg[0].url" alt="">
              <el-upload
              action="/files/xiuImg?type=good0"
              list-type="picture-card"
              :on-success="getImgsId">
              <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog>
                    <img style="width:100px" :src="goods[0].goodsImg[0].url" alt="">
              </el-dialog>
          </el-form-item>
          <el-form-item label="上传大图">
              <img style="width:100px" :src="goods[0].goodsImg[1].url" alt="">
              <el-upload
              action="/files/xiuImg?type=good1"
              list-type="picture-card"
              :on-success="getImgsId2">
              <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog>
                  <img style="width:100px" :src="goods[0].goodsImg[1].url" alt="">
              </el-dialog>
          </el-form-item>
          <el-form-item>
              <el-button  type="primary" @click="dialogFormVisible = false;async_xiuGoods({goods:goods[0],delImg});">修改</el-button>
              <el-button @click="dialogFormVisible = false">取消</el-button>
          </el-form-item>
      </el-form>
    </el-dialog>
    <el-button size="mini" type="text" icon="el-icon-caret-top" @click="async_getGoods">按热度排序</el-button>
    <el-button size="mini" type="text" icon="el-icon-caret-top" @click="async_pricePai">按价格排序</el-button>
    <el-table
    :data="rows"
    ref="multipleTable"
    @selection-change="handleSelectionChange"
    style="width:100%;marginTop:50px">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="品类">
            <span>{{props.row.goodsType}}</span>
          </el-form-item>
          <el-form-item label="材质">
            <span>{{ props.row.goodsMaterial }}</span>
          </el-form-item>
          <el-form-item label="制作方法">
            <span>{{ props.row.goodsMath }}</span>
          </el-form-item>
          <el-form-item label="适用规格">
            <span>{{ props.row.goodsCanFor }}</span>
          </el-form-item>
          <el-form-item label="专属规格">
            <span>{{ props.row.goodsOnlyFor }}</span>
          </el-form-item>
          <el-form-item label="包装规格">
            <span>{{ props.row.goodsSize }}</span>
          </el-form-item>
          <el-form-item label="口味">
            <span>{{ props.row.goodsTaste }}</span>
          </el-form-item>
          <el-form-item label="特殊功用">
            <span>{{ props.row.goodsSpecial }}</span>
          </el-form-item>
          <el-form-item label="产地">
            <span>{{ props.row.goodsRegion }}</span>
          </el-form-item>
          <el-form-item  label="出厂日期">
            <span>{{ props.row.goodsDate }}</span>
          </el-form-item>
          <el-form-item label="保质期">
            <span>{{ props.row.goodsTime }}</span>
          </el-form-item>
          <el-form-item label="供应商">
            <span>{{ props.row.goodsSupplier }}</span>
          </el-form-item>
          <el-form-item label="特色说明">
            <span>{{ props.row.goodsIntro }}</span>
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
      prop="goodsName">
    </el-table-column>
    <el-table-column
      label="商品价格"
      prop="goodsPrice">
    </el-table-column>
    <el-table-column
      label="产地"
      prop="goodsRegion">
    </el-table-column>
      <el-table-column
      label="出厂日期"
      prop="goodsDate">
      </el-table-column>
    <el-table-column
      label="图片">
       <template slot-scope="scope">
         <div v-for=" (item,index) in scope.row.goodsImg "  :key="index">
            <img v-if="item.type=='good1'" style="width:100px" :src='item.url' alt="">
         </div>
       </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleDelete({goodsId:scope.row._id,imgId:scope.row.goodsImg})">删除</el-button>
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
      goods:[{
        goodsName:"",
        goodsType:"",
        goodsMaterial:"",
        goodsMath:"",
        goodsCanFor:"",
        goodsOnlyFor:"",
        goodsSize:"",
        goodsTaste:"",
        goodsSpecial:"",
        goodsRegion:"",
        goodsDate:"",
        goodsTime:"",
        goodsSupplier:"",
        goodsIntro:"",
        goodsPrice:"",
        goodsImg:[{url:''},{url:''}],
      }],
      delImg:[],
      title:'',
      dialogFormVisible: false,
    }
  },
  created(){
    this.async_getGoods();
  },

  watch: {
    curPage() {
      this.async_getGoods();
    },
    eachPage() {
      this.async_getGoods();
    },
    total() {
      this.async_getGoods();
    }
  },
  
  computed:{
    ...mapState("goodsManage",["curPage", "eachPage", "maxPage", "total", "rows"])
  },
  methods: {
    ...mapMutations("goodsManage",["handleSizeChange","handleCurrentChange"]),
    ...mapActions("goodsManage",["async_getGoods","async_handleDelete","async_xiuGoods","async_findGoods","async_pricePai"]),
    handleDelete({goodsId,imgId}){
      this.async_handleDelete({goodsId,imgId})
      this.async_getGoods();
    },
    getImgsId(response) {
      this.goods[0].goodsImg[0].url=response.url;
    },
    getImgsId2(response) {
      this.goods[0].goodsImg[1].url=response.url;
    },
    toggleSelection() {
        this.$refs.multipleTable.clearSelection();
    },
    handleSelectionChange(val){
      this.delImg=val[0].goodsImg.map(item=>item.url);
      this.goods=val;
    },
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

