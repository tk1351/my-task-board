import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller("task")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get("/")
  async getTasksList() {
    return this.taskService.list();
  }

  @Get(":id")
  async getTask(@Param("id", ParseIntPipe) id: number) {
    return this.taskService.task(id);
  }
}
