<template class="header">
    <nav class="navbar">
        <NuxtLink to="/"><img src="../images/whitelogo.png" alt="I3E Logo" class="logo"></NuxtLink>
        <ul class="nav-menu">
            <NuxtLink to="/aboutus" class="nav-item">About us</NuxtLink>
            <NuxtLink to="/projects" class="nav-item">Projects</NuxtLink>
            <NuxtLink to="/People" class="nav-item">People</NuxtLink>
            <NuxtLink to="/Areas" class="nav-item">Areas</NuxtLink>
            <NuxtLink to="/contact" class="nav-item">Contact</NuxtLink>
            <!--<searchBar></searchBar>  TODO: component to be created -->
        </ul>
        <div class="breadcrumb-search">
            <!--<breadcrumb></breadcrumb>  TODO: component to be created -->
            <div class="space"></div>
        </div>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", mobileMenu);
        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
        const navLink = document.querySelectorAll(".nav-link");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

.logo {
    width: 50px;
    height: 50px;
    border : dotted white 2px ; 
}
.logo:hover {
    border : dotted #0B132B 2px ; 
    border-radius : 5px ; 
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

.header {
    border-bottom: 1px solid #E2E8F0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
}

.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-item, .nav-item:visited {
    font-family: 'Crushed', sans-serif;
    color : #0B132B ;
    margin-left: 5rem;
}
.nav-item:hover {
    text-decoration : underline ;
    color : #5BC0BE ; 
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}


@media only screen and (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -120%;
        top: 5rem;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow:
            0 10px 27px rgba(0, 0, 0, 0.05);
            z-index : 10 ; 
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-item {
        margin: 2.5rem 0;
    }

    .hamburger {
        display: block;
        cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

}
</style>
