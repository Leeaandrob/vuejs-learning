<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            incrementAsyncby(by) {
                this.$store.dispatch('asyncIncrement', by);
            },
            decrementAsync(by) {
                this.$store.dispatch('asyncDecrement', by);
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
