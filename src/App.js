//PACKAGES
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataContainer from "./dataContainer";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//LAYOUT
import RootLayout from "./layout/RootLayout";

//PAGES
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return (
    <div className="App">
      {" "}
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
