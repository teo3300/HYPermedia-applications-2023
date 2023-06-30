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

<script>
    const URI = useRuntimeConfig().public.serverURL
        + '/projects'
    console.log('/projects\tFetching: "' + URI + '"')
    export default defineNuxtComponent({
        async asyncData() {
            // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
            const projects = await $fetch(URI)

            return {
                projects
            }
        }
    })


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
