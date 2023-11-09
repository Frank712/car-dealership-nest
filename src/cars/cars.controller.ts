import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    console.log({ id });
    const car = this.carsService.findCarById(id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  @Post()
  createCar(@Body() body) {
    return body;
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() body) {
    return { body, id };
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return {
      method: 'DELETE',
      id: id,
    };
  }
}
