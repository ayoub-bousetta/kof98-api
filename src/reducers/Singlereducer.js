
const initialState = {
    players: {},
    loading: true,
    error:''
  };
  const Singlereducer =   (state=initialState, action) => {
   let data;
  
    switch (action.type) {
  
  
        
      case 'GET_SINGLE':
      
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
  
  export default Singlereducer;
  
  
  
  
  