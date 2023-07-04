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

<template>
    <customHeader/>
    <main>
        <ShortBreadCrumbs parent="People" link="/people" :current="person.name" />
        <PersonTitle :name="person.name" :post="person.data.post" :description="person.data.desc_short" :image="person.data.image"/>
        
    </main>
    <customFooter/>
</template>

<style scoped>
main {
    width: 80%;
    margin: 0px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
