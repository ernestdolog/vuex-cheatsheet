<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types'

    export default {
        computed: {
            ...mapGetters({
                // types.js type
                doubleCounter: types.DOUBLE_COUNTER,
                // traditional
                stringCounter: types.CLICK_COUNTER
            })
            // mapGetter creates this for us:
            /* return this.$store.getters.doubleCounter; */
        }
    }
</script>