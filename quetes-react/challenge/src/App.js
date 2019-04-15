import React, { Component } from 'react';
import { Route, BrowserRouter, Switch , NavLink} from 'react-router-dom';
import Home from './Home';
import History from './History';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div style = {{color: "blue"}}>
                <NavLink style = {{background : "yellow"}}  exact to="/">Bienvenue sur l'accueil </NavLink> 
                <br/><br/>
                <NavLink style = {{background : "#1FDEC9"}} activeStyle={{color: "red"}}  to="/notre-histoire"> Notre histoire </NavLink>
                
    

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;
