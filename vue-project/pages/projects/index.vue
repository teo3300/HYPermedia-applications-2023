<template>
    <customHeader/>
    <main>
        <h1>Projects</h1>
        <div id="top-section">
            <div id="top-title">
                <h2>Top projects</h2>
                <p>We present to you a meticulously curated
                    assortment of our most significant, highly
                    triumphant, and exceedingly ambitious undertakings
                    that encapsulate the pinnacle of our achievements
                    thus far.</p>
            </div>
            <Carousel option="projectOption" class="carouselProject"
                :slides="top_proj"/>
        </div>
        <div id="card-title">
            <h2>All projects</h2>
            <p>To provide you with a comprehensive overview,
                we are pleased to present an extensive compilation
                containing an exhaustive and inclusive inventory
                of every single project that oure VC I3E is presently
                actively engaged in, diligently pursuing their
                respective objectives and aspirations.</p>
        </div>
        <div id="card-container-outer">
            <div id="card-container-inner">
                <projectCard v-for = "project of projects"
                             :text = "project.name"
                             :image = "project.data.image"
                             :link = "'/projects/' + project.id"/>
            </div>
        </div>
    </main>
    <customFooter/>
</template>

<script setup>
    const URI = useRuntimeConfig().public.serverURL
        + '/projects'
    console.log('/projects\tFetching: "' + URI + '"')
    const { data: projects } = await useFetch(URI)

    const TOP = useRuntimeConfig().public.serverURL
        + '/projects/top'
    console.log('/projects\tFetching: "' + TOP + '"')
    const { data: top_proj } = await useFetch(TOP)
</script>

<style scoped>

    main {
        font-family: 'Cambay', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        color: #0B132B;
    }

    h1 {
        text-align: center;
    }

    .test {
        display: flex;
        flex-flow: row;
    }

    #card-title {
        width: fit-content;
    }

    #card-title > h2,
    #top-title > h2 {
        text-align: left;
        margin-left: 40px;
    }

    #card-title > p,
    #top-title > p {
        text-align: justify;
        margin-left: 80px;
        max-width: 600px;
    }

    #top-section {
        background: #5BC0BE;
        padding: 20px 0;
    }

    #card-container-outer {
        padding: 20px 0 20px 40px;
    }

    #card-container-inner {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
        background-color: #6FFFE9;
        padding: 20px 40px 20px 0;
        border-radius: 20px 0 0 20px;
    }

    .carouselProject {
        width: 80%;
        height: 350px;
    }

    .carousel-item {
        background-color: white;
        border:
    }

</style>
