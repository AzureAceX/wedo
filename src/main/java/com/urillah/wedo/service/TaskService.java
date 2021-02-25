package com.urillah.wedo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urillah.wedo.dto.TaskDTO;
import com.urillah.wedo.model.Task;
import com.urillah.wedo.repository.TaskRepository;

import util.Status;

@Service
public class TaskService {

	@Autowired
	private TaskRepository taskRepoObj;

	// check if a child exist for given task
	public Boolean hasChild(Integer taskId) {
		Boolean hasChild = false;
		if (!taskRepoObj.findByParenttask(taskId).isEmpty()) {
			hasChild = true;
		}
		return hasChild;
	}

	// get list of children of given task
	public List<Task> getChilds(Integer taskId) {
		List<Task> childrenTasks = new ArrayList<>();

		if (!taskRepoObj.findByParenttask(taskId).isEmpty()) {
			childrenTasks = taskRepoObj.findByParenttask(taskId);
		}

		return childrenTasks;
	}

	// get list of children of given task
	public List<Task> updateFamily(List<Task> childrenTasks) {

		// Set all children to complete (even those previously on complete state)
		for (Task update : childrenTasks) {
			update.setStatus(Status.COMPLETE.ordinal());
		}
		taskRepoObj.saveAll(childrenTasks);

		return childrenTasks;
	}
	
	// updateTask Family - parent and all its child
	public Boolean validateFamilyUpdate(List<Task> childrenTasks) {
		List<Task> updatingChild = new ArrayList<Task>();

		// Get all updatable children - done or complete
		for (Task childToUpdate : childrenTasks) {
			if (Status.DONE.ordinal() ==  childToUpdate.getStatus() || Status.COMPLETE.ordinal() == childToUpdate.getStatus()) {
				updatingChild.add(childToUpdate);
			}
		}
		// If all children can be updated
		if (childrenTasks.size() == updatingChild.size()) {
			updateFamily(childrenTasks);
			return true;
		}

		return false;
	}



}
