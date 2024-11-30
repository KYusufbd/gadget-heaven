import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<h1 className='text-5xl'>This is home page!</h1>}/>
          <Route path='statistics' element={<h1 className='text-5xl'>This is statistics page!</h1>}/>
          <Route path='dashboard' element={<h1 className='text-5xl'>This is dashboard!</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
