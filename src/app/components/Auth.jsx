"use client";

import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// Log in
export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser.email;
      console.log("Logged in:" + user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="border">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <button onClick={() => console.log(auth.currentUser)} className="border">
        print current user info
      </button>
      <button
        onClick={() => {
          signOut(auth);
          console.log("Logged out");
        }}
        className="border"
      >
        Logout
      </button>
    </div>
  );
}
