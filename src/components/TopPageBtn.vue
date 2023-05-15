<script>

    export default {
        name: 'TopPageBtn',
        methods: {
            scrollTop() {
                document.documentElement.scrollTop = 0;
            },

            aggiungiClasse() {
                const elementoDaAggiungereClasse = document.getElementById('top-button'); // Elemento a cui aggiungere la classe
                const distanzaScroll = window.pageYOffset || document.documentElement.scrollTop; // Distanza di scroll

                if (distanzaScroll >= 200) {
                elementoDaAggiungereClasse.classList.add('show');
                } else {
                elementoDaAggiungereClasse.classList.remove('show');
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.aggiungiClasse);
        },
    }

</script>

<template>
    <div id="top-button">
        <i class="fa-solid fa-chevron-up" @click="scrollTop()"></i>
    </div>
</template>

<style lang="scss">
@import "../style/main.scss";

    #top-button {
        background-color: rgb(71,71,71);
        color: white;
        padding: 1px 7px;
        position: sticky;
        left: 90%;
        bottom: 0;
        z-index: 99;
        cursor: pointer;

        display: none;
    }

    #top-button.show {
        display: inline-block;
    }


</style>