<template>
    <div>
        <button class="btn btn-primary" @click="incrementAsync({by: 50, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="decrementAsync({by: 50, duration: 1000})">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            incrementAsync(playload) {
                this.$store.dispatch('asyncIncrement', playload);
            },
            decrementAsync(playload) {
                this.$store.dispatch('asyncDecrement', playload);
            },
            increment(by) {
                this.$store.dispatch('increment', by);
            },
            decrement(by) {
                this.$store.dispatch('decrement', by);
            },
        }
    }
</script>
