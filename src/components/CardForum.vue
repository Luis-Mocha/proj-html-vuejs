<script>

export default {
    name: "CardForum",
    props: ["info"],
}
    
</script>


<template>

    <div class="card-forum">
        <div>
             
            <a href="#" class="icon-forum">
                <i :class="info.iconClass"></i>
            </a>
            
            
            <div class="title-forum">
                {{ info.title }}
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@import "../style/main.scss";

    .card-forum {
        background-color: white;
        border-top: 3px solid $blue-estern;
        padding-top: 3px;
        width: calc(100% / 1 - 120px);
        aspect-ratio: 1;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon-forum {
            background-color: $salmon;
            color: white;
            width: 85px;
            height: 85px;
            margin: 0 auto 5px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;

            &:hover {
                border-radius: 30%;
                scale: 1.1;
                background-color: $blue-estern;
                transition: 0.6s;
            }
        }

        .title-forum {
            font-size: 1.3rem;
            font-weight: 800;
        }
    }


    @media screen and (min-width: 425px) {
        .card-forum{
            width: calc(100% / 2 - 40px);
        }   
    }

    @media screen and (min-width: 768px) {
        .card-forum{
            width: calc(100% / 4 - 40px);
        }   
    }

</style>