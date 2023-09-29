import ReactDOM from 'react-dom/client'
import Reservation from './pages/reservation.tsx';
import Management from './pages/management.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ManagementSchedule from './pages/managementSchedule.tsx';
import ManagementNew from './pages/managementNew.tsx';

const router = createBrowserRouter([
  {
    path: "/Reservation",
    element: <Reservation />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
  },
  {
    path: "/Management",
    element: <Management />,
    children: [
      { path: '/Management/ManagementNew', element: <ManagementNew /> },
      { path: '/Management/ManagementSchedule', element: <ManagementSchedule /> },
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <div className='h-screen flex flex-col'>
  <RouterProvider router={router} />
  </div>
)
