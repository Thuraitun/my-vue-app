<template>
    <div class="flex flex-wrap w-full bg-slate-200">
        <h1 class="w-full my-4 text-xl font-bold text-center text-blue-500">MarkDown<span class="text-orange-500">App</span></h1>
        <section class="flex w-10/12 h-screen m-auto">
            <article class="w-1/2 border">
                <textarea class="w-full h-full p-2" :value="text" @input="update"></textarea>
            </article>
            <article class="w-1/2 p-2 bg-gray-100 border" v-html="markedText" ></article>
        </section>
    </div>
</template>

<script>
    import marked from "marked";
    import debounce from "../utilities/mixins/debounce";
    export default {
        name: "MarkDown",
        mixins:[debounce],
        data() {
            return {
                text: "",
            };
        },
        computed: {
            markedText() {
                return marked(this.text);
            },
        },
        methods: {
            update(e) {
                const task= () => (this.text = e.target.value);
                this.debounce(task, 500);
            },
        }
    };
</script>

<style scoped>

</style>
