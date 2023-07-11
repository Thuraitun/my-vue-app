<template>
    <div class="py-2 bg-emerald-500">
        <nav class="container mx-auto">
            <div class="flex justify-between">
                <h2 class="text-xl text-gray-100 uppercase ms-10">Vue <span class="text-orange-400 ">App</span></h2>
                <div class="flex justify-center space-x-11 me-10">
                    <RouterLink v-for="item in lists" :key="item.title" :to="item.to" class="text-gray-100">{{ item.title }}</RouterLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
               lists: [
                { title:'Slider', to: '/' },
                { title:'MarkDown', to: '/markdown' },
                { title:'Calendar', to: '/calendar' },
               ]
            }
        }
    }
</script>

<style scoped>

</style>