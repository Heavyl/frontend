'use client';

import { useEffect, useState } from "react";
import Form from "@/components/ui/Forms/Form";
import Button from "@/components/ui/Buttons/Button";
import Input from "@/components/ui/Inputs/Input";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(false);

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
    useEffect(() => {
        function validatePassword() {

			if(!password){
				setMessage("");
				setDisabled(true);
			}
            if(password !== repeatPassword) {
                setMessage("Les mots de passe ne correspondent pas");
               	setDisabled(true);
            }
			if(password && password.length < 6) {
				setMessage("Le mot de passe doit contenir au moins 6 caractères");
				setDisabled(true);
			}
			if(password && password === repeatPassword && password.length >= 6) {
				setMessage("Ready to go :)");
				setDisabled(false);
			}
          }
		  validatePassword();

    },[password, repeatPassword])

  return (
    <Form onSubmit={handleRegister}>
      <Input name="pseudo"placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
      <Input name="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Input name="repeat password" placeholder="Repeat password" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
      <Button type="submit" disabled={disabled}>S’inscrire</Button>
      <p>{message}</p>
    </Form>
  );
}