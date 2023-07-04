<!--
    Smaller card to display information in the information page. The difference with the card component is that there is no image here.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->

<template>
    <main class="card">
        <NuxtLink :to = "link" class="link">
            <div class="image-container">
                <img class="img"
                     :src="`/HYPermedia-applications-2023/img/projects/${image}`"/>
            </div>
            <div class="bar"></div>
            <span class="text">
                {{ text }}
            </span>
        </NuxtLink>
    </main>
</template>

<script>
    export default {
        props: [
            'text',
            'image',
            'link'
        ]
    }
</script>

<style scoped>

    .card {
        width: 22%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        background-color: white;
        margin: 5px;
        padding-bottom: 8px;
        text-align: center;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
        transform: scale(1.1);
    }

    .img {
        width: 100%;
        object-fit: cover;
    }

    .link {
        color: #000;
        text-decoration: none;
    }

    .bar {
        width: 80%;
        height: 0px;
        border: solid 1px #5BC0BE;
        margin: auto;
        margin-bottom: 8px;
    }

    .text {
        padding: 8px;
    }

</style>
