import { Controller, Get } from "@nestjs/common";
import { IconService } from "./icon.service";

@Controller("icon")
export class IconController {
  constructor(private readonly iconService: IconService) {}

  @Get("/")
  async getIconList() {
    return this.iconService.list();
  }
}
