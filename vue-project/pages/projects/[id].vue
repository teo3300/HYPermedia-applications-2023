<template>
    <main>
        <customHeader></Customheader>
        <ShortBreadCrumbs
            parent = "Projects"
            link = "/projects"
            :current = "proj.name"/>
        <projectTitle
            :name = "proj.name"
            :desc_short = "proj.data.desc_short"
            :desc_long = "proj.data.desc_long"
            :image = "proj.data.image"/>
        <projectSupervisor
            :name = "proj.Person.name"
            :desc_short = "proj.Person.data.desc_short"
            :image = "proj.Person.data.image"
            :link = "'/person/' + proj.Person.id"/> <!-- TODO: Yet to be defined name of the link -->
        <customFooter></customFooter>
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const URI = useRuntimeConfig().public.serverURL
        + '/project/'
        + id
    console.log('/project/' + id + '\tFetching: "' + URI + '"')
    const {data: proj } =
        await useFetch(URI)
                /*{
                    id: 1,
                    imgURL: '_nuxt/images/technologyAndSoftware.jpg',
                    title: 'Technology & Software',
                    descriptions: 'We invest in innovative software solutions, emerging technologies, and disruptive tech startups that have the potential to transform industries and reshape the digital landscape.',
                    pageURL: 'areaTech'
                },*/
</script>

<style>
</style>
