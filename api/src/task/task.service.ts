import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async list() {
    return this.prisma.task.findMany({
      orderBy: { id: "asc" },
      include: { status: true, icon: true },
    });
  }

  async task(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
      include: { status: true, icon: true },
    });
  }

  async createTask(createTaskDto: CreateTaskDto) {
    const { name, description, iconId, statusId } = createTaskDto;

    return this.prisma.task.create({
      data: {
        name,
        description,
        statusId,
        iconId,
      },
      include: { status: true, icon: true },
    });
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    const { name, description, iconId, statusId } = updateTaskDto;

    return this.prisma.task.update({
      where: { id },
      data: {
        name,
        description,
        iconId,
        statusId,
      },
      include: { status: true, icon: true },
    });
  }

  async deleteTask(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
