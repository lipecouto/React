//import logo from './logo.svg';
//import Button from './components/button';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Abaixo é onde você importa os objetos criados
import Home  from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed'
import { Teste } from './pages'
import Cadastro from './pages/cadastro';

 
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/feed' element= {<Feed />} />
        <Route path='/teste' element= {<Teste />} />
        <Route path='/cadastro' element= {<Cadastro />} />
      </Routes>
    </Router>
  );
}
 //TODO uma tag vazia <> é um fragment e serve para o caso uma function retornar mais de uma tag html, já que o retorno só pode ser em arvore
export default App;
