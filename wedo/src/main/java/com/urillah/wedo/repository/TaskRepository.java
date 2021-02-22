package com.urillah.wedo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.urillah.wedo.model.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Integer>{

	public Task findByTaskid(Integer taskid);
}