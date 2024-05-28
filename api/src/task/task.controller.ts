import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

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

  @Post("/")
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch(":id")
  async updateTask(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete(":id")
  async deleteTask(@Param("id", ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
  }
}
