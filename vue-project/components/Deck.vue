<script>
 export default {
     props: [
         'cards',
         'option'
     ]
 }
</script>

<template>
    <div class="main"
         v-if="option === 'projects'" >
    <Card v-for = "element in cards"
                 :text = "element.name"
                 :image = "element.data.image"
                 :link = "'/projects/' + element.id"/>
    </div>
    <div class="main"
         v-else-if="option === 'people'">
    <Card v-for = "element in cards"
                 :text = "element.name"
                 :image = "element.data.image"
                 :link = "'/people/' + element.id"/>
    </div>
    <div v-else>
        <h2>Using this component <i>Deck.vue</i></h2>
        <ul>Please provide
            <li>cards="..." as a list of elements to display</li>
            <li>option="..." as one of the following properties
                <ul>
                    <li>people</li>
                    <li>projects</li>
                </ul>
            </li>
        </ul>
        <p>To implemente other options, please add them to the
            vue-project/components/Deck.vue, mapping the needed
            pareameters</p>
    </div>
</template>

<style scoped>

    .main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

</style>
