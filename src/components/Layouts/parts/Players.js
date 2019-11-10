import React,{useEffect,useState,useReducer} from 'react'
import  getPlayers  from  '../../../actions/getPlayers';
import { useSelector,useDispatch } from 'react-redux';
import Search from './Search';
import  {URLstorage}  from  '../../Apiconfig';
import {Link, useParams,
    useRouteMatch} from 'react-router-dom'

function Players(  ) {



  const dispatch = useDispatch()
 const players = useSelector(state=>state.players)
 let rendervue;

 if(players.loading){
    rendervue = <div className="loading"></div>
 }else{
    if(players.players.length >0){
         rendervue = players.players.map(player=>{
        return (
        <div className="box" key={player.id}>
            <div className="boxinside">
               
                <img src={URLstorage+'/'+player.img} alt=""/>
                                <Link to={`/${player.id}`}>
                                <span> {player.name}</span></Link>
            </div>  
        </div>
        )
    })
    }else{
        rendervue = <span className='empty'>Nothing more to load...</span>
    }
   
 }


  //

   //const [players, setplayers] = useState([])

  
   
     useEffect(() => {
        dispatch(getPlayers())
      
     }, [dispatch])








     
     
        
     
  //   let  players = useSelector(state=>state.players)
    
    
    return (
    
      
    
 <div className="cards">
 <Search />
        <div className="boxs">
        {rendervue}
        </div>
   
 </div>
        
    
    
    )
}

export default Players
