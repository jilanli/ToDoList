import { defineComponent } from 'vue';
<template>
    <div>
        <input placeholder="Please enter the mission" 
        v-model="value" 
        @keydown.enter="enter"
        />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navHeader',
    setup() {
        let value = ref('')
        let enter = () => {
            console.log(value.value)
        }
        return {
            value,
            enter
        }
    },
})

</script>

<style scoped lang='scss'>
input{
    margin-bottom: 10px;
}
</style>
