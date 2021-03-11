import { IAddress } from "../address/address.interface";
import { IDocument } from "../doc.interface";
import { IContact } from "../contact/contact.interface";


export interface ICustomer extends IDocument {
  name: string;
  firstName: string;
  lastName: string;
  photo: string;
  address: IAddress;
  contact: IContact;
  labels: CustomerLabel[];
  notes?: string;
}

export enum CustomerLabel {
  NEW = "New",
  LEAD = "Lead",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed"
}

export interface IColumnSub {
  columnName: string,
  show: boolean;
}