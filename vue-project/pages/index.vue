<template>
  <div>
    <CustomHeader></CustomHeader>
    <div class="description"></div>
    <div class="areas">
      <div class="areastext">
        <h2>TECHNOLOGY AND SOFTWARE</h2>
        <img src="../images/technologyAndSoftware.jpg" href="">
       
      </div>
      <div id="healthcare" class="areastext">
        <h2>HEALTHCARE</h2>
        <img src="../images/healthcareAndBiotechnology.jpg" href="">
        
      </div>
      <div id="energy" class="areastext">
        <h2>Clean Energy & Sustainability</h2>
        <img src="../images/cleanEnergyAndSustainability.jpg" href="">
       
      </div>
      <div id="E-COMERCE" class="areastext">
        <h2>E-commerce & consumer goods</h2>
        <img src="../images/Ecommerce.jpg" href="">
       
      </div>
    </div>


    <div class="people"></div>
    <img src="" href="">
    <img src="" href="">
    <img src="" href="">
    <img src="" href="">
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
.areas h2{
  position:absolute;
  top: 113px;
  margin-left: 20px;
  text-align: center;
  display: flex;
  font-family: 'Crushed',sans-serif;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 80px;
  font-size: 14px;
  z-index:1;
}

.people{
  background-color: #1C2541;
}

.projects{
  background-color: #0b132b;
}
</style>