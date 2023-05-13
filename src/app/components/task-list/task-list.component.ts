import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/core/models/task';
import { TaskListServiceService } from 'src/app/core/services/task-list-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks: Task[];
  newTaskForm!: FormGroup;

  constructor
  (
    private taskListService: TaskListServiceService,
    private formBuilder: FormBuilder
  ){this.tasks = [];}

  ngOnInit(): void {
    this.newTaskForm = this.formBuilder.group({
      taskTitle: ["", [Validators.required]]
    })
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.taskListService.getTasks();
  }

  addTask(): void{

    const task: Task = {
      id: this.tasks.length + 1,
      name: this.newTaskForm.value.taskTitle,
      completed: false
    };

    this.taskListService.addTask(task);
  }

  deleteTask(id: number): void {
    this.taskListService.deleteTask(id);
    this.tasks = this.taskListService.getTasks();
  }

  completedTask(id: number): void {
    this.taskListService.completeTask(id);
  }
}
