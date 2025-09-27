"use client";

import Image from "next/image";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {
  
  useEffect(() => {
    const socket = io("http://localhost:1337"); // adresse Strapi

    socket.on("connect", () => {
      console.log("✅ Connecté au serveur :", socket.id);

      // Envoie un message de test
      socket.emit("ping-test", "Hello depuis le front !");
    });

    // Écoute la réponse
    socket.on("pong-test", (msg) => {
      console.log("📩 Réponse du serveur :", msg);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <h1>Test Socket.IO</h1>;
}
