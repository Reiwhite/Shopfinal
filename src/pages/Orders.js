import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
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

function Orders() {
  const [cart, setCart] = useState([]);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ฟังก์ชันลบสินค้าออกจากตะกร้า
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // อัปเดต localStorage
  };

  // คำนวณราคาทั้งหมด
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // ฟังก์ชันแสดงรายละเอียดการชำระเงิน
  const handlePayment = () => {
    setShowPaymentDetails(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, rgb(0, 179, 255), rgb(165, 83, 252))", color: "#fff" }}>
      <Usernav />
      <div className="container mt-5 pt-5">
        <h2 className="text-center">สินค้าที่คุณเพิ่ม</h2>

        {/* Card ที่ครอบรายการสินค้า */}
        <div className="card p-4">
          {cart.length === 0 ? (
            <p className="text-center">ยังไม่มีสินค้าในตะกร้า</p>
          ) : (
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <img src={item.img} alt={item.name} width="50" />
                  <div>{item.name} <span className="text-muted">฿{item.price}</span></div>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>
                    🗑️ ลบ
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* ข้อมูลการคำนวณราคา */}
          <div className="mt-4">
            <h4 className="text-center">รวมทั้งหมด: ฿{calculateTotal()}</h4>
          </div>

          {/* แสดงรายละเอียดการชำระเงิน */}
          {showPaymentDetails && (
            <div className="mt-5 p-4 border rounded bg-light">
              <h4 className="text-center">รายละเอียดการชำระเงิน</h4>
              <ul className="list-group">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>{item.name}</div>
                    <span>฿{item.price}</span>
                  </li>
                ))}
              </ul>
              <h5 className="text-center mt-3">รวมทั้งหมด: ฿{calculateTotal()}</h5>
              <div className="text-center mt-3">
                <button className="btn btn-primary">ยืนยันการชำระเงิน</button>
              </div>
            </div>
          )}

          {/* ปุ่มชำระเงินที่มุมขวาล่างของ Card */}
          <div className="position-absolute bottom-0 end-0 p-4">
            <button className="btn btn-success" onClick={handlePayment} disabled={cart.length === 0}>
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
