<script>

export default {
    name: "CardNews",
    props: ["infoNews"],
    methods: {
        getImage() {
            if (this.infoNews.urlToImage) {
                return this.infoNews.urlToImage
            } else {
               return "img/no-image.png" 
            }
        },

        getDate(){
            if (this.infoNews.publishedAt) {
                let newDate = this.infoNews.publishedAt.split('T');
                this.infoNews.publishedAt = newDate[0];
                return this.infoNews.publishedAt

            } else {
                return 'Data non disponibile'
            }
        },

        getAuthor() {
            if (this.infoNews.author) {
                return this.infoNews.author
            } else {
                return 'Autore non disponibile'
            }
        },

        getDescription() {
            if (this.infoNews.description) {
                return this.infoNews.description
            } else {
                return 'Descrizione non disponibile'
            }
        },
    }
}
    
</script>

<template>
    <div class="news-card">
        <!-- <img src="img\post_feat_img_23-320x202.jpg" alt="Foto Articolo"> -->
        <img :src="getImage()" alt="Foto Articolo">


        <div class="card-body">
            <div class="card-title">
                <a :href="infoNews.url" target="_blank">
                    {{ infoNews.title }}
                </a>
            </div>
            <div class="card-subtitle mb-2 text-body-secondary">
                {{ getAuthor() }}
                <span class="ms-1">| {{ getDate() }} </span>
            </div>
            <p class="card-text">
                {{ getDescription() }}
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
            aspect-ratio: 2 / 1;
            object-fit: cover;
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