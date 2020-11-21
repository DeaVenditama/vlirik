<template>
    <div class="text-center">
        <span v-for="(a, index) in arrayAlphabet" :key="index">
            <a class="p-1 no-underline hover:underline text-blue-500 text-lg">{{ a }}</a>
        </span>
    </div>
</template>
<script>
export default {
    setup(){
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const arrayAlphabet = alphabet.split("");

        return{
            arrayAlphabet
        }
    }
}
</script>
<style scoped>
    a{
        cursor: pointer
    }
</style>