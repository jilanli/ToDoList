import { defineComponent } from 'vue';
<template>
    <div class="container">
        <div>already finished{{isCompleted}}/all missions{{all}}</div>
        
        <div v-if="isCompleted > 0" class="btn">
            <button @click="clear">clear finished items</button>
        </div>
    </div>
</template>

<script>

import {defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navFooter',
    setup() {
        let isCompleted = ref(1)
        let all = ref(3)
        let clear = () => {
            console.log("clear")
        }
        return {
            isCompleted,
            all,
            clear
        }
    },
})

</script>

<style scoped lang='scss'>
 .container{
     display: flex;
     align-items: center;
     .btn {
         margin-left: 20px;
     }
 }
</style>
