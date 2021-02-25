package com.urillah.wedo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urillah.wedo.dto.TaskDTO;
import com.urillah.wedo.model.Task;
import com.urillah.wedo.repository.TaskRepository;

@Service
public class TaskService {

	@Autowired
	private TaskRepository taskRepoObj;

	//check if a child exist for given task
	// public Boolean hasChild(Integer taskId) {
	// 	Boolean hasChild = false;
	// 	if (!taskRepoObj.findByParenttask(taskId).isEmpty()) {
	// 		hasChild = true;
	// 	}
	// 	return hasChild;
	// }

	//get list of children of given task
	// public List<Task> getChilds(Integer taskId) {
	// 	List<Task> childrenTasks = new ArrayList<>();
	//
	// 	if (!taskRepoObj.findByParenttask(taskId).isEmpty()) {
	// 		childrenTasks = taskRepoObj.findByParenttask(taskId);
	// 	}
	//
	// 	return childrenTasks;
	// }

	//updateTask Family - parent and all its child
	// public List<Task> updateFamily(TaskDTO taskDTO) {
	// 	List<Task> taskFamily = new ArrayList<>();
	//
	// 	//provided its not somehow missing from DB, add the given task to family tree first
	// 	if(taskRepoObj.findById(taskDTO.getTaskid()).isPresent())
	// 		taskFamily.add(taskRepoObj.findByTaskid(taskDTO.getTaskid()));
	//
	// 	//if it has a parent add said parent.
	// 	if(taskDTO.getParenttask() != null)
	// 		taskFamily.add(taskRepoObj.findByTaskid(taskDTO.getTaskid()));
	//
	//
	// 	return taskFamily;
	// }



}
