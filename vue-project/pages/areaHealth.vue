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
            title: "Healthcare & biotechnology",
            imageURL: '_nuxt/images/healthcareAndBiotechnology.jpg',
            description: "The Healthcare and Biotechnology sector is at the forefront of scientific discovery, medical advancements, and improving the quality of human life. This dynamic field encompasses a wide range of investment opportunities, including pharmaceutical research and development, innovative medical devices, diagnostics, genomics, and biotech startups. \n We invest in healthcare and biotechnology to offer the potential to revolutionize patient care, tackle global health challenges, and drive progress in areas such as personalized medicine, precision therapies, regenerative medicine, and breakthrough treatments for diseases.",
            slidesPartners: [
                {
                    imgPartner: "_nuxt/images/partners/hazylogo.png",
                    namePartner: "HAZY",
                    textPartner: "Key words : AI, Machine Learning, Data and Analytics, Business Intelligence",
                    urlPartner: "https://hazy.com",
                },
                {
                    imgPartner: "_nuxt/images/partners/hazylogo.png",
                    namePartner: "HAZY",
                    textPartner: "This close-up picture features the neck of a guitar as its main focus. The dominant colors in the image are AUTUMNAL and CAFE AU LAIT, according to AI analysis. According to Google Lens, the closest match for the picture is a '1950's Gretsch Mahogany Soprano Ukulele'.",
                    urlPartner: "",
                },
                {
                    imgPartner: "_nuxt/images/partners/hazylogo.png",
                    namePartner: "HAZY",
                    textPartner: "This picture captures a guitar resting on a chair. The AI identifies the main focus as a guitar with a strap. The dominant colors in the image are WINETASTING, ESTATE BLUE, and COGNAC. According to Google Lens, the closest match for the picture is 'Melody Leather Guitar Strap Headstock Tie Accessories for Guitar.''",
                    urlPartner: "",
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