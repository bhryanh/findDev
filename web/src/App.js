import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/Devs');

      setDevs(response.data);
    };

    loadDevs();
  }, []);

  async function handleAddDev(data) {  
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  async function handleRemoveDev(data) {    
    const dev = await api.delete('/devs', {params: {
      github_username: data.github_username
    }});

    devs.splice( devs.indexOf(dev), 1)
    setDevs([...devs]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} onRemove={handleRemoveDev}  />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
