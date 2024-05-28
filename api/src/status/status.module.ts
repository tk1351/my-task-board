import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { StatusController } from "./status.controller";
import { StatusService } from "./status.service";

@Module({
  imports: [],
  controllers: [StatusController],
  providers: [StatusService, PrismaService],
})
export class StatusModule {}
