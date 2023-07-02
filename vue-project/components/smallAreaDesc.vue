<script>
 export default {
     props: [
         'image',
         'description'
     ]
 }
</script>

<template>
    <main>
        <img
            :src="`/HYPermedia-applications/2023/img/area${image}`"
            alt="Area's image"/>
        <p>
            {{description}}
        </p>
    </main>
</template>

<style scoped>

</style>
