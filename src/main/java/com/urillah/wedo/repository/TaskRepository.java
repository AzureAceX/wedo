package com.urillah.wedo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.urillah.wedo.model.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Integer>{

	public Task findByTaskid(Integer taskId);

//	public Task findByParenttask(Integer parentTask);


//	@Query(value = "SELECT * FROM tasks where parenttask = ?1")
//	List<Task> findByParentTask(Integer parentTask);
//

	// List<Task> findByParenttask(Integer parentTask);


}
