import { useForm } from "react-hook-form";
import { ExpenseProps, HomeProps } from "./types";
import { useGetItemsFromDb, useSetItemToDb } from "../../firebase/hooks";
import { FC } from "react";
import { SignOutUser } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Home: FC<HomeProps> = ({ user }) => {
  const { items, isLoading } = useGetItemsFromDb<ExpenseProps>("expenses");
  const addExpense = useSetItemToDb("expenses");
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<ExpenseProps>();

  const onSubmit = (data: ExpenseProps) => {
    addExpense.mutate({
      amount: data.amount,
      category: data.category,
      user: user.email || "",
    });

    reset();
  };

  const signOut = () => {
    SignOutUser();
    navigate("/");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            {...register("amount")}
          />
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
      {items?.map((item) => <div key={item.id}>{item.amount}</div>)}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
export default Home;
