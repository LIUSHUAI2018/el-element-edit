<template>
  <div style="width: 700px">
    <el-button type="primary" @click="open">打开弹窗</el-button>
    <el-dialog v-model="isShow">
      <el-table-edit ref="tableRef" v-model="data" :columns="columns" >
        <template #operate="scope,item">
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-edit>
      <el-table-edit ref="table2Ref" v-model="data1" :columns="columns1" >
        <template #operate="scope,item">
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-edit>
      <el-button type="primary" @click="a">获取数据</el-button>
      <el-button type="primary" @click="a1">获取数据1</el-button>
      <el-button type="primary" @click="b">改变数据</el-button>

      <el-button type="primary" @click="c">保存</el-button>

    </el-dialog>
  </div>

</template>


<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Column} from "el-element-edit/types/TableTypes";
const isShow = ref(false)
const tableRef = ref()
const options = ref([])
const data = ref([
  {
    name: '',
    age: 0,
    sex: "1",
    birthday: '2020-01-01',
    isEnable: 1
  }
])
const data1 = ref([
  {
    name: '',
    age: 0,
    sex: "1",
    birthday: '2020-01-01',
    isEnable: 1
  }
])
const open = () => {
  isShow.value = true
}
const a = () => {
  console.log(data)
}
const a1 = () =>[
  console.log(data1)
]
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
      {required: true, message: '请输入名称', trigger: 'blur'},
      {min: 3, max: 60, message: '长度为3到60', trigger: 'blur'},
    ]
  },
  {
    label: '性别',
    prop: 'sex',
    component: 'Select',
    rules: [
      {required: true, message: '性别不能为空', trigger: 'blur'},
    ],
    componentAttr: {
      options: options
    }
  },
  {
    label: '年龄',
    prop: 'age',
    width: "200",
    component: 'InputNumber',
    rules: [
      {required: true, message: '年龄不能为空', trigger: 'blur'},
    ],
    componentAttr: {}
  },
  {
    label: '出生日期',
    prop: 'birthday',
    width: "200",
    component: 'Date',
    rules: [
      {required: true, message: '出生日期不能为空', trigger: 'blur'},
    ],
    componentAttr: {
      valueFormat: 'YYYY-MM-DD'
    }
  },
  {
    label: '是否启用',
    prop: 'isEnable',
    component: 'Switch',
    rules: [
      {required: true, message: '性别不能为空', trigger: 'blur'},
    ]
  },
  {
    label: '操作',
    custom: 'operate',
    align: 'center',
    headerAlign: 'center'
  }
];
const  columns1 = [
  {
    label: '姓名',
    prop: 'name',
    component: "Input",
    rules: [
      {required: true, message: '请输入名称', trigger: 'blur'},
      {min: 3, max: 60, message: '长度为3到60', trigger: 'blur'},
    ]
  },
  {
    label: '性别',
    prop: 'sex',
    component: 'Select',
    rules: [
      {required: true, message: '性别不能为空', trigger: 'blur'},
    ],
    componentAttr: {
      options: options
    }
  },
  {
    label: '年龄',
    prop: 'age',
    width: "200",
    component: 'InputNumber',
    rules: [
      {required: true, message: '年龄不能为空', trigger: 'blur'},
    ],
    componentAttr: {}
  },
  {
    label: '出生日期',
    prop: 'birthday',
    width: "200",
    component: 'Date',
    rules: [
      {required: true, message: '出生日期不能为空', trigger: 'blur'},
    ],
    componentAttr: {
      valueFormat: 'YYYY-MM-DD'
    }
  },
  {
    label: '是否启用',
    prop: 'isEnable',
    component: 'Switch',
    rules: [
      {required: true, message: '性别不能为空', trigger: 'blur'},
    ]
  },
  {
    label: '操作',
    custom: 'operate',
    align: 'center',
    headerAlign: 'center'
  }
];
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

</style>