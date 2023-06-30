<!--
    Smaller card to display information in the information page. The difference with the card component is that there is no image here.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->

<template>
    <main>
        <div class="card">
            <NuxtLink :to = "link" class="link">
                <div class="image-container">
                    <img :src="`/HYPermedia-applications-2023/img/projects/${image}`"
                         class="img"/>
                </div>
                <span class="title">{{ text }}</span>
            </NuxtLink>
        </div>
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

    .link {
        text-decoration: none;
        color: white;
    }

    .image-container {
        display: flex;
        justify-content: center;
        border-radius: 3px;
        max-width: 250px;
        aspect-ratio: 3/2;
        overflow: hidden;
        margin-bottom: 6px;
    }

    .img {
        vertical-align: middle;
        max-width: 100%;
        width: auto;
        margin: auto;
        transform: translateY(-33%);
    }

    .card {
        display: flex;
        flex-flow: column;
        padding: 6px;
        border-radius: 6px;
        width: fit-content;
        height: fit-content;
        background-color: #3A506B;
    }

    .image-container:hover {
        width: 280px;
    }


    .card {
        font-size: 1.5em;
        text-align: center;
    }

</style>
