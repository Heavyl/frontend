'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: email, password }),
      });

      const data = await res.json();
      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
        setMessage("Connexion réussie !");
        router.push("/profile"); // redirection vers le profil
      } else {
        setMessage("Erreur : " + JSON.stringify(data));
      }
    } catch (err) {
      setMessage("Erreur serveur");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Se connecter</button>
      <p>{message}</p>
    </form>
  );
}