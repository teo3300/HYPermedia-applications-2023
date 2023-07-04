<template>
    <CustomHeader></CustomHeader>
    <main>
        <h1>People</h1>
        <div class="description">
            <p> --- some not too long description about the team, look at what i've written in the 'about us' page before,
                to not make it redondant ---</p>
        </div>
        <img src="/HYPermedia-applications-2023/img/people/group.jpg" alt="Illustration photo" id="group-img" />
        <div class="content-wrap">
            <div class="subtitle">
                <h2>Members</h2>
                <div class="bar"></div>
            </div>
            <div class="members-cards">
                <PersonCard v-for="person of people" :name="person.name" :image="person.data.image"
                    :link="'/people/' + person.id" />
            </div>
        </div>
        <img src="/HYPermedia-applications-2023/img/people/organigram.png" alt="Company's organigram" id="organigram" />
    </main>
    <CustomFooter></CustomFooter>
</template>

<script setup>

const URI = useRuntimeConfig().public.serverURL
    + '/people'
console.log('/people\tFetching: "' + URI + '"')
const { data: people } = await useFetch(URI)
</script>

<style scoped>
main {
    width: 80%;
    margin: 0px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    text-align: center;
}

h2 {
    text-align: left;
    margin: 0px 10px;
    font-family: 'Cambay', sans-serif;
}

.description {
    width: 100%;
    text-align: justify;
    background-color: #5BC0BE;
    padding: 1% 5%;
    margin: 20px 0px;
}

#group-img {
    width: 100%;
    height: 20em;
    object-fit: cover;
    margin-bottom: 20px;
}

.content-wrap {
    width: 100%;
    margin: 20px 10%;
}

.subtitle {
    display: flex;
    white-space: nowrap;
    height: 40px;
    margin: 20px 0px;
}

.bar {
    width: 100%;
    height: 0px;
    border: solid 1px #5BC0BE;
    margin: auto;
}

.members-cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    gap: 20px;
    background-color: #6FFFE9;
    padding: 20px;
    border-radius: 20px 0 0 20px;
}

#organigram {
    width: 80%;
    object-fit: cover;
    margin: 20px 10% 100px 10%;
}</style>
