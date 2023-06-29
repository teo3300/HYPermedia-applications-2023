<template>
    <transition :name="transitionEffect">
        <div class="carousel-description" v-show="currentSlide === index">
            <p>{{ slide.text }}</p>
        </div>
    </transition>
</template>

<script>
export default {
    props: ["slide", "currentSlide", "index", "direction",],
    computed: {
        transitionEffect() {
            return this.direction == "right" ? "slide-out" : "slide-in";
        }
    }
}; 
</script>

<style scoped >
.carousel-description {
    position: absolute;
    height: 100%;
    left: 0px;
    top: 0px;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease-in-out;
}

.slide-in-enter-from {
    transform: translateX(-100%);
}

.slide-in-leave-to {
    transform: translateX(100%);
}

.slide-out-enter-from {
    transform: translateX(100%);
}

.slide-out-leave-to {
    transform: translateX(-100%);
}
p{
    text-align: justify;
}
blockquote{
    margin: 1%;
}
</style>