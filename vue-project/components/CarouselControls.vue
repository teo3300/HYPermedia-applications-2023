<template>
  <button class="carousel-control left" @click="$emit('prev')">&lsaquo;</button>
  <button class="carousel-control right" @click="$emit('next')">&rsaquo;</button>
</template>
  
<script>
export default {
  emits: ['prev', 'next']
}
</script>
  
<style scoped>
.carousel-control {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  display: inline-block;
  position: relative;
  top: -70%;
  color: #007782;
  font-size: 50px;
  cursor: pointer;
}

.left {
  left: -5%;
}

.right {
  right: -98%;
}
</style>