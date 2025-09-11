import React from 'react';
import '../assets/styles/main.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col about-us">
          <h3>Về Blog Sắc Đẹp</h3>
          <p>
            Nơi chia sẻ những bí quyết làm đẹp, chăm sóc da, xu hướng mỹ phẩm và phong cách sống khỏe mạnh.
          </p>
        </div>

        <div className="footer-col quick-links">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li><a href="/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
            <li><a href="/dieu-khoan-su-dung">Điều khoản sử dụng</a></li>
            <li><a href="/lien-he">Liên hệ</a></li>
          </ul>
        </div>

        <div className="footer-col social-media">
          <h3>Theo dõi chúng tôi</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Blog Sắc Đẹp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
