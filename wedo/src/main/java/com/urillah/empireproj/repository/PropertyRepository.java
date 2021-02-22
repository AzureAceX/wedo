package com.urillah.empireproj.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.urillah.empireproj.model.Property;

@Repository
public interface PropertyRepository extends CrudRepository<Property, Long> {

}
