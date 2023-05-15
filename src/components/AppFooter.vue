<script>

    export default {
        name: 'AppFooter',
        props: ["infoFoot"],
    }
    
</script>


<template>

    <footer>
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

</style>