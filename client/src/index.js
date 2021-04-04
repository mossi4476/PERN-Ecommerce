import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//mobx store device
import DeviceStore from './store/DeviceStore';
//mobx store user
import UserStore from './store/UserStore';


export const Context = createContext(null)



ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

