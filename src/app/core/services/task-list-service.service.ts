import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskListServiceService {

   tasks: Task[]= [
    {
    id:1,
    name:'Dinner with Susan',
    completed: true
   },
   {
    id:2,
    name:'Buy some food',
    completed: false
   }
  ];
  constructor() { 
  }

  getTasks(): Task[]{
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  completeTask(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if(task){
      task.completed = !task.completed;
    }
  }
}
