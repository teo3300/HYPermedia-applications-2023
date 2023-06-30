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
                    img: "_nuxt/images/partners/RELEX-logo.png",
                    name: "Relex solutions",
                    text: "CPG & Consumer Goods, AI, Machine Learning, Data and Analytics, Sales and Marketing, Business Intelligence, CRM",
                    url: "https://www.relexsolutions.com/",
                },
            ],
            slidesProjects: [
                {
                    img: "_nuxt/images/projects/relexAndI3E.png",
                    name : "Demand Forecasting",
                    text: "This project specializes in demand forecasting for the retail and consumer goods industry. By leveraging advanced analytics and data-driven insights, Relex provides businesses with accurate predictions and valuable foresight into customer demand. ",
                    url : "https://www.relexsolutions.com/resources/demand-forecasting/", 
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