import React from 'react'
import {useState} from "react"
import { useSelector,useDispatch } from 'react-redux'
import AddOneplayer from '../actions/AddOneplayer'

const Addplayer = () => {
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [occupation, setOccupation] = useState('')
    const [blood_type_id, setBloodtypeid] = useState('')
    const [weapon, setWeapon] = useState('')
    const [fight_style, setFightstyle] = useState('')
    const [genderid, setGenderid] = useState('')
    const [img, setImg] = useState('')
 const [birthdate, setBirthdate] = useState('')

    const Dispatch = useDispatch();


    const checkval = useSelector(state=>state.Addplayer)

    const AuthUser = useSelector(state=>state.AuthUser)
const AddPlayer = (e) => {
        e.preventDefault()
       //check it before


        let data = new FormData()

        
        
        
        data.append( 'name' , name)
        data.append ('height',height)
        data.append ('weight',weight)
        data.append ( 'occupation',occupation)
        data.append ('blood_type_id',blood_type_id)
        data.append ('weapon',weapon)
        data.append ('fight_style',fight_style)
        data.append ( 'gender_id',genderid)
        data.append ('birthdate',birthdate)
        data.append ( 'img',img)

           
            

        

        
Dispatch(AddOneplayer(data,AuthUser.isToken));
        

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


let rendererrors;



if(!checkval.loading){
    if (checkval.error == true) {


       
        if( checkval.errors !=""){

        
        
            
            rendererrors = 
                   
                    Object.entries(checkval.errors).map(([key, value]) => {
                        return <p className="error" key={key}><span>{key} </span>: {value} </p>
                    })
               
            
          
           

     
          
    
        }
    
      
            
    }

}


    return (
        
        <div className="addform">
      
            <h1>Add a fighter</h1>

            {rendererrors}
            <form action="" onSubmit={AddPlayer} >
            
                <input type="text" name="name" placeholder='name' onChange={Changename}  /> 
                <input type="number" name="height" placeholder='height' onChange={Changeheight}  /> 
                <input type="number" name="weight" placeholder='weight' onChange={Changeweight}  /> 
                <input type="date" name="birthdate"  placeholder='birthdate' onChange={Changebirthdate}  /> 
                <input type="text" name="occupation" placeholder='occupation' onChange={Changeoccupation} /> 
                <input type="number" name="blood_type_id" placeholder='blood_type_id' onChange={Changebloodtypeid} /> 
                <input type="text" name="weapon" placeholder='weapon' onChange={Changeweapon} /> 
                <input type="text" name="fight_style" placeholder='fight_style' onChange={Changefightstyle} /> 
                <input type="number" name="gender_id" placeholder='gender_id' onChange={Changegenderid} /> 
                <div className="fileall">
                 
                <input type="file"  name="img" onChange={ (e) => Changeimg(e.target.files) } />
                </div>
                
                
                <button type="submit">SEND</button>

           

            </form>
        </div>
    )
}


export default Addplayer