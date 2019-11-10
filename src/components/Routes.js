import React from 'react'



import {Switch,Route,Redirect} from 'react-router-dom'

//Front Comp
import Players from './Layouts/parts/Players';
import Single from './Layouts/Single';

//Admin Comp
import Admin from './Admin/Admin';
import Editplayer from './Admin/templates/Editplayer';
import Login from './Layouts/Login';
import Register from './Layouts/Register';
import { useSelector } from 'react-redux'

export default function Routes() {


    const checkval = useSelector(state=>state.AuthUser)

 

    return (
        <div>
            

        
      
               

        <Switch>
            <Route path='/' exact  strict>
                <Players />
            </Route>
           
             
            <PrivateRouteConnect path='/logmein' exact strict>
        <Login />
             </PrivateRouteConnect>
        <PrivateRouteConnect path='/register' exact strict>
            <Register />
        </PrivateRouteConnect>
           
         
             <PrivateRoute path='/admin' exact strict >
                <Admin />
            </PrivateRoute>
            <PrivateRoute path='/edit/:id'>
                <Editplayer />
            </PrivateRoute>

            <Route path='/:id' >
                <Single />
            </Route>
        </Switch>



        </div>
    )
}

//Admin
function PrivateRoute({ children, ...rest }) {
    const checkval = useSelector(state=>state.AuthUser)

    return (
      <Route
        {...rest}
        render={({ location }) =>
        checkval.isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
  }

//Connect
  function PrivateRouteConnect({ children, ...rest }) {
    const checkval = useSelector(state=>state.AuthUser)

    return (
      <Route
        {...rest}
        render={({ location }) =>
        checkval.isToken == '' && checkval.Username == '' ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
  }