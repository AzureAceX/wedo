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

@RestController
@RequestMapping("/tasks")
class TaskController {

	@Autowired
	private TaskRepository taskRepositoryObj;

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping(value = "/list")
	public List<Task> getAll() {
		List<Task> tasks = new ArrayList<>();
		taskRepositoryObj.findAll().forEach(tasks::add);
		System.out.println("we here");
		return tasks;
	}

//	@GetMapping(value = "/{}")
//	public Task getById(@PathVariable("taskid") Long taskId) {
//		return taskRepositoryObj.findById(taskId);
//	}

	// @PostMapping(value = "/create")
	// public ResponseEntity<Task> create(@RequestBody Task taskDto) {
	// 	System.out.println("and now here");
	// 	System.out.println("and now here" + taskDto.getTaskid());
	// 	try {
	// 		Task taskObj = modelMapper.map(taskDto, Task.class);
	// 		taskRepositoryObj.save(taskObj);
	// 		return new ResponseEntity<>(taskObj, HttpStatus.CREATED);
	// 	} catch (Exception e) {
	// 		return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
	// 	}
	// }

	@PostMapping(value = "/create")
	public Task create(@RequestBody Task taskDto) {
		Task taskObj = new Task();
		System.out.println("and now here");
		System.out.println("and now here" + taskDto.getTaskid());

		// taskRepositoryObj.save(taskDto);
		// return taskDto;

		try {
			taskObj = modelMapper.map(taskDto, Task.class);
			taskRepositoryObj.save(taskObj);

			//Model mapping failed
			if(taskObj.getName() == null && taskDto.getName() != null){
				taskObj.setName(taskDto.getName());
				taskRepositoryObj.save(taskObj);
			}

			return taskObj;
		} catch (Exception e) {
			System.out.println("Creation failed {}" + taskDto);
			return taskObj;
		}
	}

    @PutMapping(value = "/update-status")
    public ResponseEntity<Task> udpateTaskStatus(@RequestBody Task taskDto) {
    	Task taskObj = new Task();

		if(taskRepositoryObj.findById(taskDto.getTaskid()).isPresent()) {
			taskObj.setStatus(taskDto.getStatus());
			taskRepositoryObj.save(taskObj);
			return new ResponseEntity<>(taskObj, HttpStatus.OK);
		}

		return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
    }

		@PutMapping(value = "/update-bulk")
		public ResponseEntity<Task> bulkUpdate(List<Task> taskList) {
			Task taskObj;

			for(Task task : taskList){
				if(taskRepositoryObj.findById(task.getTaskid()).isPresent()) {

					taskObj = taskRepositoryObj.findById(task.getTaskid()).get();
					taskObj.setStatus(task.getStatus());
					taskRepositoryObj.save(taskObj);
					return new ResponseEntity<>(taskObj, HttpStatus.OK);
				}
			}

		return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);

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
