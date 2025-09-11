import React from "react";
import HeroSection from "../../components/HeroSection";
import NewsGrid from "../../components/NewsGrid";
import Sidebar from "../../components/SideBar";

const Home = () => {
  return (
    <section className="container">
      <HeroSection />
      <section className="content-section">
        <div className="main-content">
          <h2 className="section-title">Tin tức mới nhất</h2>
          <NewsGrid />
        </div>
        <Sidebar />
      </section>
    </section>
  );
};

export default Home;
