<template>    
<a-space direction="horizontal" :size="5">
    <label>From Date</label><a-date-picker v-model:value="value1" @click="console.log(value1);"></a-date-picker>
    <label>To Date</label><a-date-picker v-model:value="value2"  ></a-date-picker>
    <a-dropdown>
    <a class="ant-dropdown-link"  style="color:blue" @click.prevent>
      Sort
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;" @click="Ascending()">Ascending</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" @click="Descending()">Descending</a>
        </a-menu-item>
       
      </a-menu>
    </template>
  </a-dropdown>
    <button type="primary" style="color: blue;" @click="filter()">Fetch</button> 
    <button type="primary" style="color: blue;"  @click="f1()">Previous</button>
    <button type="primary" style="color: blue;"  @click="f()">Next</button>
</a-space>

<!--
<a-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </a-card-meta>
</a-card>-->
<div
      class="image"
      v-for="(image, imageIndex) in images.slice(0,n)"
      :key="imageIndex" @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '150px', height: '150px' }"
    >
<br>
  <br>
  <br>
  <br>
  <br>
  <button type="primary" style="color: orange;"><RouterLink to="/gallery">Book Room</RouterLink>
</button>
</div>
</template>
<script lang="ts" setup>
"use Strict"
import { ref,reactive } from 'vue';
import type { Dayjs } from 'dayjs';
import { RouterLink, RouterView } from 'vue-router'
import { imageGroupProps } from 'ant-design-vue/es/vc-image/src/PreviewGroup';
import { timePickerProps } from 'ant-design-vue/es/time-picker/time-picker';
var d5 = new Date(2025,5,20);
var d2 = new Date(2023,6,26);
var d3=new Date(2024,7,8);
var d4=new Date(2023,1,7);
var d5=new Date(2023,1,1);
var d7=new Date(2023,1,2);
var v1=ref([]);
//v["data"].push({d5:"/gallery/1.jpg"});
//console.log(v);
var v={};
v[d2]="/gallery/7.jfif";
v[d3]="/gallery/3.jfif";
v[d4]="/gallery/4.jfif";
v[d5]="/gallery/5.jpg";
v[d7]="/gallery/7.jfif";
v1.value.push(v);
var images=reactive(['/gallery/1.jpg','/gallery/7.jfif','/gallery/3.jfif','/gallery/4.jfif','/gallery/5.jpg','/gallery/7.jfif','/gallery/8.jfif','/gallery/9.jfif','/gallery/11.jfif','/gallery/12.jfif','/gallery/13.jfif','/gallery/5.jpg','/gallery/7.jfif','/gallery/8.jfif','/gallery/9.jfif','/gallery/11.jfif']);
if(localStorage.getItem("image")!=null || localStorage.getItem("image")!=undefined)
{
localStorage.setItem("image",images);
console.log(localStorage.getItem("image"));
}
var n=ref(3);
function filter()
{
  console.log("Filter");
}
function Ascending()//sort json list  of villas in descending order
{
  var v2=Object.keys(v).sort((a,b)=>Date.parse(a)-Date.parse(b));
  var t=[]
  for(var i=0;i<v2.length;i++)
  {
    console.log(v[v2[i]]);
    t.push(v[v2[i]]);
  }
  images=t;
  console.log("Ascending");
}
function addItem(item)
{
  images.value.push(item);
}
function Descending()//sort json list  of villas in ascending order
{
  var v2=Object.keys(v).sort((a,b)=>Date.parse(b)-Date.parse(a));
  var t=[]
  for(var i=0;i<v2.length;i++)
  {
    console.log(v[v2[i]]);
    t.push(v[v2[i]]);
  }
  console.log("Descending")
}

function f()
{
  if(n.value<13)
  {
  n.value+=2;
  }
}
function f1()
{
  if(n.value>2)
  {
  n.value-=1;
  }
}
function Sorted()
{
  images=images.filter(sorted);
  console.log(images);
}
const value1 = ref<Dayjs>();
const value2 = ref<Dayjs>();

function sorted(data)
{
  return data>=value1 && data<=value2;
}
</script>
<style scoped>
  .image {
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid #37a875;
    margin: 0.5px;
    display: inline;
  }
</style>