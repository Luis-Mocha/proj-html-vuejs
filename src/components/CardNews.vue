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

        getSource() {
            if (this.infoNews.source.name) {
                return this.infoNews.source.name
            } else {
                return 'Fonte non disponibile'
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
        <a :href="infoNews.url" target="_blank">
            <img :src="getImage()" alt="Foto Articolo">
        </a>

        <div class="card-body">
            <div class="card-title">
                {{ infoNews.title }}
            </div>
            <div class="card-subtitle mb-2 text-body-secondary">
                {{ getSource() }}
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
        width: calc(100% / 1 - 50px);
        margin-bottom: 10px;

        img {
            width: 100%;
            aspect-ratio: 2 / 1;
            object-fit: cover;
        }

        .card-body {
            .card-title {
                font-weight: 600;
                max-height: 80px;
                overflow: hidden;
                margin: 7px 0;
            }
            .card-subtitle , .card-text {
                color: gray;
                font-size: 14px;
            }

            .card-text {
                overflow: hidden;
                max-height: 100px;
                font-size: 12px;
            }
        }
    }

    @media screen and (min-width: 576px) {
        .news-card {
            width: calc(100% / 3 - 20px);
        }   
    }
</style>