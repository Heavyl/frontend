'use client';

import { useState } from "react";
import Form from "@/components/ui/Forms/Form";
import Button from "@/components/ui/Buttons/Button";
import Input from "@/components/ui/Inputs/Input";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
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
    function validateForm() {
        
    }

  return (
    <Form onSubmit={handleRegister}>
      <Input placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
      <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Input placeholder="Repeat password" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
      <Button type="submit" disabled= {password != repeatPassword ? true : false}>S’inscrire</Button>
      <p>{message}</p>
    </Form>
  );
}