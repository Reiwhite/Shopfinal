import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from "../img/BL.jpg";
import img2 from "../img/EV.jpg";
import img3 from "../img/SK.jpg";
import img4 from "../img/SL.jpg";

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
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link text-white" to="/Products">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/orders">Orders</Link></li>
            <li className="nav-item"><button className="btn btn-danger">Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Products Component
function Products() {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      textAlign: "center",
      background: "linear-gradient(135deg, rgb(0, 179, 255), rgb(165, 83, 252))",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      paddingTop: "80px", // เพิ่มระยะห่างให้กับเนื้อหาด้านล่างของ Navbar
      position: "relative",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginTop: "40px",
      gap: "20px",
    },
    card: {
      width: "18rem",
      margin: "10px", // เพิ่มระยะห่างระหว่างการ์ด
    },
    cardBody: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    price: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#ff6f61", // สีราคา
    },
  };

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} ถูกเพิ่มลงในตะกร้าแล้ว`);
  };

  // ข้อมูลสินค้าที่มีราคา
  const products = [
    { id: 1, name: "Blue Lock", img: img1, price: 299 },
    { id: 2, name: "Evagelon", img: img2, price: 299 },
    { id: 3, name: "OPM", img: img3, price: 499 },
    { id: 4, name: "Slime", img: img4, price: 699 },
  ];

  return (
    <div style={{ minHeight: "100vh", paddingTop: "80px", background: "linear-gradient(135deg, rgb(0, 179, 255), rgb(165, 83, 252))", color: "#fff" }}>
      <Usernav />
      <div className="container mt-5">
        <h2 className="text-center">สินค้า</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3">
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="price">฿{product.price}</p> {/* เพิ่มราคาที่นี่ */}
                  </div>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
