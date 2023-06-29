<template>
    <customHeader></customHeader>
    {{proj}}
    <customFooter></customFooter>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const URI = useRuntimeConfig().public.baseURL + '/server/projects'
    console.log('Fetching: "' + URI + '"')
    const { data: proj } = await useFetch(URI)
</script>

<style scoped>

</style>
