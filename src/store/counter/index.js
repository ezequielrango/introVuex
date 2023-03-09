import  getRandomInt  from '../../helpers/getRandomInt'

const counterStore = {

    namespaced: true,
    //cuando se cree el store va aa verfificar este modulo del state y va a aejecutar la funcion transformando el objeto en algo reactivo 
    state: () => ({
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lasRandomInt: 0
    }),

    mutations: {
        increment(state){
            state.count ++
            state.lastMutation = 'increment'
        },
        incrementBy(state, value){
            state.count += value
            state.lastMutation = 'incrementBy' + value
            state.lasRandomInt = value
        },
        setLoading(state, value){
             state.isLoading = value
             state.lastMutation = 'setLoading ' + value
        }
    },
    actions: {
        async incrementRandomInt( {commit} ){
            commit('setLoading', true)
            const rndInt = await getRandomInt()
            commit('incrementBy', rndInt)
            commit('setLoading ', false)
        },
    },
    getters: {
        squareCount( state ){
            return state.count * state.count
        }
    },
}

export default counterStore