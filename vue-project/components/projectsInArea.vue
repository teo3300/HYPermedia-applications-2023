<script>
 export default {
     props: [
         'area'
     ]
 }
</script>

<template>
    <main>
        <Subtitle
            :text="area.name"/>
        <div class="section" v-if="area.id % 2 === 0">
            <div class="left">
                <div class="card-container">
                    <Deck class="deck"
                          :cards="area.Projects"
                          option="projects"/>
                </div>
            </div>
            <div class="right">
                <img class="img" alt="Area's image"
                     :src="`${area.data.imgURL}`"/>
                <p class="text">{{area.data.description}}</p>
                <div class="see-more-container-container">  <!-- Perdoname madre por mi vida loca -->
                    <div class="see-more-container">
                        <seeMore class="see-more"
                                 :link = "'/areas/' + area.id"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-else>
            <div class="right">
                <img class="img" alt="Area's image"
                     :src="`${area.data.imgURL}`"/>
                <p class="text">{{area.data.description}}</p>
                <div class="see-more-container-container">  <!-- Perdoname madre por mi vida loca -->
                    <div class="see-more-container">
                        <seeMore class="see-more"
                                 :link = "'/areas/' + area.id"/>
                    </div>
                </div>
            </div>
            <div class="left">
                <div class="card-container">
                    <Deck class="deck"
                          :cards="area.Projects"
                          option="projects"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

    * {
        color: #0B132B;
        text-decoration: none;
    }

    .section {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .left {
        width: 60%;
        padding: 20px;
    }

    .title {
        margin-left: 20px;
    }

    .right {
        width: 40%;
        padding: 20px 100px;
    }

    img {
        width: 100%;
        border-radius: 20px;
    }

    .text {
        padding: 40px;
        padding-bottom: 0;
        text-align: justify;
    }

    .deck {
        padding-bottom: 20px;
    }

</style>
