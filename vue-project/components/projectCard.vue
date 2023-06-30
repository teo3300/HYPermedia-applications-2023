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
        <NuxtLink :to = "link" class="link">
            <div class="card">
                <div class="image-container">
                    <img :src = "`/img/projects/${image}`"
                         class="img"/>
                </div>
                <span class="title">{{ text }}</span>
            </div>
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

    a {
        text-decoration: none;
        color: white;
    }

    .image-container {
        display: flex;
        justify-content: center;
        border-radius: 10px;
        width: 250px;
        height: 250px;
        overflow: hidden;
        margin-bottom: 10px;
    }

    .img {
        vertical-align: middle;
        max-width: 100%;
        height: auto;
        width: auto;
        margin: auto;
    }

    .card {
        display: flex;
        flex-flow: column;
        padding: 20px;
        border-radius: 20px;
        width: fit-content;
        height: fit-content;
        background-color: #3A506B;
    }

    .title {
        font-size: 2em;
        text-align: center;
    }

</style>
