import { EmployHistory } from './employHistory.model';
import { Address } from './address.model';
import { getLocaleDateFormat } from '@angular/common';

export class User {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    email: string;
    address: Address;
    employHistory: EmployHistory;
}

