package com.project.crud.dao;

import com.project.crud.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeDao extends CrudRepository<Employee, Integer> {
}
