<template>
    <div>
      <nav-header></nav-header>
      <nav-main>
      </nav-main>
      <nav-footer>
      </nav-footer>
      <div>{{list}}</div>
    </div>
       

</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import {defineComponent, computed, ref} from 'vue'
import {useStore} from 'vuex'
  
export default defineComponent({
    name: 'Home',

    props: {

    },
    components: {
      NavHeader,
      NavMain,
      NavFooter
      
    },
    setup(){
      let store = useStore()
      //console.log(store)
      let list = computed(() => {
        return store.state.list
      })
      return {
        list
      }
    }
})


</script>

<style scoped lang='scss'>

</style>
