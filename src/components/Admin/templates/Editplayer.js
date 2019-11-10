import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import getSingle from '../../../actions/getSingle'
import  {URLstorage}  from  '../../Apiconfig';
import EditOnePlayer from '../actions/EditOnePlayer';



const Editplayer = ()=> {
const dispatch =useDispatch();


const players = useSelector(state=>state.singleplayer)

const AuthUser = useSelector(state=>state.AuthUser)

let player
const [name, setName] = useState('')
const {id} = useParams()

    useEffect(() => {
        dispatch(getSingle(id))
      

  
    }, [])


   
const [height, setHeight] = useState('')
const [weight, setWeight] = useState('')
const [occupation, setOccupation] = useState('')
const [blood_type_id, setBloodtypeid] = useState('')
const [weapon, setWeapon] = useState('')
const [fight_style, setFightstyle] = useState('')
const [genderid, setGenderid] = useState('')
const [img, setImg] = useState('')
const [birthdate, setBirthdate] = useState()
let  render 


const editPlayer =(e)=>{


    e.preventDefault()
    //check it before


     let data = new FormData()


     if(name == ''){
        data.append('name',player.name)
    }else{
        data.append( 'name' , name)
    }

    if(height == ''){
        data.append('height',player.height)
    }else{
        data.append( 'height' , height)
    }

    if(weight == ''){
        data.append('weight',player.weight)
    }else{
        data.append ('weight',weight)
    }
     
    if(occupation == ''){
        data.append('occupation',player.occupation)
    }else{
        data.append ('occupation',occupation)
    }
    
    if(blood_type_id == ''){
        data.append('blood_type_id',player.blood_type_id.id)
    }else{
        data.append ('blood_type_id',blood_type_id)
    }

    if(weapon == ''){
        data.append('weapon',player.weapon)
    }else{
        data.append ('weapon',weapon)
    }

    if(fight_style == ''){
        data.append('fight_style',player.fight_style)
    }else{
        data.append ('fight_style',fight_style)
    }
    
    if(genderid == ''){
        data.append('gender_id',player.gender_id.id)
    }else{
        data.append ('gender_id',genderid)
    }

    if(birthdate == '' || birthdate  == undefined){
        data.append('birthdate',player.age)
    }else{
        data.append ('birthdate',birthdate)
    }

  

    if(img == ''){
        data.append('img',player.img)
    }else{
        data.append ( 'img',img)
    }
       
        dispatch(EditOnePlayer(id,data,AuthUser.token));
    
}





    const Changebirthdate =(e)=>{
        
        setBirthdate(
             e.target.value
        )
    }
   

    const Changename =(e)=>{
        setName(
            e.target.value
       )
    }
    
    const Changeheight =(e)=>{
        setHeight(
            e.target.value
       )
    }
    const Changeweight =(e)=>{
    
        setWeight(
            e.target.value
       )
    
    }
    const Changeoccupation =(e)=>{
        setOccupation(
            e.target.value
       )
    }
    
    const Changebloodtypeid =(e)=>{
        setBloodtypeid(
            e.target.value
       )
    }
    const Changeweapon =(e)=>{
        setWeapon(
            e.target.value
       )
    }
    const Changefightstyle =(e)=>{
        setFightstyle(
            e.target.value
       )
    }
    const Changegenderid =(e)=>{
   
        setGenderid(
            e.target.value
       )
    
    }
    const Changeimg =(ev)=>{
      
       
    
        setImg(
            ev[0]
            
        )
    }


    if(!players.loading){
        player=players.players
        let numberd = 2
    return (
        <div>
        <div className="addform">  
            <h1>EDIT a fighter</h1>
            <form onSubmit={editPlayer}  >
            <input type="date" name="birthdate"  defaultValue ={player.age}  placeholder='birthdate' onChange={Changebirthdate}   /> 
       
                <input type="text" name="name" defaultValue ={player.name} placeholder='name' onChange={Changename}   /> 
                <input type="number" name="height" defaultValue ={player.height} placeholder='height' onChange={Changeheight}   /> 
                <input type="number" name="weight" defaultValue ={player.weight} placeholder='weight' onChange={Changeweight}  /> 
              
                <input type="text" name="occupation" defaultValue ={player.occupation} placeholder='occupation' onChange={Changeoccupation} /> 
                <select name="blood_type_id" defaultValue={player.blood_type_id.id} onChange={Changebloodtypeid}>
                     {player.Bloodtypes.map(Bloodtype=>{
                         return <option key={Bloodtype.id}  value={Bloodtype.id}>{Bloodtype.name}</option>
                     })}

                 </select>
                <input type="text" name="weapon" defaultValue ={player.weapon} placeholder='weapon' onChange={Changeweapon} /> 
                <input type="text" name="fight_style" defaultValue ={player.fight_style} placeholder='fight_style' onChange={Changefightstyle} /> 
              

                 <select defaultValue={player.gender_id.id} name="gender_id" onChange={Changegenderid}>
                     {player.genders.map(gender=>{
                         return <option key={gender.id}  value={gender.id}>{gender.name}</option>
                     })}

                 </select>
                <div className="fileall">

                                    <img src={URLstorage+'/'+player.img} alt="" wodth="120"/>

                
                 <input type="file"  name="img" onChange={ (e) => Changeimg(e.target.files) } />
                </div>
                
                
                <button type="submit">SEND</button>

           

            </form>
        </div>
        </div>
    )

}else{
    return "Loading..."
}
        
}

export default Editplayer;