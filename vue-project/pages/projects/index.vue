<template>
    <customHeader/>
    <main>
        <h1>Projects</h1>
        <div id="top-section">
            <div id="top-title">
                <Subtitle
                    text="Top projects"/>
                <div clas="top-cont">
                    <p class="text">We present to you a meticulously curated
                        assortment of our most significant, highly
                        triumphant, and exceedingly ambitious undertakings
                        that encapsulate the pinnacle of our achievements
                        thus far.</p>
                    <div class="seeseesee"><seeMore link="/projects/relevantprojects" class="nav-item"/></div>
                </div>
            </div>
            <Carousel option="projectOption" class="carouselProject"
                :slides="top_proj"/>
        </div>
        <Subtitle
            text="All projects"/>
        <div id="card-title">
            <p class="text">To provide you with a comprehensive overview,
                we are pleased to present an extensive compilation
                containing an exhaustive and inclusive inventory
                of every single project that oure VC I3E is presently
                actively engaged in, diligently pursuing their
                respective objectives and aspirations.</p>
        </div>
        <div id="card-container-outer">
            <div id="card-container-inner">
                <Deck class="deck"
                    :cards="projects"
                    option="projects"/>
            </div>
        </div>
        <Subtitle
            text="Projects divided by area"/>
        <p class="text">
            If you are interested, instead, into browsing our projects based on their
            area of interest, please go through this section
        </p>
        <div class="seeseesee last"><seeMore link="/projects/by_area" class="nav-item"/></div>
        <div clas="space"></div>
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

    #card-title {
        width: fit-content;
    }

    .headline {
        text-align: left;
        margin-left: 40px;
    }

    .text {
        text-align: justify;
        margin-left: 80px;
        max-width: 600px;
    }

    #top-section {
        padding: 20px 0;
    }

    .top-cont {
        display: flex;
        flex-direction: row;
    }

    #card-container-outer {
        padding: 20px 0 20px 40px;
    }

    #card-container-inner {
        background-color: #6FFFE9;
        padding: 20px 40px 20px 0;
    }

    .deck {
        width: 100%;
    }

    .carouselProject {
        width: 80%;
        padding : 10px 10% ; 
        height: 350px;
    }

    .seeseesee {
        margin-bottom: 20px;
    }

    .last {
        margin-bottom: 80px;
    }

</style>

<!-- Here's a little lesson in trickery -->
<style>
    .carousel-item {
        background-color: white;
    }
</style>
