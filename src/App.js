import NavBar from './components/NavBar.js';
import Main from './components/Main.js';
import { BrowserRouter } from "react-router-dom";
import CartContext from './components/CartContext';

let App = () => {
  return (
    <BrowserRouter>
      <CartContext>
          <NavBar/>
          <Main />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
