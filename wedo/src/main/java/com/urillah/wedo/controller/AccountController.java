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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urillah.empireproj.dto.AccountDTO;
import com.urillah.empireproj.model.Account;
import com.urillah.empireproj.repository.AccountRepository;

@RestController
@RequestMapping("/accounts")
class AccountController {

	@Autowired
	private AccountRepository accountRepositoryObj;

	@Autowired
	private ModelMapper modelMapper;

//    @Autowired
//    AccountDetailsRepository accountDetailsRepositoryObj;

	@GetMapping(value = "/list")
	public List<Account> getAll() {
		List<Account> accounts = new ArrayList<>();
		accountRepositoryObj.findAll().forEach(accounts::add);
		return accounts;
	}

//	@GetMapping(value = "/{accountId}")
//	public Account getById(@PathVariable("accountId") Long accountId) {
//		return accountRepositoryObj.findOne(accountId);
//	}

	@PostMapping(value = "/create")
	public ResponseEntity<Account> create(@RequestBody AccountDTO accountDto) {
		try {
			Account accountObj = modelMapper.map(accountDto, Account.class);
			accountRepositoryObj.save(accountObj);

//             accountProfileRepositoryObj.set

			return new ResponseEntity<>(accountObj, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
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

	@GetMapping(value = "/{username}")
	public Account findByUsername(@PathVariable("username") String username) {
		return accountRepositoryObj.findByUsername(username);
	}
}