import Apiconfig from "../components/Apiconfig";
const logMein = (data)=>{

    return dispatch =>{

        Apiconfig.post('auth/login', data)
        .then(resp=>{


            if (resp.data.error) {
                dispatch(LOG_ME_IN_ERROR())
                
            }else{
                dispatch(LOG_ME_IN_SUCCESS(resp.data))
            }
        })

    }

}


export default logMein


const LOG_ME_IN_SUCCESS = (data)=>{
    return{
        type : 'LOG_ME_IN_SUCCESS',
        data
    }
}


const LOG_ME_IN_ERROR = (data)=>{
    return{
        type : 'LOG_ME_IN_ERROR',
      
    }
}