import Apiconfig from "../../Apiconfig";

const initState = {
    error:true,
    errors:[],
    loading:true,
}




const Addplayer= (state = initState,action)=>{

let data ;


switch (action.type) {
    case 'ADD_ONE_ERROR':

    return {
        error:true,
         errors:action.data,
    loading:false,
    }
  
        break;
    

        case 'ADD_ONE_PLAYER':

        return {
            error:false,
             errors:[],
        loading:false,
        }
      
            break;

    default:
    return state
        break;
}


}

export default Addplayer;
