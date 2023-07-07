<template>
    <customHeader></customHeader>
    <main>
        <ShortBreadCrumbs parent="People" link="/people" :current="person.name" />
        <PersonTitle :name="person.name" :post="person.data.post" :description="person.data.desc_short" :image="person.data.image" />
        <div class="content-wrap">
            <div class="right">
                <div class="subtitle">
                    <h2>Experience</h2>
                    <div class="bar"></div>
                </div>
                <ul>
                    <li v-for="exp in person.data.experience"> {{ exp }} </li>
                </ul>
            </div>
            <div class="left">
                <div class="subtitle">
                    <h2 id="h2-decal">Example of projects </h2>
                    <div class="bar"></div>
                </div>
            </div>
            <Carousel :slides="person.Projects" option="projectOption" class="carouselProject"></Carousel>
                <!--<ProjectCard :text="person.Project.name" :image="project.data.image" :link="'/projects/' + project.id" />-->
        </div>
    <customFooter></customFooter>   
    </main>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const URI = useRuntimeConfig().public.serverURL
    + '/people/'
    + id
console.log('/people/' + id + '\tFetching: "' + URI + '"')
const { data: person } =
    await useFetch(URI)
</script>

<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2 {
    text-align: left;
    margin: 0px 10px;
    font-family: 'Cambay', sans-serif;
}
#h2-decal {
    margin: 0px 10px 0px 10%;
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
.wrap {
    display: flex;
    width: 90%;
    margin : 20px 5%; 
}

.right {

}
.left {
    width: 70% ; 
}


.carouselProject {
    width: 80%;
    margin: 20px 10%;
    height: 20em;
}
</style>
