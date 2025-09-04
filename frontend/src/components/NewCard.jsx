import React from 'react';
import { Link } from 'react-router-dom';
const NewsCard = ({ image, title, description, date }) => {
  return (
    <article className="news-card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3><Link to="/news">{title}</Link></h3>
        <p>{description}</p>
        <span className="news-date">{date}</span>
      </div>
    </article>
  );
};

export default NewsCard;
