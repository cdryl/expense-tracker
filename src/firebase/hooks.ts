import { useFirestoreCollectionMutation, useFirestoreDocumentDeletion, useFirestoreQuery } from "@react-query-firebase/firestore";
import { collection, doc, query } from "firebase/firestore";
import { db } from ".";

export const useSetItemToDb = (collectionName: string) => {
  const ref = collection(db, collectionName);
  const mutation = useFirestoreCollectionMutation(ref);

  return mutation;
};

export const useGetItemsFromDb = <T>(collectionName: string) => {
  const ref = query(collection(db, collectionName));
  const { data, isLoading } = useFirestoreQuery([collectionName], ref, {
    subscribe: true,
  });

  const items = data?.docs.map((snapShot) => ({
    ...snapShot.data() as T,
    id: snapShot.id,
  }));

  return {
    items,
    isLoading,
  };
};

export const useRemoveItemFromDb = (key: string, collectionName: string) => {
  const ref = collection(db, collectionName);
  const item = doc(ref, key);
  const mutation = useFirestoreDocumentDeletion(item);

  return mutation;
};
