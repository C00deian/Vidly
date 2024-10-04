import Movies from "./components/Movies";
import { Navigate, Route, Routes } from "react-router-dom";
import Customers from "./components/Pages/Customers";
import Home from "./components/pages/Home";
import Rentals from "./components/Pages/Rentals";
import NoPage from "./components/pages/NoPage";
import Navbar from "./components/Navbar";
// import './App.css'

function App() {
  const routeCompnents = [
    { path: "/", elements: <Movies /> },
    { path: "*", elements: <NoPage /> },
    { path: "/home", elements: <Home /> },
    { path: "/customers", elements: <Customers /> },
    { path: "/rentals", elements: <Rentals /> },
  ];

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          {routeCompnents.map((route, index) => (
            <Route path={route.path} element={route.elements} key={index} />
          ))}
        </Routes>
      </main>
    </>
  );
}

export default App;
