import Apiconfig from "../components/Apiconfig";


//Create A thunk then Export it
const getPlayers=() =>{

    return dispatch => {
     
       Apiconfig.get('/players')
        .then(response => {
         
         
            dispatch(GET_ALL_PLAYERS(response.data))
        })
    }
}
export default getPlayers;


 

//Create Actions for players
const GET_ALL_PLAYERS = (payload)=>{
return{
    type:"GET_ALL_PLAYERS",
    payload
}
}



const PEND_PLAYERS = ()=>{
    return{
        type:"PEND_PLAYERS",
        
    }
    }