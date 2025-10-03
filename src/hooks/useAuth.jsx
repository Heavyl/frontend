'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import callStrapi from '@/lib/callStrapi';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      callStrapi('/api/users/me', token).then(({ ok, json }) => {
        if (ok) setUser(json);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (identifier, password) => {
    const { ok, json } = await callStrapi('/api/auth/local', null, {
      method: 'POST',
      body: JSON.stringify({ identifier, password }),
    });
    if (!ok) throw new Error('Erreur login');
    localStorage.setItem('token', json.jwt);
    setUser(json.user);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => useContext(AuthContext);
export default useAuth;
