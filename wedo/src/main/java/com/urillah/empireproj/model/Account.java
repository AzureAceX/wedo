package com.urillah.empireproj.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


import lombok.Data;

@Entity
@Table(name = "account")
@Data public class Account {

    @Id
    @Column(name = "account_id", unique = true, nullable = false)
    private long accountId;
    
    private String email;

    private String firstName;
    
    private String lastName;
    
    @Column(name = "phone_no")
    private Long phoneNo;
    
    private String username;

    private String password;
    
    private Boolean enabled;

//    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JoinTable(name = "account_roles", 
//     joinColumns = @JoinColumn(name = "role_id"), 
//     inverseJoinColumns = @JoinColumn(name = "account_id")
//    )
//    private Set<Roles> roles = new HashSet<>();
    
    
    
    

}