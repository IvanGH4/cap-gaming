<template>
    <div class="vid">
        <video autoplay loop muted>
            <source :src="video" type="video/mp4" />
        </video>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'BaseVideo',
    data(){
        return{
        }
    },
    computed:{
        // viewportW(){
        //     return this.$store.state.viewportWMod.viewportW;
        // },
        ...mapGetters('viewportWMod', {
            video: 'getCurrentWidth'
        })
    },
}
</script>