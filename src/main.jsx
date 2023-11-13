import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PsikologPage from './pages/PsikologPage.jsx';
import SSSPage from './pages/SSSPage.jsx';
import MeetingPage from './pages/MeetingPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';

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
  },
  {
    path:"/meeting",
    element:<MeetingPage />
  },
  {
    path:"/payment",
    element:< PaymentPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  )
