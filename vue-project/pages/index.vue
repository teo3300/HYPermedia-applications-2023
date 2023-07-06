<template>
  <div>
    <CustomHeader></CustomHeader>
    <div class="description"></div>
    <div class="areas">
      <NuxtLink to="/areas/1"><div class="areastext">
        <h2>TECHNOLOGY AND SOFTWARE</h2>
        <img src="../images/technologyAndSoftware.jpg" href="http://localhost:3000/HYPermedia-applications-2023/areas/1">
       
      </div></NuxtLink> 
      <NuxtLink to="/areas/2"><div id="healthcare" class="healthcare">
        <h2>HEALTHCARE</h2>
          <img src="../images/healthcareAndBiotechnology.jpg" href="">
        
      </div></NuxtLink>
      <NuxtLink to="/areas/3"><div id="energy" class="energy">
        <h2>Clean Energy & Sustainability</h2>
        <img src="../images/cleanEnergyAndSustainability.jpg" href="">
       
      </div></NuxtLink>
      <NuxtLink to="/areas/4"><div id="E-COMERCE" class="ecommerce">
        <h2>E-commerce & consumer goods</h2>
         <img src="../images/Ecommerce.jpg" href="">
        
       
      </div></NuxtLink>
    </div>


    <div class="people">
    <img src="../images/members/AlexanderWONG.png" href="">
  
    <img src="../images/members/emilyJohnson.jpg" href="">
    <img src="../images/members/benjaminPatel.jpg" href="">
    <img src="../images/members/oliviaMELBENT.jpg" href="">
    <seeMore :link="areas"></seeMore>
  </div>
    <div class="projects"></div>
    <CustomFooter></CustomFooter>
  </div>
</template>

<script>
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

.areas{
  background-color: #3A506B;
  display: flex;
  height:240px;
  padding-top: 20px;
  width:fit-content;
  align-items: flex-end;
  text-align: center;
  
}
.areas img{
  display: inline-block;
  margin-right: 10px;
  position:relative;
  height:200px;
  padding: 20px;
}
.areastext h2{
  position:absolute;
  top: 100px;
  margin-left: 20px;
  text-align: center;
  display: flex;
  font-family: 'Crushed',sans-serif;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 13px;
  font-size: 30px;
  z-index:1;
}
.healthcare h2{
  position:absolute;
  top: 100px;
  margin-left: 20px;

  text-align: center;
  display: flex;
  font-family: 'Crushed',sans-serif;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding-top: 100px;
  padding-left: 90px;
  padding-right: 93px;
  font-size: 30px;
  z-index:1;
}

.people{
  background-color: #1C2541;
  display: flex;
  height:240px;
  padding-top: 20px;
  width:fit-content;
  align-items: flex-end;
  text-align: center;
  


}
.people img{
  display: inline-block;
  margin-right: 10px;
  height:200px;
  padding: 20px;
  border-radius: 60%;

}

.projects{
  background-color: #000000;
  
  height:240px;


}
</style>