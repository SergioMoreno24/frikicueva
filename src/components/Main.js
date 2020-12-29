import React from 'react'
import { Switch, Route } from "react-router-dom";
import ItemListContainer from './ItemListContainer.js';
import ItemDetailContainer from './ItemDetailContainer.js';
//import Home from './Home.js';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <ItemListContainer/>
                </Route>
                <Route exact path="/category">
                    <ItemListContainer/>
                </Route>
                <Route exact path="/item/:id">
                    <ItemDetailContainer />
                </Route>
            </Switch>
      </main>
    )
}

export default Main;
