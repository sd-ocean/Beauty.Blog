package com.example.blog_glow_up.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.blog_glow_up.entity.PostImages;

@Repository
public interface PostImagesRepository extends JpaRepository<Integer, PostImages> {
}
