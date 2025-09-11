import React from 'react';
import NewsCard from './NewCard';
import SonLi from '../assets/images/sonli.jpg' // import ảnh đặt tên ảnh là SonLi
import Anhtest from '../assets/images/anh1.jpg'
const newsData = [
  {
    image: SonLi, // gán tên ảnh đó vào ảnh
    title: '10 BƯỚC CHĂM SÓC DA MÙA ĐÔNG',
    description: 'Giúp ẩm cho da luôn mềm mịn, căng bóng trong thời tiết hanh khô.',
    date: '15/11/2023',
  },
  {
    image: Anhtest, 
    title: 'REVIEW SON MÔI LÌ HOT TREND',
    description: 'Sắc đỏ, cam, hồng đất lên ngôi. Khám phá ngay bảng màu hot nhất.',
    date: '10/11/2023',
  },
  {
    image: 'https://i.imgur.com/example-news3.jpg',
    title: 'THỰC ĐƠN GIẢM CÂN KHOA HỌC',
    description: 'Ăn sạch, uống lành, dáng gọn. Công thức dễ làm tại nhà.',
    date: '07/11/2023',
  },
  {
    image: 'https://i.imgur.com/example-news4.jpg',
    title: 'CÔNG NGHỆ TRỊ MỤN HIỆN ĐẠI',
    description: 'Da đẹp mịn màng không tì vết với các phương pháp tiên tiến.',
    date: '02/11/2023',
  },
];

const NewsGrid = () => {
  return (
    <div className="news-grid">
      {newsData.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
};

export default NewsGrid;
