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

//    @Autowired
//    AccountDetailsRepository accountDetailsRepositoryObj;

	@GetMapping(value = "/list")
	public List<Task> getAll() {
		List<Task> tasks = new ArrayList<>();
		taskRepositoryObj.findAll().forEach(tasks::add);
		System.out.println("we here");
		return tasks;
	}

//	@GetMapping(value = "/{accountId}")
//	public Account getById(@PathVariable("accountId") Long accountId) {
//		return accountRepositoryObj.findOne(accountId);
//	}

	@PostMapping(value = "/create")
	public ResponseEntity<Task> create(@RequestBody Task taskDto) {
		System.out.println("and now here");
		try {
			Task taskObj = modelMapper.map(taskDto, Task.class);
			taskRepositoryObj.save(taskObj);
			return new ResponseEntity<>(taskObj, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
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
    
//	@DeleteMapping(value = "/{accountId}")
//	public ResponseEntity<HttpStatus> delete(@PathVariable("accountId") Long accountId) {
//		try {
//			accountRepositoryObj.delete(accountId);
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
//		}
//	}

	/*
	 * Account Login
	 */

//	@GetMapping(value = "/{username}")
//	public Task findByUsername(@PathVariable("username") String username) {
//		return accountRepositoryObj.findByUsername(username);
//	}
}