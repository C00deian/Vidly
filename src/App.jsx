import Movies from "./components/Movies";
import {  Route, Routes,Navigate } from "react-router-dom";
import Customers from "./components/Pages/Customers";
import Home from "./components/pages/Home";
import Rentals from "./components/Pages/Rentals";
import NoPage from "./components/pages/NoPage";
import Navbar from "./components/Navbar";
import MovieForm from "./components/Pages/MovieForm";
import LoginForm from "./components/Pages/LoginForm";
import RegisterForm from "./components/Pages/RegisterForm";
import AddMovies from "./components/AddMovies";
// import './App.css'

function App() {
  const routeCompnents = [
    { path: "/login", elements: <LoginForm /> },
    { path: "/movies", elements: <Movies /> },
    { path: "/movies/:id", elements: <MovieForm /> },
    { path: "/not-found", elements: <NoPage /> },
    { path: "/customers", elements: <Customers /> },
    { path: "/rentals", elements: <Rentals /> },
    { path: "/register", elements: <RegisterForm /> },
    // { path: "/movies/new", elements: <AddMovies /> },

  ];

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />
          {routeCompnents.map((route, index) => (
            <Route path={route.path} element={route.elements} key={index} />
          ))}
             <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
