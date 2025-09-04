import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/HomePage/HomePage';
import Chamsocda from '../pages/ChamSocDa/Chamsocda';
import Dangdep from '../pages/DangDep/Dangdep';
import Mypham from '../pages/MyPham/Mypham';
import Hoidap from '../pages/QA/Hoidap';
import Thammy from '../pages/ThamMy/Thammy';
import BiKipLamDep from '../pages/BiKipLamDep/Bikiplamdep';
import NotFound from '../pages/NotFound/NotFound';
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bi-kip-lam-dep" element={<BiKipLamDep />} />
        <Route path="/cham-soc-da" element={<Chamsocda />} />
        <Route path="/dang-dep" element={<Dangdep />} />
        <Route path="/my-pham" element={<Mypham />} />
        <Route path="/hoi-dap" element={<Hoidap />} />
        <Route path="/tham-my" element={<Thammy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
