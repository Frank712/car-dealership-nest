import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { brand: 'Toyota', model: 'Corolla', id: uuid() },
    { brand: 'Honda', model: 'Civic', id: uuid() },
    { brand: 'Mustang', model: 'Cherokee', id: uuid() },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((c) => c.id === id);
    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const car: Car = {
      ...createCarDto,
      id: uuid(),
    };
    this.cars.push(car);
    return car;
  }

  update(updateCarDto: UpdateCarDto, id: string) {
    const carDb = this.findOneById(id);

    let carUpdated;
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carUpdated = {
          ...carDb,
          ...updateCarDto,
          id,
        };
        return carUpdated;
      }
      return car;
    });
    return carUpdated;
  }
}
