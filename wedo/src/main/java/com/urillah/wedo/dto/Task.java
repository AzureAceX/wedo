package com.urillah.wedo.dto;

import lombok.Data;

@Data public class Task {

    private Integer taskid;
    private String teamid;
    private String name;
    private String description;
    private String parenttask;
    private Integer priority;
    private String attachment;
    private Integer status;
    
}
