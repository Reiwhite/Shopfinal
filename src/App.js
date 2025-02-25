import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function App() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const navbarStyle = {
        background: "linear-gradient(135deg,rgb(220, 95, 255),rgb(74, 129, 255))", // ไล่ระดับสี
        color: "#fff",
    };

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg" style={navbarStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">MyShop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/products">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/orders">Orders</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
