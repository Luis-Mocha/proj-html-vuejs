<script>

    export default {
        name: 'AppFooter',
        props: ["infoFoot"],
    }
    
</script>


<template>

    <footer>

        <!-- menus footer -->
        <div class="container">
            <div class="menu-footer">
                <!-- Colonna 1 -->
                <div class="footer-column col-12 col-md-3">
                    <div class="footer-title mb-2">
                        Avada Tech Forums
                    </div>
                    <p>
                        Sed semper, nisl id feugiat eleifend, erat est digssim felis, quis auctor elit enim nec ante. Cras nibh risus. Pellentesque non mi sit amet mi intermentum. 
                    </p>
                </div>

                <!-- Colonna 2, 3, 4 -->
                <div v-for="(elem, index) in infoFoot" :key="index" class="footer-column col-12 col-md-3">
                    <div class="footer-title">
                        {{ elem.title }}
                    </div>
                    <ul>
                        <li v-for="(subElem, subIndex) in elem.list_item" :key="subIndex" class="footer-item">
                            <span> > </span>
                            <a href="">
                                {{ subElem }}
                            </a>
                        </li>
                    </ul>
                </div>
                

            </div>
        </div>

        <hr>

        <!-- social footer -->
        <div class="container">
            <div class="social-footer">
                <div id="info-sito" class="col-12 col-md-8 d-md-flex">
                    <span> © Copyright 2012-2020</span>
                    <span>|</span>
                    <span> Avada Team by <a href="">Theme Fusione</a></span>
                    <span>|</span>
                    <span> All Rights Reserved</span>
                    <span>|</span>
                    <span> Powered by <a href="">WordPress</a> </span>
                </div>

                <div id="social-links" class="col-12 col-md-4 justify-content-evenly justify-content-md-end mt-3 mt-md-0">
                    <a href="" class="ms-md-3">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="" class="ms-md-3">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="" class="ms-md-3">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="" class="ms-md-3">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@import "../style/main.scss";

    .menu-footer {
        display: flex;
        flex-wrap: wrap;
        padding: 30px 0;

        .footer-column {
            padding: 0 10px;
            margin: 20px 0;

            .footer-title {
                font-weight: 600;
                font-size: 17px;
                text-transform: uppercase;
            }

            .footer-item {
                height: 70px;
                font-size: 14px;
                font-weight: 600;
                border-bottom: 1px solid $silver;
                display: flex; 
                align-items: center; 
                
                span {
                    margin-right: 5px;
                }
            }
        }
    }

    .social-footer {
        padding: 30px 0;
        display: flex;
        flex-wrap: wrap;

        #info-sito {
            align-items: center;

            span {
                margin-right: 5px ;

                a {
                    font-weight: 600;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            
        }

        #social-links {
            display: flex;
            align-items: center;

            a {
                i {
                    color: white;
                    line-height: 50px;
                    width: 50px;
                    height: 50px;
                    text-align: center;
                    border-radius: 50%;
                }
                .fa-facebook-f {
                    background-color: rgb(60,89,152);
                }
                .fa-twitter {
                    background-color: rgb(84,172,238) ;   
                }
                .fa-instagram {
                    background-color: rgb(63,114,155);
                }
                .fa-youtube {
                    background-color: red;
                }
            }
        }
    }

</style>