import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Navbar Component
const Usernav = () => {
  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    background: "linear-gradient(135deg, rgb(220, 95, 255), rgb(74, 129, 255))",
    color: "#fff",
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">MyShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Homeuser">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Orders Component
const Orders = () => {
  const { orders } = useContext(OrderContext);

  return (
    <div>
      {/* นำเข้า Usernav */}
      <Usernav />
      <div className="container mt-5" style={{ paddingTop: "80px" }}>
        <h2 className="text-center">My Orders</h2>
        <Link to="/Homeuser" className="btn btn-secondary mb-3">Back to Home</Link>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <div className="row">
            {orders.map((order, index) => (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img src={order.image} className="card-img-top" alt={order.name} />
                  <div className="card-body">
                    <h5 className="card-title">{order.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
