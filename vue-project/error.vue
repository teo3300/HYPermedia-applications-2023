<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->
<template>
        <main>
            <CustomHeader/>
            <div class="content">
                <h1>Oops, something went wrong with your request</h1>
                <NuxtLink class="link"
                          to = "/">
                    <div class="flex">
                        <h2 class="tsu">¯¯\_(ツ)_/¯¯</h2>
                        <i class="arrow left"></i>
                    </div>
                    <p class="text">Go back to the homepage</p>
                </NuxtLink>
            </div>
            <CustomFooter class="footer"/>
        </main>
</template>

<script setup>

</script>

<style scoped>
    main {
        text-align: center;
        width: 100%;
    }

    .content {
        margin: 40px;
    }

    .link {
        text-decoration: none;
        color: #000;
    }

    .tsu {
        color: #aaa;
        margin: 4px;
    }

    .text {
        margin: auto;
        margin: 4px;
    }

    .arrow {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }

    .left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }

</style>
