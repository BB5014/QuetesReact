import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Product from './Product';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <ul>

                <li><NavLink exact to ="/">Accueil</NavLink></li>
                <li><NavLink to = "/page-de-contact">Contact</NavLink></li>
                </ul>
              </div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/page-de-contact" component={Contact} />
                {/* Il est possible de mettre des variables dans les URL pour répondre à plusieurs cas à la fois. */}
                <Route path="/produit-:productNumber(\d+)" component={Product} />
              </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

// Ici lorsque l'utilisateur sera sur la page /page-de-contact, le lien aura la classe CSS active en plus, ce qui permettra de designer la page au mieux pour suivre la navigation de l'utilisateur.

// Il possible de choisir la classe CSS qui sera appliquée grâce au paramètre activeClassName, par exemple le lien pourrait être <NavLink to="/page-de-contact" activeClassName="selected"> Contact </NavLink>