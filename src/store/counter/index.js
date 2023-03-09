import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
const counterStore = {

    namespaced: true,
    //cuando se cree el store va aa verfificar este modulo del state y va a aejecutar la funcion transformando el objeto en algo reactivo 
    state,
    mutations,
    actions,
    getters,

}

export default counterStore