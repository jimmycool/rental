<script>
import axios from 'axios'
export default {
  data() {
    return {
      message:"Hello World",
      info:""
    }
  },
mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = JSON.stringify(response)))
  },
methods:{
  test()
  {
    alert("Hello");
  }
}   
}
</script>
<template>
  <div id='info'>  {{ info }}</div>
</template>  