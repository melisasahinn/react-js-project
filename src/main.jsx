import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PsikologPage from './pages/PsikologPage.jsx';
import SSSPage from './pages/SSSPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/nasilcalisir",
    element: <App />
  },
  {
    path: "/hakkimizda",
    element: <App />
  },
  {
    path: "psikolog",
    element: <PsikologPage />
  },
  {
    path: "sss",
    element: <SSSPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  )
