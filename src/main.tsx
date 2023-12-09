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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/flex" element={<Flex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

