import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../routes/Layout.jsx';
import Create from '../routes/Create.jsx';
import Gallery from '../routes/Gallery.jsx';
import Update from '../routes/Update.jsx';
import Detail from '../routes/Detail.jsx';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/CreatePost" element={<Create />} />
          <Route index={false} path="/ReadPost" element={<Gallery />} />
          <Route index={false} path="/UpdatePost/:id" element={<Update />} />
          <Route index={false} path="/DetailPost/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
