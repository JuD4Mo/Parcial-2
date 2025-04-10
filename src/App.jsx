import './App.css'
import { Client } from './Components/Clientes/ClientComponent';
import { Routes, Route } from 'react-router-dom';
import { AddTransaction } from './Components/AddQuejasReclamos/AddTransaction';
import { DisplayClients } from './Components/DisplayClients/DisplayClients';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/AddTransaction" element={<AddTransaction />} />
        <Route path="/listar" element={<DisplayClients/>}/>
      </Routes>
    </div>
  );
};


export default App
