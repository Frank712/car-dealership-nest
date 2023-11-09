import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

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
}
