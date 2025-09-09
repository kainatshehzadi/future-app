import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  role: "student" | "teacher" | "admin";
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored token on mount
    const storedToken = localStorage.getItem("fta_token");
    if (storedToken) {
      setToken(storedToken);
      // Mock user data - replace with actual API call
      setUser({
        id: "1",
        email: "student@fta.edu",
        name: "John Doe",
        role: "student"
      });
    }
    setIsLoading(false);
  }, []);

  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("fta_token", newToken);
    // Mock user data - replace with actual API call to get user info
    setUser({
      id: "1",
      email: "student@fta.edu",
      name: "John Doe",
      role: "student"
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("fta_token");
  };

  const value = {
    user,
    token,
    login,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};