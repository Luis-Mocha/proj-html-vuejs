<script>

    export default {
        name: 'AppMain',
    }
    
</script>


<template>

    <div id="jumbo">
        <div class="container">
            <h1>
                Tech Forum!
            </h1>

            <p>
                Discuss all the latest technology new and trends
            </p>

            <div class="my-btn btn-blue">
                <a href="#">
                    get avada now! >
                </a>
            </div>
        </div>
    </div>

    <div id="presentation">
        <p class="presentation-title">
            Avada forum is the place to be
        </p>

        <p class="presentation-body">
            In quis lectus sed leo elementum faucibus in dapibus dictum.
            <br>
            Nulla Molestie tortor nec lectus venenatis, sed blandit dui finibus.
            <br>
            Dolor, at bipendum. Donec vehicula nec tortor ac finibus.
        </p>
    </div>

    <div id="news-section" class="main-section">
        <div class="container">

            <div class="main-name">
                <p>
                    Phasellus eget metus
                </p>

                <h2>
                    All the latest news
                </h2>

                <hr>
            </div>

            <div class="main-body">
                <div class="news-row">

                    <div class="news-card">
                        <img src="img\post_feat_img_23-320x202.jpg" alt="Foto Articolo">

                        <div class="card-body">
                            <div class="card-title">loreskjhda asuhdakjhsd uhasd</div>
                            <div class="card-subtitle mb-2 text-body-secondary">Card subtitle</div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div class="news-card">
                        <img src="img\post_feat_img_23-320x202.jpg" alt="Foto Articolo">

                        <div class="card-body">
                            <div class="card-title">loreskjhda asuhdakjhsd uhasd</div>
                            <div class="card-subtitle mb-2 text-body-secondary">Card subtitle</div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div class="news-card">
                        <img src="img\post_feat_img_23-320x202.jpg" alt="Foto Articolo">

                        <div class="card-body">
                            <div class="card-title">loreskjhda asuhdakjhsd uhasd</div>
                            <div class="card-subtitle mb-2 text-body-secondary">Card subtitle</div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div id="featured-article">
                    <div class="container-featured">

                        <span>Featured Article</span>

                        <h3>
                            Cras Malesuada et orci eget pharetra
                        </h3>

                        <p>
                            In quis lectus sed leo elemntum faucibus in dapibus dictum. Nulla molestie tortor nec lectus venenatis,sed blandit dui, dolor at bibendum sadips ets ipsum dolores ficilis uns leo lectus.
                        </p>

                        <div class="my-btn btn-black">
                            Read more  >
                        </div>
                    </div>
                </div>

                <div class="news-row">

                    <div class="news-card">
                        <img src="img\post_feat_img_23-320x202.jpg" alt="Foto Articolo">

                        <div class="card-body">
                            <div class="card-title">loreskjhda asuhdakjhsd uhasd</div>
                            <div class="card-subtitle mb-2 text-body-secondary">Card subtitle</div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div class="news-card">
                        <img src="img\post_feat_img_23-320x202.jpg" alt="Foto Articolo">

                        <div class="card-body">
                            <div class="card-title">loreskjhda asuhdakjhsd uhasd</div>
                            <div class="card-subtitle mb-2 text-body-secondary">Card subtitle</div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div class="news-card">
                        <img src="img\post_feat_img_23-320x202.jpg" alt="Foto Articolo">

                        <div class="card-body">
                            <div class="card-title">loreskjhda asuhdakjhsd uhasd</div>
                            <div class="card-subtitle mb-2 text-body-secondary">Card subtitle</div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
        <!-- http://newsapi.org/v2/top-headlines?q=iphone&country=it&category=technology&language=it&pageSize=10&apiKey= -->

        <!-- https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4396876dd597418790439730f9024c47 -->
        <!-- https://newsapi.org/v2/top-headlines?q=mac&category=technology&apiKey=4396876dd597418790439730f9024c47 -->

        <!-- https://newsapi.org/v2/everything?q=tech&pageSize=20&language=it&apiKey=4396876dd597418790439730f9024c47 -->

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@import "../style/main.scss";

    #jumbo {
        color: white;
        background-image: url("img/home_slider_bg.jpg");
        background-size: cover;

        .container {
            height: 450px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;

            h1 {
                font-weight: 800;
                font-size: 70px;
            }
        }
    }

    #presentation {
        background-color: rgb(242,242,242); //non ho trovato questo colore nel "color-palette"
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .presentation-title {
            font-weight: 600;
            text-transform: uppercase;
            font-size: small;
            letter-spacing: 3px;
        }

        .presentation-body {
            text-align: center;
            color: gray;
        }
    }

    // --- SEZIONE NEWS
    .news-row {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;

        .news-card {
            width: calc(100% / 3 - 20px);

            img {
                width: 100%;
            }
        }
    }

    #featured-article {
        color: white;
        height: 300px;
        background-image: url("img/featured_article_1_bg.jpg");
        background-size: cover;
        padding: 10%;
        display: flex;
        align-items: center;

        .container-featured{
            
        }
    }

</style>