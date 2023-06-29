<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item v-for="(slide, index) in slides" :slide="slide" :key="`item-${index}`" :current-slide="currentSlide"
        :index="index" :direction="direction" ></carousel-item>
    </div>
    <carousel-controls @prev="prev" @next="next"></carousel-controls>
  </div>
</template>
  
<script>

export default {
  props: ['slides'],
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right"
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev() {
      const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
    },
    next() {
      const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
      this.direction = "right";

    }
  },
  /*mounted() {
    this.slideInterval = setInterval(() => {
      this.next(); 
    }, 3000)
  },*/
  beforeUnmount() {
    clearInterval(this.slideInterval);
  }
}
</script>
  
<style scoped >
.carousel {
  width: 80%;
  height: 12em;
  margin: 20px 10%;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  gap: 5%;
  border: 2px solid turquoise;
  white-space: pre-wrap;
}

.alt-des {
  height: 80%;
  width: 45%;
  overflow: auto;
  position: relative;
  top: 20px;
  left: 30px;
}
</style>