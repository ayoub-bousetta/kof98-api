
const InitState = {
    Is_logged : false
}


const isLogged = (state=InitState,action)=>{


    switch (action.type) {
        case 'AUTH_TO_ADMIN':

        return {
            Is_logged : true
        }
            
            break;
    
        default:
        return state
            break;
    }



}

export default isLogged;