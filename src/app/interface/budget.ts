import { EmailValidator } from "@angular/forms";

export interface Budget {
  id: number;
  title: string;
  description: string;
  price: number;
}
export interface savedBudgets{
  name: string;
  email: string;
  phone: number;
  service: string[];
  totPrice: number
}
