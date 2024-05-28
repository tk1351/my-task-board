import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { IconModule } from "./icon/icon.module";
import { StatusModule } from "./status/status.module";
import { TaskModule } from "./task/task.module";

@Module({
  imports: [ConfigModule.forRoot(), StatusModule, IconModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
