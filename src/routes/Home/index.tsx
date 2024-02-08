import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useGetExpensesFromDb, useRemoveExpenseFromDb, useSetExpensesToDb } from "./hooks";
import { useForm } from "react-hook-form";
import { ExpenseProps } from "./types";

const Home = () => {
  const { currentUser, signOut } = useContext(AuthContext);
  const { expenses, isLoading } = useGetExpensesFromDb();
  const mutation = useSetExpensesToDb();
  const { register, handleSubmit, reset } = useForm<ExpenseProps>();

  console.log(expenses);

  const onSubmit = (data: ExpenseProps) => {
    mutation.mutate({
      amount: data.amount,
      category: data.category,
      user: currentUser?.email || "",
    });

    reset();
  };

  return (
    <div>
      <h3>Welcome! {currentUser?.email}</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit )}>
          <input type="number" id="amount" placeholder="Amount" {...register("amount")} />
          <input
            type="text"
            id="category"
            placeholder="Category"
            {...register("category")}
          />
          <input type="submit" placeholder="Submit" />
        </form>
      </div>
      <button>remove</button>
      {/* {expenses?.map((expense) => <div key={expense.key}>{expense.amount}</div>)} */}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
export default Home;
