<template>
  <div class="qa">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>qa</el-breadcrumb-item>
      </el-breadcrumb>
       <el-table
        :data="peoples"
        style="width: 91%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
    </el-table>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="500"
      @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script>
import '../css/qa';

export default {
  	name:"qa",
  	data (){
  		return {
  		    
  		}
  	},
  	created (){
  		this.$store.dispatch("getPeople",1);
  	},
  	methods:{
        changePage (val){
          this.$store.dispatch("getPeople",val);
        }
  	},
  	computed:{
  		peoples (){
        return this.$store.getters.peoples;
      }
  	}
}
</script>