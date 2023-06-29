<template>
    <main>
        <customHeader></Customheader>
        <projectTitle
            :name = "proj.name"
            :desc_short = "proj.data.desc_short"
            :desc_long = "proj.data.desc_long"
            :image = "'/_nuxt/images/projects/' + proj.data.image"/>
        <customFooter></customFooter>
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const URI = useRuntimeConfig().public.baseURL
        + '/server/project/'
        + id
    console.log('Fetching: "' + URI + '"')
    const { data: proj } =
        await useFetch(URI)
</script>

<style scoped>
</style>
