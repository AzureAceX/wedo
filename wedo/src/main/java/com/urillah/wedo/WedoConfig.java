package com.urillah.wedo;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WedoConfig {

	//Used for the entity to DTO mappings
	@Bean
	public ModelMapper modelMapper() {
	    return new ModelMapper();
	}
}
