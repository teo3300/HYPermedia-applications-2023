<template>
    <div class="one-area">
            <div class="title-image">
                <img :src="`/${imageURL}`" alt="Illustration image" />
                <h2 class="title">{{title}}</h2>
                <div class="transparent-white"></div>
            </div>
            <div class="intro">
                <p>{{descriptions}}</p>
                <seeMore :link="`${pageURL}`"/>
            </div>
        </div>
</template>

  
  <script>
  export default {
    props: {
      imageURL: {
        type: String,
        required: true,
        default: '',
      },
      title: {
        type: String,
        required: true,
        default: 'Title',
      },
      descriptions: {
        type: String,
        required: true,
        default: 'No descriptions',
      },
      pageURL: {
        type: String,
        required: true,
        default: '',
      },
    },
  }
  </script>


<style scoped >
img {
    width : 100% ; 
    height : 100% ;
    object-fit: cover;
}

h2 {
    font-family : 'Crushed', serif ; 
    font-weight : 400 ; 
    text-align : center ; 
}

.title {
    position : relative ; 
    top : -65% ; 
    z-index : 3; 
}

.one-area {
    margin : 20px 0px ; 
    width : 100% ; height : 200px ; 
    padding : 20px ; 
    background : #5BC0BE ; 
    display : flex ;
}

.title-image {
    width : 50% ; 
    height : 85% ; 
    margin : 2%; 
}

.intro {
    width : 50%; 
}

.transparent-white {
    background-color: rgba(255,255,255, 0.7);
    position : relative; 
    top : -146% ; 
    width : 100%; 
    height : 70%; 
    z-index : 2; 
}

</style>