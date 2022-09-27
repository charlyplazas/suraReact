import React from 'react';
import ReactDOM from 'react-dom/client';
import {Charly} from './Componente/Charly.js'
import { Menu } from './Menu/Menu.js';
import { Banner } from './Banner/Banner.js';
import { Texto } from './Banner/Texto/Texto.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <Banner/>
    <Texto/>

  </React.StrictMode>
);