import NavBar from './components/NavBar.js';
import Main from './components/Main.js';
import { BrowserRouter } from "react-router-dom";

let App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Main />
    </BrowserRouter>
  );
}

export default App;
