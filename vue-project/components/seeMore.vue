<template>
        <NuxtLink class="button" :to="link"> See more ... </NuxtLink>
</template>

<script>
export default {
  props: ['link']
}; 
</script>

<style scoped>
.button {
  position: relative;
  top: 10%;
  left: 40%;
  height: 60px;
  width: 100px;
  background: none;
  text-align : center ; 
  text-decoration: none;
  color : black ; 
}

.button:before {
  content: "";
  width: 25px;
  height: 2px;
  background: black;
  position: absolute;
  top: 100%;
  margin-top: -1px;
  right: 24px;
  transition: all 0.3s ease;
}

.button:hover:before {
  right: 34px;
  width: 35px;
}

.button:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent #000000;
  position: absolute;
  top: 100%;
  margin-top: -5px;
  right: 20px;
  transition: all 0.3s ease;
}

.button:hover:after {
  right: 34px;
  right: 30px;
}
</style>