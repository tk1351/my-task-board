import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  statusId: string;

  @IsString()
  @IsOptional()
  iconId: string;
}
