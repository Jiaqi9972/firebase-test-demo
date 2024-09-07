export const dynamic = "force-dynamic";

import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
  try {
    const formData = "hello";
    const collectionRef = collection(db, "test");
    const docRef = await addDoc(collectionRef, {
      data: formData,
    });
    return new Response(JSON.stringify({ id: docRef.id }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
