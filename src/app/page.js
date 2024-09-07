"use client";

import Auth from "./components/Auth";
import SignUp from "./components/SignUp";
// import { auth } from "./config/firebase";

// The commented code adds token in the request header
export default function Home() {
  async function addData() {
    try {
      // console.log(auth.currentUser);
      // const idToken = await auth.currentUser.getIdToken();
      const response = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${idToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Post created successfully:", data);
    } catch (error) {
      console.log("Error creating post:", error);
    }
  }
  return (
    <main>
      {/* log in component */}
      <Auth />
      {/* add into database */}
      <button onClick={() => addData()}>add data</button>
      {/* sign up component */}
      <SignUp />
    </main>
  );
}
