<template>
  <p></p>
  
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex" @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '200px' }"
    />
    <mod></mod>
  
</template>

<script>
  import VueGallery from 'vue-gallery';
  import Modalcomp from '../components/Modalcomp.vue'
  export default {
    data: function () {
      return {
        images: [
          '/gallery/1.jpg',
          '/gallery/2.jfif',
          '/gallery/3.jfif'
        ],
        images1:[
          '/gallery/4.jfif',
          '/gallery/5.jpg'
        ],
        images3:[],
        index: null
      };
    },

    components: {
      'gallery': VueGallery,
      'mod':Modalcomp
    },
    methods:{
      update:function()
      {
        var o=[]
        if(true)
        {
          o=images
        } 
        else if(o==images)
        {
          o=images1
        }
        else
        {
         o=images
        }
        return o;
      }
      
        
      
    }
  }
</script> 

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    display:flexbox;
  }
</style>