import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


// ─── Mock credentials ───────────────────────────────────────────────────────
const MOCK_USERS = [
  { username: "admin", password: "password123", role: "admin" },
  { username: "teacher", password: "password123", role: "teacher" }
];

// ─── Types ───────────────────────────────────────────────────────────────────
interface AuthUser {
  username: string;
  role: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

// ─── Context ─────────────────────────────────────────────────────────────────
const AuthContext = createContext<AuthContextType | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────
function getStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem("cms_user");
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(getStoredUser);

  const login = (username: string, password: string): boolean => {
    const match = MOCK_USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (match) {
      const authUser: AuthUser = { username: match.username, role: match.role };
      setUser(authUser);
      localStorage.setItem("cms_user", JSON.stringify(authUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cms_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
