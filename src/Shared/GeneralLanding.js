import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

function GeneralLanding (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Signup}/>
                <Route path='/Signin' component={Signin}/>
                <Route path='/Signup' component={Signup}/>
            </Switch>
        </BrowserRouter>
    );
}

export default GeneralLanding;