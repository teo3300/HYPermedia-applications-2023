<template>
  <transition :name="transitionEffect">
    <div class="carousel-item" v-show="currentSlide === index">
      <!-- <img :src="slide" /> -->
      <div class="base-image-input" :style="{ 'background-image': `url(${slide.imgPartner})` }"> </div>
      {{ console.log('slide', slide) }}
      <div class="text">
        <h3>{{ slide.namePartner }}</h3>
        {{ slide.textPartner }}
        <br>
        <a :href="`${slide.urlPartner}`"> Learn more about them</a>
      </div>

    </div>

  </transition>
</template>
  
<script>
export default {
  props: ["slide", "currentSlide", "index", "direction", "link"],
  computed: {
    transitionEffect() {
      return this.direction == "right" ? "slide-out" : "slide-in";
    }
  },
};
</script>
  
<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

.carousel-item {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  gap: 5%;
  padding: 2%;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-from {
  transform: translateX(100%);
}

.slide-out-leave-to {
  transform: translateX(-100%);
}

.base-image-input {
  display: block;
  width: 35%;
  aspect-ratio: 1/1;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  object-fit: contain;
}

.text {
  width: 50%;
}

h3 {
  margin : 10px 0px; 
  font-family: 'Crushed', serif;
}

a {
  color : #5BC0BE ; 
  margin : 10px 20px ; 
}
a:hover {
  color : #0B132B ;
  font-size: 1.1em;
  transition : color 0.5s, font-size 0.5s; 
}
</style>