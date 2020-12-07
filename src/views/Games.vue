<template>
    <div class="game-page">
        <div class="search">
            <h2>Games List</h2>
        </div>
        <div class="games-wrapper">
                
            <div class="game-card" v-for="(game, index) in gamesList" :key="index">
                <img :src="game.thumbnail" alt="#">
                <h3>{{game.name}}</h3>
                <p>{{game.description}}</p>
                <a class="freeBtn" :href="game.url" target="_blank">Play Now!</a>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'Games',
    computed:{
        ...mapState('gamesMod', {
            gamesList: state => state.games,
        }),
    }
}
</script>