import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">BÍ QUYẾT LÀN DA KHÔNG TUỔI</h1>
        <p className="hero-description">Chăm sóc da từ thiên nhiên, giữ mãi nét thanh xuân rạng rỡ.</p>
        <Link to="/" className="btn-read-more">Đọc Thêm</Link>
      </div>
      <div className="hero-image">
        <img src="https://i.imgur.com/example-woman-face.jpg" alt="Bí quyết làn da không tuổi" />
      </div>
    </section>
  );
};

export default HeroSection;
