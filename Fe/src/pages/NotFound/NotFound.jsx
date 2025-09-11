import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <div className="seal-image" />
      <h1>404 - Không tìm thấy trang</h1>
      <p>Hải cẩu dễ thương nói bye bye 👋 vì bạn vừa lạc vào vùng biển không có nội dung.</p>
      <Link to="/" className="home-button">Quay về trang chủ</Link>
    </div>
  );
};

export default NotFound;
