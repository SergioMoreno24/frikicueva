import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js';
//import './App.css';
import { BrowserRouter } from "react-router-dom";

let App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      {/*<ItemListContainer />*/}
      <ItemDetailContainer/>
    </BrowserRouter>
  );
}

export default App;
