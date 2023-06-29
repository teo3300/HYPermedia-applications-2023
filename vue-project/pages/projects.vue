<template>
    <customHeader></customHeader>
    {{proj}}
    <customFooter></customFooter>
</template>

<script setup>
    const URI = useRuntimeConfig().public.serverURL + '/projects'
    console.log('Fetching: "' + URI + '"')
    const { data: proj } = await useFetch(URI)
</script>

<style>

</style>
