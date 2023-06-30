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
            title: "E-Commerce & Consumer goods",
            imageURL: '_nuxt/images/Ecommerce.jpg',
            description: "The E-commerce and Consumer Goods sector encompasses investments in the digital marketplace, online retail, direct-to-consumer brands, and emerging consumer trends. We support innovative startups and established companies that leverage technology, data analytics, and logistics to transform the way goods are bought and sold. \n Investing in e-commerce and consumer goods allows for tapping into the growing digital economy, capturing shifting consumer behavior, and participating in the evolution of retail.",
            slidesPartners: [
                {
                    img: "_nuxt/images/partners/veesionlogo.png",
                    name: "Veesion",
                    text: "CPG & Consumer Goods, AI, Machine Learning, Privacy and Security, Video, Business Intelligence, Communications",
                    url: "https://veesion.io/",
                },
                {
                    img: "_nuxt/images/partners/RELEX-logo.png",
                    name: "Relex solutions",
                    text: "CPG & Consumer Goods, AI, Machine Learning, Data and Analytics, Sales and Marketing, Business Intelligence, CRM",
                    url: "https://www.relexsolutions.com/",
                },
            ],
            slidesProjects: [
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    text: "This picture features a guitar placed on a chair, with a black background emphasizing its presence. The dominant colors captured in the image are Sudan Brown, Obsidian, and Cappuccino. According to Google Lens, the closest match for the picture is a 'Guitar Meazzi Orient+Case' priced at 67 euros.",
                },
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    text: "This close-up picture features the neck of a guitar as its main focus. The dominant colors in the image are AUTUMNAL and CAFE AU LAIT, according to AI analysis. According to Google Lens, the closest match for the picture is a '1950's Gretsch Mahogany Soprano Ukulele'.",
                },
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    text: "This picture captures a guitar resting on a chair. The AI identifies the main focus as a guitar with a strap. The dominant colors in the image are WINETASTING, ESTATE BLUE, and COGNAC. According to Google Lens, the closest match for the picture is 'Melody Leather Guitar Strap Headstock Tie Accessories for Guitar.''",
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