const INITIAL_STATE={
    lama:0,
    harga:0,
    jeniskendaraan:''
}
export default(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'MOBIL':
            return {...state,lama:action.payload.lama,harga:action.payload.harga,jeniskendaraan:'Mobil'}
        case 'MOTOR':
            return {...state,lama:action.payload.lama,harga:action.payload.harga,jeniskendaraan:'Motor'}
        case 'BALIK':
            return INITIAL_STATE
        default:
            return state
    }
}