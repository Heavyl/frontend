import { useState, useEffect, useCallback } from "react";
import callStrapi from "@/lib/callStrapi";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      callStrapi("/api/users/me", token)
        .then(({ ok, json }) => {
          if (ok) setUser(json);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (identifier, password) => {
    const { ok, json } = await callStrapi("/api/auth/local", null, {
      method: "POST",
      body: JSON.stringify({ identifier, password }),
    });

    if (!ok || !json.jwt) throw new Error("Erreur login");

    localStorage.setItem("token", json.jwt);
    setUser(json.user);
    return true;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
  }, []);

  return { user, loading, login, logout };
}
