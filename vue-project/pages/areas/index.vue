<template>
    <CustomHeader />
    <main>
        <h1>Areas</h1>
        <div v-for="area of areas">
            <AreaComponent :title="area.name" :imageURL="area.data.imgURL" :description="area.data.description"
                :pageURL="'/areas/' + area.id" />
        </div>
    </main>
    <CustomFooter />
</template>

<script setup>

const URI = useRuntimeConfig().public.serverURL
    + '/areas'
console.log('/areas\tFetching: "' + URI + '"')
const { data: areas } = await useFetch(URI)
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

main {
    font-family: 'Cambay', sans-serif;
    width: 80%;
    margin: 0px 10%;
}

h1 {
    text-align: center;
}
</style>