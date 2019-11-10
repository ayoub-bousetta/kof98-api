
const logMeout = ()=>{

    return dispatch =>{
        dispatch(LOG_ME_OUT_SUCCESS())
      
        

    }

}


export default logMeout


const LOG_ME_OUT_SUCCESS = ()=>{
    return{
        type : 'LOG_ME_OUT_SUCCESS',
        
    }
}


