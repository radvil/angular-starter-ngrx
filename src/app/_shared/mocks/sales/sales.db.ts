import { ISales, SalesStatus } from './sales.interface';

export const sales: ISales[] = [
  {
    product: 'Apple iPhone X',
    price: 1099.99,
    date: '2021-03-16T05:04:50.396Z',
    status: SalesStatus.PENDING_PAYMENT
  },
  {
    product: 'Apple iPhone 7 128GB',
    price: 699.99,
    date: '2021-03-16T05:01:50.396Z',
    status: SalesStatus.READY_TO_SHIP
  },
  {
    product: 'Apple Mac Pro',
    price: 999.99,
    date: '2021-03-16T04:04:50.396Z',
    status: SalesStatus.READY_TO_SHIP
  },
  {
    product: 'Samsung DEX',
    price: 54.99,
    date: '2021-03-16T02:04:50.396Z',
    status: SalesStatus.READY_TO_SHIP
  },
  {
    product: 'Apple iPhone X 256GB',
    price: 1199.99,
    date: '2021-03-16T01:04:50.396Z',
    status: SalesStatus.PENDING_PAYMENT
  },
  {
    product: 'Apple MacBook 2019',
    price: 2499.99,
    date: '2021-03-16T02:05:50.396Z',
    status: SalesStatus.MISSING_PAYMENT
  },
  {
    product: 'USB-C Cable',
    price: 8.99,
    date: '2021-03-16T02:03:50.396Z',
    status: SalesStatus.READY_TO_SHIP
  },
  {
    product: 'Apple MacBook Pro',
    price: 1299.99,
    date: '2021-03-16T03:04:50.396Z',
    status: SalesStatus.READY_TO_SHIP
  },
  {
    product: 'Samsung Galaxy S9',
    price: 799.99,
    date: '2021-03-16T01:04:50.396Z',
    status: SalesStatus.READY_TO_SHIP
  },
  {
    product: 'Lightning to USB-C Adapter',
    price: 16.99,
    date: '2021-03-11T05:04:50.396Z',
    status: SalesStatus.PENDING_PAYMENT
  },
  {
    product: 'Samsung Galaxy S8 256GB',
    price: 599.99,
    date: '2021-03-12T05:02:50.396Z',
    status: SalesStatus.READY_TO_SHIP
  },
  {
    product: 'Apple iPhone 8',
    price: 899.99,
    date: '2021-03-14T05:03:50.396Z',
    status: SalesStatus.READY_TO_SHIP
  },
  {
    product: 'Asus ROG',
    price: 1866.99,
    date: '2021-03-11T05:01:50.396Z',
    status: SalesStatus.PENDING_PAYMENT
  },
];
