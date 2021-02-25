package com.urillah.wedo.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urillah.wedo.model.Task;
import com.urillah.wedo.repository.TaskRepository;
import com.urillah.wedo.service.TaskService;

@RestController
@RequestMapping("/tasks")
class TaskController {

	@Autowired
	private TaskRepository taskRepositoryObj;
	
	@Autowired
	private TaskService taskServiceObj;

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping(value = "/list")
	public List<Task> getAll() {
		List<Task> tasks = new ArrayList<>();
		taskRepositoryObj.findAll().forEach(tasks::add);
		return tasks;
	}

//	@GetMapping(value = "/{}")
//	public Task getById(@PathVariable("taskid") Long taskId) {
//		return taskRepositoryObj.findById(taskId);
//	}

	@PutMapping(value = "/update-details")
	public Task updateDetails(@RequestBody Task taskDto) {
		Task taskObj = new Task();
		try {
			taskObj = modelMapper.map(taskDto, Task.class);
			taskObj.setName(taskDto.getName()); 
			taskObj.setDescription(taskDto.getDescription()); 
			taskRepositoryObj.save(taskObj);
			return taskObj;
		} catch (Exception e) {
			System.out.println("Update failed {}" + taskDto);
			return taskObj;
		}
	}
	
	@PostMapping(value = "/create")
	public Task create(@RequestBody Task taskDto) {
		Task taskObj = new Task();
		try {
			taskObj = modelMapper.map(taskDto, Task.class);
			taskObj.setStatus("PENDING"); //All start from pendinng
			taskRepositoryObj.save(taskObj);
			return taskObj;
		} catch (Exception e) {
			System.out.println("Creation failed {}" + taskDto);
			return taskObj;
		}

	}

	@PutMapping(value = "/update-status")
	public ResponseEntity<Task> udpateTaskStatus(@RequestBody Task taskDto) throws Exception {
		Task taskObj = new Task();

		if (taskRepositoryObj.findById(taskDto.getTaskid()).isPresent()) {
			
			//STATUS is incremental, can only go upwards.
			switch(taskDto.getStatus()) {
			case "PENDING":
				taskObj.setStatus("DONE");
				break;
			case "DONE":
				if(!taskServiceObj.hasChild(taskDto.getTaskid())) {
					taskObj.setStatus("COMPLETE");
				}
				
				List<Task> childrenTasks =  taskServiceObj.getChilds(taskDto.getTaskid());
				if(taskServiceObj.validateFamilyUpdate(childrenTasks)) {
					taskObj.setStatus("COMPLETE");
				}
				System.out.println("STATUS SHALL REMAIN DONE UNTIL CHILDREN TASKS ARE COMPLETED");
				break;
			default:
				throw new Exception("INVALID STATUS STATE");
			}
			taskRepositoryObj.save(taskObj);
			return new ResponseEntity<>(taskObj, HttpStatus.OK);
		}

		return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
	}

	@PutMapping(value = "/update-bulk")
	public ResponseEntity<Task> bulkUpdate(List<Task> taskList) {
		Task taskObj;

		for (Task task : taskList) {
			if (taskRepositoryObj.findById(task.getTaskid()).isPresent()) {

				taskObj = taskRepositoryObj.findById(task.getTaskid()).get();
				taskObj.setStatus(task.getStatus());
				taskRepositoryObj.save(taskObj);
				return new ResponseEntity<>(taskObj, HttpStatus.OK);
			}
		}

		return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
	}

	@DeleteMapping(value = "/clear")
	public ResponseEntity<HttpStatus> clearTasks() {
		try {
			List<Task> tasks = new ArrayList<>();
			taskRepositoryObj.findAll().forEach(tasks::add);
			taskRepositoryObj.deleteAll(tasks);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

//	@DeleteMapping(value = "/{taskid}")
//	public ResponseEntity<HttpStatus> delete(@PathVariable("taskid") Long taskId) {
//		try {
//			taskRepositoryObj.delete(taskId);
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
//		}
//	}

	
//	@GetMapping(value = "/{taskname}")
//	public Task findByTaskName(@PathVariable("name") String taskName) {
//		return taskRepositoryObj.findByName(taskName);
//	}

}
