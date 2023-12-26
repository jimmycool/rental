<template>
        <div id="app">

 <ejs-treemap :dataSource='data' weightValuePath='Count'
     :leafItemSettings='leafItemSettings'></ejs-treemap>
</div>
</template>

<script lang="ts" setup>
const leafItemSettings= { labelPath: 'Pod' }

const data= [
					{ Pod: 'Pod1', Count: 25 },
					{ Pod: 'Pod2', Count: 12 },
					{ Pod: 'Pod3', Count: 9 },
					{ Pod: 'Pod4', Count: 7 },
					{ Pod: 'Pod5', Count: 6 },
					{ Pod: 'Pod6', Count: 3 }
				
				]
</script>
