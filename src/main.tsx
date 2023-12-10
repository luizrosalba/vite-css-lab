import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import App from './App';
import Layout from './components/Layout/Layout';
import Flex from './components/Flex/Flex';
import Variables from './components/Variables/Variables';
import Nesting from './components/Nesting/Nesting';
import Selectors from './components/Selectors/Selectors';
import Css from './components/Css/Css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/flex" element={<Flex />} />
          <Route path="/css" element={<Css />} />
          <Route path="/css/selectors" element={<Selectors />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/nesting" element={<Nesting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

