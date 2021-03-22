import './css/App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import CardContainer from './components/CardContainer';
import PokeProfile from "./components/PokemonProfile";


function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
    

    <Route path="/pokemon/:id/:name" children={<PokeProfile />}>
    </Route>

    <Route path="/">
    <CardContainer/>   
    </Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;

