import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


import App from './App.tsx'
import './index.css'

//Routes
import Login from './routes/SignUp/login/Login.tsx';
import Feed from './routes/feed/Feed.tsx';
import UserProfile from './routes/userProfile/UserProfile.tsx';
import SignUp from './routes/SignUp/signUp/SignUp.tsx'; 

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
      },
      {
        path: "/UserProfile",
        element: <UserProfile/>
      },
      {
        path: "/SignUp",
        element: <SignUp/>
      },
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
