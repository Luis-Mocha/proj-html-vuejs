<script>

    export default {
        name: 'AppHeader',
    }

</script>


<template>

    <header>
        <div class="container d-flex justify-content-between">
            <a href="#">
                <img src="/img/logo.png" alt="Logo Avada">
            </a>
            <nav class="navbar navbar-expand-md">
                <!-- Bottone per aprire il menu -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- menu -->
                <div class="collapse navbar-collapse" id="nav-menu">

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>

                    <div class="header-input d-flex" role="search">
                        <input class="" type="search" placeholder="Search" aria-label="Search">
                        <button class="">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                </div>
            </nav>

        </div>
    </header>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@import "../style/main.scss";
// @import "@fontsource/fira-sans.css";


    header {
        background-color: $blue-estern;
        // height: 100px;
        padding: 10px 0;

        .header-input {
            margin-left: 20px;

            input {
                width: 100px;
            }
        }
    }


</style>

