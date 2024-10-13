import Movies from "./components/Movies";
import { Route, Routes, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Customers from "./components/Pages/Customers";
import Rentals from "./components/Pages/Rentals";
import NoPage from "./components/pages/NoPage";
import Navbar from "./components/Navbar";
import MovieForm from "./components/Pages/MovieForm";
import LoginForm from "./components/Pages/LoginForm";
import RegisterForm from "./components/Pages/RegisterForm";
import Logout from "./components/Pages/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const decodedUser = jwtDecode(jwt);
      // console.log(decodedUser.name);
      setUser(decodedUser);

    } catch (error) {
      
    }
  }, [])
  

  const handleLogin = (jwt) => {
    localStorage.setItem('token', jwt);
    const decodedUser = jwtDecode(jwt);
    setUser(decodedUser); // Update user state
  };


  const routeCompnents = [
    { path: "/login", elements: <LoginForm onLogin={handleLogin}/> },
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
