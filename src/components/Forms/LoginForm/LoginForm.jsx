
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Forms/Form";
import Input from "@/components/ui/Inputs/Input";
import Button from "@/components/ui/Buttons/Button";
import Title from "@/components/ui/Titles/Title";
import Message from "../Message/Message";
import useAuth from '@/hooks/useAuth';


export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const auth = useAuth();
    const router = useRouter();

    async function handleLogin(e) {
        e.preventDefault(); 
        setMessage("");     

        try {
            const success = await auth.login(email, password); 
            if (success) {
                router.push("/profile"); 
            } else {
                setMessage("Email ou mot de passe incorrect");
            }
        } catch (err) {
            setMessage("Erreur lors de la connexion");
            console.error(err);
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