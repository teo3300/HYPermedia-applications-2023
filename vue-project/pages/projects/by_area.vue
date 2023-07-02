<template>
    <main>
        <CustomHeader/>
        <projectsInArea class="tmpFix"
            v-for = "area in areas"
            :title = "area.name"
            :projData = "area.Projects"
            :img = "area.data.imgURL"
            :link = "'/areas/' + area.id"
            :desc_short = "area.data.description"/>
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
</script>

<style scoped>
    .tmpFix {
        width: 100%;
        background-color: #5BC0BE;
        margin-top: 20px;
    }
</style>
