<script>
import axios from 'axios';
import { store } from '../store';
import CardNews from './CardNews.vue'
import CardForum from './CardForum.vue';

    export default {
        name: 'AppMain',
        components: {
            CardNews,
            CardForum,
        },
        data() {
            return {
                store,
                controlWidth: 'xs',
                controlOpening: false,
            }
        },
        created() {
            this.getNewsApi(),
            this.checkWidth()
        },
        mounted() {
            window.addEventListener('resize', this.checkWidth);
            window.addEventListener('resize', this.showForumCards);
        },
        methods: {

            getNewsApi() {
                axios.get(`https://newsapi.org/v2/everything?q=tech&pageSize=20&language=it&apiKey=${import.meta.env.VITE_API_KEY}`)
                .then( (res) => {
                console.log(res.data)

                store.newsArray = res.data.articles;
                })
            },

            checkWidth() {
                const smWidth = 576;
                const mdWidth = 768;
                const lgWidth = 992;

                if (window.innerWidth < smWidth) {
                    this.controlWidth = 'xs'
                } else if (window.innerWidth >= smWidth && window.innerWidth < mdWidth) {
                    this.controlWidth = 'sm'
                } else if (window.innerWidth >= mdWidth && window.innerWidth < lgWidth) {
                    this.controlWidth = 'md'
                } else if (window.innerWidth >= lgWidth) {
                    this.controlWidth = 'lg'
                }
            },

            //funzione funzione per mostrare/nascondere forum-cards in base allla larghezza dello schermo
            showForumCards() {
                let cardsArray = document.querySelectorAll('.card-forum')
                // console.log(cardsArray);
                let lastCards = Array.from(cardsArray).slice(-4);
                // console.log(lastCards);

                if (this.controlWidth === 'xs') { 

                    lastCards.forEach(element => {
                        element.classList.add('d-none');
                    });
                } else {
                    lastCards.forEach(element => {
                        element.classList.remove('d-none');
                    });
                }
            },

            //funzione per mostrare/nascondere forum-cards al click del tasto. Cambia anche l'icona del tasto
            showButtonFunction() {
                let cardsArray = document.querySelectorAll('.card-forum')
                let lastCards = Array.from(cardsArray).slice(-4);

                lastCards.forEach(element => {
                    element.classList.toggle('d-none')
                });

                if (this.controlOpening === false) {
                    document.getElementById('forum-button-icon').classList.remove('fa-plus')
                    document.getElementById('forum-button-icon').classList.add('fa-minus')
                    this.controlOpening = true
                } else {
                    document.getElementById('forum-button-icon').classList.remove('fa-minus')
                    document.getElementById('forum-button-icon').classList.add('fa-plus')
                    this.scrollIdFunction('forum-section')

                    this.controlOpening = false;
                }
            },

            //funzione per scollare fino ad un elemento con un determinato ID
            scrollIdFunction(x) {
                const elemento = document.getElementById(x);
                elemento.scrollIntoView({ 
                    behavior: 'smooth'
                });
            },
        }
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
                <p class="letter-space-upper">
                    Phasellus eget metus
                </p>

                <h2>
                    All the latest news
                </h2>

                <hr>
            </div>

            <div class="main-body">
                <div class="news-row justify-content-center justify-content-sm-between">
                    <CardNews v-for="(elem,index) in store.newsArray.slice(0,3)" :key="index" :infoNews="elem"/>

                </div>

                <div id="featured-1" class="featured-article">
                    <div class="container-featured">

                        <p class="letter-space-upper">Featured Article</p>

                        <h3>
                            Cras Malesuada et orci eget pharetra
                        </h3>

                        <p>
                            In quis lectus sed leo elemntum faucibus in dapibus dictum. Nulla molestie tortor nec lectus venenatis,sed blandit dui, dolor at bibendum sadips ets ipsum dolores ficilis uns leo lectus.
                        </p>

                        <div class="my-btn btn-black">
                            <a href="#">
                                Read more <span class="ms-2">></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="news-row justify-content-center justify-content-sm-between">
                    <CardNews v-for="(elem,index) in store.newsArray.slice(3,6)" :key="index" :infoNews="elem"/>
                </div>

                <div id="news-tutorial" class="d-lg-flex  align-items-center">

                    <div id="featured-2" class="featured-article col-lg-8">
                        <div class="container-featured">
                            <p class="letter-space-upper">Rewied Article</p>

                            <h3>
                                Mauris viverra atisan ipsum eget felis prims effictur varius
                            </h3>

                            <p>
                                In quis lectus sed leo elemntum faucibus in dapibus dictum. Nulla molestie tortor nec lectus venenatis,sed blandit dui, dolor at bibendum sadips ets ipsum dolores ficilis uns leo lectus.
                            </p>

                            <div class="my-btn btn-black">
                                <a href="#">
                                    Read more <span class="ms-2">></span>
                                </a>
                            </div>
                        </div>    
                    </div>

                    <div class="tutorials">
                        <h4>
                            Tutorial & Guides
                        </h4>

                        <hr class="hr-salmon"> 

                        <!-- tutorial 1 -->
                        <div class="tutorial-card">
                            <img src="/img/post_feat_img_23-147x118.jpg" alt="Foto Tutorial">

                            <div class="tutorial-card-body">
                                <div>
                                    Donec ornare Pretium eget scetisque justo 
                                </div>
                                <span>
                                    October 11th,2015 | Comments Off
                                </span>
                            </div>
                        </div>
                        <!-- tutorial 2 -->
                        <div class="tutorial-card">
                            <img src="/img/post_feat_img_23-147x118.jpg" alt="Foto Tutorial">

                            <div class="tutorial-card-body">
                                <div>
                                    Fusce sollicitudin nunc sed placerat varius
                                </div>
                                <span>
                                    October 11th,2015 | Comments Off
                                </span>
                            </div>
                        </div>
                        <!-- tutorial 3 -->
                        <div class="tutorial-card">
                            <img src="/img/post_feat_img_23-147x118.jpg" alt="Foto Tutorial">

                            <div class="tutorial-card-body">
                                <div>
                                    Proin eu purus sed aru aliquet curabir vens
                                </div>
                                <span>
                                    October 11th,2015 | Comments Off
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="main-end">
            <a href="#">
                Read our blog <i class="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
    </div>

    <div id="forum-section" class="main-section">
        <div class="container">

            <div class="main-name">
                <p class="letter-space-upper">
                    Phasellus eget metus
                </p>

                <h2>
                    Forum Sections
                </h2>

                <hr>
            </div>

            <div class="main-body">
                <div class="card-forum-container">
                    <CardForum v-for="(elem, index) in store.infoForum" :key="index" :info="elem"/>
                </div>

                <button id="forum-button" v-if="controlWidth === 'xs'" @click="showButtonFunction()">
                    <i id="forum-button-icon" class="fa-solid fa-plus"></i>
                </button>
                
            </div>

        </div>

        <div class="main-end">
            <a href="#">
                Go to our forum <i class="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
    </div>

    <div id="join-section" class="main-section">
        <div id="jumbo-community">
            <div>
                <h2>
                    Hey! Join to our Community
                </h2>

                <p>
                    Nulla molestie tortor nec lectus venenatis, sed blandit dui finibus. Curabitur feugiat vulputate purus ipsums dolores ficilis uns etra.
                </p>

                <div class="my-btn btn-blue">
                    <a href="">
                        Sign up <span class="ms-2">></span>
                    </a>
                </div>

            </div>

        </div>

        <div id="newsletter">
            <div id="newsletter-title">
                Subscribe to our NewsLetter
            </div>

            <form action="#">
                <input type="email" name="newsletter-input" id="newsletter-input" placeholder="*Insert your email" class="">
                <button type="submit" class="my-btn btn-black">
                    Send
                </button>
            </form>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@import "../style/section-news.scss"; // SEZIONE NEWS (se lo inserisco per ultimo non funziona)
@import "../style/main.scss";


    #jumbo {
        color: white;
        background-image: url("/img/home_slider_bg.jpg");
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
        background-color: $grey-bg; //non ho trovato questo colore nel "color-palette"
        min-height: 200px;
        padding: 40px 5px;
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

    #forum-section {
        background-color: $grey-bg;
        .card-forum-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        padding: 20px 0;
        }

        //Bottone + / -
        #forum-button {
            display: block;
            margin: auto;
            padding: 0 25px;
            font-size: 25px;
            color: $salmon;
            background-color: $blue-estern;
        }
    }

    #join-section {
        padding: 0;
        #jumbo-community {
            height: 400px;
            background-image: url(/img/join_now_cta_bg.jpg);
            background-size: cover;
            background-position: center;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;

            div {
                width: 60%;
                h2 {
                    font-weight: 800;
                    font-size: 40px;
                    margin-bottom: 10px;
                }
            }
        }

        #newsletter {
            background-color: $grey-bg;
            padding: 50px 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            #newsletter-title {
                font-size: 30px;
                font-weight: 400;
                margin-bottom: 20px;
                text-align: center;
            }

            form {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center ;

                #newsletter-input {
                    padding: 4px 6px;
                    margin-right: 20px;
                    margin-left: 20px;
                    margin-bottom: 20px;
                    width: 500px;
                    border-radius: 0;
                    border: 1px ridge rgb(175, 170, 170);
            
                }

                button {
                    margin-bottom: 20px;
                    width: 200px;
                }
            }
        }
    }
    

</style>