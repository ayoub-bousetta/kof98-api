import React from 'react'
import Addplayer from './templates/Addplayer';
import {useSelector} from 'react-redux'









 function Admin() {

    const isLoggin = useSelector(state=>state.AuthAdmin)

  
        return (
            <div>
      
                <Addplayer />
            </div>
        )

 
    
}

export default Admin