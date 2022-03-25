<template>
  <div class="home">

    <div>子傳父:</div>
    父: 目前 {{ cash }} 元
    <HelloWorld :msg="msg"  @increment="incrementTotal"/>
    父: <input type="text" v-model="msg">

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "訊息於子元件中顯示",
      cash:0
    }
  },
  methods: {
        incrementTotal(newNum) {
        this.cash += newNum;
    }

  },
}
</script>
