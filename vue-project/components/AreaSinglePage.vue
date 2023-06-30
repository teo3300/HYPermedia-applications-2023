<template>
    <p class="breadcrumbs"> <NuxtLink to="/Areas">Areas</NuxtLink> > {{title}} </p>
    <TitleDescriptionArea :title="title" :imageURL="imageURL" :description="description"/>
    <div class="subtitle">
            <h2>Partners</h2>
            <div class="bar"></div>
        </div>
        <Carousel :slides="slidesPartners" class="carouselPartner"></Carousel>
        <div class="subtitle">
            <h2>Projects</h2>
            <div class="bar"></div>
        </div>
        <Carousel :slides="slidesProjects" class="carouselProject"></Carousel>
    

</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: "",
        },
        imageURL: {
            type: String,
            required: true,
            default: "",
        },
        description: {
            type: String,
            required: true,
            default: "No description",
        },
        pageURL: {
            type: String,
            required: true,
            default: "",
        },
        slidesPartners: {
            type: Array, 
            required : true, 
            default: [],
        }, 
        slidesProjects: {
            type: Array, 
            required : true, 
            default: [],
        }, 
    },

}
</script>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

h1, .breadcrumbs {
    text-align : center ; 
    font-family : 'Cambay', sans-serif ; 
}

h2 {
    text-align: left;
    margin: 0px 10px;
}

.subtitle {
    display: flex;
    white-space: nowrap;
    height: 40px;
    margin: 20px 0px;
}

.bar {
    width: 100%;
    height: 0px;
    border: solid 1px #5BC0BE;
    margin: auto;
}
.carouselPartner, .carouselProject {
  width: 80%;
  margin: 20px 10%;
}
.carouselPartner {
    height: 12em;
}
.carouselProject {
    height: 20em;
}

</style>