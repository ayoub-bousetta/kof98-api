import React from 'react'
import {
    Link,
    useParams,
    useRouteMatch,
     
  } from "react-router-dom";

  import {useEffect} from 'react'
  import { useDispatch,useSelector } from 'react-redux'
  import getSingle from '../../actions/getSingle'
  import  {URLstorage}  from  '../Apiconfig';
 
function Single() {

    let {id} = useParams();
    let rendervue
    const dispatch = useDispatch();
    const players = useSelector(state=>state.singleplayer)
    const isAdmin = useSelector(state=>state.AuthUser)

   useEffect(() => {
    dispatch(getSingle(id))
   }, [])




     if(players.loading){
       
        rendervue = <div className="loading single"></div>
     }else{
    
         let  player=players.players
console.log(player)

         var birthdate = new Date(player.age);
            var cur = new Date();
var diff = cur-birthdate; 
var age = Math.floor(diff/31557600000); 

    

        rendervue = 
            
        
         
            <div className="single">
                <div className="links">
                    {
                        isAdmin.isAdmin =="true" &&
                        <Link to={`/edit/${player.id}`} ><i className="material-icons">
create
</i></Link>
                    }
                



            <Link to="/" className="close">
            <i className="material-icons">
cancel_presentation
</i>
 
    </Link>       
                </div>
        
                            <div className="infos">
                                <div className="icon">
                                <img src={URLstorage+'/'+player.img} alt=""/>
                                    </div>
                                <div className="info">
                                    <p><span>Name</span> :  {player.name} - <small>{player.gender_id.name}</small></p>
                                    <p className="striped"> <span>Birthdate</span> : {player.birthdate} - <small>({age} Y-old)</small></p>
                                    <p><span>Height</span> :  {player.height}</p>
                                    <p className="striped"><span>Weight</span> :  {player.weight}</p>
                                    <p><span>Occupation</span> :  {player.occupation}</p>
                                    <p className="striped"><span>Blood</span> :  {player.blood_type_id.name}</p>

                                    <p><span>Weapon</span> :  {(player.weapon)?player.weapon:'None'}</p>
                                    <p className="striped"><span>Fight style</span> :  {player.fight_style}</p>



                                </div>
                            </div>
                        </div> 
       
     }










    return (
       
        <section className="singles">
            <div className="container">
                    

                         {rendervue}
            </div>
            </section>


    )
}

export default Single
