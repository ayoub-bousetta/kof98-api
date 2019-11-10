
const initialState = {
  players: [],
  loading: true,
  error:''
};
const Playersreducer =   (state=initialState, action) => {
 let data;

  switch (action.type) {


      
    
    
    case 'GET_ALL_PLAYERS':
    data=action.payload
    return{
      players:data,
      loading: false,
      error:''
    }


    case 'SEARCH_PLAYER':
    data=action.payload
    return{
      players:data,
      loading: false,
      error:''
    }
    

    
  

  
    default:
    
    return state
      
      break;
  }
 


  }

export default Playersreducer;




