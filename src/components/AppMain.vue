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

    <div class="main-section container">
        <div class="main-name">
            <p>
                Phasellus eget metus
            </p>

            <h2>
                All the latest news
            </h2>

            <hr>
        </div>

    </div>

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


</style>