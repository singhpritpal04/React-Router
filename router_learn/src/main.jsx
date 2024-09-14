import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  User,
  Github,
  GithubLoader,
  githubLoaderInfo,
} from "./components";

//One Way
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       },
//     ]
//   },
// ])



//Second Way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      {/* <Route path='github' element={<Github/>} /> */}
      <Route loader={githubLoaderInfo} path="github" element={<GithubLoader />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
