<script>

export default {
    name: "CardForum",
    props: ["info"],
}
    
</script>


<template>

    <div class="card-forum">
        <div>
            <a href="#">
                <i :class="info.iconClass"></i>
            </a>
        </div>
        {{ info.title }}
    </div>

</template>

<style lang="scss" scoped>

@import "../style/main.scss";

</style>