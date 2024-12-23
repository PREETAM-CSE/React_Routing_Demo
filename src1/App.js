import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar"


function App() {

  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path="/" element = {<Home/>} />
  //   <Route path="/about" element = {<About/>} />
  //   <Route path="/items" element = {<Items/>} />
  //   </>
  // );
  // const router = createBrowserRouter(routes);

const router = createBrowserRouter([
  {path:'/', element: <Navbar/>, children:[
    //{path: "/", element: <Home/>}, this can be ambiguous so in place of this We can write
    {index: true, element: <Home/>},
  {path: "/about", element: <About/>},
  {path: "/items", element: <Items/>}
  ]}
  
])
  return <>
   <RouterProvider router={router}/>
  </>;
}

export default App;
