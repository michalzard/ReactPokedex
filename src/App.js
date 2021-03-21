import './css/App.scss';
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import {BrowserRouter as Router} from "react-router-dom";
import Logo from "./assets/p.png";

function App() {
  return (
    <Router>

    <div className="App">
    <Header/>
    <PokemonCard id="002" photo={Logo} name="Firesaur" badges={{type:"flying"}}/>
    </div>

    </Router>
  );
}

export default App;
