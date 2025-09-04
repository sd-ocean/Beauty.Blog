import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="section-title">Bài viết phổ biến</h2>
      <ul className="popular-posts">
        <li>
          <Link to="/">
            <img src="https://i.imgur.com/example-thumb1.jpg" alt="Tự Cứu Gia Đà Bạc" />
            <div>
              <h4>Tự Cứu Gia Đà Bạc</h4>
              <p>Sắc tố da và cách làm trắng hiệu quả.</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="https://i.imgur.com/example-thumb2.jpg" alt="Tiểu Học Tối Thiểu" />
            <div>
              <h4>Tiểu Học Tối Thiểu</h4>
              <p>Hướng dẫn trang điểm nhẹ nhàng.</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="https://i.imgur.com/example-thumb3.jpg" alt="Mỹ Phẩm Thiên Nhiên" />
            <div>
              <h4>Mỹ Phẩm Thiên Nhiên</h4>
              <p>Sản phẩm từ thiên nhiên được yêu thích.</p>
            </div>
          </Link>
        </li>
      </ul>
      <div className="sidebar-ad">
        <img src="https://i.imgur.com/example-ad.jpg" alt="Quảng cáo mỹ phẩm" />
      </div>
    </aside>
  );
};

export default Sidebar;
