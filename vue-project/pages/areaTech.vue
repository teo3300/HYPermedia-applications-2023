<template>
    <CustomHeader />
    <main>
        <AreaSinglePage :title="title" :imageURL="imageURL" :description="description" :slidesPartners="slidesPartners" :slidesProjects="slidesProjects"/>
    </main>
    <CustomFooter />
</template>

<script>
export default {
    data() {
        return {
            title: "Technology & Software",
            imageURL: '_nuxt/images/technologyAndSoftware.jpg',
            description: "Dynamic and rapidly evolving sector, it offers exciting investment opportunities. This area encompasses a wide range of innovations, including cutting-edge software solutions, artificial intelligence, machine learning, blockchain, cloud computing, and more. \n We support startups and companies that are poised to improve operational efficiency, enhance user experiences, and drive digital transformation. By investing in technology and software, we aim to support advancements that have the potential to shape the future and unlock new possibilities in various sectors of the economy.",
            slidesPartners: [
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    name:"HAZY",
                    text: "AI, Machine Learning, Data and Analytics, Business Intelligence",
                    url : "https://hazy.com",
                },
                {
                    img: "_nuxt/images/partners/preligens_logo.jpg",
                    name:"PRELIGENS",
                    text: "AI, Machine Learning, Space Tech, Data and Analytics, Business Intelligence, Communications",
                    url : "https://preligens.com/",
                },
                {
                    img: "_nuxt/images/partners/Seldonlogo.png",
                    name:"SELDON",
                    text: "AI, Machine Learning, Data and Analytics, Business Intelligence, Open Source",
                    url : "https://www.seldon.io/",
                },
                {
                    img: "_nuxt/images/partners/veesionlogo.png",
                    name: "Veesion",
                    text: "CPG & Consumer Goods, AI, Machine Learning, Privacy and Security, Video, Business Intelligence, Communications",
                    url: "https://veesion.io/",
                },
            ],
            slidesProjects: [
                {
                    img: "_nuxt/images/projects/hazyAndI3E.png",
                    name: "Synthetic data", 
                    text: "We support the development and use of synthetic data with Hazy. The synthetic data is a revolutionary approach that bridges the gap between data privacy and data-driven innovation. Our mission is to drive forward the adoption of synthetic data, unlocking new possibilities while safeguarding sensitive information and ensuring compliance with privacy regulations.",
                    url : "https://hazy.com/resources/2023/06/01/the-state-of-synthetic-data",
                },
                {
                    img: "_nuxt/images/projects/preligensAndI3E.png",
                    name: "AI factory", 
                    text: "This is a game-changing project, featuring a multi-intelligence, AI-enabled operating system. This innovative platform addresses complex intelligence problems by seamlessly integrating cutting-edge technologies like machine learning, natural language processing, computer vision, and predictive analytics. ",
                    url : "https://preligens.com/products/ai-factory",
                },
                {
                    img: "_nuxt/images/projects/seldomAndI3E.png",
                    name: "Alibi detect", 
                    text: "This is a powerful open-source Python library dedicated to outlier, adversarial, and drift detection. This innovative toolset provides a comprehensive range of functionalities to identify anomalies, detect adversarial attacks, and monitor data drift in various domains, with transparency and interpretability.",
                    url : "https://www.seldon.io/solutions/open-source-projects/alibi-detect",
                },
                {
                    img: "_nuxt/images/projects/veesionAndI3E.png",
                    name: "AI against theft", 
                    text: "This project empowers businesses to harness the power of AI in preventing theft across various types of stores. By leveraging advanced artificial intelligence technology, Veesion offers a comprehensive solution to detect and deter theft incidents. Join us on this transformative journey to enhance security measures, protect your assets, and create a safer shopping environment.",
                    url : "https://veesion.io/secteurs/",
                },
            ],
        }
    }
}
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

main {
    width: 80%;
    padding: 20px 10%;
    font-family: 'Cambay', sans-serif;
}
</style>