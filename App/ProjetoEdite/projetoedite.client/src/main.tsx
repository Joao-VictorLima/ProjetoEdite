import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


import App from './App.tsx'
import './index.css'

//Routes
import Login from './routes/signup/login/Login.tsx';
import Feed from './routes/feed/Feed.tsx';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/Feed",
        element: <Feed/>
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
