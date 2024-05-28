import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class IconService {
  constructor(private prisma: PrismaService) {}

  async list() {
    return this.prisma.icon.findMany({ orderBy: { id: "asc" } });
  }
}
