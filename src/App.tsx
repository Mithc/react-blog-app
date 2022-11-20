import Home from './Home';
import Navbar from './Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Create from './Create';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/create',
      element: <Create />
    }
  ])
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
