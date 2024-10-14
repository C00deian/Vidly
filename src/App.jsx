import Movies from "./components/Movies";
import { Route, Routes, Navigate } from "react-router-dom";
import Customers from "./components/Pages/Customers";
import Rentals from "./components/Pages/Rentals";
import NoPage from "./components/pages/NoPage";
import Navbar from "./components/Navbar";
import MovieForm from "./components/Pages/MovieForm";
import LoginForm from "./components/Pages/LoginForm";
import RegisterForm from "./components/Pages/RegisterForm";
import Logout from "./components/Pages/Logout";
import auth from './services/authServices'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
    
  }, [])
  


  const routeCompnents = [
    { path: "/login", elements: <LoginForm/> },
    { path: "/logout", elements: <Logout /> },
    { path: "/movies", elements: <Movies /> },
    { path: "/movies/:id", elements: <MovieForm /> },
    { path: "/not-found", elements: <NoPage /> },
    { path: "/customers", elements: <Customers /> },
    { path: "/rentals", elements: <Rentals /> },
    { path: "/register", elements: <RegisterForm /> },
  ];

  return (
    <>
      <ToastContainer />
      <Navbar user={user} />
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
