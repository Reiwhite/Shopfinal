// src/pages/Homeuser.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from "../img/BL.jpg";
import img2 from "../img/EV.jpg";
import img3 from "../img/SK.jpg";
import img4 from "../img/SL.jpg";

// Navbar Component
const Usernav = () => {
  const navbarStyle = {
    position: "fixed", // ทำให้ Navbar คงที่อยู่ด้านบน
    top: 0, // อยู่ที่ตำแหน่งบนสุด
    left: 0, // ชิดขอบซ้าย
    width: "100%", // ความกว้างเต็มหน้าจอ
    zIndex: 1000, // ให้อยู่ด้านบนของเนื้อหาทั้งหมด
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

// Homeuser Component
function Homeuser() {
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
    carouselContainer: {
      width: "100%",
      maxWidth: "1275px",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      marginTop: "20px",
    },
    carouselImage: {
      width: "100%",
      height: "400px",
      objectFit: "cover",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "space-between", // จัดการ์ดให้ห่างกัน
      flexWrap: "wrap", // เมื่อหน้าจอเล็กลงก็จะแสดงเป็นแถวใหม่
      marginTop: "40px",
      gap: "20px", // เพิ่ม gap ระหว่างการ์ด
    },
    card: {
      width: "18rem",
      margin: "10px", // เพิ่มระยะห่างระหว่างการ์ด
    },
    cardBody: {
      display: "flex",
      justifyContent: "space-between", // จัดให้ปุ่มอยู่ด้านขวาสุด
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      {/* นำเข้า Usernav */}
      <Usernav />

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
      <nav className="mt-2">
        <Link to="/products" style={styles.link}>View Products</Link> | 
        <Link to="/orders" style={styles.link}>My Orders</Link>
      </nav>
      
      {/* Card Section */}
      <div style={styles.cardContainer}>
        {/* Card 1 */}
       
        <div className="card" style={styles.card}>
          <img src={img1} className="card-img-top" alt="Product 1" />
          <div className="card-body" style={styles.cardBody}>
            <div>
              <h5 className="card-title">Blue Lock</h5>
              <p className="card-text">Some quick example text to build on the card title.</p>
            </div>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={styles.card}>
          <img src={img2} className="card-img-top" alt="Product 2" />
          <div className="card-body" style={styles.cardBody}>
            <div>
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">Some quick example text to build on the card title.</p>
            </div>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={styles.card}>
          <img src={img3} className="card-img-top" alt="Product 3" />
          <div className="card-body" style={styles.cardBody}>
            <div>
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">Some quick example text to build on the card title.</p>
            </div>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card" style={styles.card}>
          <img src={img4} className="card-img-top" alt="Product 4" />
          <div className="card-body" style={styles.cardBody}>
            <div>
              <h5 className="card-title">Product 4</h5>
              <p className="card-text">Some quick example text to build on the card title.</p>
            </div>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Homeuser;
