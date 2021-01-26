import React from 'react'
import { Switch, Route } from "react-router-dom";
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import Compra from './Compra';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <ItemListContainer />
                </Route>
                <Route exact path="/categoria/:categoria">
                    <ItemListContainer/>
                </Route>
                <Route exact path="/item/:id">
                    <ItemDetailContainer />
                </Route>
                <Route exact path="/carrito">
                    <Cart />
                </Route>
                <Route exact path="/compra/:id">
                    <Compra />
                </Route>
            </Switch>
      </main>
    )
}

export default Main;
