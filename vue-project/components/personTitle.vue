<template>
    <div class="title-description">
        <div class="right">
        <h1>{{ name }}</h1>
        <h2>{{ post }}</h2>
        <p>{{ description }}</p>
    </div>
    <div class="left">
        <img :src="`/HYPermedia-applications-2023/img/people/${image}`" alt="Illustration image" id="person-image" />
    </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
            default: '',
        },
        post: {
            type: String,
            required: true,
            default: '',
        },
        description: {
            type: String,
            required: true,
            default: 'No description yet',
        },
        image: {
            type: String,
            required: true,
            default: 'No image yet',
        }

    }
}
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');
.title-description {
    background-color: #3A506B;
    color : white ; 
    gap : 15%; 
    display : flex ; 
    text-align: justify;
    margin-bottom : 20px ; 
}

.right, .left {
    width : 40%; 
}

.right {
    margin-left: 5%; 
}

.left {
    margin-right : 5%; 
}

#person-image {
    width :80%; 
    aspect-ratio: 1/1;
    object-fit: contain;
}

</style>