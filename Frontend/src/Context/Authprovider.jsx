import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function Authprovider({ children }) {
  // const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(null);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setisloading(true)
    const initialAuthUser = localStorage.getItem("Users");
    setAuthUser(initialAuthUser ? JSON.parse(initialAuthUser) : null);
    setisloading(false)
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {isloading ? <div>loader</div> : children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
