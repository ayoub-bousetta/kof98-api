
import Apiconfig from "../components/Apiconfig";

//Create A thunk then Export it
const searchPlayer=(id) =>{

   
     
    return dispatch => {
     
        Apiconfig.get('/players/like/'+id)
         .then(response => {
       
             dispatch(SEARCH_PLAYER(response.data))
         })
     }

  
    
}
export default searchPlayer;


 const SEARCH_PLAYER =(payload)=>{
    return{
        type:'SEARCH_PLAYER',
        payload
    }
    
 }

