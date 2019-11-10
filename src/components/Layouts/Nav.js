import React from 'react'
import {Link} from 'react-router-dom'
import  logMeout  from  '../../actions/logMeout';
import { useSelector,useDispatch } from 'react-redux'


const Nav = () =>{

    const checkval = useSelector(state=>state.AuthUser)
    let navlinks;
let admintemp
    
const dispatch = useDispatch()

if (checkval.isToken != '' && checkval.Username != '') {
       
            if (checkval.isAdmin) {

                admintemp= <Link to="/admin" >
                Dashboard
              </Link>  
                
            }else{
                admintemp=<p></p>
            }
           navlinks=  
           <button onClick={(e)=>dispatch(logMeout())}>
                 Logout
             </button>
           
        
    }else{
      navlinks= <Link to="/logmein" >
                  login
             </Link>    

    }



    return (
        <div className='navbar'>


              <div className="left-btn">
             {navlinks}
              </div>

            <div className="right-btn">
        
               {admintemp}
            </div>
            
            
        </div>
    )
}
export default Nav