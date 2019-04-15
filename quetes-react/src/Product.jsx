// Ici il sera par exemple possible de récupérer la variable productNumber et celle-ci ne pourra être qu'un numéro grâce à la regex.

// Elle pourra être récupéré dans le composant grâce à this.props.match.params.productNumber, par exemple :


import React, { Component } from 'react';
// Il est aussi possible de créer des liens dans d'autres composants, par exemple :
import { link } from 'react-router-dom';

class Product extends Component {
    render() {
        return (
            <div>
                <link to = "/"> Retour à l'accueil</link>
                {this.props.match.params.productNumber}
            </div>
        );
    }
}

export default Product;