<template class="header">
    <div class="logo-menu">
        <NuxtLink to ="index"><img src="../images/3.png" alt="I3E Logo" class="logo"></NuxtLink>
        <div class="menu">
            <p class="menu-links"><NuxtLink to ="aboutus">About us</NuxtLink></p>
            <p class="menu-links"><NuxtLink to="projects">Projects</NuxtLink></p>
            <p class="menu-links"><NuxtLink to="People">People</NuxtLink></p>
            <p class="menu-links"><NuxtLink to ="areas">Areas</NuxtLink></p>
            <p class="menu-links"><NuxtLink to ="contact">Contact</NuxtLink></p>
        </div>
        <searchBar></searchBar> <!-- TODO: component to be created -->
    </div>
    <div class="breadcrumb-search">
        <breadcrumb></breadcrumb> <!-- TODO: component to be created -->
        <div class="space"></div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.logo-menu {
    display : flex ; 
    width : 100% ; 
}
.logo {
    width : 50px ; height : 50px ; 
}
.menu {
    display : flex ; 
    width : 100% ; 
    color : #0B132B ; 
    font-family : 'Crushed'; 
}
.menu-links {
    margin : 10px 80px ; 
    
}


</style>