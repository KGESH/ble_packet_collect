import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RouterService } from './router.service';
import { CreateRouterDto } from './dto/create-router.dto';
import { Router } from '@prisma/client';

@Controller('router')
export class RouterController {
  constructor(private readonly routerService: RouterService) {}

  @Post()
  create(@Body() createRouterDto: CreateRouterDto): Promise<Router> {
    return this.routerService.create(createRouterDto);
  }

  @Get()
  findAll(): Promise<Router[]> {
    return this.routerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routerService.findOne(id);
  }
}
