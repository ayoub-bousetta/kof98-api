import React,{useState} from 'react'
import  searchPlayer  from  '../../../actions/searchPlayer';
import  getPlayers  from  '../../../actions/getPlayers';
import { useSelector,useDispatch } from 'react-redux'
function Search() {

    
    const dispatch =useDispatch()
    
    

    
    // setSearch({
    //     search: datasearched
    // })

    const changeEvent = (e)=>{

      if(e.target.value != ''){
        dispatch(searchPlayer(e.target.value))
      }else{
        dispatch(getPlayers())
      }
   
     
       //console.log(playersnew)
    }

    return (

          <form> <input type="text" placeholder="search" onChange={changeEvent}   /></form>
           
          

        
      
    )
}

export default Search
