<template>
    <CustomHeader />
    <main>
        <h1>Areas</h1>
        <div v-for = "area of areas">
        <AreaComponent 
                :title="area.name"
                :imageURL="area.data.imgURL"
                :description="area.data.description"
                :pageURL="'/areas/' + area.id"/>
            </div>
        <!--<div v-for="item in items" :key="item.id">
            <AreaComponent :imageURL="item.imgURL" :title="item.title" :descriptions="item.descriptions" :pageURL="item.pageURL"/>
        </div>-->
    </main>
    <CustomFooter />
</template>

<script setup>
/*
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    imgURL: '_nuxt/images/technologyAndSoftware.jpg',
                    title: 'Technology & Software',
                    descriptions: 'We invest in innovative software solutions, emerging technologies, and disruptive tech startups that have the potential to transform industries and reshape the digital landscape.',
                    pageURL: 'areaTech'
                },
                {
                    id: 2,
                    imgURL: '_nuxt/images/healthcareAndBiotechnology.jpg',
                    title: 'Healthcare & biotechnology',
                    descriptions: 'We support groundbreaking advancements in healthcare, biotech research, pharmaceuticals, and medical devices, aiming to improve patient outcomes, revolutionize treatments, and address pressing global health challenges.',
                    pageURL: 'areaHealth'
                },
                {
                    id: 3,
                    imgURL: '_nuxt/images/cleanEnergyAndSustainability.jpg',
                    title: 'Clean energy & sustainability',
                    descriptions: 'We believe in sustainable energy solutions, renewable technologies, and environmentally conscious initiatives that promote a greener future, combat climate change, and reduce our carbon footprint.',
                    pageURL: 'areaEnergy'
                },
                {
                    id: 4,
                    imgURL: '_nuxt/images/Ecommerce.jpg',
                    title: 'E-Commerce & Consumer goods',
                    descriptions: 'We invest in promising startups and emerging brands within the e-commerce and consumer goods sectors, capitalizing on changing consumer preferences, digital transformation, and the evolving retail landscape.',
                    pageURL: 'areaEcommerce'
                },
            ],
        }
    }
} */

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