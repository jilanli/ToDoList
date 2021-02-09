import { defineComponent } from 'vue';
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import { useRouter } from 'vue-router';
//import {useStore}
export default defineComponent( {
  name: 'About',
  setup() {
    let router = useRouter()
    let back = () => {

    }
    return {
      back
    }
  }
})
</script>
