import { collection, doc, query } from "firebase/firestore";
import { db } from "../../firebase";
import {
  useFirestoreCollectionMutation,
  useFirestoreDocumentDeletion,
  useFirestoreQuery,
} from "@react-query-firebase/firestore";

export const useGetExpensesFromDb = () => {
  const ref = query(collection(db, "expenses"));
  const { data, isLoading } = useFirestoreQuery(["expenses"], ref, {
    subscribe: true,
  });

  const expenses = data?.docs.map((snapShot) => ({
    ...snapShot.data(),
    id: snapShot.id,
  }));

  return {
    expenses,
    isLoading,
  };
};

export const useSetExpensesToDb = () => {
  const ref = collection(db, "expenses");
  const mutation = useFirestoreCollectionMutation(ref);

  return mutation;
};

export const useRemoveExpenseFromDb = (key: string) => {
  const ref = collection(db, "expenses");
  const item = doc(ref, key);
  const mutation = useFirestoreDocumentDeletion(item);

  return mutation;
};
