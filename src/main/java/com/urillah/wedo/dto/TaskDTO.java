package com.urillah.wedo.dto;

import lombok.Data;

@Data public class TaskDTO {

    private Integer taskid;
    private String teamid;
    private String name;
    private String description;
    private Integer parenttask;
    private String priority;
    private String attachment;
    private Integer status;

}
