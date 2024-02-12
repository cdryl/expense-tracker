import { User } from "firebase/auth";

export interface ExpenseProps {
  amount: number;
  category: string;
  user: string;
  id: string;
}

export interface HomeProps {
  user: User;
}
