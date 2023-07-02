<script>
    export default {
        props: [
            'name',
            'desc_short',
            'image',
            'link'
        ]
    }
</script>

<template>
    <main class="main">
        <div class="image-container">
            <img
                :src="`/HYPermedia-applications-2023/img/people/${image}`"
                class="image"
                alt="Supervisor's picture"/>
        </div>
        <div class="text-container">
            <div class="text-inner">
                <h2>Supervisor</h2>
                <h3 class="supervisor-name">
                    {{name}}
                </h3>
                <p class="description">
                    {{desc_short}}
                </p>
                <seeMore
                    :link="link"/>
            </div>
        </div>
    </main>
</template>

<style scoped>

    .main {
        display: flex;
        flex-flow: row;
        color: #1C2541;
    }

    .image-container {
        width: 40%;
        text-align: center;
    }

    .image {
        object-fit: cover;
        aspect-ratio: 1/1;

        border-radius: 50%;

        width: 50%;
        margin: 100px auto;
    }

    .text-inner {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .text-container {
        width: 60%;
        padding: 50px;
        padding-top: 0px;
        text-align: center;
    }

    .text-container .description {
        text-align: justify;
    }

</style>
