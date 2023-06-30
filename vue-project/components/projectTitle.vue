<template> <!-- Whole section (bluish) -->
    <div id=main>
        <h1>{{name}}</h1>
        <div id=content> <!-- Actual content -->
            <div id="text-section"> <!-- Text section -->
                <div id="desc-short"> <!-- Short description of the project -->
                    {{desc_short}}
                </div>
                <div class="bar"></div>
                <div id="desc-long"> <!-- Longer description of the project -->
                    <p v-for="item in desc_long"
                        :key="item.id">
                            {{item}}
                    </p>
                </div>
            </div>
            <img :src="`/img/projects/${image}`" alt="Project's image"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'name',
            'desc_short',
            'desc_long',
            'image'
        ]
    }
</script>
<!-- TODO:
     Content divs (text and image must be side by side -> ltr)
     all the othersrelative positions are top to bottom
-->
<style scoped>

    #main {
        text-align: center;
        background-color: #5BC0BE;
        color: #1C2541;
        font-family: 'Cambay', sans-serif;
        padding-bottom: 30px;
    }

    h1 {
        font-size: 4em;
        font-weight: lighter;
        margin: 0px;
        padding: 10px;
    }

    #content {
        display: flex;
        background: #3A506B;
        color: white;
        margin-left: 30px;
    }

    #text-section {
        padding: 1em 6em;
        font-weight: normal;
    }

    #desc-short {
        font-size: 1.5em;
        margin: 1.5em 1.5em 2.5em 1.5em;
    }

    #desc-long > p {
        text-align: justify;
        font-size: 0.9em;
        margin-top: 1em;
        padding: 10px 0;
    }

    img {
        max-width: 28%;
        aspect-ratio: 2/3;
    }

    .bar {
        width: 100%;
        height: 0px;
        border: solid 1px #5BC0BE;
        margin: auto;
    }
</style>
