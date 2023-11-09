import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { brand: 'Toyota', model: 'Corolla', id: 1 },
    { brand: 'Honda', model: 'Civic', id: 2 },
    { brand: 'Mustang', model: 'Cherokee', id: 3 },
  ];

  findAll() {
    return this.cars;
  }

  findCarById(id: number) {
    const car = this.cars.find((c) => c.id === id);
    return car;
  }
}
