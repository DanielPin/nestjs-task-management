import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TasksService {
  private taks: Task[] = [];

  getAllTasks(): Task[] {
    return this.taks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.taks.push(task);

    return task;
  }
}
