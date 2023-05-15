<script>

    export default {
        name: 'AppHeader',
        props: ["infoNav"],
        data() {
            return {
                control: false,
            }
        },
        methods: {
            openInput() {
                if (this.control === false) {
                    document.getElementById('search-input').classList.add('open')
                    document.querySelector('.search-button').classList.add('open')
                    this.control = true
                } else {
                    document.getElementById('search-input').classList.remove('open')
                    document.querySelector('.search-button').classList.remove('open')
                    this.control= false
                }
            }
        }
    }

</script>


<template>

    <header>
        <div class="container d-flex flex-wrap justify-content-between">

            <a href="#" class="header-logo d-flex align-items-center">
                <img src="/img/logo.png" alt="Logo Avada">
            </a>
            
            <nav class="navbar navbar-expand-md">
                <!-- menu -->
                <div class="collapse navbar-collapse" id="nav-menu">

                    <ul class="navbar-nav" v-for="(elem, index) in infoNav" :key="index">
                        <li class="nav-item">
                            <a class="me-3" aria-current="page" :href="elem">{{elem}}</a>
                        </li>
                    </ul>

                    <div class="me-3 my-btn btn-black">
                        Join us
                    </div>

                    <div class="header-input d-flex" role="search">
                        <input id="search-input" type="search" placeholder="Search.." aria-label="Search">
                        <button class="search-button" @click="openInput()">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                </div>

                <!-- Bottone per aprire il menu -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <!-- <span class="navbar-toggler-icon"></span> -->
                    <i class="fa-solid fa-bars"></i>
                </button>

            </nav>

        </div>
    </header>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@import "../style/main.scss";

    header {
        background-color: $blue-estern;
        padding: 10px 0;
        .navbar {
            padding: 0;

            li {
                a {
                color: white;
                text-transform: capitalize;
                line-height: 2;
                }
            }

            .header-input {
                margin: 12px 0;
                #search-input {
                    width: 0;
                    border-color: white;
                }
                #search-input.open {
                    width: 130px;
                    padding: 2px 5px;
                }

                .search-button {
                    color: white;
                    background-color: transparent;
                    padding: 2px 5px;
                    border: 0;
                    
                }
                .search-button.open {
                    border: 1px solid white;
                    border-left: 0;
                }
            }

            .navbar-toggler {
                color: white;
                background-color: transparent;
                border: none;
                font-size: larger;
                box-shadow: none;
            }
        } 
    }
</style>

