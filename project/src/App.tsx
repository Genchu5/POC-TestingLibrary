import Counter from "./pages/counter"
import TaTeTiPage from "./pages/TaTeTiPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
      {path: '/', element: <TaTeTiPage/>},
      {path: '/counter', element: <Counter initialCount={0} />},
      {path: '/tateti', element: <TaTeTiPage/>},
    ]
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
