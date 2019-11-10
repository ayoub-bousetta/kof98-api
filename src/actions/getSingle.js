import Apiconfig from "../components/Apiconfig";

const getSingle = (id)=>{

    return dispatch => {
     //Use Edit URL TO GET ONE
        Apiconfig.get('/players/one/'+id)
         .then(response => {
           
             dispatch(GET_SINGLE(response.data))

           
         })
     }


}

export default getSingle



const  GET_SINGLE = (payload)=>{

    return {
        type : 'GET_SINGLE',
        payload

    }
}