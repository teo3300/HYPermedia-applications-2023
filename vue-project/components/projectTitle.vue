<template> <!-- Whole section (bluish) -->
    <div id=main>
        <h1>{{name}}</h1>
        <div id=content> <!-- Actual content -->
            <div id="title-section"> <!-- Text section -->
                <img alt="Project's image"
                     :src="`/img/projects/${image}`"/>
                <div id="desc-short"> <!-- Short description of the project -->
                    {{desc_short}}
                </div>
            </div>
            <div class="bar"></div>
            <div id="desc-long"> <!-- Longer description of the project -->
                <p v-for="item in desc_long"
                    :key="item.id">
                        {{item}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'name',
            'desc_short',
            'desc_long',
            'image',
            'path'
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
        font-size: 3em;
        font-weight: lighter;
        margin: 0px;
        padding: 10px;
    }

    #content {
        display: flex;
        flex-flow: column;
        background: #3A506B;
        color: white;
        margin-left: 30px;
        border: 2px solid white;
        border-right: 0;
        box-shadow: -4px -4px 16px 0 rgba(0,0,0,0.3);
    }

    #title-section {
        display: flex;
        flex-flow: row-reverse;
    }

    #desc-short {
        font-size: 1.5em;
        margin-bottom: 30px;
        padding: 3em 6em;
        font-weight: normal;
    }

    #desc-long {
        font-weight: lighter;
        text-align: justify;
        font-size: 1.2em;
        margin-top: 1em;
        padding: 10px 200px;
    }

    img {
        margin: 20px;
        width: 350px;
        height: 350px;
        object-fit: cover;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
    }

    .bar {
        width: 80%;
        height: 0px;
        border: solid 1px #5BC0BE;
        margin: auto;
    }
</style>
