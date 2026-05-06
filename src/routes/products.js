import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../services/firebase";

const db = getFirestore(app);

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "productos"));

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}