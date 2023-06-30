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
                    img: "_nuxt/images/partners/inatologo.png",
                    name: "Inato",
                    text: "Health Tech, AI, Biotech, Machine Learning, Pharma",
                    url: "https://inato.com/",
                },
                {
                    img: "_nuxt/images/partners/aqemialogo.png",
                    name: "Aqemia",
                    text: "Health Tech, AI, Biotech, Machine Learning, Pharma, Quantum Computing",
                    url: "https://www.aqemia.com/",
                },
                {
                    img: "_nuxt/images/partners/pososlogo.png",
                    name: "Posos",
                    text: "Health Tech, AI, Machine Learning",
                    url: "https://www.posos.co/",
                },
            ],
            slidesProjects: [
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    name : "Case Study: Phase III AAD Trial",
                    text: "Collaborate with Inato is to access untapped patient populations and identify qualified sites that could enroll patients in short amount of time for various kind of medical research. Discover how partnering with Inato allowed them to meet their trial goals and accelerate their timeline.",
                    url : "https://inato.com/marketplace-materials/case-study-phase-iii-aad-trial/", 
                },
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    name : "Quantum-inspired physics and AI",
                    text: "Aqemia combines quantum-inspired physics and AI to revolutionize drug discovery. By harnessing advanced algorithms, they accelerate and enhance the development of life-saving medications. Join us on this transformative journey to reshape the future of pharmaceutical research.",
                    url : "https://www.aqemia.com/#first_section", 
                },
                {
                    img: "_nuxt/images/partners/hazylogo.png",
                    name : "Medical decision",
                    text: "This project aims to provide invaluable support for medical prescriptions and decisions. Through the integration of advanced technologies and data analysis, we offer an innovative solution that assists healthcare professionals in making informed choices and ensuring optimal patient care.",
                    url : "https://www.posos.co/solutions/decision-medicale", 
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