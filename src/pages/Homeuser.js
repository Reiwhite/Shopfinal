import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // นำเข้า CSS ของ Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // นำเข้า JS ของ Bootstrap

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
      </nav>
    </div>
  );
}

export default Home;
