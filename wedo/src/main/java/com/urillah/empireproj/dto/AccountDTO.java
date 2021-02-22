package com.urillah.empireproj.dto;

import lombok.Data;

@Data public class AccountDTO {

	    private long accountId;
	    private String email;
	    private String firstName;
	    private String lastName;
	    private Long phoneNo;
	    private String username;
	    private String password;
	    private Boolean enabled;
}
