export interface ISales {
  product: string;
  price: number;
  date: string | Date;
  status: SalesStatus
}

export enum SalesStatus {
  PENDING_PAYMENT = "Pending Payment",
  READY_TO_SHIP = "Ready to Ship",
  MISSING_PAYMENT = "Missing Payment",
}