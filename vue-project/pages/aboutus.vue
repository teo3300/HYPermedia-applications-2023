<!--    About us page    -->
<template>
    <main>
        <CustomHeader />
        <div class="content-about-us">
            <div class="title">
                <h1>About us</h1>
            </div>
            <div class="our-group">
                <div class="subtitle">
                    <h2>Our group</h2>
                    <div class="bar"></div>
                </div>
                <div class="content">
                    <p>
                        We are a dynamic collective driven by a shared passion for innovation and growth. 
                        With diverse expertise spanning finance, technology, and strategy, we bring a 
                        multifaceted approach to every endeavor. Guided by a commitment to excellence, 
                        we collaborate seamlessly, leveraging our collective strengths to identify and 
                        seize promising investment opportunities. Our group thrives on adaptability and 
                        forward-thinking, constantly seeking new horizons to shape the future of capital ventures. <br>
                        Together, we form a formidable force, poised to make a lasting impact in the world of investment.
                    </p>
                    <img src="../images/group-work.jpeg" alt="photo of our group work" id="img-group-work"/>
                </div>
            </div>
            <div class="history">
                <div class="subtitle">
                    <h2>Our history</h2>
                    <div class="bar"></div>
                </div>
                

            </div>
            <div class="where-are-we">
                <div class="subtitle">
                    <h2>Where are we ?</h2>
                    <div class="bar"></div>
                </div>
                

            </div>


        </div>
        <CustomFooter />

    </main>
</template>

<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Cambay';
}

.title {
    font-family: 'Cambay';
    text-align: center;
}

h2 {
    text-align: left;
    margin : 0px 10px ; 
}

.subtitle {
    display : flex ; 
    white-space: nowrap ; 
    height : 40px ; 
}
.bar {
    width : 100% ; 
    height : 0px ; 
    border : solid 1px #5BC0BE; 
    margin : auto ; 
}

.content {
    width : 80% ; 
    margin : 20px 10% ; 
    text-align : justify ; 
}

#img-group-work {
    width : 80% ; height : 300px ; 
    margin : 0px 10%; 
    object-fit: cover;

}
</style>