
const initialState = {
    loading: true,
    error:true,
    errors:[],
    isToken :  (localStorage.getItem("token")) ? localStorage.getItem("token") : '',
    Username: (localStorage.getItem("username")) ? localStorage.getItem("username") : '',
    isAdmin:localStorage.getItem("isAdmin") ? localStorage.getItem("isAdmin") : false,
  };
  const Authreducer =   (state=initialState, action) => {
let admin
  switch (action.type) {
      case 'SAVE_ME_USER_ERROR':

      return{
        loading: false,
        error:true,
        errors:action.data.res,
        isToken : '',
        Username:'',
        isAdmin:false
      }
          
          break;
        case 'SAVE_ME_USER_SUCCESS':
        return{
            loading: false,
            error:false,
            errors:'',
            isToken : '',
            Username:'',
            isAdmin:false
          }
          case "LOG_ME_IN_ERROR":
          return{
              loading: false,
              error:true,
              errors:{"Email & Password":["are not registred."]},
              isToken : '',
              Username:'',
              isAdmin:false
            }

         case "LOG_ME_IN_SUCCESS":
      
         localStorage.setItem("token",action.data.access_token)
        localStorage.setItem("username",action.data.user.name)
    
        if (action.data.user.id == 7) {
           
            localStorage.setItem("isAdmin",true)
        }else{
            localStorage.setItem("isAdmin",false)
        }
          return{
              loading: false,
              error:false,
              errors:'',
              isToken :  localStorage.getItem("token"),
                Username: localStorage.getItem("username"),
                 isAdmin: localStorage.getItem("isAdmin")
           
            }    
     case "LOG_ME_OUT_SUCCESS":
      
         localStorage.clear()
          return{
              loading: false,
              error:false,
              errors:'',
              isToken : '',
              Username:'',
              isAdmin:false
           
            }   
             default:
      return state
          break;
  }


}
export default Authreducer;


 


