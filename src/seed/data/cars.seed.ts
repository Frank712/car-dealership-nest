import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang Shelby',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'Model Y',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
];
