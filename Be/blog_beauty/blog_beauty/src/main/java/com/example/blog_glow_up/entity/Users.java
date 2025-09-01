package com.example.blog_glow_up.entity;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// import org.springframework.validation.annotation.Validated;
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Roles role;

    @Column(name = "status", columnDefinition = "BIT")
    private Integer status = 1;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
