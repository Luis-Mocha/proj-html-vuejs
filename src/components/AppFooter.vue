<script>

    export default {
        name: 'AppFooter',
        props: ["infoFoot"],
    }
    
</script>


<template>

    <h2>{{ infoFoot[0].title}}</h2>

</template>

<style lang="scss" scoped>
@import "../style/main.scss";

</style>