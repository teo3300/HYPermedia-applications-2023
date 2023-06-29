<template>
    <div class="title-description">
        <img :src="`/${imageURL}`" alt="Illustration image" />
        <div class="blue-transparent-1"></div>
        <h1>{{ title }}</h1>
        <div class="blue-transparent-2">
            <p>{{ description }}</p>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: '',
        },
        imageURL: {
            type: String,
            required: true,
            default: '',
        },
        description: {
            type: String,
            required: true,
            default: 'No description',
        },

    }
}
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title-description {
    width: 100%;
    height: 350px;
    color: white;
    white-space: pre-wrap;
}

.blue-transparent-1 {
    position: relative;
    top: -101%;
    width: 100%;
    height: 100%;
    background: rgba(28, 37, 65, 0.60);
    z-index: 2;
}

h1 {
    top: -200%;
    font-weight: 400;
    font-family: 'Crushed', serif;
}

h1,
p {
    position: relative;
    z-index: 3;
    text-align: center;
}

.blue-transparent-2 {
    background: rgba(0, 0, 0, 0.50);
    z-index: 2;
    padding: 20px;
    width: 80%;
    margin: auto 10%;
    position: relative;
    top: -200%;
}

p {
    font-family: 'Cambay', sans-serif;
}
</style>