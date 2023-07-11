<template>
    <div class="flex flex-wrap w-full">
        <div class="mt-3">
            <div class="absolute w-full" v-for="(color,index) in slides" :key="color">
                <div v-if="currentSlider === index" :class="color"  style="height: 350px;"></div>  
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Slide',
        data() {
            return {
                currentSlider : 0,
                slides: ['bg-green-500','bg-pink-500', 'bg-red-500'],
                interval: "",
            }
        },
        mounted() {
            this.interval = setInterval(()=> {
                
                console.log('I am changing current slider', this.currentSlider);
                
                this.currentSlider = this.currentSlider === 2 ? this.currentSlider = 0 : this.currentSlider+1;
                // if(this.currentSlider === 2) {
                //     this.currentSlider = 0;
                // } else {
                //     this.currentSlider++;
                // }
            }, 1000);
        },
        beforeUnmount() {
            clearInterval(this.interval);
        }
    }
</script>

<style scoped>

</style>