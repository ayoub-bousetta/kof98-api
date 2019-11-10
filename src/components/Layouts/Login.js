import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import  logMein  from  '../../actions/logMein';
import {Link,useHistory} from 'react-router-dom'


const Login = () => {



    const [email,setEmail]=useState('')
    const [pw,setpw]=useState('')

    const dispatch =useDispatch();

    const history = useHistory()

const goInLogin = (e)=>{
    e.preventDefault()
    let data = new FormData()

        
        
        
    data.append( 'email' , email)
    data.append ('password',pw)

    
    dispatch(logMein(data))
    

}


const checkval = useSelector(state=>state.AuthUser)



let rendererrors;
if(!checkval.loading){
    if (checkval.error == true) {
if( checkval.errors !="" && checkval.isToken == '' && checkval.Username == '' ){
  rendererrors = 
                   
                    Object.entries(checkval.errors).map(([key, value]) => {
                        return <p className="error" key={key}><span>{key} </span>: {value} </p>
                    })
               }
     
    }
}
    return (
        <div className="form">
           <div className="addform" >
        <h1>Connect</h1>
        {rendererrors}
            <form action="" onSubmit={goInLogin}>

                <input type="text" placeholder="Email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Password" name="pw" onChange={(e)=>{setpw(e.target.value)}}/>
                <button type="submit">Check me in</button>
            </form>

            
            
        </div> 
        <p>Not having an account ? <Link to="/register">Create one</Link></p>
        </div>
        
    )
}


export default  Login