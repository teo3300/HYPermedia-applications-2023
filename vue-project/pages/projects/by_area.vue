<template>
    <main>
        <CustomHeader/>
        <ShortBreadCrumbs
            parent="Projects"
            link="/projects"
            current="By area"/>
        <projectsInArea class="comp"
            v-for = "area in areas"
            :area = "area"/>
        <CustomFooter/>
    </main>
</template>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const URI = useRuntimeConfig().public.serverURL
              + '/areas'
    console.log('/projects/by_area' + id + '\tFetching: "' + URI + '"')
    const {data: areas } = await useFetch(URI)

    useSeoMeta({
        title: "Projects by area - I3E VC",
        description: "All our projects, divided by area"
    })
</script>

<style scoped>
    .comp {
        width: 100%;
        margin: 20px 0;
    }
</style>

<!-- This is going down in history -->
<style>
    .carousel-item {
        background-color: white;
    }
</style>
