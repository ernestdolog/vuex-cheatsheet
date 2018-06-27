<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 1000})">Async Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            // pulls out anything from the list and creates methods for them
            ...mapMutations([
                'increment',
                'decrement'
            ]),
            // that's what mapMutations do for us for each methods in the background
            /* increment() {
                this.$store.state.counter++;
            }, */
            // works the same as mapMutations, however there shouldn t be naming conflicts
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
            // that's what mapActions do for us for each methods in the background
            // argument is optional
            // it doesn t have to be manually implemented, here is only an example!!!
            /* asyncIncrement(by) {
                this.$store.dispatch('asyncIncrement', by)
            } */
        }
    }
</script>