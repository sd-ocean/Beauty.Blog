import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/lamdeplogo.jpg';
import '../assets/styles/main.css'; //CSS header

import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Blog Sắc Đẹp Logo" className="logo-img" />
          <span>TE</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">TRANG CHỦ</Link></li>
          <li><Link to="/cham-soc-da">CHĂM SÓC DA</Link></li>
          <li><Link to="/bi-kip-lam-dep">BÍ KÍP LÀM ĐẸP</Link></li>
          <li><Link to="/tham-my">THẨM MỸ</Link></li>
          <li><Link to="/dang-dep">DÁNG ĐẸP</Link></li>
          <li><Link to="/my-pham">MỸ PHẨM</Link></li>
          <li><Link to="/hoi-dap">HỎI ĐÁP</Link></li>
        </ul>
        <div className="icons">
          <div className="search-icon">
            <i className="fas fa-search"></i>
            <input type="text" className="search-box" placeholder="Tìm kiếm" />
          </div>
          <i className="fas fa-user"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
