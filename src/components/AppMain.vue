<script>

    export default {
        name: 'AppMain',
    }
    
</script>


<template>

    <div id="jumbo">
        <div class="container">
            <!-- <img src="img/home_slider_bg.jpg" alt=""> -->
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

</template>

<style lang="scss" scoped>
@import "../style/main.scss";

    #jumbo {
        color: white;
        background-image: url("img/home_slider_bg.jpg");
        background-size: cover;

        .container {
            height: 400px;
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

</style>