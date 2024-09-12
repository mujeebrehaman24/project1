import React,{useState, createContext} from 'react';
import './App.css';
import {Outlet} from 'react-router-dom';

export const store = createContext();

const App = () => {
  const [token,setToken] = useState(null);
  return (
    <div className="App">
      <store.Provider value={[token,setToken]}>
        <Outlet/>
      </store.Provider>
    </div>
  );
}

export default App;

// 28320647476550