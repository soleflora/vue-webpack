<template>
  <div class="page-box">
    <h1 class="page-header">{{title}}</h1>
    <p @click="changeTitle">maybe</p>
    <ul>
      <li v-for="(item,index) in arr" @click="changArr(item)" :class="'ac-hover' + index" v-bind:key="index">{{item}}</li>
    </ul>
    <div>
      <input type="text" v-model="name">
      <button @click="add">添加</button>
    </div>
    <ul>
      <li v-for="(item, i) in list" :key="item.id">
        <input type="checkbox"> {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      title: '测试一下ss',
      arr: [1,3,2,5,6,4],
              name: '',
        newId: 3,
        list: [
          { id: 1, name: '李斯' },
          { id: 2, name: '吕不韦' },
          { id: 3, name: '嬴政' }
        ]
    }
  },
  methods: {
            add() {
         //注意这里是unshift
          this.list.unshift({ id: ++this.newId, name: this.name })
          this.name = ''
        },
    changeTitle() {
      this.title = '改变后的titlessqqqaaaasdsa'
    },
    changArr(item) {
      // this.arr.forEach((doc,index)=>{
      //   if(doc === item) {
      //     this.$set(this.arr,index,'zzz')
      //   }
      // })
      this.flag = !this.flag
      this.arr.sort((a,b)=>{
        return this.flag ? a-b : b-a
      })
      console.log(this.arr)
    }
  }
}
</script>

<style lang="less">
@import url('./app.less');
.ac-hover {
  cursor: pointer;
}
</style>



