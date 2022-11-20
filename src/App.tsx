import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Create from './Create';
import Navbar from './Navbar';
import PostDetails from './PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/create',
      element: <Create />
    },
    {
      path: '/blogs/:id',
      element: <PostDetails />
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
