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
import auth from "./services/authServices";
import ProtectedRoute from "./Protect-Routes/Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
  }, []);

  const routeComponents = [
    { path: "/login", element: <LoginForm /> },
    { path: "/logout", element: <Logout /> },
    { path: "/movies", element: <Movies user={user} /> },
    { path: "/movies/:id", element: <MovieForm />, protected: true },
    { path: "/not-found", element: <NoPage /> },
    { path: "/customers", element: <Customers />, protected: true },
    { path: "/rentals", element: <Rentals />, protected: true },
    { path: "/register", element: <RegisterForm /> },
  ];

  return (
    <>
      <ToastContainer />
      <Navbar user={user} />
      <main className="container">
        <Routes>
          {/* Default route */}
          <Route
            path="/login"
            element={user ? <Navigate to="/movies" replace /> : <LoginForm />}
          />
          {/* Map through route components */}
          {routeComponents.map((route, index) =>
            route.protected ? (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute user={user}>{route.element}</ProtectedRoute>
                }
              />
            ) : (
              <Route key={index} path={route.path} element={route.element} />
            )
          )}

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
