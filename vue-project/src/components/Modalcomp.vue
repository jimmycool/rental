<template>
  <div>
    <a-space>
    <a-button type="primary" @click="showModal">Book Room</a-button>
    </a-space>
    <a-modal v-model:open="open" title="" @ok="handleOk">
       <p style="color: green;">Room Booked!!!!!!!!!</p>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};
</script>
