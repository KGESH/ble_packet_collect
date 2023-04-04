import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RouterService } from './router.service';
import { CreateRouterDto } from './dto/create-router.dto';

@Controller('router')
export class RouterController {
  constructor(private readonly routerService: RouterService) {}

  @Post()
  create(@Body() createRouterDto: CreateRouterDto) {
    return this.routerService.create(createRouterDto);
  }

  @Get()
  findAll() {
    return this.routerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routerService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routerService.remove(id);
  }
}
