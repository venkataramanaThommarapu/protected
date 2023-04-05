import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Protected from "./Protected.js";




// import Layout from "./Layout";
// import Home from "./Pages/Home";
// import Nopage from "./Pages/Nopage";
// import Todo from "./Components/Todo";
// import Regex from "./Components/Regex";
// import "bootstrap/dist/css/bootstrap.min.css";



const Layout = React.lazy(() => import("./Layout"));
const Home = React.lazy(() => import("./Pages/Home"));
const Todo = React.lazy(() => import("./Components/Todo"));
const Nopage = React.lazy(() => import("./Pages/Nopage"));
const Login = React.lazy(() => import("./Pages/Login"));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/home"element={<Protected Component={Home} />} />
          <Route path="/todo" element={<Protected Component={Todo} />} />
         
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
