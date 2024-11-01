import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home";
import FAQ from "./Pages/FAQ";
import Welcome from "./Pages/Welcome";
import ChairmanMsg from "./Pages/ChairmanMsg";

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
    {
      path: "welcome",
      element: <Welcome />,
    },
    {
      path: "chairman-msg",
      element: <ChairmanMsg />,
    },
  ]);
  
  return (
    <div>
    <RouterProvider router={router} />
  </div>
  );

}

export default App;
