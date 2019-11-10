import Apiconfig from "../components/Apiconfig";
const saveMe =(data)=>{


    return dispatch => {


        Apiconfig.post('/auth/register',data).then(resp=>{

         

            if (resp.data.type =='errors') {
                dispatch(SAVE_ME_USER_ERROR(resp.data))
                
            }else{
                dispatch(SAVE_ME_USER_SUCCESS())
            }

        })
    }
}

export default saveMe


const SAVE_ME_USER_SUCCESS = ()=>{
    return{
        type : 'SAVE_ME_USER_SUCCESS'
    }
}


const SAVE_ME_USER_ERROR = (data)=>{
    return{
        type : 'SAVE_ME_USER_ERROR',
        data
    }
}