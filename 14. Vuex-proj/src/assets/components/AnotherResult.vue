<template>
    <div>   
       <p>Another Counter is: {{ doubleCounter }}</p> 
       <p>Number of Clicks: {{ stringCounter }}</p> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
            'doubleCounter',
            'stringCounter'
            ])
        }
    }
</script>