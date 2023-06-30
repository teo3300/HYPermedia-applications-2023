<template>
    <CustomHeader />
    <main>
        <AreaSinglePage :title="title" :imageURL="imageURL" :description="description" :slidesPartners="slidesPartners"
            :slidesProjects="slidesProjects" />
    </main>
    <CustomFooter />
</template>

<script>
export default {
    data() {
        return {
            title: "Clean energy & sustainability",
            imageURL: '_nuxt/images/cleanEnergyAndSustainability.jpg',
            description: "In the Clean Energy and Sustainability sector we focus on investments that promote environmentally friendly practices, renewable energy sources, and sustainable solutions. It encompasses areas such as solar and wind energy, energy storage technologies, electric vehicles, green infrastructure, and initiatives aimed at reducing carbon emissions. \n Investing in clean energy and sustainability offers the opportunity to drive the transition to a more sustainable future, combat climate change, and create a positive environmental impact while also seeking attractive financial returns.",
            slidesPartners: [
                {
                    img: "_nuxt/images/partners/recycleyelogo.png",
                    name: "Recycleye",
                    text: "Climate Tech & Green Tech, Foodtech, Hardware, Machine Learning, Data and Analytics, Manufacturing, Wearables",
                    url: "http://recycleye.com/",
                },
                {
                    img: "_nuxt/images/partners/wunderlogo.png",
                    name: "Wunder",
                    text: "Greentech ,Social Impact ,Software ,Energy",
                    url: "https://www.wundercapital.com/",
                },
            ],
            slidesProjects: [
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    name : "Recycling with robotics", 
                    text: "This project invites you to embrace robotic automation as the next frontier in sorting innovation for recycling. By harnessing cutting-edge robotics technology, Recycleye revolutionizes the recycling process, streamlining sorting operations and increasing efficiency.",
                    url : "https://recycleye.com/solutions/",
                },
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    name:"Solar Energy provider", 
                    text: "This project offers a comprehensive solar energy solution tailored specifically for commercial and industrial real estate. As a dedicated solar energy provider, Wunder enables businesses to harness the power of renewable energy, reducing carbon footprint and energy costs.",
                    url: "https://www.wundercapital.com/", 
                },
            ],
        }
    }
}

</script>

<style scoped >
main {
    width: 80%;
    padding: 20px 10%;
}
</style>