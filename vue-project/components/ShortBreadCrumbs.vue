<template>
    <main>
        <p class="breadcrumbs">
            <NuxtLink :to="link" >
                {{ parent }}
            </NuxtLink> > {{ current }}
        </p>
    </main>
</template>

<script>
    export default {
        props: [
            'parent',
            'link',
            'current'
        ]
    }
</script>

<style scoped>
    .breadcrumbs {
        text-align: center;
        font-family: 'Cambay', sans-serif;
    }
</style>
