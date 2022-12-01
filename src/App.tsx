import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Create from './components/Create/Create';
import Navbar from './Navbar';
import PostDetails from './components/PostDetails/PostDetails';

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
