import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

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
    });
  }
}
