import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

import { companyList } from "../company.db";
import { ICompany, DtoCreateCompany, Company } from "../interfaces/company";

@Injectable()
export class CompanyService {
  constructor() { }

  private _companyList = new BehaviorSubject<ICompany[]>(companyList);
  private _currentIdPostfix = 12;

  getCompanies(): Observable<ICompany[]> {
    return this._companyList.asObservable();
  }

  addCompany(dto: DtoCreateCompany): Observable<any> {
    const newCompany = new Company({
      id: `${++this._currentIdPostfix}`,
      companyName: dto.companyName,
      email: dto.email,
      phoneNumber: dto.phoneNumber,
      createdAt: new Date().toISOString()
    });
    const updated = this._companyList.value.concat(newCompany.value);
    this._companyList.next(updated);
    return of({
      status: 200,
      message: "Company created successfully!"
    });
  }

  deleteCompany(companyId: string): Observable<any> {
    const updated = this._companyList.value.filter(company => company.id !== companyId);
    this._companyList.next(updated);
    return of({
      status: 200,
      message: "Company deleted successfully!"
    })
  }

  getDesignations(): Observable<Array<{ key: number, label: string }>> {
    return of([
      { key: 1, label: 'Developer' },
      { key: 2, label: 'Manager' },
      { key: 3, label: 'System Admin' },
      { key: 4, label: 'Team Lead' },
      { key: 5, label: 'PM' }
    ])
  }

  getSkills(): Observable<string[]> {
    return of([
      'Java', 'Angular', 'CSS', 'HTML', 'JavaScript', 'UI', 'SQL', 'React', 'PHP',
      'GIT', 'AWS', 'Python', 'Django', 'C', 'C++', 'C#', 'Unity', 'R', 'AI',
      'NLP', 'Photoshop', 'Nodejs'
    ])
  }
}