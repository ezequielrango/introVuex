<template>
    <div class="container">
        <h1>Counter Vuex</h1>
        <h2>Direct access: {{ $store.state.counter.count }}</h2>
        <h2>Computed: {{ countComputed }}</h2>
    
        <button @click="increment">+1</button>
        <button @click="incrementBy">+5</button>
        <button @click="incrementRandomInt" :disabled=isLoading>random</button>
        <h1>mapState</h1>
        <h1>mapState: {{ count }}</h1>
        <h2>lastMutation: {{ lastMutation }}</h2>
        <h2>Direct Getters: {{ $store.getters.square }}</h2>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    

    computed: {
        countComputed(){
            return this.$store.state.counter.count
        },
        // ...mapState(['count'])
        ...mapState('counter',['count', 'lastMutation', 'isLoading'])
    },

    methods: {
        increment(){
            this.$store.commit('counter/increment')
        },
        incrementBy(){
            this.$store.commit('counter/incrementBy', 5)
        },
        incrementRandomInt(){
            this.$store.dispatch('incrementRandomInt')
        },
        ...mapActions('counter',['incrementRandomInt'])
        // ...mapActions({
        //     randomInt: 'incrementRandomInt'
        // })
    }

}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>