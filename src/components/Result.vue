<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types'

    export default {
        computed: {
            ...mapGetters({
                // types.js type
                doubleCounter: types.DOUBLE_COUNTER
            })
            // mapGetter creates this for us:
            /* return this.$store.getters.doubleCounter; */
        }
    }
</script>