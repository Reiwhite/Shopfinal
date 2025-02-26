// src/pages/Home.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // นำเข้า CSS ของ Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // นำเข้า JS ของ Bootstrap
import { AuthContext } from "../AuthContext"; // นำเข้า AuthContext
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navbarStyle = {
    background: "linear-gradient(135deg,rgb(220, 95, 255),rgb(74, 129, 255))", // ไล่ระดับสี
    color: "#fff",
    position: "fixed", // ทำให้ Navbar อยู่ที่ด้านบนสุด
    top: 0,
    left: 0,
    width: "100%", // ความกว้างเต็มหน้าจอ
    zIndex: 1000, // ให้อยู่เหนือเนื้อหาทั้งหมด
    padding: "10px 0", // เพิ่ม padding เพื่อทำให้ Navbar ดูไม่หนาเกินไป
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
  );
};

function Home() {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "linear-gradient(135deg, rgb(0, 179, 255), rgb(165, 83, 252))",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      paddingTop: "80px", // เพื่อให้เนื้อหาหลักไม่ทับกับ Navbar
    },
    nav: {
      marginTop: "20px",
    },
    link: {
      margin: "0 10px",
      color: "#fff",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "bold",
    },
    carouselContainer: {
      width: "80%", // กำหนดความกว้างของ Carousel
      maxWidth: "800px",
      borderRadius: "15px", // ทำให้มีมุมโค้งมน
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // เพิ่มเงาให้ดูสวยขึ้น
    },
    carouselImage: {
      width: "100%", 
      height: "400px", // ตั้งค่าความสูงให้เท่ากัน
      objectFit: "cover", // ป้องกันภาพบิดเบี้ยว
    },
  };

  return (
    <div style={styles.container}>
      {/* นำเข้า Navbar */}
      <Navbar />

      {/* Bootstrap Carousel */}
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={styles.carouselContainer}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img 
              src="https://cms.dmpcdn.com/movie/2025/01/04/1b44ac80-ca4e-11ef-8521-8dadc2840fd0_webp_original.webp" 
              className="d-block" 
              alt="Shopping" 
              style={styles.carouselImage} 
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img 
              src="https://www.phoenixnext.com/media/brand/tmp/EC_Banner_Omniscient_Reader.jpg" 
              className="d-block" 
              alt="Fashion" 
              style={styles.carouselImage} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://i.ytimg.com/vi/4xswQTelDXA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWvFXwnUfteQFfwBbFYmCQYik3EA" 
              className="d-block" 
              alt="Electronics" 
              style={styles.carouselImage} 
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Navigation Links */}
      <nav style={styles.nav}>
        <Link to="/products" style={styles.link}>View Products</Link> | 
        <Link to="/orders" style={styles.link}>My Orders</Link> | 
        <Link to="/login" style={styles.link}>Login</Link> | 
        <Link to="/register" style={styles.link}>Register</Link>
      </nav>
    </div>
  );
}

export default Home;
