import React, { createContext, useState, useEffect } from "react";

export interface User {
  id: string;
  email: string;
  username: string;
  profilePicture: string;
}

interface AuthContextData {
  user: User | null;
  logIn(user: User): void;
  logOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function logIn(user: User) {
    setUser(user);
  }

  function logOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
