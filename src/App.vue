<script>
import {store} from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store
    }
  },
  
}

</script>

<template>
  <h1>prova</h1>

  <AppHeader/>

  <AppMain/>

  <AppFooter/>

</template>

<style lang="scss">
@import "./style/main.scss";

</style>