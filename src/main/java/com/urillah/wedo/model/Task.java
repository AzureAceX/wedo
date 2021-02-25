package com.urillah.wedo.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "tasks")
@Data public class Task {

    @Id
    @Column(name = "taskid", unique = true, nullable = false)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer taskid;

    private String teamid;

    private String name;

    private String description;

    private Integer parenttask;

    private String priority;

    private String attachment;

    private Integer status;


}
