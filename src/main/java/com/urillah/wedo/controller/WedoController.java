package com.urillah.wedo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WedoController {

	@GetMapping("/")
	public String test() {
		return "<h1> Hello From WeDoController </h1>";
	}
	
	
}
