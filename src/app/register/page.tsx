'use client';

import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: pseudo, email, password }),
      });

      const data = await res.json();
      if (data.jwt) {
        setMessage("Inscription réussie !");
        localStorage.setItem("token", data.jwt);
      } else {
        setMessage("Erreur : " + JSON.stringify(data));
      }
    } catch (err) {
      setMessage("Erreur serveur");
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <input placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
      <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">S’inscrire</button>
      <p>{message}</p>
    </form>
  );
}