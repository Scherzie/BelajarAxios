const INITIAL_STATE=0

export default(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'HITUNG':
            return action.payload
        default:
            return state
    }
}