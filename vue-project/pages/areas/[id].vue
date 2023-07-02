<template>
    <main>
        <customHeader></Customheader>
            <AreaSinglePage 
                :title="area.name" 
                :imageURL="area.data.imgURL" 
                :description="area.data.summary" 
                :slidesPartners="area.data.slidesPartners" 
                :slidesProjects="area.data.areaProjects"/>
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

<style>
</style>
