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
        <Subtitle
            text="supervisor"/>
        <projectSupervisor
            :name = "proj.Person.name"
            :desc_short = "proj.Person.data.desc_short"
            :image = "proj.Person.data.image"
            :link = "'/people/' + proj.Person.id"/> <!-- TODO: Yet to be defined name of the link -->
        <Subtitle
            text="Related areas"/>
        <div class="related-areas">
            <div class="carousel-outer">
                <div class="carousel-inner">
                    <Carousel option="areaOption" class="carouselArea"
                              :slides="proj.Areas"/>
                </div>
            </div>
        </div>
        <customFooter></customFooter>
    </main>
</template>

<script setup>

    const route = useRoute()
    const id = route.params.id
    const URI = useRuntimeConfig().public.serverURL
              + '/projects/'
              + id
    console.log('/projects/' + id + '\tFetching: "' + URI + '"')
    const {data: proj } = await useFetch(URI)
                /*{
                    id: 1,
                    imgURL: '_nuxt/images/technologyAndSoftware.jpg',
                    title: 'Technology & Software',
                    descriptions: 'We invest in innovative software solutions, emerging technologies, and disruptive tech startups that have the potential to transform industries and reshape the digital landscape.',
                    pageURL: 'areaTech'
                },*/
</script>

<style>
    .related-areas {
        color: #1C2541;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }

    .related-areas h2 {
        font-weight: lighter;
        padding: 40px;
        font-size: 2em;
    }

    .carousel-outer {
        padding : 10px 10% ;
    }


    .carouselArea {
        width: 100%;
        height: 350px;
    }

    .carousel-item {
        background-color: white;
        border:
    }

</style>
