import { createContext, useContext, useState } from "react";
import { USERS } from "../utils/mockAuth";

type User = { email: string, name: string, avatar: string };

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    const found = USERS.find(
      u => u.email === email && u.password === password
    );
    if (!found) return false;
    setUser({ email, name: found.name, avatar: found.avatar });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)!;
