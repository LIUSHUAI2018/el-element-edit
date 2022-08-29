
<template>
<div style="width: 700px">
  <el-table-edit ref="tableRef" v-model="data" :columns="columns" >
    <template #operate="scope,item">
      <el-button type="danger">删除</el-button>
    </template>
  </el-table-edit>
  <el-button type="primary" @click="a">获取数据</el-button>
  <el-button type="primary" @click="b">改变数据</el-button>
  <el-button type="primary" @click="c">保存</el-button>
</div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
const tableRef = ref()
const options = ref([])
const data = ref([
  {
    name: '',
    sex: "1",
    isEnable: 1
  }
])
const a = () => {
  console.log(data)
}
const c = () => {
   tableRef.value.validate()
}
const b = () =>{
  options.value = [
    {
      label: '男',
      value: 1
    },
    {
      label: '女',
      value: 2
    },
    {
      label: '未知',
      value: 3
    }
  ]
}
const columns: Column[] = [
  {
    label: '姓名',
    prop: 'name',
    component: "Input",
    rules: [
      { required: true, message: '请输入名称', trigger: 'blur' },
      { min: 3, max: 60, message: '长度为3到60', trigger: 'blur' },
    ]
  },
  {
    label: '性别',
    prop: 'sex',
    component: 'Select',
    rules:[
      { required: true, message: '性别不能为空', trigger: 'blur' },
    ],
    componentAttr:{
      options: options
    }
  },
  {
    label: '是否启用',
    prop: 'isEnable',
    component: 'Switch',
    rules:[
      { required: true, message: '性别不能为空', trigger: 'blur' },
    ]
  },
  {
    label: '操作',
    custom: 'operate',
    align: 'center',
    headerAlign: 'center'
  }
]
onMounted(()=>{
  let timer = setTimeout(()=>{
    options.value = [
      {
        label: '男',
        value: 1
      },
      {
        label: '女',
        value: 2
      }
    ]
    clearTimeout(timer);
  }, 500);
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
