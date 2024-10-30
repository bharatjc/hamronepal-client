import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home";
import FAQ from "./Pages/FAQ";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Home/>
      ),
    },
    {
      path: "faq",
      element: <FAQ />,
    },
  ]);
  
  return (
    <div>
    <RouterProvider router={router} />
  </div>
  );

}

export default App;
