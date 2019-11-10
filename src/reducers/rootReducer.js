import { combineReducers } from 'redux'
import Playersreducer from './Playersreducer'
import Singlereducer from './Singlereducer'
import Authreducer from './Authreducer';
import Addplayer from '../components/Admin/reducers/Addplayer';
import Editplayer from '../components/Admin/reducers/Editplayer';


 const rootReducer = combineReducers({
    AuthUser : Authreducer,
    players:Playersreducer,
    singleplayer:Singlereducer,
 
    Addplayer:Addplayer,
    editplayer:Editplayer


})

export default rootReducer