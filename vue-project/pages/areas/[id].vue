<template>
    <main>
        <customHeader></Customheader>
        <ShortBreadCrumbs parent="Areas" link="/areas" :current="area.name" />
        <TitleDescriptionArea :title="area.name" :imageURL="area.data.imgURL" :description="area.data.summary" />
        <div class="content-wrap">
            <div class="subtitle">
                <h2>Partners</h2>
                <div class="bar"></div>
            </div>
            <Carousel :slides="area.data.slidesPartners" option="partnerOption" class="carouselPartner"></Carousel>
            <div class="subtitle">
                <h2>Projects</h2>
                <div class="bar"></div>
            </div>
            <Carousel :slides="area.Projects" option="projectOption" class="carouselProject"></Carousel>
        </div>
        
        <customFooter></customFooter>
    </main>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const URI = useRuntimeConfig().public.serverURL
    + '/areas/'
    + id
console.log('/areas/' + id + '\tFetching: "' + URI + '"')
const { data: area } =
    await useFetch(URI)
</script>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

h1,
.breadcrumbs {
    text-align: center;
    font-family: 'Cambay', sans-serif;
}

h2 {
    text-align: left;
    margin: 0px 10px;
    font-family: 'Cambay', sans-serif;
}

.content-wrap {
    width: 80%;
    margin: 20px 10%;
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

.carouselPartner,
.carouselProject {
    width: 80%;
    margin: 20px 10%;
}

.carouselPartner {
    height: 12em;
}

.carouselProject {
    height: 20em;
}

@media only screen and (max-width: 768px) {
    .content-wrap {
        width: 96%;
        margin: 20px 2%;
    }
    .carouselPartner {
        height: 13em;
    }  
}
</style>