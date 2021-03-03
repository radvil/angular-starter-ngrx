import { Employer } from "./employer";

export interface ICompany {
  id: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  createdAt?: string | Date;
}

export class Company {
  constructor(public company: ICompany) { }

  get value(): ICompany {
    return this.company;
  }
}

export interface DtoCreateCompany extends ICompany {
  address: string;
  empInfo: Employer[];
}
