<template>
    <main>
    <customHeader></customHeader>
        <div id="card-container">
            <projectCard v-for = "project of projects"
                :text = "project.name"
                :image = "project.data.image"
                :link = "'/project/' + project.id"
                class="projectCard"/>
        </div>
    <customFooter></customFooter>
    </main>
</template>

<script setup>
    const URI = useRuntimeConfig().public.serverURL
        + '/projects'
    console.log('/projects\tFetching: "' + URI + '"')
    const { data: projects } = await useFetch(URI)
</script>

<style scoped>

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    #card-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }
</style>
