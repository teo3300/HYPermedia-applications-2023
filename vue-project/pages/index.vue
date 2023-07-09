<template>
  <div>
    <CustomHeader></CustomHeader>
    <div class="description">
      <Carousel option="projectOption" class="carouselProject" :slides="top_proj" />
    </div>
    <div class="areas">
      <NuxtLink to="/areas/1">
        <div class="areastext">
          <h2>TECHNOLOGY AND SOFTWARE</h2>
          <img src="../images/technologyAndSoftware.jpg"
            href="http://localhost:3000/HYPermedia-applications-2023/areas/1">

        </div>
      </NuxtLink>
      <NuxtLink to="/areas/2">
        <div id="healthcare" class="healthcare">
          <h2>HEALTHCARE</h2>
          <img src="../images/healthcareAndBiotechnology.jpg" href="">

        </div>
      </NuxtLink>
      <NuxtLink to="/areas/3">
        <div id="energy" class="energy">
          <h2>Clean Energy <br> & <br> Sustainability</h2>
          <img src="../images/cleanEnergyAndSustainability.jpg" href="">

        </div>
      </NuxtLink>
      <NuxtLink to="/areas/4">
        <div id="E-COMERCE" class="ecommerce">
          <h2>E-commerce <br> & <br> consumer goods</h2>
          <img src="../images/Ecommerce.jpg" href="">


        </div>
      </NuxtLink>
    </div>


    <div class="people">
    <NuxtLink to= "people/2"><img src="../images/members/AlexanderWONG.png" ></NuxtLink>
  
    <NuxtLink to= "people/4"><img src="../images/members/emilyJohnson.jpg" ></NuxtLink>
   
    <NuxtLink to= "people/3"><img src="../images/members/benjaminPatel.jpg" ></NuxtLink>
   
    <NuxtLink to= "people/5"><img src="../images/members/oliviaMELBENT.jpg"></NuxtLink>
    <NuxtLink to="people" class="flecha">&rarr;<p id="meet-team">Meet our team</p></NuxtLink>
  </div>
    <CustomFooter></CustomFooter>
  </div>
</template>

<script>
export default {
  props: ['/people']
}; 
</script>

<script setup >
const TOP = useRuntimeConfig().public.serverURL
        + '/projects/top'
    console.log('/projects\tFetching: "' + TOP + '"')
    const { data: top_proj } = await useFetch(TOP)
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

.flecha{
  color:#5BC0BE;
  font-family: 'Crushed',sans-serif;
  font-size: 100px;
  text-decoration: none;
  margin-left : 3% ; 
}
#meet-team {
  font-size : 20px ; 
  margin : 0px ; 
  text-decoration : underline ;
  text-decoration-color: transparent;
  transition : text-decoration-color 0.5s ; 
}
#meet-team:hover {
  text-decoration-color: #5BC0BE ;
  transition : text-decoration-color 0.5s ; 
}

.description {
  width: 80%;
  padding: 0px 10%;
}

.carouselProject {
  height: 20em;
  width: 100%;
  align-items: center;
  margin: 40px 0px ; 
}

.areas {
  background-color: #3A506B;
  display: flex;
  height: 240px;
  padding-top: 20px;
  width: 100%;
  align-items: flex-end;
  text-align: center;
}


.areastext, .healthcare, .energy,  .ecommerce {
  margin : auto ; 
  height : 240px ; 
}

.areas img {
  display: inline-block;
  position: relative;
  top : -150px ; 
  width : 270px ; 
  padding: 20px;
  z-index : 1 ; 
}

.areastext h2, .healthcare h2, .energy h2, .ecommerce h2 {
  position: relative;
  top : 20px ; 
  margin: 20px;
  text-align: center;
  font-family: 'Crushed', sans-serif;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 2;
  display: flex;
  font-size: 25px;
  text-decoration : underline ; 
  text-decoration-color: #3A506B;
}

.areastext h2:hover, .healthcare h2:hover, .energy h2:hover, .ecommerce h2:hover {
  text-decoration-color: white;
  transition : text-decoration-color 0.5s ; 
}

.areastext h2 {
  padding-top: 102px;
  padding-left: 30px;
  padding-right: 8px;
}

.healthcare h2 {
  padding-top: 102px;
  padding-left: 75px;
  padding-right: 93px;
}

.energy h2 {
  padding-top: 45px;
  padding-left: 71px;
  padding-right: 71px;
}

.ecommerce h2 {
  padding-top: 45px;
  padding-left: 60px;
  padding-right: 55px;
}


.people {
  background-color: #1C2541;
  display: flex;
  height: 240px;
  width: 100%;
  text-align: center;
  align-items: center;
}

.people img {
  display: inline-block;
  margin: 20px;
  height: 200px;
  border-radius: 60%;
  border : 2px solid transparent ; 
  transition : border 0.5s ;
}
.people img:hover {
  border : 2px solid #5BC0BE ; 
  transition : border 0.5s ;
}
#link-to-people {
  color : white ; 
  font-family: 'Crushed', serif;
  margin : auto; 
}
#link-to-people:hover {
  color : #6FFFE9 ; 
}

.projects {
  background-color: #000000;
  
  display: flex;
  height:240px;
  padding-top: 20px;
  width:max-content;
  align-items: flex-end;
  text-align: center;
}

.projects img{
  display: inline-block;
  margin-right: 10px;
  position:relative;
  height:200px;
  width:300px;
  padding: 20px;
  clip-path:fill-box;
}

@media only screen and (max-width: 768px) {
  .areas, .people {
    overflow: auto;
  }
  .areastext h2 {
    padding-top: 80px;
  }
}

</style>