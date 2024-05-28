import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  async list() {
    return this.prisma.status.findMany({ orderBy: { id: "asc" } });
  }
}
