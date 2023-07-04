<script>
 export default {
     props: [
         'text'
     ]
 }
</script>

<template>
    <main class="subtitle">
        <h2>{{text}}</h2>
        <div class="bar"></div>
    </main>
</template>

<style scoped>

    .subtitle {
        display: flex;
        white-space: nowrap;
        flex-direction: row;
        margin: 40px 40px;
    }

    .bar {
        width: 100%;
        height: 0px;
        border: solid 1px #5BC0BE;
        margin: auto 20px;
    }

</style>
