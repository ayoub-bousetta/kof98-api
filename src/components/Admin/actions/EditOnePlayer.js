
import Apiconfig from "../../Apiconfig";



const EditOnePlayer=(id,data,token)=>{
  
    return dispatch => {
     
        Apiconfig.post('/players/edit/'+id,data, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: "Bearer " + token
            }
        }).then(function (response) {
          
            dispatch(EDIT_PLAYER(response))
          })
          .catch(function (error) {
            console.log(error);
          }); 
     
     }


}

export default EditOnePlayer;






const EDIT_PLAYER=(payload) =>{
  
return {
    type:'EDIT_PLAYER',
    payload
}



}


