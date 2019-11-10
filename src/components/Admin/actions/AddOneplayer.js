import Apiconfig from "../../Apiconfig";
import { useSelector } from 'react-redux'


const AddOneplayer = (data,token) =>{



    return dispatch => {
     
        Apiconfig.post('players/add', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
             'Authorization': 'Bearer '+token
            }
        }).then(function (response) {
            
            if(response.data.type == 'errors'){
           

            dispatch(ADD_ONE_ERROR(response.data.res))
        }else{
            dispatch(ADD_ONE_PLAYER)
        }

       
      })
      .catch(function (error) {
        console.log(error);
      });
     
     }


}


export default AddOneplayer;


const ADD_ONE_PLAYER = ()=>{
    return{
        type:'ADD_ONE_PLAYER',
        
    }
}



const ADD_ONE_ERROR = (data)=>{
    return{
        type:'ADD_ONE_ERROR',
        data
    }
}