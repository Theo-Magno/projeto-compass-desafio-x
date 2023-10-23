import { useContext, createContext, ReactNode } from "react";
import { User } from "firebase/auth";

interface AuthProviderProps {
  children: ReactNode;
  value: User | null | undefined;
}

const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children, value }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={value ?? null}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}
