import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import './App.css';

let App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Aquí va a ir el catálogo de productos"/>
    </>
  );
}

export default App;
