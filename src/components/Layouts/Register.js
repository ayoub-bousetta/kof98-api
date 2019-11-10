import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import  saveMe  from  '../../actions/saveMe';
import {Link,useHistory} from 'react-router-dom'
const Register = () => {
    const history = useHistory()

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [pw,setpw]=useState('')
    const checkval = useSelector(state=>state.AuthUser)
    const dispatch =useDispatch();
const saveMein = (e)=>{
    e.preventDefault()
    let data = new FormData()

        
        
    data.append( 'name' , name)
    data.append( 'email' , email)
    data.append ('password',pw)

    dispatch(saveMe(data))

    

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
     
    }else{
        rendererrors = <p className="success" >Done successfully..</p>
    }

}



    return (
        <div className="form">
             <div className="addform">
        <h1>Create an account</h1>
        {rendererrors}
            <form action="" onSubmit={saveMein}>
            <input type="text" placeholder="Name" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                <input type="email" placeholder="Email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Password" name="pw" onChange={(e)=>{setpw(e.target.value)}}/>
                <button type="submit">Save me</button>
            </form>

          
            
        </div>
        <p>You have an account ? <Link to="/logmein">Log me in</Link></p> 
        </div>
      
    )
}


export default  Register