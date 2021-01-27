import { EmployHistory } from './employHistory.model';
import { Address } from './address.model';

export class User {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    employHistory: EmployHistory;
}