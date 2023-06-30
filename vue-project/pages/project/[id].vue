<template>
    <main>
        <customHeader></Customheader>
        <ShortBreadCrumbs
            parent = "Projects"
            link = "/projects"
            :current = "proj.name"/>
        <projectTitle
            :name = "proj.name"
            :desc_short = "proj.data.desc_short"
            :desc_long = "proj.data.desc_long"
            :image = "proj.data.image"/>
        <customFooter></customFooter>
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const URI = useRuntimeConfig().public.serverURL
        + '/project/'
        + id
    console.log('/project/' + id + '\tFetching: "' + URI + '"')
    const { data: proj } =
        await useFetch(URI)
</script>

<style>
</style>
