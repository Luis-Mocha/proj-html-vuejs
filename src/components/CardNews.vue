<script>

export default {
    name: "CardNews",
    props: ["infoNews"],
}
    
</script>

<template>
    <div class="news-card">
        <img src="img\post_feat_img_23-320x202.jpg" alt="Foto Articolo">

        <div class="card-body">
            <div class="card-title">
                {{ infoNews.title }}
            </div>
            <div class="card-subtitle mb-2 text-body-secondary">
                {{ infoNews.author }}
                <span class="ms-1">| {{ infoNews.publishedAt }} </span>
            </div>
            <p class="card-text">
                {{ infoNews.description }}
            </p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@import "../style/main.scss";

    .news-card {
        width: calc(100% / 3 - 20px);

        img {
            width: 100%;
        }

        .card-body {
            .card-title {
                font-weight: 600;
            }
            .card-subtitle , .card-text {
                color: gray;
                font-size: 13px;
            }

            .card-text {
                overflow: hidden;
            }
        }
    }

</style>