<template>
  <transition :name="transitionEffect">
    <div class="carousel-item" v-show="currentSlide === index">
      <div v-if="option === 'partnerOption'" class="if">
        <div class="base-image-input"> <img :src="`${slide.image}`" alt="Partner's logo"/> </div>
        <div class="text">
          <h3>{{ slide.name }}</h3>
          <p>{{ slide.desc_short }}</p>
          <a :href="`${slide.url}`">Learn more</a>
        </div>
      </div>
      <div v-else-if="option === 'projectOption'" class="if">
        <div class="base-image-input"> <img :src="`/HYPermedia-applications-2023/img/projects/${slide.data.image}`" alt="project's illustration image"/> </div>
        <div class="text">
          <h3>{{ slide.name }}</h3>
          <p>{{ slide.data.desc_short }}</p>
          <a :href="`${slide.data.url}`">Learn more</a>
        </div>
      </div>
      <div v-else-if="option === 'areaOption'" class="if">
        <div class="base-image-input">
          <img :src="`${slide.data.imgURL}`" alt="area's illustration image"/> </div>
        <div class="text">
          <h3>{{ slide.name }}</h3>
          <p>{{ slide.data.summary }}</p>
          <NuxtLink :to="`/areas/${slide.id}`">Learn more</NuxtLink>
        </div>
      </div>
      <div v-else> no option given </div>
    </div>
  </transition>
</template>
  
<script>
export default {
  props: ["slide", "currentSlide", "index", "direction", "link", "option"],
  computed: {
    transitionEffect() {
      return this.direction == "right" ? "slide-out" : "slide-in";
    }
  },
};
</script>
  
<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

p {
  overflow: auto;
  max-height : 60%; 
  padding-right : 10px ; 
}
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
.if {
  width : 100%; display: flex;
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
  display: flex;
  width: 35%;
  aspect-ratio: 1/1;
  align-content: center;
  object-fit: contain;
}

img {
  max-width: 80%;
  object-fit: contain;
}

.text {
  width: 50%;
  text-align: justify;
  font-family: 'Cambay', sans-serif;
}

h3 {
  margin: 10px 0px;
  font-family: 'Crushed', serif;
}

a {
  color: #5BC0BE;
  margin-left: 40%;
}

a:hover {
  color: #0B132B;
  font-size: 1.1em;
  transition: color 0.5s, font-size 0.5s;
}
</style>
