<template>
<CustomHeader></CustomHeader>
<h1>Most relevant projects</h1>
<NuxtLink to="/projects/2" class="ref"><div id="projec1">
    <img src="./images/aiIE3.png" alt="AI project illustration image">
    <p>This is a game-changing project, featuring a multi-intelligence, AI-enabled operating system. This innovative platform addresses complex intelligence problems by seamlessly integrating cutting-edge technologies like machine learning, natural language processing, computer vision, and predictive analytics.</p>
</div></NuxtLink>

<NuxtLink to="/projects/9" class="ref"><div id="projec2">
   
    <p> This project offers a comprehensive solar energy solution tailored specifically for commercial and industrial real estate. As a dedicated solar energy provider, Wunder enables businesses to harness the power of renewable energy, reducing carbon footprint and energy costs.</p>
    <img src="./images/solarenergyIE3.jpg" alt="Solar energy project illustration image">
</div></NuxtLink>

<NuxtLink to="/projects/6" class="ref"><div id="projec1">
    <img src="./images/medicalIE3.jpg" alt="medical prescription project illustration image">
    <p>This project aims to provide invaluable support for medical prescriptions and decisions. Through the integration of advanced technologies and data analysis, we offer an innovative solution that assists healthcare professionals in making informed choices and ensuring optimal patient care.</p>
</div></NuxtLink>

<NuxtLink to="/projects/4" class="ref"><div id="projec2" >
    
    <p>This project empowers businesses to harness the power of AI in preventing theft across various types of stores. By leveraging advanced artificial intelligence technology, Veesion offers a comprehensive solution to detect and deter theft incidents. Join us on this transformative journey to enhance security measures, protect your assets, and create a safer shopping environment.</p>
    <img src="./images/programmingIE3.jpg" alt="AI against thieft project illustration image">
</div></NuxtLink>
<CustomFooter></CustomFooter>
</template>

<style>
h1{
    text-align: center;
}
#projec1{
    background-color: #0B132B;
   display: flex;
   padding: 3px;
   border-top: 20px solid white;
   
}

#projec2{
    background-color: #0B132B;
    border-top: 20px solid white;
     display: flex;
}
.ref{
    text-decoration: none;
    color:black;
    text-align: center;
    align-items: center;
}
#projec1>p{
    
    color:black;
    display: flex;
    justify-content: flex-end;
    background-color: #6FFFE9;
    margin-right: auto;
    align-items: flex-end;
    width:fit-content;
    height:auto;
    text-align: center;
    align-items: center;
}


#projec2>p{
    display: flex;
    justify-content: flex-start;
    background-color: #6FFFE9;
    margin-left: auto;
    width:600px;
    height:auto;
    text-align: center;
    align-items: center;
    padding: 40px;
   
}

#projec1>img{
    display: grid;
    height: 400px;
    width:600px;
    margin-right: auto;
    padding: 20px;
    justify-items: start;
}

#projec2>img{
    padding: 20px;
    display: grid;
    justify-content: flex-end;
    margin-right: auto;
    height: 400px;
    width:600px;
    margin-left: auto;
}

</style>