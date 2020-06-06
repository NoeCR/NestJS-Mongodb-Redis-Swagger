import { Controller, Get, Post, Delete, Put, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { MainService } from './main.service';

import { CreateMainDTO } from './dto/main.dto';
import { ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { IMain } from './interfaces/main.interface';

@Controller('main')
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Post('/create')
  @ApiCreatedResponse({ description: 'The record has been created successfully', type: CreateMainDTO})
  @ApiResponse({ status: 422, description: 'The record has not been created'})
  async create(@Res() res, @Body() createMainDTO: CreateMainDTO): Promise<IMain> {
    const main = await this.mainService.create(createMainDTO);
    
    if (!main)
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Main has not been created' });

    return res.status(HttpStatus.OK).send({ message: 'Main has been created successfully', data: main });
  }

  @Get('/')
  async getAll(@Res() res) {
    const mains = await this.mainService.getAll();

    if (!mains.length)
      return res.status(HttpStatus.OK).send({ total: 0, data: [] });

    return res.status(HttpStatus.OK).send({ total: mains.length, data: mains });
  }

  @Get('/:id')
  async get(@Res() res, @Param('id') id: string) {
    const main = await this.mainService.getOneById(id);

    if (!main)
      return res.status(HttpStatus.NOT_FOUND).send({ message: 'Main not found' });

    return res.status(HttpStatus.OK).send({ message: 'Main has been obtained', data: main });
  }

  @Put('/:id')
  async update(@Res() res, @Param('id') id: string, @Body() createMainDTO: CreateMainDTO) {
    const main = await this.mainService.update(id, createMainDTO);
    
    if (!main)
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Main has not been updated' });

    return res.status(HttpStatus.OK).send({ message: 'Main has been updated successfully', data: main });
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const main = await this.mainService.delete(id);

    if (!main)
      return res.status(HttpStatus.NOT_FOUND).send({ message: 'Main not found' });

    return res.status(HttpStatus.OK).send({ message: 'Main has been delete successfully', data: main });
  }
}
