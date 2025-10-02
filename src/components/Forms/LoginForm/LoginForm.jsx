
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/Forms/Form";
import Input from "@/components/ui/Inputs/Input";
import Button from "@/components/ui/Buttons/Button";
import Title from "@/components/ui/Titles/Title";
import Message from "../Message/Message";


export default function LoginForm() {

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
        <div>
        <Title heading="h1" className="text-center">Login</Title>
        <Form onSubmit={handleLogin} >
            <Input name="email"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input name="password" placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Se connecter</Button>
            <Message>{message}</Message>
        </Form>
        </div>
    );
}