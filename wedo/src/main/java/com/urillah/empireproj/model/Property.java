package com.urillah.empireproj.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "property")
@Data public class Property {

    @Id
    @Column(name = "property_id", unique = true, nullable = false)
    private long propertyId;
    
    @Column(name = "property_name")
    private String propertyName;
    
    @Column(name = "property_description")
    private String propertyDescription;
    
    @Column(name = "property_type")
    private String propertyType;

    @Column(name = "property_status")
    private String propertyStatus;
    
    @Column(name = "property_details")
    private String propertyDetails;
    
}

