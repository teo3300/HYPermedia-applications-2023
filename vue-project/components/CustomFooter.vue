<template >
    <nav class="footer">

        <div class="footer-left">
            <p>Learn more : <br></p>
            <NuxtLink to="aboutus" class="nav-item">About us</NuxtLink> <br>
            <NuxtLink to="projects" class="nav-item">Projects</NuxtLink> <br>
            <NuxtLink to="People" class="nav-item">People</NuxtLink> <br>
            <NuxtLink to="Areas" class="nav-item">Areas</NuxtLink> <br>
            <NuxtLink to="legal" class="nav-item">Legal</NuxtLink>
        </div>

        <span class="line"></span>

        <div class="footer-middle">
            <NuxtLink to="/"><img src="../images/darklogo.png" alt="I3E Logo" class="logo-i3e"></NuxtLink>
            <h2>I3E Ventures</h2>
        </div>

        <span class="line"></span>

        <div class="footer-right">
            <p>Find us : <br></p>
                <NuxtLink to="contact" class="nav-item">Contact</NuxtLink> <br>
                <a href="mailto:i3e@gmail.com">i3e@gmail.com</a> <br>
                <a href="">+39 1 23 45 67 89</a> <br>
                <a href="https://www.instagram.com/"><img src="../images/instagram.png" alt="Instagram" class="logo"> Instagram </a> <br>
                <a href="https://twitter.com/?lang=fr"><img src="../images/twitter.png" alt="Twitter" class="logo"> Twitter </a> <br>
                <a href="https://fr.linkedin.com/"><img src="../images/linkedin.png" alt="LinkedIn" class="logo"> LinkedIn </a>
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

.footer {
    height: 250px;
    background: #0B132B;
    color: white;
    display: flex;
    gap: 8.5%;
    padding: 20px 11.5%;
    font-family: 'Cambay', sans-serif;
}

a {
    color: #6FFFE9;
    text-decoration: underline;
}

a:hover, .nav-item:hover {
    color: white;
    font-size :larger ; 
}

h2 {
    font-weight: 400;
}

p {
    font-family : 'Crushed', serif ; 
    font-size: 20px ;
}


.footer-left {
    line-height: 1.7;
    text-align : left ; 
    width: 20%;
}
.footer-middle {
    text-align : center ; 
    width: 25%;
}
.footer-right {
    line-height: 1.5;
    text-align : right ; 
    width: 20%;
}

.line {
    width: 0px;
    height: 100%;
    border: solid 1px #6FFFE9;
}

.logo-i3e {
    width: 50%;
    aspect-ratio: 1/1;
}

.logo {
    width: 20px;
    height: 20px;
}</style>