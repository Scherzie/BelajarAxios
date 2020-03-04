export const ParkirMobil=(data)=>{
    return{
        type:'MOBIL',
        payload:data
    }
}
export const ParkirMotor=(data)=>{
    return{
        type:'MOTOR',
        payload:data
    }
}
export const Reset=(data)=>{
    return{
        type:'BALIK'
    }
}