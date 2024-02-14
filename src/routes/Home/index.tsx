import { ExpenseProps, HomeProps } from "./types";
import { useGetItemsFromDb, useSetItemToDb } from "../../firebase/hooks";
import { FC, useState } from "react";
import { SignOutUser } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Inner from "../../components/Inner";
import Button from "../../components/Button";
import { ButtonSize } from "../../components/Button/types";
import ModalBase from "../../components/ModalBase";
import Form from "../../components/Form";
import Input from "../../components/Fields/Input";
import Textarea from "../../components/Fields/Textarea";
import Select from "../../components/Fields/Select";

const Home: FC<HomeProps> = ({ user }) => {
  const { items, isLoading } = useGetItemsFromDb<ExpenseProps>("expenses");
  const addExpense = useSetItemToDb("expenses");
  const navigate = useNavigate();
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  const onSubmit = (data: ExpenseProps) => {
    addExpense.mutate({
      amount: data.amount,
      category: data.category,
      note: data.note,
      user: user.email || "",
    });
  };

  const signOut = () => {
    SignOutUser();
    navigate("/");
  };

  const options = [
    {
      label: "Test",
      value: "test",
    },
    {
      label: "Test2",
      value: "test2",
    },
    {
      label: "Test3",
      value: "test3",
    },
  ];

  return (
    <>
      <Header />
      <Inner className="pt-[5rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-4xl font-bold">Overview</h2>
          <Button
            size={ButtonSize.small}
            onClick={() => setIsExpenseModalOpen(true)}
          >
            Add expense
          </Button>
        </div>
        <button>remove</button>
        <button onClick={signOut}>Sign Out</button>
        <ModalBase
          isOpen={isExpenseModalOpen}
          className="p-6 max-w-[40rem] w-full"
          onClose={() => setIsExpenseModalOpen(false)}
        >
          <h3 className="text-white text-2xl font-bold mb-2">Add expense</h3>
          <p className="text-white mb-4 text-sm">
            Enter the details of your expense, including the amount, category,
            and any additional notes, to accurately track your spendings.
          </p>
          <Form onSubmit={onSubmit} className="flex flex-col gap-4">
            {({ reset }) => (
              <>
                <Input name="amount" type="number" label="Amount" />
                <Select name="category" label="Category" options={options} />
                <Textarea name="note" label="Note" />
                <Button
                  size={ButtonSize.small}
                  className="self-end mt-4"
                  type="submit"
                  onClick={() => {
                    setTimeout(() => {
                      reset();
                    }, 100)
                  }}
                >
                  Add expense
                </Button>
              </>
            )}
          </Form>
        </ModalBase>
      </Inner>
    </>
  );
};
export default Home;
