<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->
<template>
        <main>
            <CustomHeader/>
            <div class="content">
                <h1>Oops, something went wrong with your request</h1>
                <NuxtLink to = "/">RETURN TO HOME PAGE</NuxtLink>
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
        display: flex;
        flex-direction: column;
    }
</style>
