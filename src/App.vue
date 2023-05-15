<script>
import {store} from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import TopPageBtn from './components/TopPageBtn.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    TopPageBtn,
},
  data() {
    return {
      store
    }
  },
}

</script>

<template>

  <AppHeader :infoNav="store.navList" />

  <AppMain/>

  <AppFooter :infoFoot="store.footerList"/>

  <TopPageBtn/>

</template>

<style lang="scss">
@import "./style/main.scss";

</style>