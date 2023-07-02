<script>
 export default {
     props: [
         'title',
         'img',
         'link',
         'desc_short',
         'projData'
         // TODO: insert carousel interaction
     ]
 }
</script>

<template>
    <main>
        <h2 class="title">{{title}}</h2>
        <img
            :src="`${img}`"
            alt="Area's image"/>
        <NuxtLink
            :to = "link">
           {{desc_short}}
        </NuxtLink>
        <p>{{projData}}</p>
        <Carousel class="carousel"/>
    </main>
</template>

<style scoped>
    main {
        font-weight: lighter;
        text-align: center;
        font-size: 2em;
        display: flex;
        flex-direction: column;
    }

    .title {
        font-weight: lighter;
    }
</style>
