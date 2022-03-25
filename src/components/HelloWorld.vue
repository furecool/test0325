<template>
  <div class="hello">

    子: 
    <button @click="incrementCounter">增加 {{ counter }} 元</button>

    <br><br>
    父傳子:
    <div>子: {{msg}}</div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      counter:2
    }
  },
  methods: {
    incrementCounter: function() {
          this.$emit("increment", this.counter);
      }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
